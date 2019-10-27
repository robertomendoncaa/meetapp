import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import {
  loadMeetupSuccess,
  failureMeetup,
  newMeetupSuccess,
  cancelMeetupSuccess,
  subscribeMeetupSuccess,
  cancelSubscriptionSuccess
} from './actions';

export function* loadMeetup() {
  try {
    const response = yield call(api.get, 'meetups');

    const meetups = response.data.map(meetup => ({
      ...meetup,
      defaultDate: meetup.date,
      formattedDate: format(parseISO(meetup.date), "d 'de' MMMM',' 'às' HH'h'", {
        locale: pt,
      }),
    }));

    yield put(loadMeetupSuccess(meetups));
  } catch (error) {

    Alert.alert('Erro :(', 'Falha ao listar meetups');

    yield put(failureMeetup());
  }
}

export function* newMeetup({ payload }) {
  try {
    const { file_id, title, description, date, location } = payload;

    yield call(api.post, 'meetups', {
      file_id,
      title,
      description,
      date,
      location,
    });

    Alert.alert('Sucesso :)', 'Meetup criado com sucesso');

    yield put(newMeetupSuccess());

    history.push('/dashboard');
  } catch (error) {
    Alert.alert('Erro :(', 'Falha ao cadastrar o meetup, verifique seus dados!');
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);

    Alert.alert('Sucesso :)', 'Meetup cancelado com sucesso');

    yield put(cancelMeetupSuccess());

    history.push('/dashboard');
  } catch (error) {
    Alert.alert('Erro :(', 'Falha ao cancelar o meetup, verifique seus dados!');
  }
}

export function* editMeetup({ payload }) {
  try {
    const { id, file_id, title, description, date, location } = payload;

    const meetup = {
      id,
      title,
      description,
      date,
      location,
      file_id,
    };

    yield call(api.put, `meetups/${id}`, meetup);

    Alert.alert('Sucesso :)', 'Meetup editado com sucesso');

    history.push('/dashboard');
  } catch (error) {
    Alert.alert('Erro :(', 'Falha ao atualizar, verifique seus dados!');
  }
}

export function* subscribeMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.post, `subscriptions/${id}`);
    Alert.alert('Sucesso :)', 'Inscrição realizada com sucesso');

    yield put(subscribeMeetupSuccess());

  } catch (error) {
    Alert.alert('Erro :(', 'Falha ao realizar inscrição');
  }
}

export function* cancelSubscription({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `subscriptions/${id}`);
    Alert.alert('Sucesso', 'Inscrição cancelada com sucesso');

    yield put(cancelSubscriptionSuccess());

  } catch (error) {
    Alert.alert('Erro', 'Falha ao cancelar inscrição');
  }
}

export default all([
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetup),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/SUBSCRIBE_MEETUP_REQUEST', subscribeMeetup),
  takeLatest('@meetup/CANCEL_SUBSCRIPTION_REQUEST', cancelSubscription),
]);
