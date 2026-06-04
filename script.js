// Mobile menu close on link click
document.addEventListener('click', function(e){
  if(e.target.matches('.nav a')){
    var sb = document.getElementById('sidebar');
    if(sb) sb.classList.remove('open');
  }
});

// Highlight active nav link
(function(){
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });
})();

// Reveal on scroll
(function(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
