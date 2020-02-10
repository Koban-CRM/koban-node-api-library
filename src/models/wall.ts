// import { KobanBaseModel, IKobanBaseModel } from './baseModel'
// import { IKobanInvoice, KobanInvoice } from './invoice'
// import { IKobanListValue, KobanListValue } from './listValue'
// import { KobanNullable } from './types'

// /**
//  *
//  *
//  * @interface IKobanWall
//  * @extends {IKobanBaseModel}
//  */
// interface IKobanWall extends IKobanBaseModel {
//   From: KobanNullable<string>
//   Title: KobanNullable<string>
//   DPublished: KobanNullable<Date | string>
//   ObjName: KobanNullable<string>
//   ObjId: KobanNullable<string>
//   Comment: KobanNullable<string>
//   Responses: KobanNullable<string[]>
// }

// /**
//  *
//  *
//  * @class KobanWall
//  * @extends {KobanBaseModel}
//  */
// class KobanWall extends KobanBaseModel {
//   /**
//    * Le code externe du paiement (provenant d'un autre système par exemple)
//    *
//    * @type {string}
//    * @memberof KobanWall
//    */
//   public Extcode?: string
//   /**
//    * La facture associée.
//    * A renseigner comme un objet ncInvoice.
//    * Seule la propriété définissant la clé doit être renseignée en mode insertion / modification.
//    *
//    * @type {KobanInvoice}
//    * @memberof KobanWall
//    */
//   public Invoice?: KobanInvoice
//   /**
//    * Date du paiement
//    *
//    * @type {Date}
//    * @memberof KobanWall
//    */
//   public PaymentDate?: Date
//   /**
//    * Montant TTC du paiement
//    *
//    * @type {number}
//    * @memberof KobanWall
//    */
//   public Ttc?: number
//   /**
//    * Le mode de règlement.
//    * A renseigner comme suit : { Code : 'XXXX' }.
//    * Le code doit être défini dans la liste Mode de règlement au niveau de l'application Koban
//    *
//    * @type {KobanListValue}
//    * @memberof KobanWall
//    */
//   public ModeRglt?: KobanListValue

//   /**
//    * Creates an instance of KobanWall.
//    * @param {Partial<IKobanWall>} [payment={}]
//    * @memberof KobanWall
//    */
//   constructor(payment: Partial<IKobanWall> = {}) {
//     super(payment)
//     const { Extcode, Invoice, PaymentDate, Ttc, ModeRglt } = payment
//     if (Extcode) {
//       this.Extcode = Extcode
//     }
//     if (Invoice) {
//       this.Invoice = new KobanInvoice(Invoice)
//     }
//     if (PaymentDate) {
//       this.PaymentDate = PaymentDate instanceof Date ? PaymentDate : new Date(PaymentDate)
//     }
//     if (Ttc || Ttc === 0) {
//       this.Ttc = Ttc
//     }
//     if (ModeRglt) {
//       this.ModeRglt = new KobanListValue(ModeRglt)
//     }
//   }
// }

// export { IKobanPayment, KobanPayment }
