import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'meetup'],
    },
    reducers
  );

  return persistedReducer;
};
