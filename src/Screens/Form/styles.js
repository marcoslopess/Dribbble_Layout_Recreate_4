import styled from 'styled-components/native';

export const Container = styled.View`
    background-color:#112337;
    flex:1;
    align-items:center;
    justify-content:center;
`;

export const Title = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:23px;
    margin-top:60px
`;

export const ExerciseImg = styled.Image`
    width:200px;
    height:200px;
    margin-top:50px;
`;

export const Form = styled.KeyboardAvoidingView`
    width:80%;
`;

export const Label = styled.Text`
    color:#456E84;
    font-weight:bold;
    margin-top:25px;
`;

export const InputContainer = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-bottom-color:#d3d3d3;
    border-bottom-width:2px;
`;

export const Input = styled.TextInput`
    color:#fff;
    width:90%;
    padding:5px;
    margin-top:10px;
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const ErrorMessage = styled.Text`
    color:#ff1943;
    font-weight:bold;
    margin-top:20px;
`;

export const SubmitForm = styled.TouchableOpacity`
    background-color:#91c704;
    width:100%;
    height:50px;
    border-radius:10px;
    margin-top:15px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const TextSubmitForm = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:16px;
`;