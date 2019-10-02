import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  }

  button {
    float: right;
    margin: 10px 0;
    padding: 0 50px;
    height: 44px;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    background: #F94D6A;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#F94D6A')};
    }
  }
`;
