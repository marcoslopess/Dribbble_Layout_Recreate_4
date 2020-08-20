import React,{ useState } from 'react';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Exercise from '../../Images/Exercise.png';

import {Container, 
        Title, 
        ExerciseImg, 
        Form, 
        Label,
        InputContainer, 
        Input,
        ShowPasswordButton,
        ErrorMessage,
        SubmitForm,
        TextSubmitForm, 
} from './styles';

export default function FormScreen(){
    const [ isPasswordHidden, setIsPasswordHidden ] = useState(true)

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ errorMessage, setErrorMessage ] = useState('');

    const { navigate } = useNavigation();

    function handlePasswordVisibility(){
        setIsPasswordHidden(!isPasswordHidden)
    }

    function handleSubmitForm(){
        if( name === '' || email === '' || password === '' ){
            setErrorMessage('Please Fill In All The Fields!');
        }else{
            navigate('Others', { name });
        }
    }

    return(
        <Container>

            <Title>Welcome to MyouMus!</Title>

            <ExerciseImg source={ Exercise } />

            <Form>

                <Label>Username:</Label>

                <InputContainer>

                    <Input 
                        placeholder="Enter Your Username"
                        onChangeText={ text => setName(text) }
                    />
                    <FontAwesome name="user" size={ 23 } color="#d3d3d3" />
                    
                </InputContainer>

                <Label>Email:</Label>

                <InputContainer>

                    <Input 
                        placeholder="Enter Your Email"
                        onChangeText={ text => setEmail(text) }
                    />
                    <MaterialIcons name="email" size={ 23 } color="#d3d3d3" />

                </InputContainer>

                <Label>Password:</Label>

                <InputContainer>

                    <Input 
                        placeholder="Enter Your Password"
                        onChangeText={ text => setPassword(text) } 
                        secureTextEntry={ isPasswordHidden } 
                    />

                    <ShowPasswordButton onPress={ handlePasswordVisibility }>

                        { isPasswordHidden === true 
                        ? <Feather name="eye" size={ 23 } color="#d3d3d3" />
                        : <Feather name="eye-off" size={ 23 } color="#d3d3d3" /> }

                    </ShowPasswordButton>

                </InputContainer>
                
                <ErrorMessage>{errorMessage}</ErrorMessage>

                <SubmitForm onPress={ handleSubmitForm }>
                    <TextSubmitForm>Enter</TextSubmitForm>
                </SubmitForm>

            </Form>

        </Container>
    )
}