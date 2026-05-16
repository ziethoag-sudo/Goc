const playlist = [    
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504519234871361677/bounce_i_just_wanna_dance_S2DLrhb-078.mp3?ex=6a07483a&is=6a05f6ba&hm=f2d47007c4e1c771494de969ce1d880131a18e08d1d23c861bb369ee9fa7b140&', title: 'bounce (i just wanna dance)', artist: 'фрози', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504519254656155828/F8js0U0T9ZVvMNWagDCtaNtMbDdUlGS5L1-1CsANneQzMIgVfvyxKNGrCHjJz85nKcbTBBb-9DsMEcS2w544-h544-l90-rj.png?ex=6a07483e&is=6a05f6be&hm=b17b0674297976235ec7902574ffd821998a9f57b68edeb3bd950d7810a3112e&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504309791504203806/Stephen_Sanchez_Em_Beihold_-_Until_I_Found_You_Em_Beihold_Version.mp3?ex=6a06852b&is=6a0533ab&hm=3be437a0aa310f63db36a6de5c544660b057700b1dcd6b52677d565aa60355c4&', title: "Until I Found You (Em Beihold Version)", artist: 'Stephen Sanchez · Em Beihold', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504309794440482878/1650603861343_300.png?ex=6a06852b&is=6a0533ab&hm=3c6ccfcb12d02dade40872517dbcdae60c97701f816388704aa99e75e7d2347b&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504521741639221289/SUMMER_j1DnOm0DdQU.mp3?ex=6a074a8f&is=6a05f90f&hm=38f04b6305acadcc4dbdeca17fc8d2eb8615d7a523eac63e6fb1f7ab82f9bc4f&', title: 'おつかれSUMMER', artist: 'Tomoyuki Tanaka Masayuki Kumahara · Tomoyuki Tanaka', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504521765706010675/tAh0b3-dx80iA1gGjvEij78w0xwsVl23-VpftL4lP3ZXghub-GgZkr3OW4Q_d3X792Sxv11o7imPb9asw544-h544-s-l90-rj.png?ex=6a074a95&is=6a05f915&hm=c731816fa7be49982ec1d98cb6126212104d8a18e55a825d092e880430119040&' },
    { src: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504522493258498179/Zachz_Winner_springs__maxwell4k_-_discopled.mp3?ex=6a074b43&is=6a05f9c3&hm=0473b6bdc3cc05afe777cc3d6bac79980d12fdbd8eb97038237f984b36f0027c&', title: 'discopled', artist: 'Zachz Winner', art: 'https://cdn.discordapp.com/attachments/1415992416414203930/1504522519275769927/t-N-VlxYpmtQKp1lCFG0503CdItYlx8mFgUdJHX2VuWYCMqyyRqgnm2t6ZJKXtRkI11UxICMP-EgmnEMw544-h544-l90-rj.png?ex=6a074b49&is=6a05f9c9&hm=36959b517e7c15133b705721c331832ee7d4d28e252a3a27dc2edaa8404097d9&' },
]
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
            updateDiscordPresence(true);
        }).catch(error => {
            console.error('Playback error:', error);
            updateDiscordPresence(true);
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
            updateDiscordPresence(true);
        } else {
            bgMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            bgMusicIndicator.style.display = 'none';
            updateDiscordPresence(false);
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
    bgMusic.addEventListener('timeupdate', () => {
        updateDiscordProgress();
    });

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
    
    function updateDiscordProgress() {
        const progressFill = document.getElementById('discordProgressFill');
        const currentTimeEl = document.getElementById('discordCurrentTime');
        const totalTimeEl = document.getElementById('discordTotalTime');
        
        if (!progressFill || bgMusic.duration === 0) return;
        
        const percent = (bgMusic.currentTime / bgMusic.duration) * 100;
        progressFill.style.width = percent + '%';
        
        if (currentTimeEl) currentTimeEl.textContent = formatTimeSeconds(bgMusic.currentTime);
        if (totalTimeEl) totalTimeEl.textContent = formatTimeSeconds(bgMusic.duration);
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

function updateDiscordPresence(isPlaying) {
    const trackName = document.getElementById('discordTrackName');
    const trackArtist = document.getElementById('discordTrackArtist');
    const albumArt = document.getElementById('discordAlbumArt');
    const currentTitle = document.getElementById('bgMusicTitle')?.textContent || 'Loading...';
    const currentArtist = document.getElementById('bgMusicArtist')?.textContent || 'Unknown';
    const currentArt = document.getElementById('bgMusicArt')?.src || '';

    if (trackName) trackName.textContent = currentTitle;
    if (trackArtist) trackArtist.textContent = currentArtist;
    if (albumArt && currentArt) albumArt.src = currentArt;
}

