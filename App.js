import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Login from './components/Login/login';
import InfoDisplay from './components/InfoDisplay/infoDisplay';

export default class Layout extends React.Component {
  state = {
    data: null,
    email: ""
  };

  onLogin = (email) => {
    this.setState({email: email});
    this.handleRequest();
  };

  handleRequest = () => {
    axios.post(
        'http://192.168.1.8:8080/user/',
        null,
        {params: {email: this.state.email}}
    )
        .then(res => {
          if(res.status === 200) {
            this.setState({data: res.data});
          }
        })
        .catch(e => console.log(e))
  };

  handleLogout = () => {
    this.setState({email: "", data: null})
  };

  handleViewComponent() {
    return this.state.data ?
        <InfoDisplay data={this.state.data} logout={this.handleLogout} reload={this.handleRequest}/> :
        <Login onLogin={this.onLogin} />
  }

  render() {
    return(
        <>
          <View style={styles.header}>
            <Text style={styles.text}>
              Mobile Interface
            </Text>
          </View>
          <View style={styles.container}>
            {this.handleViewComponent()}
          </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20
  }
});
