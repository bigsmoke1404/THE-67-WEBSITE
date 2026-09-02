const roasts = [
    "You opened a website dedicated to 67. Think about your life choices.",
    "Bro has been staring at 67 for way too long.",
    "You could be doing literally anything right now.",
    "67 has more presence in your life than your friends.",
    "Coincidence? Absolutely not.",
    "Your dedication to nonsense is impressive.",
    "You came here voluntarily. That's the embarrassing part.",
    "67 is living rent-free in your head.",
    "You tried clicking away. 67 noticed.",
    "Bro really thought the number would change.",
    "Congratulations. You discovered absolutely nothing.",
    "Imagine explaining this to your ancestors.",
    "67 67 67 67 67",
    "Are you expecting an award?",
    "Every click removes a brain cell.",
    "The simulation is testing you, and you're failing.",
    "This is peak internet. You've peaked.",
    "Bro is getting styled on by a two-digit number.",
    "You have successfully wasted another minute of your life."
];

const clickRoasts = [
    "67.",
    "Bro really clicked it twice.",
    "67 told you to stop.",
    "At this point you're doing this to yourself.",
    "YOUR CLICK COUNT IS NOW 67."
];

export class RoastEngine {
    constructor() {
        this.roastElement = document.getElementById('roast-text');
    }

    getRandomRoast() {
        const index = Math.floor(Math.random() * roasts.length);
        return roasts[index];
    }

    getClickRoast(clickCount) {
        if (clickCount <= clickRoasts.length) {
            return clickRoasts[clickCount - 1];
        }
        return `You clicked ${clickCount} times. Still just 67.`;
    }

    setRoast(text) {
        this.roastElement.innerText = text;
        this.roastElement.classList.remove('glitch');
        void this.roastElement.offsetWidth; // trigger reflow
        this.roastElement.classList.add('glitch');
        this.roastElement.setAttribute('data-text', text);
    }
}
