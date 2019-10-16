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
} from './styles';

export default function Meetup({ data, handleSubscribe }) {
  return (
    <Container past={data.past}>
      <Banner source={{ uri: data.file.url }} />

      <Info>
        <Title>{data.title}</Title>
        <Date>
          <Icon name="event" size={14} color="#999" />
          {/* {data.formattedDate} */}
            {format(
              parseISO(data.date),
              " d' de' MMMM yyyy', às' HH'h",
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

      {!data.past ? (
        <ButtonSubscribe onPress={handleSubscribe}>
          <ButtonText>Inscrever-se</ButtonText>
        </ButtonSubscribe>
      ) : (
        <ButtonSubscribe style={{backgroundColor: '#F94D6A'}}>
          <ButtonText>Encerrado</ButtonText>
        </ButtonSubscribe>
      )}
    </Container>
  );
}
