import PropTypes from 'prop-types';
import {
  Card,
  CardDescription,
  Avatar,
  UserName,
  Tag,
  Location,
  States,
  BoxState,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  data: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Card>
      <CardDescription>
        <Avatar src={avatar} alt={username} class="avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </CardDescription>

      <States>
        <BoxState>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </BoxState>
        <BoxState>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </BoxState>
        <BoxState>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </BoxState>
      </States>
    </Card>
  );
};

Profile.propTypes = {
  data: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
