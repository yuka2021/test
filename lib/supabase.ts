import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lhlsucciusumeuhquhaz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxobHN1Y2NpdXN1bWV1aHF1aGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwMDcyMDMsImV4cCI6MjAxODU4MzIwM30.dyq2h1xPkN9nbMI_Uvi_PZpna8jWWRphDkfw6epU9ls";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
