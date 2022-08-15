import React, { FC } from 'react';
import UserModel from './models';

// interface Props{
//     name:string,
//     age:number,
//     addUser: () =>void
// }

interface Props{
    user:UserModel,
    addUser: (user:UserModel) =>void
}

const User:FC<Props> = ({user,addUser}) => {
    return (
        <div>
          <h2>hello: {user.name} with experience {user.email}</h2>
          <button onClick={()=>addUser(user)}>add</button>  
        </div>
    );
};

export default User;