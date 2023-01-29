import PropTypes from 'prop-types';
import {
  Boxs,
  Card,
  CardDescription,
  Avatar,
  UserName,
  Tag,
  Location,
  States,
  BoxStat,
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
    <Boxs>
      <Card>
        <CardDescription>
          <Avatar src={avatar} alt={username} />
          <UserName>{username}</UserName>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </CardDescription>

        <States>
          <BoxStat>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </BoxStat>
          <BoxStat>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </BoxStat>
          <BoxStat>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </BoxStat>
        </States>
      </Card>
    </Boxs>
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
