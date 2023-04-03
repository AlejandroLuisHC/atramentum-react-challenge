const API_URL = import.meta.env.VITE_URL_API;
const USER = import.meta.env.VITE_USER;
const PASS = import.meta.env.VITE_PASS;

let token: { value: string | null, expiry: number } = { value: null, expiry: 0 };

// Post user and pass to get the token
async function authenticate() {
    const response = await fetch(`${API_URL}/api/authenticate`, {
        method: "POST",
        body: `username=${USER}&password=${PASS}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    const data = await response.json();
    const expiry = new Date().getTime() + 6 * 60 * 60 * 1000; // token expires after 6 hours (?)
    token = { value: data.token, expiry };
}

// Check if the token is available and not expired
async function getToken(): Promise<string | null> {
    const now = new Date().getTime();
    if (!token.value || now > token.expiry) {
        await authenticate();
    }
    return token.value;
}


export { 
    API_URL, 
    USER, 
    getToken,
};