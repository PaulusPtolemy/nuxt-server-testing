import * as fs from 'fs';
export const jsonParse = (filePath: string = './db/vehicles.json') => {
  const jsonString = fs.readFileSync(filePath, 'utf-8');

  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Ошибка при парсинге JSON:', error);
  }
}
