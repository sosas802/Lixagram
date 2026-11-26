
try{localStorage.getItem('_')}catch(e){const m={};Object.defineProperty(window,'localStorage',{value:{getItem:k=>m[k]??null,setItem:(k,v)=>{m[k]=String(v)},removeItem:k=>{delete m[k]}}})}
(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const H=36e5,rnd=n=>Math.floor(Math.random()*n);
const P={home:'M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z',search:'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5',plus:'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM12 8v8M8 12h8',add:'M12 5v14M5 12h14',reel:'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 8h18M9 3l3 5M15 3l3 5M10 12l5 3-5 3z',msg:'M22 3L2 10l8 3 3 8zM22 3L10 13',user:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',heart:'M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z',comment:'M21 12a8 8 0 0 1-11.7 7L3 21l2-5.5A8 8 0 1 1 21 12z',share:'M22 2L11 13M22 2l-7 20-4-9-9-4z',bookmark:'M6 3h12v18l-6-4-6 4z',x:'M5 5l14 14M19 5L5 19',play:'M7 4l13 8-13 8z',pause:'M7 4h3v16H7zM14 4h3v16h-3z',music:'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',back:'M15 5l-7 7 7 7',grid:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z'};
const I=(n,s=24)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[n]}"/></svg>`;
function scene(seed){const h=(seed*47)%360,h2=(h+60)%360;const s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="hsl(${h},85%,62%)"/><stop offset="1" stop-color="hsl(${h2},90%,78%)"/></linearGradient></defs><rect width="400" height="400" fill="url(#g)"/><circle cx="${80+(seed*53)%240}" cy="${110+(seed*29)%60}" r="${38+seed%3*8}" fill="hsl(${h2},100%,92%)" opacity=".9"/><path d="M0 300 Q100 ${220+seed%4*15} 200 290 T400 270 V400 H0z" fill="hsl(${h},45%,32%)"/><path d="M0 340 Q120 290 240 335 T400 320 V400 H0z" fill="hsl(${h},50%,20%)"/></svg>`;return 'data:image/svg+xml,'+encodeURIComponent(s)}
const me={id:'me',name:'Tu Nombre',user:'tu_usuario',bio:'Probando mi propia red social\nBuenos Aires, Argentina',img:null,hue:300,link:'',accent:'#e10600',cover:'',pron:'',place:'',tags:'',mood:'',font:'sans',shape:'round',theme:'auto'};
const people=[
{id:'u1',name:'Valentina Ruiz',user:'vale.ruiz',hue:330,bio:'Fotógrafa de paisajes patagónicos'},
{id:'u2',name:'Tomás Méndez',user:'tomi.mendez',hue:210,bio:'Ciclista y cafetero de fin de semana'},
{id:'u3',name:'Sofía Benítez',user:'sofi.cocina',hue:25,bio:'Recetas simples, mesa larga'},
{id:'u4',name:'Luciano Paz',user:'lucho.viajes',hue:150,bio:'Mochila, mapa y 40 países'},
{id:'u5',name:'Camila Ortiz',user:'cami.arte',hue:280,bio:'Ilustración y acuarela'},
{id:'u6',name:'Nicolás Vega',user:'nico.fit',hue:0,bio:'Entrenador. Running y pesas'},
{id:'u7',name:'Matías Soler',user:'mati.music',hue:50,bio:'Guitarra, bandoneón y covers'}];
const getU=id=>id==='me'?me:people.find(p=>p.id===id);
const follows=new Set(['u1','u2','u4']),seen=new Set();
let nid=1;const items=[];
const mk=o=>{const it={id:'p'+nid++,kind:'photo',uid:'me',likes:0,liked:false,saved:false,comments:[],ts:Date.now(),caption:'',loc:'',seed:nid*3+rnd(5),...o};items.push(it);return it};
const cm=(uid,t,h,rep=[])=>({u:getU(uid),t,ts:Date.now()-h*H,replies:rep});
[['u1','Amanecer en el Lago Nahuel Huapi, 7:40 de la mañana y 2 °C.','Bariloche, Río Negro',3,1240],
['u3','Milanesas al horno con puré de calabaza. La receta va en los comentarios.','',6,860],
['u4','Día 12 en Salta: Quebrada de Cafayate y empanadas a 4.200 msnm de hambre.','Cafayate, Salta',9,2310],
['u2','Vuelta de 62 km por el Delta. Piernas de plomo, cabeza liviana.','Tigre, Buenos Aires',14,534],
['u5','Acuarela terminada. Tres capas y mucha paciencia.','',20,978],
['u6','Rutina del martes: 5 series de 8 repeticiones y trote suave de 20 minutos.','',27,402],
['u7','Ensayo general antes del show del sábado.','San Telmo, CABA',33,689],
['u1','Atardecer en la Costa Atlántica, luz naranja de 19:15.','Mar del Plata',46,1560]].forEach(([u,c,l,h,k],i)=>{const it=mk({uid:u,caption:c,loc:l,ts:Date.now()-h*H,likes:k,seed:i*7+3});
if(i%2===0)it.comments.push(cm('u2','¡Qué lugar increíble!',h-1>0?h-1:1,[cm(u,'¡Gracias! Hay que ir',0.5)]),cm('u5','Me encanta esta foto',h/2+.2));
else it.comments.push(cm('u4','Buenísimo, quiero probarlo',1.5))});
[['u5','Tiempo acelerado de una acuarela',4,3400],['u2','Cadencia 90 en subida, a pura constancia',11,1320],['u7','Riff de la semana',18,2750],['u3','Masa madre: el pliegue final',26,980],['u4','Amanecer desde el micro',40,4100]].forEach(([u,c,h,k],i)=>mk({kind:'reel',uid:u,caption:c,ts:Date.now()-h*H,likes:k,seed:i+1}));
mk({caption:'Mi primera publicación en Lixagram',loc:'Buenos Aires',ts:Date.now()-50*H,likes:12,seed:11});
mk({caption:'Mate, sol y ganas de crear cosas nuevas',ts:Date.now()-72*H,likes:7,seed:19});
const stories={},mus=['Ritmo de verano · Los Faroles','Noche en Palermo · Dúo Sur','Cuerdas del litoral · Mati Soler','Lo-fi para estudiar · Radio Aire'];
people.forEach((u,i)=>{stories[u.id]=[{ts:Date.now()-(i+1)*2*H,kind:'img',seed:i*5+2,text:i%3===0?'Buen día desde acá':'',sticker:i%3===1?'🔥':'',music:i%3===2?mus[i%4]:'',poll:i===0?{q:'¿Mate o café?',o1:'Mate',o2:'Café',a:42,b:58}:null},{ts:Date.now()-(i+1)*H,kind:'img',seed:i*5+9,text:'',sticker:'',music:'',poll:null}]});
const chats={u1:[{me:false,t:'Hola, vi tu último posteo. ¡Qué buena foto!',ts:Date.now()-2*H}],u2:[{me:false,t:'¿Salimos a rodar el domingo?',ts:Date.now()-5*H},{me:true,t:'Dale, 8 en el Delta',ts:Date.now()-4*H}],u3:[],u4:[{me:false,t:'Te mando el itinerario de Salta mañana',ts:Date.now()-26*H}],u5:[],u6:[],u7:[]};
const active=uid=>(stories[uid]||[]).filter(i=>Date.now()-i.ts<24*H),hasStory=uid=>active(uid).length>0;
const byId=id=>items.find(i=>i.id===id),cc=p=>p.comments.reduce((n,c)=>n+1+c.replies.length,0);
const ago=ts=>{const m=Math.floor((Date.now()-ts)/6e4);return m<1?'ahora':m<60?`hace ${m} min`:m<1440?`hace ${Math.floor(m/60)} h`:`hace ${Math.floor(m/1440)} d`};
const fdate=ts=>new Date(ts).toLocaleDateString('es-AR',{day:'numeric',month:'long',year:'numeric'});
const thumb=p=>p.kind==='photo'&&p.src?p.src:scene(p.seed);
let REMOTE=false;const remote=(sd,w=600)=>`https://picsum.photos/seed/lixa${sd}/${w}/${w}`;
const imgA=p=>p.src&&p.kind==='photo'?`src="${p.src}"`:`src="${REMOTE?remote(p.seed):scene(p.seed)}" data-fb="${scene(p.seed)}"`;
function av(u,s=36,ring=false){const bg=u.img?`background-image:url("${u.img}")`:`background:linear-gradient(135deg,hsl(${u.hue} 80% 60%),hsl(${(u.hue+50)%360} 80% 50%))`;
const a=`<span class="av" style="width:${s}px;height:${s}px;font-size:${Math.round(s*.38)}px;${bg}">${u.img?'':esc(u.name.split(' ').map(w=>w[0]).slice(0,2).join(''))}</span>`;
if(!ring||!hasStory(u.id))return a;return `<span class="ring${seen.has(u.id)?' seen':''}" data-a="story" data-uid="${u.id}"><span class="in">${a}</span></span>`}
let tt;function toast(t){const e=$('#toast');e.textContent=t;e.hidden=false;clearTimeout(tt);tt=setTimeout(()=>e.hidden=true,2200)}
function modal(html,cls=''){const o=document.createElement('div');o.className='mo';o.innerHTML=`<div class="mb ${cls}" role="dialog" aria-modal="true">${html}</div>`;o.addEventListener('pointerdown',e=>{if(e.target===o)o.remove()});document.body.appendChild(o);return o}
const xbtn=`<button data-a="close" aria-label="Cerrar">${I('x',22)}</button>`;

/* ---------- Feed ---------- */
function postHTML(p){const u=getU(p.uid);const med=p.kind==='video'?`<video src="${p.src}" loop muted playsinline></video>`:`<img ${imgA(p)} alt="Foto de ${esc(u.user)}">`;
return `<article class="post" data-id="${p.id}"><header>${av(u,36,true)}<div class="who"><b>${esc(u.user)}</b><small>${esc(p.loc)}</small></div><span class="date">${ago(p.ts)}</span></header>
<div class="media" ${p.kind==='video'?'data-a="vid"':''}>${med}<div class="burst">${I('heart',96)}</div></div>
<div class="acts"><button data-a="like" class="${p.liked?'liked':''}" aria-label="Me gusta">${I('heart',26)}</button><button data-a="comments" aria-label="Comentar">${I('comment',26)}</button><button data-a="share" aria-label="Compartir">${I('share',26)}</button><button data-a="save" class="sv ${p.saved?'on':''}" aria-label="Guardar">${I('bookmark',26)}</button></div>
<div class="likes"><b class="lc">${p.likes.toLocaleString('es-AR')} Me gusta</b></div>
<p class="cap"><b>${esc(u.user)}</b> ${esc(p.caption)}</p>
<button class="vc" data-a="comments">Ver los <span class="cc">${cc(p)}</span> comentarios</button>
<time>${fdate(p.ts)}</time>
<form class="qc" data-a="qcomment"><input placeholder="Agregá un comentario..." aria-label="Comentario" autocomplete="off"><button>Publicar</button></form></article>`}
function storiesBar(){const mine=hasStory('me');
let h=`<button class="st" data-a="${mine?'story':'create'}" data-uid="me" data-t="Historia">${mine?av(me,60,true):`<span class="plus">${av(me,60)}<i>${I('add',12)}</i></span>`}<span class="n">Tu historia</span></button>`;
people.filter(u=>hasStory(u.id)).forEach(u=>h+=`<button class="st" data-a="story" data-uid="${u.id}">${av(u,60,true)}<span class="n">${esc(u.user)}</span></button>`);return h}
function renderHome(){$('#v-inicio').innerHTML=`<div class="stories">${storiesBar()}</div>`+items.filter(i=>i.kind!=='reel').sort((a,b)=>b.ts-a.ts).map(postHTML).join('')+'<button class="btn" data-a="more" style="margin-bottom:24px">Cargar publicaciones nuevas</button>';watch()}
function refresh(id){const p=byId(id);$$(`[data-id="${id}"]`).forEach(n=>{$$('[data-a="like"]',n).forEach(b=>b.classList.toggle('liked',p.liked));$$('.lc',n).forEach(e=>e.textContent=p.likes.toLocaleString('es-AR')+(n.classList.contains('post')?' Me gusta':''));$$('.cc',n).forEach(e=>e.textContent=cc(p));$$('.sv',n).forEach(b=>b.classList.toggle('on',p.saved))})}
function toggleLike(id){const p=byId(id);p.liked=!p.liked;p.likes+=p.liked?1:-1;refresh(id)}
function toggleSave(id){const p=byId(id);p.saved=!p.saved;refresh(id);toast(p.saved?'Guardado':'Quitado de guardados');if(ptab==='Guardados')renderProfile()}
function toggleFollow(uid){follows.has(uid)?follows.delete(uid):follows.add(uid);$$(`[data-a="follow"][data-uid="${uid}"]`).forEach(b=>b.textContent=follows.has(uid)?'Siguiendo':'Seguir');renderProfile()}

const rcaps=['Domingo de sol y mate.','Probando una cámara nueva.','Lo que dejó el fin de semana.','Una caminata sin apuro.','Sin filtro, tal cual se vio.','Cierre de semana con amigos.'];
function moreRandom(){for(let i=0;i<3;i++)mk({uid:people[rnd(people.length)].id,caption:rcaps[rnd(rcaps.length)],seed:rnd(900)+1,likes:rnd(3000),ts:Date.now()-rnd(3)*H-rnd(50)*6e4});renderHome();fillSearch();toast('Se cargaron 3 publicaciones nuevas')}
/* ---------- Reproducción (reels y videos) ---------- */
function draw(c,t){const x=c.getContext('2d'),w=c.width,h=c.height,s=+c.dataset.seed;t/=1000;const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,`hsl(${(s*50+t*8)%360} 80% 55%)`);g.addColorStop(1,`hsl(${(s*50+90+t*8)%360} 85% 38%)`);x.fillStyle=g;x.fillRect(0,0,w,h);
for(let i=0;i<7;i++){x.beginPath();x.arc((i*83+s*37)%w,h*.35+Math.sin(t*.9+i*1.7)*70+i*22,18+i*5,0,7);x.fillStyle=`hsla(${(s*50+i*25)%360} 90% 80% / .28)`;x.fill()}
for(let i=0;i<4;i++){x.beginPath();x.moveTo(0,h);for(let X=0;X<=w;X+=10)x.lineTo(X,h*(.58+i*.09)+Math.sin(X/55+t*(1+i*.4)+s+i)*20);x.lineTo(w,h);x.fillStyle=`hsla(${(s*50+i*30)%360} 70% ${26-i*5}% / .6)`;x.fill()}}
requestAnimationFrame(function loop(t){$$('canvas.rc[data-play="1"]').forEach(c=>draw(c,t));requestAnimationFrame(loop)});
const hostOf=t=>t.dataset.a==='vid'?t:(t.querySelector('[data-a="vid"]')||t);
function setPlay(m,on){if(m.tagName==='VIDEO'){on?m.play().catch(()=>{}):m.pause()}else m.dataset.play=on?'1':'0'}
const io=new IntersectionObserver(es=>es.forEach(en=>{const m=$('canvas,video',en.target);if(!m)return;setPlay(m,en.intersectionRatio>.55&&!hostOf(en.target).dataset.paused)}),{threshold:[0,.55,.8]});
function watch(){$$('.reel,.post .media').forEach(n=>io.observe(n))}
function toggleVid(el){const m=$('canvas,video',el);if(!m)return;const playing=m.tagName==='VIDEO'?!m.paused:m.dataset.play==='1';if(playing){setPlay(m,false);el.dataset.paused='1'}else{setPlay(m,true);delete el.dataset.paused}
el.insertAdjacentHTML('beforeend',`<span class="flash">${I(playing?'pause':'play',48)}</span>`);setTimeout(()=>$$('.flash',el).forEach(f=>f.remove()),650)}
let lastTap=0;document.addEventListener('pointerup',e=>{const m=e.target.closest('.media,.rv');if(!m||e.target.closest('button'))return;const t=Date.now();if(t-lastTap<320){const id=m.closest('[data-id]').dataset.id;if(!byId(id).liked)toggleLike(id);const b=$('.burst',m);if(b){b.classList.remove('go');void b.offsetWidth;b.classList.add('go')}lastTap=0}else lastTap=t});

