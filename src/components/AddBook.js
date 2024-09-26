import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookActions';
import { Box, Button, Input } from '@chakra-ui/react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newBook = {
      id: Date.now(),
      title,
      author,
      genre,
      read: false,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <Box>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        mb={2}
      />
      <Input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        mb={2}
      />
      <Input
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        mb={2}
      />
      <Button onClick={handleSubmit} colorScheme="green">Add Book</Button>
    </Box>
  );
};

export default AddBook;
