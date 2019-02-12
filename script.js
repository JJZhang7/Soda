$("button").click(function(){
    var name= $("P").val();
    $("p").append(name);
});
$("button").click(function(){
    var amount =$(".B").val();
    var total= amount * 312;
    $("p").append(total);
    $(".A").hide();
    $(".B").hide();
    $(".C").hide();
    $("h1").hide();
    $("button").hide();
    $("p").show();
    $("h2").show();
});