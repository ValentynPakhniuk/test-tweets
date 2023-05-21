import { useLocation } from 'react-router-dom';
import { SiteNavLink } from './Navigation.styled';

export const Navigation = () => {
  const location = useLocation();
  return (
    <nav>
      <SiteNavLink to="/">Home</SiteNavLink>
      <SiteNavLink to="/users" state={{ from: location }}>
        Tweets
      </SiteNavLink>
    </nav>
  );
};
