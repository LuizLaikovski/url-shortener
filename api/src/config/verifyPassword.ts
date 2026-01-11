export function verifyPassword(password: string): boolean {
    const correctPassword = process.env.API_KEY;
    if (password === correctPassword) return true;
    return false
}