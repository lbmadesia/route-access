const fs = require('fs').promises;

// start route access
const dynamicroute = {};
dynamicroute.routeAccess = (app, path,prefix = {},predir=false) => {
    return new Promise(async (resolve, reject) => {
        try {
            const file = await fs.readdir('./' + path);
            for (let i = 0; i < file.length; ++i) {
                const checker = await fs.lstat('./' + path + '/' + file[i]);
                if (checker.isFile()) {
                    let fmodule = require('../../' + path + '/' + file[i]);
                    if(predir && prefix.hasOwnProperty(predir))
                        $prefixval = '/'+prefix[predir];
                    else
                        $prefixval = '/';
                    app.use($prefixval, fmodule);
                }
                else {
                    await dynamicroute.routeAccess(app, path + '/' + file[i],prefix,file[i]);
                }
            };
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
}

module.exports.access = dynamicroute.routeAccess;