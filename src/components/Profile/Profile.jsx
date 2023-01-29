import PropTypes from 'prop-types';
import {
  Card,
  BoxState,
  Avatar,
  UserName,
  Tag,
  Location,
  States,
  BoxState,
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
          <FolowwersTitle>Followers</FolowwersTitle>
          <FolowwersCounts>{followers}</FolowwersCounts>
        </BoxState>
        <BoxState>
          <ViewsTitle>Views</ViewsTitle>
          <ViewsCounts>{views}</ViewsCounts>
        </BoxState>
        <BoxState>
          <LikesTitle>Likes</LikesTitle>
          <LikesCounts>{likes}</LikesCounts>
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
