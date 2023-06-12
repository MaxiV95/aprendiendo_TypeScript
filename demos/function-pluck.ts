function pluck<T, K extends keyof T>(arreglo: T[], prop: K): T[K][] {
  return arreglo.map((object) => object[prop]);
}

/*T es un tipo genérico que representa el tipo de objeto en el arreglo. 
K es otro tipo genérico que representa la clave (propiedad) 
que queremos extraer de cada objeto.

La función pluck utiliza el método map para iterar sobre cada objeto en el arreglo 
y extraer el valor correspondiente a la propiedad especificada por prop. 
Luego, esos valores se almacenan en un nuevo arreglo y se devuelve como resultado.

Aquí tienes un ejemplo de cómo se podría usar la función pluck:
*/

interface Persona1 {
  nombre: string;
  edad: number;
}

const personas: Persona1[] = [
  { nombre: "Juan", edad: 30 },
  { nombre: "María", edad: 25 },
  { nombre: "Pedro", edad: 35 }
];

const nombres: string[] = pluck(personas, "nombre");
console.log(nombres); // ["Juan", "María", "Pedro"]
