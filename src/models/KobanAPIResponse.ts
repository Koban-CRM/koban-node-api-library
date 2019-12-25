// import { Invoice } from '.';
import { IKobanAPIResponse } from './interfaces'

/**
 *
 *
 * @class KobanAPIResponse
 * @implements {IKobanAPIResponse}
 */
class KobanAPIResponse implements IKobanAPIResponse {
  /**
   *
   *
   * @type {any}
   * @memberof KobanAPIResponse
   */
  public Result!: any
  /**
   *
   *
   * @type {boolean}
   * @memberof KobanAPIResponse
   */
  public Success!: boolean
  /**
   *
   *
   * @type {(string | undefined)}
   * @memberof KobanAPIResponse
   */
  public Message?: string | undefined
  /**
   *
   *
   * @type {string[]}
   * @memberof KobanAPIResponse
   */
  public Errors!: string[]

  /**
   * Creates an instance of KobanAPIResponse.
   * @param {object} data
   * @memberof KobanAPIResponse
   */
  constructor(data: object) {
    Object.assign(this, data)
  }
}

export { KobanAPIResponse }
