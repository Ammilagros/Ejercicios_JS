//Una función que admita un parámetro "num", y devuelva una lista con esa
// cantidad de números de la secuencia de Fibonacci 

function generateFibonacci(num){
    const Fibonacci = [0, 1];
    for(let i = 2; i < num; i++){
        Fibonacci[i] = Fibonacci[i - 2] + Fibonacci[i - 1];
    }
    return Fibonacci;
}

const ArrayFibo = generateFibonacci(8);