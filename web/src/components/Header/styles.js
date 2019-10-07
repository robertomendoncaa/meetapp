import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #191620;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #333;
    }

    a {
      /* font-weight: bold; */
      color: #fff;

      &:hover {
        opacity: 0.8;
        transition: opacity 0.2s;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #333;

  div {
    text-align: right;
    margin-right: 15px;
    margin-top: 5px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }

  button {
    margin: 0 15px;
    background: #F94D6A;
    padding: 0 20px;
    border: 0;
    border-radius: 4px;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#F94D6A')};
    }
  }
`;
