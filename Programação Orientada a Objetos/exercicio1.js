class Produto {
    constructor(codigo, nome, preco, quantidadeEmEstoque){
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }

    functionexibirDadosProdutos() {
        console.log('Código:' + this.codigo)
        console.log('Nome:' + this.nome)
        console.log('Preço:' + this.preco)
        console.log('Quantidade em estoque:' + this.quantidadeEmEstoque)
    }
}

class CarrinhoDeCompras {

    constructor(carrinhoDeCompras){
        this.carrinhoDeCompras = []
    }

    adicionarProdutoNoCarrinho(produto){
        produto = produto1;

        if(produto==produto1){
            produto1.quantidadeEmEstoque--;
        }
    }

    comprarProduto(nome, quantidade){

    }
}

const produto1 = new Produto(1, 'Camisa Azul', 35, 3);
const produto2 = new Produto(2, 'Bermuda Jeans', 45, 5);
const produto3 = new Produto(3, 'Chinelo Comum', 25, 3)
