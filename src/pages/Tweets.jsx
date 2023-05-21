import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { UsersList } from "../components/UsersList/UsersList";
import { selectError, selectIsLoading } from "../redux/users/selectors";
import { Progress } from "../components/UsersList/UsersList.styled";

const Tweets = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Helmet>
        <title>Users tweets</title>
      </Helmet>
      {isLoading && !error && <Progress>Request in progress...</Progress>}
      <UsersList />
    </>
  );
};
export default Tweets;
