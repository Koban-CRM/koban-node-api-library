import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanIban
 */
interface IKobanIban {
  BANQUE: KobanNullable<string>
  GUICHET: KobanNullable<string>
  NCPT: KobanNullable<string>
  KEY: KobanNullable<string>
  SWIFT: KobanNullable<string>
  IBAN: KobanNullable<string>
}

/**
 *
 *
 * @class KobanIban
 */
class KobanIban {
  /**
   *
   *
   * @type {string}
   * @memberof KobanIban
   */
  public BANQUE?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanIban
   */
  public GUICHET?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanIban
   */
  public NCPT?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanIban
   */
  public KEY?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanIban
   */
  public SWIFT?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanIban
   */
  public IBAN?: string

  /**
   * Creates an instance of KobanIban.
   * @param {Partial<IKobanIban>} [iban={}]
   * @memberof KobanIban
   */
  constructor(iban: Partial<IKobanIban> = {}) {
    const { BANQUE, GUICHET, NCPT, KEY, SWIFT, IBAN } = iban
    this.BANQUE = BANQUE ? BANQUE : undefined
    this.GUICHET = GUICHET ? GUICHET : undefined
    this.NCPT = NCPT ? NCPT : undefined
    this.KEY = KEY ? KEY : undefined
    this.SWIFT = SWIFT ? SWIFT : undefined
    this.IBAN = IBAN ? IBAN : undefined
  }
}

export { IKobanIban, KobanIban }
