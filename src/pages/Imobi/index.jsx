import React from 'react';
import { Container, Left, Right, Thumb, Description, Profile, ProfileImg, ProfileDescription } from './styles';

const Imobi = () => {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src={require('../../assets/imobi.png')} alt="imobi" />
          </Thumb>
          <Description>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo error, quas quo dolore aliquid soluta sequi! Commodi, architecto nobis doloremque rerum labore animi unde adipisci deserunt, repudiandae debitis ad maiores.</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src={require('../../assets/profile.png')} alt="profile" />
            </ProfileImg>
            <ProfileDescription>
              <h3>Jhon Due</h3>
              <p>(11) 111-1111</p>
              <p>teste@teste.com</p>
            </ProfileDescription>
          </Profile>
        </Right>
      </Container>
    </Fragment>
  )
}

export default Imobi;