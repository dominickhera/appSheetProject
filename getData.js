import React from 'react';

function getJSON(arr, end) {
    ajax({
    type: 'get',
    async: false,
    url: "https://appsheettest1.azurewebsites.net/sample/" + end,
    dataType: "json",

    success: function(data) {
      console.log(data);
      for (i = 0; i < data.result.length;i++)
      {
        arr.push(data.result[i]);
      }
      end = data.token;
      if(data.token)
      {
        let newEnd = "list?token=" + data.token;
        getJSON(arr, newEnd);
      }
    }
  });
  return arr;
}

function getUserData(arr, end) {
    $.ajax({
    type: 'get',
    async: false,
    url: "https://appsheettest1.azurewebsites.net/sample/detail/" + end,
    dataType: "json",

    success: function(data) {
      arr.push(data);
      return arr;
    }
  });
  return arr;
}


export const getUserList = ()=>{
  var userNumArray = [];
  var userInfoArray = [];

  userNumArray = getJSON(userNumArray, "list");

  for (i = 0; i < userNumArray.length;i++)
  {
    userInfoArray = getUserData(userInfoArray, userNumArray[i]);
  }


  // return JSON.parse(userInfoArray);
  return userInfoArray;
}


// async function getMoviesFromApi(arr, end) {
//     var url = 'https://appsheettest1.azurewebsites.net/sample/' + end;

// var result = await fetch(url, {
//     method: 'get',
//   }).then(function(response) {
//     return response.json(); // pass the data as promise to next then block
//   }).then(function(data) {
//     for(i = 0; i < data.result.length;i++)
//     {
//       arr.push(data.result[i]);
//     }

//    if(data.token)
//    {
//     let newEnd = "list?token=" + data.token;
//     // console.log(arr);
//     dataCheck(arr, newEnd);
//    }
//    else
//    {
//     console.log("ending");
//     // console.log(arr);
//     // let returnArr = await arr;
//     return arr;
//    }
// })

//   .catch(function(error) {
//     console.log('Request failed', error)
//   })
// }


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

     if(data.token)
     {
      // console.log("m");
      // console.log(data.token);
      let newEnd = "list?token=" + data.token;
      // console.log(arr);
      dataCheck(arr, newEnd);
     }
     // else
     // {
      idea = 2;
      // console.log(data.token);
      // console.log(arr);
      // let returnArr = await arr;
      // return await arr;
     // }
  })

    .catch(function(error) {
      console.log('Request failed', error)
    })
    if(idea == 2) {
      // console.log(end);
      return await arr;
    }
    else
    {
      return await result;
    }
    // return await result;
}


export const userInfoGrab =  async (arr, end) => {
  var url = 'https://appsheettest1.azurewebsites.net/sample/detail/' + end;

var result = await fetch(url, {
    method: 'get',
  }).then(function(response) {
    return response.json(); // pass the data as promise to next then block
  }).then(function(data) {
      arr.push(data);
      // console.log(arr);
      // console.log("hi");
    // return arr;
})

  .catch(function(error) {
    console.log('Request failed', error)
  })

  return await arr;
}

export const getUserInfoList = async (arr) => {
  var userNumArray = [];
  var tempIdea = [];
  userNumArray = dataCheck(userNumArray, "list");
  tempIdea = await userNumArray;
  // .then(data => console.log(data))
  // .catch(reason => console.log(reason.message));
  console.log(tempIdea);
  for(i = 0; i < tempIdea.length; i++)
  {
    arr = userInfoGrab(arr, tempIdea[i]);
    // console.log(await arr);
  }

  console.log(await arr);
  return arr;
 
}


