import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanProductCategory, KobanProductCategory } from './productCategory'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanProductDeclinaison, KobanProductDeclinaison } from './productDeclinaison'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanProduct
 * @extends {IKobanBaseModel}
 */
interface IKobanProduct extends IKobanBaseModel {
  Reference: KobanNullable<string>
  Label: KobanNullable<string>
  Comments: KobanNullable<string>
  eShopURL: KobanNullable<string>
  Obsolete: KobanNullable<boolean>
  Catproduct: KobanNullable<Partial<IKobanProductCategory>>
  MoreFields: KobanNullable<Partial<IKobanFieldValue>[]>
  Prht: KobanNullable<number>
  Margin: KobanNullable<number>
  Ht: KobanNullable<number>
  Ttc: KobanNullable<number>
  Vat: KobanNullable<number>
  Unit: KobanNullable<string>
  StockMin: KobanNullable<number>
  PCB: KobanNullable<number>
  Regroup: KobanNullable<string>
  Classification: KobanNullable<string>
  IsSelling: KobanNullable<boolean>
  Model: KobanNullable<string>
  OtherCode: KobanNullable<string>
  Declinaisons: KobanNullable<Partial<IKobanProductDeclinaison>[]>
}

/**
 *
 *
 * @class KobanProduct
 * @extends {KobanBaseModel}
 */
class KobanProduct extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public Reference?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public Comments?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public eShopURL?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanProduct
   */
  public Obsolete?: boolean
  /**
   *
   *
   * @type {KobanProductCategory}
   * @memberof KobanProduct
   */
  public Catproduct?: KobanProductCategory
  /**
   *
   *
   * @type {KobanFieldValue[]}
   * @memberof KobanProduct
   */
  public MoreFields?: KobanFieldValue[]
  /**
   *
   *
   * @type {number}
   * @memberof KobanProduct
   */
  public Prht?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanProduct
   */
  public Margin?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanProduct
   */
  public Ht?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanProduct
   */
  public Ttc?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanProduct
   */
  public Vat?: number
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public Unit?: string
  /**
   *
   *
   * @type {number}
   * @memberof KobanProduct
   */
  public StockMin?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanProduct
   */
  public PCB?: number
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public Regroup?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public Classification?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanProduct
   */
  public IsSelling?: boolean
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public Model?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProduct
   */
  public OtherCode?: string
  /**
   *
   *
   * @type {KobanProductDeclinaison[]}
   * @memberof KobanProduct
   */
  public Declinaisons?: KobanProductDeclinaison[]

  /**
   * Creates an instance of KobanProduct.
   * @param {Partial<IKobanProduct>} [product={}]
   * @memberof KobanProduct
   */
  constructor(product: Partial<IKobanProduct> = {}) {
    super(product)
    const {
      Reference,
      Label,
      Comments,
      eShopURL,
      Obsolete,
      Catproduct,
      MoreFields,
      Prht,
      Margin,
      Ht,
      Ttc,
      Vat,
      Unit,
      StockMin,
      PCB,
      Regroup,
      Classification,
      IsSelling,
      Model,
      OtherCode,
      Declinaisons
    } = product
    if (Reference) {
      this.Reference = Reference
    }
    if (Label) {
      this.Label = Label
    }
    if (Comments) {
      this.Comments = Comments
    }
    if (eShopURL) {
      this.eShopURL = eShopURL
    }
    if (Obsolete || Obsolete === false) {
      this.Obsolete = Obsolete
    }
    if (Catproduct) {
      this.Catproduct = new KobanProductCategory(Catproduct)
    }
    this.MoreFields = MoreFields
      ? MoreFields.map(element => {
          return new KobanFieldValue(element)
        })
      : []
    if (Prht || Prht === 0) {
      this.Prht = Prht
    }
    if (Margin || Margin === 0) {
      this.Margin = Margin
    }
    if (Ht || Ht === 0) {
      this.Ht = Ht
    }
    if (Ttc || Ttc === 0) {
      this.Ttc = Ttc
    }
    if (Vat || Vat === 0) {
      this.Vat = Vat
    }
    if (Unit) {
      this.Unit = Unit
    }
    if (StockMin || StockMin === 0) {
      this.StockMin = StockMin
    }
    if (PCB || PCB === 0) {
      this.PCB = PCB
    }
    if (Regroup) {
      this.Regroup = Regroup
    }
    if (Classification) {
      this.Classification = Classification
    }
    if (IsSelling || IsSelling === false) {
      this.IsSelling = IsSelling
    }
    if (Model) {
      this.Model = Model
    }
    if (OtherCode) {
      this.OtherCode = OtherCode
    }
    this.Declinaisons = Declinaisons
      ? Declinaisons.map(element => {
          return new KobanProductDeclinaison(element)
        })
      : []
  }
}

export { IKobanProduct, KobanProduct }
