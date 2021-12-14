//$("") é para chamar class, id ou tag do html.

//(".botao").click serve para executar algo quando clicar.

// let data foi criado para recebar a data do html e o val() para receber o valor.

//$.ajax ({url: "link da url"}) é para fazer uma requisição.

//$.ajax ({url: `link=${}`}) é para receber o valor variável que o usuário irá colocar.

//type: "GET" faz a leitura da a API

//success: function (){} função que será executada caso a requisição seja bem sucedida.

//foi chamado a class do paragrafo que contém no html $(".informacao") e o .text é para saber a forma que queremos o conteúdo, (result.explanation) vai

$(".botao").click(function () {
  let data = $(".data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=qVDkucro3yjedvZtvvrhBuddqxWWRa4Fg5PjmWu0&date=${data}`,
    type: "GET",
    success: function (result) {
      $(".informacao").text(result.explanation);
      $(".imagem").attr("src", result.url);
      $(".imagem").css("display", "block");
      $(".titulo").text(result.title);
    },
  });
});
