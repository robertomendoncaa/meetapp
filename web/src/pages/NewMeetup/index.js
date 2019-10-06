import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container } from './styles';

export default function NewMeetup({ history }) {

  async function handleSubmit(data) {
    try {
      const response = await api.post('meetups', data);
      const { id } = response.data;

      history.push(`/meetup-details/${id}`);
    } catch (err) {
      toast.error('Error' || 'Internal error!');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" />
        <Input name="date" type="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">Salvar Meetup</button>
      </Form>
    </Container>
  );
}
