import React, { useState, useContext, useEffect } from 'react';
import { ImagesContext } from '../../context';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Dropdown,
  InputGroup,
  FormControl,
  DropdownButton
} from 'react-bootstrap';

const Search = () => {
  const [searchText, setText] = useState('');
  const [amount, setAmount] = useState('20');

  const [apiURL, setApiURL] = useState('https://pixabay.com/api');

  const [images, setImages] = useContext(ImagesContext);

  useEffect(() => {
    getImages();
  }, [amount]);

  useEffect(() => {
    getImages();
  }, [searchText]);

  const getImages = () => {
    if (searchText === '') {
      setImages([]);
    } else {
      axios
        .get(
          `${apiURL}/?key=${process.env.REACT_APP_API_KEY}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
        )
        .then(res => setImages(res.data.hits))
        .catch(err => console.log(err));
    }
  };

  const changeText = e => {
    //let searchText = e.target.value;
    setText(e.target.value);
  };

  const onAmountChange = value => {
    setAmount(value);
  };
  return (
    <InputGroup
      style={{
        flexBasis: '65%',
        margin: '1rem 0 1rem 1rem'
      }}
    >
      <FormControl
        placeholder={'Search for images'}
        onChange={changeText}
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
