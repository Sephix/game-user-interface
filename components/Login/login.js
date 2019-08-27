import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Text from 'react-native-web/dist/exports/Text';

class Login extends React.Component {
    state = {
        email: ""
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter your e-mail."
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <Button
                    onPress={() => this.props.onLogin(this.state.email)}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login to your account"
                />
            </View>
        )
    }
}

export default Login;
