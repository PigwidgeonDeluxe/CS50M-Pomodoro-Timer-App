import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlightBase, TextInput } from 'react-native';

import styles from './AppStyle';

export default class SetTimeForm extends React.Component {

    state = {
        workMinutes: 25,
        workSeconds: 0,
        breakMinutes: 5,
        breakSeconds: 0,
        longbreakMinutes: 30,
        longbreakSeconds: 0,
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.workText}>WORK</Text>
                <View style={styles.timeEntry}>
                    <TextInput keyboardType="numeric" maxLength={2} value={this.state.workMinutes} placeholder='25'/>
                    <Text>: </Text>
                    <TextInput keyboardType="numeric" maxLength={2} value={this.state.workSeconds} placeholder='00'/>
                </View>

                <Text style={styles.breakText}>BREAK</Text>
                <View style={styles.timeEntry}>
                <TextInput keyboardType="numeric" maxLength={2} value={this.state.breakMinutes} placeholder='5'/>
                    <Text>: </Text>
                    <TextInput keyboardType="numeric" maxLength={2} value={this.state.breakSeconds} placeholder='00'/>
                </View>

                <Text style={styles.breakText}>LONG BREAK</Text>
                <View style={styles.timeEntry}>
                <TextInput keyboardType="numeric" maxLength={2} value={this.state.longbreakMinutes} placeholder='30'/>
                    <Text>: </Text>
                    <TextInput keyboardType="numeric" maxLength={2} value={this.state.longbreakSeconds} placeholder='00'/>
                </View>

                <View style={styles.bottomRow}>
                    <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                        <Text>Set Time</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}