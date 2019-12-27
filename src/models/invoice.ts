import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { KobanInvoiceStatus } from './enums'
import { IKobanThird, KobanThird } from './third'
import { IKobanContact, KobanContact } from './contact'
import { IKobanOrder, KobanOrder } from './order'
import { IKobanListValue, KobanListValue } from './listValue'
import { IKobanLine, KobanLine } from './line'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanInvoice
 */
interface IKobanInvoice extends IKobanBaseModel {
  Number: KobanNullable<string>
  Status: KobanNullable<KobanInvoiceStatus | string>
  InvoiceDate: KobanNullable<Date | string>
  DueDate: KobanNullable<Date | string>
  Third: KobanNullable<Partial<IKobanThird>>
  Contact: KobanNullable<Partial<IKobanContact>>
  Order: KobanNullable<Partial<IKobanOrder>>
  Header: KobanNullable<string>
  PaymentMode: KobanNullable<Partial<IKobanListValue>>
  Amount: KobanNullable<string>
  AmountTtc: KobanNullable<string>
  CurrencyCode: KobanNullable<string>
  Origin: KobanNullable<Partial<IKobanListValue>>
  Asset: KobanNullable<boolean>
  MarketingCampaign: KobanNullable<string>
  Source: KobanNullable<string>
  Canal: KobanNullable<string>
  Lines: KobanNullable<Partial<IKobanLine>[]>
}

/**
 *
 *
 * @class KobanInvoice
 * @extends {KobanBaseModel}
 */
class KobanInvoice extends KobanBaseModel {
  /**
   * Le numéro de la facture
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public Number?: string
  /**
   * Statut de la facture.
   * Peut prendre les valeurs PENDING, CLOSED, DRAFT
   *
   * @type {InvoiceStatus}
   * @memberof KobanInvoice
   */
  public Status?: KobanInvoiceStatus
  /**
   * Date de la facture.
   *
   * @type {Date}
   * @memberof KobanInvoice
   */
  public InvoiceDate?: Date
  /**
   * Date d'échéance de la facture.
   *
   * @type {Date}
   * @memberof KobanInvoice
   */
  public DueDate?: Date
  /**
   * Objet ncThird permettant de récupérer le compte associé en mode insertion/modification.
   * Seule la propriété de clé est obligatoire.
   *
   * @type {Third}
   * @memberof KobanInvoice
   */
  public Third?: KobanThird
  /**
   * Objet ncContact permettant de récupérer le contact associé en mode insertion/modification.
   * Seule la propriété de clé est obligatoire.
   *
   * @type {Contact}
   * @memberof KobanInvoice
   */
  public Contact?: KobanContact
  /**
   * Object ncOrder permettant d'associer le bon de commande associé en mode insertion/modification.
   * Seule la propriété de clé est obligatoire si order est renseigné
   *
   * @type {Order}
   * @memberof KobanInvoice
   */
  public Order?: KobanOrder
  /**
   * En tête de document
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public Header?: string
  /**
   * Le mode de paiement.
   * Le code doit être défini dans la liste Origine au niveau de l'application Koban
   *
   * @type {ListValue}
   * @memberof KobanInvoice
   */
  public PaymentMode?: KobanListValue
  /**
   *
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public Amount?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public AmountTtc?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public CurrencyCode?: string
  /**
   * L'origine de la facture.
   * Le code doit être défini dans la liste Origine au niveau de l'application Koban
   *
   * @type {KobanListValue}
   * @memberof KobanInvoice
   */
  public Origin?: KobanListValue
  /**
   * Définit si la facture est un avoir ou non
   *
   * @type {boolean}
   * @memberof KobanInvoice
   */
  public Asset?: boolean
  /**
   * UTM Campagne associée
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public MarketingCampaign?: string
  /**
   * UTM Source associée
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public Source?: string
  /**
   * UTM Medium associé
   *
   * @type {string}
   * @memberof KobanInvoice
   */
  public Canal?: string
  /**
   * Les lignes composant la facture.
   *
   * @type {KobanLine[]}
   * @memberof KobanInvoice
   */
  public Lines?: KobanLine[]

  /**
   * Creates an instance of KobanInvoice.
   * @param {Partial<IKobanInvoice>} [invoice={}]
   * @memberof KobanInvoice
   */
  constructor(invoice: Partial<IKobanInvoice> = {}) {
    super(invoice)
    const {
      // tslint:disable-next-line: variable-name
      Number,
      Third,
      Contact,
      Order,
      InvoiceDate,
      DueDate,
      Status,
      PaymentMode,
      Amount,
      AmountTtc,
      CurrencyCode,
      Lines,
      Asset,
      Origin,
      Header,
      MarketingCampaign,
      Source,
      Canal
    } = invoice
    this.Number = Number ? Number : undefined
    this.Third = Third ? new KobanThird(Third) : undefined
    this.Contact = Contact ? new KobanContact(Contact) : undefined
    this.Order = Order ? new KobanOrder(Order) : undefined
    if (InvoiceDate) {
      this.InvoiceDate = InvoiceDate instanceof Date ? InvoiceDate : new Date(InvoiceDate)
    } else {
      this.InvoiceDate = undefined
    }
    if (DueDate) {
      this.DueDate = DueDate instanceof Date ? DueDate : new Date(DueDate)
    } else {
      this.DueDate = undefined
    }
    this.Status = Status ? KobanInvoiceStatus[Status as keyof typeof KobanInvoiceStatus] : undefined
    this.PaymentMode = PaymentMode ? new KobanListValue(PaymentMode) : undefined
    this.Amount = Amount ? Amount : undefined
    this.AmountTtc = AmountTtc ? AmountTtc : undefined
    this.CurrencyCode = CurrencyCode ? CurrencyCode : undefined
    this.Lines = Lines
      ? Lines.map(element => {
          return new KobanLine(element)
        })
      : []
    this.Asset = Asset ? Asset : undefined
    this.Origin = Origin ? new KobanListValue(Origin) : undefined
    this.Header = Header ? Header : undefined
    this.MarketingCampaign = MarketingCampaign ? MarketingCampaign : undefined
    this.Source = Source ? Source : undefined
    this.Canal = Canal ? Canal : undefined
  }
}

export { IKobanInvoice, KobanInvoice }
