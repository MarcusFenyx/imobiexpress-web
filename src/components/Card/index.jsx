import React from 'react';
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Container, Description, Img, Itens } from './styles';

const Card = () => {
    return (
        <Container>
            <Img>
                <img src="https://imobiexpress.com.br/wp-content/uploads/2023/05/Imobiexpress-1.jpg" alt="" />
            </Img>
            <Description>
                <h4>Apartamento</h4>
                <Itens>
                    <span><FaMapMarkerAlt />Vila Buarque, São Paulo</span>
                    <span>R$ 2.400,00 / mês</span>
                </Itens>
                <Link to="/imovel">Detalhes <FaArrowRight /></Link>
            </Description>
        </Container>
    )
}

export default Card;