prediction="";


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera=document.getElementById("camera");

Webcam.attach('camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/f_j5rnwnD/',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');
}

function speak(){
    var synth=window.speechSythesis;
    speak_data_1="My Prediction Is "+ prediction;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);


}
function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("gesture_name").innerHTML = results[0].label;
      prediction_1 = results[0].label;
      speak();
      if(results[0].label == "Thumbs Up")
      {
        document.getElementById("update_gesture").innerHTML = "&#128077;";
      }
      if(results[0].label == "Rockstar")
      {
        document.getElementById("update_gesture").innerHTML = "&#129304;";
      }
      if(results[0].label == "Victory")
      {
        document.getElementById("update_emoji").innerHTML = "&#9996;";
      }
  
    }
  }



