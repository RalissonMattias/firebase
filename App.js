import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import app from './src/firebaseConnetion';

console.disableYellowBox=true;

export default function App(){
  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState('');

  useEffect(()=> {

    async function dados(){

      //Olheiro da nossa database
      await firebase.database().ref('nome').on('value', (snapshot) => {
        setNome(snapshot.val().nome);
      });

      await firebase.database().ref('idade').once('value', (snapshot)=> {
        setIdade(snapshot.val());
      });

    }

    dados();


  }, []);

  return(
    <View style={{marginTop: 25}}>
      <Text style={{fontSize: 25}}>Olá {nome}</Text>
      <Text style={{fontSize: 25}}>Idade {idade}</Text>
    </View>
  );
}