/* ---------- Reels ---------- */
function reelHTML(p){const u=getU(p.uid);const med=p.kind==='video'?`<video src="${p.src}" loop muted playsinline></video>`:`<canvas class="rc" width="270" height="480" data-seed="${p.seed}" data-play="0"></canvas>`;
return `<section class="reel" data-id="${p.id}"><div class="rv" data-a="vid">${med}</div>
<div class="rside"><button data-a="like" class="${p.liked?'liked':''}" aria-label="Me gusta">${I('heart',30)}<span class="lc">${p.likes.toLocaleString('es-AR')}</span></button><button data-a="comments" aria-label="Comentar">${I('comment',30)}<span class="cc">${cc(p)}</span></button><button data-a="share" aria-label="Compartir">${I('share',30)}<span>Enviar</span></button><button data-a="save" class="sv ${p.saved?'on':''}" aria-label="Guardar">${I('bookmark',28)}</button></div>
<div class="rinfo"><div class="rwho">${av(u,34)}<b>${esc(u.user)}</b>${u.id!=='me'?`<button class="fbtn" data-a="follow" data-uid="${u.id}">${follows.has(u.id)?'Siguiendo':'Seguir'}</button>`:''}</div><p>${esc(p.caption)}</p><small>${I('music',12)} Audio original · ${esc(u.user)}</small></div></section>`}
function renderReels(){$('#v-reels').innerHTML=`<div class="reels">${items.filter(i=>i.kind!=='photo').sort((a,b)=>b.ts-a.ts).map(reelHTML).join('')}</div>`;$$('canvas.rc').forEach(c=>draw(c,0));watch()}

