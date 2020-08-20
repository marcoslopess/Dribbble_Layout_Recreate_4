import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Date, IconButton } from './styles';

export default function Header(){
    return(
        <Container>

            <Date>{Date.now}</Date>

            <IconButton>

                <MaterialCommunityIcons name="bell" size={ 23 } color="#d3d3d3" />

            </IconButton>

        </Container>
    )
}