'use strict';

const isAdmin = true;
const canWrite = true;
const isSuperAdmin = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертировать права админа ${!isAdmin}`);

const isEdited = true;
console.log(
  `Системный файл с редактированием ${isAdmin && canWrite && !isEdited}`
);
console.log(`Системный файл с редактированием ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);

if (a === -8 || a === 22) {
  
}