/* ---------- Comentarios ---------- */
function openComments(id){const p=byId(id);let reply=null;const o=modal('','sheet'),box=o.firstElementChild;
const cmHTML=(c,k,sub)=>`<div class="cm">${av(c.u,sub?26:34)}<div><b>${esc(c.u.user)}</b> ${esc(c.t)}<div class="cmeta"><span>${ago(c.ts)}</span>${sub?'':`<button data-r="${k}">Responder</button>`}</div>${c.replies.map(r=>cmHTML(r,0,true)).join('')}</div></div>`;
function paint(){const keep=$('#ci',box)?.value||'';box.innerHTML=`<div class="mh"><b>Comentarios</b>${xbtn}</div><div class="clist">${p.comments.length?p.comments.map((c,k)=>cmHTML(c,k)).join(''):'<div class="empty">Todavía no hay comentarios. Escribí el primero.</div>'}</div><form class="cform">${reply!==null?`<div class="rt">Respondiendo a @${esc(p.comments[reply].u.user)} <button type="button" id="cx">cancelar</button></div>`:''}<div class="row">${av(me,30)}<input id="ci" placeholder="Agregá un comentario..." autocomplete="off" aria-label="Comentario"><button class="link">Publicar</button></div></form>`;
$('#ci',box).value=keep;$$('[data-r]',box).forEach(b=>b.onclick=()=>{reply=+b.dataset.r;paint();$('#ci',box).focus()});$('#cx',box)?.addEventListener('click',()=>{reply=null;paint()});
$('form',box).onsubmit=e=>{e.preventDefault();const t=$('#ci',box).value.trim();if(!t)return;const c={u:me,t,ts:Date.now(),replies:[]};reply!==null?p.comments[reply].replies.push(c):p.comments.push(c);reply=null;$('#ci',box).value='';refresh(id);paint();const l=$('.clist',box);l.scrollTop=l.scrollHeight}}
paint()}

