import { expect } from '@open-wc/testing';
import { convertGrade } from '../src/grade_converter.js';

describe('grade_converter', () => {
  it('it converts grades correctly', async () => {
    let [knownSystem, knownGrade, unknownSystem] = ['yds', '5.9', 'ewbank'];
    let unknownGrade = convertGrade(knownSystem, knownGrade, unknownSystem);

    expect(unknownGrade.length).to.equal(1);
    expect(unknownGrade[0]).to.equal('17');

    [knownSystem, knownGrade, unknownSystem] = ['ewbank', '17', 'yds'];
    unknownGrade = convertGrade(knownSystem, knownGrade, unknownSystem);

    expect(unknownGrade.length).to.equal(1);
    expect(unknownGrade[0]).to.equal('5.9');

    [knownSystem, knownGrade, unknownSystem] = ['french', '6c', 'yds'];
    unknownGrade = convertGrade(knownSystem, knownGrade, unknownSystem);

    expect(unknownGrade.length).to.equal(2);
    expect(unknownGrade[0]).to.equal('5.11a');
    expect(unknownGrade[1]).to.equal('5.11b');
  });
});
