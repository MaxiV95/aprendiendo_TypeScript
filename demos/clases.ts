class Persona {
    nombre: string; //por defecto, son publicas
    private edad: number;
    protected email: string
    constructor(nombre: string, edad: number, email: string) {
        this.nombre = nombre;
        this.edad = edad
        this.email = email
    }
    private getEmail () {
        return this.email
    }
    getEdad () {
        return 'mi edad es ' + this.edad + this.getEmail()
    }
}

class Estudiante extends Persona {
    isActive: boolean
    constructor(nombre: string, edad: number, email: string) {
        super(nombre, edad, email)
        this.isActive = false
    }
    functionPrueba() {
        this.getEmail()
        this.edad
        this.email
    }
}


let mati = new Persona('matias', 29, 'mati@mail.com')
mati.nombre //publico, lo puedo acceder desde fuera de la clase
mati.getEdad()

let fede = new Estudiante('fede', 29, 'fede@mail.com')
fede.nombre
fede.email
fede.getEdad()
fede.functionPrueba
fede.isActive

export {}