const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

const timer = new Timer(durationInput, startButton, pauseButton, {
  //the callback object tells the outside world that the Start/Tick/Complete events occurs

  onStart() {
    console.log("timer started");
  },

  onTick() {
    console.log("ticking down");
  },

  onComplete() {
    console.log("timer completed");
  },
});