/* ---------- Compartir ---------- */
function openShare(id){const p=byId(id);const o=modal(`<div class="mh"><b>Compartir</b>${xbtn}</div><div class="slist">${people.map(u=>`<div class="srow">${av(u,40)}<div class="who"><b>${esc(u.user)}</b><small>${esc(u.name)}</small></div><button class="pill" data-send="${u.id}">Enviar</button></div>`).join('')}</div><div class="sfoot"><button class="btn" id="shs">Añadir a tu historia</button><button class="ghost" id="shc">Copiar enlace</button></div>`);
$$('[data-send]',o).forEach(b=>b.onclick=()=>{chats[b.dataset.send].push({me:true,t:`Te compartió una publicación de @${getU(p.uid).user}: “${p.caption.slice(0,40)}”`,ts:Date.now()});b.textContent='Enviado';b.disabled=true;renderMsgs()});
$('#shs',o).onclick=()=>{(stories.me=stories.me||[]).push({ts:Date.now(),kind:p.kind==='video'?'video':'img',src:p.kind==='video'?p.src:thumb(p),seed:p.seed,text:'',sticker:'',music:'',poll:null});o.remove();renderHome();toast('Publicación añadida a tu historia')};
$('#shc',o).onclick=()=>{try{navigator.clipboard.writeText(location.href).then(()=>toast('Enlace copiado'),()=>toast('No se pudo copiar el enlace'))}catch(e){toast('No se pudo copiar el enlace')}}}

/* ---------- Historias ---------- */
let sv=null;
function pollHTML(it){const p=it.poll,a=p.a+(p.v==='a'?1:0),b=p.b+(p.v==='b'?1:0),pa=Math.round(a/(a+b)*100);
return `<div class="spoll"><b>${esc(p.q)}</b>${p.v?`<div class="opt res"><i style="width:${pa}%"></i><span>${esc(p.o1)}</span><em>${pa}%</em></div><div class="opt res"><i style="width:${100-pa}%"></i><span>${esc(p.o2)}</span><em>${100-pa}%</em></div>`:`<button class="opt" data-a="vote" data-o="a">${esc(p.o1)}</button><button class="opt" data-a="vote" data-o="b">${esc(p.o2)}</button>`}</div>`}
function storyMedia(it){let h=it.kind==='video'?`<video src="${it.src}" autoplay muted loop playsinline></video>`:`<img ${imgA({src:it.src,kind:'photo',seed:it.seed})} alt="">`;
if(it.text)h+=`<div class="stext">${esc(it.text)}</div>`;if(it.sticker)h+=`<div class="ssticker">${esc(it.sticker)}</div>`;if(it.music)h+=`<div class="smusic">${I('music',14)}<span>${esc(it.music)}</span></div>`;if(it.poll)h+=pollHTML(it);return h}
function openStory(uid){const order=['me',...people.map(p=>p.id)].filter(hasStory);if(!order.includes(uid))return;sv={order,g:order.indexOf(uid),i:0};drawStory()}
function drawStory(){$('#so')?.remove();const uid=sv.order[sv.g],its=active(uid);if(!its.length)return sNext(true);if(sv.i>=its.length)sv.i=0;const it=its[sv.i],u=getU(uid);seen.add(uid);
const o=document.createElement('div');o.className='so';o.id='so';
o.innerHTML=`<div class="sbox"><div class="bars">${its.map((_,k)=>`<b class="${k<sv.i?'done':k===sv.i?'cur':''}"></b>`).join('')}</div><div class="shead">${av(u,32)}<b>${esc(u.user)}</b><small>${ago(it.ts)} · expira en ${Math.max(1,Math.ceil((it.ts+24*H-Date.now())/H))} h</small><button data-a="sclose" aria-label="Cerrar">${I('x',24)}</button></div><div class="smedia">${storyMedia(it)}</div><button class="tap l" data-a="sprev" aria-label="Anterior"></button><button class="tap r" data-a="snext" aria-label="Siguiente"></button></div>`;
document.body.appendChild(o);$('.cur',o)?.addEventListener('animationend',()=>sNext())}
function sNext(skip){if(!sv)return;const n=active(sv.order[sv.g]).length;if(!skip&&sv.i+1<n){sv.i++}else{sv.g++;sv.i=0;if(sv.g>=sv.order.length)return closeStory()}drawStory()}
function sPrev(){if(sv.i>0)sv.i--;else if(sv.g>0){sv.g--;sv.i=0}drawStory()}
function closeStory(){$('#so')?.remove();sv=null;renderHome()}

