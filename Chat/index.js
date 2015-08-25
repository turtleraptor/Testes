var app = {
    
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
		  $("#output").append("GIT HUB GPS!!!");
		  navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }    
};

app.initialize();

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
var onSuccess = function(position) {
    $("#output").append('Latitude: '          + position.coords.latitude          + '<br>' +
          'Longitude: '         + position.coords.longitude         + '<br>' +
          'Altitude: '          + position.coords.altitude          + '<br>' +
          'Accuracy: '          + position.coords.accuracy          + '<br>' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
          'Heading: '           + position.coords.heading           + '<br>' +
          'Speed: '             + position.coords.speed             + '<br>' +
          'Timestamp: '         + position.timestamp                + '<br>');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    $("#output").append('code: '    + error.code    + '<br>' +
          'message: ' + error.message + '<br>');
}
