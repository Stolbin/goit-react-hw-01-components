import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
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
    </CardContainer>
  );
};
