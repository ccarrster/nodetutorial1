const fs = require('fs');

fs.mkdir('testfolder', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Created Folder');
        fs.writeFile('./testfolder/example.txt', 'carrots', (err) => {
            if(err){
                console.log(err);
            } else {
                console.log('Created file in folder');
                fs.readdir('testfolder', 'utf8', (err, files) => {
                    for(let file of files) {
                        fs.unlink('./testfolder/' + file, (err) => {
                            if(err){
                                console.log(err);
                            } else {
                                console.log(`deleted ${file}`);
                            }
                        })
                    }
                    fs.rmdir('testfolder', (err) => {
                        if(err){
                            console.log(err);
                        } else {
                            console.log('Removed');
                        }
                    });
                })
            }
        });
    }
})