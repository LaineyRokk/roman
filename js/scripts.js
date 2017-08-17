$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputForm = parseInt($("#inputForm").val());
    var answer = "";
    for (var i=0; i<5; i++) {
      if (inputForm >= 1000) {
        inputForm = inputForm - 1000;
        answer = answer.concat("M");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 900) {
        answer = answer.concat("CM");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 500) {
        answer = answer.concat("D");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 400) {
        answer = answer.concat("CD");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm >= 100) {
        inputForm = inputForm - 100;
        answer = answer.concat("C");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 90){
        answer = answer.concat("XC");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 50) {
        answer = answer.concat("L");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 40) {
        answer = answer.concat("XL");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm >= 10) {
        inputForm = inputForm - 10;
        answer = answer.concat("X");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 9) {
        answer = amswer.concat("IX");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 5) {
        answer = answer.concat("V");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm === 4) {
        answer = answer.concat("IV");
        break;
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm >= 1) {
        inputForm = inputForm -1;
        answer = answer.concat("I");
        break;
      }
    }
    alert(answer);
  });
});
