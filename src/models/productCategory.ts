import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanProductCategory
 * @extends {IKobanBaseModel}
 */
interface IKobanProductCategory extends IKobanBaseModel {
  Reference: KobanNullable<string>
  Label: KobanNullable<string>
  eShopURL: KobanNullable<string>
  Obsolete: KobanNullable<boolean>
  ParentCategory: KobanNullable<Partial<IKobanProductCategory>>
}

/**
 *
 *
 * @class KobanProductCategory
 * @extends {KobanBaseModel}
 */
class KobanProductCategory extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanProductCategory
   */
  public Reference?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProductCategory
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProductCategory
   */
  public eShopURL?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanProductCategory
   */
  public Obsolete?: boolean
  /**
   *
   *
   * @type {KobanProductCategory}
   * @memberof KobanProductCategory
   */
  public ParentCategory?: KobanProductCategory

  /**
   * Creates an instance of KobanProductCategory.
   * @param {Partial<IKobanProductCategory>} [productCategory={}]
   * @memberof KobanProductCategory
   */
  constructor(productCategory: Partial<IKobanProductCategory> = {}) {
    super(productCategory)
    const { Reference, Label, eShopURL, Obsolete, ParentCategory } = productCategory
    if (Reference) {
      this.Reference = Reference
    }
    if (Label) {
      this.Label = Label
    }
    if (eShopURL) {
      this.eShopURL = eShopURL
    }
    if (Obsolete || Obsolete === false) {
      this.Obsolete = Obsolete
    }
    if (ParentCategory) {
      this.ParentCategory = new KobanProductCategory(ParentCategory)
    }
  }
}

export { IKobanProductCategory, KobanProductCategory }
