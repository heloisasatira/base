// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarDados(){
        return this.nome + this.dataCadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagem){
        super(nome, dataCadastro, descricao, preco);
        this.imagem = imagem;
    }
    mostrarProdutoDestaque(){
        return 
        <h1>{this.nome}</h1>
        + this.dataCadastro + this.descricao + this.preco + this.imagem;
    }
}

const produtos = new ProdutoDestaque("Vestido ", "2012-08-09 ", "Vestido vermelho  ", "R$70 ", 'https://img.ltwebstatic.com/images3_pi/2022/02/08/16442847740503fab7fc91d23924d7c6cda0f1e597_thumbnail_900x.webp');
console.log(produtos.mostrarProdutoDestaque())