import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Banner, Info, Title, Date, Location, Organizer, ButtonSubscribe, ButtonText } from './styles';

export default function Meetup({ data }) {

  // const dateParsed = useMemo(() => {
  //   return formatRelative(parseISO(data.date), new Date(), {
  //     locale: pt,
  //     addSuffix: true,
  //   });
  // },
  // [data.date]);

  return (
    <Container past={data.past}>
      <Banner source={{ uri: data.file.url }} />

      <Info>
        <Title>{data.title}</Title>
        <Date>
          <Icon name="event" size={14} color="#999" /> {data.date}
        </Date>
        <Location>
          <Icon name="location-on" size={14} color="#999" /> {data.location}
        </Location>
        <Organizer>Organizador: {data.user.name}</Organizer>
      </Info>

      {!data.past ? (
        <ButtonSubscribe>
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
