// Enter Supabase Information
const SUPABASE_URL = 'https://wuqcwgxturbjhkdtdjwn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1cWN3Z3h0dXJiamhrZHRkanduIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI3MjQ0MjMsImV4cCI6MTk2ODMwMDQyM30.qVkreSGtYAMaEk7THSwEY_1E0AB9q0iNMjuFXHaIa8Q';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}


//signs a new user in and puts an auth token in local storage 
export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    }
    else {
        console.error(response.error);
    } 
}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
