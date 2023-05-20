import React from 'react';
import styled  from 'styled-components';

export const Card = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 8px;
    overflow: hidden;
    background-image: url(${(props) => props.photo});
    background-repeat: no-repeat;
    background-size: cover;
`;

const ImgCard = ({ photo }) => (
    <Card photo={ photo }></Card>
) 


export default ImgCard