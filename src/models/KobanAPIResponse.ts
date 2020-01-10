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

// type Constructor<T> = { new (...args: any): T };

/**
 *
 *
 * @class KobanResultList
 * @template T
 */
class KobanResultList<T> {
  /**
   *
   *
   * @type {number}
   * @memberof KobanResultList
   */
  public Length: number
  /**
   *
   *
   * @type {T[]}
   * @memberof KobanResultList
   */
  public List: T[]

  /**
   * Creates an instance of KobanResultList.
   * @param {*} data
   * @memberof KobanResultList
   */
  constructor(data: any) {
    let type: new (...args: any) => T
    const { Length, List } = data
    this.Length = Length
    this.List = List.map((item: T) => {
      return new type(item)
    })
  }
}

export { KobanAPIResponse, KobanResultList }
