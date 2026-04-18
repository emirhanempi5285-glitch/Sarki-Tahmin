const CATEGORIES = {
    global_pop: [
        "The Weeknd", "Dua Lipa", "Taylor Swift", "Ed Sheeran", "Billie Eilish", 
        "Adele", "Michael Jackson", "Bruno Mars", "Katy Perry", "Lady Gaga", 
        "Ariana Grande", "Maroon 5", "Justin Bieber", "Sia", "Harry Styles", 
        "Rihanna", "Madonna", "Shakira", "Beyoncé"
    ],
    turkce_pop: [
        "Sezen Aksu", "Tarkan", "Mabel Matiz", "Gülşen", "Kenan Doğulu", 
        "Sertab Erener", "Ajda Pekkan", "Zeynep Bastık", "Simge", "Edis",
        "Hande Yener", "Demet Akalın", "Yalın", "Göksel", "Mustafa Sandal"
    ],
    global_rock: [
        "Queen", "Coldplay", "Imagine Dragons", "Nirvana", "AC/DC", "Linkin Park",
        "Red Hot Chili Peppers", "Guns N' Roses", "Pink Floyd", "The Rolling Stones",
        "Radiohead", "Arctic Monkeys", "Led Zeppelin", "Foo Fighters", "Oasis"
    ],
    turkce_rock: [
        "Mor ve Ötesi", "Duman", "Athena", "Kargo", "Cem Karaca", "Barış Manço",
        "Teoman", "Şebnem Ferah", "Manga", "Pinhani", "Yüzyüzeyken Konuşuruz",
        "Dolu Kadehi Ters Tut", "Adamlar", "Haluk Levent", "Erkin Koray"
    ],
    global_metal: [
        "Metallica", "Slipknot", "System of a Down", "Korn", "Deftones", 
        "Iron Maiden", "Megadeth", "Limp Bizkit", "Avenged Sevenfold", "Pantera",
        "Disturbed", "Rammstein", "Evanescence", "Bring Me The Horizon", "Black Sabbath"
    ],
    turkce_metal: [
        "Pentagram", "Hayko Cepkin", "Murder King", "Black Tooth", "Pitch Black Process",
        "Kısa Devre", "Cenotaph", "Whisky", "Rampage", "Almora", "Ogün Sanlısoy"
    ],
    global_rap: [
        "Eminem", "Drake", "Kendrick Lamar", "50 Cent", "Snoop Dogg", "Post Malone",
        "Travis Scott", "Kanye West", "Tupac", "Notorious B.I.G.", "Jay-Z", 
        "J. Cole", "Cardi B", "Nicki Minaj", "Lil Wayne"
    ],
    turkce_rap: [
        "Ceza", "Sagopa Kajmer", "Ezhel", "Murda", "Gazapizm", "Şanışer",
        "Ben Fero", "Uzi", "Cakal", "Motive", "Killa Hakan", "Norm Ender",
        "Şehinşah", "Allâme", "Patron"
    ]
};

// Elements
const scoreValue = document.getElementById('scoreValue');
const playBtn = document.getElementById('playBtn');
const skipBtn = document.getElementById('skipBtn');
const volumeSlider = document.getElementById('volumeSlider');
const categorySelect = document.getElementById('categorySelect');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const pulseRing = document.getElementById('pulseRing');
const progressBar = document.getElementById('progressBar');
const statusMsg = document.getElementById('statusMsg');
const searchInput = document.getElementById('searchInput');
const autocompleteDropdown = document.getElementById('autocompleteDropdown');
const audioPlayer = document.getElementById('audioPlayer');
const btnCover = document.getElementById('btnCover');

// Modals
const feedbackModal = document.getElementById('feedbackModal');
const feedbackPanel = document.getElementById('feedbackPanel');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackCover = document.getElementById('feedbackCover');
const feedbackTrack = document.getElementById('feedbackTrack');
const feedbackArtist = document.getElementById('feedbackArtist');

// Game State
let score = 0;
let currentAnswer = null;
let isPlaying = false;
let searchTimeout = null;
let autoNextTimeout = null;

// Initialize
initGame();

function initGame() {
    score = 0;
    updateScoreUI();
    
    // Set initial volume
    audioPlayer.volume = volumeSlider.value;

    loadNextSong();
    
    // Event Listeners
    playBtn.addEventListener('click', togglePlay);
    skipBtn.addEventListener('click', handleSkip);
    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    categorySelect.addEventListener('change', () => {
        // Reset the game when category changes
        score = 0;
        updateScoreUI();
        if(autoNextTimeout) clearTimeout(autoNextTimeout);
        feedbackModal.classList.remove('show');
        audioPlayer.pause();
        pulseRing.classList.remove('active');
        btnCover.classList.remove('show');
        loadNextSong();
    });

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', onAudioEnd);
    searchInput.addEventListener('input', handleSearchInput);
    
    // Close dropdown on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-wrapper')) {
            autocompleteDropdown.classList.remove('show');
        }
    });
}

function updateScoreUI() {
    scoreValue.textContent = score;
}

