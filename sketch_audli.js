

// Global variable to store the classifier
let classifier;


let labelx = "Starting";
let labely = "0%";

let labelx1,labelx2,labely1,labely2;

// Teachable Machine model URL:
//let soundModelURL = 'https://teachablemachine.withgoogle.com/models/Q4wHlYW6l/model.json';
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/GkN1Ww-D1/model.json';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
  createCanvas(600, 1200);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background('#4527a0');
  // Draw the label in the canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Closest Match", width / 4, height / 3);textSize(28);
  text(labelx, width / 4, height / 2.6);
  text(labely, width / 4, height / 2.4);
  
  textSize(32);
  text("Other Matches", width / 1.3, height / 3);textSize(28);
  text(labelx1, width / 1.3, height / 2.6);
  text(labely1, width / 1.3, height / 2.4);
  
  text(labelx2, width / 1.3, height / 2.0);
  text(labely2, width / 1.3, height / 1.9);
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);
  labelx = results[0].label;
  labely = "Accuracy "+round(results[0].confidence*100)+"%";
  
  labelx1 = results[1].label;
  labely1 = "Accuracy "+round(results[1].confidence*100)+"%";
  
  labelx2 = results[2].label;
  labely2 = "Accuracy "+round(results[2].confidence*100)+"%";
}