import MyPostsContainer from './MyPosts/MPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return <div>
    <ProfileInfo />
    < MyPostsContainer />
  </div>
}

export default Profile;