// timeout in seconds:
var TIMEOUT = 0

var _timer
API.on(API.ADVANCE, function () {
  var current = API.getMedia()
  clearTimeout(_timer)
  _timer = setTimeout(function () {
    // skip if we're still on the same song
    if (API.getMedia().cid === current.cid) {
      API.moderateForceSkip()
      API.sendChat('Song stuck, skipping...');
    }
  }, (current.duration + TIMEOUT) * 1000)
})
