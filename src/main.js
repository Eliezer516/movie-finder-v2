var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("footer").classList.remove("opacity-0", "pointer-events-none")
  } else {
    document.getElementById("footer").classList.add("opacity-0", "pointer-events-none")
  }
  prevScrollpos = currentScrollPos;
}


// window.scrollTo({ top: 0, behavior: 'smooth' });