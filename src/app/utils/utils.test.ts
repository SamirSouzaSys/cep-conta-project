import {expect, test, jest} from '@jest/globals';
import {validaCep} from './cep';
import getConta from './axiosCep';
import { describe } from 'node:test';

describe('verify cep function - number of characters', () => {
    test('8 - To be OK!', () => {
        expect(validaCep('65066320')).toBe(true)
    })
    
    test('7 - to be false', () => {
        expect(validaCep('65066320')).toBe(false)
    })
})

const cepType = {
    "bairro": "Turu",
    "cep": "65066-320",
    "complemento":"",
    "ddd": "98",
    "gia":"",
    "ibge": "2111300",
    "localidade": "São Luís",
    "logradouro": "Rua General Artur Carvalho",
    "siafi": "0921",
    "uf": "MA"
}

const getConta = jest.fn()
getConta.mockReturnValue(cepType)

describe('verify fetchCep function', () => {
    test('verify fetchCep', () => {
        expect(getConta('65066320')).toBe(cepType)
        // expect(fetchCep('6506632')).toBe(false)
    })
})