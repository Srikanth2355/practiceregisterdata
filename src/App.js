import React,{useState, Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [ userlist, setuserlist ] = useState([]);
  
  const adduserHandler = (uname, uage) => {
    setuserlist((prevlist) => {
      return [...prevlist, { name: uname, age: uage }];
    })
  }
  return (
    <Fragment>
      <AddUser onAdduser={adduserHandler} />
      <UsersList users={userlist} />
    </Fragment>
  );
}

export default App;
