import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/bookActions';
import { Button, HStack } from '@chakra-ui/react';

const FilterBooks = () => {
  const dispatch = useDispatch();

  return (
    <HStack spacing={4} mb={4}>
      <Button onClick={() => dispatch(setFilter(''))}>All Books</Button>
      <Button onClick={() => dispatch(setFilter('read'))}>Read Books</Button>
      <Button onClick={() => dispatch(setFilter('unread'))}>Unread Books</Button>
    </HStack>
  );
};

export default FilterBooks;
