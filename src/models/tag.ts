import { KobanNullable } from './interfaces'

/**
 *
 *
 * @interface IKobanTag
 */
interface IKobanTag {
  Guid: KobanNullable<string>
  TagCategory: KobanNullable<string>
  TagCategoryCode: KobanNullable<string>
  Label: KobanNullable<string>
  ExternalCode: KobanNullable<string>
}

/**
 *
 *
 * @class KobanTag
 */
class KobanTag {
  /**
   *
   *
   * @type {string}
   * @memberof KobanTag
   */
  public Guid?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanTag
   */
  public TagCategory?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanTag
   */
  public TagCategoryCode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanTag
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanTag
   */
  public ExternalCode?: string

  /**
   * Creates an instance of KobanTag.
   * @param {Partial<IKobanTag>} [tag={}]
   * @memberof KobanTag
   */
  constructor(tag: Partial<IKobanTag> = {}) {
    const { Guid, TagCategory, TagCategoryCode, Label, ExternalCode } = tag
    this.Guid = Guid ? Guid : undefined
    this.TagCategory = TagCategory ? TagCategory : undefined
    this.TagCategoryCode = TagCategoryCode ? TagCategoryCode : undefined
    this.Label = Label ? Label : undefined
    this.ExternalCode = ExternalCode ? ExternalCode : undefined
  }
}

export { IKobanTag, KobanTag }
