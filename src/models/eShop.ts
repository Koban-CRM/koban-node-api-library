import { KobanNullable } from './types'
import { KobanOrder, IKobanOrder } from './order'
import { IKobanThird, KobanThird } from './third'

/**
 *
 *
 * @interface IKobanTracking
 */
interface IKobanTracking {
  cid: KobanNullable<string>
  utm_campaign: KobanNullable<string>
  utm_medium: KobanNullable<string>
  utm_source: KobanNullable<string>
  utm_term: KobanNullable<string>
  utm_content: KobanNullable<string>
  IP: KobanNullable<string>
}

/**
 *
 *
 * @class KobanTracking
 */
class KobanTracking {
  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  public cid?: string

  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  // tslint:disable-next-line: variable-name
  public utm_campaign?: string

  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  // tslint:disable-next-line: variable-name
  public utm_medium?: string

  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  // tslint:disable-next-line: variable-name
  public utm_source?: string

  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  // tslint:disable-next-line: variable-name
  public utm_term?: string

  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  // tslint:disable-next-line: variable-name
  public utm_content?: string

  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  public IP?: string

  /**
   * Creates an instance of KobanTracking.
   * @param {Partial<IKobanTracking>} [tracking={}]
   * @memberof KobanTracking
   */
  constructor(tracking: Partial<IKobanTracking> = {}) {
    const { cid, utm_campaign, utm_medium, utm_source, utm_term, utm_content, IP } = tracking
    this.cid = cid ? cid : undefined
    this.utm_campaign = utm_campaign ? utm_campaign : undefined
    this.utm_medium = utm_medium ? utm_medium : undefined
    this.utm_source = utm_source ? utm_source : undefined
    this.utm_term = utm_term ? utm_term : undefined
    this.utm_content = utm_content ? utm_content : undefined
    this.IP = IP ? IP : undefined
  }
}

/**
 *
 *
 * @interface IKobanEShopTrackingOrder
 */
interface IKobanEShopTrackingOrder {
  Order: KobanNullable<IKobanOrder>
  Track: KobanNullable<IKobanTracking>
}

/**
 *
 *
 * @class KobanEShopTrackingOrder
 */
class KobanEShopTrackingOrder {
  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  public Order?: KobanOrder
  /**
   *
   *
   * @type {KobanTracking}
   * @memberof KobanEShopTrackingOrder
   */
  public Track?: KobanTracking

  /**
   * Creates an instance of KobanEShopTrackingOrder.
   * @param {Partial<IKobanEShopTrackingOrder>} [eShopTrackingOrder={}]
   * @memberof KobanEShopTrackingOrder
   */
  constructor(eShopTrackingOrder: Partial<IKobanEShopTrackingOrder> = {}) {
    const { Order, Track } = eShopTrackingOrder
    this.Order = Order ? new KobanOrder(Order) : undefined
    this.Track = Track ? new KobanTracking(Track) : undefined
  }
}

/**
 *
 *
 * @interface IKobanEShopOrder
 */
interface IKobanEShopOrder {
  Order: KobanNullable<IKobanOrder>
  Customer: KobanNullable<IKobanThird>
  Track: KobanNullable<IKobanTracking>
  eShop: KobanNullable<string>
}

/**
 *
 *
 * @class KobanEShopOrder
 */
class KobanEShopOrder {
  /**
   *
   *
   * @type {string}
   * @memberof KobanTracking
   */
  public Order?: KobanOrder
  /**
   *
   *
   * @type {KobanThird}
   * @memberof KobanEShopOrder
   */
  public Customer?: KobanThird
  /**
   *
   *
   * @type {KobanTracking}
   * @memberof KobanEShopTrackingOrder
   */
  public Track?: KobanTracking
  /**
   *
   *
   * @type {string}
   * @memberof KobanEShopOrder
   */
  public eShop?: string

  /**
   * Creates an instance of KobanEShopOrder.
   * @param {Partial<IKobanEShopOrder>} [eShopOrder={}]
   * @memberof KobanEShopOrder
   */
  constructor(eShopOrder: Partial<IKobanEShopOrder> = {}) {
    const { Order, Customer, Track, eShop } = eShopOrder
    this.Order = Order ? new KobanOrder(Order) : undefined
    this.Customer = Customer ? new KobanThird(Customer) : undefined
    this.Track = Track ? new KobanTracking(Track) : undefined
    this.eShop = eShop ? eShop : undefined
  }
}

export {
  KobanEShopOrder,
  KobanEShopTrackingOrder,
  KobanTracking,
  IKobanEShopOrder,
  IKobanEShopTrackingOrder,
  IKobanTracking
}
