import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const DateSelect = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DateButton = styled.TouchableOpacity``;

export const DateFormatted = styled.Text`
  margin: 0 15px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Text = styled.Text`
  margin: 0 15px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
