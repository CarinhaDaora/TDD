const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operation");

describe("Teste da calculadora", () => {

  it("Operação de soma", () => {
    let resultado = calculadora.sum(1, 2);
    expect(resultado).toEqual(3);

    resultado = calculadora.sum(-1, 1);
    expect(resultado).toEqual(0);

    resultado = calculadora.sum(50, 10);
    expect(resultado).toEqual(60);

    resultado = () => calculadora.sum("samuel", 10);
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = () => calculadora.sum(2, "renan");
    expect(resultado).toThrow("Caractere estranho detectado");
  });

  it("Operação de Subtração", () => {
    let resultado = calculadora.sub(1, 2)
    expect(resultado).toEqual(-1);

    resultado = calculadora.sub(1, 1);
    expect(resultado).toEqual(0);

    resultado = calculadora.sub(99, 100);
    expect(resultado).toEqual(-1);

    resultado = calculadora.sub(999, 1000);
    expect(resultado).toEqual(-1);

    resultado = () => calculadora.sub("petri", 1);
    expect(resultado).toThrow("Caractere estranho detectado");
  });

  it("Operação de Divisão", () => {
    let resultado = calculadora.div(10, 2)
    expect(resultado).toEqual(5);

    resultado = calculadora.div(100, 50);
    expect(resultado).toEqual(2);

    resultado = calculadora.div(9, 5);
    expect(resultado).toEqual(1.8);

    resultado = calculadora.div(2, 8);
    expect(resultado).toEqual(0.25);

    resultado = () => calculadora.div(9, "fausto");
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = () => calculadora.div("caixeta", 5);
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = calculadora.div(5, 7);
    expect(resultado).toEqual(0.7142857142857143);

    resultado = calculadora.div(999999999, 1);
    expect(resultado).toEqual(999999999);

    resultado = calculadora.div(8888888, 3);
    expect(resultado).toEqual(2962962.6666666665);
  });

  it("Operação de Multiplicação", () => {
    let resultado = calculadora.mult(3, 2)
    expect(resultado).toEqual(6);

    resultado = calculadora.mult(50, 2)
    expect(resultado).toEqual(100);

    resultado = calculadora.mult(10, 10);
    expect(resultado).toEqual(100);

    resultado = () => calculadora.mult("werlich", 2)
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = () => calculadora.mult("souza",10)
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = calculadora.mult(9999999999999,1);
    expect(resultado).toEqual(9999999999999);

    resultado = calculadora.mult(9999999999999,99999);
    expect(resultado).toEqual(999989999999900000);

    resultado =  calculadora.mult(34.5,2);
    expect(resultado).toEqual(69);

  });

  it("Operação de potência", () => {
    let resultado = calculadora.pot(3, 2)
    expect(resultado).toEqual(9);

    resultado = calculadora.pot(2, 3)
    expect(resultado).toEqual(8);

    resultado = calculadora.pot(5, 2)
    expect(resultado).toEqual(25);

    resultado = calculadora.pot(10, 2)
    expect(resultado).toEqual(100);

    resultado = calculadora.pot(10, 3)
    expect(resultado).toEqual(1000);

    resultado = () => calculadora.pot("pedro", 2)
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = calculadora.pot(3,3)
    expect(resultado).toEqual(27);

    resultado = calculadora.pot(1, 2)
    expect(resultado).toEqual(1);

    resultado = calculadora.pot(0, 9901290319032)
    expect(resultado).toEqual(0);

  });

  it("Operação de Raiz Quadrada", () => {
    let resultado = calculadora.raiz(200)
    expect(resultado).toEqual(14.142135623730951);
    resultado = calculadora.raiz(10)

    resultado = calculadora.raiz(10)
    expect(resultado).toEqual(3.1622776601683795);
    resultado = calculadora.raiz(10)
    
    resultado = calculadora.raiz(5)
    expect(resultado).toEqual( 2.23606797749979);
    resultado = calculadora.raiz(10)

    resultado = calculadora.raiz(15)
    expect(resultado).toEqual(3.872983346207417);
    resultado = calculadora.raiz(10)
    
    resultado = () => calculadora.raiz("pedro", 2)
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = () => calculadora.raiz("marcelo", 2)
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = () => calculadora.raiz("sara", 2)
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = () => calculadora.raiz("pedra", 2)
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = () => calculadora.raiz("renaldo", 2)
    expect(resultado).toThrow("Caractere estranho detectado");
  });
});