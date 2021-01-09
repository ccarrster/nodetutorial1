const fs = require('fs');

fs.writeFile('example.txt', 'Example Data', (err) =>{
    if(err){
        console.log(err);
    } else {
        fs.appendFile('example.txt', 'cats', (err) =>{
            if(err){
                console.log(err);
            } else {
                console.log('Appended data');
            }
        });
        console.log('File Created');
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if(err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});

