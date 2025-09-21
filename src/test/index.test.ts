// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {addition, soustraction, multiplication, division} from '../index';

describe('Calculatrice', () => {
    test('Additionne deux nombres', () => {
        expect(addition(12, 6)).toEqual(18);
    });

    test('Soustrait deux nombres', () => {
        expect(soustraction(12, 6)).toEqual(6);
    });

    test('Multiplie deux nombres', () => {
        expect(multiplication(12, 6)).toEqual(72);
    });

    test('Divise deux nombres', () => {
        expect(division(12, 6)).toEqual(2);
    });
});
