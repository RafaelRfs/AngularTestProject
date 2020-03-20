export class Users {
     id:number;
     nome: string;
     sobrenome: string;
     email:string;
     senha:string;
     descricao:string;
     img:string;
     data:string;
     sexo:string;
     tipo: string;
     constructor(id:number, nome:string, sobrenome:string, email:string, senha:string,
         descricao:string, img:string, data:string, sexo:string, tipo:string){
             this.id = id;
             this.nome = nome;
             this.sobrenome = sobrenome;
             this.email = email;
             this.senha = senha;
             this.descricao = descricao;
             this.img = img;
             this.data = data;
             this.sexo = sexo;
             this.tipo = tipo;
         }
}
