import { Link } from 'react-router-dom';
import { TitleNotFound } from './NotFound.styled';
import { Button } from '../Button/Button.styled';
import { Container } from '../UsersList/UsersList.styled';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Container>
        <TitleNotFound>Not Found 404</TitleNotFound>
        <Link to="/">
          <Button>Go home</Button>
        </Link>
      </Container>
    </>
  );
};
