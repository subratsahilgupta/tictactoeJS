```markdown
# 🎮 Tic Tac Toe

A polished, interactive **Tic Tac Toe** web game built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Play head-to-head in your browser—no installations or dependencies required.

---

## ✨ Features

- **Two-Player Mode:** Alternate turns between X and O.
- **Automatic Win Detection:** Instantly highlights the winner and displays a congratulatory message.
- **Draw Detection:** Recognizes ties and notifies players.
- **Interactive UI:** Clickable grid, visual turn indicators, and disabled boxes after selection.
- **Game Controls:** 
   - **Reset:** Clear the board and continue the current session.
   - **New Game:** Start fresh after a win or tie.
- **Responsive Design:** Optimized for desktop and mobile browsers.
- **Accessible:** Keyboard navigation and ARIA labels for improved accessibility.

---

## 📂 Project Structure

```
tic-tac-toe/
├── index.html       # Main HTML file
├── style.css        # Stylesheet for layout and design
├── script.js        # Game logic and interactivity
└── assets/
      └── Screenshot.png  # Game screenshot
```

---

## 🖼️ Preview

![Tic Tac Toe Screenshot](./assets/Screenshot.png)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-org-or-username>/tic-tac-toe.git
```

### 2. Open the Game

Navigate to the project directory and open `index.html` in your preferred browser:

```bash
cd tic-tac-toe
open index.html
```
Or double-click `index.html` in your file explorer.

---

## 🕹️ How to Play

1. The game board is a 3x3 grid.
2. Players take turns clicking empty cells to place their symbol (X or O).
3. The first player to align three symbols horizontally, vertically, or diagonally wins.
4. If all cells are filled without a winner, the game ends in a tie.
5. Use the **Reset** button to clear the board mid-game, or **New Game** to restart after a win or tie.

---

## 🧩 Game Logic Overview

- **Turn Management:** Alternates between X and O after each valid move.
- **Win Checking:** Evaluates all possible winning combinations after every turn.
- **Draw Checking:** Detects when all cells are filled with no winner.
- **UI Updates:** Disables selected cells, displays messages, and highlights winning patterns.
- **Game Controls:** Reset and New Game buttons manage game state and UI.

---

## 🛠️ Built With

- **HTML5** – Semantic markup for structure.
- **CSS3** – Responsive, modern styling.
- **Vanilla JavaScript (ES6)** – Game mechanics and DOM manipulation.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests to improve the game.

---

## 📬 Feedback

For suggestions or bug reports, please open an issue in the repository.

---
```