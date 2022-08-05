const fs = require('fs').promises;

// start route access
const dynamicroute = {};
dynamicroute.routeAccess = (app, path) => {
    return new Promise(async (resolve, reject) => {
        try {
            const file = await fs.readdir('./' + path);
            for (let i = 0; i < file.length; ++i) {
                const checker = await fs.lstat('./' + path + '/' + file[i]);
                if (checker.isFile()) {
                    console.log('file = ' + file[i], 'index = ' + i);
                    let fmodule = require('../../' + path + '/' + file[i]);
                    app.use('/admin', fmodule);
                }
                else {
                    console.log('folder = ' + file[i], 'index = ' + i);
                    await dynamicroute.routeAccess(app, path + '/' + file[i]);
                }
            };
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports.access = dynamicroute.routeAccess;