import { KobanNullable } from './interfaces'

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
    this.Guid = Guid ? Guid : undefined
    this.Label = Label ? Label : undefined
    this.Values = Values
      ? Values.map(element => {
          return {
            BarCode: element.BarCode ? element.BarCode : undefined,
            Guid: element.Guid ? element.Guid : undefined,
            Label: element.Label ? element.Label : undefined
          }
        })
      : []
  }
}

export { IKobanProductDeclinaison, KobanProductDeclinaison }
