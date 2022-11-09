// @ts-nocheck: ignore this file

/**
 * This module initially encodes the Wikipedia Free Climbing table (https://en.wikipedia.org/wiki/Grade_(climbing)#Free_climbing_2)
 */
const gradeTable = {
  yds: [
    '5.0',
    '5.1',
    '5.2',
    '5.3',
    '5.4',
    '5.5',
    '5.6',
    '5.7',
    '5.8',
    '5.9',
    '5.10a',
    '5.10b',
    '5.10c',
    '5.10d',
    '5.11a',
    '5.11b',
    '5.11c',
    '5.11d',
    '5.12a',
    '5.12b',
    '5.12c',
    '5.12d',
    '5.13a',
    '5.13b',
    '5.13c',
    '5.13d',
    '5.14a',
    '5.14b',
    '5.14c',
    '5.14d',
    '5.15a',
    '5.15a',
    '5.15b',
    '5.15c',
    '5.15d',
  ],
  british_tech: [
    '2',
    '2',
    '3',
    '3',
    '4a',
    '4a',
    '4b',
    '4c',
    '5a',
    '5a',
    '5b',
    '5b',
    '5c',
    '5c',
    '6a',
    '6a',
    '6a',
    '6b',
    '6b',
    '6b',
    '6b',
    '6c',
    '6c',
    '6c',
    '7a',
    '7a',
    '7a',
    '7b',
    '7b',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ],
  british_adj: [
    'D',
    'D',
    'D',
    'D',
    'VD',
    'S',
    'HS',
    'VS',
    'E1',
    'E1',
    'E1',
    'E2',
    'E2',
    'E3',
    'E3',
    'E4',
    'E4',
    'E5',
    'E5',
    'E6',
    'E6',
    'E7',
    'E7',
    'E8',
    'E8',
    'E9',
    'E10',
    'E10',
    'E11',
    'E11',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ],
  french: [
    '2',
    '2',
    '3',
    '3',
    '4a',
    '4b',
    '4c',
    '5a',
    '5b',
    '5c',
    '6a',
    '6a+',
    '6b',
    '6b+',
    '6c',
    '6c',
    '6c+',
    '7a',
    '7a+',
    '7a+',
    '7b',
    '7b+',
    '7c+',
    '7c+',
    '8a',
    '8a+',
    '8b',
    '8b+',
    '8c',
    '8c+',
    '9a',
    '9a+',
    '9b',
    '9b+',
    '9c',
  ],
  uiaa: [
    'II',
    'II',
    'II',
    'III',
    'IV',
    'IV+/V-',
    'V',
    'V+',
    'VI-',
    'VI',
    'VI+',
    'VII-',
    'VII',
    'VII+',
    'VIII-',
    'VIII-',
    'VIII',
    'VIII+',
    'VIII+',
    'IX-',
    'IX-',
    'IX',
    'IX+',
    'X-',
    'X-',
    'X',
    'X+',
    'XI-',
    'XI-',
    'XI',
    'XI+',
    'XII-',
    'XII-',
    'XII',
  ],
  saxon: [
    'II',
    'II',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VIIa',
    'VIIa',
    'VIIb',
    'VIIc',
    'VIIIa',
    'VIIa',
    'VIIb',
    'VIIIc',
    'IXa',
    'IXa',
    'IXb',
    'IXc',
    'Xa',
    'Xa',
    'Xb',
    'Xc',
    'XIa',
    'XIa',
    'XIb',
    'XIc',
    'XIIa',
    'XIIa',
    'XIIb',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ],
  ewbank: [
    '3-4',
    '5-6',
    '7',
    '8-9',
    '10',
    '11-12',
    '13',
    '14-15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '21',
    '22',
    '23',
    '24',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
  ],
  ewbank_sa: [
    '3-4',
    '5-6',
    '7',
    '8-9',
    '10',
    '11-12',
    '13',
    '14-15',
    '16',
    '17-18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    'N/A',
  ], // south africa
  nordic_finnish: [
    '2',
    '2',
    '2',
    '3',
    '4',
    '4',
    '5-',
    '5-',
    '5',
    '5+',
    '6-',
    '6',
    '6+',
    '6+',
    '7-',
    '7-',
    '7',
    '7+',
    '7+',
    '8-',
    '8',
    '8',
    '9-',
    '9',
    '9+',
    '10-',
    '10',
    '10+',
    '11-',
    '11',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ],
  nordic_nor: [
    '2',
    '2',
    '2',
    '3',
    '4',
    '4',
    '5-',
    '5-',
    '5',
    '5+',
    '6-',
    '6',
    '6',
    '6+',
    '7-/7',
    '7',
    '7+',
    '7a+',
    '7+/8-',
    '8-',
    '8',
    '8+',
    '8+',
    '9-',
    '9-/9',
    '9',
    '9/9+',
    '9+',
    '9+/10-',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ],
  brazilian: [
    'I',
    'I sup',
    'II',
    'III',
    'III',
    'III sup',
    'IV',
    'IVsup',
    'IVsup',
    'V',
    'VI',
    'VI sup',
    'VI sup',
    '7a',
    '7b',
    '7c',
    '8a',
    '8a',
    '8b',
    '8c',
    '9a',
    '9b',
    '9c',
    '10a',
    '10b',
    '10c',
    '11a',
    '11b',
    '12a',
    '12b',
    '12c',
    '13a',
  ],
  kurtyka: [
    'I',
    'I',
    'II',
    'III',
    'IV',
    'IV+',
    'IV+',
    'V',
    'V',
    'V+',
    'VI',
    'VI+',
    'VI.1',
    'VI.1+',
    'VI.2',
    'VI.2+',
    'VI.3',
    'VI.3',
    'VI.3+',
    'VI.4',
    'VI.4+',
    'VI.4+',
    'VI.5',
    'VI.5+',
    'VI.6',
    'VI.6',
    'VI.6+',
    'VI.7',
    'VI.7+',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
    'N/A',
  ],
};

