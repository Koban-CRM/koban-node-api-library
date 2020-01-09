import { KobanAPIResponse } from '../models'

/**
 *
 *
 * @interface IConfigService
 */
interface IConfigService {
  baseUrl: string
  user: string
  key: string
}

/**
 *
 *
 * @abstract
 * @class BaseService
 */
abstract class BaseService {
  /**
   *
   *
   * @private
   * @type {string}
   * @memberof BaseService
   */
  public user!: string
  /**
   *
   *
   * @private
   * @type {string}
   * @memberof BaseService
   */
  public key!: string
  /**
   *
   *
   * @private
   * @type {string}
   * @memberof BaseService
   */
  public baseUrl!: string
  /**
   * Base Url of the Service API
   *
   * @private
   * @type {string}
   * @memberof BaseService
   */
  public urlService: string
  /**
   *
   *
   * @readonly
   * @protected
   * @type {string}
   * @memberof BaseService
   */
  public get serviceUrl(): string {
    return this.baseUrl + this.urlService
  }

  /**
   * Creates an instance of BaseService.
   * @param {IConfigService} config
   * @param {string} urlService
   * @memberof BaseService
   */
  constructor(config: IConfigService, urlService: string) {
    Object.assign(this, config)
    this.urlService = urlService
  }

  /**
   *
   *
   * @param {KobanAPIResponse} payload
   * @returns {Error}
   * @memberof BaseService
   */
  public handleApiError(payload: KobanAPIResponse): Error {
    if (payload.Message) {
      return new Error(payload.Message)
    } else {
      return new Error(payload.Errors.join('\n'))
    }
  }
}

export { BaseService, IConfigService }
