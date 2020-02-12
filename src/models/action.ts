import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanListValue, KobanListValue } from './listValue'
import { KobanNullable } from './types'
import { KobanUser, IKobanUser } from './user'
import { IKobanDeal, KobanDeal } from './deal'
import { IKobanThird, KobanThird } from './third'
import { IKobanContact, KobanContact } from './contact'
import { IKobanFieldValue, KobanFieldValue } from './fieldValue'
import { IKobanTag, KobanTag } from './tag'
import { IKobanActionType, KobanActionType } from './actionType'
import { IKobanLead, KobanLead } from './lead'
import { IKobanProject, KobanProject } from './project'
import { KobanInvoice, IKobanInvoice } from './invoice'

/**
 *
 *
 * @interface IKobanAction
 * @extends {IKobanBaseModel}
 */
interface IKobanAction extends IKobanBaseModel {
  ExternalCode: KobanNullable<string>
  RecCode: KobanNullable<string>
  Label: KobanNullable<string>
  Status: KobanNullable<string>
  Place: KobanNullable<string>
  Comments: KobanNullable<string>
  Priority: KobanNullable<Partial<IKobanListValue>>
  AssignedTo: KobanNullable<Partial<IKobanUser>>
  Deal: KobanNullable<Partial<IKobanDeal>>
  Third: KobanNullable<Partial<IKobanThird>>
  Contact: KobanNullable<Partial<IKobanContact>>
  Lead: KobanNullable<Partial<IKobanLead>>
  Project: KobanNullable<Partial<IKobanProject>>
  Invoice: KobanNullable<Partial<IKobanInvoice>>
  ActionType: KobanNullable<string | Partial<IKobanActionType>>
  DStart: KobanNullable<Date | number>
  DEnd: KobanNullable<Date | number>
  DTerm: KobanNullable<Date | number>
  IsPeriod: KobanNullable<boolean>
  IsGuest: KobanNullable<boolean>
  IsPrivate: KobanNullable<boolean>
  MoreFields: KobanNullable<Partial<IKobanFieldValue>[]>
  Tags: KobanNullable<Partial<IKobanTag>[]>
}

/**
 *
 *
 * @class KobanAction
 * @extends {KobanBaseModel}
 */
class KobanAction extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public ExternalCode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public RecCode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public Status?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public Place?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public Comments?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public Priority?: KobanListValue
  /**
   *
   *
   * @type {KobanUser}
   * @memberof KobanAction
   */
  public AssignedTo?: KobanUser
  /**
   *
   *
   * @type {KobanDeal}
   * @memberof KobanAction
   */
  public Deal?: KobanDeal
  /**
   *
   *
   * @type {KobanThird}
   * @memberof KobanAction
   */
  public Third?: KobanThird
  /**
   *
   *
   * @type {KobanContact}
   * @memberof KobanAction
   */
  public Contact?: KobanContact
  /**
   *
   *
   * @type {KobanLead}
   * @memberof KobanAction
   */
  public Lead?: KobanLead
  /**
   *
   *
   * @type {KobanProject}
   * @memberof KobanAction
   */
  public Project?: KobanProject
  /**
   *
   *
   * @type {KobanInvoice}
   * @memberof KobanAction
   */
  public Invoice?: KobanInvoice
  /**
   *
   *
   * @type {string}
   * @memberof KobanAction
   */
  public ActionType?: string | KobanActionType
  /**
   *
   *
   * @type {Date}
   * @memberof KobanAction
   */
  public DStart?: Date
  /**
   *
   *
   * @type {Date}
   * @memberof KobanAction
   */
  public DEnd?: Date
  /**
   *
   *
   * @type {Date}
   * @memberof KobanAction
   */
  public DTerm?: Date
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanAction
   */
  public IsPeriod?: boolean
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanAction
   */
  public IsGuest?: boolean
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanAction
   */
  public IsPrivate?: boolean
  /**
   *
   *
   * @type {KobanFieldValue[]}
   * @memberof KobanAction
   */
  public MoreFields?: KobanFieldValue[]
  /**
   *
   *
   * @type {KobanTag[]}
   * @memberof KobanAction
   */
  public Tags?: KobanTag[]

  /**
   * Creates an instance of KobanAction.
   * @param {Partial<IKobanAction>} [action={}]
   * @memberof KobanAction
   */
  constructor(action: Partial<IKobanAction> = {}) {
    super(action)
    const {
      ExternalCode,
      RecCode,
      Label,
      Status,
      Place,
      Comments,
      Priority,
      AssignedTo,
      Deal,
      Third,
      Contact,
      Lead,
      Project,
      Invoice,
      ActionType,
      DStart,
      DEnd,
      DTerm,
      IsPeriod,
      IsGuest,
      IsPrivate,
      MoreFields,
      Tags
    } = action
    if (ExternalCode) {
      this.ExternalCode = ExternalCode
    }
    if (RecCode) {
      this.RecCode = RecCode
    }
    if (Label) {
      this.Label = Label
    }
    if (Status) {
      this.Status = Status
    }
    if (Place) {
      this.Place = Place
    }
    if (Comments) {
      this.Comments = Comments
    }
    if (Priority) {
      this.Priority = new KobanListValue(Priority)
    }
    if (AssignedTo) {
      this.AssignedTo = new KobanUser(AssignedTo)
    }
    if (Deal) {
      this.Deal = new KobanDeal(Deal)
    }
    if (Third) {
      this.Third = new KobanThird(Third)
    }
    if (Contact) {
      this.Contact = new KobanContact(Contact)
    }
    if (Lead) {
      this.Lead = new KobanLead(Lead)
    }
    if (Project) {
      this.Project = new KobanProject(Project)
    }
    if (Invoice) {
      this.Invoice = new KobanInvoice(Invoice)
    }
    if (ActionType) {
      this.ActionType =
        typeof ActionType === 'object' ? new KobanActionType(ActionType) : ActionType
    }
    if (DStart) {
      this.DStart = DStart instanceof Date ? DStart : new Date(DStart)
    }
    if (DEnd) {
      this.DEnd = DEnd instanceof Date ? DEnd : new Date(DEnd)
    }
    if (DTerm) {
      this.DTerm = DTerm instanceof Date ? DTerm : new Date(DTerm)
    }
    if (IsPeriod || IsPeriod === false) {
      this.IsPeriod = IsPeriod
    }
    if (IsGuest || IsGuest === false) {
      this.IsGuest = IsGuest
    }
    if (IsPrivate || IsPrivate === false) {
      this.IsPrivate = IsPrivate
    }
    this.MoreFields = MoreFields
      ? MoreFields.map(element => {
          return new KobanFieldValue(element)
        })
      : []
    this.Tags = Tags
      ? Tags.map(element => {
          return new KobanTag(element)
        })
      : []
  }
}

export { IKobanAction, KobanAction }
