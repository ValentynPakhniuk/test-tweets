import { Link } from 'react-router-dom';
import { TitleNotFound } from './NotFound.styled';
// import { useRef } from 'react';
import { Button } from '../Button/Button.styled';
import { Container } from '../UsersList/UsersList.styled';

export const NotFound = () => {
  // const backLinkLocationRef = useRef(location.state?.from ?? "/");
  return (
    <Container>
      <TitleNotFound>Not Found 404</TitleNotFound>
      <Link to="/">
        <Button>Go home</Button>
      </Link>
    </Container>
  );
};
