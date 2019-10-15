import React from 'react';
// import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title } from './styles';

import Background from '~/components/Background'
import Header from '~/components/Header'

export default function Dashboard() {
  return (
    <Background>
      <Header />
      <Container>
        <Title>Dashboard</Title>
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
