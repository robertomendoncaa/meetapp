import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: flex-end;

    input,
    textarea {
      width: 100%;
      min-width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      resize: none;
      height: 200px;
      padding: 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px 5px;
      font-weight: bold;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      margin: 5px 0 0;
      height: 44px;
      background: #d44059;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#d44059')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
