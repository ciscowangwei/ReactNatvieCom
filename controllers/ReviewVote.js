import React, {Component} from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'


var ReviewVote  = React.createClass({
    render () {
        return ( 
            <View style={styles.approveDate}>
                <img>
                'good'
                </img>
                <Text>
                    56
                </Text>
                 <img>
                'bad'
                </img>
                <Text>
                    999
                </Text>
            </View>
        )
    }
})

var styles = StyleSheet.create({
   
  left:{
    flex:1,
    flexDirection:'row'
  },
   
  approveDate: {  
    textAlign:'right'
  } 
})

module.exports = ReviewVote