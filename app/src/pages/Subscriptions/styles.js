import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Text = styled.Text`
  color: #999;
  font-size: 18px;
  text-align: center;
  line-height: 26px;
  margin: 30px;
`;
