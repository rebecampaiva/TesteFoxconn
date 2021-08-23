// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



    $(document).ready(function () {

        $("#card2").hide();
        $("#card3").hide();
        $("#card4").hide();


        CarregaCardapio();

        $("#AddLanche1").click(function () {

            $("#card2").show();
          
        });

        $("#Lanche1").change(function () {

            $("#Combo1").removeAttr("disabled", false);

            var lancheid = $("#Lanche1").val()
            var qtde = $("#Combo1").is(':checked');
            var combo = $("#Qtde1").val()
            var ingrediente = $("#Ingrediente1").val()

            console.log($("#Ingrediente1"));

            var value = CalculaValor(lancheid, qtde, combo, ingrediente);
            $("#QtdeItens").text("Qtd de Itens: " + combo);

            
        });

        $("#Combo1").change(function () {

            var lancheid = $("#Lanche1").val()
            var qtde = $("#Combo1").is(':checked');
            var combo = $("#Qtde1").val()
            var ingrediente = $("#Ingrediente1").val()

            var value = CalculaValor(lancheid, qtde, combo, ingrediente);

            $("#QtdeItens").text("Qtd de Itens: " + combo);


        });

        $("#Ingrediente1").change(function () {

            var lancheid = $("#Lanche1").val()
            var qtde = $("#Combo1").is(':checked');
            var combo = $("#Qtde1").val()
            var ingrediente = $("#Ingrediente1").val()

            var value = CalculaValor(lancheid, qtde, combo, ingrediente);

            $("#QtdeItens").text("Qtd de Itens: " + combo);


        });

        $("#Qtde1").change(function () {

            var lancheid = $("#Lanche1").val()
            var qtde = $("#Combo1").is(':checked');
            var combo = $("#Qtde1").val()
            var ingrediente = $("#Ingrediente1").val()

            var value = CalculaValor(lancheid, qtde, combo, ingrediente);

            $("#QtdeItens").text("Qtd de Itens: " + combo);



        });

        $("#AddLanche2").click(function () {

            $("#card3").show();

        });

       $("#AddLanche3").click(function () {

           $("#card4").show();

        });

        $("#SubLanche2").click(function () {

            $("#card2").hide();

        });

        $("#SubLanche3").click(function () {

            $("#card3").hide();

        });

        $("#SubLanche4").click(function () {

            $("#card4").hide();

        });



    });

function CalculaValor(lancheid, qtde, combo, ingrediente) {

    $.ajax({
        type: "POST",
        url: "/Pedido/CalculaValorLanche",
        data: { lancheid: lancheid, qtde: combo, combo: qtde, ingrediente: ingrediente },
        dataType: "json",
        success: function (result) {
            console.log(result);
            $("#ValorPedido").text("Valor: R$ " + result);
            return result;


        },
        error: function (result) {

        }
    });



}

function CarregaCardapio() {

    $.ajax({
        type: "GET",
        url: "/Home/CarregaCardapio",

        dataType: "json",
        success: function (dados) {
            $(dados).each(function (i, item) {

                console.log(dados);

                $("#rowCardapio").append("<div class='col-md-3'> <div class='card' id='cardCardapio" + [i] + "'><div class='card-header'><span id='headerCardapio" + [i] + "'>" + dados[i].nome + " - R$: " + dados[i].valorBase + "</span> </div></div><div class='card-body' style='height: 12em;' id = 'bodyCardapio" + [i] + "'><img src=" + dados[i].imagemCaminho + " width='200' height='auto'/> </div><div class='card-footer'><a href='/Pedido/Create' id='fazerPedido'>Fazer Pedido : )</a ></div ></div ></div >");


            });
        }
    });
}
