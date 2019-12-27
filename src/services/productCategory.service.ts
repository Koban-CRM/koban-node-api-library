import axios from 'axios'
import {
  KobanAPIResponse,
  KobanResultList,
  IProductCategoryGetUpdated,
  KobanProductCategory,
  KobanProductCategoryUniqueProperty
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class ProductCategoryService
 */
class ProductCategoryService extends BaseService {
  /**
   * Creates an instance of ProductCategoryService.
   * @param {IConfigService} config
   * @memberof ProductCategoryService
   */
  constructor(config: IConfigService) {
    super(config, '/ncCatproduct')
  }

  /**
   * Crée ou modifie un ensemble de catégories de produits.
   * Si un produit correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le produit.
   *
   * @param {KobanProductCategory[]} categories Liste des categories KobanProductCategory sous forme de tableau
   * @param {KobanProductCategoryUniqueProperty} uniqueproperty  Propriété sélectionnée pour vérifier si le produit doit être créé ou modifié.
   * L'API vérifie qu'une catégorie correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @returns {Promise<string[]>}
   * @memberof ProductCategoryService
   */
  public async postMany(
    categories: KobanProductCategory[],
    uniqueproperty: KobanProductCategoryUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (categories.length > 100) {
          throw new Error(
            `You are trying to send ${categories.length} categories but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/Many`, categories, {
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
   * Crée ou modifie une catégorie de produit.
   * Si une catégories de produit correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le produit.
   *
   * @param {KobanProductCategory} category La categorie
   * @param {KobanProductCategoryUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le produit doit être créé ou modifié.
   * L'API vérifie qu'une catégorie correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @returns {Promise<string>}
   * @memberof ProductCategoryService
   */
  public async postOne(
    category: KobanProductCategory,
    uniqueproperty: KobanProductCategoryUniqueProperty
  ): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostOne`, category, {
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
   * Renvoie la liste des categories de produit créés ou modifiés depuis une date de référence
   *
   * @param {IProductCategoryGetUpdated} __namedParameters Options object
   * @param {number} length Longueur de la liste renvoyée (pagination).
   * @param {number} start Index de départ (pagination).
   * @param {Date} updated date de référence.
   * @returns {Promise<KobanResultList<KobanProductCategory>>}
   * @memberof ProductCategoryService
   */
  public async getUpdated(
    { length, start, updated }: IProductCategoryGetUpdated = {
      length: 20,
      start: 0,
      updated: new Date()
    }
  ): Promise<KobanResultList<KobanProductCategory>> {
    return new Promise<KobanResultList<KobanProductCategory>>(async (resolve, reject) => {
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
            s: start
          }
        })
        const responseData: KobanResultList<KobanProductCategory> = new KobanResultList(
          request.data
        )
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export { ProductCategoryService }
