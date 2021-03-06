import styled from 'styled-components/native';

export const Container = styled.SafeAreaView.attrs({
  elevation: 1,
})`
  /* background: rgba(0, 0, 0, 0.4); */
  background: #111;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  width: 23px;
  height: 24px;
`;
