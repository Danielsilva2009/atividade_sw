// 2- login se usuario não for = admin e senha nao for = 1234 entao digite senha incorreta


export function rel_2(usuario,senha) {


if(usuario == 'admin' & senha == '1234'){
 return 'senha válida'
}
else{
    return 'senha inválida'
}
}