
// var numbersArray = [1,5,10,50,100,500,1000]

// var addNumbers = function(userNumbers) {
//   numbers.forEach(function(number) {
//     return (romanArray + romanArray);
//   });
// }
//
//  console.log(romanArray);
// var i = 1
// var v = 5
// var x = 10
// var l = 50
// var c = 100
// var d = 500
// var m = 1000
//
// var romanArray = [i, v, x, l, c, d, m]
// var testArray = [1]
// for(j = 0; j < testArray.length; j++){
//   for (k = 0; k < romanArray.length; k++){
//   if (testArray[j] === romanArray[k]) {
//     console.log[romanArray[k]
//   }
// }
// }
var testArray = ["3","4","1", "0"]
var oneToNine = ["1","2","3","4", "5", "6", "7", "8", "9"]
var romanOnes = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']
var romanTens = ['x', 'xx', 'xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc']
var romanHundreds = ['c', 'cc', 'ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'cm' ]
romanThousands = ['m', 'mm', 'mmm']
var userArray = []



var tensfunction = function(tens){
  for (i = 0; i < oneToNine.length; i++){
    if (testArray.length === 4 && oneToNine[i] == testArray[0] && testArray[0] < 4){
    userArray.push(romanThousands[i])
    for (i = 0; i < oneToNine.length; i++){
      if (testArray.length === 4 && oneToNine[i] == testArray[1]){
      userArray.push(romanHundreds[i])
      for (i = 0; i < oneToNine.length; i++){
        if (testArray.length === 4 && oneToNine[i] == testArray[1]){
        userArray.push(romanTens[i])
        for (i = 0; i < oneToNine.length; i++){
          if (testArray.length === 4 && oneToNine[i] == testArray[1]){
          userArray.push(romanOnes[i])
        console.log(userArray)
      }
    }
    }
  }
    console.log(userArray)
  }
}
}
}
}


var tensfunction = function(tens){
  for (i = 0; i < oneToNine.length; i++){
    if (testArray.length === 2 && oneToNine[i] == testArray[0]){
    userArray.push(romanTens[i])
    for (i = 0; i < oneToNine.length; i++){
      if (testArray.length === 2 && oneToNine[i] == testArray[1]){
      userArray.push(romanOnes[i])
    console.log(userArray)
  }
}
}
}
}





//User Interface
$(document).ready(function(){
$(".userInput").submit(function(event){
  event.preventDefault();
  var userInput = $("#userNumber").val();
  var userNumbers = userInput.split('');
  // userArray = parseInt(userArray);

  $("#userResult").text(userInput);
});
});