/* ---------- Crear ---------- */
function openCreate(tab='Foto'){const st={src:null,kind:null,sample:false,seed:rnd(40)+1};
const o=modal(`<div class="mh"><b>Crear</b>${xbtn}</div><div class="tabs">${['Foto','Reel','Historia'].map(t=>`<button data-t="${t}" class="${t===tab?'on':''}">${t}</button>`).join('')}</div>
<div class="cf"><label class="drop">Archivo<input type="file" id="cfile" hidden><div id="prev" class="prev">${I('add',32)}<span>Elegí un archivo de tu dispositivo</span></div></label>
<button class="ghost" id="sample" type="button">Usar imagen de ejemplo</button>
<div class="f-post"><label>Pie de foto<textarea id="ccap" rows="2" placeholder="Escribí una descripción"></textarea></label><label>Ubicación<input id="cloc" placeholder="Opcional"></label></div>
<div class="f-story"><label>Texto sobre la historia<input id="ctext" maxlength="60"></label><label>Música<select id="cmus"><option value="">Sin música</option>${mus.map(m=>`<option>${m}</option>`).join('')}</select></label><label>Sticker<select id="cstk"><option value="">Sin sticker</option><option>🔥</option><option>😍</option><option>📍 Buenos Aires</option><option>⏰ Ahora</option><option>🎉</option></select></label>
<label class="chk"><input type="checkbox" id="cpoll"> Agregar encuesta</label><div id="pollf" hidden style="display:none;flex-direction:column;gap:8px"><input id="pq" placeholder="Pregunta"><input id="po1" placeholder="Opción 1"><input id="po2" placeholder="Opción 2"></div></div>
<p class="note f-story">Las historias duran 24 horas.</p><button class="btn" id="cgo">Publicar</button></div>`);
const box=o.firstElementChild;box.dataset.tab=tab;const acc={Foto:'image/*',Reel:'video/*',Historia:'image/*,video/*'};$('#cfile',o).accept=acc[tab];$('#cfile',o).multiple=tab==='Foto';
const setPrev=h=>$('#prev',o).innerHTML=h;
$$('.tabs button',o).forEach(b=>b.onclick=()=>{tab=b.dataset.t;box.dataset.tab=tab;$$('.tabs button',o).forEach(x=>x.classList.toggle('on',x===b));$('#cfile',o).accept=acc[tab];$('#cfile',o).multiple=tab==='Foto';Object.assign(st,{multi:null,src:null,kind:null,sample:false});setPrev(`${I('add',32)}<span>Elegí un archivo de tu dispositivo</span>`)});
$('#cfile',o).onchange=e=>{if(tab==='Foto'&&e.target.files.length>1){Promise.all([...e.target.files].filter(x=>x.type.startsWith('image/')).map(x=>new Promise(r=>{const q=new FileReader();q.onload=()=>r(q.result);q.readAsDataURL(x)}))).then(a=>{st.multi=a;st.src=a[0];st.kind='img';st.sample=false;setPrev(`<img src="${a[0]}" alt=""><span>${a.length} fotos: cada una será una publicación</span>`)});return}st.multi=null;const f=e.target.files[0];if(!f)return;st.sample=false;if(f.type.startsWith('video/')){st.src=URL.createObjectURL(f);st.kind='video';setPrev(`<video src="${st.src}" muted controls playsinline></video>`)}else if(f.type.startsWith('image/')){const r=new FileReader();r.onload=()=>{st.src=r.result;st.kind='img';setPrev(`<img src="${st.src}" alt="Vista previa">`)};r.readAsDataURL(f)}else toast('Ese tipo de archivo no es compatible')};
$('#sample',o).onclick=()=>{st.sample=true;st.src=null;st.kind=tab==='Reel'?'reel':'img';st.seed=rnd(900)+1;setPrev(tab==='Reel'?`<span>Reel de ejemplo animado</span>`:`<img ${imgA({seed:st.seed})} alt="Imagen aleatoria">`)};
$('#cpoll',o).onchange=e=>{const f=$('#pollf',o);f.hidden=!e.target.checked;f.style.display=e.target.checked?'flex':'none'};
$('#cgo',o).onclick=()=>{const cap=$('#ccap',o).value.trim(),loc=$('#cloc',o).value.trim();
if(tab==='Historia'){const q=$('#pq',o).value.trim(),text=$('#ctext',o).value.trim();if(!st.src&&!st.sample&&!text){toast('Elegí un archivo o escribí un texto');return}
(stories.me=stories.me||[]).push({ts:Date.now(),kind:st.kind==='video'?'video':'img',src:st.kind==='img'&&st.src?st.src:st.kind==='video'?st.src:null,seed:st.seed,text,music:$('#cmus',o).value,sticker:$('#cstk',o).value,poll:$('#cpoll',o).checked&&q?{q,o1:$('#po1',o).value||'Sí',o2:$('#po2',o).value||'No',a:0,b:0}:null});o.remove();renderHome();renderProfile();show('inicio');toast('Historia publicada por 24 horas');return}
if(!st.src&&!st.sample){toast('Elegí un archivo primero');return}
if(tab==='Foto'){(st.multi||[st.src]).forEach(x=>mk({kind:'photo',src:x,seed:st.seed,caption:cap,loc}))}else{mk({kind:st.sample?'reel':'video',src:st.src,seed:st.seed,caption:cap,loc})}
o.remove();renderAll();show(tab==='Foto'?'inicio':'reels');toast('Publicado')}}

