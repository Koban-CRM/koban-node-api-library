import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanListValue, KobanListValue } from './listValue'
import { IKobanAddress, KobanAddress } from './address'
import { IKobanUser, KobanUser } from './user'
import { IKobanTag, KobanTag } from './tag'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanGeo, KobanGeo } from './geo'
import { IKobanIban, KobanIban } from './iban'
import { KobanNullable } from './interfaces'

/**
 *
 *
 * @interface IKobanThird
 * @extends {IKobanBaseModel}
 */
interface IKobanThird extends IKobanBaseModel {
  Label: KobanNullable<string>
  FirstName: KobanNullable<string>
  Gender: KobanNullable<string>
  StructCode: KobanNullable<string>
  Status: KobanNullable<Partial<IKobanListValue>>
  Type: KobanNullable<Partial<IKobanListValue>>
  Extcode: KobanNullable<string>
  OtherCode: KobanNullable<string>
  Comments: KobanNullable<string>
  AccountingCode: KobanNullable<string>
  Address: KobanNullable<Partial<IKobanAddress>>
  DelivAddress: KobanNullable<Partial<IKobanAddress>>
  Website: KobanNullable<string>
  Phone: KobanNullable<string>
  Cell: KobanNullable<string>
  Fax: KobanNullable<string>
  EMail: KobanNullable<string>
  OfficialNumber: KobanNullable<string>
  Vat: KobanNullable<string>
  Unsuscribe: KobanNullable<boolean>
  InvalidMail: KobanNullable<boolean>
  Title: KobanNullable<string>
  eShop: KobanNullable<string>
  TaxRate: KobanNullable<number>
  AssignedTo: KobanNullable<Partial<IKobanUser>>
  UpdatedBy: KobanNullable<string>
  Tags: KobanNullable<Partial<IKobanTag>[]>
  MoreFields: KobanNullable<Partial<IKobanFieldValue>[]>
  Origin: KobanNullable<Partial<IKobanListValue>>
  NextAction: any
  UTMCampaign: KobanNullable<string>
  UTMMedium: KobanNullable<string>
  UTMSource: KobanNullable<string>
  Optin: KobanNullable<boolean>
  Geo: KobanNullable<Partial<IKobanGeo>>
  IBAN: KobanNullable<Partial<IKobanIban>>
}

/**
 *
 *
 * @class KobanThird
 * @extends {KobanBaseModel}
 */
class KobanThird extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public FirstName?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Gender?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public StructCode?: string
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanThird
   */
  public Status?: KobanListValue
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanThird
   */
  public Type?: KobanListValue
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Extcode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public OtherCode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Comments?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public AccountingCode?: string
  /**
   *
   *
   * @type {KobanAddress}
   * @memberof KobanThird
   */
  public Address?: KobanAddress
  /**
   *
   *
   * @type {KobanAddress}
   * @memberof KobanThird
   */
  public DelivAddress?: KobanAddress
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Website?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Phone?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Cell?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Fax?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public EMail?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public OfficialNumber?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Vat?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanThird
   */
  public Unsuscribe?: boolean
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanThird
   */
  public InvalidMail?: boolean
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public Title?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public eShop?: string
  /**
   *
   *
   * @type {number}
   * @memberof KobanThird
   */
  public TaxRate?: number
  /**
   *
   *
   * @type {KobanUser}
   * @memberof KobanThird
   */
  public AssignedTo?: KobanUser
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public UpdatedBy?: string
  /**
   *
   *
   * @type {KobanTag[]}
   * @memberof KobanThird
   */
  public Tags?: KobanTag[]
  /**
   *
   *
   * @type {KobanFieldValue[]}
   * @memberof KobanThird
   */
  public MoreFields?: KobanFieldValue[]
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanThird
   */
  public Origin?: KobanListValue
  /**
   *
   *
   * @type {*}
   * @memberof KobanThird
   */
  public NextAction?: any
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public UTMCampaign?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public UTMMedium?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanThird
   */
  public UTMSource?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanThird
   */
  public Optin?: boolean
  /**
   *
   *
   * @type {KobanGeo}
   * @memberof KobanThird
   */
  public Geo?: KobanGeo
  /**
   *
   *
   * @type {KobanIban}
   * @memberof KobanThird
   */
  public IBAN?: KobanIban

  /**
   * Creates an instance of KobanThird.
   * @param {Partial<IKobanThird>} [third={}]
   * @memberof KobanThird
   */
  constructor(third: Partial<IKobanThird> = {}) {
    super(third)
    const {
      Label,
      FirstName,
      Gender,
      StructCode,
      Status,
      Type,
      Extcode,
      OtherCode,
      Comments,
      AccountingCode,
      Address,
      DelivAddress,
      Website,
      Phone,
      Cell,
      Fax,
      EMail,
      OfficialNumber,
      Vat,
      Unsuscribe,
      InvalidMail,
      Title,
      eShop,
      TaxRate,
      AssignedTo,
      UpdatedBy,
      Tags,
      MoreFields,
      Origin,
      NextAction,
      UTMCampaign,
      UTMMedium,
      UTMSource,
      Optin,
      Geo,
      IBAN
    } = third
    this.Label = Label ? Label : undefined
    this.FirstName = FirstName ? FirstName : undefined
    this.Gender = Gender ? Gender : undefined
    this.StructCode = StructCode ? StructCode : undefined
    this.Status = Status ? new KobanListValue(Status) : undefined
    this.Type = Type ? new KobanListValue(Type) : undefined
    this.Extcode = Extcode ? Extcode : undefined
    this.OtherCode = OtherCode ? OtherCode : undefined
    this.Comments = Comments ? Comments : undefined
    this.AccountingCode = AccountingCode ? AccountingCode : undefined
    this.Address = Address ? new KobanAddress(Address) : undefined
    this.DelivAddress = DelivAddress ? new KobanAddress(DelivAddress) : undefined
    this.Website = Website ? Website : undefined
    this.Phone = Phone ? Phone : undefined
    this.Cell = Cell ? Cell : undefined
    this.Fax = Fax ? Fax : undefined
    this.EMail = EMail ? EMail : undefined
    this.OfficialNumber = OfficialNumber ? OfficialNumber : undefined
    this.Vat = Vat ? Vat : undefined
    this.Unsuscribe = Unsuscribe ? Unsuscribe : undefined
    this.InvalidMail = InvalidMail ? InvalidMail : undefined
    this.Title = Title ? Title : undefined
    this.eShop = eShop ? eShop : undefined
    this.TaxRate = TaxRate ? TaxRate : undefined
    this.AssignedTo = AssignedTo ? new KobanUser(AssignedTo) : undefined
    this.UpdatedBy = Label ? Label : undefined
    this.Tags = Tags
      ? Tags.map(element => {
          return new KobanTag(element)
        })
      : []
    this.MoreFields = MoreFields
      ? MoreFields.map(element => {
          return new KobanFieldValue(element)
        })
      : []
    this.Origin = Origin ? new KobanListValue(Origin) : undefined
    this.NextAction = NextAction
    this.UTMCampaign = UTMCampaign ? UTMCampaign : undefined
    this.UTMMedium = UTMMedium ? UTMMedium : undefined
    this.UTMSource = UTMSource ? UTMSource : undefined
    this.Optin = Optin ? Optin : undefined
    this.Geo = Geo ? new KobanGeo(Geo) : undefined
    this.IBAN = IBAN ? new KobanIban(IBAN) : undefined
  }
}

export { IKobanThird, KobanThird }
