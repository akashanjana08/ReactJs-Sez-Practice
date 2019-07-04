const CLIENT_ENV = process.env.CLIENT_ENV;

export  const clientEvn = {
    getEnv,
}
function getEnv(){
    return CLIENT_ENV;
}