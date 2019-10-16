import React, { useEffect, useState, useMemo } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO, isBefore, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, DateSelect, DateButton, DateFormatted, List, Text } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';
import Loading from '~/components/Loading';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [refreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(false);

  async function loadMeetups(selectedPage = 1) {
    if (selectedPage > 1 && !hasMorePages) return;

    const response = await api.get('meetups', {
      params: { date, page: selectedPage },
    });

    setMeetups(
      selectedPage > 1
        ? [...meetups, ...response.data]
        : response.data
    );
    setHasMorePages(response.data.totalPages > selectedPage);
    setPage(selectedPage);
    setLoading(false);
  }

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      loadMeetups();
    }
  }, [isFocused, date]); // eslint-disable-line

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM yyyy", { locale: pt }),
    [date]
  );

  // useEffect(() => {
  //   async function loadMeetups() {
  //     const response = await api.get('meetups', {
  //       params: { date },
  //     });

  //     const data = response.data.map(meetup => ({
  //       ...meetup,
  //       past: isBefore(parseISO(meetup.date), new Date()),
  //       // defaultDate: meetup.date,
  //       date: format(parseISO(meetup.date), "dd 'de' MMMM',' 'às' HH'h'", {
  //         locale: pt,
  //       }),
  //     }));

  //     setMeetups(data);
  //   }
  //   loadMeetups();
  // }, []);

  async function handleSubscribe(id) {
    try {
      await api.post(`subscriptions/${id}`);
      Alert.alert(
        'Sucesso :)',
        'Inscrição realizada com sucesso!',
      );
    } catch (error) {
      Alert.alert(
        'Erro :(',
        'Falha ao realizar inscrição',
      );
    }
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
                  // onSubscribe={() => handleSubscribe(item.id)}
                  // file={item.file.url}
                  // title={item.title}
                  // date={item.dateFormatted}
                  // location={item.location}
                  // user={item.user.name}
                  // past={item.past}
                  handleSubscribe={() => handleSubscribe(item.id)}
                />
              )}
              onRefresh={loadMeetups}
              refreshing={refreshing}
              onEndReached={() => loadMeetups(page + 1)}
              onEndReachedThreshold={0.2}
            />
         ) : (
          <Text>Não foi encontrado nenhum Meetup cadastrado para este dia :(</Text>
        ))}

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


export default withNavigationFocus(Dashboard);
