import axios from 'axios'
import {
  KobanAPIResponse,
  KobanThirdUniqueProperty,
  KobanEShopOrder,
  KobanEShopTrackingOrder,
  KobanResultList,
  KobanThird,
  IThirdGetUpdated,
  IThirdGetStatus,
  KobanTag
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class ThirdService
 */
class ThirdService extends BaseService {
  /**
   * Creates an instance of ThirdService.
   * @param {IConfigService} config
   * @memberof ThirdService
   */
  constructor(config: IConfigService) {
    super(config, '/ncThird')
  }

  /**
   * Crée ou modifie un ensemble de compte.
   * Si un compte correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le compte.
   *
   * @param {KobanThird[]} thirds Liste d'object KobanThird sous forme de tableau
   * @param {KobanThirdUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le compte doit être créé ou modifié.
   * L'API vérifie qu'un compte correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @returns {Promise<string[]>}
   * @memberof ThirdService
   */
  public async postMany(
    thirds: KobanThird[],
    uniqueproperty: KobanThirdUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (thirds.length > 100) {
          throw new Error(
            `You are trying to send ${thirds.length} thirds but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/Many`, thirds, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            uniqueproperty
          }
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
   * Crée ou modifie un compte.
   * Si un compte correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le compte.
   *
   * @param {KobanThird} third Le compte
   * @param {KobanThirdUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le compte doit être créé ou modifié.
   * L'API vérifie qu'un compte correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @returns {Promise<string>}
   * @memberof ThirdService
   */
  public async postOne(
    third: KobanThird,
    uniqueproperty: KobanThirdUniqueProperty
  ): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostOne`, third, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            uniqueproperty
          }
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
   * Crée ou modifie un compte.
   *
   * @param {KobanThird} third Le compte
   * @param {string} creationtype
   * @returns {Promise<string>}
   * @memberof ThirdService
   */
  public async postOneFromEMail(third: KobanThird, creationtype: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostOneFromEMail`, third, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            creationtype
          }
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
   * Renvoie la liste des comptes créés ou modifiés depuis une date de référence
   *
   * @param {IThirdGetUpdated} __namedParameters Options object
   * @param {number} length Longueur de la liste renvoyée (pagination).
   * @param {number} start Index de départ (pagination).
   * @param {Date} updated date de référence.
   * @param {string} structcode Code de la structure.
   * @returns {Promise<KobanResultList<KobanThird>>}
   * @memberof ThirdService
   */
  public async getUpdated(
    { length, start, updated, structcode }: IThirdGetUpdated = {
      length: 20,
      start: 0,
      updated: new Date(),
      structcode: ''
    }
  ): Promise<KobanResultList<KobanThird>> {
    return new Promise<KobanResultList<KobanThird>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetUpdated`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            updated: Math.round(updated.getTime() / 1000).toString(),
            l: length,
            s: start,
            structcode
          }
        })
        const responseData: KobanResultList<KobanThird> = new KobanResultList(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   *
   *
   * @param {IThirdGetUpdated} __namedParameters Options object
   * @param {number} length Longueur de la liste renvoyée (pagination).
   * @param {number} start Index de départ (pagination).
   * @param {Date} updated date de référence.
   * @param {string} structcode Code de la structure.
   * @returns {Promise<KobanResultList<KobanThird>>}
   * @memberof ThirdService
   */
  public async getClosedUpdated(
    { length, start, updated, structcode }: IThirdGetUpdated = {
      length: 20,
      start: 0,
      updated: new Date(),
      structcode: ''
    }
  ): Promise<KobanResultList<KobanThird>> {
    return new Promise<KobanResultList<KobanThird>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetClosedUpdated`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            updated: Math.round(updated.getTime() / 1000).toString(),
            l: length,
            s: start,
            structcode
          }
        })
        const responseData: KobanResultList<KobanThird> = new KobanResultList(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie la liste des comptes dont le label contient le terme recherché
   *
   * @param {string} search String recherché
   * @returns {Promise<KobanResultList<KobanThird>>}
   * @memberof ThirdService
   */
  public async getByLabel(search: string): Promise<KobanResultList<KobanThird>> {
    return new Promise<KobanResultList<KobanThird>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetByLabel`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            search
          }
        })
        const responseData: KobanResultList<KobanThird> = new KobanResultList(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie la liste des comptes modifiés ou créés depuis une date de référence et correspondant à un statut
   *
   * @param {IThirdGetStatus} __namedParameters Options object
   * @param {number} length Longueur de la liste renvoyée (pagination).
   * @param {number} start Index de départ (pagination).
   * @param {Date} updated date de référence.
   * @param {string} structcode Code de la structure.
   * @param {string} status Code du statut paramétré dans Koban (Ex. : CLI pour client, PRO pour prospect)
   * @returns {Promise<KobanResultList<KobanThird>>}
   * @memberof ThirdService
   */
  public async getStatus(
    { length, start, updated, structcode, status }: IThirdGetStatus = {
      length: 20,
      start: 0,
      updated: new Date(),
      structcode: '',
      status: ''
    }
  ): Promise<KobanResultList<KobanThird>> {
    return new Promise<KobanResultList<KobanThird>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetStatus`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            updated: Math.round(updated.getTime() / 1000).toString(),
            l: length,
            s: start,
            structcode,
            status
          }
        })
        const responseData: KobanResultList<KobanThird> = new KobanResultList(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie un compte à partir de son identifiant
   *
   * @param {string} id Identifiant (Guid) du compte
   * @returns {Promise<KobanThird>}
   * @memberof ThirdService
   */
  public async getOne(id: string): Promise<KobanThird> {
    return new Promise<KobanThird>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetOne`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            id
          }
        })
        const responseData: KobanThird = new KobanThird(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie un compte à partir de son identifiant externe
   *
   * @param {string} extcode Identifiant externe du compte
   * @returns {Promise<KobanThird>}
   * @memberof ThirdService
   */
  public async getOneByExtcode(extcode: string): Promise<KobanThird> {
    return new Promise<KobanThird>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetOneByExtcode`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            extcode
          }
        })
        const responseData: KobanThird = new KobanThird(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Remove Tags from a Third
   *
   * @param {KobanTag} tags Liste des Tag a supprimer
   * @param {string} id Identifiant du Compte
   * @returns {Promise<boolean>}
   * @memberof ThirdService
   */
  public async removeTagsFromThird(tags: KobanTag, id: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/RemoveTagsFromThird`, tags, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            id
          }
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
}

export { ThirdService }
