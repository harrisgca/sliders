Session.setDefault('redValue', 0);
Session.setDefault('greenValue', 0);
Session.setDefault('blueValue', 0);
Session.setDefault('alphaValue', 1.0);

var redChange = function(event){
  if (event.target.name === 'red') {
    return true;
  }
}
var greenChange = function(event){
  if (event.target.name === 'green') {
    return true;
  }
}
var blueChange = function(event){
  if (event.target.name === 'blue') {
    return true;
  }
}
var alphaChange = function(event){
  if (event.target.name === 'alpha') {
    return true;
  }
}
var currentRed = function(){
  return Session.get('redValue');
}

var currentBlue = function(){
  return Session.get('blueValue');
}

var currentGreen = function(){
  return Session.get('greenValue');
}

var currentAlpha = function(){
  return Session.get('alphaValue');
}

Template.content.helpers({
  redValue: function(){
    return Session.get('redValue');
  },
  greenValue: function(){
    return Session.get('greenValue');
  },
  blueValue: function(){
    return Session.get('blueValue');
  },
  alphaValue:function(){
    return Session.get('alphaValue');
  }
});

Template.slider.events({
  'input': function(event){
    var newvalue = '';

    if (redChange(event)) {
      Session.set('redValue', event.target.value);
    }else if (greenChange(event)) {
      Session.set('greenValue', event.target.value);
    }else if (blueChange(event)) {
      Session.set('blueValue', event.target.value);
    }else if (alphaChange(event)) {
      Session.set('alphaValue', event.target.value)
    }//end if/else

    newValue = 'rgba(' + currentRed() + ',' + currentGreen() + ',' + currentBlue() + ',' + currentAlpha()+ ')';
    console.log(newValue);

    $("[data-id='box']")
    // $(".box")
      .css('background-color', newValue);
  }
});