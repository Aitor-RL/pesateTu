import './style.css'

document.getElementById('vol').addEventListener('change', calcularIMC)
document.getElementById('estatura').addEventListener('change', calcularIMC)






function calcularIMC(){
    const estatura = document.getElementById('estatura').value
    const volumen = document.getElementById('vol').value
  
    const conversion = estatura/100
    
    const resultado = volumen /(conversion*conversion)

    const decimales = resultado.toFixed(1)


    const theclass = calculateClass(decimales)
    

    document.getElementById('resultado').innerHTML=decimales + ' '+theclass
    
   


}
function calculateClass(imc){
    if(imc< 18.5) return 'peso bajo'
    if(imc< 25) return 'normal'
    if(imc< 30) return 'sobrepeso'
    return 'obesidad'
}


