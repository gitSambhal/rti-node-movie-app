const app = require('$src/app');
const { PORT } = require('$root/config');
const { connectDB } = require('$src/db');

function initAPIServer() {
  return new Promise(async (resolve, reject) => {
    console.log('⏳ Init API SERVER')
    // Server can only be started after these promises are fulfilled
    let promises = [
      connectDB()
    ];

    try {
      await Promise.all(promises);

      // Starting the server here
      app.listen(PORT, () => {
        console.log(`App is listening at port ${PORT}`)
      })
      return resolve()
    } catch (error) {
      console.log("Unable to start the server -> ", error.message)
      return reject(error);
    }
  })
}

initAPIServer();
