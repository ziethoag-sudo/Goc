const playlist = [    
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504519234871361677/bounce_i_just_wanna_dance_S2DLrhb-078.mp3?ex=6a07483a&is=6a05f6ba&hm=f2d47007c4e1c771494de969ce1d880131a18e08d1d23c861bb369ee9fa7b140&', title: 'bounce (i just wanna dance)', artist: 'фрози', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504519254656155828/F8js0U0T9ZVvMNWagDCtaNtMbDdUlGS5L1-1CsANneQzMIgVfvyxKNGrCHjJz85nKcbTBBb-9DsMEcS2w544-h544-l90-rj.png?ex=6a07483e&is=6a05f6be&hm=b17b0674297976235ec7902574ffd821998a9f57b68edeb3bd950d7810a3112e&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504309791504203806/Stephen_Sanchez_Em_Beihold_-_Until_I_Found_You_Em_Beihold_Version.mp3?ex=6a06852b&is=6a0533ab&hm=3be437a0aa310f63db36a6de5c544660b057700b1dcd6b52677d565aa60355c4&', title: "Until I Found You (Em Beihold Version)", artist: 'Stephen Sanchez · Em Beihold', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504309794440482878/1650603861343_300.png?ex=6a06852b&is=6a0533ab&hm=3c6ccfcb12d02dade40872517dbcdae60c97701f816388704aa99e75e7d2347b&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504521741639221289/SUMMER_j1DnOm0DdQU.mp3?ex=6a074a8f&is=6a05f90f&hm=38f04b6305acadcc4dbdeca17fc8d2eb8615d7a523eac63e6fb1f7ab82f9bc4f&', title: 'おつかれSUMMER', artist: 'Tomoyuki Tanaka Masayuki Kumahara · Tomoyuki Tanaka', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504521765706010675/tAh0b3-dx80iA1gGjvEij78w0xwsVl23-VpftL4lP3ZXghub-GgZkr3OW4Q_d3X792Sxv11o7imPb9asw544-h544-s-l90-rj.png?ex=6a074a95&is=6a05f915&hm=c731816fa7be49982ec1d98cb6126212104d8a18e55a825d092e880430119040&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504522493258498179/Zachz_Winner_springs__maxwell4k_-_discopled.mp3?ex=6a074b43&is=6a05f9c3&hm=0473b6bdc3cc05afe777cc3d6bac79980d12fdbd8eb97038237f984b36f0027c&', title: 'discopled', artist: 'Zachz Winner', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504522519275769927/t-N-VlxYpmtQKp1lCFG0503CdItYlx8mFgUdJHX2VuWYCMqyyRqgnm2t6ZJKXtRkI11UxICMP-EgmnEMw544-h544-l90-rj.png?ex=6a074b49&is=6a05f9c9&hm=36959b517e7c15133b705721c331832ee7d4d28e252a3a27dc2edaa8404097d9&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504305560269623366/OneOfTheGirl.mp3.mp3?ex=6a0729fa&is=6a05d87a&hm=03101d475b30ddf5cc01704e25a1b94794dbd5045082300ad306c019383bd008&', title: 'One Of The Girl', artist: 'The Weekend', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504309162643951747/loi-dich-one-of-the-girls-the-idol-the-weeknd-jennie-lily-rose-depp-2.png?ex=6a072d55&is=6a05dbd5&hm=819ddc24c3c9222bbbbc7acf8ce2ff0f9a5a2f25711dcb030031091db909eb10&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504523363845017731/Feels_fqqcXP1D0Fw.mp3?ex=6a074c12&is=6a05fa92&hm=eb3df95319925e898284cb6676b514c355412ef9f70cca3ccebfb159f32f9658&', title: 'Feels', artist: 'Calvin Harris · Pharrell Williams · Katy Perry · Big Sean', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504523382366933114/VHdOBJElHdTf7hsG9c3jlmG68hB_z-jB0KR-lhCQET0ksmn70QWKo_emVsxsxd1oFMTZVEpdWgSq_cMw544-h544-l90-rj.png?ex=6a074c17&is=6a05fa97&hm=59443ea1811f368b409c338c89a5d76f9e434f944900e603a48391ae1cf22e0d&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504523785796325486/HYBS_-_Tip_Toe_Official_Video.mp3?ex=6a074c77&is=6a05faf7&hm=5bba6002d9721dd58fa5589d453ba8252df679eb2afc2f425083d8c5ada27355&', title: 'Tip Toe', artist: 'HYBS', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504523782021320774/maxresdefault.png?ex=6a074c76&is=6a05faf6&hm=4c4fbf15f09791e2828ef18dab9369e8c9a9c3486482e4bcc3818cd500793952&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504524689630826628/We_Dont_Talk_Anymore_feat._Selena_Gomez_ffqliB42Nh4.mp3?ex=6a074d4e&is=6a05fbce&hm=de006a17f7c28eed7631e24dd4bb5f771f557bfb3c5f3d7e025843a2f7917f7b&', title: 'We Dont Talk Anymore', artist: 'Charlie Puth · Selena Gomez', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504524708576497915/TlXKDSRGrj0ogqmGbzyGvZrsT9T0F6xgV-2-3pelbzRms0cODdb-ndDg6SpFzkHYMb4NMMMW957wmrObfww544-h544-l90-rj.png?ex=6a074d53&is=6a05fbd3&hm=bbc866bd797f4bde35d2972095c190ee83247db7e27b77fc1fda788a4f713a55&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504525136278061056/Eve_-_Underdog.mp3?ex=6a074db9&is=6a05fc39&hm=58defb7e897dec982162d8ecfe4d347367eef0e0efe4f5a94fbe57defda11552&', title: 'Underdog', artist: 'Eve', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504525146806030356/3HmCRBEzEHhEOO_H53X6rg2uBeVmAzitQ-b4oNi-xzqB3s2BIlUSCohbNgvvhTMG6fXWiRg2TmmxZ_Iw544-h544-l90-rj.png?ex=6a074dbb&is=6a05fc3b&hm=48746c4540e9ffe05c3bf6ed63fb1343dcdd184512f871b09d1fcaec16f68025&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504525447071793152/LOVELI_LORI_ovg_-_Love_For_You.mp3?ex=6a074e03&is=6a05fc83&hm=5409e3eb35ddf5671163a71b0fce359c7c06d5e476f829c486ccdecb88e46727&', title: 'Love For You', artist: 'ovg!', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504525460112019567/9GFOIsA2-l8U59GsTsyAfG0ZorAM1fk-hDEGnfvPrAQOnACJLyj0KYIzt2y3rJxqU-poCW00VsamVR35w544-h544-l90-rj.png?ex=6a074e06&is=6a05fc86&hm=2973ffd367ab68e672592b323a59771012e6774ae1cdfe3a375c85e2af74ccdf&' },
];

