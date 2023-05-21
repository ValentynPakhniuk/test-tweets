import { Helmet } from 'react-helmet-async';
import { Container } from '../components/UsersList/UsersList.styled';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <Container>
        <h1>Welcome to the tweet home page. I wish you a good time.</h1>
      </Container>
    </>
  );
}
