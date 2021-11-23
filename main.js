function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XcN4DXmmR/', modelReady);
}

function modelReady()
{
    classifier.classify(gotresults);
}