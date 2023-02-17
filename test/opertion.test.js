const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operation");

describe("Teste da calculadora", () => {
/*
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
*/
  it("Operação de Subtração", () => {
    let resultado = calculadora.sub(1, 2)
    expect(resultado).toEqual(-1);

    resultado = calculadora.sub(1, 1);
    expect(resultado).toEqual(0);
    
    resultado = calculadora.sub(99, 100);
    expect(resultado).toEqual(-1);

    resultado = calculadora.sub(999, 1000);
    expect(resultado).toEqual(-1);

    resultado = calculadora.sub("petri", 1);
    expect(resultado).toThrow("Caractere estranho detectado");
  });
/*
  it("Operação de Divisão", () => {
    let resultado = calculadora.div(10, 2)
    expect(resultado).toEqual(5);

    resultado =  calculadora.div(100,50);
    expect(resultado).toEqual(2);

    resultado = calculadora.div(9,5);
    expect(resultado).toEqual(1.8);

    resultado = calculadora.div(2,8);
    expect(resultado).toEqual(0.25);

    resultado = calculadora.div(9,"fausto");
    expect(resultado).toThrow("Caractere estranho detectado");

    resultado = calculadora.div("caixeta",5);
    expect(resultado).toEqual("Caractere estranho detectado");

    resultado = calculadora.div(5,7);
    expect(resultado).toEqual(0.7142857143);

    resultado = calculadora.div(999999999,1);
    expect(resultado).toEqual(111111111);

    resultado = calculadora.div(8888888,3);
    expect(resultado).toEqual(2962962.667);
  });

  it("Operação de potência", () => {
    let resultado = calculadora.pot(3, 2)
    expect(resultado).toEqual(9)
  });

  it("Operação de Multiplicação", () => {
    let resultado = calculadora.mult(3, 2)
    expect(resultado).toEqual(6)
  });

  it("Operação de Raiz Quadrada", () => {
    let resultado = calculadora.raiz(200)
    expect(resultado).toEqual(14.142135623730951)
  });*/
});