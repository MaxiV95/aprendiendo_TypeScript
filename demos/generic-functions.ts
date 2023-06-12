let array = [1, 2, 3, 4]
let arrayStrings = ['a', 'b', 'c']

// function firstElement(arr: any[]) {
//     return arr[0];
//   }


function firstElement<Type>(arr: Type[]): Type { // T, V U
    return arr[0];
  }
let elemento =  firstElement(array) // Tipado implícito
let elementoString =  firstElement<string>(arrayStrings) // Tipado explicito

//-----
function merge<U extends object, V extends object, w>(obj1: U, obj2: V, obj3: w) {
    return {
      ...obj1,
      ...obj2
    };
  }

  /*
  actions en redux, las acciones son funciones genéricas!
  axios.post
  axios.get también son funciones genéricas
  response.data ---> información de data es T
  axios.get<Persona> ---> response.data --> va a estar persona, y nos va
  a dar el tipado
  useState de react, TAMBIÉN utiliza generic functions!
  */
  
  merge({name: "Franco"}, {age: 25}, {otro: null});
  merge({name: "Franco"}, 25, {otro: null});
  merge({name: "Franco"}, {age: 25}, 'apa');// no me advierte
