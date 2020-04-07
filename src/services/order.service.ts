import axios from 'axios'
import {
  KobanAPIResponse,
  KobanThirdUniqueProperty,
  KobanDealUniqueProperty,
  KobanOrder,
  KobanOrderUniqueProperty,
  IOrderGetUpdated,
  KobanEShopOrder,
  KobanEShopTrackingOrder,
  IOrderGetByDate,
  KobanResultList,
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class OrderService
 */
class OrderService extends BaseService {
  /**
   * Creates an instance of OrderService.
   * @param {IConfigService} config
   * @memberof OrderService
   */
  constructor(config: IConfigService) {
    super(config, '/ncOrder')
  }

  /**
   * Crée ou modifie un ensemble de bons de commandes.
   * Si un bon de commande correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le bon de commande.
   *
   * @param {KobanOrder[]} orders Liste des bons de commande en tableau
   * @param {KobanOrderUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le bon de commande doit être créé ou modifié.
   * L'API vérifie qu'un bon de commande correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @param {KobanDealUniqueProperty} dealuniqueproperty Propriété définissant la clé de l'opportunité associée au bon de commande.
   * @param {KobanThirdUniqueProperty} thirduniqueproperty Propriété définissant la clé du compte associé au produit.
   * @returns {Promise<string[]>}
   * @memberof OrderService
   */
  public async postMany(
    orders: KobanOrder[],
    uniqueproperty: KobanOrderUniqueProperty,
    dealuniqueproperty: KobanDealUniqueProperty,
    thirduniqueproperty: KobanThirdUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (orders.length > 100) {
          throw new Error(
            `You are trying to send ${orders.length} orders but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/PostMany`, orders, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user,
          },
          params: {
            dealuniqueproperty,
            thirduniqueproperty,
            uniqueproperty,
          },
        })
        const responseData: KobanAPIResponse = new KobanAPIResponse(request.data)
        if (!responseData.Success) {
          throw this.handleApiError(responseData)
        }
        resolve(responseData.Result)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   *
   * @param {KobanOrder} order
   * @param {KobanOrderUniqueProperty} uniqueproperty
   * @returns {Promise<string>}
   * @memberof OrderService
   */
  public async postCancel(
    order: KobanOrder,
    uniqueproperty: KobanOrderUniqueProperty
  ): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostCancel`, order, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user,
          },
          params: {
            uniqueproperty,
          },
        })
        const responseData: KobanAPIResponse = new KobanAPIResponse(request.data)
        if (!responseData.Success) {
          throw this.handleApiError(responseData)
        }
        resolve(responseData.Result)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   *
   * @param {KobanOrder} order
   * @param {KobanOrderUniqueProperty} uniqueproperty
   * @returns {Promise<string>}
   * @memberof OrderService
   */
  public async postOne(
    order: KobanOrder,
    uniqueproperty: KobanOrderUniqueProperty
  ): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostOne`, order, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user,
          },
          params: {
            uniqueproperty,
          },
        })
        const responseData: KobanAPIResponse = new KobanAPIResponse(request.data)
        if (!responseData.Success) {
          throw this.handleApiError(responseData)
        }
        resolve(responseData.Result)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   *
   * @param {KobanEShopOrder} eShopOrder
   * @param {KobanOrderUniqueProperty} uniqueproperty
   * @param {KobanThirdUniqueProperty} thirduniqueproperty
   * @param {KobanDealUniqueProperty} [dealuniqueproperty]
   * @returns {Promise<string>}
   * @memberof OrderService
   */
  public async postOneFromeShop(
    eShopOrder: KobanEShopOrder,
    uniqueproperty: KobanOrderUniqueProperty,
    thirduniqueproperty: KobanThirdUniqueProperty,
    dealuniqueproperty?: KobanDealUniqueProperty
  ): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostOneFromeShop`, eShopOrder, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user,
          },
          params: {
            uniqueproperty,
            thirduniqueproperty,
            dealuniqueproperty,
          },
        })
        const responseData: KobanAPIResponse = new KobanAPIResponse(request.data)
        if (!responseData.Success) {
          throw this.handleApiError(responseData)
        }
        resolve(responseData.Result)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   *
   * @param {KobanEShopTrackingOrder} tracking
   * @param {KobanOrderUniqueProperty} uniqueproperty
   * @returns {Promise<string>}
   * @memberof OrderService
   */
  public async updateTrackingOrderFromShop(
    tracking: KobanEShopTrackingOrder,
    uniqueproperty: KobanOrderUniqueProperty
  ): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(
          `${this.serviceUrl}/UpdateTrackingOrderFromShop`,
          tracking,
          {
            headers: {
              Accept: 'application/json',
              'X-ncApi': this.key,
              'X-ncUser': this.user,
            },
            params: {
              uniqueproperty,
            },
          }
        )
        const responseData: KobanAPIResponse = new KobanAPIResponse(request.data)
        if (!responseData.Success) {
          throw this.handleApiError(responseData)
        }
        resolve(responseData.Result)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie la liste des bons de commande entre deux dates
   *
   * @param {IOrderGetByDate} __namedParameters - Options object
   * @param {number} length Longueur de la liste renvoyée (pagination).
   * @param {number} start Index de départ (pagination).
   * @param {Date} from date de début de la plage
   * @param {Date} to date de fin de la plage
   * @returns {Promise<KobanResultList<KobanOrder>>}
   * @memberof OrderService
   */
  public async getByDate(
    { length, start, from, to }: IOrderGetByDate = {
      length: 20,
      start: 0,
      from: new Date(),
      to: new Date(),
    }
  ): Promise<KobanResultList<KobanOrder>> {
    return new Promise<KobanResultList<KobanOrder>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetByDate`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user,
          },
          params: {
            st: start,
            s: length,
            from: Math.round(from.getTime() / 1000).toString(),
            to: Math.round(to.getTime() / 1000).toString(),
          },
        })
        const responseData: KobanResultList<KobanOrder> = new KobanResultList<KobanOrder>(
          request.data,
          KobanOrder
        )
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie la liste des bons de commande créés ou modifiés depuis une date de référence
   *
   * @param {IOrderGetUpdated} __namedParameters Options object
   * @param {number} length Longueur de la liste renvoyée (pagination).
   * @param {number} start Index de départ (pagination).
   * @param {Date} updated date de référence.
   * @param {boolean} fill Fill children objects.
   * @returns {Promise<KobanResultList<KobanOrder>>}
   * @memberof OrderService
   */
  public async getUpdated(
    { length, start, updated, fill }: IOrderGetUpdated = {
      length: 20,
      start: 0,
      updated: new Date(),
      fill: false,
    }
  ): Promise<KobanResultList<KobanOrder>> {
    return new Promise<KobanResultList<KobanOrder>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetUpdated`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user,
          },
          params: {
            updated: Math.round(updated.getTime() / 1000).toString(),
            l: length,
            s: start,
            f: fill === true ? '1' : '0',
          },
        })
        const responseData: KobanResultList<KobanOrder> = new KobanResultList<KobanOrder>(
          request.data,
          KobanOrder
        )
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export { OrderService }
