$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputForm = parseInt($("#inputForm").val());
    var answer = "";
   for (var i=0; i<5; i++) {
      if (inputForm >= 1000) {
        inputForm = inputForm - 1000;
        answer = answer.concat("M");
      }
    // }
    // for (var i=0; i<5; i++) {
      // else if (inputForm === 900) {
      //   answer = answer.concat("CM");
    //   }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm >= 500) {
        answer = answer.concat("D");
      }
    // }
  //  for (var i=0; i<5; i++) {
      // else if (inputForm === 400) {
      //   answer = answer.concat("CD");
    //   }
    // }
  //  for (var i=0; i<5; i++) {
      else if (inputForm >= 100) {
        inputForm = inputForm - 100;
        answer = answer.concat("C");
      }
    // }
  //  for (var i=0; i<5; i++) {
      // else if (inputForm === 90){
      //   answer = answer.concat("XC");
      // }
    // }
  //  for (var i=0; i<5; i++) {
      else if (inputForm >= 50) {
        answer = answer.concat("L");
      }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm >= 40) {
        answer = answer.concat("XL");
      }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm >= 10) {
        inputForm = inputForm - 10;
        answer = answer.concat("X");
      }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm === 9) {
        answer = "IX";
      }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm > 5 ) {
        if (inputForm >= 9) {
          inputform-9
          answer= ansewr.concat("xi")
        } // if its great then 5 and not nine then do whats below
        answer = answer.concat("V")
        inputform = inputForm - 1;
        answer = answer.concat("I");
      }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm === 5) {
        answer = "V";
      }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm === 4) {
        answer = "IV";
      }
    }
  //  for (var i=0; i<5; i++) {
      else if (inputForm >= 1) {
        inputForm = inputForm -1;
        answer = answer.concat("I");
        alert(answer);
      }
    }
    // alert(answer);
  });
});
