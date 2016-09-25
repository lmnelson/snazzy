

const snazzyTriggers = Array.prototype.slice.call(document.querySelectorAll("[data-target^='snazzy']"));
const snazzyTriggerObjects = [];

function buildSnazzyTriggerObjects(data){
  data.map(function(value){
    snazzyTriggerObjects.push(new initSnazzyTrigger(value));
  });
}

function initSnazzyTrigger(element){
  this.element = element;
  this.targetRef = element.getAttribute("data-target");
  this.eventRef = element.getAttribute("data-event");
  this.state = setState();
  addDataEventListener(this);
  addAnimationEventListeners(this);
}

function setState(){
  return 0;
}

function updateState(object){
  object.state = 1 - object.state;
}

function addDataEventListener(object){
  object.element.addEventListener(object.eventRef, function(){
    if(object.state == 0){
      enter(object);
    } else {
      leave(object);
    }
  });
}

function addAnimationEventListeners(object){
  var element = document.getElementById(object.targetRef);
  element.addEventListener("webkitAnimationEnd", function(){
    if(object.state == 0){
      this.classList.remove("snazzy-leave", "snazzy-enter");
    }
  }, false);
}

function enter(object){
  document.getElementById(object.targetRef).classList.add("snazzy-enter");
  updateState(object);
}

function leave(object){
  var element = document.getElementById(object.targetRef);
  element.classList.add("snazzy-leave");
  updateState(object);
}

buildSnazzyTriggerObjects(snazzyTriggers);

