$(".cs-button-solid-menu").click(function(){
    alert("Tab 2 clicked");
});

$(document).ready(function(){
    $("#tabswitcher1").click(function(event){
        event.preventDefault();
        $("#tab-1").show();
        $("#tab-2, #tab-3").hide();
    });

    $("#tabswitcher2").click(function(event){
        event.preventDefault();
        $("#tab-2").show();
        $("#tab-1, #tab-3").hide();
    });

    $("#tabswitcher3").click(function(event){
        event.preventDefault();
        $("#tab-3").show();
        $("#tab-1, #tab-2").hide();
    });

    // Initially show the first tab content
    $("#tab-1").show();
    $("#tab-2, #tab-3").hide();
});
