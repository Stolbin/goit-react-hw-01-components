import { user } from '../../data/user.json';
import { Profile } from 'components';
import { CardContainer } from './App.styled';

export const App = () => {
  return (
    <CardContainer>
      <Profile data={user} />
    </CardContainer>
  );
};
