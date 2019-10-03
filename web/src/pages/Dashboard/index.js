import React, { useState, useEffect } from 'react';
import { MdHighlightOff } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Button,
  List,
  Title,
  Date,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  function hanldeNewMeetup() {
    history.push('/new-meetup');
  }

  function handleDetails(meetup) {
    history.push('/meetup-details', { meetup });
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        formatedDate: format(parseISO(meetup.date), "d 'de' MMMM, 'às' HH'h'", {
          locale: pt,
        }),
      }));
      setMeetup(data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Button onClick={hanldeNewMeetup}>Novo meetup</Button>
      </header>
      <ul>
        {meetup.map(meetup => (
          <List key={meetup.id} onClick={() => handleDetails(meetup)}>
            <Title>
              <p>{meetup.title}</p>
            </Title>
            <Date>
              <span>{meetup.formatedDate}</span>
              <MdHighlightOff size={26} color="#fff" />
            </Date>
          </List>
        ))}
      </ul>
    </Container>
  );
}
