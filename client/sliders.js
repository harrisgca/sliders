Session.setDefault('redValue', 0);
Session.setDefault('greenValue', 0);
Session.setDefault('blueValue', 0);

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

Template.content.helpers({
  redValue: function(){
    return Session.get('redValue');
  },
  greenValue: function(){
    return Session.get('greenValue');
  },
  blueValue: function(){
    return Session.get('blueValue');
  }
});

Template.slider.events({
  'input': function(event){
    // console.log(event.target.value);
    // console.log(event.target.name);
    // Session.set('slideValue', event.target.value)
    if (redChange(event)) {
      Session.set('redValue', event.target.value);
    }else if (greenChange(event)) {
      Session.set('greenValue', event.target.value);
    }else if (blueChange(event)) {
      Session.set('blueValue', event.target.value);
    }
  }
});