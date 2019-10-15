import React from 'react';
// import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Banner, Info, Title, Date, Location, Organizer, ButtonSubscribe, ButtonText } from './styles';

export default function Meetup() {
  return (
    <Container>
      <Banner source={require('../../assets/meetup.jpg')} />

      <Info>
        <Title>Meetup React Native</Title>
        <Date>
          <Icon name="event" size={14} color="#999" /> 10 de Novembro, às 20h
        </Date>
        <Location>
          <Icon name="location-on" size={14} color="#999" /> Florianópolis, SC
        </Location>
        <Organizer>Organizador: Rocketseat!</Organizer>
      </Info>

      <ButtonSubscribe>
        <ButtonText>Inscrever-se</ButtonText>
      </ButtonSubscribe>
    </Container>
  );
}
