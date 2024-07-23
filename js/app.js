var playbutton = $("#playbutton")

playbutton.click(function () {
    responsiveVoice.cancel();
    responsiveVoice.speak($('.text').value, $("#voiceselection").val());
});

var stopbutton = $("#stopbutton")
stopbutton.click(function () {
    responsiveVoice.cancel();
}) 