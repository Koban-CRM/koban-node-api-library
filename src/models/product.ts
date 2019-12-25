import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanProductCategory, KobanProductCategory } from './productCategory'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanProductDeclinaison, KobanProductDeclinaison } from './productDeclinaison'
import { KobanNullable } from './interfaces'

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
    this.Reference = Reference ? Reference : undefined
    this.Label = Label ? Label : undefined
    this.Comments = Comments ? Comments : undefined
    this.eShopURL = eShopURL ? eShopURL : undefined
    this.Obsolete = Obsolete ? Obsolete : undefined
    this.Catproduct = Catproduct ? new KobanProductCategory(Catproduct) : undefined
    this.MoreFields = MoreFields
      ? MoreFields.map(element => {
          return new KobanFieldValue(element)
        })
      : []
    this.Prht = Prht ? Prht : undefined
    this.Margin = Margin ? Margin : undefined
    this.Ht = Ht ? Ht : undefined
    this.Ttc = Ttc ? Ttc : undefined
    this.Vat = Vat ? Vat : undefined
    this.Unit = Unit ? Unit : undefined
    this.StockMin = StockMin ? StockMin : undefined
    this.PCB = PCB ? PCB : undefined
    this.Regroup = Regroup ? Regroup : undefined
    this.Classification = Classification ? Classification : undefined
    this.IsSelling = IsSelling ? IsSelling : undefined
    this.Model = Model ? Model : undefined
    this.OtherCode = OtherCode ? OtherCode : undefined
    this.Declinaisons = Declinaisons
      ? Declinaisons.map(element => {
          return new KobanProductDeclinaison(element)
        })
      : []
  }
}

export { IKobanProduct, KobanProduct }
