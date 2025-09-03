const { describe } = require('mocha')
const { somarDoisNumeros } = require('../src/calculadora')
const { expect, assert } = require('chai')

describe ('Testes da Função de soma', () => {
  it ('A Função deve ser capaz de somar dois numeros postivos' , () => {
    // Coletar o resultado da Função
    const resultadoDaSoma = somarDoisNumeros(5, 3)
    // Compara o reultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(8)
  })

  it ('A funcao deve ser capaz de somar um numero positivo e um negativo' , () => {
      // Coletar o resultado da Função
      const resultadoDaSoma = somarDoisNumeros (50, -15)
      // Compara o reultado com o valor que você espera
      expect(resultadoDaSoma).to.equal(35)
  })

})
