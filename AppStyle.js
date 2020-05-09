import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
    },

  timeContainer: {
      alignItems: "center",
      padding: 10,
    },

  FormattedTime: {
      fontWeight: 'bold', 
      fontSize: 30,
      //alignItems: "center",
    },

  statusContainer: {
      alignItems: 'center',
      padding: 10,
    },

  statusText: {
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: 50,
    },

  topRow: {
      alignItems: "center",
      flexDirection: 'row',
      padding: 10,
    },

  bottomRow: {
      alignItems: "center",
      flexDirection: 'row',
      padding: 10,
    },

  button: { // touchableOpacity button
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    
  },


  })

  export default styles