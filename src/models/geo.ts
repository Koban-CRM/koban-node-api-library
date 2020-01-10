import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanGeo
 */
interface IKobanGeo {
  X: KobanNullable<number>
  Y: KobanNullable<number>
}

/**
 *
 *
 * @class KobanGeo
 */
class KobanGeo {
  /**
   *
   *
   * @type {number}
   * @memberof KobanGeo
   */
  public X?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanGeo
   */
  public Y?: number

  /**
   * Creates an instance of KobanGeo.
   * @param {Partial<IKobanGeo>} [geo={}]
   * @memberof KobanGeo
   */
  constructor(geo: Partial<IKobanGeo> = {}) {
    const { X, Y } = geo
    if (X) {
      this.X = X
    }
    if (Y) {
      this.Y = Y
    }
  }
}

export { IKobanGeo, KobanGeo }
