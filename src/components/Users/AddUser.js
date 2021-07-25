import React, {useState} from 'react';
import Card from "../UI/Card";
import Button from '../UI/Button'
import classes from "./AddUser.module.css"
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';


function AddUser(props) {
    const [enteredusername, setenteredusername] = useState('');
    const [enteredage, setenteredage] = useState('');
    const [error, seterror] = useState();
    const adduserHandler = (event) => {
        event.preventDefault();
        if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
            seterror({
                title: "Invalid Input",
                message:"Enter Valid Name(greater than 1 character) and Age(>5) !!"
            })
            return;
        }
        if (+enteredage < 5) { //+ converts string into number
            seterror({
                title: "Invalid Age",
                message:"Enter a valid age(>5)"
            })
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
    const myerrorhandler = () => {
        seterror(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} ok={ myerrorhandler}/>}
            <Card className={classes.input}>
                <form   onSubmit={adduserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={enteredusername} onChange={usernamechangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={enteredage} onChange={agechangeHandler} />
                    <Button type="submit">Add User</Button>
                </form> 
            </Card>
        </Wrapper>       
    )
}

export default AddUser
