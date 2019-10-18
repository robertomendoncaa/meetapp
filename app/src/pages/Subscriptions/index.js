import React, { useState, useEffect }  from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, List, Text } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import Loading from '~/components/Loading';

function Subscriptions({ isFocused }) {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadSubscriptions() {
    setLoading(true);

    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
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
          (subscriptions.length ? (
          <List
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                data={item.meetup}
                handleCancel={() => handleCancel(item.id)}
              />
            )}
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
