import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, markAsRead } from '../redux/actions/bookActions';
import { Box, Button, Text } from '@chakra-ui/react';

const BookList = () => {
  const { books, filter } = useSelector(state => state.books);
  const dispatch = useDispatch();

  const filteredBooks = books.filter(book => {
    if (filter === 'read') return book.read;
    if (filter === 'unread') return !book.read;
    return true;
  });

  return (
    <Box>
      {filteredBooks.map((book) => (
        <Box key={book.id} p={5} shadow="md" borderWidth="1px">
          <Text>Title: {book.title}</Text>
          <Text>Author: {book.author}</Text>
          <Text>Genre: {book.genre}</Text>
          <Text>Status: {book.read ? 'Read' : 'Unread'}</Text>
          <Button onClick={() => dispatch(markAsRead(book.id))} colorScheme="blue">
            Mark as Read
          </Button>
          <Button onClick={() => dispatch(deleteBook(book.id))} colorScheme="red">
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default BookList;
