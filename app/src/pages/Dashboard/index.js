import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';
import Background from '~/components/Background'

export default function Dashboard() {
  return (
    <Background>
      <Text style={{color:'#fff'}}>Dashboard</Text>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
