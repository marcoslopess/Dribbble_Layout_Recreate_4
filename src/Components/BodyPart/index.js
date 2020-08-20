import React from 'react';

import { Container, 
        InfoGroup, 
        Title, 
        Amount, 
        BodyPartImage 
} from './styles';

export default function BodyPart( props ){
    return(
        <Container style={{ backgroundColor: props.bgColor }}>

            <InfoGroup>

                <Title>{ props.title }</Title>

                <Amount>{ props.amount } diseases</Amount>

            </InfoGroup>

            <BodyPartImage source={ props.img } />

        </Container>
    )
}