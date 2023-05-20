import React, {useState} from 'react';

import { Container, Search, Wrapper} from './style';

import Logo from '../../assets/logo.svg';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

export default function Home() {

  const [ value, setValue ] = useState(' ');
  
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

        </Search>
      </Container>
    </Wrapper>
  )
}
