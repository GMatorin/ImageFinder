import React, { useState, useContext } from 'react';
import { ImagesContext } from '../../context';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Button,
  Dropdown,
  InputGroup,
  FormControl,
  DropdownButton
} from 'react-bootstrap';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const [amount, setAmount] = useState('20');

  const [apiURL, setApiURL] = useState('https://pixabay.com/api');

  const [API_KEY, setAPI_KEY] = useState('13956488-7b5fc6a4e99a50d0196a80d52');

  //const [images, setImages] = useState([]);
  const [images, setImages] = useContext(ImagesContext);

  const onTextChange = e => {
    const val = e.target.value;
    setSearchText(val);

    if (val === '') {
      setImages([]);
    } else {
      axios
        .get(
          `${apiURL}/?key=${API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
        )
        .then(res => setImages(res.data.hits))
        .catch(err => console.log(err));
    }
  };

  const onAmountChange = value => setAmount(value);
  return (
    <InputGroup style={{ flexBasis: '70%' }}>
      <FormControl
        placeholder={searchText || 'Search for images'}
        onChange={onTextChange}
        aria-label='Search for images'
        aria-describedby='basic-addon2'
      />

      <DropdownButton
        as={InputGroup.Append}
        variant='outline-secondary'
        title={amount}
        id='input-group-dropdown-2'
        onSelect={onAmountChange}
      >
        <Dropdown.Item eventKey={5}>5</Dropdown.Item>
        <Dropdown.Item eventKey={10}>10</Dropdown.Item>
        <Dropdown.Item eventKey={15}>15</Dropdown.Item>
        <Dropdown.Item eventKey={20}>20</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
};

export default Search;
