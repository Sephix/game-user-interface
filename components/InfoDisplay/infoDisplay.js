import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class InfoDisplay extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Email: {this.props.data.email}</Text>
                <Text>First name: {this.props.data.firstName}</Text>
                <Text>Last name: {this.props.data.lastName}</Text>
                <Text>PV: {this.props.data.player.pv}</Text>
                <View style={styles.buttons}>
                    <Button
                        style={styles.button}
                        onPress={this.props.reload}
                        title="Reload"
                        color="#3700B3"
                    />
                    <Button
                        style={styles.button}
                        onPress={this.props.logout}
                        title="Logout"
                        color="#B00020"
                    />
                </View>
            </View>
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
    buttons: {
        marginTop: 25,
        height: 40,
        width: 200,
        justifyContent: 'space-around',
        flexDirection: "row"
    },
});

export default InfoDisplay;
