// 4 - se a idade do usuario for menor de 18 anos entao nao pode acessar o site


export function rel_4() {
  let idade = 6


if(idade >= 18){
  return 'acesso válido'

}
else{
    return "acesso inválido"
}
}