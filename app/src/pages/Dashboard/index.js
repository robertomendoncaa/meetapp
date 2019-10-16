import React, { useEffect, useState, useMemo } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO, isBefore, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, DateSelect, DateButton, DateFormatted, List, Text } from './styles';

import api from '~/services/api';

import Background from '~/components/Background'
import Header from '~/components/Header'
import Meetup from '~/components/Meetup'

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: { date },
      });

      const data = response.data.map(meetup => ({
        ...meetup,
        past: isBefore(parseISO(meetup.date), new Date()),
        // defaultDate: meetup.date,
        date: format(parseISO(meetup.date), "dd 'de' MMMM',' 'às' HH'h'", {
          locale: pt,
        }),
      }));

      setMeetups(data);
    }
    loadMeetups();
  }, []);

  async function handleSubscribe(id) {
    try {
      await api.post(`subscriptions/${id}`);
      Alert.alert(
        'Sucesso :)',
        'Inscrição realizada com sucesso!',
      );
    } catch (err) {
      Alert.alert(
        'Erro :(',
        'Falha ao realizar inscrição',
      );
    }
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <Header />

        <DateSelect>
          <DateButton onPress={handlePrevDay}>
            <Icon name="chevron-left" size={36} color="#fff" />
          </DateButton>
          <DateFormatted>{dateFormatted}</DateFormatted>
          <DateButton onPress={handleNextDay}>
            <Icon name="chevron-right" size={36} color="#fff" />
          </DateButton>
        </DateSelect>

        {/* {meetups.length ? ( */}
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                data={item}
                // onSubscribe={() => handleSubscribe(item.id)}
                // file={item.file.url}
                // title={item.title}
                // date={item.dateFormatted}
                // location={item.location}
                // user={item.user.name}
                // past={item.past}
                handleSubscribe={() => handleSubscribe(item.id)}
              />
            )}
          />
        {/* ) : (
          <Text>Nenhum meetup cadastrado para este dia :/</Text>
        )} */}

      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
