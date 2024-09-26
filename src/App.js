import React from 'react';
import { Box } from '@chakra-ui/react';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import FilterBooks from './components/FilterBooks';

function App() {
  return (
    <Box p={4}>
      <FilterBooks />
      <AddBook />
      <BookList />
    </Box>
  );
}

export default App;
