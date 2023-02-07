
// we are saving the api into A VAribALe storing
var SpeechRecognition = window.webkitSpeechRecognition;
 
var recognition = new SpeechRecognition();

// inner html es para MANDAR algo
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
 
recognition.onresult = function(event) {


 console.log(event);


var Content = event.results[0][0].transcript;


    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking your selfie :) --- ");
    speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;


    speak_data = "Taking your selfie in five seconds :)";


    var utterThis = new SpeechSynthesisUtterance(speak_data);


    synth.speak(utterThis);


    Webcam.attach(camera);


    setTimeout(function()
    {
        take_selfie();
        save();
    }, 5000);
}


 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:91
});


function take_selfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}




function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}

