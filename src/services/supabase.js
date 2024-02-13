import { createClient } from '@supabase/supabase-js'
const supabaseUrl="https://quobrbnbcfnemhnwejvh.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1b2JyYm5iY2ZuZW1obndlanZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MjU2OTAsImV4cCI6MjAyMzMwMTY5MH0.bJMIeIU8cHxjtBVjHi28UzbvEsjuovuHzalZfz6Do2E"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;