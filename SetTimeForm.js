import React from 'react';
import { Text, View, Button, TouchableOpacity, TouchableHighlightBase, TextInput } from 'react-native';

import styles from './AppStyle';

export default class SetTimeForm extends React.Component {

    state = {
        workMinutes: '25',
        workSeconds: '00',
        breakMinutes: '5',
        breakSeconds: '00',
        longbreakMinutes: '30',
        longbreakSeconds: '00',
        isFormValid: true,
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.state.workMinutes !== prevState.workMinutes
            || this.state.workSeconds !== prevState.workSeconds
            || this.state.breakMinutes !== prevState.breakMinutes
            || this.state.breakSeconds !== prevState.breakSeconds
            || this.state.longbreakMinutes !== prevState.longbreakMinutes
            || this.state.longbreakSeconds !== prevState.longbreakSeconds)
        {
            this.validateTime()
        }
    }

    /*
    convertToMinutes = seconds => {
        ("0" + Math.floor(seconds / 60)).slice(-2);
    }

    convertToSeconds = seconds => {
        ("0" + Math.floor(seconds % 60)).slice(-2)
    }*/

    validateTime = () => {
        console.log(this.state);
        console.log(this.submitState);
        if (+this.state.workMinutes+1
        && +this.state.workSeconds+1
        && +this.state.breakMinutes+1 
        && +this.state.breakSeconds+1 
        && +this.state.longbreakMinutes+1 
        && +this.state.longbreakSeconds+1
        && (this.state.workMinutes + this.state.workSeconds > 0)
        && (this.state.breakMinutes + this.state.breakSeconds > 0)
        && (this.state.longbreakMinutes + this.state.longbreakSeconds > 0)){
            this.setState({isFormValid: true});
        } else {
            this.setState({isFormValid: false});
        }
    }

    getHandler = key => val => {
        this.setState({[key]: val});
    }


    /*
    getHandlerMinutes = key => val => {
        this.setState({[key]: val});
    }

    getHandlerSeconds = key => val => {
        this.setState({[key]: val});
    }*/

    handleSubmit = () => {
        submitState = {
            workTime: (this.state.workMinutes*60 +this.state.workSeconds*1),
            breakTime: (this.state.breakMinutes*60 + this.state.breakSeconds*1),
            longBreakTime: (this.state.longbreakMinutes*60 +this.state.longbreakSeconds*1),
        };
        console.log(this.state)
        console.log(submitState)
        this.props.onSubmit(submitState);
      }    

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.workText}>WORK</Text>
                <View style={styles.timeEntry}>
                    <TextInput 
                        keyboardType="numeric"
                        maxLength={2} 
                        value={this.state.workMinutes} 
                        onChangeText={this.getHandler('workMinutes')}
                        placeholder='25'
                    />
                    <Text>: </Text>
                    <TextInput 
                        keyboardType="numeric" 
                        maxLength={2} 
                        value={this.state.workSeconds}
                        onChangeText={this.getHandler('workSeconds')}
                        placeholder='00'
                    />
                </View>

                <Text style={styles.breakText}>BREAK</Text>
                <View style={styles.timeEntry}>
                    <TextInput 
                        keyboardType="numeric" 
                        maxLength={2} 
                        value={this.state.breakMinutes} 
                        onChangeText={this.getHandler('breakMinutes')}
                        placeholder='5'
                    />
                    <Text>: </Text>
                    <TextInput 
                        keyboardType="numeric"  
                        maxLength={2} 
                        value={this.state.breakSeconds} 
                        onChangeText={this.getHandler('breakSeconds')}
                        placeholder='00'
                    />
                </View>

                <Text style={styles.breakText}>LONG BREAK</Text>
                <View style={styles.timeEntry}>
                    <TextInput keyboardType="numeric" 
                        maxLength={2} 
                        value={this.state.longbreakMinutes} 
                        onChangeText={this.getHandler('longbreakMinutes')}
                        placeholder='30'
                    />
                    <Text>: </Text>
                    <TextInput 
                        keyboardType="numeric"  
                        maxLength={2}
                        value={this.state.longbreakSeconds}
                        onChangeText={this.getHandler('longbreakSeconds')}
                        placeholder='00'
                    />
                </View>

                <View style={styles.bottomRow}>
                <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
                </View>
            </View>
        )
    }
}