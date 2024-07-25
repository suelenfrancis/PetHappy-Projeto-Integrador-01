class HttpClient {

    static async request(endpoint, method = 'GET', data = null) {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000${endpoint}`,
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
        } catch (erro) {
            return {
                status: erro.status,
                body: await erro.json()
            }
        }
    }

}

export default HttpClient;