'use strict';

window.onload = function() {

  var arg = {};
  var pair = location.search.substring(1).split('&');
  for (var i = 0; pair[i]; i++) {
    var kv = pair[i].split('=');
    arg[kv[0]] = kv[1];
  }

  document.getElementById('ref').textContent = arg.ref;
};
