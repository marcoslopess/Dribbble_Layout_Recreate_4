import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container } from './styles';

export default function ButtonTab(){
    return(
        <Container>
            <AntDesign name="medium-monogram" size={ 23 } color="#fff" />
        </Container>
    )
}