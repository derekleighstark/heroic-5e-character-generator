const cast = [
  {name:'Dex',role:'Scoundrel // Gunslinger',code:'01',token:'Character_Assets/Token-Dex.png',sheet:'Character_Assets/CharacterSheet-Dex.png',reference:'Character_Assets/Reference-Dex.png',description:'A quick draw and a quicker smile. Dex survives on instinct, nerve, and the certainty that there is always another angle.'},
  {name:'Dro',role:'Droid // Technician',code:'02',token:'Character_Assets/Token-Dro.png',sheet:'Character_Assets/CharacterSheet-Dro.png',reference:'Character_Assets/Reference-Dro.png',description:'A machine mind with a talent for improvisation. Dro keeps the crew moving when everything else is falling apart.'},
  {name:'Kallawarr',role:'Wookiee // Warrior',code:'03',token:'Character_Assets/Token-Kallawarr.png',sheet:'Character_Assets/CharacterSheet-Kallawarr.png',reference:'Character_Assets/Reference-Kallawarr.png',description:'Strength tempered by loyalty. Kallawarr carries the weight of old promises—and enough firepower to settle new ones.'},
  {name:'Kortha',role:'Operative // Infiltrator',code:'04',token:'Character_Assets/Token-Kortha.png',sheet:'Character_Assets/CharacterSheet-Kortha.png',reference:'Character_Assets/Reference-Kortha.png',description:'Patient, precise, and difficult to read. Kortha is most dangerous in the moment before anyone knows she is there.'},
  {name:'Lyra',role:'Scout // Survivor',code:'05',token:'Character_Assets/Token-Lyra.png',sheet:'Character_Assets/CharacterSheet-Lyra.png',reference:'Character_Assets/Reference-Lyra.png',description:'A desert scout caught between the life she knew and the crew that gave her another path. Tatooine taught her how to endure.'},
  {name:'Vikar',role:'Mandalorian // Hunter',code:'06',token:'Character_Assets/Token-Vikar.png',sheet:'Character_Assets/CharacterSheet-Vikar.png',reference:'Character_Assets/Reference-Vikar.png',description:'A hunter bound by discipline, armor, and a private code. Vikar measures every word—and makes every shot count.'}
];

const sessions = [
  {number:'00',label:'PREQUEL',title:'Before the Shadows',state:'Audio prologue',media:[{type:'audio',label:'Audio Prequel',note:'Play the prologue',src:'Narration.mp3'},{type:'pending',label:'Visual Recap',note:'Not applicable'},{type:'pending',label:'Full Session',note:'Not applicable'}]},
  {number:'01',label:'SESSION ONE',title:'Escape from Mos Shuuta',state:'Complete archive',media:[{type:'crawl',label:'Opening Crawl',note:'Play cinematic intro',src:'Crawl-1.mp4',roman:'I'},{type:'image',label:'Visual Recap',note:'Open at full size',src:'Session1.png'},{type:'video',label:'Full Session',note:'Watch game stream',src:'Session1.mp4'}]},
  {number:'02',label:'SESSION TWO',title:'Loose Ends',state:'Complete archive',media:[{type:'crawl',label:'Opening Crawl',note:'Play cinematic intro',src:'Crawl-2.mp4',roman:'II'},{type:'image',label:'Visual Recap',note:'Open at full size',src:'Session2.png'},{type:'video',label:'Full Session',note:'Watch game stream',src:'Session2.mp4'}]},
  {number:'03',label:'SESSION THREE',title:'Desert Reckoning',state:'Complete archive',media:[{type:'crawl',label:'Opening Crawl',note:'Play cinematic intro',src:'Crawl-3.mp4',roman:'III'},{type:'image',label:'Visual Recap',note:'Open at full size',src:'Session3.png'},{type:'video',label:'Full Session',note:'Watch game stream',src:'Session3.mp4'}]},
  {number:'04',label:'SESSION FOUR // LATEST',title:'Vengeance in the Wastes',state:'Complete archive',media:[{type:'crawl',label:'Opening Crawl',note:'Play cinematic intro',src:'Crawl-4.mp4',roman:'IV'},{type:'image',label:'Visual Recap',note:'Open at full size',src:'Session4.png'},{type:'video',label:'Full Session',note:'Watch game stream',src:'Session4.mp4'}]},
  {number:'05',label:'SESSION FIVE // INCOMING',title:'Next Transmission',state:'Archive pending',media:[{type:'crawl',label:'Opening Crawl',note:'Play cinematic intro',src:'Crawl-5.mp4',roman:'V'},{type:'pending',label:'Visual Recap',note:'Awaiting field report'},{type:'pending',label:'Full Session',note:'Recording not received'}]}
];