/* ---------- Perfil ---------- */
let ptab='Publicaciones';
function renderProfile(){const mine=items.filter(i=>i.uid==='me').sort((a,b)=>b.ts-a.ts);
const list=ptab==='Publicaciones'?mine:ptab==='Reels'?mine.filter(i=>i.kind!=='photo'):items.filter(i=>i.saved);
$('#v-perfil').innerHTML=`<div class="cover" style="${me.cover?`background-image:url('${me.cover}')`:''}"></div><div class="phead">${av(me,96,true)}<div class="pinfo"><div class="prow"><h2>${esc(me.user)}</h2><button class="ghost" data-a="editp">Editar perfil</button></div><div class="stats"><span><b>${mine.length}</b> publicaciones</span><span><b>128</b> seguidores</span><span><b>${follows.size}</b> seguidos</span></div><div class="pname"><b>${esc(me.name)}</b><p>${esc(me.bio)}</p></div><div class="profile-custom">${me.link?`<span>🔗 ${esc(me.link)}</span>`:''}${me.mood?`<span>${esc(me.mood)}</span>`:''}${me.pron?`<span>${esc(me.pron)}</span>`:''}${me.place?`<span>📍 ${esc(me.place)}</span>`:''}${(me.tags||'').split(',').map(t=>t.trim()).filter(Boolean).slice(0,8).map(t=>`<span>#${esc(t)}</span>`).join('')}<button class="ghost" data-a="logout" style="padding:3px 10px">Cerrar sesión</button></div></div></div>
<div class="ptabs">${['Publicaciones','Reels','Guardados'].map(t=>`<button data-a="ptab" data-t="${t}" class="${t===ptab?'on':''}">${t}</button>`).join('')}</div>
${list.length?`<div class="grid">${list.map(p=>`<button class="gi" data-a="post" data-pid="${p.id}" aria-label="Abrir publicación"><img ${imgA(p)} alt="">${p.kind!=='photo'?`<i>${I('reel',18)}</i>`:''}</button>`).join('')}</div>`:`<div class="empty">${ptab==='Guardados'?'Guardá publicaciones con el marcador y aparecen acá.':'Todavía no hay nada acá. Tocá Crear para publicar.'}</div>`}`}
function openPost(pid){const p=byId(pid);if(!p)return;modal(postHTML(p),'postm');watch()}
function editProfile(){let img=me.img;const o=modal(`<div class="mh"><b>Personalizá tu perfil</b>${xbtn}</div><div class="cf"><div style="display:flex;align-items:center;gap:14px"><span id="eav">${av(me,64)}</span><label class="ghost" style="cursor:pointer;color:var(--fg);flex-direction:row">Foto de perfil<input type="file" accept="image/*" id="efile" hidden></label></div><label>Nombre visible<input id="en" value="${esc(me.name)}" maxlength="40"></label><label>Nombre de usuario<input id="eu" value="${esc(me.user)}" maxlength="30"></label><label>Biografía<textarea id="eb" rows="3" maxlength="150">${esc(me.bio)}</textarea></label><label>Enlace personal<input id="elink" type="url" value="${esc(me.link||'')}" placeholder="https://..." maxlength="100"></label><label>Pronombres<input id="epr" maxlength="20" value="${esc(me.pron)}" placeholder="ella / él / elle"></label><label>Estado o emoji<input id="emo" maxlength="30" value="${esc(me.mood)}" placeholder="✨ creando"></label><label>Ubicación<input id="epl" maxlength="40" value="${esc(me.place)}"></label><label>Intereses (separados por coma)<input id="etg" maxlength="80" value="${esc(me.tags)}" placeholder="música, viajes, arte"></label><label>Tipografía<select id="efo"><option value="sans"${me.font==='sans'?' selected':''}>Moderna</option><option value="serif"${me.font==='serif'?' selected':''}>Clásica</option><option value="mono"${me.font==='mono'?' selected':''}>Máquina de escribir</option><option value="round"${me.font==='round'?' selected':''}>Redondeada</option></select></label><label>Forma de la foto<select id="esh"><option value="round"${me.shape==='round'?' selected':''}>Circular</option><option value="square"${me.shape==='square'?' selected':''}>Cuadrada redondeada</option></select></label><label>Tema<select id="eth"><option value="auto"${me.theme==='auto'?' selected':''}>Automático</option><option value="light"${me.theme==='light'?' selected':''}>Claro</option><option value="dark"${me.theme==='dark'?' selected':''}>Oscuro</option></select></label><label>Color de acento<input id="eaccent" type="color" value="${esc(me.accent||'#e10600')}" style="height:44px;padding:4px"></label><label>Portada del perfil<input id="ecover" type="file" accept="image/*"></label><button class="btn" id="esave">Guardar cambios</button></div>`);
$('#efile',o).onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{img=r.result;$('#eav',o).innerHTML=av({...me,img},64)};r.readAsDataURL(f)};
let cover=me.cover||'';$('#ecover',o).onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>cover=r.result;r.readAsDataURL(f)};
$('#esave',o).onclick=()=>{me.name=$('#en',o).value.trim()||me.name;me.user=($('#eu',o).value.trim()||me.user).replace(/\s+/g,'_');me.bio=$('#eb',o).value;me.link=$('#elink',o).value.trim();me.accent=$('#eaccent',o).value;me.cover=cover;me.img=img;Object.assign(me,{pron:$('#epr',o).value.trim(),place:$('#epl',o).value.trim(),tags:$('#etg',o).value,mood:$('#emo',o).value.trim(),font:$('#efo',o).value,shape:$('#esh',o).value,theme:$('#eth',o).value});applyLook();saveProfile();o.remove();renderAll();toast('¡Perfil personalizado!')};}

/* ---------- Buscar ---------- */
function fillSearch(){const q=$('#sq').value.trim().toLowerCase();const us=people.filter(u=>!q||[u.name,u.user,u.bio].some(s=>s.toLowerCase().includes(q)));
const ps=items.filter(i=>i.kind!=='reel'||true).filter(i=>!q||i.caption.toLowerCase().includes(q)||getU(i.uid).user.toLowerCase().includes(q));
$('#sres').innerHTML=`${us.length?`<div class="h3">${q?'Cuentas':'Sugeridos para vos'}</div>${us.map(u=>`<div class="urow">${av(u,44,true)}<div class="who"><b>${esc(u.user)}</b><small>${esc(u.name)} · ${esc(u.bio)}</small></div><button class="pill" data-a="follow" data-uid="${u.id}">${follows.has(u.id)?'Siguiendo':'Seguir'}</button></div>`).join('')}`:''}
<div class="h3">${q?'Publicaciones':'Explorar'}</div>${ps.length?`<div class="grid">${ps.map(p=>`<button class="gi" data-a="post" data-pid="${p.id}" aria-label="Abrir publicación"><img ${imgA(p)} alt="">${p.kind!=='photo'?`<i>${I('reel',18)}</i>`:''}</button>`).join('')}</div>`:'<div class="empty">No encontramos resultados.</div>'}`}

/* ---------- Mensajes estilo novela visual ---------- */
let chat=null,busy=false;const chatStep={};
function vnScene(uid,step){
 const scenes={
  u1:[{say:'¡Holaaa! 🌅 Vi que estuviste mirando mis fotos de Bariloche. ¿Qué te pareció el paisaje?',opts:['Es increíble, parece de película.','¿A qué hora sacaste la foto?','Necesito conocer ese lugar.'],reply:['¡Mal! En persona es todavía más lindo.','A las 7:40, hacía un frío tremendo jajaja.','Tenés que ir, posta. Te paso algunos lugares.']},{say:'Me alegra que te cope. Estoy pensando en hacer otra salida fotográfica.',opts:['¡Avisame y me sumo!','¿Vas a ir a la montaña?','Mandame tus mejores fotos después.'],reply:['¡Obvio! Te aviso cuando organice todo.','Sí, quiero probar un sendero nuevo.','Trato hecho 📸']},{say:'Bueno, me voy a editar las fotos. ¡Hablamos!',opts:['Dale, suerte con la edición.','¡Espero el próximo post!'],reply:['¡Gracias! Nos leemos 💗','No va a faltar.'] }],
  u2:[{say:'Ey, ¿te pinta salir a rodar el domingo? 🚴',opts:['¡De una! ¿A qué hora?','Esta vez elijo yo la ruta.','Mejor hacemos algo tranqui.'],reply:['A las ocho, en el punto de siempre.','Jajaja, bueno, sorprendeme.','También sirve, un paseo corto.']},{say:'Podemos pasar por el Delta y parar a tomar algo.',opts:['Planazo.','Llevo la cámara.','¿Y si invitamos a alguien más?'],reply:['Entonces queda confirmado.','¡De una! Quiero ver esas fotos.','Dale, le escribo a los demás.']},{say:'Listo, nos vemos el domingo. ¡No llegues tarde! 😂',opts:['No prometo nada jajaja.','Voy a estar puntual.'],reply:['Ya sabía… 😂','Eso espero. ¡Nos vemos!']}],
  u3:[{say:'¡Hola! Estoy probando una receta nueva. ¿Qué debería cocinar?',opts:['Algo dulce, obvio.','Una pasta casera.','Algo fácil para compartir.'],reply:['Tengo una idea de torta que te va a encantar.','¡Ñoquis caseros! Me convenciste.','Unas empanadas para todos.']},{say:'Me gusta esa elección. ¿Te paso la receta cuando la termine?',opts:['Sí, quiero intentarlo.','Mejor mandame una foto primero.','¡La cocinamos algún día!'],reply:['Te la mando con todos los pasos.','Jajaja, trato hecho.','¡Planazo!']},{say:'Bueno, vuelvo a la cocina. ¡Después te cuento!',opts:['¡Éxitos, chef!','No te olvides de guardar una porción.'],reply:['JAJA gracias.','Eso está complicado… 😅']}],
  u4:[{say:'¡Buenas! Estoy armando mi próximo viaje. ¿Qué destino te llama más?',opts:['Montañas y naturaleza.','Una ciudad llena de historia.','Playas y descanso.'],reply:['Tengo varios lugares anotados en el norte.','Me encanta esa idea, hay mucho para recorrer.','Unos días de playa vienen bien.']},{say:'Me guardo esa idea. ¿Querés que te comparta el itinerario?',opts:['Sí, pasalo.','Contame cuánto dura.','Primero quiero ver las fotos.'],reply:['Te lo mando cuando lo termine.','Serían unos diez días.','Jajaja, te mando una selección.']},{say:'¡Seguimos hablando! Buen viaje… aunque sea desde acá 😄',opts:['¡Buen viaje!','Traeme una postal.'],reply:['¡Gracias!','Obvio, queda prometido.']}],
  u5:[{say:'Holaa 🎨 Estoy trabajando en una ilustración nueva. ¿Qué estilo pruebo?',opts:['Acuarela y colores suaves.','Algo abstracto y experimental.','Un dibujo inspirado en la naturaleza.'],reply:['Me encanta, voy a buscar una paleta pastel.','¡A romper las reglas entonces!','Ya tengo algunas referencias.']},{say:'¿Te gustaría ver un adelanto?',opts:['¡Sí, mostrame!','Cuando esté terminada.','Quiero ayudarte a elegir los colores.'],reply:['Te lo comparto apenas se seque.','Bueno, va a ser sorpresa.','¡Necesito una segunda opinión!']},{say:'Gracias por bancar mis proyectos. 💜',opts:['Siempre, seguí creando.','Espero la obra final.'],reply:['Qué lindo leer eso.','Pronto la vas a ver.']}],
  u6:[{say:'¡Buenas! Estoy organizando una salida para movernos un poco. ¿Qué preferís?',opts:['Una caminata al aire libre.','Un paseo en bici.','Un partido con amigos.'],reply:['Ideal para despejar la cabeza.','¡A rodar entonces!','Me gusta, armo el grupo.']},{say:'¿Qué día te queda mejor?',opts:['El sábado.','El domingo.','Cuando organicen, veo.'],reply:['Perfecto, te aviso el horario.','Dale, domingo entonces.','Te mando los detalles.']},{say:'¡Listo! Después te paso la info.',opts:['Dale, gracias.','¡Nos vemos!'],reply:['¡De nada!','¡Hasta luego!']}],
  u7:[{say:'¡Ey! Estamos preparando música nueva 🎸 ¿Qué te gustaría escuchar?',opts:['Un tema bien rockero.','Algo acústico y tranquilo.','Una mezcla de estilos.'],reply:['Ufff, tengo un riff preparado.','Podemos hacer una versión acústica.','Eso puede quedar muy interesante.']},{say:'¿Te gustaría venir al próximo ensayo?',opts:['¡Obvio!','Solo si tocan mi canción favorita.','Prefiero esperar al show.'],reply:['Te guardo un lugar.','Jajaja, trato hecho.','Entonces te veo en el escenario.']},{say:'¡Nos vemos pronto! Gracias por la buena onda.',opts:['¡Éxitos con el ensayo!','Rompan todo (musicalmente).'],reply:['¡Gracias!','JAJA esa es la idea.']}]
 };
 const arr=scenes[uid]||scenes.u1;return step>=arr.length?{say:'✨ Fin del capítulo. Esta historia terminó por ahora.',opts:['Volver a empezar'],reply:[''],end:true}:arr[step];
}
function renderMsgs(typing){const th=()=>{const u=getU(chat),step=chatStep[chat]||0,scene=vnScene(chat,step);return `<div class="thead"><button class="bk" data-a="chatback" aria-label="Volver">${I('back',22)}</button>${av(u,36)}<b>${esc(u.user)}</b><small style="margin-left:auto;color:var(--mute)">Novela visual</small></div><div class="msgs" id="msgs">${chats[chat].length?chats[chat].map(m=>`<div class="bub${m.me?' me':''}">${esc(m.t)}</div>`).join(''):`<div class="empty">La historia con ${esc(u.name)} está por comenzar…</div>`}${typing?'<div class="bub typing">• • •</div>':`<div class="bub">${esc(scene.say)}</div>`}</div><div class="vn-options"${typing?' hidden':''}><div class="vn-title">¿Qué respondés?</div>${scene.opts.map((t,i)=>`<button class="vn-choice" data-a="choice" data-choice="${i}">${esc(t)}</button>`).join('')}</div>`};
 $('#v-mensajes').innerHTML=`<div class="chat${chat?' open':''}"><aside class="convs"><h2>Mensajes</h2>${people.map(u=>{const l=chats[u.id].at(-1);return `<button class="crow${chat===u.id?' on':''}" data-a="chat" data-uid="${u.id}">${av(u,48)}<span class="who"><b>${esc(u.user)}</b><small>${esc(l?(l.me?'Vos: ':'')+l.t.slice(0,34):'Empezar historia')}</small></span></button>`}).join('')}</aside><section class="thread">${chat?th():`<div class="empty" style="margin:auto">Elegí una conversación para comenzar una historia.</div>`}</section></div>`;const m=$('#msgs');if(m)m.scrollTop=m.scrollHeight}
function chooseDialogue(n){if(!chat||busy)return;const id=chat,step=chatStep[id]||0,scene=vnScene(id,step),choice=scene.opts[n];if(!choice)return;if(scene.end){chats[id].length=0;chatStep[id]=0;renderMsgs();return}chats[id].push({me:false,t:scene.say,ts:Date.now()},{me:true,t:choice,ts:Date.now()});busy=true;renderMsgs(true);setTimeout(()=>{busy=false;chats[id].push({me:false,t:scene.reply[n],ts:Date.now()});chatStep[id]=step+1;renderMsgs()},900)}

/* ---------- Navegación y eventos ---------- */
const views=['inicio','buscar','reels','mensajes','perfil'];
function show(v){if(!views.includes(v))v='inicio';$$('.view').forEach(s=>s.classList.toggle('on',s.id==='v-'+v));$$('.nb[data-v]').forEach(b=>b.classList.toggle('on',b.dataset.v===v));if(v==='reels')watch();try{if(location.hash!=='#'+v)history.replaceState(null,'','#'+v)}catch(e){}window.scrollTo(0,0)}
function renderAll(){renderHome();renderReels();renderProfile();renderMsgs();fillSearch()}
document.addEventListener('click',e=>{const el=e.target.closest('[data-a]');if(!el)return;const a=el.dataset.a,card=el.closest('[data-id]'),id=card&&card.dataset.id;
const f={like:()=>toggleLike(id),comments:()=>openComments(id),share:()=>openShare(id),save:()=>toggleSave(id),follow:()=>toggleFollow(el.dataset.uid),story:()=>openStory(el.dataset.uid),vid:()=>toggleVid(el),create:()=>openCreate(el.dataset.t),more:moreRandom,post:()=>openPost(el.dataset.pid),nav:()=>show(el.dataset.v),close:()=>el.closest('.mo').remove(),editp:editProfile,
ptab:()=>{ptab=el.dataset.t;renderProfile()},sclose:closeStory,snext:()=>sNext(),sprev:sPrev,
vote:()=>{const it=active(sv.order[sv.g])[sv.i];it.poll.v=el.dataset.o;$('.spoll').outerHTML=pollHTML(it)},
chat:()=>{chat=el.dataset.uid;renderMsgs()},chatback:()=>{chat=null;renderMsgs()},choice:()=>chooseDialogue(+el.dataset.choice),logout:()=>{localStorage.removeItem('lixagram_demo_session');location.reload()}}[a];if(f)f()});
document.addEventListener('submit',e=>{e.preventDefault();const f=e.target;
if(f.dataset.a==='qcomment'){const i=$('input',f),t=i.value.trim(),id=f.closest('[data-id]').dataset.id;if(!t)return;byId(id).comments.push({u:me,t,ts:Date.now(),replies:[]});i.value='';refresh(id);toast('Comentario publicado')}
});
document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if($('#so'))return closeStory();const m=$$('.mo');m.at(-1)?.remove()});
$('#sq').addEventListener('input',fillSearch);
window.addEventListener('hashchange',()=>show(location.hash.slice(1)));
$$('i[data-i]').forEach(e=>e.outerHTML=I(e.dataset.i,26));
document.addEventListener('error',e=>{const t=e.target;if(t.tagName==='IMG'&&t.dataset.fb){const f=t.dataset.fb;delete t.dataset.fb;t.src=f}},true);
// Acceso de demostración: las credenciales quedan guardadas solo en este navegador.
let loginMode='login';const gate=$('#loginGate');
function paintLogin(){ $('#loginTitle').textContent=loginMode==='login'?'Iniciá sesión':'Creá tu cuenta';$('#loginSub').textContent=loginMode==='login'?'Entrá a tu mundo y compartí tus momentos.':'Un correo y una contraseña para empezar.';$('#loginSubmit').textContent=loginMode==='login'?'Iniciar sesión':'Crear cuenta';$('#loginToggle').textContent=loginMode==='login'?'¿No tenés cuenta? Crear una':'¿Ya tenés cuenta? Iniciar sesión';$('#loginPass').autocomplete=loginMode==='login'?'current-password':'new-password'; }
$('#loginToggle').onclick=()=>{loginMode=loginMode==='login'?'register':'login';$('#loginError').textContent='';paintLogin()};
$('#loginForm').onsubmit=e=>{e.preventDefault();const email=$('#loginEmail').value.trim().toLowerCase(),pass=$('#loginPass').value;if(!email||pass.length<6){$('#loginError').textContent='Ingresá un correo válido y una contraseña de al menos 6 caracteres.';return}let accounts={};try{accounts=JSON.parse(localStorage.getItem('lixagram_demo_accounts')||'{}')}catch(_){}if(loginMode==='register'){if(accounts[email]){$('#loginError').textContent='Ese correo ya tiene una cuenta en esta demo.';return}accounts[email]=pass;localStorage.setItem('lixagram_demo_accounts',JSON.stringify(accounts))}else if(accounts[email]!==pass){$('#loginError').textContent='Correo o contraseña incorrectos. Si es tu primera vez, creá una cuenta.';return}localStorage.setItem('lixagram_demo_session',email);gate.remove();enter(loginMode==='register')};
const FONTS={sans:'Inter,system-ui,sans-serif',serif:'Georgia,serif',mono:'ui-monospace,Menlo,monospace',round:'"Trebuchet MS",system-ui,sans-serif'};
const pkey=()=>'lixagram_profile_'+localStorage.getItem('lixagram_demo_session');
function applyLook(){const r=document.documentElement;r.style.setProperty('--accent',me.accent||'#e10600');r.style.setProperty('--ui',FONTS[me.font]||FONTS.sans);r.style.setProperty('--avr',me.shape==='square'?'12px':'50%');me.theme==='light'||me.theme==='dark'?r.setAttribute('data-theme',me.theme):r.removeAttribute('data-theme')}
function saveProfile(){try{localStorage.setItem(pkey(),JSON.stringify(me))}catch(e){toast('Perfil guardado, pero tus imágenes son muy pesadas para recordarlas')}}
function loadProfile(){try{Object.assign(me,JSON.parse(localStorage.getItem(pkey())||'{}'))}catch(e){}}
function enter(first){loadProfile();if(first){me.user=(localStorage.getItem('lixagram_demo_session')||'usuario').split('@')[0].replace(/\W/g,'_');me.name=me.user}applyLook();renderAll();show('perfil');if(first){toast('¡Cuenta creada! Personalizá tu perfil');editProfile()}else toast('¡Bienvenido a Lixagram!')}
paintLogin();
if(localStorage.getItem('lixagram_demo_session')){gate.remove();loadProfile()}applyLook();
renderAll();show(location.hash.slice(1)||'inicio');
const probe=new Image();probe.onload=()=>{REMOTE=true;renderAll()};probe.src=remote(1,40);
})();
