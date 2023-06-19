// divListaProduto.insertAdjacentHTML('afterbegin', '');
class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }

class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrarAtributos(){
        try {
          return this.atributos();  
        } catch (error) {
          console.log(error) 
        }
      } 
    
      atributos() {
        if (this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != ""){
          return {
            nome: this.nome,
            dataCadastro: this.dataCadastro,
            descricao: this.descricao,
            preco: this.preco
          };
        } else {
          throw new MeuErro("Há campos que precisam ser preenchidos.")
        }
      }
}
class ProdutoDestaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagem){
        super(nome, dataCadastro, descricao, preco);
        this.imagem = imagem;
    }
    
    produtos(){
        try {
            return this.atributos();  
          } catch (error) {
            console.log(error) 
          }
    }
    mostrarProdutoDestaque(){
        if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != ""){
         return `
        <h3>${this.nome} </h3> 
        <p>${this.descricao} </p>
        <p>${this.dataCadastro} </p>
        <h3>${this.preco} </h3>
        <img src="${this.imagem}"> `
        } else { 
            throw new MeuErro("Há campos que precisam ser preenchidos.")
          }
    }
  } 
//produto1
const produtos = new ProdutoDestaque("Óculos escuros", "2012-08-09 ", "Óculos de sol feito de plástico totalmente sustentável. ", "R$30 ", 'https://i.pinimg.com/564x/d3/79/e1/d379e14e2be8b11ffb8981e555b04dbb.jpg');
console.log(produtos.mostrarAtributos())

const produtoDestaque = document.getElementById("produtoDestaque");
produtoDestaque.insertAdjacentHTML('afterbegin', produtos.mostrarProdutoDestaque());


//produto2
const produto2 = new ProdutoDestaque("Vestido Verde", "2018-05-02 ", "Vestido verde de cetim feito de material 100% reciclável ", "R$85 ", 'https://i.pinimg.com/564x/f6/c6/58/f6c65818b35dda5921671a5cbb08a90d.jpg');
console.log(produto2.mostrarAtributos());

const produtoDestaque2 = document.getElementById("produtoDestaque2");
produtoDestaque2.insertAdjacentHTML('afterbegin', produto2.mostrarProdutoDestaque());


//produto3
const produto3 = new ProdutoDestaque("Bota branca", "2018-05-02 ", "Bota branca envernizada feita de material totalmente sustentável ", "R$90 ", 'https://i.pinimg.com/564x/54/f8/50/54f850c88f8e09c8de0c2ab78b913f3d.jpg');
console.log(produto3.mostrarAtributos());

const produtoDestaque3 = document.getElementById("produtoDestaque3");
produtoDestaque3.insertAdjacentHTML('afterbegin', produto3.mostrarProdutoDestaque());
