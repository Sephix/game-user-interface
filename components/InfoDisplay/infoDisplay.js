import React from 'react';
import { View, Text } from 'react-native';

class InfoDisplay extends React.Component {

    render() {
        console.log(this.props.data);
        return (
            <View>
                <Text>{this.props.data.firstName}</Text>
                <Text>{this.props.data.lastName}</Text>
                <Text>{this.props.data.email}</Text>
                <Text>{this.props.data.password}</Text>
                <Text>{this.props.data.role}</Text>
            </View>
        )
    }
}

export default InfoDisplay;
