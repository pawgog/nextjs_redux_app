import React from 'react';
import { withRedux } from '../src/redux';
import NewsBoard from '../components/newsBoard';

const Home = () => (
  <>
    <NewsBoard />
  </>
);

export default withRedux(Home);
