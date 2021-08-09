import test2 from './test2'

console.log(test2);

import fs from 'fs';
var filePath = __dirname + "/test1.txt";
console.log("file path: " + filePath);
var fd = -1;

// sync file write
// fd = fs.openSync(filePath, "w");
// console.log("file desc: " + fd);
// var writeNum = fs.writeSync(fd, Buffer.from("hello world"));
// console.log("write num: " + writeNum);
// fs.closeSync(fd);

// async file write
// fs.open(filePath, "w", function(err, fd) {
//     if (err) {
//         console.log("open file err: " + err);
//         fs.close(fd, function(err) {
//             if (err) {
//                 console.log("close file err: " + err);
//             }
//             return;
//         });
//         return;
//     }
//     fs.write(fd, Buffer.from("hello mars"), function(err, written, buffer) {
//         if (err) {
//             console.log("write file err: " + err);
//             fs.close(fd, function(err) {
//                 if (err) {
//                     console.log("close file err: " + err);
//                 }
//                 return;
//             });
//             return;
//         }

//         fs.close(fd, function(err) {
//             if (err) {
//                 console.log("close file err: " + err);
//             }
//             return;
//         });

//     });


// });

// async write file 
/* fs.writeFile(filePath,Buffer.from("hello world"),(err)=>{
    if(err){
        console.log("write file err: "+err);
        fs.close(err.fd,(err)=>{
            console.log("close file err: "+err);
            return;
        });
        return;
    }
    console.log("write file success");

}); */


// write file stream
/* var ws = fs.createWriteStream(filePath);
ws.once("open",function(){
    console.log("file stream open");
});

ws.write("hello world");

ws.once("close",function(){
    console.log("file stream close");
});
ws.end(); */

/* fs.readFile(filePath,function(err,data){
    if(err){
        console.log("file read err: "+err);
        fs.close(err.fd,function(err){
            if(err){
                console.log("file close err: "+err);
            }
        });
        return;
    }
    console.log(data.toString());
}); */

/* var rs=fs.createReadStream(filePath);
rs.once("open",function(){
    console.log("file read stream open");
});

rs.on("data",function(chunk){
    console.log("file read stream data length: "+chunk.length);
});

rs.once("close",function(){
    console.log("file read stream close");
});

var ws=fs.createWriteStream(__dirname+"/test2.txt");
ws.once("open",function(){
    console.log("file write stream open");
});

ws.on("pipe",function(src){
    console.log("file write stream data: "+src);
});

ws.once("close",function(){
    console.log("file write stream close");
});
rs.pipe(ws); */


/* console.log(fs.existsSync(filePath));
fs.stat(filePath,function(err,stat){
    if(err){
        console.log(err); 
        return;
    }
    console.log(stat);
}); */

//fs.unlinkSync(__dirname+"/test2.txt");
//console.log(fs.readdirSync("."));
//fs.truncateSync(__dirname+"/test2.txt",0);
//fs.mkdirSync(__dirname+"/dir");
//fs.rmdirSync(__dirname+"/dir");


