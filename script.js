//connect to the DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

//animate the circle
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentOffset = 0;

//listen to the input time from user
let inputTime = 0;
durationInput.addEventListener("input", (e) => {
  inputTime = e.target.value;
  console.log(inputTime);
});

const timer = new Timer(durationInput, startButton, pauseButton, {
  //the callback object tells the outside world that the Start/Tick/Complete events occurs

  onStart() {
    console.log("timer started");
  },

  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    currentOffset = currentOffset - perimeter / (inputTime * 100);
  },

  onComplete() {
    console.log("timer completed");
    currentOffset = 0;
  },
});
