# THE 67 WEBSITE

**"There is no escape from 67."**

A chaotic, highly interactive meme website entirely dedicated to the number 67. The more you interact, the more chaotic it gets.

## 💀 Features

- **The 67 Effect**: A trailing cursor effect and floating elements that multiply as you click.
- **Roast Engine**: The website constantly roasts you based on how long you stay idle, how fast you move your cursor, and how many times you click.
- **Fake 67 Analytics**: A dashboard that tracks your stats (like "Brain Cells Remaining" and "Dignity") and randomly glitches them back to 67.
- **67 Generator**: Generates randomized 67% traits (e.g., "67% chronically online").
- **Escalating Chaos**: Screen shakes, glitch text, and neon CRT aesthetics.
- **The Final Analysis**: A personalized summary of your wasted time if you manage to stick around long enough.

## 🚀 How to Run Locally

Since this project uses Vanilla HTML, CSS, and JavaScript (with ES modules), there is no build step required. 

However, because it uses ES Modules (`type="module"`), you cannot simply open it via the `file://` protocol in some browsers due to CORS restrictions.

To run it, use a local web server. For example:

### Using VS Code
1. Install the **Live Server** extension.
2. Right-click on `index.html` and select **Open with Live Server**.

### Using Python
```bash
# Python 3
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Using Node.js
```bash
npx serve .
```

## 🛠️ Built With
- HTML5
- Vanilla CSS3 (Custom animations, CRT effects, responsive design)
- Vanilla JavaScript (ES6 Modules)

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
