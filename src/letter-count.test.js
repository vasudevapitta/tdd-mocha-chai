import {expect} from 'chai';

import {getLetterCount} from './letter-count';

describe('getLetterCount - basic functionality', () => {
    it('returns an empty object when passed an empty string', ()=>{
        const expected = {};
        const actual = getLetterCount('');
        expect(actual).to.deep.equal(expected);
    });

    it('returns a count of each character for a word with only 1 of each letter CAT', ()=>{
        const expected = {c:1, a:1, t:1};
        const actual = getLetterCount('cat');
        expect(actual).to.deep.equal(expected);
    });
});