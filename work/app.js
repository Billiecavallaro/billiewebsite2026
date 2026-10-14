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
