import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanUser
 * @extends {IKobanBaseModel}
 */
interface IKobanUser extends IKobanBaseModel {
  FullName: KobanNullable<string>
  Extcode: KobanNullable<string>
  EMail: KobanNullable<string>
}

/**
 *
 *
 * @class KobanUser
 * @extends {KobanBaseModel}
 */
class KobanUser extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanUser
   */
  public FullName?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanUser
   */
  public Extcode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanUser
   */
  public EMail?: string

  /**
   * Creates an instance of KobanUser.
   * @param {Partial<IKobanUser>} [user={}]
   * @memberof KobanUser
   */
  constructor(user: Partial<IKobanUser> = {}) {
    super(user)
    const { FullName, Extcode, EMail } = user
    if (FullName) {
      this.FullName = FullName
    }
    if (Extcode) {
      this.Extcode = Extcode
    }
    if (EMail) {
      this.EMail = EMail
    }
  }
}

export { IKobanUser, KobanUser }
