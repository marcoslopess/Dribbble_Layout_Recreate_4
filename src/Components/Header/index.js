import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, DateText, IconButton } from './styles';

export default function Header( props ){
    return(
        <Container>

            <DateText>{Date().slice(0, 3)}, {Date().slice(8, 10)} {Date().slice(4, 7)} </DateText>

            <IconButton>

                <FontAwesome name={ props.name } size={ 23 } color="#d3d3d3" />

                {console.log(props)}

            </IconButton>

        </Container>
    )
}