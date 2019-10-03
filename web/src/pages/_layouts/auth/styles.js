import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    span {
      color: #cc0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      background: #D44059;
      color: #fff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#D44059')};
      }
    }

    a {
      margin-top: 15px;
      color: #fff;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
