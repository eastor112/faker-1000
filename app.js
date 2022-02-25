import { faker } from '@faker-js/faker'
import fs from 'fs'

const names = [];

for (let i = 0; i < 1000; i++) {
  names.push(faker.name.findName());
}

try {
  fs.writeFileSync('names.txt', names.join('\n'));
  console.log("Se ha guardado el archivo satisfactoriamente");
} catch (error) {
  console.log("Error al guardar el archivo");
}

