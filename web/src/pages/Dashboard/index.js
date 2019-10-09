import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdHighlightOff, MdLoyalty } from 'react-icons/md';
import { toast } from 'react-toastify';

import { fetchMeetupRequest } from '~/store/modules/meetup/actions';

import history from '~/services/history';

import { Container, Button, List, Title, Date } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  // const [meetups, setMeetups] = useState([]);

  // useEffect(() => {
  //   async function loadMeetups() {
  //     const response = await api.get('meetups');

  //     const data = response.data.map(meetup => ({
  //       ...meetup,
  //       formattedDate: format(parseISO(meetup.date), "d 'de' MMMM, 'às' HH'h'", {
  //         locale: pt,
  //       }),
  //     }));

  //     setMeetups(data);
  //   }

  //   loadMeetups();
  // }, [meetups]);

  useEffect(() => {
    async function loadMeetup() {
      try {
        dispatch(fetchMeetupRequest());
      } catch (error) {
        toast.error('Houve um erro ao carregar os meetups');
      }
    }

    loadMeetup();
  }, [dispatch]);

  function hanldeNewMeetup() {
    history.push('/meetup-new');
  }

  function handleDetails(meetup) {
    history.push(`/meetup-details/${meetup.id}`);
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Button onClick={hanldeNewMeetup}>
          <MdLoyalty size={20} color="#fff" /> Novo meetup
        </Button>
      </header>
      <ul>
        {meetups.map(meetup => (
          <List key={meetup.id} onClick={() => handleDetails(meetup)} past={meetup.past}>
            <Title>
              <strong>{meetup.title}</strong>
            </Title>
            <Date>
              <span>{meetup.formattedDate}</span>
              <MdHighlightOff size={26} color="#ffff" />
            </Date>
          </List>
        ))}
      </ul>
    </Container>
  );
}
