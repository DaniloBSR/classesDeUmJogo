class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }


atacar() {
    let ataqueDescrição;

    switch(this.tipo){
        case "Mago":
            ataqueDescrição ="Usou Magia"
            break;
        case "Guerreiro":
            ataqueDescrição = "Usou Espada"
            break;
        case "Monge":
            ataqueDescrição = "Usou Artes Marciais"
            break;
        case "Ninja":
            ataqueDescrição = "Usou Shuriken"
            break;               
    }
console.log(`O ${this.tipo} atacou usando ${ataqueDescrição}`);

}

}
const mago = new heroi("Merlin", 130 , "Mago");
const guerreiro = new heroi("Rei Arthur" , 35, "Guerreiro");
const monge = new heroi("IP Man " , 40, "Monge");
const ninja = new heroi("Naruto", 17, "Ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();