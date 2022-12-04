function showSubs(id){
    var subs = document.getElementById(id);
    if (subs != null){
        if (subs.style.display == "none"){
            subs.style.display = "block";
        }
        else{
            subs.style.display = "none";
        }
    }
    var subExpand = document.getElementById(id + "-expand");
    if (subExpand != null){
        if (subExpand.style.display == "none"){
            subExpand.style.display = "inline";
        }
        else{
            subExpand.style.display = "none";
        }
    }
}
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var menu = document.getElementsByClassName("ontologies-menu")[0];
  if (currentScrollPos > 64) {
    menu.style.top = 0;
    menu.style.position = "fixed";
  } else {
    menu.style.position = "absolute";
    menu.style.top = '64px';
  }
  prevScrollpos = currentScrollPos;
}