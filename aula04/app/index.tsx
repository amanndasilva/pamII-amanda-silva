import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAofSIo5YKSCi5Kk4j-U3ClYS0utuuXrEw",
  authDomain: "meu-primeiro-firebase-17c5d.firebaseapp.com",
  projectId: "meu-primeiro-firebase-17c5d",
  storageBucket: "meu-primeiro-firebase-17c5d.firebasestorage.app",
  messagingSenderId: "289730857791",
  appId: "1:289730857791:web:654b843a2be0a246d8a18a"
};

firebase.initializeApp(firebaseConfig);

import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

export default function App(){
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setNomes(data);
    };
    fetchData();
  }, []);

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.Nome}</Text>
          </View>
        )}>

      </FlatList>
    </View>
  )
}