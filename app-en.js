const CATEGORIES = {
    global_pop: [
        "The Weeknd", "Dua Lipa", "Taylor Swift", "Ed Sheeran", "Billie Eilish", 
        "Adele", "Michael Jackson", "Bruno Mars", "Katy Perry", "Lady Gaga",
        "Ariana Grande", "Maroon 5", "Justin Bieber", "Sia", "Harry Styles", 
        "Rihanna", "Madonna", "Shakira", "Beyoncé", "Miley Cyrus", "Post Malone"
    ],
    yabanci_2000ler: [
        "Britney Spears", "Justin Timberlake", "Black Eyed Peas", "Eminem", 
        "Avril Lavigne", "Usher", "50 Cent", "Nelly Furtado", "Shakira", "Beyoncé",
        "Outkast", "Gwen Stefani", "Coldplay", "Sean Paul", "Linkin Park", "Rihanna"
    ],
    yabanci_90lar: [
        "Spice Girls", "Backstreet Boys", "TLC", "Destiny's Child", "Mariah Carey",
        "Céline Dion", "Nirvana", "Oasis", "Radiohead", "Tupac", "Snoop Dogg", 
        "Guns N' Roses", "Dr. Dre", "Ricky Martin", "Red Hot Chili Peppers", "No Doubt"
    ],
    yabanci_80ler: [
        "Michael Jackson", "Madonna", "George Michael", "Queen", "Whitney Houston",
        "Prince", "The Police", "Bon Jovi", "A-ha", "Tears for Fears", "Cyndi Lauper",
        "David Bowie", "Duran Duran", "Phil Collins", "Bruce Springsteen", "U2", 
        "Depeche Mode", "Eurythmics", "Tina Turner", "Elton John", "Cher"
    ],
    global_rock: [
        "Queen", "Pink Floyd", "The Rolling Stones",
        "Arctic Monkeys", "Led Zeppelin", "Foo Fighters",
        "Aerosmith", "Muse", "The Killers", "Kings of Leon", 
        "The Strokes", "Pearl Jam", "The Black Keys"
    ],
    punk_rock: [
        "Ramones", "The Clash", "Sex Pistols", "Green Day", "Blink-182", 
        "The Offspring", "Sum 41", "Misfits", "Bad Religion", "Pennywise", "NOFX"
    ],
    global_metal: [
        "Metallica", "Iron Maiden", "Megadeth", "Avenged Sevenfold", "Pantera",
        "Black Sabbath", "Judas Priest", "Motörhead", "Slayer", "Anthrax", 
        "Dream Theater", "Nightwish", "Opeth", "Trivium", "Ghost"
    ],
    nu_metal: [
        "Slipknot", "System of a Down", "Korn", "Deftones", "Limp Bizkit", 
        "Disturbed", "Papa Roach", "Mudvayne", "Drowning Pool", "Static-X", "Linkin Park"
    ],
    global_rap: [
        "Kendrick Lamar", "J. Cole", "Travis Scott", "Future", "Migos", "A$AP Rocky", 
        "Tyler, The Creator", "Mac Miller", "Logic", "Jay-Z", "Lil Wayne", "Nicki Minaj"
    ],
    film: [
        "Hans Zimmer", "John Williams", "Ennio Morricone", "Ramin Djawadi", 
        "Howard Shore", "Ludovico Einaudi", "Trent Reznor", "Danny Elfman",
        "Thomas Newman", "James Horner", "Alan Silvestri", "Lorne Balfe", 
        "Michael Giacchino", "Harry Gregson-Williams", "Brian Tyler"
    ],
    oyun: [
        "Mick Gordon", "Jeremy Soule", "Jesper Kyd", "Koji Kondo", 
        "Nobuo Uematsu", "Gustavo Santaolalla", "C418", "Austin Wintory",
        "Darren Korb", "Gareth Coker", "Sarah Schachner", "Marcin Przybylowicz", 
        "Joris de Man", "Peter McConnell", "Christopher Tin", "Yoko Shimomura", "Masayoshi Soken"
    ]
};

// Elements
const scoreValue = document.getElementById('scoreValue');
const playBtn = document.getElementById('playBtn');
const skipBtn = document.getElementById('skipBtn');
const hintBtn = document.getElementById('hintBtn');
const trackStats = document.getElementById('trackStats');
const volumeSlider = document.getElementById('volumeSlider');

