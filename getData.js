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


export const dataCheck = (arr, end) => {
  var url = 'https://appsheettest1.azurewebsites.net/sample/' + end;

var result = fetch(url, {
    method: 'get',
  }).then(function(response) {
    return response.json(); // pass the data as promise to next then block
  }).then(function(data) {
    for(i = 0; i < data.result.length;i++)
    {
      arr.push(data.result[i]);
    }
    // var rocketId = data.rocket.rocket_id;
    console.log(data);
    // console.log(rocketId, '\n');
   var nextToken = data.token;

   if(data.token)
   {
    let newEnd = "list?token=" + nextToken;
    // console.log(arr);
    dataCheck(arr, newEnd);
   }
   else
   {
    return arr;
   }
   // console.log(nextToken);
      // return fetch('https://appsheettest1.azurewebsites.net/sample/list?token=' + nextToken);
    // return fetch('https://api.spacexdata.com/v2/rockets/' + rocketId); // make a 2nd request and return a promise
  })
  // .then(function(response) {
  //   return response.json();
  // })
  .catch(function(error) {
    console.log('Request failed', error)
  })

// I'm using the result variable to show that you can continue to extend the chain from the returned promise
// result.then(function(r) {
  // return r.result;
  // console.log(r.result); // 2nd request result
// });
  return arr;
}



