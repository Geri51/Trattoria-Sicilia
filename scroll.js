var h=document.querySelector('.site-header');
var c=document.querySelector('.chat-fab');
var f=function(){
  var y=window.scrollY;
  h.classList.toggle('scrolled',y>40);
  if(c)c.classList.toggle('show',y>240);
};
f();addEventListener('scroll',f,{passive:true});