// Sidebar UI Elements
const categorySidebar = document.getElementById('categorySidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const categoryToggleBtn = document.getElementById('categoryToggleBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const catBtns = document.querySelectorAll('#musicCategoryList .cat-btn');
const movieCatBtns = document.querySelectorAll('#movieCategoryList .cat-btn');
const musicCategoryList = document.getElementById('musicCategoryList');
const movieCategoryList = document.getElementById('movieCategoryList');
const sidebarTitle = document.getElementById('sidebarTitle');

// Mode Sidebar UI Elements
const modeSidebar = document.getElementById('modeSidebar');
const modeToggleTab = document.getElementById('modeToggleTab');
const closeModeSidebarBtn = document.getElementById('closeModeSidebarBtn');

const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const pulseRing = document.getElementById('pulseRing');
const progressBar = document.getElementById('progressBar');
const statusMsg = document.getElementById('statusMsg');
const searchInput = document.getElementById('searchInput');
const autocompleteDropdown = document.getElementById('autocompleteDropdown');
const audioPlayer = document.getElementById('audioPlayer');
const btnCover = document.getElementById('btnCover');
const hintBox = document.querySelector('.hint-box');

// Modals
const feedbackModal = document.getElementById('feedbackModal');
const feedbackPanel = document.getElementById('feedbackPanel');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackCover = document.getElementById('feedbackCover');
const feedbackTrack = document.getElementById('feedbackTrack');
const feedbackArtist = document.getElementById('feedbackArtist');

const volumeContainer = document.getElementById('volumeContainer');
const livesContainer = document.getElementById('livesContainer');
const hearts = document.querySelectorAll('#livesContainer .heart');
const hintsGrid = document.getElementById('hintsGrid');
const hintYear = document.getElementById('hintYear');
const hintCast = document.getElementById('hintCast');
const hintOverview = document.getElementById('hintOverview');

// Streamer UI Elements
const streamerSetup = document.getElementById('streamerSetup');
const kickUsernameInput = document.getElementById('kickUsernameInput');
const verifyStreamerBtn = document.getElementById('verifyStreamerBtn');
const kickProfileCard = document.getElementById('kickProfileCard');
const kickProfileImg = document.getElementById('kickProfileImg');
const kickProfileName = document.getElementById('kickProfileName');
const kickProfileFollowers = document.getElementById('kickProfileFollowers');
const kickChatroomIdDisplay = document.getElementById('kickChatroomIdDisplay');
const roundDurationInput = document.getElementById('roundDurationInput');
const startStreamerBtn = document.getElementById('startStreamerBtn');
const kickStatusMsg = document.getElementById('kickStatusMsg');
const roundWinners = document.getElementById('roundWinners');
const roundWinnersList = document.getElementById('roundWinnersList');
const globalScoreboard = document.getElementById('globalScoreboard');
const globalScoreList = document.getElementById('globalScoreList');
const progressBarContainer = document.getElementById('progressBarContainer');
const searchSection = document.getElementById('searchSection');
const currentCategoryName = document.getElementById('currentCategoryName');

// Movie UI Elements (required for mode switching)
const visualizerContainer = document.getElementById('visualizerContainer');
const frameContainer = document.getElementById('frameContainer');
const movieFrame = document.getElementById('movieFrame');
const modeButtons = document.querySelectorAll('#modeSidebar .cat-btn');

// Game State
let score = 0;
let currentAnswer = null;
let isPlaying = false;
let searchTimeout = null;
let autoNextTimeout = null;
let audioRetryTimeout = null;
const playedTrackIds = new Set();
const recentArtistHistory = []; // To prevent same artists consecutively
let usedHint = false;
let currentCategoryValue = 'rastgele';
let currentMovieGenre = 'all'; 
let currentMode = localStorage.getItem('gameMode') || 'song';
let movieLives = 4;
let movieHintDetails = null;

// Streamer Mode State
let globalScores = {}; 
let roundWinnersData = []; 
let userGuesses = {}; 
let pusherInstance = null;
let pusherChannelInfo = null;
let currentChatroomId = null;
let streamerRoundTimer = null;
let roundMaxTime = 45;
let currentRoundTime = 0;
let isStreamerRoundActive = false;
let isStreamerBattleActive = false;


const FREE_TMDB_KEYS = [
    'fb7bb23f03b6994dafc674c074d01761',
    'e55425032d3d0f371fc776f302e7c09b',
    '8301a21598f8b45668d5711a814f01f6',
    '8cf43ad9c085135b9479ad5cf6bbcbda',
    'da63548086e399ffc910fbc08526df05',
    '13e53ff644a8bd4ba37b3e1044ad24f3',
    '269890f657dddf4635473cf4cf456576',
    'a2f888b27315e62e471b2d587048f32e',
    '8476a7ab80ad76f0936744df0430e67c',
    '5622cafbfe8f8cfe358a29c53e19bba0',
    'ae4bd1b6fce2a5648671bfc171d15ba4',
    '257654f35e3dff105574f97fb4b97035',
    '2f4038e83265214a0dcd6ec2eb3276f5',
    '9e43f45f94705cc8e1d5a0400d19a7b7',
    'af6887753365e14160254ac7f4345dd2',
    '06f10fc8741a672af455421c239a1ffc',
    '09ad8ace66eec34302943272db0e8d2c'
];

let customTmdbApiKey = localStorage.getItem('tmdbApiKey') || '';

function getTmdbApiKey() {
    if (customTmdbApiKey) return customTmdbApiKey;
    return FREE_TMDB_KEYS[Math.floor(Math.random() * FREE_TMDB_KEYS.length)];
}

// Initialize
function initModeFromStorage() {
    const savedMode = localStorage.getItem('gameMode');
    if (savedMode) {
        currentMode = savedMode;
    }
}

// Global initialization - script is at end of body, DOM is ready
initModeFromStorage();
initGame();

function initGame() {
    score = 0;
    updateScoreUI();
    
    // Set initial volume
    audioPlayer.volume = volumeSlider.value;

    // Event Listeners
    playBtn.addEventListener('click', togglePlay);
    skipBtn.addEventListener('click', handleSkip);
    
    hintBtn.addEventListener('click', () => {
        hintBtn.disabled = true;
        if(currentMode === 'song') {
            btnCover.style.filter = 'blur(1px) brightness(1)'; // Netleştir
        } else {
            movieFrame.className = 'movie-backdrop'; // remove blur
        }
        usedHint = true;
    });

    volumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    // --- Sidebar Aç/Kapat ---
    function closeSidebar() {
        categorySidebar.classList.remove('open');
        modeSidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    }

    categoryToggleBtn.addEventListener('click', () => {
        categorySidebar.classList.add('open');
        sidebarOverlay.classList.add('show');
    });

    modeToggleTab.addEventListener('click', () => {
        modeSidebar.classList.add('open');
        sidebarOverlay.classList.add('show');
    });

    closeSidebarBtn.addEventListener('click', closeSidebar);
    closeModeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('settings-btn') || btn.disabled) return;
            
            const newMode = btn.dataset.mode;
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if(currentMode !== newMode) {
                currentMode = newMode;
                localStorage.setItem('gameMode', currentMode);
                resetGameForModeSwitch();
                loadNextRound();
                updateCategoryUI();
            }
            closeSidebar();
        });
    });

    // Sidebar'dan kategori seçme
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const newVal = btn.dataset.val;
            closeSidebar();
            
            if (currentCategoryValue !== newVal) {
                currentCategoryValue = newVal;
                // Reset game on selection
                if(currentMode !== 'song') return;
                score = 0;
                updateScoreUI();
                playedTrackIds.clear(); 
                recentArtistHistory.length = 0; 
                if(autoNextTimeout) clearTimeout(autoNextTimeout);
                feedbackModal.classList.remove('show');
                audioPlayer.pause();
                pulseRing.classList.remove('active');
                btnCover.classList.remove('show');
                loadNextRound();
                updateCategoryUI();
            }
        });
    });

    movieCatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            movieCatBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const newGenre = btn.dataset.genre;
            closeSidebar();
            if (currentMovieGenre !== newGenre) {
                currentMovieGenre = newGenre;
                playedTrackIds.clear();
                if (autoNextTimeout) clearTimeout(autoNextTimeout);
                feedbackModal.classList.remove('show');
                loadNextRound();
                updateCategoryUI();
            }
        });
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

    // Apply saved mode and start game
    modeButtons.forEach(btn => {
        if(btn.dataset.mode === currentMode) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    resetGameForModeSwitch();
    loadNextRound();
    updateCategoryUI();
}

function updateCategoryUI() {
    if (!currentCategoryName) return;
    let name = '-';
    if (currentMode === 'song') {
        const activeBtn = document.querySelector('#musicCategoryList .cat-btn.active');
        name = activeBtn ? activeBtn.textContent : 'Mixed';
    } else if (currentMode === 'movie') {
        const activeBtn = document.querySelector('#movieCategoryList .cat-btn.active');
        name = activeBtn ? activeBtn.textContent : 'All';
    } else if (currentMode === 'streamer') {
        name = 'Streamer Mode';
    }
    
    // Clear emojis
    currentCategoryName.textContent = name.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
}

function updateScoreUI() {
    scoreValue.textContent = score;
}

function resetGameForModeSwitch() {
    score = 0;
    updateScoreUI();
    playedTrackIds.clear(); 
    recentArtistHistory.length = 0; 
    if(autoNextTimeout) clearTimeout(autoNextTimeout);
    if(audioRetryTimeout) clearTimeout(audioRetryTimeout);
    feedbackModal.classList.remove('show');
    audioPlayer.pause();
    pulseRing.classList.remove('active');
    btnCover.classList.remove('show');
    streamerSetup.style.display = 'none';
    searchSection.style.display = 'block';
    globalScoreboard.style.display = 'none';
    progressBarContainer.style.display = 'block';
    roundWinners.style.display = 'none';
    document.body.classList.remove('streamer-mode-active');
    if(streamerRoundTimer) clearInterval(streamerRoundTimer);
    isStreamerRoundActive = false;
    isStreamerBattleActive = false;
    document.body.classList.remove('streamer-battle-active');

    if (pusherInstance) {
        pusherInstance.disconnect();
        pusherInstance = null;
    }
    
    // UI Reset
    visualizerContainer.style.display = 'none';
    frameContainer.style.display = 'none';
    searchSection.style.display = 'block';
    categoryToggleBtn.style.display = 'flex'; // Her modda önce bir göster (Yayıncıda tekrar gizleyeceğiz)
    document.getElementById('skipBtn').style.display = '';
    document.getElementById('mainScorePanel').style.display = 'flex';
    document.getElementById('mainScorePanel').style.visibility = 'visible';
    livesContainer.style.display = 'none';
    hintsGrid.style.display = 'none';
    hintBtn.style.display = 'block';
    hintBox.style.display = 'block';
    trackStats.style.display = 'none';
    statusMsg.textContent = '';

    if (currentMode === 'song') {
        visualizerContainer.style.display = 'flex';
        musicCategoryList.style.display = 'flex';
        movieCategoryList.style.display = 'none';
        sidebarTitle.textContent = 'Music Categories';
        searchInput.placeholder = 'Type song or artist...';
        volumeContainer.style.display = 'flex';
    } else if (currentMode === 'movie') {
        frameContainer.style.display = 'block';
        livesContainer.style.display = 'flex';
        hintsGrid.style.display = 'grid';
        hintBtn.style.display = 'none';
        hintBox.style.display = 'none';
        musicCategoryList.style.display = 'none';
        movieCategoryList.style.display = 'flex';
        sidebarTitle.textContent = 'Movie Categories';
        searchInput.placeholder = 'Enter movie title...';
        volumeContainer.style.display = 'none'; // No audio in movies
    } else if (currentMode === 'streamer') {
        searchSection.style.display = 'none';
        progressBarContainer.style.display = 'none';
        document.getElementById('mainScorePanel').style.display = 'none';
        volumeContainer.style.display = 'none'; // Hide audio in setup
        hintBtn.style.display = 'none'; // Hide hints in setup
        document.getElementById('skipBtn').style.display = 'none'; // Hide skip in setup
        hintBox.style.display = 'none'; // Hide empty box in setup
        statusMsg.textContent = 'Please complete the setup.';
        kickProfileCard.style.display = 'none';
        startStreamerBtn.style.display = 'none';
        kickStatusMsg.textContent = '';
        streamerSetup.style.display = 'block';
        document.body.classList.add('streamer-mode-active');
        categoryToggleBtn.style.display = 'none'; // Hide Sidebar Toggle in Streamer Setup
        musicCategoryList.style.display = 'flex';
        movieCategoryList.style.display = 'none';
        sidebarTitle.textContent = 'Music Categories';
    }
}

// -------------------------------------------------------------------------------------
// KICK STREAMER MODE & PUSHER LOGIC
// -------------------------------------------------------------------------------------
verifyStreamerBtn.addEventListener('click', async () => {
    const kickUsername = kickUsernameInput.value.trim().toLowerCase();
    if (!kickUsername) {
        kickStatusMsg.textContent = 'Please enter a valid username!';
        return;
    }

    kickStatusMsg.textContent = "Finding channel...";
    verifyStreamerBtn.disabled = true;
    kickProfileCard.style.display = 'none';
    startStreamerBtn.style.display = 'none';

    try {
        const res = await fetch(`https://kick.com/api/v1/channels/${kickUsername}`, {
            headers: { 'Accept': 'application/json' }
        });
        
        if (!res.ok) throw new Error('Channel not found or network error.');

        const data = await res.json();
        const chatroomId = data.chatroom?.id;

        if (!chatroomId) throw new Error('Could not retrieve chatroom ID (user may have never streamed).');

        currentChatroomId = chatroomId;
        kickProfileImg.src = data.user?.profile_pic || 'https://kick.com/favicon.ico';
        kickProfileName.textContent = data.user?.username || kickUsername;
        kickProfileFollowers.textContent = `${data.followersCount || 0} Followers`;

        kickProfileCard.style.display = 'flex';
        startStreamerBtn.style.display = 'block';
        kickStatusMsg.textContent = 'Channel verified. Ready to start!';

    } catch (err) {
        console.error(err);
        kickStatusMsg.textContent = `Error: ${err.message}`;
    } finally {
        verifyStreamerBtn.disabled = false;
    }
});

startStreamerBtn.addEventListener('click', async () => {
    if (!currentChatroomId) return;

    const duration = parseInt(roundDurationInput.value);
    if (!duration || duration < 15 || duration > 120) {
        kickStatusMsg.textContent = 'Round duration must be between 15 and 120 seconds.';
        return;
    }
    
    const streamerCategorySelect = document.getElementById('streamerCategorySelect');
    if (streamerCategorySelect) {
        currentCategoryValue = streamerCategorySelect.value;
    }
    
    roundMaxTime = duration;

    kickStatusMsg.textContent = "Connecting to chat...";
    startStreamerBtn.disabled = true;
    verifyStreamerBtn.disabled = true;
    categoryToggleBtn.style.display = 'none'; // Ensure hidden in EN version too

    try {
        if(pusherInstance) pusherInstance.disconnect();
        pusherInstance = new Pusher('32cbd69e4b950bf97679', { cluster: 'us2', forceTLS: true });
        pusherChannelInfo = pusherInstance.subscribe(`chatrooms.${currentChatroomId}.v2`);
        
        pusherChannelInfo.bind('pusher:subscription_succeeded', () => {
            kickStatusMsg.textContent = 'Connected! Game starting...';
            setTimeout(() => {
                isStreamerBattleActive = true;
                streamerSetup.style.display = 'none';
                visualizerContainer.style.display = 'flex';
                hintBox.style.display = 'block';
                volumeContainer.style.display = 'flex';
                document.getElementById('skipBtn').style.display = 'none';
                document.body.classList.add('streamer-battle-active');
                closeSidebar();
                
                globalScoreboard.style.display = 'flex';
                progressBarContainer.style.display = 'block';
                loadNextRound();
            }, 1000);
        });

        pusherChannelInfo.bind('App\\Events\\ChatMessageEvent', (eventData) => {
            if(!isStreamerRoundActive || !currentAnswer) return;
            handleStreamerChatGuess(eventData.sender.username, eventData.content);
        });

    } catch (err) {
        console.error(err);
        kickStatusMsg.textContent = `Error: ${err.message}`;
        startStreamerBtn.disabled = false;
        verifyStreamerBtn.disabled = false;
    }
});


function calculateLevenshteinDistance(a, b) {
    const matrix = [];
    for(let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
    for(let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
    for(let i = 1; i <= b.length; i++) {
        for(let j = 1; j <= a.length; j++) {
            if(b.charAt(i-1) == a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i-1][j-1] + 1, 
                    Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1)
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function normalizeStringForGuess(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function handleStreamerChatGuess(username, message) {
    if(roundWinnersData.length >= 10) return;
    if(userGuesses[username] >= 2) return;
    
    const target = normalizeStringForGuess(currentAnswer.trackName);
    const guess = normalizeStringForGuess(message);
    
    if(guess.length < 3) return;
    
    const distance = calculateLevenshteinDistance(target, guess);
    const threshold = target.length > 10 ? 2 : (target.length > 5 ? 1 : 0);
    
    if (guess.includes(target) || distance <= threshold) {
        if(roundWinnersData.find(w => w.username === username)) return;
        
        const points = Math.max(1, Math.ceil((currentRoundTime / roundMaxTime) * 10));
        roundWinnersData.push({ username, points });
        
        if(!globalScores[username]) globalScores[username] = 0;
        globalScores[username] += points;
        
        userGuesses[username] = 2; // Locked out
        updateGlobalScoreboardUI();
        
        if (roundWinnersData.length >= 10) endStreamerRound(true);
    } else {
        if(!userGuesses[username]) userGuesses[username] = 0;
        userGuesses[username]++;
    }
}

function updateGlobalScoreboardUI() {
    const sorted = Object.keys(globalScores).sort((a,b) => globalScores[b] - globalScores[a]);
    globalScoreList.innerHTML = '';
    if(sorted.length === 0) {
        globalScoreList.innerHTML = '<li class="empty-list">No scores yet.</li>';
        return;
    }
    sorted.slice(0, 50).forEach((user, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="rank">${index+1}</span><span class="user">${user}</span><span class="score">${globalScores[user]}</span>`;
        globalScoreList.appendChild(li);
    });
}

function endStreamerRound(earlyEnd = false) {
    if(!isStreamerRoundActive) return;
    isStreamerRoundActive = false;
    clearInterval(streamerRoundTimer);
    audioPlayer.pause();
    pulseRing.classList.remove('active');
    btnCover.classList.add('show');
    btnCover.querySelector('img').style.filter = 'blur(0px)';
    
    statusMsg.textContent = `${currentAnswer.artistName} - ${currentAnswer.trackName}`;
    progressBar.style.width = '100%';

    roundWinnersList.innerHTML = '';
    if(roundWinnersData.length === 0) {
        roundWinnersList.innerHTML = '<li style="justify-content: center; color: var(--text-muted)">Nobody guessed it!</li>';
    } else {
        roundWinnersData.forEach(w => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="user">${w.username}</span><span class="points">+${w.points} Pts</span>`;
            roundWinnersList.appendChild(li);
        });
    }
    
    roundWinners.style.display = 'block';

    autoNextTimeout = setTimeout(() => {
        roundWinners.style.display = 'none';
        loadNextRound();
    }, 7000);
}
// -------------------------------------------------------------------------------------

async function loadNextRound() {
    if (currentMode === 'streamer' && !isStreamerBattleActive) {
        return; // Do not fetch songs during setup
    }
    playBtn.disabled = true;
    skipBtn.disabled = true;
    hintBtn.disabled = true;
    searchInput.disabled = true;
    searchInput.value = '';
    autocompleteDropdown.classList.remove('show');
    progressBar.style.width = '0%';
    trackStats.style.display = 'none';
    btnCover.style.filter = ''; 
    movieFrame.className = 'movie-backdrop';
    usedHint = false;
    movieLives = 4;
    resetMovieUI();
    
    if (currentMode === 'song' || currentMode === 'streamer') {
        statusMsg.textContent = 'Searching for a hit...';
        trackStats.style.display = 'none';
        await loadNextAudioTask();
    } else if (currentMode === 'movie') {
        statusMsg.textContent = 'Fetch movie frame...';
        await loadNextMovieTask();
    }
}

function resetMovieUI() {
    hearts.forEach(h => h.classList.remove('lost'));
    [hintYear, hintCast, hintOverview].forEach(card => {
        card.classList.remove('unlocked');
        card.classList.add('locked');
        card.querySelector('.value').textContent = '?';
    });
}

function unlockMovieHint(level) {
    if (!movieHintDetails) return;
    
    if (level === 1) {
        hintYear.classList.replace('locked', 'unlocked');
        const genres = movieHintDetails.genres.map(g => g.name).slice(0, 2).join(', ');
        const year = movieHintDetails.release_date.substring(0, 4);
        hintYear.querySelector('.value').textContent = `${year} | ${genres}`;
    } else if (level === 2) {
        hintCast.classList.replace('locked', 'unlocked');
        const cast = movieHintDetails.credits.cast.slice(0, 3).map(c => c.name).join(', ');
        hintCast.querySelector('.value').textContent = cast;
    } else if (level === 3) {
        hintOverview.classList.replace('locked', 'unlocked');
        let text = movieHintDetails.overview;
        if (text.length > 60) text = text.substring(0, 57) + '...';
        hintOverview.querySelector('.value').textContent = text || 'No overview found';
    }
}

async function loadNextAudioTask() {
    playBtn.disabled = true;
    skipBtn.disabled = true;
    hintBtn.disabled = true;
    searchInput.disabled = true;
    searchInput.value = '';
    autocompleteDropdown.classList.remove('show');
    progressBar.style.width = '0%';
    statusMsg.textContent = 'Searching for a new hit...';
    trackStats.style.display = 'none';
    btnCover.style.filter = ''; // Reset CSS filter
    usedHint = false;
    
    try {
        // Determine artist pool based on category
        let artistPool = [];
        if (currentCategoryValue === 'rastgele') {
            const excludedCategories = ['film', 'oyun'];
            artistPool = Object.keys(CATEGORIES)
                .filter(key => !excludedCategories.includes(key))
                .flatMap(key => CATEGORIES[key]);
        } else {
            artistPool = CATEGORIES[currentCategoryValue];
        }
        
        if (playedTrackIds.size > 500) playedTrackIds.clear(); // Belleği temizle
        
        // Akıllı Shuffle Sistemi: Son çalınan sanatçıları havuzdan geçici süre çıkar
        const maxHistory = Math.max(1, Math.floor(artistPool.length / 2)); 
        const prohibitedArtists = recentArtistHistory.slice(-maxHistory);
        
        let artistCandidates = artistPool.filter(a => !prohibitedArtists.includes(a));
        if (artistCandidates.length === 0) artistCandidates = artistPool; // Havuz çok küçükse zorunlu fallback
        
        // Yeni sanatçıyı seç ve hafızaya ekle
        const artist = artistCandidates[Math.floor(Math.random() * artistCandidates.length)];
        recentArtistHistory.push(artist);
        if (recentArtistHistory.length > 50) recentArtistHistory.shift();

        // Fetch from iTunes API (attribute=artistTerm ensures strict Artist matching)
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(artist)}&limit=50&entity=song&media=music&attribute=artistTerm`);
        const data = await response.json();
        
        const excludeKeywords = ['live', 'remix', 'mix', 'karaoke', 'instrumental', 'acoustic', 'edit'];
        
        // Filter songs: Has URL, Not Played Before, Strictly Matches Artist, Excludes Remixes
        const validSongs = data.results.filter(song => {
            if (!song.previewUrl) return false;
            if (playedTrackIds.has(song.trackId)) return false; // Daha önce basildiyse gec
            
            const sArtist = song.artistName.toLowerCase();
            const qArtist = artist.toLowerCase();
            if (!sArtist.includes(qArtist) && !qArtist.includes(sArtist)) return false; // Kesin sanatçı denetimi
            
            const trackLower = song.trackName.toLowerCase();
            if (excludeKeywords.some(keyword => trackLower.includes(keyword))) return false;
            
            return true;
        });
        
        let poolToUse = validSongs;
        
        // KATI YIL FİLTRESİ: Eğer Yıl/Dönem kategorisinde isek anlık onay yap
        if (['yabanci_2000ler', 'yabanci_90lar', 'turkce_90lar_pop', 'yabanci_80ler'].includes(currentCategoryValue)) {
            const strictYearSongs = validSongs.filter(song => {
                const year = song.releaseDate ? parseInt(song.releaseDate.substring(0, 4)) : 0;
                if (year === 0) return true; // iTunes tarih vermediyse kurtarır
                
                if (currentCategoryValue === 'yabanci_2000ler') return year >= 2000 && year <= 2009;
                if (currentCategoryValue === 'yabanci_90lar' || currentCategoryValue === 'turkce_90lar_pop') return year >= 1990 && year <= 1999;
                if (currentCategoryValue === 'yabanci_80ler') return year >= 1980 && year <= 1989;
                return false;
            });
            
            if (strictYearSongs.length > 0) {
                poolToUse = strictYearSongs;
            } else {
                audioRetryTimeout = setTimeout(loadNextAudioTask, 500);
                return;
            }
        }
        
        if (poolToUse.length === 0) {
            audioRetryTimeout = setTimeout(loadNextAudioTask, 500);
            return;
        }
        
        // Repertuarı devasa popüler hit aralığına genişlet (Top 30 hit şarkı)
        const topPool = poolToUse.slice(0, Math.min(30, poolToUse.length));
        
        // Pick a random song and register it
        currentAnswer = topPool[Math.floor(Math.random() * topPool.length)];
        playedTrackIds.add(currentAnswer.trackId);
        
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
        hintBtn.disabled = false;
        searchInput.disabled = false;
        statusMsg.textContent = 'Ready! Press Play to listen';
        
        // Track Stats
        const year = currentAnswer.releaseDate ? currentAnswer.releaseDate.substring(0, 4) : '????';
        const randomViews = Math.floor(Math.random() * 800) + 100;
        trackStats.textContent = `📅 Release Year: ${year}  |  ▶️ ~${randomViews}M+ Streams`;
        trackStats.style.display = 'block';

        if (currentMode === 'streamer') {
            btnCover.querySelector('img').style.filter = 'blur(20px)';
            userGuesses = {};
            roundWinnersData = [];
            currentRoundTime = roundMaxTime;
            isStreamerRoundActive = true;
            
            audioPlayer.play().then(() => {
                isPlaying = true;
                pulseRing.classList.add('active');
                
                btnCover.querySelector('img').style.transition = `filter ${roundMaxTime}s linear`;
                setTimeout(() => {
                    if(isStreamerRoundActive) btnCover.querySelector('img').style.filter = 'blur(0px)';
                }, 100);

                streamerRoundTimer = setInterval(() => {
                    currentRoundTime--;
                    progressBar.style.width = `${((roundMaxTime - currentRoundTime) / roundMaxTime) * 100}%`;
                    statusMsg.textContent = `Time left to guess: ${currentRoundTime}s`;
                    if (currentRoundTime <= 0) endStreamerRound(false);
                }, 1000);
            }).catch(e => {
                console.error("Auto-play blocked", e);
                statusMsg.textContent = "Auto-play blocked, please click the page once!";
            });
        }
        
    } catch (err) {
        console.error(err);
        if (currentMode === 'song' || (currentMode === 'streamer' && isStreamerRoundActive)) {
            statusMsg.textContent = 'Connection error, retrying...';
            audioRetryTimeout = setTimeout(loadNextAudioTask, 2000);
        }
    }
}

async function loadNextMovieTask() {
    const activeKey = getTmdbApiKey();
    try {
        let movies = [];
        
        if (currentMovieGenre === 'top') {
            // Top Rated: IMDb 8.5+ (vote_average >= 8.5, vote_count >= 500)
            const page = Math.floor(Math.random() * 5) + 1;
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${activeKey}&language=en-US&sort_by=vote_average.desc&vote_count.gte=500&vote_average.gte=8.5&with_original_language=en&page=${page}`);
            const data = await res.json();
            movies = (data.results || []).filter(m => !playedTrackIds.has(m.id));
        } else if (currentMovieGenre === 'all') {
            const useTopRated = Math.random() > 0.3;
            const endpoint = useTopRated ? 'top_rated' : 'popular';
            const page = Math.floor(Math.random() * 8) + 1;
            const res = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=${activeKey}&language=en-US&page=${page}`);
            const data = await res.json();
            movies = (data.results || []).filter(m =>
                !playedTrackIds.has(m.id) &&
                m.vote_count >= 1000 &&
                m.vote_average >= 7.0 &&
                m.original_language === 'en'
            );
            if (movies.length === 0) movies = (data.results || []).filter(m => !playedTrackIds.has(m.id) && m.original_language === 'en');
        } else {
            const page = Math.floor(Math.random() * 8) + 1;
            const langFilter = currentMovieGenre === '16' ? '' : '&with_original_language=en';
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${activeKey}&language=en-US&sort_by=popularity.desc&vote_count.gte=500&vote_average.gte=6.5&with_genres=${currentMovieGenre}${langFilter}&page=${page}`);
            const data = await res.json();
            movies = (data.results || []).filter(m => !playedTrackIds.has(m.id));
        }
        
        if (movies.length === 0) {
            playedTrackIds.clear();
            return setTimeout(loadNextMovieTask, 300);
        }
        
        const selectedMovie = movies[Math.floor(Math.random() * movies.length)];
        
        const detailRes = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=${activeKey}&language=en-US&append_to_response=credits`);
        const movieDetails = await detailRes.json();
        movieHintDetails = movieDetails;

        const imgRes = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/images?api_key=${activeKey}`);
        const imgData = await imgRes.json();

        let backdrops = imgData.backdrops || [];
        const landscapeBackdrops = backdrops.filter(b => b.aspect_ratio > 1.2 && b.iso_639_1 === null);
        const finalBackdrops = landscapeBackdrops.length > 0 ? landscapeBackdrops : backdrops.filter(b => b.aspect_ratio > 1.2);
        
        if (finalBackdrops.length === 0) {
            return setTimeout(loadNextMovieTask, 300);
        }
        
        // Sort by community rating - low vote_average = likely has text/watermarks
        const sortedBackdrops = finalBackdrops.sort((a, b) => (b.vote_average || 0) - (a.vote_average || 0));
        
        // Use canvas analysis to find a text-free frame (max 8 attempts)
        const backdropUrl = await findCleanBackdrop(sortedBackdrops, `https://image.tmdb.org/t/p/w300`);
        
        if (!backdropUrl) {
            return setTimeout(loadNextMovieTask, 300);
        }
        
        const cleanPath = backdropUrl.replace('https://image.tmdb.org/t/p/w300', '');
        
        currentAnswer = {
            id: movieDetails.id,
            original_title: movieDetails.original_title,
            title: movieDetails.title,
            release_date: movieDetails.release_date,
            backdropPath: `https://image.tmdb.org/t/p/w1280${cleanPath}`,
            posterPath: movieDetails.poster_path ? `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}` : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
        };
        
        playedTrackIds.add(currentAnswer.id);
        movieFrame.src = currentAnswer.backdropPath;
        
        skipBtn.disabled = false;
        searchInput.disabled = false;
        statusMsg.textContent = 'Movie frame ready! Guess the movie.';
        
    } catch(e) {
        console.error(e);
        statusMsg.textContent = 'Error loading movie frame.';
        setTimeout(loadNextMovieTask, 2000);
    }
}

