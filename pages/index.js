import React from 'react';
import { withRedux } from '../src/redux';
import InfoBoard from '../components/infoBoard';

const Home = () => (
  <>
    <InfoBoard />
  </>
);

export default withRedux(Home);
