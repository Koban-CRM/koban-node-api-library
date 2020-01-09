import axios from 'axios'
import {
  KobanAPIResponse,
  KobanResultList,
  IProductCategoryGetUpdated,
  KobanProduct,
  KobanProductUniqueProperty,
  KobanProductCategoryUniqueProperty
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class ProductService
 */
class ProductService extends BaseService {
  /**
   * Creates an instance of ProductService.
   * @param {IConfigService} config
   * @memberof ProductService
   */
  constructor(config: IConfigService) {
    super(config, '/ncProduct')
  }

  /**
   * Renvoie la liste des produits correspondant à un paramètre de recherche
   *
   * @param {string} search Valeur de recherche
   * @returns {Promise<KobanResultList<KobanProduct>>}
   * @memberof ProductService
   */
  public async getSearch(search: string): Promise<KobanResultList<KobanProduct>> {
    return new Promise<KobanResultList<KobanProduct>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetSearch`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            search
          }
        })
        const responseData: KobanResultList<KobanProduct> = new KobanResultList<KobanProduct>(
          request.data,
          KobanProduct
        )
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie la liste des produits gérés en stock et correspondant à un paramètre de recherche
   *
   * @param {string} search Valeur de recherche
   * @returns {Promise<KobanResultList<KobanProduct>>}
   * @memberof ProductService
   */
  public async getSearchForStock(search: string): Promise<KobanResultList<KobanProduct>> {
    return new Promise<KobanResultList<KobanProduct>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetSearchForStock`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            search
          }
        })
        const responseData: KobanResultList<KobanProduct> = new KobanResultList<KobanProduct>(
          request.data,
          KobanProduct
        )
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie la liste des produits créés ou modifiés depuis une date de référence
   *
   * @param {IProductCategoryGetUpdated} __namedParameters Options object
   * @param {number} length Longueur de la liste renvoyée (pagination).
   * @param {number} start Index de départ (pagination).
   * @param {Date} updated date de référence.
   * @returns {Promise<KobanResultList<KobanProduct>>}
   * @memberof ProductService
   */
  public async getUpdated(
    { length, start, updated }: IProductCategoryGetUpdated = {
      length: 20,
      start: 0,
      updated: new Date()
    }
  ): Promise<KobanResultList<KobanProduct>> {
    return new Promise<KobanResultList<KobanProduct>>(async (resolve, reject) => {
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
        const responseData: KobanResultList<KobanProduct> = new KobanResultList<KobanProduct>(
          request.data,
          KobanProduct
        )
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Renvoie la définition d'un produit
   *
   * @param {string} id Guid du produit
   * @returns {Promise<KobanProduct>}
   * @memberof ProductService
   */
  public async getOne(id: string): Promise<KobanProduct> {
    return new Promise<KobanProduct>(async (resolve, reject) => {
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
        const responseData: KobanProduct = new KobanProduct(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Crée ou modifie un ensemble de produits.
   * Si un produit correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le produit.
   *
   * @param {KobanProduct[]} products Tableau de Produits
   * @param {KobanProductUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le produit doit être créé ou modifié.
   * L'API vérifie qu'un produit correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @param {KobanProductCategoryUniqueProperty} catproductuniqueproperty Propriété définissant la clé de la catégorie de produit associée au produit.
   * @returns {Promise<string[]>}
   * @memberof ProductService
   */
  public async postMany(
    products: KobanProduct[],
    uniqueproperty: KobanProductUniqueProperty,
    catproductuniqueproperty: KobanProductCategoryUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (products.length > 100) {
          throw new Error(
            `You are trying to send ${products.length} products but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/Many`, products, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            uniqueproperty,
            catproductuniqueproperty
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
   * Crée ou modifie un produit.
   * Si un produit correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le produit.
   *
   * @param {KobanProduct} product Le produit
   * @param {KobanProductUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le produit doit être créé ou modifié.
   * L'API vérifie qu'un produit correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @param {KobanProductCategoryUniqueProperty} catproductuniqueproperty Propriété définissant la clé de la catégorie de produit associée au produit.
   * @returns {Promise<string>}
   * @memberof ProductService
   */
  public async postOne(
    product: KobanProduct,
    uniqueproperty: KobanProductUniqueProperty,
    catproductuniqueproperty: KobanProductCategoryUniqueProperty
  ): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostOne`, product, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            uniqueproperty,
            catproductuniqueproperty
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

export { ProductService }
