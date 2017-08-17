$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputForm = parseInt($("#inputForm").val());
    var answer = "";
    for (var i=0; i<5; i++) {
      if (inputForm >= 1000) {
        inputForm = inputForm - 1000;
        answer = answer.concat("M");
      } else if (inputForm >= 500) {
          inputForm = inputForm - 100;
          answer = answer.concat("C");
      } else if (inputForm >= 100) {
          inputForm = inputForm - 100;
          answer = answer.concat("C");
      } else if (inputForm >= 50) {
          inputForm = inputForm - 10;
          answer = answer.concat("L");
      } else if (inputForm >= 10) {
          inputForm = inputForm - 10;
          answer = answer.concat("X");
      } else if (inputForm >= 5) {
          inputForm = inputForm - 1;
          answer = answer.concat("V");
      } else if (inputForm >= 1) {
          inputForm = inputForm - 1;
          answer = answer.concat("I");
      }
    }
    alert(answer);
  });
});
