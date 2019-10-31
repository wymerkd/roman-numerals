var testArray = ["3","4","1", "0"]
var oneToNine = ["1","2","3","4", "5", "6", "7", "8", "9"]
var romanOnes = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']
var romanTens = ['x', 'xx', 'xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc']
var romanHundreds = ['c', 'cc', 'ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'cm' ]
romanThousands = ['m', 'mm', 'mmm']
var userArray = []



var thousandsfunction = function(thousand){
  for (i = 0; i < oneToNine.length; i++){
    if (testArray.length === 4 && oneToNine[i] == testArray[0] && testArray[0] < 4){
      userArray.push(romanThousands[i])
      for (i = 0; i < oneToNine.length; i++){
        if (testArray.length === 4 && oneToNine[i] == testArray[1]){
          userArray.push(romanHundreds[i])
          for (i = 0; i < oneToNine.length; i++){
            if (testArray.length === 4 && oneToNine[i] == testArray[2]){
              userArray.push(romanTens[i])
              for (i = 0; i < oneToNine.length; i++){
                if (testArray.length === 4 && oneToNine[i] == testArray[3]){
                  userArray.push(romanOnes[i])
                }
              }
            }
          }
        }
      }
    }
  }
}
var hundredsfunction = function(hundred){
  for (i = 0; i < oneToNine.length; i++){
    if (testArray.length === 3 && oneToNine[i] == testArray[0]){
      userArray.push(romanHundreds[i])
      for (i = 0; i < oneToNine.length; i++){
        if (testArray.length === 3 && oneToNine[i] == testArray[1]){
          userArray.push(romanTens[i])
          for (i = 0; i < oneToNine.length; i++){
            if (testArray.length === 3 && oneToNine[i] == testArray[2]){
              userArray.push(romanOnes[i])
            }
          }
        }
      }
      console.log(userArray)
    }
  }
}




//
// var hundredsFunction = function(hundred){
  //   for (i = 0; i < oneToNine.length; i++){
    //     if (testArray.length === 3 && oneToNine[i] == testArray[1]){
      //       userArray.push(romanHundreds[i])
      //       for (i = 0; i < oneToNine.length; i++){
        //         if (testArray.length === 3 && oneToNine[i] == testArray[2]){
          //           userArray.push(romanTens[i])
          //           for (i = 0; i < oneToNine.length; i++){
            //             if (testArray.length === 3 && oneToNine[i] == testArray[3]){
              //               userArray.push(romanOnes[i])
              //               // console.log(userArray)
              //             }
              //           }
              //         }
              //       }
              //     }
              //   }
              // } else if (testArray.length === 3 && oneToNine[i] == testArray[0] && testArray[0] < 3){
                //   userArray.push(romanHundreds[i])
                //   for (i = 0; i < oneToNine.length; i++){
                  //     if (testArray.length === 3 && oneToNine[i] == testArray[1]){
                    //       userArray.push(romanTens[i])
                    //       for (i = 0; i < oneToNine.length; i++){
                      //         if (testArray.length === 3 && oneToNine[i] == testArray[2]){
                        //           userArray.push(romanOnes[i])
                        //         }
                        //       }
                        //     }
                        //   }
                        // } else if (testArray.length === 2 && oneToNine[i] == testArray[0] && testArray[0] < 2){
                          //   userArray.push(romanTens[i])
                          //   for (i = 0; i < oneToNine.length; i++){
                            //     if (testArray.length === 2 && oneToNine[i] == testArray[1]){
                              //       userArray.push(romanOnes[i])
                              //     }
                              //   }
                              // } else if (testArray.length === 1 && oneToNine[i] == testArray[0] && testArray[0] < 1){
                                //   for (i = 0; i < oneToNine.length; i++){
                                  //     if (testArray.length === 1 && oneToNine[i] == testArray[1]){
                                    //       userArray.push(romanOnes[i])

                                    // var tensfunction = function(tens){
                                      //   for (i = 0; i < oneToNine.length; i++){
                                        //     if (testArray.length === 2 && oneToNine[i] == testArray[0]){
                                          //       userArray.push(romanTens[i])
                                          //       for (i = 0; i < oneToNine.length; i++){
                                            //         if (testArray.length === 2 && oneToNine[i] == testArray[1]){
                                              //           userArray.push(romanOnes[i])
                                              //           console.log(userArray)
                                              //         }
                                              //       }
                                              //     }
                                              //   }
                                              // }
                                              //




                                              //User Interface
                                              $(document).ready(function(){
                                                $(".userInput").submit(function(event){
                                                  event.preventDefault();
                                                  var userInput = $("#userNumber").val();
                                                  var userNumbers = userInput.split('');

                                                  $("#userResult").text(userInput);
                                                });
                                              });
