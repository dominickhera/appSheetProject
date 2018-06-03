import React from 'react';
import axios from 'axios';
// import {getUserInfoList, dataCheck} from './getData.js';

import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){

    var tempArray = [];
    let finalArray = []
    

//     .then(function(data) {
//       arr.push(data);
//       // console.log(arr);
//       // console.log("hi");
//     return arr;
// }
    // tempArray = dataCheck(tempArray, "list");
    // console.log(tempArray);
    tempArray = getUserInfoList(tempArray);
    tempArray.then(function(data) {
      // console.log(data);
      let subArray = [];
      for(i = 0; i < data.length; i++)
      {
        finalArray.push(data[i]);
      }
      // console.log(finalArray);
    });
    // let temp = dataCheck();
    // console.log(finalArray);
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

    // console.log(this.isLoading);
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


export const dataCheck =  async (arr, end) => {
  var url = 'https://appsheettest1.azurewebsites.net/sample/' + end;
  let idea = 1;
  var result = await fetch(url, {
      method: 'get',
    }).then(function(response) {
      return response.json(); // pass the data as promise to next then block
    }).then(function(data) {
      for(i = 0; i < data.result.length;i++)
      {
        arr.push(data.result[i]);
      }

     if(data.token != undefined)
     {
      // console.log("m");
      // console.log(data.token);
      let newEnd = "list?token=" + data.token;
     //  // console.log(arr);
      dataCheck(arr, newEnd);
     }
     else
     {

      idea = 2;
      // console.log(data.token);
      // console.log(arr);
      // return arr;
      }
      // let returnArr = await arr;
      return arr;
     // }
  })

    .catch(function(error) {
      console.log('Request failed', error)
    })
    if(idea == 2) {
      // console.log(result);
      return await arr;
    }
    else
    {
      return await arr;
    }
    return await arr;
}


export const userInfoGrab =  async (arr, end) => {
  // console.log(arr);
  var url = "https://appsheettest1.azurewebsites.net/sample/detail/" + end;

var result = await fetch(url, {
    method: 'get',
  }).then(function(response) {
    return response.json(); // pass the data as promise to next then block
  }).then(function(data) {
      arr.push(data);
      // console.log(arr);
      // console.log("hi");
    return arr;
})

  .catch(function(error) {
    console.log('Request failed', error)
  })

  return await result;
}




export const getUserInfoList = async (arr) => {
  let userObjectArray = [];
  var listArray = [];
  let tempIdea = [];

  userObjectArray = dataCheck(await userObjectArray, "list");
  tempIdea = await userObjectArray;
  // console.log(tempIdea.length);
  // console.log(tempIdea);
  for(i = 0; i < tempIdea.length; i++)
  {
    listArray.push(tempIdea[i]);
  }

  // console.log(listArray);

   // while (tempIdea.token != undefined) {
    // console.log(tempIdea.token);
    // let newEnd = "list?token=" + tempIdea.token;
    // console.log(newEnd);
    // tempIdea = await dataCheck(tempIdea, newEnd);
    // console.log(tempIdea.token);
    // for(i = 0; i < tempIdea.result.length; i++)
    // {
    //   listArray.push(tempIdea.result[i]);
    // }
  // }
 


  // console.log(listArray);
  // .then(data => console.log(data))
  // .catch(reason => console.log(reason.message));
  // console.log(tempIdea);
  for(i = 0; i < listArray.length; i++)
  {
    arr = userInfoGrab(await arr, listArray[i]);
    // console.log(await arr);
  }

  // console.log(await tempIdea);
  return await arr;
 
}
