$(document).ready(function(){
    $("#meme").memeGenerator({
        useBootstrap: true,

        defaultTextStyle: {
            color: "#FFFFFF",
            size: 100,
            lineHeight: 1.2,
            font: "Impact, Arial",
            style: "normal",
            forceUppercase: false,
            borderColor: "#000000",
            borderWidth: 5
        },
        maxFontSize: 200
    });

    $("#download").click(function(e){
        e.preventDefault();
        $("#meme").memeGenerator("download", "marymeme.jpg");
    });
});