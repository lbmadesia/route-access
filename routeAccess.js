const fs = require('fs').promises;

    // start route access
const dynamicroute = {};
dynamicroute.routeAccess = (app,routePath,rpp) => {
        return new Promise(async(resolve,reject)=>{
        try{
            const file = await fs.readdir('.'+rpp+routePath);
            for(let i=0;i<file.length;++i){
                const checker = await fs.lstat('.'+rpp+routePath+'/'+file[i]);
                if(checker.isFile()){
                    console.log('file = '+file[i],'index = '+i);
                    let dpath = require('../..'+routePath+'/'+file[i]);
                    app.use('/admin',dpath);
                }
                else{
                    console.log('folder = '+file[i],'index = '+i);
                    await module.exports.routeAccess(app,routePath+'/'+file[i],rpp);
                }
              };
              resolve(true);
            }catch(error){
                reject(error);
            }
        });
}

module.exports.routeAccess = dynamicroute.routeAccess;