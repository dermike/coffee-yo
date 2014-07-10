function CoffeeYo(options) {
  this.options = {
    // default values
    append: '#yo',
    buttonText: 'Coffee is ready!',
    buttonWaitText: 'Sending...',
    buttonSentText: 'Sent!'
  }
  this.options = options;
  self = this;
  this.insertButton();
}

CoffeeYo.prototype.insertButton = function() {
  var template = '<button id="yobutton" class="button expand">' + this.options.buttonText + '</button>';
  $(this.options.append).append(template);
  $('<div id="status"></div>').insertAfter('#yobutton');
  $('#yobutton').click(function() {
    self.send();
  });
};

CoffeeYo.prototype.buttonState = function(state) {
  switch (state) {
    case 'sending':
      $('#yobutton').attr('disabled', 'disabled').html(this.options.buttonWaitText);
      break;
    case 'success':
      // does not re-enable button, page needs to be reloaded to be able to send again
      $('#yobutton').addClass('sent').html(this.options.buttonSentText);
      $('#status').html('');
      break;
    case 'normal':
      $('#yobutton').removeAttr('disabled').html(this.options.buttonText);
      break;
  }
}

CoffeeYo.prototype.send = function(button) {
  this.buttonState('sending');
  $.ajax({
    type: "GET",
    url: 'yo.php',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      self.buttonState('success');
    },
    error: function(e) {
      $('#status').html('Error: ' + e.statusText);
      self.buttonState('normal');
    }
  });
}

var yo = new CoffeeYo({
  append: '#yo',
  buttonText: 'Kaffet &auml;r klart!',
  buttonWaitText: 'Skickar...',
  buttonSentText: 'Skickat!'
});