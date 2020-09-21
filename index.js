console.log('HelloApp');
// index.js
// require('./app/index')

const fs = require('fs');
const path = require('path'); 
// const fs2 = require('fs')
// Дескриптор можно получить, воспользовавшись для открытия файла асинхронным методом open() из модуля fs:


// директория и файлы треков
let recFilesDir = 'C:\\MY_PROJECTS\\NODE_JS\\CreatePList\\Music\\DAR_BOGU';
try {
  const files = fs.readdirSync(recFilesDir,{ withFileTypes : true });
  // Переберем массив файлов
  // files.forEach(file => { 
  // if (path.extname(file) == ".json") console.log(file);   
  // console.log(`"` + path.resolve(file)  + `"`);
  // console.log(files); 
} catch (error) {
              console.error(error)
          }  

// Папка с плэлистами
let pListdir = 'C:\\MY_PROJECTS\\NODE_JS\\CreatePList';  
let pListFile = 'msclst.0';
//  файл Листа номер 1

const iconv = require('iconv-lite'); // тот самый конвертер
// чтение файла
try {
   //  const fdata = fs.readFileSync( pListFile,{encoding : "utf8"} )
   const fdata = fs.readFileSync( pListFile);

   const ab = new ArrayBuffer(10);
   const buf = Buffer.from(ab, 0, 2);

   // первые 16 символов до  строки
   let res1 = Buffer.from(fdata).slice(0,16);
   
   console.log(res);
  // console.log(fdata);
  // console.log(fdata.toJSON());
 //  console.log(iconv.decode(fdata, "cp866"));

} catch (err) {
              console.error(err)
     }

/* 
Запись файла
let content = 'GGGGGGGGGG';
fs.writeFile(pListFile, content, (err) => {
  if (err) {
    console.error(err);
    console.log("файл записан успешно");
    return
  });
 */




/*   Вот так можно получить полный путь к файлу:
  fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
  }
 */

/* Результаты можно отфильтровать для того, чтобы получить только файлы и исключить из вывода директории:
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}
fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)).filter(isFile)
}
 */


  // let myFile = files[0];
  // Вывенсти с разделителем
  //console.log(`"` + files.join(`"\n"`) + `"`); 

  


