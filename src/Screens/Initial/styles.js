import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:#112337;
`;

export const TopContainer = styled.View`
    background-color:#fff;
    width:100%;
    height:50%;
    position:absolute;
    top:0;
    border-bottom-left-radius:70px;
    border-bottom-right-radius:70px;
    align-items:center;
    justify-content:center;
`;

export const ExerciseImage = styled.Image`
    width:200px;
    height:200px;
    margin-top:25px;
`;

export const BottomContainer = styled.View`
    width:100%;
    height:50%;
    position:absolute;
    bottom:0;
    align-items:center;
    justify-content:center;
`;

export const WelcomeMessage = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:25px;
`;

export const InfoMessage = styled.Text`
    color:rgba(255, 255, 255, 0.5);
    font-size:16px;
    margin-top:20px;
    font-weight:bold;
`;

export const ButtonLogin = styled.TouchableOpacity`
    background-color:#1b4069;
    width:80%;
    height:50px;
    border-radius:10px;
    margin-top:70px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const ButtonRegister = styled.TouchableOpacity`
    background-color:#91c704;
    width:80%;
    height:50px;
    border-radius:10px;
    margin-top:25px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;

export const TextButtons = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:16px;
    width:70%;
`;