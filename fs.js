
// В Node.js есть стандартный модуль path, предназначенный для работы с путями к файлам. 
/* const path = require('path');
const notes = 'C:\\Node_JS\\NodeSrv\\test1.txt'; // двойной обратный слэшы
console.log(path.dirname(notes)); // /users/flavio
console.log(path.basename(notes)); // notes.txt
console.log(path.extname(notes)); // .txt 
 */


/*  const fs = require('fs');
    const path = require('path'); 
 */
// const fs2 = require('fs')
// Дескриптор можно получить, воспользовавшись для открытия файла асинхронным методом open() из модуля fs:

/* let pListdir = 'C:\MY_PROJECTS\NODE_JS\CreatePList';
let pListFile = 'msclst.0'
try {
  const files = fs.readdirSyncpList(pListdir,{ withFileTypes : true });
  // Переберем массив файлов
  // files.forEach(file => { 
  // if (path.extname(file) == ".json") console.log(file);   
  // console.log(`"` + path.resolve(file)  + `"`);
   console.log(files); 
// Надо вывести только файлы или только папки ?
  //  })

} catch (error) {
  console.error(error)
} */


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



// Запись в Файл
/*  const content = `files`;
fs.writeFile('test1.txt', content, (err) => {
  if (err) {
    console.error(err);
    console.log("файл записан успешно");
    return
  }
  
});  */

//чтение файла
/* fs.readFile('test1.txt', (err,data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
}); */



// это асинхрон
/* fs.open('test1.txt', 'r', (err, fd ) => {

  console.log("Open file test (asinc)! ");
  console.log("дискриптор - ", fd);
  console.log("ошибка - ", err);
  console.log("fs1.Stats.length", fs1.Stats.length); */

// A Это синхрон !!!
// try {
//   console.log("Open file test^ Это синхрон !!! "); 
//   const fd = fs2.openSync('test2.txt', 'r');
//   console.log("дискриптор - ", fd);
// } catch (err) {
//   console.error(err)
// }  

  // ??? Аргументы? arguments - что отображаем?  console.log(" arg1", arguments);    
  // fd - это дескриптор файла
  // r+ — открыть файл для чтения и для записи.
  // w+ — открыть файл для чтения и для записи, установив указатель потока в начало файла. Если файл не существует — он создаётся.
  // a — открыть файл для записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.
  // a+ — открыть файл для чтения и записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.

// })