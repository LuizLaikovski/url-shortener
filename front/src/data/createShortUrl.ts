const createUrlShort = async (urlOriginal: string) => {
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
            "https://url-shortener-back-indol.vercel.app/shorten",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": apiKey
                },
                body: JSON.stringify({ url: urlOriginal })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Erro ${response.status}: ${errorText || response.statusText}`
            );
        }


        const data = await response.json();
        return data.shortUrl;
    } catch (error) {
        console.error(error);
        return "Erro ao encurtar url!";
    }
};

export default createUrlShort;
