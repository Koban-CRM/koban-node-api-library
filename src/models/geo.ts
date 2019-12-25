import { KobanNullable } from './interfaces'

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
    this.X = X ? X : undefined
    this.Y = Y ? Y : undefined
  }
}

export { IKobanGeo, KobanGeo }
