import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;

  opacity: ${props => (props.past ? 0.7 : 1)};
`;
export const Banner = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 140px;
  align-content: stretch;
`;
export const Info = styled.View`
  flex-direction: column;
  padding: 10px;
  margin-left: 15px;
`;
export const Title = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #444;
`;
export const Date = styled.Text`
  margin-top: 7px;
  font-size: 13;
  color: #999;
`;
export const Location = styled.Text`
  margin-top: 5px;
  font-size: 13;
  color: #999;
`;
export const Organizer = styled.Text`
  margin-top: 5px;
  font-size: 14;
  /* font-weight: bold; */
  color: #999;
`;
export const ButtonSubscribe = styled.TouchableOpacity`
  height: 42px;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  align-self: stretch;
  align-items: center;
  background: green;

  /* disabled */
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
