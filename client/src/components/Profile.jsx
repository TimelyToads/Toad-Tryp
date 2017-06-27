import React from 'react'

const Profile = ({match}) => (
  <div>
    <h3>
      I AM A PROFILE PLACEHOLDER FOR PROFILE THINGS
    </h3>
    <div>
      username: {match.params.username}
    </div>
  </div>
);

export default Profile;