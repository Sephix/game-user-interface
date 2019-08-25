import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Login from './components/Login/login';
import InfoDisplay from './components/InfoDisplay/infoDisplay';

export default class Layout extends React.Component {
  state = {
    isLoggedIn: false,
    data: null
  };

  onLogin = (email) => {
    axios.post(
        'http://192.168.1.12:8080/user/',
        null,
        {params: {email: email}}
    )
        .then(res => {
          if(res.status === 200) {
            this.setState({isLoggedIn: true, data: res.data});
          }
        })
        .catch(e => console.log(e))
  };

  handleViewComponent() {
    return this.state.isLoggedIn ?
        <InfoDisplay data={this.state.data}/> :
        <Login onLogin={this.onLogin} />
  }

  render() {
    return(
        <View style={styles.container}>
          {this.handleViewComponent()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
