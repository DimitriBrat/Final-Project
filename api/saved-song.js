import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://lwwlxlwrmptmlomfhola.supabase.co',
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET allowed' });
  }

  const { data, error } = await supabase
    .from('saved_songs')
    .select('*');

  if (error) return res.status(500).json({ error });
  return res.status(200).json(data);
}