const intel = [
  {title:'Adar Tallon',meta:'Bounty // 25,000 CR',category:'bounty',src:'DataPad-AdarTallon-Bounty.png'},
  {title:'Dex',meta:'Bounty dossier',category:'bounty',src:'DataPad-Dex-Bounty.png'},
  {title:'Mos Shuuta',meta:'Intercepted holo feed',category:'feed',src:'HoloFeed-MosShuuta.png'},
  {title:'Bestine',meta:'Imperial broadcast',category:'feed',src:'HoloFeed-Bestine.png'},
  {title:'The Jackals',meta:'Rebel cell intelligence',category:'field',src:'DataPad-Jackals.png'},
  {title:'Loot Manifest',meta:'Recovered cargo',category:'field',src:'DataPad-Loot.png'},
  {title:'Trex',meta:'Target dossier',category:'field',src:'DataPad-Trex.png'},
  {title:'Combat Doctrine',meta:'Mandalorian field notes',category:'field',src:'DataPad-MandoMartialArts.png'}
];

const locations = [
  {title:'Mos Shuuta',meta:'Day cycle',src:'Mos-Shuuta-FINAL-DAY.png'},
  {title:'Mos Shuuta',meta:'Night cycle',src:'Mos-Shuuta-FINAL-NIGHT.png'},
  {title:'The Krayt',meta:'Exterior survey',src:'Krayt-Outside.png'},
  {title:'The Krayt',meta:'Interior survey',src:'Krayt-Inside.png'}
];

const modal=document.querySelector('.media-modal');
const modalTitle=document.querySelector('#modal-title');
const modalMedia=document.querySelector('.modal-media');

function openImage(src,title,fullSize=true){
  modal.classList.toggle('full-size',fullSize); modalTitle.textContent=title; modalMedia.innerHTML='';
  const image=new Image(); image.src=src; image.alt=title; modalMedia.append(image); modal.showModal();
}
function openVideo(src,title){
  modal.classList.remove('full-size'); modalTitle.textContent=title; modalMedia.innerHTML='';
  const video=document.createElement('video'); video.src=src; video.controls=true; video.autoplay=true; video.playsInline=true; modalMedia.append(video); modal.showModal();
}
function openAudio(src,title){
  modal.classList.remove('full-size'); modalTitle.textContent=title; modalMedia.innerHTML='';
  const audio=document.createElement('audio'); audio.src=src; audio.controls=true; audio.autoplay=true; modalMedia.append(audio); modal.showModal();
}
function closeModal(){const media=modalMedia.querySelector('video,audio');if(media)media.pause();modal.close();modalMedia.innerHTML=''}
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',event=>{if(event.target===modal)closeModal()});

const castSelector=document.querySelector('.cast-selector');
cast.forEach((member,index)=>{
  const button=document.createElement('button'); button.type='button'; button.className='cast-tab'; button.role='tab'; button.dataset.code=member.code; button.setAttribute('aria-selected',index===0?'true':'false'); button.setAttribute('aria-label',member.name); button.innerHTML=`<img src="${member.token}" alt="">`;
  button.addEventListener('click',()=>selectCast(index)); castSelector.append(button);
});
function selectCast(index){
  const member=cast[index]; document.querySelectorAll('.cast-tab').forEach((tab,i)=>tab.setAttribute('aria-selected',i===index?'true':'false'));
  const token=document.querySelector('.cast-token'); token.src=member.token; token.alt=member.name;
  document.querySelector('.cast-code').textContent=`CAST // ${member.code}`; document.querySelector('.cast-name').textContent=member.name; document.querySelector('.cast-role').textContent=member.role; document.querySelector('.cast-description').textContent=member.description;
  document.querySelector('.cast-sheet').onclick=()=>openImage(member.sheet,`${member.name} character sheet`);
  document.querySelector('.cast-reference').onclick=()=>openImage(member.reference,`${member.name} field reference`);
}
selectCast(0);

