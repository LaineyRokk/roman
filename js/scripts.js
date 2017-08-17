$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputForm = parseInt($("#inputForm").val());
    var answer = "";
    for (var i=0; i<5; i++) {
      if (inputForm >= 1000) {
        inputForm = inputForm - 1000;
        answer = answer.concat("M");
        alert(answer);
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm >= 100) {
        inputForm = inputForm - 100;
        answer = answer.concat("C");
        alert(answer);
      }
    }
    for (var i=0; i<5; i++) {
      if (inputForm >= 10) {
        inputForm = inputForm - 10;
        answer = answer.concat("X");
        alert(answer);
      }
    }
  });
});
