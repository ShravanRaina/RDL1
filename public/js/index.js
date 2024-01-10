// Cost Effective and Error-free Laboratory...
// Delivering Quality Heathcare Services...
var words = ['Cost Effective and Error-free Laboratory...','Delivering Quality Heathcare Services...'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 50;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('#text-animate').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

// Scroll to Reach Us
function scrollToDiv(divId) {
    var div = document.getElementById(divId);
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' });
    }
  }