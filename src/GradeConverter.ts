import { html, css, LitElement } from 'lit';
import { live } from 'lit-html/directives/live.js';
import { property, customElement } from 'lit/decorators.js';
import * as gc from './grade_converter.js'

@customElement('grade-converter')
export class GradeConverter extends LitElement {
  static styles = css`

    :host {
      font-size: 1.7em;
      display: block;
      font-weight: bold;
      padding: 1em;
      color: var(--grade-converter-primary-color, #000);
      --grade-converter-primary-color: #0093E9;
    }

    #resultContainer {
      float: left;
      padding: 1.2em 0em;
    }

    #result {
      font-size: 3.2em;
      margin-top: 0;
    }

    #unknownGradeSystemContainer {
      float: left;
    }

    h1 {
      font-size: 2.5em;
      padding: 0;
      margin: 0;
      border; 0;
    }

    fieldset {
      border: 0;
      padding-left: 0;
    }

    select {
      // reset appearance
      outline: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      &::-ms-expand { display: none };

      font-size: 1em;
      font-weight: 900;
      line-height: 4em;
      height: 4em;
      min-width: 16em;

      //display: block;
      background-color: var(--grade-converter-primary-color);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='60px' height='80px' viewBox='0 0 50 80' xml:space='preserve'%3E%3Cpolyline fill='none' stroke='cornflowerblue' stroke-width='8' stroke-linecap='round' stroke-linejoin='round' points=' 45.63,75.8 0.375,38.087 45.63,0.375 '/%3E%3C/svg%3E");
      background-position: right 1em;
      background-repeat: no-repeat;
      background-size: auto 50%;
      border-radius: .3em;
      text-align-last: center;
      border:none;
      color: #ffffff;
      padding: .2em .2em .2em .2em;
      margin-top: .2em;
      cursor: pointer;
    }

    select option {
        font-size: 1.2em;
    }

  `;

  @property({ type: Array<string>})
  gradeSystems: string[] = []

  @property({ type: String })
  public knownSystem = 'yds'

  @property({ type: String })
  public knownGrade = '5.9'

  @property({ type: String })
  public unknownSystem  = 'french'

  @property({ type: Array<String> })
  public unknownGrade: string[] = []

  @property({ type: String })
  public unknownGradeHumanReadable = ''

  constructor() {
    super()
    this.gradeSystems = gc.listSystems()
    this.__calculateUnknownGrade()
  }

  __calculateUnknownGrade() {
    console.log(`Calculating grade. Known ${this.knownSystem} grade: ${this.knownGrade} unknown: ${this.unknownSystem}`)
    this.unknownGrade = gc.convertGrade(this.knownSystem, this.knownGrade, this.unknownSystem)
    if (this.unknownGrade.length > 1) {
      const [minGrade, maxGrade] = this.unknownGrade
      this.unknownGradeHumanReadable = `${minGrade}-${maxGrade}`
    } else {
      this.unknownGradeHumanReadable = `${this.unknownGrade[0]}`
    }
  }

  __knownSystemChanged(e: Event) {
    const input = e.target as HTMLInputElement
    console.log("System Changed", input.value)

    console.log("Old known grade", this.knownGrade)
    this.knownGrade = gc.convertGrade(this.knownSystem, this.knownGrade, input.value)[0]
    console.log("New known grade", this.knownGrade)

    this.knownSystem = input.value
    this.__calculateUnknownGrade()
    this.requestUpdate()
  }

  __unknownSystemChanged(e: Event) {
    const input = e.target as HTMLInputElement
    console.log("Unknown system Changed", input.value)
    this.unknownSystem = input.value
    this.__calculateUnknownGrade()
  }


  __knownGradeChanged(e: Event) {
    const input = e.target as HTMLInputElement
    console.log("Grade Changed", input.value)
    this.knownGrade = input.value
    this.__calculateUnknownGrade()
  }


  __knownGradeSystemInputHTML() {
      return html`
        <select
          id="knownSystem"
          class="select"
          @change=${this.__knownSystemChanged}
          .value="${this.knownSystem}">
          ${this.gradeSystems.map((gradeSystem: string) => {
            const selected = (gradeSystem === this.knownSystem)
            return html`<option .value=${gradeSystem} ?selected=${live(selected)}>${gc.humanizeGradeName(gradeSystem)}</option>`
          })}
        </select>`
  }

  __knownGradeListInputHTML() {
    console.log("Updating known grade list!")
    return html`
      <select
        id="knownGrade"
        class="select"
        @change=${this.__knownGradeChanged}
        .value="${this.knownGrade}">
        ${gc.listGrades(this.knownSystem).map((grade: string) => {
            const selected = (grade === this.knownGrade)
            return html`<option .value=${grade} .selected=${live(selected)}>${grade}</option>`
        })}
      </select>`
  }

  __unknownGradeSystemInputHTML() {
      return html`
        <select
          id="unkonwnSystem"
          class="select"
          @change=${this.__unknownSystemChanged}
          .value="${this.unknownSystem}">
          ${this.gradeSystems.map((gradeSystem: string) => {
            const selected = (gradeSystem === this.unknownSystem)
            return html`<option .value=${gradeSystem} ?selected=${live(selected)}>${gc.humanizeGradeName(gradeSystem)}</option>`
          })}

        </select>`
  }

  render() {
    return html`
      <h1>Climbing Grade Converter</h1>
      <br>
      <fieldset>
        <legend> From </legend>
        ${this.__knownGradeSystemInputHTML()}
        ${this.__knownGradeListInputHTML()}
      </fieldset>
      <div>
          <div id="unknownGradeSystemContainer">
            <fieldset>
              <legend> To </legend>
              ${this.__unknownGradeSystemInputHTML()}
            </fieldset>
          </div>
          <div id="resultContainer">
            <p id="result"><span>${this.unknownGradeHumanReadable}</span></p>
          </div>
      </div>
    `;
  }
}
