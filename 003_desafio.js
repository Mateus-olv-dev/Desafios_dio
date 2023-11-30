class Heroi {
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo= tipo
  }
  atacar(){
    let ataque = "";
    if(this.tipo == "Grão-mago"){
      ataque = 'Magia'
    }else if(this.tipo == "Guerreiro" ){
      ataque = 'Espada'
    }
    return console.log(`O ${this.tipo} atacou usando ${ataque}`)
  }
}

const mago = new Heroi ("Gandalf", 70, "Grão-mago")
const guerreiro = new Heroi ("Darius", 30, "Guerreiro")


mago.atacar()
guerreiro.atacar()




