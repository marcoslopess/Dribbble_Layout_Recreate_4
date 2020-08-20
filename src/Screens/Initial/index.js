import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Exercise from '../../Images/Exercise.png';

import { Container, 
        TopContainer, 
        ExerciseImage,
        BottomContainer,
        WelcomeMessage,
        InfoMessage,
        ButtonLogin,
        ButtonRegister,
        TextButtons,
} from './styles';

export default function InitialScreen(){
    const { navigate } = useNavigation();

    function handleNavigationToTheFormScreen(){
        navigate('Form');
    }

    return(
        <Container>
          
            <TopContainer>
                
                <ExerciseImage source={ Exercise } />

            </TopContainer>

            <BottomContainer>

                <WelcomeMessage>Welcome to MyoMus!</WelcomeMessage>

                <InfoMessage>Hope you are well today</InfoMessage>

                <ButtonLogin onPress={ handleNavigationToTheFormScreen }>
                    <TextButtons>Login</TextButtons>
                    <AntDesign name="login" size={ 23 } color="#fff" />
                </ButtonLogin>

                <ButtonRegister onPress={ handleNavigationToTheFormScreen }>
                    <TextButtons>Register</TextButtons>
                    <MaterialIcons name="email" size={ 23 } color="#fff" />
                </ButtonRegister>

            </BottomContainer>

        </Container>
    )
}