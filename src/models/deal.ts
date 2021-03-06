import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanUser, KobanUser } from './user'
import { IKobanListValue, KobanListValue } from './listValue'
import { IKobanThird, KobanThird } from './third'
import { IKobanContact, KobanContact } from './contact'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanTag, KobanTag } from './tag'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanDeal
 * @extends {IKobanBaseModel}
 */
interface IKobanDeal extends IKobanBaseModel {
  Description: KobanNullable<string>
  Label: KobanNullable<string>
  GridLabel: KobanNullable<string>
  Comments: KobanNullable<string>
  AssignedTo: KobanNullable<Partial<IKobanUser>>
  Result: KobanNullable<string>
  Status: KobanNullable<Partial<IKobanListValue>>
  Origin: KobanNullable<Partial<IKobanListValue>>
  Process: KobanNullable<Partial<IKobanListValue>>
  Extcode: KobanNullable<string>
  Amountprev: KobanNullable<number>
  Third: KobanNullable<Partial<IKobanThird>>
  Contact: KobanNullable<Partial<IKobanContact>>
  MoreFields: KobanNullable<Partial<IKobanFieldValue>[]>
  Products: KobanNullable<
    Array<
      Partial<{
        Product: KobanNullable<Partial<IKobanListValue>>
        Catproduct: KobanNullable<Partial<IKobanListValue>>
      }>
    >
  >
  DPrev: KobanNullable<number>
  DResult: KobanNullable<number>
  Tags: KobanNullable<Partial<IKobanTag>[]>
}

/**
 *
 *
 * @class KobanDeal
 * @extends {BaseModel}
 */
class KobanDeal extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanDeal
   */
  public Description?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanDeal
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanDeal
   */
  public GridLabel?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanDeal
   */
  public Comments?: string
  /**
   *
   *
   * @type {KobanUser}
   * @memberof KobanDeal
   */
  public AssignedTo?: KobanUser
  /**
   *
   *
   * @type {string}
   * @memberof KobanDeal
   */
  public Result?: string
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanDeal
   */
  public Status?: KobanListValue
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanDeal
   */
  public Origin?: KobanListValue
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanDeal
   */
  public Process?: KobanListValue
  /**
   *
   *
   * @readonly
   * @type {string}
   * @memberof KobanDeal
   */
  public get ProcessLabel(): string {
    if (this.Process && this.Process.Label) {
      return this.Process.Label
    } else {
      return ''
    }
  }
  /**
   *
   *
   * @type {string}
   * @memberof KobanDeal
   */
  public Extcode?: string
  /**
   *
   *
   * @type {number}
   * @memberof KobanDeal
   */
  public Amountprev?: number
  /**
   *
   *
   * @type {KobanThird}
   * @memberof KobanDeal
   */
  public Third?: KobanThird
  /**
   *
   *
   * @type {KobanContact}
   * @memberof KobanDeal
   */
  public Contact?: KobanContact
  /**
   *
   *
   * @type {KobanFieldValue[]}
   * @memberof KobanDeal
   */
  public MoreFields?: KobanFieldValue[]
  /**
   *
   *
   * @type {Array<{
   *     Product?: KobanListValue;
   *     Catproduct?: KobanListValue;
   *   }>}
   * @memberof KobanDeal
   */
  public Products?: Array<{
    Product?: KobanListValue
    Catproduct?: KobanListValue
  }>
  /**
   *
   *
   * @type {number}
   * @memberof KobanDeal
   */
  public DPrev?: number
  /**
   *
   *
   * @type {number}
   * @memberof KobanDeal
   */
  public DResult?: number
  /**
   *
   *
   * @type {KobanTag[]}
   * @memberof KobanDeal
   */
  public Tags?: KobanTag[]

  /**
   * Creates an instance of KobanDeal.
   * @param {Partial<IKobanDeal>} [deal={}]
   * @memberof KobanDeal
   */
  constructor(deal: Partial<IKobanDeal> = {}) {
    super(deal)
    const {
      Description,
      Label,
      GridLabel,
      Comments,
      AssignedTo,
      Result,
      Status,
      Origin,
      Process,
      Extcode,
      Amountprev,
      Third,
      Contact,
      MoreFields,
      Products,
      DPrev,
      DResult,
      Tags
    } = deal
    if (Description) {
      this.Description = Description
    }
    if (Label) {
      this.Label = Label
    }
    if (GridLabel) {
      this.GridLabel = GridLabel
    }
    if (Comments) {
      this.Comments = Comments
    }
    if (AssignedTo) {
      this.AssignedTo = new KobanUser(AssignedTo)
    }
    if (Result) {
      this.Result = Result
    }
    if (Status) {
      this.Status = new KobanListValue(Status)
    }
    if (Origin) {
      this.Origin = new KobanListValue(Origin)
    }
    if (Process) {
      this.Process = new KobanListValue(Process)
    }
    if (Extcode) {
      this.Extcode = Extcode
    }
    if (Amountprev || Amountprev === 0) {
      this.Amountprev = Amountprev
    }
    if (Third) {
      this.Third = new KobanThird(Third)
    }
    if (Contact) {
      this.Contact = new KobanContact(Contact)
    }
    this.MoreFields = MoreFields
      ? MoreFields.map(element => {
          return new KobanFieldValue(element)
        })
      : []
    this.Products = Products
      ? Products.map((element: any) => {
          return {
            Catproduct: element.Catproduct ? new KobanListValue(element.Catproduct) : undefined,
            Product: element.Product ? new KobanListValue(element.Product) : undefined
          }
        })
      : []
    if (DPrev || DPrev === 0) {
      this.DPrev = DPrev
    }
    if (DResult || DResult === 0) {
      this.DResult = DResult
    }
    this.Tags = Tags
      ? Tags.map(element => {
          return new KobanTag(element)
        })
      : []
  }
}

export { IKobanDeal, KobanDeal }
