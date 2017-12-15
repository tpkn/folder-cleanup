/*!
 * Folder Cleanup (v1.0.1.20171117), http://tpkn.me/
 */

const fs = require('fs-extra');
const path = require('path');
const stringToMs = require('string-to-ms');

module.exports = (folder, max_time) => {
   let end_time, diff_time;
   let current_time = Date.now();

   fs.readdir(folder, (err, files) => {
      if(err) return console.log('(cleanup)', err.message);

      for(let i = 0, len = files.length; i < len; i++){
         fs.lstat(path.join(folder, files[i]), (err, stat) => {
            if(err) return console.log('(cleanup)', err.message);

            end_time = stat.ctime.getTime() + stringToMs(max_time);
            
            if(end_time < current_time){
               fs.remove(path.join(folder, files[i]), err => {
                  if(err) return console.log('(cleanup)', err.message);
                  console.log('(cleanup)', files[i]);
               });
            }
         });
      }
   });
}
