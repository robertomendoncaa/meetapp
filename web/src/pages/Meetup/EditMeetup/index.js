import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { zonedTimeToUtc } from 'date-fns-tz';

import ImageInput from '~/components/ImageInput';
import DatePicker from '~/components/DatePicker';

import { editMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required(),
  title: Yup.string().required('Insira o título do meetup'),
  description: Yup.string().required('Descreva o seu meetup'),
  date: Yup.date().required('Insira uma data'),
  location: Yup.string().required('Insira o local'),
});

export default function EditMeetup({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);
  const dispatch = useDispatch();

  const meetupFind = meetups.find(m => m.id === meetupId);

  const currentMeetup = {
    title: meetupFind.title,
    description: meetupFind.description,
    date: zonedTimeToUtc(meetupFind.defaultDate),
    location: meetupFind.location,
    banner: {
      url: meetupFind.banner.url,
      id: meetupFind.banner.id,
      path: meetupFind.banner.path,
    },
  };

  function handleSubmit({ banner_id, title, description, date, location }) {
    dispatch(
      editMeetupRequest(meetupId, banner_id, title, description, date, location)
    );
  }

  return (
    <Container>
      <Form schema={schema} initialData={currentMeetup} onSubmit={handleSubmit}>
        <ImageInput name="banner_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit" onClick={handleSubmit}>
          <MdAddCircleOutline size={20} /> Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

EditMeetup.propTypes = {
  match: PropTypes.shape().isRequired,
};
