import React, {useState} from 'react';

import { Container, Search, Wrapper, CarouselTitle} from './style';
import Slider from "react-slick";
import { Card } from '../imgCard/ImgCard';

import Logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

export default function Home() {

  const [ value, setValue ] = useState(' ');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };
  
  return (
    <Wrapper>
      <Container>
        
        <Search>
          <img src={ Logo } alt="Logo da Find Restaurant"/>
          <TextField
            label='Pesquisar'
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search"/>}>
            <Input value={value} onChange={(e) => setValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua região</CarouselTitle>
          <Slider {...settings}>
           <Card photo={restaurant} />
           <Card photo={restaurant} />
           <Card photo={restaurant} />
           <Card photo={restaurant} />
           <Card photo={restaurant} />
           <Card photo={restaurant} />
           <Card photo={restaurant} />
          </Slider>
        </Search>
      
      </Container>
    </Wrapper>
  )
}
