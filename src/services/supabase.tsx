import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zjvbfnvzgivlbjlubpeb.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
  ? process.env.REACT_APP_SUPABASE_KEY
  : "none";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
