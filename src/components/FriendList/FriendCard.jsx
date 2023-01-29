import PropTypes from 'prop-types';
import {
  Status,
  Avatar,
  FriendName,
} from 'components/FriendList/FriendList.styled';

export const FriendCard = ({ avatar, name, isOnline }) => (
  <>
    <Status status={isOnline}></Status>
    <Avatar src={avatar} alt={name} />
    <FriendName>{name}</FriendName>
  </>
);

FriendCard.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
