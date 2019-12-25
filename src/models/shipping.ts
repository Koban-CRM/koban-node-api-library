import { KobanNullable } from './interfaces'

/**
 *
 *
 * @interface IKobanShipping
 */
interface IKobanShipping {
  Amount: KobanNullable<number>
  TaxAmount: KobanNullable<number>
  AmountTtc: KobanNullable<number>
  Reference: KobanNullable<string>
  ShippingMode: KobanNullable<string>
}

/**
 *
 *
 * @class KobanShipping
 */
class KobanShipping {
  /**
   *
   *
   * @type {number}
   * @memberof KobanShipping
   */
  public Amount?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanShipping
   */
  public TaxAmount?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanShipping
   */
  public AmountTtc?: number
  /**
   *
   *
   * @type {string}
   * @memberof KobanShipping
   */
  public Reference?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanShipping
   */
  public ShippingMode?: string

  /**
   * Creates an instance of KobanShipping.
   * @param {Partial<IKobanShipping>} [shipping={}]
   * @memberof KobanShipping
   */
  constructor(shipping: Partial<IKobanShipping> = {}) {
    const { Amount, TaxAmount, AmountTtc, Reference, ShippingMode } = shipping
    this.Amount = Amount ? Amount : undefined
    this.TaxAmount = TaxAmount ? TaxAmount : undefined
    this.AmountTtc = AmountTtc ? AmountTtc : undefined
    this.Reference = Reference ? Reference : undefined
    this.ShippingMode = ShippingMode ? ShippingMode : undefined
  }
}

export { IKobanShipping, KobanShipping }
