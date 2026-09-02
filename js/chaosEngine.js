export class ChaosEngine {
    constructor() {
        this.chaosContainer = document.getElementById('chaos-container');
        this.cursorTrailContainer = document.getElementById('cursor-trail-container');
        this.intensity = 0;
        
        // Track cursor
        this.mouseX = window.innerWidth / 2;
        this.mouseY = window.innerHeight / 2;
        this.lastMouseX = this.mouseX;
        this.lastMouseY = this.mouseY;
        this.lastMoveTime = Date.now();

        this.initCursorTracking();
    }

    initCursorTracking() {
        const updateCursor = (x, y) => {
            this.mouseX = x;
            this.mouseY = y;
            this.spawnCursorTrail(x, y);
            this.lastMoveTime = Date.now();
        };

        window.addEventListener('mousemove', (e) => {
            updateCursor(e.clientX, e.clientY);
            this.checkSpeed(e.clientX, e.clientY);
        });

        window.addEventListener('touchmove', (e) => {
            updateCursor(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });

        // Idle check
        setInterval(() => {
            if (Date.now() - this.lastMoveTime > 3000) {
                this.idleTaunt();
            }
        }, 1000);
    }

    checkSpeed(x, y) {
        const dx = x - this.lastMouseX;
        const dy = y - this.lastMouseY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        if (dist > 100) {
            this.rapidMoveTaunt();
        }
        
        this.lastMouseX = x;
        this.lastMouseY = y;
    }

    idleTaunt() {
        if (Math.random() > 0.8 && this.intensity > 0) {
            document.getElementById('roast-text').innerText = "Why did you stop? We both know you're going to click again.";
            this.lastMoveTime = Date.now(); // Reset to avoid spam
        }
    }

    rapidMoveTaunt() {
        if (Math.random() > 0.9) {
            document.getElementById('roast-text').innerText = "Bro is trying to escape 67 💀";
        }
    }

    spawnCursorTrail(x, y) {
        // Limit trail spawning based on intensity (max 100 elements)
        if (this.cursorTrailContainer.childElementCount > 50) {
            this.cursorTrailContainer.removeChild(this.cursorTrailContainer.firstElementChild);
        }

        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.innerText = '67';
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;

        this.cursorTrailContainer.appendChild(trail);

        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 1000);
    }

    increaseChaos(clicks) {
        this.intensity = clicks;
        
        if (clicks > 5) {
            document.body.classList.add('shake');
            setTimeout(() => document.body.classList.remove('shake'), 500);
        }

        if (clicks > 20) {
            if (!document.body.classList.contains('shake-hard')) {
                // document.body.classList.add('shake-hard');
            }
        }

        // Spawn chaotic background 67s
        const spawnCount = Math.min(clicks, 20);
        for(let i=0; i < spawnCount; i++) {
            this.spawnFloating67();
        }
    }

    spawnFloating67() {
        if (this.chaosContainer.childElementCount > 100) return; // Prevent lag

        const el = document.createElement('div');
        el.classList.add('floating-67');
        el.innerText = '67';

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        
        // Random destination
        const tx = (Math.random() - 0.5) * 500;
        const ty = (Math.random() - 0.5) * 500;
        const rot = (Math.random() - 0.5) * 720;

        el.style.left = `${startX}px`;
        el.style.top = `${startY}px`;
        el.style.setProperty('--tx', `${tx}px`);
        el.style.setProperty('--ty', `${ty}px`);
        el.style.setProperty('--rot', `${rot}deg`);
        
        const duration = 2 + Math.random() * 3;
        el.style.animationDuration = `${duration}s`;
        
        // Random size based on intensity
        const scale = 1 + (Math.random() * (this.intensity / 10));
        el.style.transform = `scale(${scale})`;

        this.chaosContainer.appendChild(el);

        setTimeout(() => {
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }, duration * 1000);
    }

    triggerConfetti() {
        for(let i=0; i<67; i++) {
            this.spawnFloating67();
        }
    }
}
