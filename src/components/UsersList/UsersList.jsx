import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserItem from '../UserItem/UserItem';
import { BoxButton, CardList, Container } from './UsersList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/selectors';
import {
  fetchUsersThunk,
  updateUsersFollowersThunk,
} from '../../redux/users/operations';
import { Button } from '../Button/Button.styled';
import { toast } from 'react-hot-toast';

const followedUsersFromLocalStorage = localStorage.getItem('followedUsers');
const initialFollowedUsers = followedUsersFromLocalStorage
  ? JSON.parse(followedUsersFromLocalStorage)
  : [];

export const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [followedUsers, setFollowedUsers] = useState(initialFollowedUsers);
  // const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsersThunk(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
  }, [followedUsers]);

  const handleClick = async id => {
    const isFollowed = followedUsers.includes(id);
    const user = users.find(user => user.id === id);
    const newUser = { ...user };

    newUser.followers = isFollowed
      ? newUser.followers - 1
      : newUser.followers + 1;

    if (isFollowed) {
      toast.success('successfully deleted.');
    } else {
      toast.success('successfully added.');
    }
    setFollowedUsers(
      isFollowed
        ? followedUsers.filter(userId => userId !== id)
        : [...followedUsers, id]
    );
    dispatch(updateUsersFollowersThunk(newUser));
  };

  const handleClickLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <CardList>
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
            followedUsers={followedUsers}
            handleClick={handleClick}
          />
        ))}
      </CardList>
      <BoxButton>
        <Link to="/">
          <Button>Go back</Button>
        </Link>
        {users.length > 0 && (
          <Button
            type="button"
            onClick={handleClickLoadMore}
            disabled={users.length === 12}
          >
            Load More
          </Button>
        )}
      </BoxButton>
    </Container>
  );
};
