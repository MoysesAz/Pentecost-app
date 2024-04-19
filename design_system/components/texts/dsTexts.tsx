import styled from 'styled-components/native';

const Basic = styled.Text(props => ({
    color: props.theme.colors.fontColor,
}));


export const Body = styled(Basic)(promps =>({
    fontSize: 18,
}));

export const LargeTitle = styled(Basic)(promps =>({
    fontSize: 25,
    fontWeight: "bold"
}));

export const Title1 = styled(Basic)(promps =>({
    fontSize: 18,
    fontWeight: "bold"
}));

export const Title2 = styled.Text`
`;

export const Title3 = styled.Text`
`;

export const Caption1 = styled.Text`
    background-color: ${props => props.theme.colors},
`;

export const Caption2 = styled.Text`
    background-color: ${props => props.theme.colors},
`;

export const Caption3 = styled.Text`
    background-color: ${props => props.theme.colors},
`;

export const Subhead = styled.Text`
    background-color: ${props => props.theme.colors},
`;