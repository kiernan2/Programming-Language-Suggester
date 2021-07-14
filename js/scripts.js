$(document).ready(function(){
  $("form#input").submit(function(event){ 
    event.preventDefault();
    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();
    const name = $("input#name").val();

    let cSharp = 0;
    let python = 0;
    let javaScript = 0;

    if (question1 === "1") {
      python += 1;
    } else if (question1 === "2"){
      cSharp += 1;
    } else {
      javaScript += 1;
    }
    if (question2 === "1") {
      python += 1;
    } else if (question2 === "2") {
      cSharp += 1;
    } else {
      javaScript += 1;
    }
    if (question3 === "1") {
      cSharp += 1;
    } else if (question3 === "2") {
      python += 1;
    } else {
      javaScript += 1;
    }
    if (question4 === "1") {
      javaScript += 1;
    } else if (question4 === "2") {
      cSharp += 1;
    } else {
      python += 1;
    }
    if (question5 === "1"){
      python += 1;
    } else if (question5 === "2") {
      cSharp += 1;
    } else {
      javaScript += 1;
    }


    if (javaScript >= python || javaScript >= cSharp) {
      $("#output").text(name + " Use JavaScript")
      $("#output").fadeTo(600,1);
    } else if (cSharp >= python) {
      $("#output").text(name +" Use C#")
      $("#output").fadeTo(600,1);
    } else {
      $("#output").text(name + " Use Python")
      $("#output").fadeTo(600,1);
    }
  });
});