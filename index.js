//
// Snazzy
//

const snazzyTriggerEl = Array.prototype.slice.call(document.querySelectorAll("[data-target^='snazzy']"));

snazzyTriggerEl.map(function(el){
  const snazzyEvent = el.getAttribute('data-event');
  const snazzyTarget = el.getAttribute('data-target');
  el.setAttribute('state', 0);
  addAnimationEventListeners(snazzyTarget, el);
  addSnazzyEventListeners(el, snazzyEvent, snazzyTarget);
});

function addAnimationEventListeners(snazzyTarget, snazzyTrigger){
  var snazzyTarget = document.getElementById(snazzyTarget);
  snazzyTarget.addEventListener("webkitAnimationStart", function(event){
    this.classList.add('snazzy-enter-active');
  });
  snazzyTarget.addEventListener("webkitAnimationEnd", function(event){
    this.classList.remove('snazzy-enter-active');
  });
}

function addSnazzyEventListeners(el, snazzyEvent, snazzyTarget){
  el.addEventListener(snazzyEvent, function(){
    animate(this, snazzyTarget);
  }, false);
}


function animate(self, target){
  var targetElement = document.getElementById(target);
  if(self.getAttribute('state') == 0){
    self.setAttribute('state', 1);
    enterAnimation(targetElement);
  } else {
    self.setAttribute('state', 0);
    leaveAnimation(targetElement);
  }
}

function enterAnimation(target){
  target.classList.add('snazzy-enter');
  target.classList.remove('snazzy-leave');
}

function leaveAnimation(target){
  target.classList.remove('snazzy-enter');
  target.classList.add('snazzy-leave');
}

