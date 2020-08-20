import React from 'react';

import Header from '../../Components/Header';

import { Container, Hello } from './styles';

export default function HomeScreen({ route }){
    return(
        <Container>

            <Header name="search"/>

            <Hello>Hi, {route.params.name}!</Hello>

        </Container>
    )
}