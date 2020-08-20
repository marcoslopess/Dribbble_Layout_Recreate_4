import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Container, 
        TipImg, 
        TipTitle, 
        ReamMoreContainer, 
        ReamMoreTitle 
} from './styles';

export default function Tips( props ){
    return(
        <Container style={{backgroundColor:props.bgColor}}>
        
            <TipImg source={ props.img }/>

            <TipTitle>{ props.title }</TipTitle>

            <ReamMoreContainer>
            
                <ReamMoreTitle>Ream More</ReamMoreTitle>

                <AntDesign name="right" size={ 15 } color="rgba(255,255,255,0.4)" />

            </ReamMoreContainer>    

        </Container>
    )
}