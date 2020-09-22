console.log('HelloApp');
// index.js
// require('./app/index')

const fs = require('fs');
const path = require('path');

// Папка с плэлистами и листы
let pListdir = 'C:\\MY_PROJECTS\\NODE_JS\\CreatePlList';  
let pListFile_0 = 'msclst.0';
let pListFile_1 = 'msclst.1';
let pListFile_2 = 'msclst.2';
let pListFile_3 = 'msclst.3';
let pListFile_4 = 'msclst.4';
let pListFile_5 = 'msclst.5';

let pListFile_Test = 'msclst.6';

// префиксы для каждого плэйлиста пока!
let pList_0_Prefix = [0x2f,0x00,0x00,0xb0,0x12,0x00,0x00,0x00,0x0c,0x00,0x00,0x00,0x00,0x00,0x00,0x00];
let pList_1_Prefix = [0x2f,0x00,0x20,0xb0,0x12,0x00,0x00,0x00,0x0c,0x00,0x00,0x00,0x00,0x00,0x00,0x00];
let pList_2_Prefix = [0x2f,0x00,0x40,0xb0,0x12,0x00,0x00,0x00,0x0c,0x00,0x00,0x00,0x00,0x00,0x00,0x00];
let pList_3_Prefix = [0x2f,0x00,0x60,0xb0,0x12,0x00,0x00,0x00,0x0c,0x00,0x00,0x00,0x00,0x00,0x00,0x00];
let pList_4_Prefix = [0x2f,0x00,0x80,0xb0,0x12,0x00,0x00,0x00,0x0c,0x00,0x00,0x00,0x00,0x00,0x00,0x00];
let pList_5_Prefix = [0x2f,0x00,0xA0,0xb0,0x12,0x00,0x00,0x00,0x0c,0x00,0x00,0x00,0x00,0x00,0x00,0x00];

let pList_6_Prefix = '2f 00 80 b0 12 00 00 00 0c 00 00 00 00 00 00 00';

const iconv = require('iconv-lite'); // тот самый конвертер


// директория и файлы треков
/* let recFilesDir_0 = 'C:\\MY_PROJECTS\\NODE_JS\\CreatePlList\\Music\\DAR_BOGU';
try {
  const files = fs.readdirSync(recFilesDir_0,{ withFileTypes : true });
  // Переберем массив файлов
  // files.forEach(file => { 
  // if (path.extname(file) == ".json") console.log(file);   
  // console.log(`"` + path.resolve(file)  + `"`);
  // console.log(files); 
} catch (error) {
              console.error(error) }  
 */
//  файл Листа номер 1



// чтение файла
/* 
try {
   //  const fdata = fs.readFileSync( pListFile,{encoding : "utf8"} )
   const fdata = fs.readFileSync(pListFile_5);
   // Выводит в правильной кодировке 
   let res1 = iconv.decode(fdata.slice(16), "cp866");
   console.log(res1);
  } catch (err) {
    console.error(err)
}    */
   
// Пробуем сгенерить!
try {
fs.unlinkSync(pListFile_Test);
fs.open(pListFile_Test, 'a', (err, fd /* дискриптор файла */ ) => {
  if (err) throw err; // если ошибка - эксершен
  // повторяем запись в файл по числу треков в папке 
  let recFilesDir_0 = 'C:\\MY_PROJECTS\\NODE_JS\\CreatePlList\\Music\\DAR_BOGU';
  
      const files = fs.readdirSync(recFilesDir_0/* ,{ withFileTypes : true } */);
      // Переберем массив файлов
       files.forEach(file => { 
       if (path.extname(file) == ".mp3") {
                  console.log(file);   
                  // let content = `"` + path.resolve(file)  + `"`;
                  let content = iconv.decode(pList_0_Prefix,'cp866') + path.resolve(file)  + `\n`;
                  // console.log(content); 

                  fs.appendFile(fd, content,'ascii', (err) => {
                      fs.close(fd, (err) => { if (err) throw err; });
                      if (err) throw err;
                      });                   
         };    
            })  
   fs.close(fd,()=>{});       
});  
      
} catch (error) { console.error(error);  }

/* let content = pList_0_Prefix ; // это массив!
fs.writeFile(pListFile_Test, content, (err) => {
  if (err) {
            console.error(err);            
            return;
  }
  // console.log("файл записан успешно");
  console.log(iconv.encode(pList_2_Prefix,'hex'));
  });
 */

 console.log(iconv.decode(pList_0_Prefix,'cp866'));
 console.log(iconv.decode(pList_2_Prefix,'cp866'));
 // console.log(iconv.decode(pList_0_Prefix,'utf8'));
   // const ab = new ArrayBuffer(10);
   // const buf = Buffer.from(ab, 0, 2);
   // первые 16 символов до  строки

   // let res1 = Buffer.from(fdata).slice(0,16);
   // let res1 = iconv.encode(iconv.decode(fdata.slice(16),'cp1251'), "utf8").toString();

  // console.log(fdata);
  // console.log(fdata.toJSON());
 //  console.log(iconv.decode(fdata, "cp866"));

 /* *test*
 var message = iconv.encode(iconv.decode(message, "cp1251"), "utf8").toString();
 const Iconv = require('iconv').Iconv;
 const Buffer = require('buffer').Buffer;
 var iconv = new Iconv('windows-1251', 'UTF-8');
 console.log(iconv.convert('АБВ windows-1251').toString());
 console.log(iconv.convert(new Buffer([0xc0,0xc1,0xc2])).toString())
 */



/* 

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

  


