import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLoyalty, MdAddCircleOutline, MdChevronLeft, MdChevronRight, MdHighlightOff } from 'react-icons/md';
import { toast } from 'react-toastify';

import { loadMeetupRequest } from '~/store/modules/meetup/actions';

import history from '~/services/history';

import { Container, Button, List, Title, Date, Pagination } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  // const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      try {
        dispatch(loadMeetupRequest());
      } catch (error) {
        toast.error('Erro ao carregar meetups');
      }
    }

    loadMeetup();
  }, [dispatch]);

  function hanldeNewMeetup() {
    history.push('/meetup/new');
  }

  function handleDetails(meetup) {
    history.push(`/meetup/${meetup.id}/details`);
  }

  return (
    <Container>
      <header>
        <strong>Meetups</strong>
        <Button onClick={hanldeNewMeetup}>
          <MdAddCircleOutline size={20} color="#fff" /> Novo meetup
        </Button>
      </header>

      {meetups.length > 0 ? (
        <ul>
          {meetups.map(meetup => (
            <List key={meetup.id} onClick={() => handleDetails(meetup)} past={meetup.past}>
              <Title>
                <strong>{meetup.title}</strong>
              </Title>
              <Date>
                <span>{meetup.formattedDate}</span>
                <MdLoyalty size={26} color="#fff" />
              </Date>
            </List>
          ))}
        </ul>
      ) : (
        <p>
          <MdHighlightOff size={32} color="#F94D6A" />
          Não foi encontrado nenhum Meetup cadastrado
        </p>
      )}

      <Pagination>
        <Button>
          <MdChevronLeft size={30} color="#fff" />
        </Button>
        <Button>
          <MdChevronRight size={30} color="#fff" />
        </Button>
      </Pagination>
    </Container>
  );
}
