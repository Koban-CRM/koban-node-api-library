import {
  InvoiceService,
  PaymentService,
  OrderService,
  ListService,
  ThirdService,
  ProductCategoryService,
  ProductService
} from './services'

/**
 *
 *
 * @interface IConfig
 */
interface IConfig {
  /**
   * Auth Token from Koban
   *
   * @type {string}
   * @memberof KobanSDK
   */
  token: string
  /**
   * User from Koban
   *
   * @type {string}
   * @memberof KobanSDK
   */
  user: string
  /**
   * Host url where your koban instance is
   *
   * @type {string}
   * @memberof KobanSDK
   */
  kobanInstance?: string
  /**
   * Api version to interact with
   *
   * @type {string}
   * @memberof KobanSDK
   */
  apiVersion?: string
}

/**
 *
 *
 * @export
 * @class KobanSDK
 * @implements {IConfig}
 */
class KobanSDK implements IConfig {
  /**
   * Auth Token from Koban
   *
   * @type {string}
   * @memberof KobanSDK
   */
  public token: string
  /**
   * User from Koban
   *
   * @type {string}
   * @memberof KobanSDK
   */
  public user: string
  /**
   * Host url where your koban instance is
   *
   * @type {string}
   * @memberof KobanSDK
   * @default https://app-koban.com/api
   */
  public kobanInstance: string = 'https://app-koban.com/api'
  /**
   * Api version to interact with
   *
   * @type {string}
   * @memberof KobanSDK
   * @default v1
   */
  public apiVersion: string = 'v1'
  /**
   * Invoice Service
   *
   * @type {InvoiceService}
   * @memberof KobanSDK
   */
  public invoiceService: InvoiceService

  /**
   * Payment Service
   *
   * @type {PaymentService}
   * @memberof KobanSDK
   */
  public paymentService: PaymentService

  /**
   * Order Service
   *
   * @type {OrderService}
   * @memberof KobanSDK
   */
  public orderService: OrderService

  /**
   * List Service
   *
   * @type {ListService}
   * @memberof KobanSDK
   */
  public listService: ListService

  /**
   * Third Service
   *
   * @type {ThirdService}
   * @memberof KobanSDK
   */
  public thirdService: ThirdService

  /**
   * Product Category Service
   *
   * @type {ProductCategoryService}
   * @memberof KobanSDK
   */
  public productCategoryService: ProductCategoryService

  /**
   * Product Service
   *
   * @type {ProductService}
   * @memberof KobanSDK
   */
  public productService: ProductService

  /**
   * Creates an instance of KobanSDK.
   *
   * @param {!IConfig} config
   * @memberof KobanSDK
   */
  constructor(config: IConfig) {
    this.token = config.token
    this.user = config.user
    Object.assign(this, config)
    this.invoiceService = new InvoiceService({
      baseUrl: this.buildBaseUrl(),
      key: this.token,
      user: this.user
    })
    this.paymentService = new PaymentService({
      baseUrl: this.buildBaseUrl(),
      key: this.token,
      user: this.user
    })
    this.orderService = new OrderService({
      baseUrl: this.buildBaseUrl(),
      key: this.token,
      user: this.user
    })
    this.listService = new ListService({
      baseUrl: this.buildBaseUrl(),
      key: this.token,
      user: this.user
    })
    this.thirdService = new ThirdService({
      baseUrl: this.buildBaseUrl(),
      key: this.token,
      user: this.user
    })
    this.productCategoryService = new ProductCategoryService({
      baseUrl: this.buildBaseUrl(),
      key: this.token,
      user: this.user
    })
    this.productService = new ProductService({
      baseUrl: this.buildBaseUrl(),
      key: this.token,
      user: this.user
    })
  }

  /**
   * Build API base Url
   *
   * @private
   * @memberof KobanSDK
   */
  private buildBaseUrl(): string {
    return this.kobanInstance + '/' + this.apiVersion
  }
}

export { KobanSDK }
