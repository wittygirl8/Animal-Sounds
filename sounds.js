const Util = require('./util.js');

var audioDog = Util.getS3PreSignedUrl("Media/Puppy_Bark.mp3").replace(/&/g,'&amp;');
var audioDog2 = Util.getS3PreSignedUrl("Media/Big_Dog_Bark.mp3").replace(/&/g,'&amp;');
var cat = Util.getS3PreSignedUrl("Media/Cute_Kitten_Sound.mp3").replace(/&/g,'&amp;');

module.exports = {Util,audioDog,audioDog2,cat};