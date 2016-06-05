API.on(API.DJ_ADVANCE, callback);
API.on(API.CHAT, chatCallback);
var running = true;

function chatCallback(data) {
    if (data.message == "!historylockskip" && API.getUser(data.fromID) >= 2) {
        if (running === true) {
            return;
        } else {
            return;
        }
    }
}

function callback(e) {
    if (e === null || running === false) {
        return;
    }
    var t = e.media.author;
    var n = e.media.title;
    var r = API.getHistory();
    var s = e.dj;
    for (var i in r) {
        if (r[i].media.author == t && r[i].media.title == n) {
            API.moderateRoomProps(true, true);
            setTimeout(function () {
                API.moderateForceSkip();
            }, 1300);
            setTimeout(function () {
                API.moderateRoomProps(false, true);
            }, 2000);
            API.sendChat("@" + s.username + "Song was already played, please next time check the history!");
            break;
        }
    }
}
