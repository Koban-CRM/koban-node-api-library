import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanBaseModel
 */
interface IKobanBaseModel {
  Guid: KobanNullable<string>
  DCreated: KobanNullable<number>
  Created: KobanNullable<Date | string>
  DUpdated: KobanNullable<number>
  Updated: KobanNullable<Date | string>
  // [propName: string]: any;
}

/**
 *
 *
 * @abstract
 * @class KobanBaseModel
 */
abstract class KobanBaseModel {
  /**
   * Identifiant de l'object
   *
   * @type {string}
   * @memberof KobanBaseModel
   */
  public Guid?: string
  /**
   * Date de derniere mise à jour de l'object en ms
   *
   * @type {number}
   * @memberof KobanBaseModel
   */
  public DUpdated?: number
  /**
   * Date de dernière mise à jour de l'object - Object Date
   *
   * @type {Date}
   * @memberof KobanBaseModel
   */
  public Updated?: Date
  /**
   * Date de création de l'object en ms
   *
   * @type {number}
   * @memberof KobanBaseModel
   */
  public DCreated?: number
  /**
   * Date de création de l'object - Object Date
   *
   * @type {Date}
   * @memberof KobanBaseModel
   */
  public Created?: Date

  /**
   * Creates an instance of KobanBaseModel.
   * @param {Partial<IKobanBaseModel>} [base={}]
   * @memberof KobanBaseModel
   */
  constructor(base: Partial<IKobanBaseModel> = {}) {
    const { Guid, DUpdated, Updated, DCreated, Created } = base
    if (Guid) {
      this.Guid = Guid
    }
    if (DUpdated || DUpdated === 0) {
      this.DUpdated = DUpdated
    }
    if (Updated) {
      this.Updated = Updated instanceof Date ? Updated : new Date(Updated)
    }
    if (DCreated || DCreated === 0) {
      this.DCreated = DCreated
    }
    if (Created) {
      this.Created = Created instanceof Date ? Created : new Date(Created)
    }
  }
}

export { IKobanBaseModel, KobanBaseModel }
