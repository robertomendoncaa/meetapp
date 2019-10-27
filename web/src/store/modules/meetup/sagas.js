import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import {
  loadMeetupSuccess,
  failureMeetup,
  newMeetupSuccess,
  cancelMeetupSuccess,
} from './actions';

export function* loadMeetup() {
  try {
    const response = yield call(api.get, 'meetups');
    // const response = yield call(api.get, 'organizing');

    const meetups = response.data.map(meetup => ({
      ...meetup,
      defaultDate: meetup.date,
      formattedDate: format(parseISO(meetup.date), "d 'de' MMMM',' 'às' HH'h'", {
        locale: pt,
      }),
    }));

    yield put(loadMeetupSuccess(meetups));
  } catch (error) {

    toast.error('Erro ao listar meetups');

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

    toast.success('Meetup criado com sucesso');
    yield put(newMeetupSuccess());
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao cadastrar o meetup, verifique seus dados!');
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);
    toast.success('Meetup cancelado com sucesso');
    yield put(cancelMeetupSuccess());
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao cancelar, verifique seus dados, apenas organizadores podem cancelar o meetup');
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

    toast.success('Meetup editado com sucesso');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao atualizar, verifique seus dados, apenas organizadores podem editar o meetup');
  }
}

export default all([
  takeLatest('@meetup/LOAD_MEETUPS_REQUEST', loadMeetup),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', newMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
]);
