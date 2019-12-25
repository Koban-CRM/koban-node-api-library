import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanDeal, KobanDeal } from './deal'
import { IKobanLineQuote, KobanLineQuote } from './lineQuote'
import { KobanNullable } from './interfaces'

/**
 *
 *
 * @interface IKobanQuote
 * @extends {IKobanBaseModel}
 */
interface IKobanQuote extends IKobanBaseModel {
  Label: KobanNullable<string>
  Status: KobanNullable<string>
  Number: KobanNullable<string>
  Deal: KobanNullable<Partial<IKobanDeal>>
  IsWon: KobanNullable<boolean>
  Datesent: KobanNullable<Date | string>
  Sections: KobanNullable<
    Array<
      Partial<{
        Label: KobanNullable<string>
        Comments: KobanNullable<string>
        Lines: KobanNullable<Partial<IKobanLineQuote>[]>
      }>
    >
  >
}

/**
 *
 *
 * @class KobanQuote
 * @extends {KobanBaseModel}
 */
class KobanQuote extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanQuote
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanQuote
   */
  public Status?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanQuote
   */
  public Number?: string
  /**
   *
   *
   * @type {Deal}
   * @memberof KobanQuote
   */
  public Deal?: KobanDeal
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanQuote
   */
  public IsWon?: boolean
  /**
   *
   *
   * @type {Date}
   * @memberof KobanQuote
   */
  public Datesent?: Date
  /**
   *
   *
   * @type {Array<{
   *     Label: string;
   *     Comments: string;
   *     Lines: KobanLineQuote[];
   *   }>}
   * @memberof KobanQuote
   */
  public Sections?: Array<{
    Label?: string
    Comments?: string
    Lines?: KobanLineQuote[]
  }>

  /**
   * Creates an instance of KobanQuote.
   * @param {Partial<IKobanQuote>} [quote={}]
   * @memberof KobanQuote
   */
  constructor(quote: Partial<IKobanQuote> = {}) {
    super(quote)
    const {
      Label,
      Status,
      // tslint:disable-next-line: variable-name
      Number,
      Deal,
      IsWon,
      Datesent,
      Sections
    } = quote
    this.Label = Label ? Label : undefined
    this.Status = Status ? Status : undefined
    this.Number = Number ? Number : undefined
    this.Deal = Deal ? new KobanDeal(Deal) : undefined
    this.IsWon = IsWon ? IsWon : undefined
    if (Datesent) {
      this.Datesent = Datesent instanceof Date ? Datesent : new Date(Datesent)
    } else {
      this.Datesent = undefined
    }
    this.Sections = Sections
      ? Sections.map(element => {
          return {
            Comments: element.Comments ? element.Comments : undefined,
            Label: element.Label ? element.Label : undefined,
            Lines: element.Lines
              ? element.Lines.map(line => {
                  return new KobanLineQuote(line)
                })
              : []
          }
        })
      : []
  }
}

export { IKobanQuote, KobanQuote }
