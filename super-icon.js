console.log(document.querySelector('use').typeof);
var icons = document.getElementsByClassName('super-icon');
for(var i = 0; i < icons.length; i++) {
  var svgTag = icons[i];
  var useTag = svgTag.querySelector('use');
  var source = useTag.getAttribute("xlink:href").split('#');
  var fileName = source[0];
  var iconName = source[1]
  var req = new XMLHttpRequest();
  req.open('GET', fileName, true);
  req.onload = function(e) {
    var icon = e.target.responseXML.querySelector('#' + iconName);
    svgTag.replaceChild(icon, useTag);
  };
  req.onerror = function(e) {
    console.log('Some error occurred');
  };
  req.send(null);
}
