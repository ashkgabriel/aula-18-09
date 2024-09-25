import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      input: ""
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto) {
    if (texto.length > 0) {
      this.setState({ nome: `Bem vindo: ${texto}` });
    } else {
      this.setState({ nome: "" });
    }
  }

  // Função para atualizar o estado com o texto digitado
  atualizarNome = (texto) => {
    this.setState({ nome: texto });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome} // Atualiza o estado ao digitar
        />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10,
    width: "80%",
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
  },
});

export default App;
