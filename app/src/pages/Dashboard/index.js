import React from 'react';
// import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, List } from './styles';

import Background from '~/components/Background'
import Header from '~/components/Header'
import Meetup from '~/components/Meetup'

const meetups = [1, 2, 3, 4, 5];

export default function Dashboard() {

  // async function handleSubscribe() {}

  return (
    <Background>
      <Header />
      <Container>
        {/* <Title>Dashboard</Title> */}

        <List
          data={meetups}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Meetup
              data={item}
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
