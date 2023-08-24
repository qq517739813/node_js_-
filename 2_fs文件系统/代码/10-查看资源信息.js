const fs = require('fs');

fs.stat('../资料/忽然之间.mp4', (err, data) => {
    if (err) {
        console.log('error:', err);
        return
    }
    console.log(data);
    console.log(data.isDirectory());
})