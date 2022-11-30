import { expect } from 'chai'

type Character = {
    name: string;
    health: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

const generateCharacter = (name: unknown): Character => {
    // TODO: define function
    return { name, health: 10, strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0 }; 
}

describe('[Backend] Level 1', () => {
    it('Should create a character with correct stats', () => {
        const character = generateCharacter('ShadowyDnD')
        expect(character.name).eq('ShadowyDnD')
        expect(character.strength).greaterThan(0);
        expect(character.dexterity).greaterThan(0);
        expect(character.constitution).greaterThan(0);
        expect(character.intelligence).greaterThan(0);
        expect(character.wisdom).greaterThan(0);
        expect(character.charisma).greaterThan(0);
        expect(10 - Math.floor((character.constitution - 10)/2)).eq(character.health);
    })
})
