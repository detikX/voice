// var playbutton = $("#playbutton")

// playbutton.click(function () {
//     responsiveVoice.cancel();
//     responsiveVoice.speak($('.text').value, $("#voiceselection").val());
// });

// var stopbutton = $("#stopbutton")
// stopbutton.click(function () {
//     responsiveVoice.cancel();
// }) 

$("#play").click(function () {
    responsiveVoice.speak($(".wrap-detikx").text(), "Indonesian Female");

})
$("#stop").click(function () {
    responsiveVoice.cancel();

})
// document.querySelector("button").addEventListener("click", e => {

// })