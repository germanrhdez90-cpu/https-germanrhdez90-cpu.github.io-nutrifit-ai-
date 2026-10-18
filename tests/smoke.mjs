import {readFileSync} from 'node:fs';
const html=readFileSync('index.html','utf8'),js=readFileSync('app.js','utf8'),css=readFileSync('app.css','utf8');
for(const [name,[source,needles]] of Object.entries({html:[html,['manifest.webmanifest','app.css','app.js']],app:[js,['const START','saveSets','saveSession','saveFood','previewFood','exportData','importData','serviceWorker','Garmin FIT','readiness']],css:[css,['safe-area-inset','@media','--acid']]})) for(const n of needles) if(!source.includes(n)) throw new Error(`${name}: falta ${n}`);
console.log('smoke: OK');
