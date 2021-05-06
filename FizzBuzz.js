/*
  FizzBuzz

  Crear una función que cuenta
  del 1 al 100 con la siguiente caracteristica:

  Si el número es múltiplo de 3, poner
  en pantalla "Fizz"

  Si el número es múltiplo de 5, poner
  en pantalla "Buzz"

  Si el número es múltiplo de 3 y 5,
  poner en pantalla "FizzBuzz"

  En caso contrario poner el número tal cual


  1
  2
  Fizz (3)
  4
  Buzz (5)
  Fizz (6)
  7
  8
  Fizz (9)
  Buzz (10)
  11
  Fizz (12)
  13
  14
  FizzBuzz (15)
*/



let n = 1;

while (n <= 100) {
    (n % 3 === 0 && n % 5 === 0) ?
        console.log('FizzBuzz') :
        (n % 3 === 0) ?
            console.log('Fizz') :
            (n % 5 === 0) ?
                console.log('Buzz') :
                console.log(n);
    n++;
}
