export const login = async (username: string, password: string ) => {
    const response = await fetch(
        'http://localhost:3001/login',
        {
            method: 'POST',
            body: JSON.stringify({
               username,
               password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    const content = await response.json();
    return content;
}