let hasEntered = false;

document.addEventListener('DOMContentLoaded', () => {
    initIntroScreen();
    preventZoom();
});

function preventZoom() {
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.keyCode === 187 || e.keyCode === 189 || e.keyCode === 61)) {
            e.preventDefault();
            return false;
        }
        if ((e.ctrlKey || e.metaKey) && (e.key === '0' || e.keyCode === 48)) {
            e.preventDefault();
            return false;
        }
    });
    
    document.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            return false;
        }
    }, { passive: false });
}

function initIntroScreen() {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');
    const bgMusicTitle = document.getElementById('bgMusicTitle');
    const bgMusicArtist = document.getElementById('bgMusicArtist');
    const bgMusicArt = document.getElementById('bgMusicArt');
    const bgMusicToggle = document.getElementById('bgMusicToggle');
    const bgMusicIndicator = document.querySelector('.bg-music-indicator');
    const bgProgressFill = document.getElementById('bgProgressFill');
    const bgProgressBar = document.getElementById('bgProgressBar');
    const bgProgressThumb = document.getElementById('bgProgressThumb');
    const bgCurrentTime = document.getElementById('bgCurrentTime');
    const bgTotalTime = document.getElementById('bgTotalTime');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeHigh = volumeBtn.querySelector('.volume-high');
    const volumeMuted = volumeBtn.querySelector('.volume-muted');
    const playIcon = bgMusicToggle.querySelector('.play-icon');
    const pauseIcon = bgMusicToggle.querySelector('.pause-icon');
    
    let currentSongIndex = 0;
    let isDragging = false;
    let lastVolume = 0.2;
    let previousSongIndex = -1;
    let recentlyPlayed = [];
    const maxRecentlyPlayed = 7;
    
    // Audio error handling
    bgMusic.addEventListener('error', (e) => {
        console.error('Audio load error:', e);
        console.error('Error code:', bgMusic.error?.code);
    });
    
    bgMusic.addEventListener('play', () => {
        console.log('Audio playback started');
    });
    
    bgMusic.addEventListener('pause', () => {
        console.log('Audio paused');
    });
    
    function formatTimeSeconds(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    function updateSongUI(song) {
        bgMusicTitle.textContent = song.title;
        bgMusicArtist.textContent = song.artist;
        bgMusicArt.src = song.art;
    }
    
    function updateProgress() {
        if (bgMusic.duration && !isDragging) {
            const percent = (bgMusic.currentTime / bgMusic.duration) * 100;
            bgProgressFill.style.width = percent + '%';
            bgProgressThumb.style.left = percent + '%';
            bgCurrentTime.textContent = formatTimeSeconds(bgMusic.currentTime);
            bgTotalTime.textContent = formatTimeSeconds(bgMusic.duration);
        }
    }
    
    function playSong(index, isRandom = false) {
        console.log('playSong called with index:', index);
        if (isRandom) {
            let randomIndex;
            let attempts = 0;
            const maxAttempts = 50;
            
            do {
                randomIndex = Math.floor(Math.random() * playlist.length);
                attempts++;
            } while (
                (randomIndex === currentSongIndex || recentlyPlayed.includes(randomIndex)) 
                && playlist.length > 1 
                && attempts < maxAttempts
            );
            
            if (currentSongIndex >= 0) {
                previousSongIndex = currentSongIndex;
                recentlyPlayed.push(currentSongIndex);
                if (recentlyPlayed.length > maxRecentlyPlayed) {
                    recentlyPlayed.shift();
                }
            }
            currentSongIndex = randomIndex;
        } else {
            if (currentSongIndex >= 0) {
                previousSongIndex = currentSongIndex;
                recentlyPlayed.push(currentSongIndex);
                if (recentlyPlayed.length > maxRecentlyPlayed) {
                    recentlyPlayed.shift();
                }
            }
            currentSongIndex = index;
            if (currentSongIndex < 0) currentSongIndex = playlist.length - 1;
            if (currentSongIndex >= playlist.length) currentSongIndex = 0;
        }
        
        const song = playlist[currentSongIndex];
        console.log('Playing song:', song.title, 'URL:', song.src);
        bgMusic.src = song.src;
        bgMusic.volume = volumeSlider.value / 100;
        bgMusic.play().then(() => {
            console.log('Audio play succeeded');
        }).catch(error => {
            console.error('Playback error:', error);
        });
        updateSongUI(song);
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        bgMusicIndicator.style.display = 'flex';
    }
    
    function seekTo(e) {
        if (!bgMusic.duration || isNaN(bgMusic.duration)) return;
        const rect = bgProgressBar.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const newTime = percent * bgMusic.duration;
        if (!isNaN(newTime)) {
            bgMusic.currentTime = newTime;
            bgProgressFill.style.width = (percent * 100) + '%';
            bgProgressThumb.style.left = (percent * 100) + '%';
            bgCurrentTime.textContent = formatTimeSeconds(newTime);
        }
    }
    
    introScreen.addEventListener('click', () => {
        console.log('Intro screen clicked!');
        if (hasEntered) return;
        hasEntered = true;
        
        introScreen.classList.add('hidden');
        mainContent.classList.add('visible');
        
        console.log('Calling playSong(0, false)');
        playSong(0, false);
        
        setTimeout(() => {
            initParticles();
            initCursorGlow();
            initSpotifyNowPlaying();
            initTopTracks();
        }, 100);
    });
    
    bgMusicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(error => {
                console.error('Playback error:', error);
            });
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            bgMusicIndicator.style.display = 'flex';
        } else {
            bgMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            bgMusicIndicator.style.display = 'none';
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (bgMusic.currentTime > 3) {
            bgMusic.currentTime = 0;
        } else {
            if (previousSongIndex >= 0) {
                const temp = currentSongIndex;
                currentSongIndex = previousSongIndex;
                previousSongIndex = temp;
                const song = playlist[currentSongIndex];
                bgMusic.src = song.src;
                bgMusic.volume = volumeSlider.value / 100;
                bgMusic.play().catch(error => {
                    console.error('Playback error:', error);
                });
                updateSongUI(song);
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
                bgMusicIndicator.style.display = 'flex';
            } else {
                playSong(currentSongIndex - 1);
            }
        }
    });
    
    nextBtn.addEventListener('click', () => {
        playSong(currentSongIndex + 1, false);
    });
    
    bgProgressBar.addEventListener('click', seekTo);
    
    bgProgressBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        seekTo(e);
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            seekTo(e);
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    bgMusic.addEventListener('timeupdate', updateProgress);
    bgMusic.addEventListener('loadedmetadata', updateProgress);

    bgMusic.addEventListener('error', () => {
        if (!bgMusic.src.includes('soundhelix.com')) {
            bgMusic.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
            bgMusic.play().catch(() => {
                // playback blocked or fallback failed
            });
        }
    });
    
    bgMusic.addEventListener('ended', () => {
        playSong(currentSongIndex + 1, false);
    });
    
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        bgMusic.volume = volume;
        lastVolume = volume > 0 ? volume : lastVolume;
        updateVolumeIcon(volume);
    });
    
    volumeBtn.addEventListener('click', () => {
        if (bgMusic.volume > 0) {
            lastVolume = bgMusic.volume;
            bgMusic.volume = 0;
            volumeSlider.value = 0;
            updateVolumeIcon(0);
        } else {
            bgMusic.volume = lastVolume;
            volumeSlider.value = lastVolume * 100;
            updateVolumeIcon(lastVolume);
        }
    });
    
    function updateVolumeIcon(volume) {
        if (volume === 0) {
            volumeHigh.style.display = 'none';
            volumeMuted.style.display = 'block';
        } else {
            volumeHigh.style.display = 'block';
            volumeMuted.style.display = 'none';
        }
    }
}

