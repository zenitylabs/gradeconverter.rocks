import { fixture, expect, defineCE } from '@open-wc/testing';
//import { selectOption } from '@web/test-runner-commands';
import { GradeConverter } from '../src/GradeConverter.js';

describe('GradeConverter', () => {
  it('has a default knownSystem "ewbank"', async () => {
    const tag = defineCE(class extends GradeConverter {});

    const el = await fixture<GradeConverter>(`<${tag}></${tag}>`);
    expect(el.knownSystem).to.equal('ewbank');
    expect(el.unknownSystem).to.equal('yds');
    expect(el.knownGrade).to.equal('17');
    expect(el.helloWorld()).to.equal('Hello world');
    expect(el.unknownGrade[0]).to.equal('5.9');

    //await selectOption({ selector: '#knownGrade', label: '18' });

    // await waitUntil(() => { console.log(el.knownGrade); el.knownGrade === '18' }, 'Element did not become ready');
    expect(el.unknownGrade[0]).to.equal('5.10a');
  });

  /*
 it('increases the counter on button click', async () => {
    const el = await fixture<GradeConverter>(html`<grade-converter></grade-converter>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<GradeConverter>(html`<grade-converter title="attribute title"></grade-converter>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<GradeConverter>(html`<grade-converter></grade-converter>`);

    await expect(el).shadowDom.to.be.accessible();
  });
  */
});
