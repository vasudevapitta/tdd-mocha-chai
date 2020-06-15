import {expect} from 'chai';

import {isAnagram} from './anagrams';

describe('isAnagram - basic functionality', () => {
    it('returns true if both words have same amount of same letters', ()=>{
        const expected = true;
        const actual = isAnagram('below', 'elbow');
        expect(actual).to.deep.equal(expected);
    });    

    it('returns false if either of the words have extra letters', ()=>{
        const expected = false;
        const actual = isAnagram('below', 'elbows');
        expect(actual).to.deep.equal(expected);
    });

    it('returns false when the strings have same letters in different quantities', ()=>{
        const expected = false;
        const actual = isAnagram('listens', 'silent');
        expect(actual).to.deep.equal(expected);
    }); 
});