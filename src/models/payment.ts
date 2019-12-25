import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanInvoice, KobanInvoice } from './invoice'
import { IKobanListValue, KobanListValue } from './listValue'
import { KobanNullable } from './interfaces'

/**
 *
 *
 * @interface IKobanPayment
 * @extends {IKobanBaseModel}
 */
interface IKobanPayment extends IKobanBaseModel {
  Extcode: KobanNullable<string>
  Invoice: KobanNullable<Partial<IKobanInvoice>>
  PaymentDate: KobanNullable<Date | string>
  Ttc: KobanNullable<number>
  ModeRglt: KobanNullable<Partial<IKobanListValue>>
}

/**
 *
 *
 * @class KobanPayment
 * @extends {KobanBaseModel}
 */
class KobanPayment extends KobanBaseModel {
  /**
   * Le code externe du paiement (provenant d'un autre système par exemple)
   *
   * @type {string}
   * @memberof KobanPayment
   */
  public Extcode?: string
  /**
   * La facture associée.
   * A renseigner comme un objet ncInvoice.
   * Seule la propriété définissant la clé doit être renseignée en mode insertion / modification.
   *
   * @type {KobanInvoice}
   * @memberof KobanPayment
   */
  public Invoice?: KobanInvoice
  /**
   * Date du paiement
   *
   * @type {Date}
   * @memberof KobanPayment
   */
  public PaymentDate?: Date
  /**
   * Montant TTC du paiement
   *
   * @type {number}
   * @memberof KobanPayment
   */
  public Ttc?: number
  /**
   * Le mode de règlement.
   * A renseigner comme suit : { Code : 'XXXX' }.
   * Le code doit être défini dans la liste Mode de règlement au niveau de l'application Koban
   *
   * @type {KobanListValue}
   * @memberof KobanPayment
   */
  public ModeRglt?: KobanListValue

  /**
   * Creates an instance of KobanPayment.
   * @param {Partial<IKobanPayment>} [payment={}]
   * @memberof KobanPayment
   */
  constructor(payment: Partial<IKobanPayment> = {}) {
    super(payment)
    const { Extcode, Invoice, PaymentDate, Ttc, ModeRglt } = payment
    this.Extcode = Extcode ? Extcode : undefined
    this.Invoice = Invoice ? new KobanInvoice(Invoice) : undefined
    if (PaymentDate) {
      this.PaymentDate = PaymentDate instanceof Date ? PaymentDate : new Date(PaymentDate)
    } else {
      this.PaymentDate = undefined
    }
    this.Ttc = Ttc ? Ttc : undefined
    this.ModeRglt = ModeRglt ? new KobanListValue(ModeRglt) : undefined
  }
}

export { IKobanPayment, KobanPayment }
