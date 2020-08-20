import React from 'react';
import { Foundation } from '@expo/vector-icons';

import Header from '../../Components/Header';
import Tips from '../../Components/Tips';

import Stretch from '../../Images/Stretch.png';
import Water from '../../Images/Water.png';

import {Container, 
        Hello, 
        Info, 
        Title, 
        ContainerTime, 
        LeftInfos, 
        IconContainer, 
        PlayingText, 
        Timer,
        TipsContainer 
} from './styles';

export default function HomeScreen({ route }){
    return(
        <Container>

            <Header name="search"/>

            <Hello>Hi, {route.params.name}!</Hello>

            <Info>Hope you are well today</Info>

            <Title>Time Tracker</Title>

            <ContainerTime>

                <LeftInfos>

                    <IconContainer>
                        <Foundation name="music" size={ 17 } color="#fff" />
                    </IconContainer>

                    <PlayingText>Playing...</PlayingText>

                </LeftInfos>

                <Timer>01:00:01</Timer>

            </ContainerTime>

            <Title>Tips of the day</Title>

            <TipsContainer>

                <Tips img={ Stretch } title={`Straighten \n your back`} bgColor="#327389"/>

                <Tips img={ Water } title={`Drink a glass \n of water`} bgColor="#8DC4BB"/>

            </TipsContainer>

        </Container>
    )
}