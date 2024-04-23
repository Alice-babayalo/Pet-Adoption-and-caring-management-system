import app from './services/app.js'


const StartServer = async(app) => {
    try {
        await app
    } catch (error) {
        console.log(error);
    }
};
StartServer(app);