const fs = require('fs');

fs.mkdir('testfolder', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Created Folder');
        fs.rmdir('testfolder', (err) => {
            if(err){
                console.log(err);
            } else {
                console.log('deleted folder');
            }
        });
    }
})

