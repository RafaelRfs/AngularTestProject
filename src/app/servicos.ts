export class Servicos {
    id:number;
    nome:String;
    descricao:String;
    conteudo:String;
    img:String;

    constructor(i:number, nom:String, desc:String, conteud:String, im:String){
        this.id =  i ;
        this.nome = nom;
        this.descricao =  desc;
        this.conteudo = conteud;
        this.img = im;
    }
}
