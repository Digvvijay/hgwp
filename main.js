Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:',ml5.version);

Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/48juR1oEN/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');
}

Prediction_1="";
Prediction_2="";

function speak()
{
    var synth=window.speechSynthesis;
    speakdata1="Prediction 1 is"+Prediction_1;
    speakdata2="Prediction 2 is"+Prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}