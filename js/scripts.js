$(document).ready(function(){
  $("form#input").submit(function(event){ 
    event.preventDefault();
    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();

    let cSharp = 0;
    let python = 0;
    let javaScript = 0;

    if (question1 === "1") {
      python += 1;
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
    }
    if (question4 === "1") {
      javaScript += 1;
    }
    if (question5 === "1"){
      python += 1;
    }


    if (javaScript >= python || javaScript >= cSharp) {
      $("#output").text("Use JavaScript")
    } else if (cSharp >= python) {
      $("#output").text("Use C#")
    } else {
      $("#output").text("Use Python")
    }
  });
});