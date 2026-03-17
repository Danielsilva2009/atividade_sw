


// 4- Sistema de Recomendação de Saúde (Anemia)
//Com base no nível de ferro no sangue e no gênero, determine o diagnóstico: 

//Homens: Normal se ferro > 13.5; Anêmico se menor.
//Mulheres: Normal se ferro > 12.0; Anêmica se menor.
//Crianças: Normal se ferro > 11.0; Anêmica se menor.


export function if_4() {
  
let pessoa = [{
  
  sexo:"masculino",
  idade: 18,
  ferro: 15
}]



if(pessoa[0].sexo == 'masculino' & pessoa[0].idade >= 18 & pessoa[0].ferro < 13,5){
  
  
  if (pessoa[0].ferro < 13,5) {
    return "normal"
  }
  
  
  
}
}