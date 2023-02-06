import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import history from '../../data/history.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { Transactions } from '../Transactions/Transactions';
import { CardContainer, CardTex, TitlePage } from './App.styled';

export const App = () => {
  return (
    <CardContainer>
      <TitlePage>React Homework №1</TitlePage>
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
