export class EasterEggs {
    constructor(chaosEngine) {
        this.chaosEngine = chaosEngine;
        this.initListeners();
    }

    initListeners() {
        // Right click
        window.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.setRoast("Nice try. 67 already owns this website.");
            this.chaosEngine.spawnFloating67();
        });

        // Keyboard presses
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.setRoast("Escape detected.");
                setTimeout(() => this.setRoast("67"), 1000);
                this.chaosEngine.increaseChaos(20);
            } else {
                this.setRoast("Keyboard detected. 67 approves.");
            }
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.setRoast("67 pixels should be enough.");
        });

        // Hover over logo
        const logo = document.getElementById('logo-trigger');
        if (logo) {
            logo.addEventListener('mouseenter', () => {
                this.setRoast("Yes. It's still 67.");
            });
        }
    }

    setRoast(text) {
        const roastEl = document.getElementById('roast-text');
        if (roastEl) {
            roastEl.innerText = text;
        }
    }

    checkClickAchievement(clicks) {
        if (clicks === 67) {
            alert("ACHIEVEMENT UNLOCKED\nTRUE 67 ENJOYER 🏆");
            this.chaosEngine.triggerConfetti();
        }
    }
}
