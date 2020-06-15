import { isEqual } from 'lodash'; //npm install lodash - to use isEqual which checks if two objects are deep equal to each other
import { getLetterCount } from './letter-count';

export const isAnagram=(string1, string2)=>{

    const stringLetterCount1 = getLetterCount(string1);
    const stringLetterCount2 = getLetterCount(string2);

    return isEqual(stringLetterCount1, stringLetterCount2);

}