import React from 'react'
import {Text} from 'react-native'

import styles from './AppStyle'

const FormattedTime = props => {
    const minutes = ("0" + Math.floor(props.time / 60)).slice(-2);
    const seconds = ("0" + Math.floor(props.time % 60)).slice(-2);
    const formatted = minutes + ":" + seconds;
    return <Text style={styles.FormattedTime} > {formatted} </Text>
}

export default FormattedTime