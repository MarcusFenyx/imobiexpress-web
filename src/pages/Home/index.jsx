import React, { Fragment } from 'react';
import Card from '../../components/Card';
import { Header, Wrapper } from './styles';

const Home = () => {
  let Cards = [];
  for(let i = 0; i < 4; i++){
    Cards.push = <Card key={i} />;
  }
  return (
    <Fragment>
        <Header>
            <h2>Find the property of your dreams!</h2>
        </Header>
        <Wrapper>
          {Cards}
        </Wrapper>
    </Fragment>
  )
}

export default Home;