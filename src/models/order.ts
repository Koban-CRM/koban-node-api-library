import { KobanBaseModel, IKobanBaseModel } from './baseModel'
import { IKobanThird, KobanThird } from './third'
import { IKobanQuote, KobanQuote } from './quote'
import { IKobanAddress, KobanAddress } from './address'
import { IKobanShipping, KobanShipping } from './shipping'
import { IKobanDeal, KobanDeal } from './deal'
import { IKobanLine, KobanLine } from './line'
import { IKobanDeposit, KobanDeposit } from './deposit'
import { IKobanListValue, KobanListValue } from './listValue'
import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanOrder
 * @extends {IKobanBaseModel}
 */
interface IKobanOrder extends IKobanBaseModel {
  Number: KobanNullable<string>
  Extcode: KobanNullable<string>
  Status: KobanNullable<string>
  Dateorder: KobanNullable<Date | string>
  DeliveryDateEstimated: KobanNullable<Date | string>
  Third: KobanNullable<Partial<IKobanThird>>
  Quote: KobanNullable<Partial<IKobanQuote>>
  ShippingAddress: KobanNullable<Partial<IKobanAddress>>
  CurrencyCode: KobanNullable<string>
  Shipping: KobanNullable<Partial<IKobanShipping>>
  Deal: KobanNullable<Partial<IKobanDeal>>
  Lines: KobanNullable<Partial<IKobanLine>[]>
  Comments: KobanNullable<string>
  PaymentMode: KobanNullable<string>
  Deposit: KobanNullable<Partial<IKobanDeposit>>
  eShop: KobanNullable<string>
  SellingMode: KobanNullable<string>
  eShopStatus: KobanNullable<string>
  eShopInvoiceNumber: KobanNullable<string>
  DeliveryMode: KobanNullable<string>
  DeliveryAddress: KobanNullable<Partial<IKobanAddress>>
  InvoiceAddress: KobanNullable<Partial<IKobanAddress>>
  UtmCampaign: KobanNullable<string>
  Structure: KobanNullable<Partial<IKobanListValue>>
  AmountPayed: KobanNullable<number>
}

/**
 *
 *
 * @class KobanOrder
 * @extends {KobanBaseModel}
 */
class KobanOrder extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public Number?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public Extcode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public Status?: string
  /**
   *
   *
   * @type {Date}
   * @memberof KobanOrder
   */
  public Dateorder?: Date
  /**
   *
   *
   * @type {Date}
   * @memberof KobanOrder
   */
  public DeliveryDateEstimated?: Date
  /**
   *
   *
   * @type {KobanThird}
   * @memberof KobanOrder
   */
  public Third?: KobanThird
  /**
   *
   *
   * @type {KobanQuote}
   * @memberof KobanOrder
   */
  public Quote?: KobanQuote
  /**
   *
   *
   * @type {KobanAddress}
   * @memberof KobanOrder
   */
  public ShippingAddress?: KobanAddress
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public CurrencyCode?: string
  /**
   *
   *
   * @type {KobanShipping}
   * @memberof KobanOrder
   */
  public Shipping?: KobanShipping
  /**
   *
   *
   * @type {KobanDeal}
   * @memberof KobanOrder
   */
  public Deal?: KobanDeal
  /**
   *
   *
   * @type {KobanLine[]}
   * @memberof KobanOrder
   */
  public Lines?: KobanLine[]
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public Comments?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public PaymentMode?: string
  /**
   *
   *
   * @type {KobanDeposit}
   * @memberof KobanOrder
   */
  public Deposit?: KobanDeposit
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public eShop?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public SellingMode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public eShopStatus?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public eShopInvoiceNumber?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public DeliveryMode?: string
  /**
   *
   *
   * @type {KobanAddress}
   * @memberof KobanOrder
   */
  public DeliveryAddress?: KobanAddress
  /**
   *
   *
   * @type {KobanAddress}
   * @memberof KobanOrder
   */
  public InvoiceAddress?: KobanAddress
  /**
   *
   *
   * @type {string}
   * @memberof KobanOrder
   */
  public UtmCampaign?: string
  /**
   *
   *
   * @type {KobanListValue}
   * @memberof KobanOrder
   */
  public Structure?: KobanListValue
  /**
   *
   *
   * @type {number}
   * @memberof KobanOrder
   */
  public AmountPayed?: number

  /**
   * Creates an instance of KobanOrder.
   * @param {Partial<IKobanOrder>} [order={}]
   * @memberof KobanOrder
   */
  constructor(order: Partial<IKobanOrder> = {}) {
    super(order)
    const {
      // tslint:disable-next-line: variable-name
      Number,
      Extcode,
      Status,
      Dateorder,
      DeliveryDateEstimated,
      Third,
      Quote,
      ShippingAddress,
      CurrencyCode,
      Shipping,
      Deal,
      Lines,
      Comments,
      PaymentMode,
      Deposit,
      eShop,
      SellingMode,
      eShopStatus,
      eShopInvoiceNumber,
      DeliveryMode,
      DeliveryAddress,
      InvoiceAddress,
      UtmCampaign,
      Structure,
      AmountPayed
    } = order
    if (Number) {
      this.Number = Number
    }
    if (Extcode) {
      this.Extcode = Extcode
    }
    if (Status) {
      this.Status = Status
    }
    if (Dateorder) {
      this.Dateorder = Dateorder instanceof Date ? Dateorder : new Date(Dateorder)
    }
    if (DeliveryDateEstimated) {
      this.DeliveryDateEstimated =
        DeliveryDateEstimated instanceof Date
          ? DeliveryDateEstimated
          : new Date(DeliveryDateEstimated)
    }
    if (Third) {
      this.Third = new KobanThird(Third)
    }
    if (Quote) {
      this.Quote = new KobanQuote(Quote)
    }
    if (ShippingAddress) {
      this.ShippingAddress = new KobanAddress(ShippingAddress)
    }
    if (CurrencyCode) {
      this.CurrencyCode = CurrencyCode
    }
    if (Shipping) {
      this.Shipping = new KobanShipping(Shipping)
    }
    if (Deal) {
      this.Deal = new KobanDeal(Deal)
    }
    this.Lines = Lines
      ? Lines.map(element => {
          return new KobanLine(element)
        })
      : []
    if (Comments) {
      this.Comments = Comments
    }
    if (PaymentMode) {
      this.PaymentMode = PaymentMode
    }
    if (Deposit) {
      this.Deposit = new KobanDeposit(Deposit)
    }
    if (eShop) {
      this.eShop = eShop
    }
    if (SellingMode) {
      this.SellingMode = SellingMode
    }
    if (eShopStatus) {
      this.eShopStatus = eShopStatus
    }
    if (eShopInvoiceNumber) {
      this.eShopInvoiceNumber = eShopInvoiceNumber
    }
    if (DeliveryMode) {
      this.DeliveryMode = DeliveryMode
    }
    if (DeliveryAddress) {
      this.DeliveryAddress = new KobanAddress(DeliveryAddress)
    }
    if (InvoiceAddress) {
      this.InvoiceAddress = new KobanAddress(InvoiceAddress)
    }
    if (UtmCampaign) {
      this.UtmCampaign = UtmCampaign
    }
    if (Structure) {
      this.Structure = new KobanListValue(Structure)
    }
    if (AmountPayed) {
      this.AmountPayed = AmountPayed
    }
  }
}

export { IKobanOrder, KobanOrder }
