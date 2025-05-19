# Music Recommender Web App

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Target Browsers](#target-browsers)  
3. [Developer Manual](#developer-manual)  
   1. [Quick Start](#quick-start)  
   2. [Local Development](#local-development)  
   3. [Running Tests](#running-tests)  
   4. [API Reference](#api-reference)  
   5. [Known Bugs](#known-bugs)  
   6. [Road‑map / Future Work](#road-map--future-work)

---

## Project Overview
| Item | Details |
|------|---------|
| **Title** | Music Recommender |
| **Description** |This is a web page created for INST377. It allows the user to search a song and/or artist and receive recommendations on similar songs/artists. The user can then add these recommendations to a database and access their database via the "User Information" tab on the home page.|
| **Live Demo (Vercel)** | `https://final-project-nine-sand.vercel.app` |
| **Developer Manual Link** | See the [Developer Manual](#developer-manual) section below. |

---

## Target Browsers
- Desktop  
  - Chrome (latest)  
  - Firefox (latest)  
  - Edge (latest)  
  - Safari 17+  
- Mobile  
  - iOS Safari 15+  
  - Android Chrome 110+

The site is fully responsive; when the screen shrinks the items adapt and stack instead of sitting side-by-side.

---

## Developer Manual

### Intended Audience  
Future developers familiar with web technologies (HTML, CSS, JavaScript, Node.js) but not with this specific code base.

---

### Quick Start

| Task | Command |
|------|---------|
| Clone repo | `git clone https://github.com/YOUR‑ORG/final-project.git` |
| Enter directory  | in the terminal, type `cd final-project` |
| Install dependencies | in the terminal type `npm install` |

Environment variable: create a `.env` file (or set an environment variable) with  
`SUPABASE_ANON_KEY=<your‑anon‑key>`  
(Vercel already stores this under Project → Settings → Environment Variables.)

---

### Local Development
These settings are for running the program locally instead of on Vercel, the api folder can be ignored and instead node dependencies must be installed for the express backend.

| Purpose | Command |
|---------|---------|
| Start Express backend (server.js) | in the terminal type `npm install` then `npm start` |
| Serve frontend (simple) | `python3 -m http.server` then open `http://localhost:8000/index.html` |
| Serve frontend (VS Code) | Install Live Server extension → Right‑click `index.html` → “Open with Live Server” |

While localhost is running, the front‑end JavaScript detects `localhost` and calls the Express API at `http://localhost:3000/api/…`.  
When deployed on Vercel it automatically switches to `/api/…` (serverless functions).

---

### Running Tests
No automated tests at this time.  
Manual test checklist:

1. Search for “Beat It” by “Michael Jackson” and click Save Song.  
2. Visit User Info page and confirm the song appears and the chart updates.  
3. Search for an unknown song and verify the fallback artist list appears.

---

### API Reference

| Method | Route | Purpose | Body Example |
|--------|-------|---------|--------------|
| GET | `/api/saved-artist` | Retrieve all saved artists | — |
| GET | `/api/saved-song` | Retrieve all saved songs | — |
| POST | `/api/save-artist` | Insert new artist into Supabase | `{ "name": "Queen" }` |
| POST | `/api/save-song` | Insert new song into Supabase | `{ "title": "Thriller", "artist": "Michael Jackson" }` |

---

### Known Bugs
| ID | Description | Work‑around |
|----|-------------|-------------|
| KB‑1 | Duplicate saves are allowed; no uniqueness constraint. | None |
| KB‑2 | No authentication layer; any user with the link can add or view data. | Implement Supabase Auth and row‑level security |

---

### Road‑map / Future Work
1. Delete or edit saved items  
2. User authentication (Supabase Auth and RLS)  
3. Genre tags by calling an additional API  
4. Export saved list as CSV or Spotify playlist  
5. Add dark‑mode toggle with CSS variables

---

### File / Directory Structure

```text
final-project/
├─ api/
│  ├─ save-song.js
│  ├─ save-artist.js
│  ├─ saved-song.js
│  └─ saved-artist.js
├─ index.html
├─ about.html
├─ recommend.html
├─ user.html
├─ styles.css
├─ server.js
├─ package.json
└─ README.md
