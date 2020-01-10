import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanFieldValue
 */
interface IKobanFieldValue {
  FieldId: KobanNullable<string>
  Value: KobanNullable<string>
}

/**
 *
 *
 * @class KobanFieldValue
 */
class KobanFieldValue {
  /**
   *
   *
   * @type {string}
   * @memberof KobanFieldValue
   */
  public FieldId?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanFieldValue
   */
  public Value?: string

  /**
   * Creates an instance of KobanFieldValue.
   * @param {Partial<IKobanFieldValue>} fieldValue
   * @memberof KobanFieldValue
   */
  constructor(fieldValue: Partial<IKobanFieldValue> = {}) {
    const { FieldId, Value } = fieldValue
    if (FieldId) {
      this.FieldId = FieldId
    }
    if (Value || Value === 'false' || Value === '0') {
      this.Value = Value
    }
  }
}

export { IKobanFieldValue, KobanFieldValue }
