# Math31N Sample Dashboard
## 📊 Player Profile Dashboard

This project displays a player-style profile dashboard using HTML, Bootstrap, and Chart.js. It visualizes:

* **User Info** (name, date hired)
* **Radar Chart** for performance characteristics
* **Weekly Activity** comparison
* **Function Usage** stats

All charts are rendered from a local `data.json` file using JavaScript.

---

## 📁 Project Structure

```
player-dashboard/
├── index.html
├── data.json
└── README.md
```

---

## 🚀 Getting Started

### 1. **Install Node.js & npm**

Make sure you have [Node.js](https://nodejs.org/) installed. You can check by running:

```bash
node -v
npm -v
```

### 2. **Install `live-server` Globally**

This app uses [`live-server`](https://www.npmjs.com/package/live-server) to serve the files and enable auto-reload.

```bash
npm install -g live-server
```

### 3. **Run the App**

In the folder where `index.html` and `data.json` are located:

```bash
live-server
```

This will open the dashboard in your default browser. Any changes to the files will automatically refresh the browser.

---

## 🧾 Sample `data.json` Format

Make sure you include a `data.json` file in the same folder. Example:

```json
{
  "users": [
    {
      "id": "U001",
      "name": "Jane Doe",
      "dateHired": "2024-01-15",
      "characteristics": {
        "Punctuality": 4,
        "Communication": 5,
        "Technical Knowledge": 4,
        "Teamwork": 3,
        "Creativity": 4
      }
    }
  ],
  "activity": [
    { "userId": "U001", "week": "this", "day": "Monday", "count": 3 },
    { "userId": "U001", "week": "last", "day": "Monday", "count": 5 }
    // Add entries for other days and weeks
  ],
  "functionUsage": [
    { "userId": "U001", "function": "Login", "successCount": 50 },
    { "userId": "U001", "function": "Upload", "successCount": 45 }
    // Add more functions as needed
  ]
}
```

---

## 🛠 Dependencies

* [Bootstrap 5](https://getbootstrap.com/)
* [Chart.js](https://www.chartjs.org/)
* [live-server](https://www.npmjs.com/package/live-server)

---

## 📌 Notes

* Ensure the browser allows `fetch()` from local files, or run a local server as described.
* The `selectedUserId` is hardcoded as `"U001"` in the script. Update as needed.

---

## 📄 License

MIT – Free to use, modify, and distribute.

---

Let me know if you want this turned into a downloadable file or integrated with a `package.json`.