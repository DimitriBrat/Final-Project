import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://lwwlxlwrmptmlomfhola.supabase.co',
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { name } = req.body || {};
  if (!name) return res.status(400).json({ error: 'Artist name required' });

  const { data, error } = await supabase
    .from('saved_artists')
    .insert([{ name }]);

  if (error) return res.status(500).json({ error });
  return res.status(200).json(data);
}
