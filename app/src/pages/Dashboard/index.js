import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, List } from './styles';

import api from '~/services/api';

import Background from '~/components/Background'
import Header from '~/components/Header'
import Meetup from '~/components/Meetup'

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      setMeetups(response.data);
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

  return (
    <Background>
      <Header />
      <Container>
        {/* <Title>Dashboard</Title> */}


        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              data={item}
              onSubscribe={() => handleSubscribe(item.id)}
              // file={item.file}
              // title={item.title}
              // date={item.date}
              // location={item.location}
              // past={item.past}
              // handleSubscribe={() => handleSubscribe(item.id)}
            />
          )}
        />

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
