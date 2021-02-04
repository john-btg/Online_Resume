$("label").hide();
$("progress span").hide();
$("#skillmenu li").mouseover(function () { 
    $("label span").text("");
    $("progress span:first").show;
    $("progress").attr("value",$(this).attr("value"))
    $("label span").text($(this).attr("name")+" : ");
   
    $("label").show();

});
$("#skillmenu li").mouseout(function () { 
    $("label").hide();
});