import React from 'react';
import axios from 'axios';
import {getUserInfoList} from './getData.js';

import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){

    var tempArray = [];
    tempArray = getUserInfoList(tempArray);
    // let temp = dataCheck();
    // console.log( tempArray);
    // Promise.all([tempArray]).then(res => {
    //   console.log(res);
    // })
    // this.tempArray.then(console.log);
    // let temp = "temp";
    this.setState({
          isLoading: false,
          dataSource: "temp",
        }, function(){

        });

  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:60, paddingLeft: 15}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item}, {item}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
