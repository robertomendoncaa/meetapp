import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLoyalty, MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';

import { fetchMeetupRequest } from '~/store/modules/meetup/actions';

import history from '~/services/history';

import { Container, Button, List, Title, Date } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  // const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      try {
        dispatch(fetchMeetupRequest());
      } catch (error) {
        toast.error('Erro ao carregar meetups');
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
          <MdAddCircleOutline size={20} color="#fff" /> Novo meetup
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
              <MdLoyalty size={26} color="#ffff" />
            </Date>
          </List>
        ))}
      </ul>
    </Container>
  );
}
