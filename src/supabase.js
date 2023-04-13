import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kufxgyntxrkwwimmzetq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1ZnhneW50eHJrd3dpbW16ZXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMDA1OTcsImV4cCI6MTk5NjU3NjU5N30.4NbRWvim_qOeZ2cFtJTXDhucEVcp_3PKB_fapQYwShY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
