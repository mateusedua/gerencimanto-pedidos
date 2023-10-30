
const config = {
    host: process.env.HOST_DATABASE,
    username: process.env.USER_DATABASE,
    password: process.env.PASS_DATABASE,
    fetch: (url, init) => {
        delete (init)["cache"];
        return fetch(url, init);
    }
}

export default config