async function loadNextSong() {
    playBtn.disabled = true;
    skipBtn.disabled = true;
    searchInput.disabled = true;
    searchInput.value = '';
    autocompleteDropdown.classList.remove('show');
    progressBar.style.width = '0%';
    statusMsg.textContent = 'Yeni bir hit aranıyor...';
    
    try {
        // Determine artist pool based on category
        let artistPool = [];
        if (categorySelect.value === 'rastgele') {
            artistPool = Object.values(CATEGORIES).flat();
        } else {
            artistPool = CATEGORIES[categorySelect.value];
        }
        
        // Pick random artist
        const artist = artistPool[Math.floor(Math.random() * artistPool.length)];
        
        // Fetch from iTunes API
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&limit=40&entity=song&media=music`);
        const data = await response.json();
        
        // Filter songs with previewUrl
        const validSongs = data.results.filter(song => song.previewUrl);
        
        if (validSongs.length === 0) {
            throw new Error('Şarkı bulunamadı');
        }
        
        // Pick a random song from the results
        currentAnswer = validSongs[Math.floor(Math.random() * validSongs.length)];
        
        // Setup Audio
        audioPlayer.src = currentAnswer.previewUrl;
        audioPlayer.load();
        
        // Setup Cover Image
        if (currentAnswer.artworkUrl100) {
            btnCover.src = currentAnswer.artworkUrl100;
            btnCover.classList.add('show');
        } else {
            btnCover.classList.remove('show');
        }
        
        // Setup UI
        playBtn.disabled = false;
        skipBtn.disabled = false;
        searchInput.disabled = false;
        statusMsg.textContent = 'Hazır! Dinlemek için Play tuşuna basın';
        
        // Auto-play kaldırıldı, kullanıcının oynaması bekleniyor
        
    } catch (err) {
        console.error(err);
        statusMsg.textContent = 'Bağlantı hatası, tekrar deneniyor...';
        setTimeout(loadNextSong, 2000);
    }
}

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        pulseRing.classList.add('active');
        isPlaying = true;
    } else {
        audioPlayer.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        pulseRing.classList.remove('active');
        isPlaying = false;
    }
}

function onAudioEnd() {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    pulseRing.classList.remove('active');
    isPlaying = false;
}

function updateProgress() {
    if(!audioPlayer.duration) return;
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
}

// Autocomplete Search Logic
function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    if (searchTimeout) clearTimeout(searchTimeout);
    
    if (query.length < 2) {
        autocompleteDropdown.classList.remove('show');
        return;
    }
    
    searchTimeout = setTimeout(() => {
        searchSongs(query);
    }, 400); // 400ms debounce
}

async function searchSongs(query) {
    try {
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=10&entity=song&media=music`);
        const data = await response.json();
        
        if (data.results.length > 0) {
            renderDropdown(data.results);
        } else {
            renderDropdownEmpty();
        }
    } catch (err) {
        console.error("Search error", err);
    }
}

function renderDropdown(items) {
    autocompleteDropdown.innerHTML = '';
    
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        div.innerHTML = `
            <img src="${item.artworkUrl60 || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='}" alt="cover">
            <div class="text-info">
                <span class="track-name">${item.trackName}</span>
                <span class="artist-name">${item.artistName}</span>
            </div>
        `;
        
        div.addEventListener('click', () => {
            handleGuess(item);
        });
        
        autocompleteDropdown.appendChild(div);
    });
    
    autocompleteDropdown.classList.add('show');
}

function renderDropdownEmpty() {
    autocompleteDropdown.innerHTML = '<div class="dropdown-item"><span class="artist-name">Sonuç bulunamadı.</span></div>';
    autocompleteDropdown.classList.add('show');
}

// Check guess
function handleGuess(guessedItem) {
    audioPlayer.pause();
    pulseRing.classList.remove('active');
    autocompleteDropdown.classList.remove('show');
    
    searchInput.disabled = true;
    playBtn.disabled = true;
    skipBtn.disabled = true;
    
    const isCorrectId = guessedItem.trackId === currentAnswer.trackId;
    
    // Normalize strings for fallback comparison 
    const normalizedAnsTrack = currentAnswer.trackName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedGuessTrack = guessedItem.trackName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isCorrectName = (normalizedAnsTrack === normalizedGuessTrack) || (normalizedAnsTrack.includes(normalizedGuessTrack) && normalizedGuessTrack.length > 5);
    
    const isCorrect = isCorrectId || isCorrectName;
    
    if (isCorrect) {
        score += 10;
        updateScoreUI();
        showFeedback('correct');
    } else {
        showFeedback('wrong');
    }
}

function handleSkip() {
    audioPlayer.pause();
    pulseRing.classList.remove('active');
    autocompleteDropdown.classList.remove('show');
    
    searchInput.disabled = true;
    playBtn.disabled = true;
    skipBtn.disabled = true;
    
    showFeedback('skip');
}

function showFeedback(type) {
    feedbackModal.classList.add('show');
    
    if (type === 'correct') {
        feedbackPanel.className = 'modal glass-panel correct-panel';
        feedbackTitle.textContent = 'Harika! Doğru Bildiniz 🎉';
    } else if (type === 'skip') {
        feedbackPanel.className = 'modal glass-panel skip-panel';
        feedbackTitle.textContent = 'Pas Geçildi ⏭';
    } else {
        feedbackPanel.className = 'modal glass-panel wrong-panel';
        feedbackTitle.textContent = 'Yanlış Bildiniz 🥺';
    }
    
    // Load high res artwork if available
    const coverUrl = currentAnswer.artworkUrl100 ? currentAnswer.artworkUrl100.replace('100x100bb', '300x300bb') : currentAnswer.artworkUrl60;
    feedbackCover.src = coverUrl;
    feedbackTrack.textContent = currentAnswer.trackName;
    feedbackArtist.textContent = currentAnswer.artistName;
    
    // Otomatik olarak 3 saniye sonra yeni şarkıya geç
    if(autoNextTimeout) clearTimeout(autoNextTimeout);
    autoNextTimeout = setTimeout(() => {
        feedbackModal.classList.remove('show');
        loadNextSong();
    }, 3000);
}
