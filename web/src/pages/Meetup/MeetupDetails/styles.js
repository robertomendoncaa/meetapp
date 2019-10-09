import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  padding: 30px 0 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;

  .loading {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn {
      display: flex;
    }

    strong {
      color: #fff;
      font-size: 32px;
    }
  }
`;

export const Button = styled.button`
  align-items: center;
  color: #fff;
  border: 0;
  border-radius: 4px;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 44px;
  justify-content: space-between;
  margin: 5px 10px;
  padding: 0 20px;
  transition: background 0.2s;

  svg {
    margin-right: 10px;
  }

  &.btn-edit {
    background: #4dbaf9;

    &:hover {
      background: ${darken(0.09, '#4DBAF9')};
    }
  }

  &.btn-cancel {
    background: #d44059;

    &:hover {
      background: ${darken(0.09, '#D44059')};
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;

  .description {
    font-size: 18px;
    line-height: 50px;
  }

  > div {
    align-items: center;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;

    .info {
      display: flex;
      align-items: center;
      font-size: 16px;

      span {
        margin-right: 30px;
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Banner = styled.div`
  align-self: stretch;
  border-radius: 10px;

  img {
    width: 100%;
    border-radius: 4px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

