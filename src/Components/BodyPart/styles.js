import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width:100%;
    height:85px;
    padding:0 15px;
    border-radius:10px;
    margin-top:20px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const InfoGroup = styled.View``;

export const Title = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:17px;
`;

export const Amount = styled.Text`
    color:rgba(255,255,255, 0.5);
`;

export const BodyPartImage = styled.Image`
    width:65px;
    height:65px;
`