import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanListValue, KobanListValue } from './listValue'
import { KobanNullable } from './types'
import { KobanUser, IKobanUser } from './user'
import { IKobanDeal, KobanDeal } from './deal'
import { IKobanThird, KobanThird } from './third'
import { IKobanContact, KobanContact } from './contact'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanTag, KobanTag } from './tag'

/**
 *
 *
 * @interface IKobanActionType
 * @extends {IKobanBaseModel}
 */
interface IKobanActionType extends IKobanBaseModel {
  Label: KobanNullable<string>
  Code: KobanNullable<string>
  Color: KobanNullable<string>
  Onagenda: KobanNullable<boolean>
}

/**
 *
 *
 * @class KobanActionType
 * @extends {KobanBaseModel}
 */
class KobanActionType extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanActionType
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanActionType
   */
  public Code?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanActionType
   */
  public Color?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanActionType
   */
  public Onagenda?: boolean

  /**
   * Creates an instance of KobanActionType.
   * @param {Partial<IKobanActionType>} [actionType={}]
   * @memberof KobanActionType
   */
  constructor(actionType: Partial<IKobanActionType> = {}) {
    super(actionType)
    const { Label, Code, Color, Onagenda } = actionType
    if (Label) {
      this.Label = Label
    }
    if (Code) {
      this.Code = Code
    }
    if (Color) {
      this.Color = Color
    }
    if (Onagenda || Onagenda === false) {
      this.Onagenda = Onagenda
    }
  }
}

export { IKobanActionType, KobanActionType }
