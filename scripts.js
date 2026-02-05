const players = [
  { id: "cr7", name: "Cristiano Ronaldo", wiki: "Cristiano_Ronaldo", country: "Portugal", position: "Forward", image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Cristiano_Ronaldo_2275_%28cropped%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo", file: "https://commons.wikimedia.org/wiki/File:Cristiano_Ronaldo_2275_%28cropped%29.jpg", author: "YantsImages", credit: "Own work", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", date: "2025-09-06" }, subtitle: "Forward • Portugal", article: { clubs: ["Sporting CP","Manchester United","Real Madrid","Juventus","Al Nassr"], summary: "Powerful forward known for athleticism, finishing and free-kicks. Renowned for his heading ability, work-rate and leadership, he has repeatedly dominated top European competitions and international football.", statsNote: "700+ career goals for club & country (as of 2024); multiple Champions League titles and a UEFA Euro 2016 win with Portugal.", awards: ["5× Ballon d'Or","Multiple Champions League titles","UEFA European Championship 2016"], achievements: ["All-time top scorer periods","Multiple league titles across countries"] } },
  { id: "messi", name: "Lionel Messi", wiki: "Lionel_Messi", country: "Argentina", position: "Forward", image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Lionel_Messi", file: "https://commons.wikimedia.org/wiki/File:Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg", author: "Bryan Berlin", credit: "Own work", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0", date: "2025-07-09" }, subtitle: "Forward • Argentina", article: { clubs: ["FC Barcelona","Paris Saint-Germain","Inter Miami"], summary: "Creative forward celebrated for dribbling, close control and vision; instrumental in Barcelona's historic success and captain of Argentina's 2022 World Cup triumph.", statsNote: "700+ career goals (as of 2024) and many all-time scoring records; multiple domestic and international trophies.", awards: ["7× Ballon d'Or","FIFA World Cup 2022"], achievements: ["World Cup winner 2022","Many scoring records"] } },
  { id: "neymar", name: "Neymar Jr.", wiki: "Neymar", country: "Brazil", position: "Forward", image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Neymar", file: "https://commons.wikimedia.org/wiki/File:Neymar_Jr._with_Al_Hilal,_3_October_2023_-_03_(cropped).jpg", author: "Meghdad Madadi", credit: "Tasnim News Agency", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", date: "2023-10-03" }, subtitle: "Forward • Brazil", article: { clubs: ["Santos","FC Barcelona","Paris Saint-Germain"], summary: "Electric attacker known for flair, close control and creativity; a prolific playmaker and goalscorer who has starred for club and country and influenced a generation of Brazilian forwards.", statsNote: "400+ senior career goals (approx.) and numerous domestic trophies; Olympic gold medalist and consistent international contributor.", awards: ["Olympic Gold 2016"], achievements: ["Key player for club and country"] } },
  { id: "henry", name: "Thierry Henry", wiki: "Thierry_Henry", country: "France", position: "Forward", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Thierry_Henry_%2851649035951%29_%28cropped%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Thierry_Henry", file: "https://commons.wikimedia.org/wiki/File:Thierry_Henry_(51649035951)_(cropped).jpg", author: "Web Summit (Diarmuid Greene)", credit: "Diarmuid Greene / Web Summit via Sportsfile", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", date: "2021-11-02" }, subtitle: "Forward • France", article: { clubs: ["Monaco","Arsenal","Barcelona","New York Red Bulls"], summary: "Arsenal legend celebrated for blistering pace, intelligence and clinical finishing; a key figure in Arsenal's dominant era and a Premier League icon.", statsNote: "Multiple Golden Boot seasons and high assist totals in the Premier League; World Cup and Euro winner with France.", awards: ["FIFA World Cup 1998","UEFA Euro 2000"], achievements: ["Invincibles era member"] } },
  { id: "vanpersie", name: "Robin van Persie", wiki: "Robin_van_Persie", country: "Netherlands", position: "Forward", image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Loco-Fener_%2810%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Robin_van_Persie", file: "https://commons.wikimedia.org/wiki/File:Loco-Fener_(10).jpg", author: "Елена Рыбакова", credit: "soccer.ru", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0", date: "2016-02-26" }, subtitle: "Forward • Netherlands", article: { clubs: ["Feyenoord","Arsenal","Manchester United","Fenerbahçe"], summary: "Clinical, technically gifted striker known for his curling finishes and intelligent movement; enjoyed prolific spells at Arsenal and Manchester United.", statsNote: "Premier League Golden Boot winner and decisive goals that helped secure major trophies.", awards: ["Premier League Golden Boot"], achievements: ["2012–13 Premier League title with Man United"] } },
  { id: "maradona", name: "Diego Maradona", wiki: "Diego_Maradona", country: "Argentina", position: "Attacking Midfielder", image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Argentina_celebrando_copa_%28cropped%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Diego_Maradona", file: "https://commons.wikimedia.org/wiki/File:Argentina_celebrando_copa_(cropped).jpg", author: "Unknown", credit: "El Gráfico", license: "Public domain", licenseUrl: "", date: "1986-06-29" }, subtitle: "Attacking Midfielder • Argentina", article: { clubs: ["Argentinos Juniors","Boca Juniors","Barcelona","Napoli"], summary: "Iconic playmaker who captained Argentina to the 1986 World Cup; famed for dribbling, vision and the controversial 'Hand of God' moment that marked football history.", statsNote: "Legendary World Cup 1986 performances and transformative impact at Napoli, where he won domestic and UEFA honours.", awards: ["FIFA World Cup 1986"], achievements: ["Transformed Napoli"] } },
  { id: "ronaldoNazario", name: "Ronaldo Nazário", wiki: "Ronaldo_(Brazilian_footballer)", country: "Brazil", position: "Forward", image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Ronaldo_Lu%C3%ADs_Naz%C3%A1rio_de_Lima_2019_%283x4_cropped%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Ronaldo_(Brazilian_footballer)", file: "https://commons.wikimedia.org/wiki/File:Ronaldo_Lu%C3%ADs_Naz%C3%A1rio_de_Lima_2019_%283x4_cropped%29.jpg", author: "Web Summit (Stephen McCarthy)", credit: "Stephen McCarthy / Web Summit via Sportsfile", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", date: "2019-11-05" }, subtitle: "Forward • Brazil", article: { clubs: ["Cruzeiro","PSV","Barcelona","Inter","Real Madrid"], summary: "Explosive striker nicknamed 'O Fenômeno' noted for pace, dribbling and clinical finishing; a dominant forward whose style influenced a generation of strikers.", statsNote: "Key role in Brazil's 2002 World Cup win and prolific club scoring records across Europe.", awards: ["2× Ballon d'Or","FIFA World Cup 2002"], achievements: ["Legendary striker"] } },
  { id: "zidane", name: "Zinedine Zidane", wiki: "Zinedine_Zidane", country: "France", position: "Midfielder", image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Zinedine_Zidane", file: "https://commons.wikimedia.org/wiki/File:Zinedine_Zidane_by_Tasnim_03.jpg", author: "Hadi Abyar", credit: "Tasnim News Agency", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0", date: "2017-12-12" }, subtitle: "Midfielder • France", article: { clubs: ["Cannes","Bordeaux","Juventus","Real Madrid"], summary: "Elegant playmaker renowned for vision, close control and decisive performances in big matches; later became a successful manager at Real Madrid.", statsNote: "Scored in major finals and won World Cup and European Championship with France; multiple club honours.", awards: ["Ballon d'Or 1998","FIFA World Cup 1998","Euro 2000"], achievements: ["Scored in major finals"] } },
  { id: "beckham", name: "David Beckham", wiki: "David_Beckham", country: "England", position: "Midfielder", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/David_Beckham_UNICEF_%28cropped2%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/David_Beckham", file: "https://commons.wikimedia.org/wiki/File:David_Beckham_UNICEF_(cropped2).jpg", author: "Soccer Aid for Unicef", credit: "Soccer Aid for Unicef (YouTube source)", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0", date: "2021-07-22" }, subtitle: "Midfielder • England", article: { clubs: ["Manchester United","Real Madrid","LA Galaxy","AC Milan","PSG"], summary: "Set-piece specialist and cultural icon known for crossing, free-kicks and leadership; won major trophies in England, Spain and abroad and helped grow football's global profile.", statsNote: "Multiple domestic trophies and notable contributions to football's growth, especially in MLS.", awards: ["Premier League titles","UEFA Champions League 1999"], achievements: ["Helped popularize football in the US"] } },
  { id: "rooney", name: "Wayne Rooney", wiki: "Wayne_Rooney", country: "England", position: "Forward", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wayne_Rooney_%2850121495731%29_%28cropped%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Wayne_Rooney", file: "https://commons.wikimedia.org/wiki/File:Wayne_Rooney_(50121495731)_(cropped).jpg", author: "All-Pro Reels", credit: "All-Pro Reels", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0", date: "2018-08-19" }, subtitle: "Forward • England", article: { clubs: ["Everton","Manchester United","DC United"], summary: "Powerful and versatile forward known for technical skill, vision and goalscoring; Manchester United's leading goalscorer for many years and a key figure in their domestic and European success.", statsNote: "Long spell as Man United top scorer and a consistent contributor on the international stage.", awards: ["Premier League titles","UEFA Champions League 2008"], achievements: ["Club legend at Man United"] } },
  { id: "robertoCarlos", name: "Roberto Carlos", wiki: "Roberto_Carlos", country: "Brazil", position: "Left-Back", image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/LS3_1288_%2853332367864%29_%28cropped%29.jpg", imageAttribution: { page: "https://en.wikipedia.org/wiki/Roberto_Carlos", file: "https://commons.wikimedia.org/wiki/File:LS3_1288_(53332367864)_(cropped).jpg", author: "Web Summit", credit: "Lukas Schulze / Web Summit via Sportsfile", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0", date: "2023-11-14" }, subtitle: "Left-Back • Brazil", article: { clubs: ["Palmeiras","Inter","Real Madrid","Fenerbahçe"], summary: "Attacking left-back known for speed, power and spectacular long-range strikes; a modern full-back who combined defensive duties with attacking raids and memorable free-kicks.", statsNote: "Integral part of Real Madrid's success with multiple domestic and European trophies.", awards: ["Multiple La Liga & Champions League titles"], achievements: ["Revolutionized full-back role"] } }
];

/* Elements */
const grid = document.getElementById('playersGrid');
const searchInput = document.getElementById('searchInput');
const filterCountry = document.getElementById('filterCountry');
const sortSelect = document.getElementById('sortSelect');
const loadImagesBtn = document.getElementById('loadImagesBtn');
const loadAwardsBtn = document.getElementById('loadAwardsBtn');
const noResults = document.getElementById('noResults');

/* Create card */
function createCard(p){
  const card = document.createElement('article');
  card.className = 'card';
  // give each card a stable id so TOC can link to it
  card.id = `player-${p.id}`;
  // short attribution shown on the card (author + license short)
  const att = p.imageAttribution ? `\n      <div class="card-attribution">${p.imageAttribution.author ? `Image: <span class="att-author">${p.imageAttribution.author}</span>` : 'Image'}${p.imageAttribution.license ? ` • <span class="att-license">${p.imageAttribution.license}</span>` : ''}${p.imageAttribution.file ? ` • <a href="${p.imageAttribution.file}" target="_blank" rel="noopener" class="att-link">file</a>` : ''}</div>` : '';
  card.innerHTML = `
    <img class="avatar fade-in" loading="lazy" src="${p.image}" alt="${p.name}">
    <div class="card-content">
      <h3>${p.name}</h3>
      <p class="muted">${p.subtitle}</p>
      <div class="tag-badge">${p.position} • ${p.country}</div>
      <button class="btn" data-id="${p.id}">Read profile</button>
      ${att}
    </div>
  `;
  // fade-in when image loads (handles cached/complete images)
  const imgEl = card.querySelector('img.avatar');
  if(imgEl){ imgEl.addEventListener('load', ()=> imgEl.classList.add('loaded')); if(imgEl.complete) imgEl.classList.add('loaded'); }
  return card;
}

/* Render players list with filters */
function renderPlayers(list){
  grid.innerHTML = '';
  if(!list.length){
    noResults.hidden = false; return;
  }
  noResults.hidden = true;
  list.forEach(p => grid.appendChild(createCard(p)));
  // refresh scroll-spy observers after rendering visible cards
  if(typeof initScrollSpy === 'function') initScrollSpy();
}

/* Populate country filter */
function populateFilters(){
  const countries = Array.from(new Set(players.map(p => p.country))).sort();
  countries.forEach(c => {
    const opt = document.createElement('option'); opt.value = c; opt.textContent = c; filterCountry.appendChild(opt);
  });
}

/* Search & filter logic */
function filterAndSort(){
  const q = (searchInput.value || '').toLowerCase().trim();
  const country = filterCountry.value;
  const sortBy = sortSelect.value;
  let out = players.filter(p => {
    if(country && p.country !== country) return false;
    if(!q) return true;
    if(p.name.toLowerCase().includes(q)) return true;
    if(p.subtitle.toLowerCase().includes(q)) return true;
    if(p.article.summary.toLowerCase().includes(q)) return true;
    if(p.article.clubs.join(' ').toLowerCase().includes(q)) return true;
    if(p.article.awards.join(' ').toLowerCase().includes(q)) return true;
    return false;
  });
  if(sortBy === 'name') out.sort((a,b) => a.name.localeCompare(b.name));
  if(sortBy === 'country') out.sort((a,b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));
  renderPlayers(out);
}

/* Debounce helper */
function debounce(fn, ms=200){ let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), ms); } }

/* Fetch image from Wikipedia REST summary API */
async function fetchImageFromWiki(player){
  const api = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(player.wiki)}`;
  try{
    const res = await fetch(api);
    if(!res.ok) throw new Error('no summary');
    const json = await res.json();
    const img = (json.originalimage && json.originalimage.source) || (json.thumbnail && json.thumbnail.source);
    if(img){ player.image = img; player.imageAttribution = { page: json.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${player.wiki}` };
      document.querySelectorAll(`.card img[alt="${player.name}"]`).forEach(imgEl => imgEl.src = player.image);
    }
  }catch(e){ console.warn('Image fetch failed for', player.name, e); }
}

/* Fetch short stats summary from Wikipedia summary API and save source + timestamp */
async function fetchStatsFromWiki(player){
  const api = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(player.wiki)}`;
  try{
    const res = await fetch(api);
    if(!res.ok) throw new Error('no summary');
    const json = await res.json();
    // use the extract (lead sentence/paragraph) as a short stats summary; preserve existing statsNote as fallback
    const extract = (json.extract && json.extract.length > 0) ? json.extract : (player.article.statsNote || '');
    player.article.statsNote = extract;
    player.article.statsSource = json.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${player.wiki}`;
    player.article.statsLastUpdated = json.timestamp || new Date().toISOString();
    // if modal is open for this player, refresh it
    const modalOpen = modal.getAttribute('aria-hidden') === 'false' && modalBody.innerHTML.includes(player.name);
    if(modalOpen) openModal(player);
  }catch(e){ console.warn('Stats fetch failed for', player.name, e); }
}

/* Refresh stats for all players */
async function refreshAllStats(){
  const btn = document.getElementById('refreshStatsBtn');
  if(!btn) return;
  btn.disabled = true; btn.textContent = 'Refreshing...';
  for(const p of players){ await fetchStatsFromWiki(p); }
  btn.textContent = 'Stats refreshed';
  setTimeout(()=>{ btn.textContent = 'Refresh stats'; btn.disabled = false; }, 900);
}

/* Load images for all players (button) */
async function loadAllImages(){
  loadImagesBtn.disabled = true; loadImagesBtn.textContent = 'Loading images...';
  for(const p of players){ await fetchImageFromWiki(p); }
  loadImagesBtn.textContent = 'Images loaded';
  setTimeout(()=> loadImagesBtn.classList.add('loaded'), 600);
}

/* Award image fetcher (on-demand, cached) */
const awardImages = {}; // mapping: award name -> metadata { image, page, file, author, credit, license, licenseUrl, date } 

// curated fallback icons for common awards (small inline SVGs or curated assets)
const curatedAwardMap = {
  'ballon d\'or': { image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="%23ffd166"/><path d="M16 40c4-6 12-14 20-14s16 8 20 14" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="32" cy="18" r="6" fill="#ffffff"/></svg>', page: 'https://en.wikipedia.org/wiki/Ballon_d%27Or', author: 'Curated asset', license: 'N/A' },
  'fifa world cup': { image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="%23bde0fe"/><circle cx="32" cy="22" r="10" fill="#ffffff"/><path d="M32 34v12" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/></svg>', page: 'https://en.wikipedia.org/wiki/FIFA_World_Cup', author: 'Curated asset', license: 'N/A' },
  'uefa champions league': { image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="%23cde7d8"/><path d="M20 24c6 10 20 10 26 0" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/></svg>', page: 'https://en.wikipedia.org/wiki/UEFA_Champions_League', author: 'Curated asset', license: 'N/A' }
};

async function fetchAwardImage(name){
  if(awardImages[name] !== undefined) return awardImages[name];
  const key = (name || '').toLowerCase().trim();
  // use curated fallback if available (tolerant substring/normalized match)
  for(const ck of Object.keys(curatedAwardMap)){
    const nk = ck.toLowerCase();
    const normKey = key.replace(/[^a-z0-9]/g,'');
    const normCk = nk.replace(/[^a-z0-9]/g,'');
    if(key.includes(nk) || nk.includes(key) || normKey.includes(normCk) || normCk.includes(normKey)){
      awardImages[name] = { ...curatedAwardMap[ck] }; return awardImages[name];
    }
  }

  const api = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`;
  try{
    const res = await fetch(api);
    if(!res.ok) { awardImages[name] = null; return null; }
    const json = await res.json();
    const img = (json.originalimage && json.originalimage.source) || (json.thumbnail && json.thumbnail.source);
    const page = json.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${encodeURIComponent(name)}`;
    const meta = img ? { image: img, page } : null;

    // if image is from Wikimedia Commons, try to fetch file extmetadata for attribution
    if(meta && meta.image && meta.image.includes('upload.wikimedia.org')){
      try{
        const parts = meta.image.split('/');
        const filename = decodeURIComponent(parts[parts.length - 1]);
        const fileTitle = `File:${filename}`;
        const api2 = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=imageinfo&iiprop=extmetadata&titles=${encodeURIComponent(fileTitle)}`;
        const r2 = await fetch(api2);
        if(r2.ok){
          const j2 = await r2.json();
          const pages = j2.query && j2.query.pages;
          if(pages){
            const pageKey = Object.keys(pages)[0];
            const ii = pages[pageKey].imageinfo && pages[pageKey].imageinfo[0];
            if(ii && ii.extmetadata){
              const em = ii.extmetadata;
              meta.file = `https://commons.wikimedia.org/wiki/File:${filename}`;
              meta.author = (em.Artist && em.Artist.value) ? em.Artist.value.replace(/<[^>]*>/g,'') : (em.Author && em.Author.value) || '';
              meta.credit = em.Credit && em.Credit.value || '';
              meta.license = (em.LicenseShortName && em.LicenseShortName.value) || (em.License && em.License.value) || '';
              meta.licenseUrl = em.LicenseUrl && em.LicenseUrl.value || '';
              meta.date = em.DateTimeOriginal && em.DateTimeOriginal.value || '';
            }
          }
        }
      }catch(e){ console.warn('file metadata failed for award', name, e); }
    }

    awardImages[name] = meta;
    return awardImages[name];
  }catch(e){
    console.warn('Award image fetch failed for', name, e);
    awardImages[name] = null; return null;
  }
}

async function loadAwardsForPlayer(player){
  for(const a of (player.article.awards || [])){ await fetchAwardImage(a); }
}

async function loadAllAwardImages(){
  const btn = document.getElementById('loadAwardsBtn');
  if(!btn) return;
  btn.disabled = true; btn.textContent = 'Loading award images...';
  const uniq = Array.from(new Set(players.flatMap(p => p.article.awards || [])));
  for(const name of uniq){ await fetchAwardImage(name); }
  btn.textContent = 'Award images loaded';
  setTimeout(()=>{ btn.textContent = 'Load award images'; btn.disabled = false; }, 900);
}

/* Modal */
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModal');

function openModal(player){
  modal.setAttribute('aria-hidden', 'false');
  // build a friendly attribution string when available
  let attHtml = '';
  if(player.imageAttribution){
    const a = player.imageAttribution;
    const parts = [];
    if(a.author) parts.push(`Image by ${a.author}`);
    if(a.file) parts.push(`<a href="${a.file}" target="_blank" rel="noopener">file</a>`);
    if(a.license) parts.push(`License: <a href="${a.licenseUrl}" target="_blank" rel="noopener">${a.license}</a>`);
    if(a.page) parts.push(`<a href="${a.page}" target="_blank" rel="noopener">Wikipedia article</a>`);
    if(a.credit && !parts.includes(a.credit)) parts.push(a.credit);
    attHtml = parts.join(' • ');
  }

  // build awards gallery markup (uses cached awardImages if available)
  const awards = player.article.awards || [];
  const awardHtml = awards.map(a => {
    const info = awardImages[a];
    const imgTag = (info && info.image) ? `<img src="${info.image}" alt="${a}">` : `<div class="award-placeholder" title="${a}">🏆</div>`;
    const attrib = (info && (info.author || info.license || info.file)) ? `<div class="award-attribution">${info.author ? `by ${info.author}` : ''}${info.license ? ` • <a href="${info.licenseUrl}" target="_blank" rel="noopener">${info.license}</a>` : ''}${info.file ? ` • <a href="${info.file}" target="_blank" rel="noopener">file</a>` : ''}</div>` : '';
    return `<div class="award">${imgTag}<div class="award-name">${a}</div>${attrib}</div>`;
  }).join('');
  const awardsSection = `
        <div class="awards-gallery">${awardHtml || '<div class="muted">No awards images available</div>'}</div>
        <div style="margin-top:8px"><button id="loadAwardsModalBtn" class="btn small" data-id="${player.id}">Load award images</button></div>
        <ul style="margin-top:10px">${awards.map(a => `<li>${a}</li>`).join('')}</ul>`;

  modalBody.innerHTML = `
    <div class="modal-body">
      <img class="fade-in" loading="lazy" src="${player.image}" alt="${player.name}">
      <div>
        <h2>${player.name}</h2>
        <p class="modal-meta"><em>${player.subtitle}</em></p>
        <p>${player.article.summary}</p>
        <h4>Clubs</h4>
        <ul>${player.article.clubs.map(c => `<li>${c}</li>`).join('')}</ul>
        <h4>Key Stats</h4>
        <p>${player.article.statsNote || ''}</p>
        <div class="stat-meta">${player.article.statsLastUpdated ? `Last updated: ${new Date(player.article.statsLastUpdated).toLocaleDateString()} · <a href="${player.article.statsSource}" target="_blank" rel="noopener">source</a>` : ''}</div>
        <h4>Awards & Achievements</h4>
        ${awardsSection}
        <div class="attribution">${attHtml}</div>
      </div>
    </div>
  `;

  // modal-level load button: fetch images for this player's awards then re-render modal
  const loadBtn = document.getElementById('loadAwardsModalBtn');
  if(loadBtn){
    loadBtn.addEventListener('click', async (e) => {
      loadBtn.disabled = true; loadBtn.textContent = 'Loading...';
      await loadAwardsForPlayer(player);
      openModal(player);
    });
  }

  // ensure modal images and award images fade in smoothly
  modalBody.querySelectorAll('img.fade-in').forEach(img => {
    img.addEventListener('load', ()=> img.classList.add('loaded'));
    if(img.complete) img.classList.add('loaded');
  });
  modalBody.querySelectorAll('.awards-gallery img').forEach(img => {
    img.addEventListener('load', ()=> img.classList.add('loaded'));
    if(img.complete) img.classList.add('loaded');
  });

  closeModalBtn.focus();
}

function closeModal(){ modal.setAttribute('aria-hidden', 'true'); modalBody.innerHTML = ''; }

/* Compatibility helper */
function displayPlayer(index){ if(typeof index === 'number' && players[index]) openModal(players[index]); }

/* Event wiring */
grid.addEventListener('click', e => {
  const btn = e.target.closest('button[data-id]'); if(!btn) return;
  const id = btn.dataset.id; const p = players.find(x => x.id === id); openModal(p);
});

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

searchInput.addEventListener('input', debounce(filterAndSort, 180));
filterCountry.addEventListener('change', filterAndSort);
sortSelect.addEventListener('change', filterAndSort);
loadImagesBtn.addEventListener('click', loadAllImages);
if(loadAwardsBtn){ loadAwardsBtn.addEventListener('click', loadAllAwardImages); }
// wire hero buttons too
const heroLoadImages = document.getElementById('heroLoadImages'); if(heroLoadImages){ heroLoadImages.addEventListener('click', ()=>{ loadAllImages(); heroLoadImages.classList.add('visited'); }); }
const heroLoadAwards = document.getElementById('heroLoadAwards'); if(heroLoadAwards){ heroLoadAwards.addEventListener('click', ()=>{ if(loadAwardsBtn) loadAllAwardImages(); heroLoadAwards.classList.add('visited'); }); }
const refreshStatsBtn = document.getElementById('refreshStatsBtn'); if(refreshStatsBtn){ refreshStatsBtn.addEventListener('click', refreshAllStats); }

/* Table of Contents (top + sidebar) */
function gotoPlayer(id){
  // if card exists, scroll to it; otherwise, filter to the player's name then scroll
  const el = document.getElementById(`player-${id}`);
  if(el){ el.scrollIntoView({behavior:'smooth', block:'center'}); el.querySelector('button[data-id]').focus(); setActiveTOC(id); return; }
  const p = players.find(x => x.id === id);
  if(p){ searchInput.value = p.name; filterCountry.value = ''; filterAndSort(); setTimeout(()=>{ const el2 = document.getElementById(`player-${id}`); if(el2){ el2.scrollIntoView({behavior:'smooth', block:'center'}); el2.querySelector('button[data-id]').focus(); setActiveTOC(id); } }, 120); } 
  const top = document.getElementById('tocListTop');
  const side = document.getElementById('tocListSide');
  if(!top && !side) return;
  const html = '<ul>' + players.map(p => `<li><a href="#player-${p.id}" data-id="${p.id}">${p.name}</a></li>`).join('') + '</ul>';
  if(top) top.innerHTML = html;
  if(side) side.innerHTML = html;
  document.querySelectorAll('#tocListTop a, #tocListSide a').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); const id = a.dataset.id; gotoPlayer(id);
      // close mobile top TOC after selection
      const toc = document.getElementById('tocTop'); const btn = document.getElementById('tocToggle'); if(toc && toc.classList.contains('open')){ toc.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
    });
  });
}

