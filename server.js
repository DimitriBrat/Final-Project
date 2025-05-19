const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Supabase
const supabaseUrl = 'https://lwwlxlwrmptmlomfhola.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d2x4bHdybXB0bWxvbWZob2xhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2MTU5ODAsImV4cCI6MjA2MzE5MTk4MH0.x9lAnY98QLHPVtnUctYND0QWwn_VeCH_XVRBeQ8v6L4';

const supabase = createClient(supabaseUrl, supabaseKey);

// === ROUTES ===

// GET all saved artists
app.get('/api/saved-artist', async (req, res) => {
  const { data, error } = await supabase.from('saved_artists').select('*');
  if (error) {
    console.error("❌ GET /api/saved-artist error:", error);
    return res.status(500).json({ error });
  }
  res.json(data);
});

// GET all saved songs
app.get('/api/saved-song', async (req, res) => {
  const { data, error } = await supabase.from('saved_songs').select('*');
  if (error) {
    console.error("❌ GET /api/saved-song error:", error);
    return res.status(500).json({ error });
  }
  res.json(data);
});

// POST a new artist
app.post('/api/save-artist', async (req, res) => {
  const { name } = req.body;
  console.log("🚀 Incoming artist to save:", { name });

  if (!name) {
    console.warn("⚠️ Missing artist name");
    return res.status(400).json({ error: 'Artist name is required' });
  }

  const { data, error } = await supabase.from('saved_artists').insert([{ name }]);

  if (error) {
    console.error("❌ Supabase insert artist error:", error);
    return res.status(500).json({ error });
  }

  console.log("✅ Artist saved to Supabase:", data);
  res.status(200).json(data);
});

// POST a new song
app.post('/api/save-song', async (req, res) => {
  const { title, artist } = req.body;
  console.log("🚀 Incoming song to save:", { title, artist });

  if (!title || !artist) {
    console.warn("⚠️ Missing song title or artist");
    return res.status(400).json({ error: 'Song title and artist are required' });
  }

  const { data, error } = await supabase.from('saved_songs').insert([{ title, artist }]);

  if (error) {
    console.error("❌ Supabase insert song error:", error);
    return res.status(500).json({ error });
  }

  console.log("✅ Song saved to Supabase:", data);
  res.status(200).json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
