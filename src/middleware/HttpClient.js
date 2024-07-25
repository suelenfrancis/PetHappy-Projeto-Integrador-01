class HttpClient {

    static async request(endpoint, method = 'GET', data = null) {
        const response = await fetch(
            `${process.env.BASE_URL}${endpoint}`,
            {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: data ? JSON.stringify(data) : null
            }
        );
        return {
            status: response.status,
            body: await response.json(),
        }
    }

}

export default HttpClient;