import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 30px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    strong {
      color: #fff;
      font-size: 32px;
      font-family: 'Roboto';
      opacity: 0.9;
    }
  }
`;

export const Button = styled.button`
  height: 40px;
  margin: 5px 0 0;
  padding: 0 30px;
  align-self: flex-end;
  background: #F94D6A;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#F94D6A')};
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 20px 30px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    background: ${lighten(0.08, 'rgba(0, 0, 0, 0.1)')};
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  opacity: 0.9;

  p {
    margin: 0 8px;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #999;
    margin-right: 20px;
  }
`;