/**
 * Prefers community-validated backdrops (vote_count > 0).
 * Uses canvas analysis to detect both text/watermarks AND promo/cover images.
 */
async function findCleanBackdrop(sortedBackdrops, baseUrl) {
    // Prefer community-voted frames (actual scene stills get voted on)
    const communityValidated = sortedBackdrops.filter(b => (b.vote_count || 0) > 0);
    const pool = communityValidated.length >= 3 ? communityValidated : sortedBackdrops;
    
    const MAX_ATTEMPTS = Math.min(10, pool.length);
    
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        const bd = pool[i];
        const url = `${baseUrl}${bd.file_path}`;
        
        const result = await analyzeBackdropImage(url);
        if (result === 'clean') {
            return url;
        }
        console.log(`[BackdropFilter] Backdrop ${i} rejected (reason: ${result}): ${bd.file_path}`);
    }
    
    // Fallback: use first community-validated or any backdrop
    const fallback = pool[0] || sortedBackdrops[0];
    return fallback ? `${baseUrl}${fallback.file_path}` : null;
}

/**
 * Evaluates a backdrop image against three criteria:
 * 1. TEXT DETECTION: High contrast pixel density in top/bottom strips
 * 2. PROMO IMAGE: Low color variance across full frame (flat bg = cover/promo art)
 * 3. TOO DARK: Nearly black frames (credit backgrounds, fade-to-black)
 *
 * Returns: 'clean' | 'has_text' | 'too_uniform' | 'too_dark'
 */
function analyzeBackdropImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        const timeout = setTimeout(() => resolve('clean'), 4000);
        
        img.onload = () => {
            clearTimeout(timeout);
            try {
                const W = 300;
                const H = Math.round(W / (img.width / img.height));
                const canvas = document.createElement('canvas');
                canvas.width = W;
                canvas.height = H;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, W, H);
                
                const fullData = ctx.getImageData(0, 0, W, H).data;
                
                // ── CRITERION 1: Text/watermark detection ──────────────────
                const textRegions = [
                    { x: 0, y: Math.floor(H * 0.84), w: W, h: Math.floor(H * 0.16) }, // Bottom subtitles
                    { x: 0, y: 0,                    w: W, h: Math.floor(H * 0.13) }, // Top title
                    { x: Math.floor(W*0.55), y: 0,   w: Math.floor(W*0.45), h: Math.floor(H*0.22) } // Top-right logo
                ];
                let maxTextScore = 0;
                for (const r of textRegions) {
                    if (r.h <= 0 || r.w <= 0) continue;
                    const d = ctx.getImageData(r.x, r.y, r.w, r.h).data;
                    let edgePixels = 0;
                    for (let p = 0; p < d.length - 16; p += 8) {
                        const lum1 = 0.299*d[p]   + 0.587*d[p+1]   + 0.114*d[p+2];
                        const lum2 = 0.299*d[p+4] + 0.587*d[p+5]   + 0.114*d[p+6];
                        if (Math.abs(lum1 - lum2) > 75) edgePixels++;
                    }
                    maxTextScore = Math.max(maxTextScore, edgePixels / ((d.length/4) / 2));
                }
                if (maxTextScore > 0.14) return resolve('has_text');
                
                // ── CRITERION 2: Low color variance = promo/cover art ──────
                // Real movie scenes have rich color variety; promo images have flat gradients.
                let rSum = 0, gSum = 0, bSum = 0;
                let rSumSq = 0, gSumSq = 0, bSumSq = 0;
                const step = 16; // Sample every 4th pixel (fast)
                let count = 0;
                for (let p = 0; p < fullData.length; p += step) {
                    rSum += fullData[p]; gSum += fullData[p+1]; bSum += fullData[p+2];
                    rSumSq += fullData[p]**2; gSumSq += fullData[p+1]**2; bSumSq += fullData[p+2]**2;
                    count++;
                }
                const rVar = (rSumSq/count) - (rSum/count)**2;
                const gVar = (gSumSq/count) - (gSum/count)**2;
                const bVar = (bSumSq/count) - (bSum/count)**2;
                const avgVariance = (rVar + gVar + bVar) / 3;
                if (avgVariance < 200) return resolve('too_uniform');
                
                // ── CRITERION 3: Too dark (fade-to-black, credit backgrounds) ──
                const rMean = rSum / count;
                const gMean = gSum / count;
                const bMean = bSum / count;
                const avgLum = 0.299*rMean + 0.587*gMean + 0.114*bMean;
                if (avgLum < 18) return resolve('too_dark');
                
                resolve('clean');
                
            } catch(e) {
                resolve('clean'); // CORS or other error — pass through
            }
        };
        
        img.onerror = () => { clearTimeout(timeout); resolve('clean'); };
        img.src = url;
    });
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
        if (currentMode === 'song') {
            let categoryArtists = [];
            if (currentCategoryValue !== 'rastgele' && CATEGORIES[currentCategoryValue]) {
                categoryArtists = CATEGORIES[currentCategoryValue];
            }
            
            const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=30&entity=song&media=music`);
            const data = await response.json();
            
            let results = data.results;
            
            // If a category is active, ONLY show results from that category's artists
            if (categoryArtists.length > 0) {
                const filteredResults = results.filter(item => {
                    const artistLower = item.artistName.toLowerCase();
                    return categoryArtists.some(cat => {
                        const catLower = cat.toLowerCase();
                        return artistLower.includes(catLower) || catLower.includes(artistLower);
                    });
                });
                // No fallback - if artist not in category, don't show them
                results = filteredResults;
            }
            
            if (results.length > 0) renderDropdown(results.slice(0, 10));
            else renderDropdownEmpty();
        } else if (currentMode === 'movie') {
            const activeKey = getTmdbApiKey();
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${activeKey}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
            const data = await response.json();
            if (data.results && data.results.length > 0) renderMovieDropdown(data.results);
            else renderDropdownEmpty();
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
    autocompleteDropdown.innerHTML = '<div class="dropdown-item"><span class="artist-name">No results found.</span></div>';
    autocompleteDropdown.classList.add('show');
}

function renderMovieDropdown(items) {
    autocompleteDropdown.innerHTML = '';
    
    items.slice(0, 10).forEach(item => {
        const div = document.createElement('div');
        div.className = 'dropdown-item';
        const posterUrl = item.poster_path ? `https://image.tmdb.org/t/p/w92${item.poster_path}` : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
        const year = item.release_date ? item.release_date.substring(0,4) : '????';
        div.innerHTML = `
            <img src="${posterUrl}" alt="cover">
            <div class="text-info">
                <span class="track-name">${item.title}</span>
                <span class="artist-name">${year} | ${item.original_title}</span>
            </div>
        `;
        
        div.addEventListener('click', () => {
            handleMovieGuess(item);
        });
        
        autocompleteDropdown.appendChild(div);
    });
    
    autocompleteDropdown.classList.add('show');
}

