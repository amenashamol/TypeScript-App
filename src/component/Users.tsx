import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div>
          <h2>users</h2>  
          <User name='amena' age={55}></User>
        </div>
    );
};

export default Users;