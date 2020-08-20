import React from 'react';

import Head from '../../Images/Head.png';
import Back from '../../Images/Back.png';
import Shoulder from '../../Images/Shoulder.png';
import Hand from '../../Images/Hand.png';

import Header from '../../Components/Header';
import BodyPart from '../../Components/BodyPart';

import {Container, 
        Title, 
        Description, 
        BodyPartsContainer 
} from './styles';

export default function LearnScreen(){
    return(
        <Container>
            
            <Header name="search" />

            <Title>Learn</Title>

            <Description>Choose the part of the body</Description>

            <BodyPartsContainer>

                <BodyPart title="Head e Face" amount="11" img={ Head } bgColor="#EB7662" />
                <BodyPart title="Back e Neck" amount="9" img={ Back } bgColor="#8DC4BB" />
                <BodyPart title="Hand e Arm" amount="2" img={ Hand } bgColor="#F2982F" />
                <BodyPart title="Elbow e Shoulders" amount="12" img={ Shoulder } bgColor="#327389" />

            </BodyPartsContainer>

        </Container>
    )
}