// supabase-client.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nxvxzrrmcruxwjnxxvps.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dnh6cnJtY3J1eHdqbnh4dnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MzcxNDksImV4cCI6MjA3ODUxMzE0OX0.C7UxGDLpPb7t2luTLMh39eTvO_lhmNjbWjugQZzVQwI"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
