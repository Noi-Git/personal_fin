// src/components/Profile.js

import React, { Fragment } from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div className="user">
        <img className="user--img" src={user.picture} alt="Profile" />

        <h2 className="user--name">{user.name}</h2>
        <p className="user--email">{user.email}</p>
      </div>
      {/*<code>{JSON.stringify(user, null, 2)}</code>*/}
    </Fragment>
  );
};

export default Profile;
