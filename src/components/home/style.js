import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
`; 

export const Container = styled.aside `
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 100vh;
    overflow-y: auto;
`;


export const Search = styled.section `
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    width: 100%;
    padding: 16px 0;
    background-color: ${(props) => props.theme.colors.white};
`;