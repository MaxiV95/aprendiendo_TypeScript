interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    hobbies: Hobby[]
}
interface Hobby {
    nombre: string
}

interface Estudiante extends  Persona {
    // nombre: string;
    // apellido: string;
    // edad: number;
    estaActivo?: boolean;
    saluda: (a: string) => void
}

let matias: Persona = {
    nombre: 'matias',
    apellido: 'lamela',
    edad: 29,
    hobbies: [{nombre: 'leer'}]
}

matias.hobbies[0].nombre

let franco: Estudiante = {
    nombre: 'franco',
    apellido: 'etcheverri',
    edad: 27,

    saluda: (a:  string) => {console.log('hola')},
    hobbies: []
}
franco.estaActivo //undefined o booleano


interface PersonaV2 {
    nombre: string;
    edad: number
}

interface MateriasV2 {
    nombre: string
}

type ModuloV2 = 'm1' | 'm2' | 'm3' | 'm4'

interface EstudianteV2 extends PersonaV2 {
    esActivo: boolean
    materias: MateriasV2[]
    modulo: ModuloV2
}

let diego2: EstudianteV2 = {
    nombre: "Diego",
    edad: 29,
    esActivo: false, //que pasa si comento alguno?
    materias: [{nombre: 'materia1'},{nombre: 'materia2'}],
    modulo: 'm4' // type Modulo = "m1" | "m2" | "m3" | "m4"
}