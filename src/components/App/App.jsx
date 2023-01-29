import { user } from '../Profile/user.json';
import { Profile } from '../Profile/Profile';
import { CardContainer } from './App.styled';

export const App = () => {
  return (
    <CardContainer>
      <Profile data={user} />
    </CardContainer>
  );
};
