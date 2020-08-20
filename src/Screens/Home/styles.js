import styled from 'styled-components/native';

export const Container = styled.View`
    background-color:#112337;
    flex:1;
    align-items:center;
`;

export const Hello = styled.Text`
    color:#fff;
    width:85%;
    margin-top:35px;
    font-weight:bold;
    font-size:30px;
`;

export const Info = styled.Text`
    color:#fff;
    width:85%;
    margin-top:20px;
    font-size:16px;
`;

export const Title = styled.Text`
    color:#fff;
    width:85%;
    margin-top:50px;
    font-size:16px;
    font-weight:bold;
`;

export const ContainerTime = styled.View`
    background-color:rgba(255, 25, 67,0.3);
    width:85%;
    height:45px;
    padding:0 15px;
    border-radius:10px;
    margin-top:15px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const LeftInfos = styled.View`
    width:40%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const IconContainer = styled.View`
    background-color:#ff1943;
    width:25px;
    height:25px;
    border-radius:5px;
    align-items:center;
    justify-content:center;
`;

export const PlayingText = styled.Text`
    color:#fff;
    font-size:16px;
`;

export const Timer = styled.Text`
    color:#ff1943;
    font-weight:bold;
    font-size:16px;
`;

export const TipsContainer = styled.View`
    width:85%;
    margin-top:15px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`
