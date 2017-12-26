# Folder Cleanup
Helps you remove old files and folders


A convenient way to rid of files and folders that are older than specified amount of time.
Cleanup function takes two arguments: 
1. folder path
2. maximum file age (in milliseconds)

## Usage
```javascript
const cleanup = require('folder-cleanup');

let max_age = '5d';
let temp_uploads = '/usr/www/domain.me/temp_uploads';

// Deleting files that were created later than 5 days ago
cleanup(temp_uploads, max_age);
```

People who are feeling nauseous just thinking of how they will converting 90 weeks into milliseconds, could use already [built-in time converter](https://www.npmjs.com/package/string-to-ms).
