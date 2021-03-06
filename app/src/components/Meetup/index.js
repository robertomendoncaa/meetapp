import React from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Info,
  Title,
  Date,
  Location,
  Organizer,
  ButtonSubscribe,
  ButtonText,
  CancelButton
} from './styles';

export default function Meetup({ data, handleSubscribe, handleCancel }) {
  return (
    <Container past={data.past}>
      <Banner source={{ uri: data.file.url }} />

      <Info>
        <Title>{data.title}</Title>
        <Date>
          <Icon name="event" size={14} color="#999" />
            {format(parseISO(data.date), " d' de' MMMM yyyy', às' HH:mm'h",
              { locale: pt }
            )}
        </Date>
        <Location>
          <Icon name="location-on" size={14} color="#999" /> {data.location}
        </Location>
        <Organizer>
          <Icon name="person" size={16} color="#999" /> Organizador: {data.user.name}
        </Organizer>
      </Info>

      {handleSubscribe && !data.past && (
        <ButtonSubscribe onPress={handleSubscribe}>
          <ButtonText>Inscrever-se</ButtonText>
        </ButtonSubscribe>
      )}

      {handleCancel && (
        <CancelButton onPress={handleCancel}>
          <ButtonText>Cancelar Inscrição</ButtonText>
        </CancelButton>
      )}

    </Container>
  );
}
