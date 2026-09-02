export class StatsEngine {
    constructor() {
        this.elements = {
            exposure: document.getElementById('stat-exposure'),
            braincells: document.getElementById('stat-braincells'),
            escape: document.getElementById('stat-escape'),
            addiction: document.getElementById('stat-addiction'),
            dignity: document.getElementById('stat-dignity'),
            reason: document.getElementById('stat-reason'),
            time: document.getElementById('stat-time'),
            clicks: document.getElementById('stat-clicks')
        };
        this.statsRoast = document.getElementById('stats-roast');
        
        this.timeWasted = 0;
        this.realClicks = 0;

        this.startTimers();
    }

    startTimers() {
        setInterval(() => {
            this.timeWasted++;
            this.updateStat('time', `${this.timeWasted}s`);
            
            // Randomly force values to 67
            if (Math.random() > 0.7) {
                this.force67();
            }
        }, 1000);
    }

    updateClicks(clicks) {
        this.realClicks = clicks;
        this.updateStat('clicks', clicks);
        
        // Randomly force back to 67 if it gets too high
        if (clicks > 10 && Math.random() > 0.5) {
            setTimeout(() => this.force67('clicks'), 500);
        }
    }

    updateStat(key, value) {
        if (!this.elements[key]) return;
        this.elements[key].innerText = value;
        this.elements[key].classList.remove('changed');
    }

    force67(specificKey = null) {
        const keys = Object.keys(this.elements);
        const targetKey = specificKey || keys[Math.floor(Math.random() * keys.length)];
        
        const el = this.elements[targetKey];
        if (!el) return;

        let val = "67";
        if (el.innerText.includes('%')) val = "67%";
        if (targetKey === 'time') val = "67s";
        if (targetKey === 'reason') val = "67";

        if (el.innerText !== val) {
            el.innerText = val;
            el.classList.add('changed');
            
            if (Math.random() > 0.7) {
                this.statsRoast.innerText = "We fixed it.";
                setTimeout(() => {
                    if (this.statsRoast.innerText === "We fixed it.") {
                        this.statsRoast.innerText = "";
                    }
                }, 2000);
            }
        }
    }
}
