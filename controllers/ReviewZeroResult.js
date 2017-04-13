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


var ReviewZeroResult  = React.createClass({
    render () {
        return ( 
                <View>
                    <Text>
                    '没有找到相关评价'
                    </Text>
                     <Text>
                    '试试其他关键词或者英文关键词进行搜索'
                    </Text>
                </View> 
        )
    }
})

var styles = StyleSheet.create({
    container:{
        color:'#ffffff'
    },
    tipsTitle:{

    },
    tipsContent:{

    }
})

module.exports = ReviewZeroResult