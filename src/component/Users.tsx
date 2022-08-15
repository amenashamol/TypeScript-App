import React from 'react';
import User from './User';

const handleAddUser=():void=>{
    
}
const Users = () => {
    return (
        <div>
          <h2>users</h2>  
          <User name='amena' age={55} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;