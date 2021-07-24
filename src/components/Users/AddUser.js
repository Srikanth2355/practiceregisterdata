import React, {useState} from 'react';
import Card from "../UI/Card";
import Button from '../UI/Button'
import classes from "./AddUser.module.css"

function AddUser(props) {
    const [enteredusername, setenteredusername] = useState('');
    const [enteredage, setenteredage] = useState('');
    const adduserHandler = (event) => {
        event.preventDefault();
        if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
            return;
        }
        if (+enteredage < 5) { //+ converts string into number
            return;
        }
        props.onAdduser(enteredusername,enteredage);
        setenteredusername('');
        setenteredage('');
    }
    const usernamechangeHandler = (event) => {
        setenteredusername(event.target.value);
    }
    const agechangeHandler = (event) => {
        setenteredage(event.target.value);
    }
    return (
        <Card className={classes.input}>
            <form   onSubmit={adduserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredusername} onChange={usernamechangeHandler} />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" value={enteredage} onChange={agechangeHandler} />
                <Button type="submit">Add User</Button>
            </form> 
        </Card>
                   
    )
}

export default AddUser
