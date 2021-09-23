import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './routes/onBoarding';

import { makeServer } from "./server";

window.server = makeServer();
export default function App() {
  const [users, setUsers] = useState([]);
  let [serverError, setServerError] = useState();  useEffect(() => {
    let fetchUsers = async () => {
      try {
        let res = await fetch("/api/users");
        let data = await res.json();
        data.error ? setServerError(data.error) : setUsers(data.users);
      } catch (error) {
        setServerError(error.message);
      }
    };

    fetchUsers();
    console.log(users)
  }, []);
    
    return ( 
      <OnBoarding />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});