/**
 *
 *
 * @interface IKobanAPIResponse
 */
interface IKobanAPIResponse {
  Result: string[]
  Success: boolean
  Message?: string
  Errors: string[]
}

/**
 *
 *
 * @interface IOrderGetUpdated
 */
interface IOrderGetUpdated {
  /**
   * Longueur de la liste renvoyée (pagination).
   *
   * @type {number}
   * @memberof IOrderGetUpdated
   */
  length?: number
  /**
   * Index de départ (pagination).
   *
   * @type {number}
   * @memberof IOrderGetUpdated
   */
  start?: number
  /**
   * date de référence.
   *
   * @type {Date}
   * @memberof IOrderGetUpdated
   */
  updated: Date
  /**
   * Fill children objects.
   *
   * @type {boolean}
   * @memberof IOrderGetUpdated
   */
  fill?: boolean
}

/**
 *
 *
 * @interface IProductCategoryGetUpdated
 */
interface IProductCategoryGetUpdated {
  /**
   * Longueur de la liste renvoyée (pagination).
   *
   * @type {number}
   * @memberof IProductCategoryGetUpdated
   */
  length?: number
  /**
   * Index de départ (pagination).
   *
   * @type {number}
   * @memberof IProductCategoryGetUpdated
   */
  start?: number
  /**
   * date de référence.
   *
   * @type {Date}
   * @memberof IProductCategoryGetUpdated
   */
  updated: Date
}

/**
 *
 *
 * @interface IThirdGetUpdated
 */
interface IThirdGetUpdated {
  /**
   * Longueur de la liste renvoyée (pagination).
   *
   * @type {number}
   * @memberof IThirdGetUpdated
   */
  length?: number
  /**
   * Index de départ (pagination).
   *
   * @type {number}
   * @memberof IThirdGetUpdated
   */
  start?: number
  /**
   * date de référence.
   *
   * @type {Date}
   * @memberof IThirdGetUpdated
   */
  updated: Date
  /**
   * Code de la structure.
   *
   * @type {string}
   * @memberof IThirdGetUpdated
   */
  structcode?: string
}

/**
 *
 *
 * @interface IThirdGetStatus
 */
interface IThirdGetStatus {
  /**
   * Longueur de la liste renvoyée (pagination).
   *
   * @type {number}
   * @memberof IThirdGetStatus
   */
  length?: number
  /**
   * Index de départ (pagination).
   *
   * @type {number}
   * @memberof IThirdGetStatus
   */
  start?: number
  /**
   * date de référence.
   *
   * @type {Date}
   * @memberof IThirdGetStatus
   */
  updated: Date
  /**
   * Code de la structure.
   *
   * @type {string}
   * @memberof IThirdGetStatus
   */
  structcode?: string

  /**
   * Code du statut paramétré dans Koban (Ex. : CLI pour client, PRO pour prospect)
   *
   * @type {string}
   * @memberof IThirdGetStatus
   */
  status?: string
}

/**
 *
 *
 * @interface IOrderGetByDate
 */
interface IOrderGetByDate {
  /**
   * Longueur de la liste renvoyée (pagination).
   *
   * @type {number}
   * @memberof IOrderGetByDate
   */
  length: number
  /**
   * Index de départ (pagination).
   *
   * @type {number}
   * @memberof IOrderGetByDate
   */
  start?: number
  /**
   * date de début de la plage
   *
   * @type {Date}
   * @memberof IOrderGetByDate
   */
  from: Date
  /**
   * date de fin de la plage
   *
   * @type {Date}
   * @memberof IOrderGetByDate
   */
  to: Date
}

export {
  IKobanAPIResponse,
  IOrderGetByDate,
  IOrderGetUpdated,
  IThirdGetStatus,
  IThirdGetUpdated,
  IProductCategoryGetUpdated
}