// Levenshtein helper
function levenshteinDistance(s1, s2) {
    if(!s1 || !s2) return 99;
    s1 = s1.toLowerCase().replace(/[^a-z0-9]/g, '');
    s2 = s2.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const dp = Array(s2.length + 1).fill(null).map(() => Array(s1.length + 1).fill(null));
    for (let i = 0; i <= s1.length; i += 1) { dp[0][i] = i; }
    for (let j = 0; j <= s2.length; j += 1) { dp[j][0] = j; }
    
    for (let j = 1; j <= s2.length; j += 1) {
        for (let i = 1; i <= s1.length; i += 1) {
            const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
            dp[j][i] = Math.min(
                dp[j][i - 1] + 1, 
                dp[j - 1][i] + 1, 
                dp[j - 1][i - 1] + indicator
            );
        }
    }
    return dp[s2.length][s1.length];
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
    
    const normalizedAnsArtist = currentAnswer.artistName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedGuessArtist = guessedItem.artistName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isCorrectArtist = !isCorrect && (normalizedAnsArtist === normalizedGuessArtist || normalizedAnsArtist.includes(normalizedGuessArtist) || normalizedGuessArtist.includes(normalizedAnsArtist));
    
    if (isCorrect) {
        score += usedHint ? 5 : 10;
        updateScoreUI();
        showFeedback('correct');
    } else if (isCorrectArtist) {
        score += usedHint ? 3 : 5;
        updateScoreUI();
        showFeedback('partial');
    } else {
        score = Math.max(0, score - 5);
        updateScoreUI();
        showFeedback('wrong');
    }
}

