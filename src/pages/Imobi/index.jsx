import React, { Fragment } from 'react';
import TopBanner from '../../components/TopBanner';
import { Container, Left, Right, Thumb, Description, Profile, ProfileImg, ProfileDescription, ProfileContact, ProfileFormContact } from './styles';

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
              <p>Descrição do usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
              <h3>Informações para contato:</h3>
              <p>(11) 111-1111</p>
              <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <textarea name="" id='' cols="30" rows="10"></textarea>
              <button>Enviar mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  )
}

export default Imobi;