//
// Build Snazzy Ref Objects
//

// const snazzyElements = Array.prototype.slice.call(document.querySelectorAll('.snazzy'));
// const snazzyObjects = [];

// function buildSnazzyObjects(data){
//   data.map(function(value){
//     snazzyObjects.push(new Snazzy(value));
//   })
// }

// function Snazzy(element){
//   this.element = element;
//   this.trigger = this.element.id;
// }

// buildSnazzyObjects(snazzyElements);


//
// Build Snazzy Triggers
//

const snazzyTriggerElements = Array.prototype.slice.call(document.querySelectorAll("[data-target^='snazzy']"));
const snazzyTriggerObjects = [];

function buildSnazzyTriggerObjects(data){
  data.map(function(value){
    snazzyTriggerObjects.push(new SnazzyTrigger(value));
  });
}

var reveal = function(snazzyRef){
  console.log(document.getElementById(snazzyRef));
}

var slide = function(snazzyRef){
  console.log(document.getElementById(snazzyRef));
}

function SnazzyTrigger(element){
  this.element = element;
  this.snazzyRef = element.getAttribute("data-target");
  this.eventRef = element.getAttribute("data-event");
  this.animationRef = element.getAttribute("data-animation");
  this.element.addEventListener(this.eventRef, this.animationRef(this.snazzyRef));
}

buildSnazzyTriggerObjects(snazzyTriggerElements);



//
// Add Snazzy Prototype Methods
//

// Snazzy.prototype.animateIn = function(element, animation) {
//   this.element.className += " snazzy-enter " + animation;
// }


