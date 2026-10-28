// always open a page at the top
if('scrollRestoration' in history)history.scrollRestoration='manual';
function toTop(){if(location.hash)return;document.documentElement.style.scrollBehavior='auto';window.scrollTo(0,0);try{document.body.scrollIntoView({block:'start'})}catch(e){}document.documentElement.style.scrollBehavior=''}
toTop();addEventListener('DOMContentLoaded',toTop);addEventListener('load',toTop);addEventListener('pageshow',toTop);
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);const n=e.target.querySelector('[data-count]');if(n)count(n)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
function count(el){const t=+el.dataset.count,p=el.dataset.prefix||'',s=el.dataset.suffix||'';if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const d=1400,st=performance.now();(function f(now){const k=Math.min(1,(now-st)/d),v=Math.round(t*(1-Math.pow(1-k,3)));el.textContent=p+v+s;if(k<1)requestAnimationFrame(f)})(st)}
// nav theme

// tabs
document.querySelectorAll('.tabs').forEach(tl=>tl.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;tl.querySelectorAll('button').forEach(x=>{x.setAttribute('aria-selected',x===b);document.getElementById(x.dataset.t).classList.toggle('on',x===b)})}));
// lightbox
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('[data-full]').forEach(el=>el.addEventListener('click',()=>{li.src=el.dataset.full;li.alt=(el.querySelector('img')||{}).alt||'';lb.classList.add('on')}));
lb.addEventListener('click',()=>lb.classList.remove('on'));
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
// rings
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const c=e.target,C=2*Math.PI*52;c.style.strokeDashoffset=C*(1-c.dataset.p/100);rio.unobserve(c)}}),{threshold:.4});
document.querySelectorAll('.ring .val').forEach(c=>{const C=2*Math.PI*52;c.style.strokeDasharray=C;c.style.strokeDashoffset=matchMedia('(prefers-reduced-motion:reduce)').matches?C*(1-c.dataset.p/100):C;rio.observe(c)});
// video
const v=document.getElementById('sfv'),vb=document.getElementById('sfb');
if(v&&vb){
const P='<svg viewBox="0 0 16 16"><path d="M4 2.5v11l9-5.5z"/></svg>',S=vb.innerHTML;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){v.removeAttribute('autoplay');v.pause();vb.innerHTML=P;vb.ariaLabel='Play video'}
vb.addEventListener('click',()=>{if(v.paused){v.play();vb.innerHTML=S;vb.ariaLabel='Pause video'}else{v.pause();vb.innerHTML=P;vb.ariaLabel='Play video'}});
new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)v.pause();else if(vb.ariaLabel==='Pause video')v.play().catch(()=>{})}),{threshold:.2}).observe(v);
}
// copy email
(function(){const b=document.getElementById('copyEmail');if(!b)return;const t=document.getElementById('emailText').textContent.trim(),lbl=b.querySelector('b');
b.addEventListener('click',async()=>{let ok=false;try{await navigator.clipboard.writeText(t);ok=true}catch(e){try{const ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();ok=document.execCommand('copy');ta.remove()}catch(e2){}}
if(!ok){const r=document.createRange();r.selectNodeContents(document.getElementById('emailText'));const s=getSelection();s.removeAllRanges();s.addRange(r)}
b.classList.add('done');lbl.textContent=ok?'Copied':'Selected';setTimeout(()=>{b.classList.remove('done');lbl.textContent='Copy'},2000)})})();
// stealth v2: board animation + problem merge
(function(){
  var mv=document.getElementById('gMove'),slot=document.getElementById('gSlot'),toast=document.getElementById('gToast');
  if(mv&&slot){
    var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,home=mv.parentNode,next=mv.nextElementSibling,busy=false;
    function cycle(){
      if(busy)return;busy=true;
      var a=mv.getBoundingClientRect();slot.style.height=a.height+'px';
      var b=slot.getBoundingClientRect();
      mv.classList.add('lift');mv.style.transform='translate('+(b.left-a.left)+'px,'+(b.top-a.top)+'px) rotate(1.5deg)';
      setTimeout(function(){mv.style.transition='none';mv.style.transform='';slot.style.transition='none';slot.style.height='0';slot.parentNode.insertBefore(mv,slot.nextSibling);mv.classList.remove('lift');void mv.offsetWidth;mv.style.transition='';slot.style.transition='';toast.classList.add('on');
        setTimeout(function(){toast.classList.remove('on')},2200);
        setTimeout(function(){home.insertBefore(mv,next);busy=false},3400);
      },950);
    }
    if(!reduce){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){cycle();clearInterval(window.__gT);window.__gT=setInterval(cycle,5200)}else clearInterval(window.__gT)})},{threshold:.4});io.observe(mv.closest('.gapp'))}
  }
  var m=document.querySelector('.g-merge');
  if(m){var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){setTimeout(function(){m.classList.add('in')},500);io2.disconnect()}})},{threshold:.5});io2.observe(m)}
})();
// discover v2
(function(){
  var sev=document.getElementById('dSeven'),btn=document.getElementById('dSevenBtn');
  if(sev&&btn){var auto=true;
    btn.addEventListener('click',function(){auto=false;var u=sev.classList.toggle('unified');btn.textContent=u?'← Show before':'Unify them →'});
    new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&auto){setTimeout(function(){if(auto){sev.classList.add('unified');btn.textContent='← Show before'}},1800)}})},{threshold:.5}).observe(sev)}
  var map=document.querySelector('.d-map');
  if(map)new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)map.classList.add('in')})},{threshold:.4}).observe(map);
  var ba=document.getElementById('dBA');
  if(ba){var r=ba.querySelector('.ba-range');r.addEventListener('input',function(){ba.style.setProperty('--p',r.value+'%')})}
})();
