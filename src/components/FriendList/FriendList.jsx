import PropTypes from 'prop-types';
import { FriendCard } from './FriendCard';
import { Section, FriendBox } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ stats }) => {
  return (
    <Section>
      {stats.map(stat => (
        <FriendBox key={stat.id}>
          <FriendCard>
            status={stat.isOnline}
            avatar={stat.avatar}
            friendName={stat.name}
          </FriendCard>
        </FriendBox>
      ))}
    </Section>
  );
};

FriendList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
