function getBotResponse() {
  var rawText = $("#textInput").val();
  if (rawText==""){
  
    var userHtml = '<p class="botText"><img src="static/robo.png" alt="Avatar" style="width:90px"> <span>Chat Bot: Escolha Uma Opçao Acima </span></p>';
    
    $("#chatbox").append(userHtml);
    document
      .getElementById("userInput")
      .scrollIntoView({ block: "start", behavior: "smooth" });

  }
  else{
    var userHtml = '<p class="userText"> <span>' + rawText + " : Usuario  </span><img src='static/cliente.png' alt='Avatar' style='width:90px'></p>";
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document
    .getElementById("userInput")
    .scrollIntoView({ block: "start", behavior: "smooth" });
  $.get("/get", { msg: rawText }).done(function(data) {
    var botHtml = '<p class="botText"><img src="static/robo.png" alt="Avatar" style="width:90px"> <span>Chat Bot:' + data + " </span></p>";
    
    $("#chatbox").append(botHtml);
    document
      .getElementById("userInput")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });
}
}
//funçao envia quando clicar enter
$(document).on("keypress", "input", function(e){
  if(e.which == 13){
      getBotResponse();
  }
});

//essa funçao e pra da enter no text envia mensagem
$("textInput").keypress(function(e) {
  if (e.which == 13) {
    getBotResponse();
  }
});


function Chatbot(){

    setTimeout(function() {
      $('.Container').toggleClass('effectContainer');
    }, 500);

  
}