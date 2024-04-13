class HttpClient {

    static async request(url, method = 'GET', data = null) {
        const response = await fetch(
            url,
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