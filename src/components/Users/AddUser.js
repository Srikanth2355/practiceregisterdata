import React, {useState, useRef} from 'react';
import Card from "../UI/Card";
import Button from '../UI/Button'
import classes from "./AddUser.module.css"
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';


function AddUser(props) {
    const inputRef = useRef();
    const ageRef = useRef();

    // const [enteredusername, setenteredusername] = useState('');
    // const [enteredage, setenteredage] = useState('');
    const [error, seterror] = useState();
    const adduserHandler = (event) => {
        event.preventDefault();
        const enteredName = inputRef.current.value;
        const enteredUserage = ageRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserage.trim().length === 0) {
            seterror({
                title: "Invalid Input",
                message:"Enter Valid Name(greater than 1 character) and Age(>5) !!"
            })
            return;
        }
        if (+enteredUserage < 5) { //+ converts string into number
            seterror({
                title: "Invalid Age",
                message:"Enter a valid age(>5)"
            })
            return;
        }
        props.onAdduser(enteredName,enteredUserage);
        inputRef.current.value = "";
        ageRef.current.value = "";

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
                    <input type="text" id="username"  ref={inputRef} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age"  ref={ageRef} />
                    <Button type="submit">Add User</Button>
                </form> 
            </Card>
        </Wrapper>       
    )
}

export default AddUser
