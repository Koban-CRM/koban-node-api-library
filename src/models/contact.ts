import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanUser, KobanUser } from './user'
import { IKobanListValue, KobanListValue } from './listValue'
import { IKobanThird, KobanThird } from './third'
import { IKobanTag, KobanTag } from './tag'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanContact
 * @extends {IKobanBaseModel}
 */
interface IKobanContact extends IKobanBaseModel {
  Label: KobanNullable<string>
  GridLabel: KobanNullable<string>
  Name: KobanNullable<string>
  FirstName: KobanNullable<string>
  Function: KobanNullable<string>
  Obsolete: KobanNullable<boolean>
  CanDecide: KobanNullable<boolean>
  CanBuy: KobanNullable<boolean>
  IsPrivate: KobanNullable<boolean>
  Extcode: KobanNullable<string>
  Gender: KobanNullable<string>
  Phone: KobanNullable<string>
  Status: KobanNullable<string>
  Photo: KobanNullable<string>
  ToSync: KobanNullable<boolean>
  MoreFields: KobanNullable<Partial<IKobanFieldValue>[]>
  Unsuscribe: KobanNullable<boolean>
  AssignedTo: KobanNullable<Partial<IKobanUser>>
  Origin: KobanNullable<Partial<IKobanListValue>>
  Comments: KobanNullable<string>
  InvalidMail: KobanNullable<boolean>
  Fax: KobanNullable<string>
  Cell: KobanNullable<string>
  EMail: KobanNullable<string>
  Third: KobanNullable<Partial<IKobanThird>>
  Tags: KobanNullable<Partial<IKobanTag>[]>
  Optin: KobanNullable<boolean>
}

/**
 *
 *
 * @class KobanContact
 * @extends {KobanBaseModel}
 */
class KobanContact extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public GridLabel?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Name?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public FirstName?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Function?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public Obsolete?: boolean
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public CanDecide?: boolean
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public CanBuy?: boolean
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public IsPrivate?: boolean
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Extcode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Gender?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Phone?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Status?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Photo?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public ToSync?: boolean
  /**
   *
   *
   * @type {KobanFieldValue[]}
   * @memberof KobanContact
   */
  public MoreFields?: KobanFieldValue[]
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public Unsuscribe?: boolean
  /**
   *
   *
   * @type {KobanUser}
   * @memberof KobanContact
   */
  public AssignedTo?: KobanUser
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanContact
   */
  public Origin?: KobanListValue
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Comments?: string
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public InvalidMail?: boolean
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Fax?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public Cell?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanContact
   */
  public EMail?: string
  /**
   *
   *
   * @type {KobanThird}
   * @memberof KobanContact
   */
  public Third?: KobanThird
  /**
   *
   *
   * @type {KobanTag[]}
   * @memberof KobanContact
   */
  public Tags?: KobanTag[]
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanContact
   */
  public Optin?: boolean

  /**
   * Creates an instance of KobanContact.
   * @param {Partial<KobanContact>} [contact={}]
   * @memberof KobanContact
   */
  constructor(contact: Partial<IKobanContact> = {}) {
    super(contact)
    const {
      Label,
      GridLabel,
      Name,
      FirstName,
      Function,
      Obsolete,
      CanDecide,
      CanBuy,
      IsPrivate,
      Extcode,
      Gender,
      Phone,
      Status,
      Photo,
      ToSync,
      MoreFields,
      Unsuscribe,
      AssignedTo,
      Origin,
      Comments,
      InvalidMail,
      Fax,
      Cell,
      EMail,
      Third,
      Tags,
      Optin
    } = contact
    if (Label) {
      this.Label = Label
    }
    if (GridLabel) {
      this.GridLabel = GridLabel
    }
    if (Name) {
      this.Name = Name
    }
    if (FirstName) {
      this.FirstName = FirstName
    }
    if (Function) {
      this.Function = Function
    }
    if (Obsolete || Obsolete === false) {
      this.Obsolete = Obsolete
    }
    if (CanDecide || CanDecide === false) {
      this.CanDecide = CanDecide
    }
    if (CanBuy || CanBuy === false) {
      this.CanBuy = CanBuy
    }
    if (IsPrivate || IsPrivate === false) {
      this.IsPrivate = IsPrivate
    }
    if (Extcode) {
      this.Extcode = Extcode
    }
    if (Gender) {
      this.Gender = Gender
    }
    if (Phone) {
      this.Phone = Phone
    }
    if (Status) {
      this.Status = Status
    }
    if (Photo) {
      this.Photo = Photo
    }
    if (ToSync || ToSync === false) {
      this.ToSync = ToSync
    }
    this.MoreFields = MoreFields
      ? MoreFields.map(element => {
          return new KobanFieldValue(element)
        })
      : []
    if (Unsuscribe || Unsuscribe === false) {
      this.Unsuscribe = Unsuscribe
    }
    if (AssignedTo) {
      this.AssignedTo = new KobanUser(AssignedTo)
    }
    if (Origin) {
      this.Origin = new KobanListValue(Origin)
    }
    if (Comments) {
      this.Comments = Comments
    }
    if (InvalidMail || InvalidMail === false) {
      this.InvalidMail = InvalidMail
    }
    if (Fax) {
      this.Fax = Fax
    }
    if (Cell) {
      this.Cell = Cell
    }
    if (EMail) {
      this.EMail = EMail
    }
    if (Third) {
      this.Third = new KobanThird(Third)
    }
    this.Tags = Tags
      ? Tags.map(element => {
          return new KobanTag(element)
        })
      : []
    if (Optin || Optin === false) {
      this.Optin = Optin
    }
  }
}

export { IKobanContact, KobanContact }
