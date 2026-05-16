const playlist = [
    { src: 'music/10percs.mp3', title: '10 Percs', artist: 'Dave Blunts', art: 'music/10percs.jpg' },
    { src: 'music/matthew.mp3', title: "Matthew's House", artist: 'Dave Blunts', art: 'music/matthew.jpg' },
    { src: 'music/violentcrimes.mp3', title: 'Violent Crimes', artist: 'Kanye West', art: 'music/violentcrimes.jpg' },
    { src: 'music/bigger.mp3', title: 'Bigger', artist: 'Dave Blunts', art: 'music/bigger.jpg' },
    { src: 'music/carnival.mp3', title: 'CARNIVAL', artist: '¥$, Kanye West, Ty Dolla $ign', art: 'music/carnival.jpg' },
    { src: 'music/truelove.mp3', title: 'True Love', artist: 'Kanye West, XXXTENTACION', art: 'music/truelove.jpg' },
    { src: 'music/cryinginthekitchen.mp3', title: 'CRYING IN THE KITCHEN', artist: 'Dave Blunts', art: 'music/cryinginthekitchen.jpg' },
    { src: 'music/jaydes.mp3', title: 'jaydes', artist: 'boolymon', art: 'music/jaydes.jpg' },
    { src: 'music/wendigo.mp3', title: 'Wendigo', artist: 'Semetary', art: 'music/wendigo.jpg' },
    { src: 'music/sexcrimes.mp3', title: 'Sex Crimes', artist: 'Dave Blunts', art: 'music/sexcrimes.jpg' },
    { src: 'music/homecoming.mp3', title: 'Homecoming', artist: 'Kanye West', art: 'music/homecoming.jpg' },
    { src: 'music/27.mp3', title: '27', artist: 'jaydes, Riovaz', art: 'music/27.jpg' },
    { src: 'music/vices.mp3', title: 'VICES', artist: 'The Missing Peace, Dave Blunts', art: 'music/vices.jpg' },
    { src: 'music/homerun.mp3', title: 'Home Run (feat. Dave Blunts)', artist: 'BabyTron, Dave Blunts', art: 'music/homerun.jpg' },
    { src: 'music/airmattress.mp3', title: 'Air Mattress', artist: 'Dave Blunts', art: 'music/airmattress.jpg' },
    { src: 'music/bodyhigh.mp3', title: 'BodyHigh', artist: '6cd, jaydes', art: 'music/bodyhigh.jpg' },
    { src: 'music/sedated.mp3', title: 'sedated', artist: 'jaydes', art: 'music/sedated.jpg' },
    { src: 'music/lean.mp3', title: 'I <3 Lean', artist: 'ItsCharlie, Dave Blunts', art: 'music/lean.jpg' },
    { src: 'music/stan.mp3', title: 'stan', artist: 'jaydes', art: 'music/stan.jpg' },
    { src: 'music/thegirlinthecloset.mp3', title: 'The girl in the closet', artist: 'Dave Blunts', art: 'music/thegirlinthecloset.jpg' },
    { src: 'music/bound2.mp3', title: 'Bound 2', artist: 'Kanye West', art: 'music/bound2.jpg' },
    { src: 'music/toybarn.mp3', title: 'TOY BARN', artist: 'Semetary', art: 'music/toybarn.jpg' },
    { src: 'music/blowme.mp3', title: 'Blow Me', artist: 'fakemink', art: 'music/blowme.jpg' },
    { src: 'music/maryson2nd.mp3', title: 'Mary’s On 2nd', artist: 'Dave Blunts', art: 'music/maryson2nd.jpg' },
    { src: 'music/south.mp3', title: 'South', artist: 'jaydes', art: 'music/south.jpg' },
    { src: 'music/solarsunsuccessfulattempttoreturn.mp3', title: "Solar's Unsuccessful Attempt To Return", artist: 'Dave Blunts', art: 'music/solarsunsuccessfulattempttoreturn.jpg' },
    { src: 'music/lowlife.mp3', title: 'lowlife', artist: 'jaydes', art: 'music/lowlife.jpg' },
    { src: 'music/balcony.mp3', title: 'Balcony', artist: 'Dave Blunts', art: 'music/balcony.jpg' },
    { src: 'music/themoreyouknow.mp3', title: 'the more you know', artist: 'jaydes', art: 'music/themoreyouknow.jpg' },
    { src: 'music/backinthedmv.mp3', title: 'Back In The DMV', artist: 'Dave Blunts', art: 'music/backinthedmv.jpg' },
    { src: 'music/parasocial.mp3', title: 'parasocial', artist: 'jaydes', art: 'music/parasocial.jpg' },
    { src: 'music/firstdayoutthehospital.mp3', title: 'First Day Out The Hospital', artist: 'Dave Blunts', art: 'music/firstdayoutthehospital.jpg' },
    { src: 'music/tiredofbeinggroomed.mp3', title: 'tired of being groomed', artist: 'Dave Blunts', art: 'music/tiredofbeinggroomed.jpg' },
    { src: 'music/perfectworld.mp3', title: 'Perfect World', artist: 'Dave Blunts', art: 'music/perfectworld.jpg' },
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
        bgMusic.src = song.src;
        bgMusic.volume = volumeSlider.value / 100;
        bgMusic.play();
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
        if (hasEntered) return;
        hasEntered = true;
        
        introScreen.classList.add('hidden');
        mainContent.classList.add('visible');
        
        playSong(0, true);
        
        setTimeout(() => {
            initParticles();
            initCursorGlow();
            initSpotifyNowPlaying();
            initTopTracks();
        }, 100);
    });
    
    bgMusicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
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
                bgMusic.play();
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
        playSong(0, true);
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
    
    bgMusic.addEventListener('ended', () => {
        playSong(0, true);
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
            const response = await fetch('https://generator.ryuu.lol/api/spotify/now-playing');
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
        const response = await fetch('https://generator.ryuu.lol/api/spotify/top-tracks');
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
