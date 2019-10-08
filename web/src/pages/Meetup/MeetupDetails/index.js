import React, { useState, useEffect } from 'react';
import { MdEdit, MdDeleteForever, MdInsertInvitation, MdPlace } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Button, Banner, Content } from './styles';

export default function MeetupDetails({ match }) {
  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = match.params;

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetup-details/${id}`);
        setMeetup({
          ...response.data.meetup,
          // subscriptions: response.data.subscriptions,
          formattedDate: format(
            parseISO(response.data.meetup.date),
            "dd/MM/Y - HH'h'mm"
          ),
        });

        setLoading(false);
      } catch (err) {
        // toast.error('Meetup not found');

        // history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleCancel() {

  }

  function handleEdit() {
    // history.push(`/edit-meetup/${meetup.id}`, { meetup }); // passar ID do meetup
    history.push(`/edit-meetup/`);
  }

  return (
    <Container>
      {/* {loading ? (
        <div className="loading">
          <Loader type="TailSpin" color="#9a68ed" width={32} height={32} />
        </div>
        ) : ( */}
        <header>
          {/* <strong>Meetup</strong> */}
          <strong>{meetup.title}</strong>
            <div className="btn">
              <Button type="button" className="btn-edit" onClick={handleEdit}>
                <MdEdit size={20} color="#fff" /> Editar
              </Button>
              <Button type="button" className="btn-cancel" onClick={handleCancel}>
                <MdDeleteForever size={20} color="#fff" /> Cancelar
              </Button>
            </div>
        </header>
        <Banner>
          <img src={require('../../../assets/meetup.jpg')} alt="banner" />
        </Banner>
        <Content>
          <div className="description">Meetup Criciuma Dev React Native</div>
          <div>
            <div className="info">
              <MdInsertInvitation size={20} color="#fff" />
              <span>10 de Outubro de 2019</span>

              <MdPlace size={20} color="#fff" />
              <span>Criciuma, SC</span>
            </div>
          </div>
        </Content>
      {/* )} */}
    </Container>
  );
}
