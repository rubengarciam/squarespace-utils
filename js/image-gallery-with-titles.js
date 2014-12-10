function getElementsByClass(searchClass, node, tag) {
  var classElements = new Array();
  if (node === null)
    node = document;
  if (tag === null)
    tag = '*';
  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp('(^|\\\\s)' + searchClass + '(\\\\s|$)');
  for (i = 0, j = 0; i < elsLen; i++) {
    if (pattern.test(els[i].className)) {
      classElements[j] = els[i];
      j++;
    }
  }
  return classElements;
}

var theslides = getElementsByClass("image-slide-anchor content-fit");
var theimages = getElementsByClass("thumb-image");
var theslide;

for (i = 0; i < theslides.length; i++) {
  theslide = theslides[i];
  what = theimages[i].getAttribute('alt');
  theslide.innerHTML = theslide.innerHTML + '<div style="text-align:center;position:absolute;opacity:.8;bottom:20px; left:10%;width:80%;background-color:#FFFFFF;border:#999 solid 1px;">' + what + '</div>';

}
