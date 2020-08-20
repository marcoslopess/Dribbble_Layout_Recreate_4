import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    width:85%;
    margin-top: ${ Platform.OS === 'android' ? '80px' : '0' };
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const DateText = styled.Text`
    color:#d3d3d3;
    font-size:16px;
`;

export const IconButton = styled.TouchableOpacity``;