﻿var gm = require('gm');
var dirpath = 'images/';
var imgname = 'download-logo.png';
var tmppath = 'tmp/';

gm(dirpath + imgname) 

    .resize(300, 200) 
    .write(tmppath + 'New_' + imgname, function (err) {
        if (err)
            throw err;
        console.log('done');
});