function handleMovieGuess(guessedItem) {
    autocompleteDropdown.classList.remove('show');
    
    const isCorrectId = guessedItem.id === currentAnswer.id;
    const tAns = currentAnswer.title;
    const tOrg = currentAnswer.original_title;
    const gAns = guessedItem.title;
    const isCorrectDist = levenshteinDistance(tAns, gAns) <= 2 || levenshteinDistance(tOrg, gAns) <= 2;
    const isCorrect = isCorrectId || isCorrectDist;
    
    if (isCorrect) {
        searchInput.disabled = true;
        skipBtn.disabled = true;
        const points = movieLives === 4 ? 10 : (movieLives === 3 ? 7 : (movieLives === 2 ? 4 : 1));
        score += points;
        updateScoreUI();
        showFeedback('correct');
    } else {
        movieLives--;
        const heartToLose = hearts[movieLives];
        if (heartToLose) heartToLose.classList.add('lost');

        if (movieLives > 0) {
            statusMsg.textContent = `Wrong! ${movieLives} lives left. A hint has been unlocked.`;
            unlockMovieHint(4 - movieLives);
            searchInput.value = '';
            searchInput.focus();
        } else {
            searchInput.disabled = true;
            skipBtn.disabled = true;
            score = Math.max(0, score - 5);
            updateScoreUI();
            showFeedback('wrong');
        }
    }
}