export function listSystems() {
  return Object.keys(gradeTable);
}

/**
 * The list of a grades for a given system
 *
 * @param {string} The grade ssytem
 *
 * @return {string[]} The list of grades in the given system, without duplicates
 */
export function listGrades(gradeSystem) {
  return [...new Set(gradeTable[gradeSystem])];
}

export function humanizeGradeName(gradeSystem) {
  switch (gradeSystem) {
    case 'yds':
      return 'YDS (US)';
    case 'british_tech':
      return 'British Technical';
    case 'british_adj':
      return 'British Adjectival';
    case 'french':
      return 'French';
    case 'uiaa':
      return 'UIAA';
    case 'saxon':
      return 'Saxon';
    case 'ewbank':
      return 'Ewbank (AU, NZ)';
    case 'ewbank_sa':
      return 'Ewbank (South Africa)';
    case 'nordic_finnish':
      return 'Nordic (Finland)';
    case 'nordic_nor':
      return 'Nordic (Norway)';
    case 'brazilian':
      return 'Brazilian';
    case 'kurtyka':
      return 'Kurtyka';
    default:
      throw new Error(`Unknown grade system: ${gradeSystem}`);
  }
}
/**
 * Given a grade in a known grading system, return the grade(s) from the unknown grading system that corresponds to it
 *
 * @param {string} knownSystem The name of the system from which we know a grade that will be converted to a grade in `unknownGrade`
 * @param {string} knownGrade The grade from the known system for which a grade in `unknownSystem` will be retrieved
 * @param {string} unknownSystem The name of the system in which we want to know the grade that corresponds to `knownGrade` in the `knownSystem`
 *
 * @return {Array<string>} Either a single grade from the unknown system or a range of grades from the unknown
 * system where the first element in the returned tuple is the lowest grade from the unknown range and the second
 * element in the unknown system is the highest grade
 */
export function convertGrade(knownSystem, knownGrade, unknownSystem) {
  const unknownGrade = [];
  gradeTable[knownSystem].forEach((grade, index) => {
    if (grade === knownGrade) {
      // when a match is found and it's the first match, add it
      // when a match is found and it's not the first match, but the _next_ grade from the known system is _not_ the
      // grade being searched for, add it. This marks the end of the "range" when a known grade maps on to multiple
      // unknown grades
      if (
        unknownGrade.length === 0 ||
        gradeTable?.[knownSystem]?.[index + 1] !== knownGrade
      ) {
        unknownGrade.push(gradeTable[unknownSystem][index]);
      }
    }
  });

  return unknownGrade;
}
