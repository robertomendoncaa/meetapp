import React from 'react';

import { Container, Logo } from './styles';
import logo from '~/assets/logo.png';

export default function() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
