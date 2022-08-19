/*
    ===== Código de TypeScript =====
*/
let habilidades:string[] = ['Bash','Counter','Healing'];
interface Personaje {
    nombre:String;
    hp:number;
    habilidades:string[]
    puebloNatal?:String;
};
const personaje:Personaje = {
    nombre : 'Strinder',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
};

personaje.puebloNatal = 'Pueblo paleta';
console.log(__dirname);
console.log(personaje);


