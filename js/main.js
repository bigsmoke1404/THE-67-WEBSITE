import { RoastEngine } from './roastEngine.js';
import { ChaosEngine } from './chaosEngine.js';
import { StatsEngine } from './stats.js';
import { Generator } from './generator.js';
import { EasterEggs } from './easterEggs.js';

class Main {
    constructor() {
        this.clickCount = 0;
        this.startTime = Date.now();
        
        this.roastEngine = new RoastEngine();
        this.chaosEngine = new ChaosEngine();
        this.statsEngine = new StatsEngine();
        this.generator = new Generator();
        this.easterEggs = new EasterEggs(this.chaosEngine);

        this.init();
    }

    init() {
        // Main button listener
        const mainBtn = document.getElementById('main-btn');
        if (mainBtn) {
            mainBtn.addEventListener('click', (e) => this.handleMainClick(e));
        }

        // Global click listener for general chaos
        window.addEventListener('click', (e) => {
            if (e.target.id !== 'main-btn' && e.target.id !== 'generate-btn' && e.target.id !== 'escape-btn') {
                if (Math.random() > 0.8) {
                    this.chaosEngine.spawnFloating67();
                }
            }
        });

        // Periodic random roasts
        setInterval(() => {
            if (this.clickCount > 2 && Math.random() > 0.7) {
                this.roastEngine.setRoast(this.roastEngine.getRandomRoast());
            }
        }, 5000);

        // Modal logic
        const escapeBtn = document.getElementById('escape-btn');
        if (escapeBtn) {
            escapeBtn.addEventListener('click', () => {
                alert("67.");
                this.hideModal();
                this.chaosEngine.increaseChaos(67);
            });
        }
    }

    handleMainClick(e) {
        this.clickCount++;
        this.statsEngine.updateClicks(this.clickCount);
        this.easterEggs.checkClickAchievement(this.clickCount);
        
        // Visual escalation
        this.chaosEngine.increaseChaos(this.clickCount);
        this.chaosEngine.spawnCursorTrail(e.clientX, e.clientY);

        // Roast
        this.roastEngine.setRoast(this.roastEngine.getClickRoast(this.clickCount));

        // Randomly trigger final roast after enough interaction
        if (this.clickCount > 15 && Math.random() > 0.9) {
            this.showFinalRoast();
        }
    }

    showFinalRoast() {
        const modal = document.getElementById('final-modal');
        const roastText = document.getElementById('final-personalized-roast');
        
        const timeSpent = Math.floor((Date.now() - this.startTime) / 1000);
        
        roastText.innerText = `You spent ${timeSpent} seconds interacting with a website that does absolutely nothing except show 67. You clicked ${this.clickCount} times.`;
        
        modal.classList.remove('hidden');
    }

    hideModal() {
        document.getElementById('final-modal').classList.add('hidden');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    new Main();
});
