var readline = require('prompt-sync')//--global
var input = readline();

class Produto {
    constructor(codigo, nome, preco, quantidadeEmEstoque){
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }

    exibirDadosProdutos() {
        console.log('Código:' + this.codigo)
        console.log('Nome:' + this.nome)
        console.log('Preço:' + this.preco)
        console.log('Quantidade em estoque:' + this.quantidadeEmEstoque)
    }
}

class CarrinhoDeCompras {

    constructor(){
        this.carrinhoDeCompras = []
        this.valorTotal = 0;
    }

    exibirProdutosNoCarrinhoDeCompras(){
        console.log('Seu carrinho:' + carrinho.carrinhoDeCompras)
        console.log('Valor total do carrinho: ', + carrinho.valorTotal)
    }

    adicionarProdutoNoCarrinho(nome, quantidade){
        if(nome == produto1.nome){
            if(produto1.quantidadeEmEstoque > 0){
                carrinho.carrinhoDeCompras.push(produto1.nome)
                carrinho.valorTotal+= produto1.preco;
                produto1.quantidadeEmEstoque-=1;
                
            }
            else{
            console.log('Produto esgotado!\n')
            } 
        }
        else if( nome == produto2.nome){
            if(produto2.quantidadeEmEstoque > 0){
                carrinho.carrinhoDeCompras.push(produto2.nome)
                carrinho.valorTotal+= produto2.preco;
                produto2.quantidadeEmEstoque-=1;
            }
            else{
            console.log('Produto esgotado!\n')
            } 
        }
        else if(nome == produto3.nome){
            if(produto3.quantidadeEmEstoque > 0){
                carrinho.carrinhoDeCompras.push(produto3.nome)
                carrinho.valorTotal+= produto3.preco;
                produto3.quantidadeEmEstoque-=1;
            }
            else{
            console.log('Produto esgotado!\n')
            } 
        }
        else
            console.log("Produto não encontrado!\n")
    }

    calcularTotalDoCarrinho(){
        console.log('Valor total do carrinho: R$'+ carrinho.valorTotal);
    }
}

//PRODUTOS CRIADOS
const produto1 = new Produto(1, 'Camisa Azul', 35, 3);
const produto2 = new Produto(2, 'Bermuda Jeans', 45, 5);
const produto3 = new Produto(3, 'Chinelo Comum', 25, 3)
const carrinho = new CarrinhoDeCompras();

var resposta = '';

while(resposta != 'exit'){
    console.log('Produto / Preço / Quantidade em estoque:');
    console.log(produto1.nome +' / R$'+ produto1.preco +' / '+ produto1.quantidadeEmEstoque);
    console.log(produto2.nome +' / R$'+ produto2.preco +' / '+ produto2.quantidadeEmEstoque);
    console.log(produto3.nome +' / R$'+ produto3.preco +' / '+ produto3.quantidadeEmEstoque);
    console.log('---')

    carrinho.exibirProdutosNoCarrinhoDeCompras()
    console.log('---')
    resposta = input('Se deseja adicionar um produto ao carrinho digite o nome dele. Para sair digite exit:');

    if(resposta!='exit'){
        carrinho.adicionarProdutoNoCarrinho(resposta, 0);
    }

    
    
}


