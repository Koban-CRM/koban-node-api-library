import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanUser, KobanUser } from './user'
import { IKobanListValue, KobanListValue } from './listValue'
import { IKobanThird, KobanThird } from './third'
import { IKobanTag, KobanTag } from './tag'
import { KobanNullable } from './types'
import { IKobanAddress, KobanAddress } from './address'

/**
 *
 *
 * @interface IKobanLead
 * @extends {IKobanBaseModel}
 */
interface IKobanLead extends IKobanBaseModel {
  SalesStatus: KobanNullable<Partial<IKobanListValue>>
  Company: KobanNullable<string>
  EMail: KobanNullable<string>
  FirstName: KobanNullable<string>
  Comments: KobanNullable<string>
  Name: KobanNullable<string>
  Phone: KobanNullable<string>
  Mobile: KobanNullable<string>
  IsNewsletter: KobanNullable<boolean>
  Unsuscribe: KobanNullable<boolean>
  Extcode: KobanNullable<string>
  Origin: KobanNullable<Partial<IKobanListValue>>
  Gender: KobanNullable<Partial<IKobanListValue>>
  Address: KobanNullable<Partial<IKobanAddress>>
  MoreFields: KobanNullable<Partial<IKobanFieldValue>[]>
  AssignedTo: KobanNullable<Partial<IKobanUser>>
  Tags: KobanNullable<Partial<IKobanTag>[]>
  Optin: KobanNullable<boolean>
  UTMSource: KobanNullable<string>
  UTMCampaign: KobanNullable<string>
  UTMMedium: KobanNullable<string>
}

/**
 *
 *
 * @class KobanLead
 * @extends {KobanBaseModel}
 */
class KobanLead extends KobanBaseModel {
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanLead
   */
  public SalesStatus?: KobanListValue
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public Company?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public EMail?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public FirstName?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public Comments?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public Name?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanLead
   */
  public Phone?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanLead
   */
  public Mobile?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanLead
   */
  public IsNewsletter?: boolean
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanLead
   */
  public Unsuscribe?: boolean
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public Extcode?: string
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanLead
   */
  public Origin?: KobanListValue
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanLead
   */
  public Gender?: KobanListValue
  /**
   *
   *
   * @type {KobanAddress}
   * @memberof KobanLead
   */
  public Address?: KobanAddress
  /**
   *
   *
   * @type {KobanFieldValue[]}
   * @memberof KobanLead
   */
  public MoreFields?: KobanFieldValue[]
  /**
   *
   *
   * @type {KobanUser}
   * @memberof KobanLead
   */
  public AssignedTo?: KobanUser
  /**
   *
   *
   * @type {KobanTag[]}
   * @memberof KobanLead
   */
  public Tags?: KobanTag[]
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanLead
   */
  public Optin?: boolean
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public UTMSource?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanLead
   */
  public UTMCampaign?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanLead
   */
  public UTMMedium?: string

  /**
   * Creates an instance of KobanLead.
   * @param {Partial<KobanLead>} [contact={}]
   * @memberof KobanLead
   */
  constructor(lead: Partial<IKobanLead> = {}) {
    super(lead)
    const {
      SalesStatus,
      Company,
      EMail,
      FirstName,
      Comments,
      Name,
      Phone,
      Mobile,
      IsNewsletter,
      Unsuscribe,
      Extcode,
      Origin,
      Gender,
      Address,
      MoreFields,
      AssignedTo,
      Tags,
      Optin,
      UTMSource,
      UTMCampaign,
      UTMMedium
    } = lead
    if (SalesStatus) {
      this.SalesStatus = new KobanListValue(SalesStatus)
    }
    if (Company) {
      this.Company = Company
    }
    if (EMail) {
      this.EMail = EMail
    }
    if (FirstName) {
      this.FirstName = FirstName
    }
    if (Comments) {
      this.Comments = Comments
    }
    if (Name) {
      this.Name = Name
    }
    if (Phone) {
      this.Phone = Phone
    }
    if (Mobile) {
      this.Mobile = Mobile
    }
    if (IsNewsletter || IsNewsletter === false) {
      this.IsNewsletter = IsNewsletter
    }
    if (Unsuscribe || Unsuscribe === false) {
      this.Unsuscribe = Unsuscribe
    }
    if (Extcode) {
      this.Extcode = Extcode
    }
    if (Origin) {
      this.Origin = new KobanListValue(Origin)
    }
    if (Gender) {
      this.Gender = new KobanListValue(Gender)
    }
    if (Address) {
      this.Address = new KobanAddress(Address)
    }
    this.MoreFields = MoreFields
      ? MoreFields.map(element => {
          return new KobanFieldValue(element)
        })
      : []
    if (AssignedTo) {
      this.AssignedTo = new KobanUser(AssignedTo)
    }
    this.Tags = Tags
      ? Tags.map(element => {
          return new KobanTag(element)
        })
      : []
    if (Optin || Optin === false) {
      this.Optin = Optin
    }
    if (UTMSource) {
      this.UTMSource = UTMSource
    }
    if (UTMCampaign) {
      this.UTMCampaign = UTMCampaign
    }
    if (UTMMedium) {
      this.UTMMedium = UTMMedium
    }
  }
}

export { IKobanLead, KobanLead }
