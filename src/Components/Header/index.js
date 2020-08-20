import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, DateText, IconButton } from './styles';

export default function Header(){
    const date = new Date();

    return(
        <Container>

            <DateText>{Date().slice(0, 3)}, {Date().slice(8, 10)} {Date().slice(4, 7)} </DateText>

            <IconButton>

                <MaterialCommunityIcons name="bell" size={ 23 } color="#d3d3d3" />

            </IconButton>

        </Container>
    )
}