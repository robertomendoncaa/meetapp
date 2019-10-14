import React, {  useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdDeleteForever, MdInsertInvitation, MdPlace, MdLoyalty } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { cancelMeetupRequest, subscribeMeetupRequest } from '~/store/modules/meetup/actions';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Button, Banner, Content } from './styles';

export default function MeetupDetails({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);
  const dispatch = useDispatch();
  const meetup = meetups.find(m => m.id === meetupId);
  const userId = useSelector(store => store.user.profile.id);


  function handleEdit() {
    history.push(`/meetup-edit/${meetupId}`);
  }

  async function handleCancel() {
    try {
      dispatch(cancelMeetupRequest(meetupId));
    } catch (error) {
      toast.error('Erro ao cancelar meetup');
    }
  }

  async function handleSubscribe() {
    try {
      dispatch(subscribeMeetupRequest(meetupId));
      // if (subscriber) {
      //   await api.post(`subscriptions/${id}`);
      //   toast.success(`Inscrição realizada com sucesso no meetup: ${meetup.title}`);
      // } else {
      //   await api.delete(`subscriptions/${id}`);
      //   toast.warn(`Você não está mais inscrito no meetup: ${meetup.title}`);
      // }
    } catch (error) {
      toast.error('Erro ao se inscrever no meetup');
    }
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
          <div className="btn">
            <Button type="button" className="btn-blue" onClick={handleEdit}>
              <MdEdit size={20} color="#fff" /> Editar
            </Button>
            <Button type="button" className="btn-red" onClick={handleCancel}>
              <MdDeleteForever size={20} color="#fff" /> Cancelar
            </Button>
          </div>
      </header>
      <Content>
        <Banner>
          <img src={meetup.file.url} alt={meetup.title} />
        </Banner>
        <div className="description">{meetup.description}</div>
        <div>
          <div className="info">
            <MdInsertInvitation size={20} color="#fff" />
            <span>{meetup.formattedDate}</span>

            <MdPlace size={20} color="#fff" />
            <span>{meetup.location}</span>
          </div>

          <div>
            {!meetup.canceled_at &&
              !meetup.past &&
              (meetup.user.id !== userId ? (
                  <Button
                    className="btn-green"
                    onClick={() => handleSubscribe(true)}
                    type="button"
                  >
                    <MdLoyalty size={20} color="#fff" />
                    Inscrever-se
                  </Button>
                ) : (
                  <Button
                    className="btn-red"
                    onClick={() => handleSubscribe(false)}
                    type="button"
                  >
                    <MdLoyalty size={20} color="#fff" />
                    Cancelar inscrição
                  </Button>
                ))}
            </div>

        </div>
      </Content>
    </Container>
  );
}

MeetupDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
