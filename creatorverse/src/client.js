import {createClient} from '@supabase/supabase-js';

const URL = 'https://vbjypssfqdzwtnmebkck.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZianlwc3NmcWR6d3RubWVia2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3NjI4NDUsImV4cCI6MjA2NTMzODg0NX0.ZBMoA5nnnpHknjZEjrMxfghv2CcDiVyPoMkpkcnalZo';

export const supabase = createClient(URL, API_KEY);

