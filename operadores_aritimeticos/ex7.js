

//7 - Um funcionário ganha R$ 50,00 por hora. Se ele trabalhar mais de 40 horas semanais, as horas excedentes ganham um adicional de 50%.
 //Exercício: Se ele trabalhou 45 horas, qual o salário total da semana?
 
export function ari_7(hora_trabalhada) {
    let ganho_porHora = 50
   
 
    let adicional = 0.50 * 5
    
    
    let total = (ganho_porHora * hora_trabalhada) * adicional
    
    return total
}