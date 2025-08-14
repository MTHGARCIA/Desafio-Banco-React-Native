import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Switch, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: null,
      idade: null,
      sexo: [{ id: 0, nome: 'Digite seu sexo' }, { id: 1, nome: 'Masculino' }, { id: 2, nome: 'Feminino' }],
      sexostring:'Vazio',
      sexoselecionado: 0,
      estudante: false,
      limite: 0,
    };
    this.cadastrar = this.cadastrar.bind(this);

  }
  cadastrar() {
    if (!this.state.nome || this.state.nome.trim() === '') {
      Alert.alert('Por favor, preencha o nome corretamente.');
      return;
    }
    if (!this.state.idade || this.state.idade.trim() === '') {
      Alert.alert('Atenção', 'Por favor, preencha a idade corretamente.');
      return;
    }
    if (!this.state.sexoselecionado || this.state.nome.trim() === '') {
      Alert.alert('Atenção', 'Por favor, escolha seu sexo.');
      return;
    }
    if (!this.state.limite || this.state.nome.trim() === '') {
      Alert.alert('Atenção', 'Por favor, defina um limite maior que zero.');
      return;
    }
    Alert.alert('Dados do Cliente ',
      'Nome: ' + this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: ' + this.state.sexoString + '\n' +
      'Estudante: ' + (this.state.estudante ? 'Sim' : 'Não') + '\n' +
      'Limite: R$ ' + this.state.limite.toFixed(2)+'\n'+
      'Obrigado por se cadastrar!'
      );
  }






  render() {

    let sexoItems = this.state.sexo.map((v) => { return <Picker.Item key={v.id} value={v.id} label={v.nome} /> });

    return (
      <View style={styles.container}>

        <View>
          <Text style={{ fontSize: 35, fontWeight: 'bold', marginTop: 100, textAlign: 'center' }}>
            Banco
          </Text>
        </View>


        <Text style={styles.identificacao}>Nome: </Text>
        <TextInput
          placeholder='Nome'
          style={{ borderWidth: 1, borderRadius: 35, padding: 8, marginBottom: 15, margin: 5 }}
          onChangeText={valor => this.setState({ nome: valor })}
        />


        <Text style={styles.identificacao}>Idade</Text>
        <TextInput
          placeholder='Idade'
          keyboardType='numeric'
          style={{ borderWidth: 1, borderRadius: 35, padding: 8, marginBottom: 15, margin: 5 }}
          onChangeText={valor => this.setState({ idade: valor })}
        />


        <View style={styles.container}>
          <View style={styles.sexo}>
            <Text style={styles.sexo}>Escolha Seu Sexo</Text>
          </View>


          <View style={{ alignItems: 'center', borderWidth: 1, borderRadius: 25, padding: 2, marginBottom: 4, margin: 4 }}>
            <Picker
              style={styles.picker}
              selectedValue={
                this.state.sexoselecionado
              }
              onValueChange={(itemValue, itemIndex) => this.setState({ sexoselecionado: itemValue , sexoString: this.state.sexo[itemIndex].nome })} >
            
              {sexoItems}
            </Picker></View>




        </View>


        <View style={styles.viewcomponent}>
          <Text style={styles.viewtext}>Estudante?</Text>
          <Switch
            value={this.state.estudante}
            onValueChange={(valorSwitch) => this.setState({ estudante: valorSwitch })}
          />
        </View>



        <View  >
          <View style={styles.viewcomponent}>
            <Text style={styles.textoview} >Limite

            </Text>
          </View >

          <Slider
            minimumValue={0}
            maximumValue={10000}
            onValueChange={(valorSlider) => this.setState({ limite: valorSlider })} />
          <Text style={styles.slidernumeros}>{this.state.limite.toFixed(2)}</Text>
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity
            onPress={this.cadastrar}
            style={styles.botao}>
            <Text style={styles.botaoText} > Cadastrar </Text>
          </TouchableOpacity>
        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',



  },

  identificacao: {
    marginLeft: 12,
    fontSize: 15,
    fontWeight: 'bold',
  },
  sexo: {
    marginTop: 5,
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  picker: {
    width: 172,
    marginLeft: 55,
    alignItems: 'center',
  },
  viewcomponent: {
    flexDirection: 'column',
    alignItems: 'center'

  },
  viewtext: {
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',

  },
  viewcomponent: {
    alignItems: 'center',
  },
  textoview: {
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',

  },
  slidernumeros: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  btnArea: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    color: '#000000ff',
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#ffffffff',
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 20,
    borderWidth: 1,
    padding: 8,
    marginBottom: 5,
    margin: 5
  },
  botaoText: {
    fontSize: 20,
    color: '#000000ff',
    fontWeight: 'bold',
  }

}
);
