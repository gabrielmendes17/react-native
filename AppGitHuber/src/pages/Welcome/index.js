import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import React, { Component } from "react";
import api from "~/services/api";
import { AsyncStorage } from "react-native";

export default class Welcome extends Component {
  state = {
    username: ""
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem("@Githuber:usuario");
  };

  signIn = async () => {
    const { username } = this.state;
    try {
      await checkUserExists(username);
      await saveUser(username);
    } catch (error) {
      console.tron.log("Usuário inexistente");
    }
  };

  render() {
    const { username } = this.state.username;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem Vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário no Github.
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            uderlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Prosseguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
