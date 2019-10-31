var oneToNine = ["1","2","3","4", "5", "6", "7", "8", "9"]
var romanOnes = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']
var romanTens = ['x', 'xx', 'xxx', 'xl', 'l', 'lx', 'lxx', 'lxxx', 'xc']
var romanHundreds = ['c', 'cc', 'ccc', 'cd', 'd', 'dc', 'dcc', 'dccc', 'cm' ]
romanThousands = ['m', 'mm', 'mmm']
var userArray = []



var thousandsfunction = function(thousand){
  for (i = 0; i < oneToNine.length; i++){
    if (thousand.length === 4 && oneToNine[i] == thousand[0] && thousand[0] < 4){
      userArray.push(romanThousands[i])
      for (i = 0; i < oneToNine.length; i++){
        if (thousand.length === 4 && oneToNine[i] == thousand[1]){
          userArray.push(romanHundreds[i])
          for (i = 0; i < oneToNine.length; i++){
            if (thousand.length === 4 && oneToNine[i] == thousand[2]){
              userArray.push(romanTens[i])
              for (i = 0; i < oneToNine.length; i++){
                if (thousand.length === 4 && oneToNine[i] == thousand[3]){
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
    if (hundred.length === 3 && oneToNine[i] == hundred[0]){
      userArray.push(romanHundreds[i])
      for (i = 0; i < oneToNine.length; i++){
        if (hundred.length === 3 && oneToNine[i] == hundred[1]){
          userArray.push(romanTens[i])
          for (i = 0; i < oneToNine.length; i++){
            if (hundred.length === 3 && oneToNine[i] == hundred[2]){
              userArray.push(romanOnes[i])
            }
          }
        }
      }
    }
  }
}
var tensfunction = function(ten){
  for (i = 0; i < oneToNine.length; i++){
    if (ten.length === 2 && oneToNine[i] == ten[0]){
      userArray.push(romanTens[i])
      for (i = 0; i < oneToNine.length; i++){
        if (ten.length === 2 && oneToNine[i] == ten[1]){
          userArray.push(romanOnes[i])
        }
      }
    }
  }
}
var onesfunction = function(one){
  for (i = 0; i < oneToNine.length; i++){
    if (one.length === 1 && oneToNine[i] == one[0]){
      userArray.push(romanOnes[i])
    }
  }
}
console.log(userArray)




//User Interface
$(document).ready(function(){
  $(".userInput").submit(function(event){
    event.preventDefault();
    var userInput = $("#userNumber").val();
    var userNumbers = userInput.split('');
    if (userNumbers.length === 4) {
      thousandsfunction(userNumbers);
    } else if (userNumbers.length === 3) {
      hundredsfunction(userNumbers);
    } else if (userNumbers.length === 2) {
      tensfunction(userNumbers);
    } else if (userNumbers.length === 1) {
      onesfunction(userNumbers);
    };
    $(".result").show();
    var result = userArray.join('').toUpperCase();
    $("h2").html(result);
    userArray = [];
});
});
