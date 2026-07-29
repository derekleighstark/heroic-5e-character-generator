const crew = [
  {
    name: 'Dex',
    role: 'Scoundrel / Gunslinger',
    code: '01',
    token: 'assets/images/Character_Assets/Token-Dex.webp',
    sheet: 'assets/images/Character_Assets/CharacterSheet-Dex.webp',
    reference: 'assets/images/Character_Assets/Reference-Dex.webp',
    description: 'A quick draw and a quicker smile. Dex survives on instinct, nerve, and the certainty that there is always another angle.'
  },
  {
    name: 'Dro',
    role: 'Technician / Force-sensitive',
    code: '02',
    token: 'assets/images/Character_Assets/Token-Dro.webp',
    sheet: 'assets/images/Character_Assets/CharacterSheet-Dro.webp',
    reference: 'assets/images/Character_Assets/Reference-Dro.webp',
    description: 'A gifted technician with a buried connection to the Force. Dro keeps the Krayt Fang moving when everything else is falling apart.'
  },
  {
    name: 'Kallawarr',
    role: 'Wookiee / Warrior',
    code: '03',
    token: 'assets/images/Character_Assets/Token-Kallawarr.webp',
    sheet: 'assets/images/Character_Assets/CharacterSheet-Kallawarr.webp',
    reference: 'assets/images/Character_Assets/Reference-Kallawarr.webp',
    description: 'Strength tempered by loyalty. Kallawarr carries the weight of old promises and enough firepower to settle new ones.'
  },
  {
    name: 'Kortha',
    role: 'Mandalorian / Bounty hunter',
    code: '04',
    token: 'assets/images/Character_Assets/Token-Kortha.webp',
    sheet: 'assets/images/Character_Assets/CharacterSheet-Kortha.webp',
    reference: 'assets/images/Character_Assets/Reference-Kortha.webp',
    description: 'Patient, precise, and difficult to read. Kortha is most dangerous in the moment before anyone knows he is there.'
  },
  {
    name: 'Lyra',
    role: 'Scout / Survivor',
    code: '05',
    token: 'assets/images/Character_Assets/Token-Lyra.webp',
    sheet: 'assets/images/Character_Assets/CharacterSheet-Lyra.webp',
    reference: 'assets/images/Character_Assets/Reference-Lyra.webp',
    description: 'A desert scout caught between the life she knew and the crew that gave her another path. Tatooine taught her how to endure.'
  },
  {
    name: 'Vikar',
    role: 'Mandalorian / Hunter',
    code: '06',
    token: 'assets/images/Character_Assets/Token-Vikar.webp',
    sheet: 'assets/images/Character_Assets/CharacterSheet-Vikar.webp',
    reference: 'assets/images/Character_Assets/Reference-Vikar.webp',
    description: 'A hunter bound by discipline, armor, and a private code. Vikar measures every word and makes every shot count.'
  }
];

const modal = document.querySelector('.media-modal');
const modalTitle = document.querySelector('#modal-title');
const modalMedia = document.querySelector('.modal-media');

function openImage(src, title) {
  modalTitle.textContent = title;
  modalMedia.replaceChildren();
  const image = new Image();
  image.src = src;
  image.alt = title;
  modalMedia.append(image);
  modal.showModal();
  document.body.classList.add('modal-open');
}

function openVideo(src, title) {
  modalTitle.textContent = title;
  modalMedia.replaceChildren();
  const video = document.createElement('video');
  video.src = src;
  video.controls = true;
  video.autoplay = true;
  video.playsInline = true;
  modalMedia.append(video);
  modal.showModal();
  document.body.classList.add('modal-open');
}

function closeModal() {
  const playingMedia = modalMedia.querySelector('video, audio');
  if (playingMedia) playingMedia.pause();
  modal.close();
  modalMedia.replaceChildren();
  document.body.classList.remove('modal-open');
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});
modal.addEventListener('cancel', event => {
  event.preventDefault();
  closeModal();
});

document.querySelectorAll('.image-trigger').forEach(button => {
  button.addEventListener('click', () => openImage(button.dataset.image, button.dataset.title));
});

document.querySelectorAll('[data-video]').forEach(button => {
  button.addEventListener('click', () => openVideo(button.dataset.video, button.getAttribute('aria-label')));
});

const crewRoster = document.querySelector('.crew-roster');
const referenceImage = document.querySelector('.profile-reference-image');
const referenceTrigger = document.querySelector('.image-trigger-dynamic');

crew.forEach((member, index) => {
  const button = document.createElement('button');
  button.className = 'crew-tab';
  button.type = 'button';
  button.role = 'tab';
  button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
  button.setAttribute('aria-label', `Open ${member.name} dossier`);
  button.innerHTML = `<img src="${member.token}" alt=""><span><b>${member.name}</b><small>Record ${member.code}</small></span>`;
  button.addEventListener('click', () => selectCrew(index));
  crewRoster.append(button);
});

function selectCrew(index) {
  const member = crew[index];
  document.querySelectorAll('.crew-tab').forEach((tab, tabIndex) => {
    tab.setAttribute('aria-selected', tabIndex === index ? 'true' : 'false');
  });

  referenceImage.style.opacity = '0';
  window.setTimeout(() => {
    referenceImage.src = member.reference;
    referenceImage.alt = `${member.name} field reference`;
    referenceImage.style.opacity = '1';
  }, 120);

  document.querySelector('.profile-code').textContent = `Jackal ${member.code} / Active`;
  document.querySelector('.profile-name').textContent = member.name;
  document.querySelector('.profile-role').textContent = member.role;
  document.querySelector('.profile-description').textContent = member.description;
  document.querySelector('.profile-sheet').onclick = () => openImage(member.sheet, `${member.name} character sheet`);
  document.querySelector('.profile-reference').onclick = () => openImage(member.reference, `${member.name} field reference`);
  referenceTrigger.onclick = () => openImage(member.reference, `${member.name} field reference`);
  referenceTrigger.setAttribute('aria-label', `Open ${member.name} field reference`);
}

selectCrew(0);

document.querySelectorAll('.filter-bar button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-bar button').forEach(item => item.classList.toggle('active', item === button));
    document.querySelectorAll('.archive-item').forEach(item => {
      item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
    });
  });
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });

const sections = [...document.querySelectorAll('main section[id]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    nav.querySelectorAll('a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55%' });
sections.forEach(section => sectionObserver.observe(section));

const audio = document.querySelector('#ambient-audio');
const audioToggle = document.querySelector('.audio-toggle');
audioToggle.addEventListener('click', async () => {
  if (audio.paused) {
    try {
      await audio.play();
      audioToggle.setAttribute('aria-pressed', 'true');
      audioToggle.querySelector('.audio-label').textContent = 'Playing';
    } catch {
      audioToggle.querySelector('.audio-label').textContent = 'Unavailable';
    }
  } else {
    audio.pause();
    audioToggle.setAttribute('aria-pressed', 'false');
    audioToggle.querySelector('.audio-label').textContent = 'Prologue';
  }
});
audio.addEventListener('ended', () => {
  audioToggle.setAttribute('aria-pressed', 'false');
  audioToggle.querySelector('.audio-label').textContent = 'Prologue';
});
