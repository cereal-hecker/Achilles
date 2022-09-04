
var genre = $("body").attr("id");
var i = 2
var flag = 0


$(".interest-icon").click(function(){
    var choice = $(this).attr("id")
    if (i >= 4){
        togglePremiumPopup()
        $("#overlay").css("display", "block")
        flag = 2
    }
    else if (choice == "like"){
        toggleMatchPopup()
        $("#overlay").css("display", "block")
        flag = 1
    }
    else if (choice == "hate"){
        $(".book-image").attr("src", "images/" + genre + "/" + genre + i +".jpg")
        console.log(i)
        i += 1
    }
    console.log("flag = " + flag + ", i = " + i)
})



    $("div.close-match-popup").click(function(){
        toggleMatchPopup()
    })


    $("div.close-premium-popup").click(function(){
        togglePremiumPopup()
    })



function toggleMatchPopup() {
    $(".match-popup").toggle();
    $("#overlay").css("display", "none")
}

function togglePremiumPopup() {
    $(".premium-popup").toggle();
    $("#overlay").css("display", "none")
}

