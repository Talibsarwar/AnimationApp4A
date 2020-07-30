var cloudElement = document.getElementById("cloud-div");

var animatedElem = cloudElement.animate([
    { transform: 'translate(0, 0)' },
    { transform: 'translate(60%, 0)' },
], {
    duration: 5000,
    iterations: Infinity,
    playbackRate: -4,
})

var planeElement = document.getElementById("plane-div");

var planeInAnimation = planeElement.animate([
  { transform: 'translate(0, -320px)' },
  { transform: 'translate(600px, -150px)' },
  { transform: 'translate(800px, 0)' },
  { transform: 'translate(1000px, 150px)' },
  { transform: 'translate(1200px, 320px)' },
  { transform: 'translate(100%, 320px)' },
], {
    duration: 10000,
    iterations: Infinity,
})

var jetElement = document.getElementById("jet-div");

var jetInAnimation = jetElement.animate([
    { transform: 'translate(0, 0)' },
    { transform: 'translate(300px, 0)' },
    { transform: 'translate(4000px, -500px)' },
    { transform: 'translate(100%, -600px)' },
], {
    duration: 2000,
    iterations: Infinity,
})
