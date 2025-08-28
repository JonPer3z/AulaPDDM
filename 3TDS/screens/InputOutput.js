import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function DisplayComponents() {
  const [texto, setTexto] = useState('');
  const [mensagemParaExibir, setMensagemParaExibir] = useState('');
  const [erro, setErro] = useState(''); 

  const handleEnviar = () => {
    try {
      if (texto.trim() === '') {   
        throw new Error('Erro: Insira um texto');
      }
      setMensagemParaExibir(texto.toUpperCase());
      setErro('');

    } catch (error) {
      setErro(error.message);
      setMensagemParaExibir('');
    }
  };

  const Clear = () => {
    setTexto('');
    setMensagemParaExibir('');
    setErro(''); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite algo..."
        style={styles.input}
        onChangeText={setTexto}
        value={texto}
      />
      
      <View style={styles.buttons}>
        <Button
          title="Enviar"
          onPress={handleEnviar}
        />
        <Button
          title="Limpar"
          onPress={Clear}
        />
      </View>

      {erro ? <Text style={styles.mensagemErro}>{erro}</Text> : null}

      <View style={styles.output}>
        <Text>Saida: <Text style={styles.mensagem}>{mensagemParaExibir}</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  output: {
    borderRadius: 10,
    borderColor: 'Black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '20%',
    marginBottom: 10,
  },
  mensagem: {
    fontWeight: 'bold',
  },
  mensagemErro: {
    color: 'red',
    marginBottom: 10,
    fontWeight: 'bold',
  }
});