function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;
    
    const zoom = 1.2;
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / zoom;
        const y = e.clientY / zoom;
        glow.style.left = x + 'px';
        glow.style.top = y + 'px';
        glow.style.opacity = '0.3';
    });
    
    document.body.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
}

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

async function initSpotifyNowPlaying() {
    const nowPlayingSection = document.getElementById('nowPlaying');
    const albumArt = document.getElementById('albumArt');
    const trackName = document.querySelector('.now-playing-track');
    const artistName = document.getElementById('artistName');
    const progressFill = document.getElementById('progressFill');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const trackLink = document.getElementById('trackLink');
    const nowPlayingContent = document.querySelector('.now-playing-content');
    const listeningIndicator = document.querySelector('.listening-indicator');
    
    let currentProgress = 0;
    let duration = 0;
    let isPlaying = false;
    let lastFetchTime = 0;
    let progressInterval = null;
    
    function updateProgressUI() {
        if (!isPlaying || duration === 0) return;
        
        const elapsed = Date.now() - lastFetchTime;
        const estimatedProgress = Math.min(currentProgress + elapsed, duration);
        
        const percent = (estimatedProgress / duration) * 100;
        progressFill.style.width = percent + '%';
        currentTimeEl.textContent = formatTime(estimatedProgress);
    }
    
    function startProgressAnimation() {
        if (progressInterval) clearInterval(progressInterval);
        progressInterval = setInterval(updateProgressUI, 1000);
    }
    
    async function fetchNowPlaying() {
        try {
            const response = await fetch('');
            const data = await response.json();
            
            if (data.playing && data.track) {
                nowPlayingSection.style.display = 'block';
                nowPlayingContent.style.display = 'flex';
                listeningIndicator.style.display = 'flex';
                
                albumArt.src = data.track.album_art;
                trackName.textContent = data.track.name;
                artistName.textContent = data.track.artists.join(', ');
                trackLink.href = data.track.spotify_url;
                totalTimeEl.textContent = formatTime(data.track.duration_ms);
                
                currentProgress = data.track.progress_ms;
                duration = data.track.duration_ms;
                isPlaying = true;
                lastFetchTime = Date.now();
                
                updateProgressUI();
                startProgressAnimation();
            } else {
                isPlaying = false;
                if (progressInterval) clearInterval(progressInterval);
                nowPlayingSection.style.display = 'none';
            }
        } catch (error) {
            isPlaying = false;
            if (progressInterval) clearInterval(progressInterval);
            nowPlayingSection.style.display = 'none';
        }
    }
    
    fetchNowPlaying();
    setInterval(fetchNowPlaying, 15000);
}

