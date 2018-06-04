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

     if(data.token != undefined)
     {
      // console.log("m");
      // console.log(data.token);
      let newEnd = "list?token=" + data.token;
     //  // console.log(arr);
      dataCheck(arr, newEnd);
     }
    //  else
    //  {

      // idea = 2;
      // console.log(data.token);
      // console.log(arr);
      // return arr;
      // }
      // let returnArr = await arr;
      return arr;
     // }
  })

    .catch(function(error) {
      console.log('Request failed', error)
    })
    // if(idea == 2) {
    //   // console.log(result);
    //   return await arr;
    // }
    // else
    // {
    //   return await arr;
    // }
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
    tempIdea = userInfoGrab(await tempIdea, listArray[i]);
    // console.log(await arr);
  }

  // console.log(await tempIdea);
  return arr;
 
}


