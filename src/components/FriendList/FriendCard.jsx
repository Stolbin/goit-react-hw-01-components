import PropTypes from 'prop-types';
import {
  Status,
  Avatar,
  FriendName,
  FriendCardItem,
} from 'components/FriendList/FriendList.styled';

export const FriendCard = ({ avatar, name, isOnline }) => (
  <FriendCardItem>
    <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt={name} />
    <FriendName>{name}</FriendName>
  </FriendCardItem>
);

FriendCard.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
