import { Button } from '../Button/Button.styled';
import {
  BoxLogo,
  BoxParagraph,
  EllipseAvatar,
  ImageAvatar,
  Item,
} from './UserItem.styled';
import { Link } from 'react-router-dom';
import logoGoIt from '../../images/LogoGoIt.png';
import { selectIsLoading } from '../../redux/users/selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const UserItem = ({ user, followedUsers, handleClick }) => {
  const isLoading = useSelector(selectIsLoading);
  const formatter = new Intl.NumberFormat('en-US');

  return (
    <Item>
      <article>
        <BoxLogo>
          <Link to="/">
            <img src={logoGoIt} alt="logo go-it" width="76" height="22" />
          </Link>
        </BoxLogo>
        <EllipseAvatar>
          <ImageAvatar
            src={user.avatar}
            alt={user.user}
            width="65"
            height="65"
          />
        </EllipseAvatar>
        <BoxParagraph>
          <p>{user.tweets} tweets</p>
          <p>{formatter.format(user.followers)} followers</p>
        </BoxParagraph>
        <Button
          type="button"
          following={followedUsers.includes(user.id)}
          onClick={() => handleClick(user.id)}
          disabled={isLoading}
        >
          {followedUsers.includes(user.id) ? 'following' : 'follow'}
        </Button>
      </article>
    </Item>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  followedUsers: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default UserItem;
