import React, {Component} from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch
} from 'react-native'

import {ReviewVote} from './ReviewVote.js'

import {ReviewContent} from './ReviewContent.js'

var ReviewCell  = React.createClass({
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.left}>
                    <Text>
                        'name'
                    </Text> 
                    </View>
                    <View style={styles.approveDate}>
                    <Text>
                        '2017-01-11'
                    </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>
                    'title'
                    </Text>
                </View>
                <View style={styles.row}><Text>12345</Text></View>
                <View style={styles.row}>
                    <ReviewContent></ReviewContent>
                </View>
                <View style={styles.row}>
                  <ReviewVote></ReviewVote>
                </View>
            </View>
        )
    }
})

var styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  left:{
    flex:1,
    flexDirection:'row'
  },
  row:{
      borderWidth: 1,
      borderColor: 'blue',
    color: '#333333',
    flex:1,
    marginLeft:20,
    marginRight:20,
    padding:2,
    marginTop: 20,
    flexDirection:'row'
  },
  right: {
    flex:1,
    flexDirection:'row'
  } ,
  approveDate: {  
    textAlign:'right'
  } 
})

module.exports = ReviewCell