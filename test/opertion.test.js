const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operation");

describe("Teste da calculadora", () => {
  it(" Operação de Soma", () => {
    let resultado = calculadora.sum(1, 2);
    expect(resultado).toEqual(3);
  });
  const resultado = calculadora.sum(-1, -1);
  expect(resultado).toEqual(-2);
});

it("Operação de Subtração", () => {
    let resultado = calculadora.sub(1,2)
    expect(resultado).toEqual(-1)
})

it("Operação de Divisão", () => {
    let resultado = calculadora.div(10,2)
    expect(resultado).toEqual(5)
})

it("Operação de potência", () => {
    let resultado = calculadora.pot(3,2)
    expect(resultado).toEqual(9)
})

it("Operação de Multiplicação")