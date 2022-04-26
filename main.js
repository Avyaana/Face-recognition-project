Webcam.set({
    width:350, 
    height:300, 
    image_format : 'png', png_quality:90 }); 
    camera = document.getElementById("camera"); 
    Webcam.attach( '#camera' );
function Take_snapshot() {
   Webcam.snap (function (data_url) {
       document.getElementById ("Result").innerHTML= '<img id="Capture_Image" src= " '+data_url +' " />';

       
   });
   
}
console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/spAuDPMYu/model.json',modelLoaded);
function modelLoaded (){
   console.log('model Loaded');
}
