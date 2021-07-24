import React,{useState} from 'react';
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
    <div>
      <AddUser onAdduser={adduserHandler} />
      <UsersList users={userlist} />
    </div>
  );
}

export default App;
