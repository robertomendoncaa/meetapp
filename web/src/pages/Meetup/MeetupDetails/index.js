import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit, MdDeleteForever, MdInsertInvitation, MdPlace } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

import history from '~/services/history';

import { Container, Button, Banner, Content } from './styles';

export default function MeetupDetails({ match }) {
  const meetupId = Number(match.params.id);
  const meetups = useSelector(state => state.meetup.meetups);
  // const [meetup, setMeetup] = useState(null);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const meetup = meetups.find(m => m.id === meetupId);

  async function handleCancel() {
    try {
      dispatch(cancelMeetupRequest(meetupId));
    } catch (error) {
      toast.error('Houve um erro ao cancelar o meetup');
    }
  }

  function handleEdit() {
    history.push(`/meetup-edit/${meetupId}`);
  }

  return (
    <Container>
      <header>
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
      <Content>
        <Banner>
          <img src={meetup.banner.url} alt="banner" />
        </Banner>
        <div className="description">{meetup.description}</div>
        <div>
          <div className="info">
            <MdInsertInvitation size={20} color="#fff" />
            <span>{meetup.formattedDate}</span>

            <MdPlace size={20} color="#fff" />
            <span>{meetup.location}</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}

MeetupDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
