import { IKobanLine, KobanLine } from './line'
import { KobanNullable } from './interfaces'

/**
 *
 *
 * @interface IKobanLineQuote
 */
interface IKobanLineQuote extends IKobanLine {
  Label: KobanNullable<string>
  Notes: KobanNullable<string>
}

/**
 *
 *
 * @class KobanLineQuote
 * @extends {KobanLine}
 */
class KobanLineQuote extends KobanLine {
  /**
   *
   *
   * @type {string}
   * @memberof KobanLineQuote
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanLineQuote
   */
  public Notes?: string

  /**
   * Creates an instance of KobanLineQuote.
   * @param {Partial<IKobanLineQuote>} [lineQuote={}]
   * @memberof KobanLineQuote
   */
  constructor(lineQuote: Partial<IKobanLineQuote> = {}) {
    super(lineQuote)
    const { Label, Notes } = lineQuote
    this.Label = Label ? Label : undefined
    this.Notes = Notes ? Notes : undefined
  }
}

export { IKobanLineQuote, KobanLineQuote }
