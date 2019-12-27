import { IKobanProduct, KobanProduct } from './product'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanLine
 */
interface IKobanLine {
  Product: KobanNullable<Partial<IKobanProduct>>
  Quantity: KobanNullable<number>
  Vat: KobanNullable<number>
  Red: KobanNullable<number>
  Ht: KobanNullable<number>
  Ttc: KobanNullable<number>
  Prht: KobanNullable<number>
  UnitPrice: KobanNullable<number>
  Extcode: KobanNullable<string>
  Comments: KobanNullable<string>
  DeclinaisonCode: KobanNullable<string>
}

/**
 *
 *
 * @class KobanLine
 */
class KobanLine {
  /**
   * Produit associé. Doit être de type KobanProduct avec la propriété Reference renseignée
   *
   * @type {Product}
   * @memberof KobanLine
   */
  public Product?: KobanProduct
  /**
   * Quantité
   *
   * @type {number}
   * @memberof KobanLine
   */
  public Quantity?: number
  /**
   * Taux de TVA
   *
   * @type {number}
   * @memberof KobanLine
   */
  public Vat?: number
  /**
   * Réduction (float)
   *
   * @type {number}
   * @memberof KobanLine
   */
  public Red?: number
  /**
   * Montant HT (float)
   *
   * @type {number}
   * @memberof KobanLine
   */
  public Ht?: number
  /**
   * Montant TTC (float)
   *
   * @type {number}
   * @memberof KobanLine
   */
  public Ttc?: number
  /**
   * Prix de revient (float)
   *
   * @type {number}
   * @memberof KobanLine
   */
  public Prht?: number
  /**
   * Prix unitaire (float)
   *
   * @type {number}
   * @memberof KobanLine
   */
  public UnitPrice?: number
  /**
   * Code externe (provenant d'une autre application par exemple)
   *
   * @type {string}
   * @memberof KobanLine
   */
  public Extcode?: string
  /**
   * Commentaires sur la ligne
   *
   * @type {string}
   * @memberof KobanLine
   */
  public Comments?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanLine
   */
  public DeclinaisonCode?: string

  /**
   * Creates an instance of KobanLine.
   * @param {Partial<IKobanLine>} [line={}]
   * @memberof KobanLine
   */
  constructor(line: Partial<IKobanLine> = {}) {
    const {
      Product,
      Quantity,
      Vat,
      Red,
      Ht,
      Ttc,
      Prht,
      UnitPrice,
      Extcode,
      Comments,
      DeclinaisonCode
    } = line
    this.Product = Product ? new KobanProduct(Product) : undefined
    this.Quantity = Quantity ? Quantity : undefined
    this.Vat = Vat ? Vat : undefined
    this.Red = Red ? Red : undefined
    this.Ht = Ht ? Ht : undefined
    this.Ttc = Ttc ? Ttc : undefined
    this.Prht = Prht ? Prht : undefined
    this.UnitPrice = UnitPrice ? UnitPrice : undefined
    this.Extcode = Extcode ? Extcode : undefined
    this.Comments = Comments ? Comments : undefined
    this.DeclinaisonCode = DeclinaisonCode ? DeclinaisonCode : undefined
  }
}

export { IKobanLine, KobanLine }
