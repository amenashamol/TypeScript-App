import React , {FormEvent, ChangeEvent,useState}from 'react';

interface User{
    name:string,
    job:string
}

const Counter = () => {
    const [counter,setCounter]=useState(0)
    const[user,setUser]=useState<User | null>(null)
    const handleIncrease=():void=>{
                    setCounter(counter+1)
    }
    const handleUserSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const userData={
                  name:'aaa',
                  job:'bbb'
        }
        setUser(userData)
    }

    const handleNameChange=(e:ChangeEvent<HTMLInputElement>):void=>{

    }
    
    return (
        <div>
            <h1>counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>increase</button>
        </div>
    );
};

export default Counter;