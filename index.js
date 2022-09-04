
var genre = $("body").attr("id");
var i = 2

$(".interest-icon").click(function(){

    var choice = $(this).attr("id")
    if (i === 4){
        togglePremiumPopup()
        $("#overlay").css("display", "block")
    }
    else if (choice == "like"){
        toggleMatchPopup()
        $("#overlay").css("display", "block")
    }
    else if (choice == "hate"){
        $(".book-image").attr("src", "images/" + genre + "/" + genre + i +".jpg")
        console.log(i)
        i += 1
    }
})


$(".close-premium-popup").click(function(){
    togglePremiumPopup()
})
$(".close-match-popup").click(function(){
    toggleMatchPopup()
})

function toggleMatchPopup() {
    $(".match-popup").toggle();
    $("#overlay").css("display", "none")
}

function togglePremiumPopup() {
    $(".premium-popup").toggle();
    $("#overlay").css("display", "none")
}