const sessionTabs=document.querySelector('.session-tabs');
sessions.forEach((session,index)=>{
  const button=document.createElement('button'); button.type='button'; button.className='session-tab'; button.role='tab'; button.setAttribute('aria-selected',index===4?'true':'false'); button.innerHTML=`${session.number}<small>${index===0?'PROLOGUE':index===5?'INCOMING':'LOG'}</small>`; button.addEventListener('click',()=>selectSession(index)); sessionTabs.append(button);
});
function mediaMarkup(item,session){
  const meta=`<span class="media-meta"><b>${item.label}</b><small>${item.note}</small></span>`;
  if(item.type==='image') return `<button class="session-media" type="button" data-kind="image" data-src="${item.src}"><span class="media-art"><img src="${item.src}" alt="${session.title} visual recap"></span>${meta}</button>`;
  if(item.type==='crawl') return `<button class="session-media" type="button" data-kind="video" data-src="${item.src}"><span class="media-art crawl-art"><b>${item.roman}</b><i class="art-label">Opening transmission</i></span>${meta}</button>`;
  if(item.type==='video') return `<button class="session-media" type="button" data-kind="video" data-src="${item.src}"><span class="media-art stream-art"><b>▶</b><i class="art-label">Recorded game stream</i></span>${meta}</button>`;
  if(item.type==='audio') return `<button class="session-media" type="button" data-kind="audio" data-src="${item.src}"><span class="media-art stream-art"><b>♫</b><i class="art-label">Recovered narration</i></span>${meta}</button>`;
  return `<div class="session-media unavailable"><span class="media-art pending-art"><b>—</b><i class="art-label">File unavailable</i></span>${meta}</div>`;
}
function selectSession(index){
  const session=sessions[index]; document.querySelectorAll('.session-tab').forEach((tab,i)=>tab.setAttribute('aria-selected',i===index?'true':'false'));
  document.querySelector('.session-label').textContent=session.label; document.querySelector('.session-title').textContent=session.title; document.querySelector('.archive-state').textContent=session.state;
  const available=session.media.filter(item=>item.type!=='pending').length; document.querySelector('.archive-count').textContent=`0${available} FILE${available===1?'':'S'} AVAILABLE`;
  const grid=document.querySelector('.session-media-grid'); grid.innerHTML=session.media.map(item=>mediaMarkup(item,session)).join('');
  grid.querySelectorAll('button[data-kind]').forEach(button=>button.addEventListener('click',()=>{
    const kind=button.dataset.kind; const label=button.querySelector('.media-meta b').textContent; const title=`${session.title} // ${label}`;
    if(kind==='image')openImage(button.dataset.src,title); else if(kind==='audio')openAudio(button.dataset.src,title); else openVideo(button.dataset.src,title);
  }));
}
selectSession(4);

let archiveType='intel'; let archiveFilter='all'; let archivePage=0; const pageSize=4;
function currentArchive(){return archiveType==='locations'?locations:intel.filter(item=>archiveFilter==='all'||item.category===archiveFilter)}
function renderArchive(){
  const items=currentArchive(); const pages=Math.max(1,Math.ceil(items.length/pageSize)); archivePage=Math.min(archivePage,pages-1); const visible=items.slice(archivePage*pageSize,archivePage*pageSize+pageSize);
  document.querySelector('.page-readout').textContent=`${String(archivePage+1).padStart(2,'0')} / ${String(pages).padStart(2,'0')}`; document.querySelector('.archive-total').textContent=`${String(items.length).padStart(2,'0')} FILES`;
  const grid=document.querySelector('.archive-grid'); grid.innerHTML=visible.map(item=>`<button class="archive-item" type="button" data-src="${item.src}" data-title="${item.title}"><img src="${item.src}" alt="${item.title}"><span><b>${item.title}</b><small>${item.meta}</small></span></button>`).join('');
  grid.querySelectorAll('.archive-item').forEach(button=>button.addEventListener('click',()=>openImage(button.dataset.src,button.dataset.title)));
  document.querySelector('.page-prev').disabled=pages===1; document.querySelector('.page-next').disabled=pages===1;
}
document.querySelectorAll('.archive-tabs button').forEach(button=>button.addEventListener('click',()=>{archiveType=button.dataset.archive;archivePage=0;document.querySelectorAll('.archive-tabs button').forEach(item=>item.classList.toggle('active',item===button));document.querySelector('.intel-filters').style.visibility=archiveType==='intel'?'visible':'hidden';renderArchive()}));
document.querySelectorAll('.intel-filters button').forEach(button=>button.addEventListener('click',()=>{archiveFilter=button.dataset.filter;archivePage=0;document.querySelectorAll('.intel-filters button').forEach(item=>item.classList.toggle('active',item===button));renderArchive()}));
document.querySelector('.page-prev').addEventListener('click',()=>{const pages=Math.max(1,Math.ceil(currentArchive().length/pageSize));archivePage=(archivePage-1+pages)%pages;renderArchive()});
document.querySelector('.page-next').addEventListener('click',()=>{const pages=Math.max(1,Math.ceil(currentArchive().length/pageSize));archivePage=(archivePage+1)%pages;renderArchive()});
document.querySelector('.quick-image').addEventListener('click',event=>openImage(event.currentTarget.dataset.image,event.currentTarget.dataset.title));
renderArchive();

document.querySelectorAll('.mobile-tabs button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.mobile-tabs button').forEach(item=>item.classList.toggle('active',item===button));document.querySelectorAll('.dashboard-panel').forEach(panel=>panel.classList.toggle('active-panel',panel.classList.contains(button.dataset.panel)))}));
document.querySelector('.compact-toggle').addEventListener('click',()=>document.querySelector('.mobile-tabs').classList.toggle('menu-open'));

function updateTime(){document.querySelector('#local-time').textContent=new Date().toLocaleTimeString([], {hour12:false})}
updateTime(); setInterval(updateTime,1000);
