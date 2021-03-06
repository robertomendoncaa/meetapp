import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { subscribeMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, DateSelect, DateButton, DateFormatted, List, Text } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import Loading from '~/components/Loading';

function Dashboard({ isFocused }) {
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [refreshing] = useState(false);
  const [page, setPage] = useState(1);

  const dateFormatted = useMemo(
    () => format(date, "d' de' MMMM yyyy", { locale: pt }),
    [date]
  );

  async function loadMeetups(selectedPage = 1) {
    const response = await api.get('meetups', {
      params: { date, page: selectedPage },
    });

    setMeetups(
      selectedPage > 1
        ? [...meetups, ...response.data]
        : response.data
    );
    setPage(selectedPage);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadMeetups();
    }
  }, [isFocused, date]);

  async function handleSubscribe(id) {
    dispatch(subscribeMeetupRequest(id));
    // try {
    //   await api.post(`subscriptions/${id}`);
    //   Alert.alert(
    //     'Sucesso :)',
    //     'Inscrição realizada com sucesso!',
    //   );
    // } catch (error) {
    //   Alert.alert(
    //     'Erro :(',
    //     'Falha ao realizar inscrição',
    //   );
    // }
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <Header />

        <DateSelect>
          <DateButton onPress={handlePrevDay}>
            <Icon name="chevron-left" size={50} color="#fff" />
          </DateButton>
          <DateFormatted>{dateFormatted}</DateFormatted>
          <DateButton onPress={handleNextDay}>
            <Icon name="chevron-right" size={50} color="#fff" />
          </DateButton>
        </DateSelect>

        {loading && <Loading />}

        {!loading &&
          (meetups.length ? (
            <List
              data={meetups}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Meetup
                  data={item}
                  handleSubscribe={() => handleSubscribe(item.id)}
                />
              )}
              onRefresh={loadMeetups}
              refreshing={refreshing}
              onEndReached={() => loadMeetups(page + 1)}
              onEndReachedThreshold={0.2}
            />
         ) : (
          <Text>Não foi encontrado nenhum Meetup cadastrado para este dia</Text>
        ))}

      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={26} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
