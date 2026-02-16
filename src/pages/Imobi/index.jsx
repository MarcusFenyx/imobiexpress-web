import React, { Fragment } from 'react';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
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
            <h2>Apartamento / Alugar</h2>
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
              <Input type="text" placeholder= "Nome:" />
              <Input type="text" placeholder= "Email:" />
              <TextArea placeholder="Mensagem:"></TextArea>
              <Button>Enviar mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  )
}

export default Imobi;