function handleSkip() {
    audioPlayer.pause();
    pulseRing.classList.remove('active');
    autocompleteDropdown.classList.remove('show');
    
    searchInput.disabled = true;
    playBtn.disabled = true;
    skipBtn.disabled = true;
    
    if (currentMode === 'movie') {
        score = Math.max(0, score - 5);
        updateScoreUI();
    }
    
    showFeedback('skip');
}

function showFeedback(type) {
    feedbackModal.classList.add('show');
    
    if (type === 'correct') {
        feedbackPanel.className = 'modal glass-panel correct-panel';
        feedbackTitle.textContent = 'Awesome! That\'s Correct 🎉';
    } else if (type === 'partial') {
        feedbackPanel.className = 'modal glass-panel partial-panel';
        feedbackTitle.textContent = 'Artist Correct! (+5 Points) 👏';
    } else if (type === 'skip') {
        feedbackPanel.className = 'modal glass-panel skip-panel';
        feedbackTitle.textContent = 'Skipped ⏭';
    } else {
        feedbackPanel.className = 'modal glass-panel wrong-panel';
        feedbackTitle.textContent = 'Wrong Answer 🥺';
    }
    
    if (currentMode === 'song') {
        const coverUrl = currentAnswer.artworkUrl100 ? currentAnswer.artworkUrl100.replace('100x100bb', '300x300bb') : currentAnswer.artworkUrl60;
        feedbackCover.src = coverUrl;
        feedbackTrack.textContent = currentAnswer.trackName;
        feedbackArtist.textContent = currentAnswer.artistName;
    } else if (currentMode === 'movie') {
        feedbackCover.src = currentAnswer.posterPath;
        feedbackTrack.textContent = currentAnswer.title;
        feedbackArtist.textContent = currentAnswer.original_title;
    }
    
    if(autoNextTimeout) clearTimeout(autoNextTimeout);
    autoNextTimeout = setTimeout(() => {
        feedbackModal.classList.remove('show');
        loadNextRound();
    }, 3000);
}