/* Scroll-spy: highlight TOC entry for the most visible card */
let spyObserver = null;
function setActiveTOC(id){
  document.querySelectorAll('#tocListTop a, #tocListSide a').forEach(a => {
    if(a.dataset.id === id) a.classList.add('active'); else a.classList.remove('active');
  });
}

function initScrollSpy(){
  if(spyObserver){ spyObserver.disconnect(); spyObserver = null; }
  const opts = { root: null, rootMargin: '-20% 0px -40% 0px', threshold: [0.25,0.5,0.75] };
  spyObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting);
    if(!visible.length) return;
    visible.sort((a,b) => b.intersectionRatio - a.intersectionRatio);
    const id = visible[0].target.id.replace('player-','');
    setActiveTOC(id);
  }, opts);
  // observe current cards
  document.querySelectorAll('.card').forEach(c => spyObserver.observe(c));
}

/* TOC toggle for small screens */
const tocToggleBtn = document.getElementById('tocToggle');
if(tocToggleBtn){ tocToggleBtn.addEventListener('click', ()=>{ const toc = document.getElementById('tocTop'); const expanded = toc.classList.toggle('open'); tocToggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false'); }); }

/* Init */
function init(){ populateFilters(); filterAndSort(); populateTOC(); }

document.addEventListener('DOMContentLoaded', init);