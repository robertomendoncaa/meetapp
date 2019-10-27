import React, { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import { cancelSubscriptionRequest } from '~/store/modules/meetup/actions';

import { Container, List, Text } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import Loading from '~/components/Loading';

function Subscriptions({ isFocused }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [refreshing] = useState(false);
  const [meetups, setMeetups] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');
    const subscriptions = response.data.map(subs => ({
      ...subs.meetup,
      formattedDate: format(
        parseISO(subs.meetup.date),
        "d 'de' MMMM 'de' yyyy 'às' HH:mm",
        { locale: pt }
      ),
    }));
    setMeetups(subscriptions);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadSubscriptions();
    }
  }, [isFocused]);


  async function handleCancel(id) {
    // dispatch(cancelSubscriptionRequest(id));
    try {
      await api.delete(`subscriptions/${id}`);
      Alert.alert('Sucesso', 'Sua inscrição foi cancelada');
      loadSubscriptions();
    } catch (error) {
      Alert.alert('Error', 'Falha ao cancelar inscrição');
    }
  }


  return (
    <Background>
      <Container>
        <Header />

        {loading && <Loading />}

        {!loading &&
          (meetups.length ? (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                data={item}
                handleCancel={() => handleCancel(item.id)}
              />
            )}
            onRefresh={loadSubscriptions}
            refreshing={refreshing}
          />
        ) : (
          <Text>Você ainda não está inscrito em nenhum Meetup</Text>
        ))}

      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={26} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
