import React, { FC } from 'react';

interface Props{

    name:string,
    age:number
}

const User:FC<Props> = ({name,age}) => {
    return (
        <div>
          <h2>hello: {name} with experience {age}</h2>  
        </div>
    );
};

export default User;