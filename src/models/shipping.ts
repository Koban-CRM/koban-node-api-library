import { KobanNullable } from './types'

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
    if (Amount || Amount === 0) {
      this.Amount = Amount
    }
    if (TaxAmount || TaxAmount === 0) {
      this.TaxAmount = TaxAmount
    }
    if (AmountTtc || AmountTtc === 0) {
      this.AmountTtc = AmountTtc
    }
    if (Reference) {
      this.Reference = Reference
    }
    if (ShippingMode) {
      this.ShippingMode = ShippingMode
    }
  }
}

export { IKobanShipping, KobanShipping }
