chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
  if (request.addvid == "true") {
    if (window.location.hostname.search('radbox') == -1) {
      addvid();
      sendResponse({addvid: "success"});
    } else {
      alert('You cannot use this bookmarklet in Radbox.');
      sendResponse({addvid: "fail"});
    }
  }
  else {
    sendResponse({addvid: "fail"});
  }
});
function addvid() {
  var d = document,
      z = d.createElement('scr' + 'ipt'),
      b = d.body;
  try {
    if (!b) throw (0);
    r = Math.floor(Math.random() * 100 + 1);
    z.setAttribute('src', 'http://radbox.me/init/static/add.js?r=' + r.toString());
    b.appendChild(z);
  } catch (e) {
    alert('Please wait until the page has loaded.');
  }
}