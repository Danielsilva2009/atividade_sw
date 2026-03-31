// 6-  desconto : se a compra for mais de 100 reais entao 10% de desconto

export function rel_6(valorCompra) {
    


if(valorCompra >= 100){
 return `seu desconto é ${valorCompra * 0.10}`
}
else{
    return 'sua compra nao passou de 100 reais'
}
}