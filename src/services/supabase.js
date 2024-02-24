import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bqfeypxvbolzomdvxwms.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZmV5cHh2Ym9sem9tZHZ4d21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNDYwNTUsImV4cCI6MjAxODcyMjA1NX0.DXm9Y-m6kcGYj8rsoP_iESmQzAEkrDyar6ThuRkS0_w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
