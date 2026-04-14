



//2-Classificação de Nadador: Leia a idade de um nadador e exiba sua categoria: Mirim (menor que 9), Infantil (9 a 13), Juvenil (14 a 17) ou Adulto (18+).


export function if_2(idade_nadador) {
  




if (idade_nadador <= 9) {
  return `sua idade é : ${idade_nadador} entao voce é mirim`
  
}

if (idade_nadador >= 9 & idade_nadador < 13) {
  return `sua idade é : ${idade_nadador} entao voce é infatil`
  
}


if (idade_nadador >= 14 & idade_nadador < 17) {
  return `sua idade é : ${idade_nadador} entao voce é juvenil`
  
}

if (idade_nadador => 18) {
  return `sua idade é : ${idade_nadador} entao voce é adulto`
  
}
}
 


