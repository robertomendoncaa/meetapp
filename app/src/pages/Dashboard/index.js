import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
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

  // async function handleSubscribe() {}

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
              // file={item.file}
              // title={item.title}
              // date={item.dateParsed}
              // location={item.location}
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
