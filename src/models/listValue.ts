import { IKobanBaseModel, KobanBaseModel } from './baseModel'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanListValue
 * @extends {IKobanBaseModel}
 */
interface IKobanListValue extends IKobanBaseModel {
  Label: KobanNullable<string>
  Code: KobanNullable<string>
}
/**
 *
 *
 * @class KobanListValue
 * @extends {KobanBaseModel}
 */
class KobanListValue extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanListValue
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanListValue
   */
  public Code?: string

  /**
   * Creates an instance of KobanListValue.
   * @param {Partial<IKobanListValue>} [listValue={}]
   * @memberof KobanListValue
   */
  constructor(listValue: Partial<IKobanListValue> = {}) {
    super(listValue)
    const { Label, Code } = listValue
    if (Label) {
      this.Label = Label
    }
    if (Code) {
      this.Code = Code
    }
  }
}

export { IKobanListValue, KobanListValue }
