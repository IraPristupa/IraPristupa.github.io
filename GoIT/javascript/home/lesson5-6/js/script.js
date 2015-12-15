var Timer = function() {
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.ms = 0;
  
  this.timers = {
    hours: false,
    minutes: false,
    seconds: false,
    ms: false
  }
}

Timer.prototype.startTimer = function() {  
  this.toggleElement('st', 'Pause', 't.pauseTimer()')

  this.setInterval('hours', 3600000)
  this.setInterval('minutes', 60000)
  this.setInterval('seconds', 1000)
  this.setInterval('ms', 1)
}

Timer.prototype.stopTimer = function() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.ms = 0;
  
  for(var t in this.timers) {
    document.getElementById(t).innerHTML = '00'
  }
  this.toggleElement('st', 'Start', 't.startTimer()')
}

Timer.prototype.pauseTimer = function() {
  this.toggleElement('st', 'Cont..', 't.startTimer()')
   for(var t in this.timers) {
    clearInterval(this.timers[t])
  }
}

Timer.prototype.setInterval = function(elementName, delay) {
  var self = this
  this.timers[elementName] = setInterval(function() {
     var result = ++self[elementName]
     if(result < 10) {
       result = '0'+self[elementName]
     }
     document.getElementById(elementName).innerHTML = result
  }, delay)
}

Timer.prototype.toggleElement = function(element, text, fn) {
  var e = document.getElementById(element)
  e.innerHTML = text
  e.setAttribute('onclick', fn)
}


var t = new Timer()