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
    this.Number = Number ? Number : undefined
    this.Extcode = Extcode ? Extcode : undefined
    this.Status = Status ? Status : undefined
    if (Dateorder) {
      this.Dateorder = Dateorder instanceof Date ? Dateorder : new Date(Dateorder)
    } else {
      this.Dateorder = undefined
    }
    if (DeliveryDateEstimated) {
      this.DeliveryDateEstimated =
        DeliveryDateEstimated instanceof Date
          ? DeliveryDateEstimated
          : new Date(DeliveryDateEstimated)
    } else {
      this.DeliveryDateEstimated = undefined
    }
    this.Third = Third ? new KobanThird(Third) : undefined
    this.Quote = Quote ? new KobanQuote(Quote) : undefined
    this.ShippingAddress = ShippingAddress ? new KobanAddress(ShippingAddress) : undefined
    this.CurrencyCode = CurrencyCode ? CurrencyCode : undefined
    this.Shipping = Shipping ? new KobanShipping(Shipping) : undefined
    this.Deal = Deal ? new KobanDeal(Deal) : undefined
    this.Lines = Lines
      ? Lines.map(element => {
          return new KobanLine(element)
        })
      : []
    this.Comments = Comments ? Comments : undefined
    this.PaymentMode = PaymentMode ? PaymentMode : undefined
    this.Deposit = Deposit ? new KobanDeposit(Deposit) : undefined
    this.eShop = eShop ? eShop : undefined
    this.SellingMode = SellingMode ? SellingMode : undefined
    this.eShopStatus = eShopStatus ? eShopStatus : undefined
    this.eShopInvoiceNumber = eShopInvoiceNumber ? eShopInvoiceNumber : undefined
    this.DeliveryMode = DeliveryMode ? DeliveryMode : undefined
    this.DeliveryAddress = DeliveryAddress ? new KobanAddress(DeliveryAddress) : undefined
    this.InvoiceAddress = InvoiceAddress ? new KobanAddress(InvoiceAddress) : undefined
    this.UtmCampaign = UtmCampaign ? UtmCampaign : undefined
    this.Structure = Structure ? new KobanListValue(Structure) : undefined
    this.AmountPayed = AmountPayed ? AmountPayed : undefined
  }
}

export { IKobanOrder, KobanOrder }
