import { parseCookies, setCookie, destroyCookie } from 'nookies';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

class TokenService {


    static save(accessToken, context = null) {
        setCookie(
            context,
            ACCESS_TOKEN_KEY,
            accessToken,
            {
                maxAge: 24 * 60 * 60,
                path: '/'
            }
        )
    }

    static getToken(context = null) {
        const cookies = parseCookies(context);
        return cookies[ACCESS_TOKEN_KEY] || '';
    }

    static deleteToken(context = null) {
        destroyCookie(context, ACCESS_TOKEN_KEY);
    }
}

export default TokenService;