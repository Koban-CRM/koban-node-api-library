import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanProductDeclinaison
 */
interface IKobanProductDeclinaison {
  Guid: KobanNullable<string>
  Label: KobanNullable<string>
  Values: KobanNullable<
    Array<
      Partial<{
        BarCode: KobanNullable<string>
        Guid: KobanNullable<string>
        Label: KobanNullable<string>
      }>
    >
  >
}

/**
 *
 *
 * @class KobanProductDeclinaison
 */
class KobanProductDeclinaison {
  /**
   *
   *
   * @type {string}
   * @memberof KobanProductDeclinaison
   */
  public Guid?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProductDeclinaison
   */
  public Label?: string
  /**
   *
   *
   * @type {Array<{
   *     Guid?: string;
   *     Label?: string;
   *     BarCode?: string;
   *   }>}
   * @memberof KobanProductDeclinaison
   */
  public Values?: Array<{
    BarCode?: string
    Guid?: string
    Label?: string
  }>

  /**
   * Creates an instance of KobanProductDeclinaison.
   * @param {Partial<IKobanProductDeclinaison>} [productDeclinaison={}]
   * @memberof KobanProductDeclinaison
   */
  constructor(productDeclinaison: Partial<IKobanProductDeclinaison> = {}) {
    const { Guid, Label, Values } = productDeclinaison
    if (Guid) {
      this.Guid = Guid
    }
    if (Label) {
      this.Label = Label
    }
    this.Values = Values
      ? Values.map(element => {
          const { BarCode, Guid, Label } = element
          let obj: {
            BarCode?: string
            Guid?: string
            Label?: string
          } = {}
          if (BarCode) {
            obj.BarCode = BarCode
          }
          if (Guid) {
            obj.Guid = Guid
          }
          if (Label) {
            obj.Label = Label
          }
          return obj
        })
      : []
  }
}

export { IKobanProductDeclinaison, KobanProductDeclinaison }
