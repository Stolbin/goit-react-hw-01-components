import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import history from '../../data/history.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';
import { CardContainer, CardTex } from './App.styled';

export const App = () => {
  return (
    <CardContainer>
      <CardTex>Task 1</CardTex>
      <Profile data={user} />
      <CardTex>Task 2</CardTex>
      <Statistics title="Upload stats" stats={data} />
      <CardTex>Task 3</CardTex>
      <FriendList stats={friends} />
      <CardTex>Task 4</CardTex>
      <Transactions els={history} />
    </CardContainer>
  );
};
