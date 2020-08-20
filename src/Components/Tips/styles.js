import styled from 'styled-components/native';

export const Container = styled.View`
    width:48%;
    height:220px;
    padding:0 10px;
    margin-top:20px;
    border-radius:20px;
    justify-content:space-around;
`;

export const TipImg = styled.Image`
    width:70px;
    height:70px;
`;

export const TipTitle = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:16px;
    margin-top:-20px;
`;

export const ReamMoreContainer = styled.TouchableOpacity`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const ReamMoreTitle = styled.Text`
    color:rgba(255,255,255,0.7);
`;