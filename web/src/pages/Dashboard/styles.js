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
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin: 5px 10px;
  padding: 0 20px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #F94D6A;
  transition: background 0.2s;

  svg {
    margin-right: 10px;
  }

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
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.2s;

  opacity: ${props => (props.past ? 0.5 : 1)};

  &:hover {
    background: ${lighten(0.5, 'rgba(0, 0, 0, 0.1)')};
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #999;
    margin-right: 20px;
  }
`;