async function initTopTracks() {
    const spotifyTracks = document.getElementById('spotifyTracks');
    const skeletons = ['skeleton1', 'skeleton2', 'skeleton3', 'skeleton4', 'skeleton5'];
    
    try {
        const response = await fetch('https://generator.ryuu.lol/api/spotify/top-track');
        const data = await response.json();
        
        if (data.tracks && data.tracks.length > 0) {
            data.tracks.slice(0, 5).forEach((track, index) => {
                const trackId = track.spotify_url.split('/track/')[1]?.split('?')[0];
                if (!trackId) return;
                
                const skeleton = document.getElementById(skeletons[index]);
                if (skeleton) skeleton.classList.add('hidden');
                
                const iframe = document.createElement('iframe');
                iframe.style.borderRadius = '12px';
                iframe.src = `https://open.spotify.com/embed/track/${trackId}?theme=0`;
                iframe.width = '100%';
                iframe.height = '80';
                iframe.frameBorder = '0';
                iframe.allowFullscreen = true;
                iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
                iframe.loading = 'lazy';
                iframe.className = 'loaded';
                
                iframe.addEventListener('load', () => {
                    iframe.style.opacity = '1';
                });
                
                spotifyTracks.appendChild(iframe);
            });
        } else {
            skeletons.forEach(id => {
                const skeleton = document.getElementById(id);
                if (skeleton) skeleton.classList.add('hidden');
            });
        }
    } catch (error) {
        console.error('Failed to load top tracks:', error);
        skeletons.forEach(id => {
            const skeleton = document.getElementById(id);
            if (skeleton) skeleton.classList.add('hidden');
        });
    }
}

