const traits = [
    "emotionally available",
    "attractive",
    "cooked",
    "delusional",
    "unemployed",
    "mysterious",
    "sigma",
    "mentally stable",
    "NPC",
    "likely to get played",
    "chronically online",
    "built different",
    "crying inside",
    "aware",
    "lost in the sauce",
    "financially ruined",
    "down bad"
];

export class Generator {
    constructor() {
        this.btn = document.getElementById('generate-btn');
        this.container = document.getElementById('generator-results');
        
        if (this.btn) {
            this.btn.addEventListener('click', () => this.generate());
        }
    }

    generate() {
        // Clear previous
        this.container.innerHTML = '';
        
        const numToGenerate = Math.floor(Math.random() * 3) + 3; // 3 to 5
        const shuffled = [...traits].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, numToGenerate);
        
        selected.forEach((trait, index) => {
            setTimeout(() => {
                const el = document.createElement('div');
                el.classList.add('gen-result');
                el.innerText = `67% ${trait}`;
                this.container.appendChild(el);
            }, index * 200);
        });

        // Add 67s to the button text randomly
        if (Math.random() > 0.5) {
            this.btn.innerText = "GENERATE 67";
        }
    }
}
