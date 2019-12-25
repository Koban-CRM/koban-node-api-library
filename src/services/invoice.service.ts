import axios from 'axios'
import {
  KobanAPIResponse,
  KobanInvoice,
  KobanOrderUniquePropertyInvoice,
  KobanThirdUniquePropertyInvoice,
  KobanUniquePropertyInvoice
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class InvoiceService
 */
class InvoiceService extends BaseService {
  /**
   * Creates an instance of InvoiceService.
   * @param {IConfigService} config
   * @memberof InvoiceService
   */
  constructor(config: IConfigService) {
    super(config, '/ncInvoice')
  }

  /**
   * Crée ou modifie un ensemble de factures.
   * Si une facture correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour la facture.
   *
   * @param {KobanInvoice[]} invoices Liste des factures
   * Limite à 100 objects
   * @param {KobanUniquePropertyInvoice} uniqueproperty Propriété sélectionnée pour vérifier si le bon de commande doit être créé ou modifié.
   * Peut prendre la valeur : Number.
   * L'API vérifie qu'un bon de commande correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @param {KobanOrderUniquePropertyInvoice} orderuniqueproperty Propriété définissant la clé de bon de commande associé à la facture.
   * Peut prendre la valeur : Number.
   * @param {KobanThirdUniquePropertyInvoice} thirduniqueproperty Propriété définissant la clé du compte associé à la facture.
   * Peut prendre la valeur :
   * - Email (Email),
   * - Guid (Identifiant),
   * - Extcode (Code externe),
   * - NameAddress (Nom et code postal),
   * - AccountingCode (Compte comptable),
   * - ExtcodeThenEmail (Code externe et si il n'existe pas EMail).
   * @returns {(Promise<string[]>)} String array contenant les Guid des objects créé ou modifié
   * @memberof InvoiceService
   */
  public async createOrUpdateMany(
    invoices: KobanInvoice[],
    uniqueproperty: KobanUniquePropertyInvoice,
    orderuniqueproperty: KobanOrderUniquePropertyInvoice,
    thirduniqueproperty: KobanThirdUniquePropertyInvoice
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (invoices.length > 100) {
          throw new Error(
            `You are trying to send ${invoices.length} invoices but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/PostMany`, invoices, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            orderuniqueproperty,
            thirduniqueproperty,
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
   * Get invoice with id
   *
   * @param {string} id Id de la facture
   * @returns {(Promise<KobanInvoice>)} retourne un object KobanInvoice
   * @memberof InvoiceService
   */
  public async getOne(id: string): Promise<KobanInvoice> {
    return new Promise<KobanInvoice>(async (resolve, reject) => {
      try {
        // if (!id) {
        //   throw new Error('No Invoice Id provided.');
        // }
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
        const responseData: KobanAPIResponse = new KobanAPIResponse(request.data)
        if (!responseData.Success) {
          throw this.handleApiError(responseData)
        }
        resolve(new KobanInvoice(responseData.Result))
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Passe la facture en status en problème avec la raison
   *
   * @param {string} id Id de la facture
   * @param {string} reason Raison du problème
   * @returns {Promise<boolean>}
   * @memberof InvoiceService
   */
  public async inProblem(id: string, reason: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const request = await axios.put(
          `${this.serviceUrl}/InProblem`,
          {
            id,
            reason
          },
          {
            headers: {
              Accept: 'application/json',
              'X-ncApi': this.key,
              'X-ncUser': this.user
            }
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
   * Créer un avoir pour la facture passé en paramètres.
   * Avoir partiel si une somme est passé en paramétre
   *
   * @param {string} id Id de la facture
   * @param {Number} [amount] Somme remboursé en cents
   * @returns {Promise<boolean>}
   * @memberof InvoiceService
   */
  public async generateAsset(id: string, amount?: Number): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        let body: any = {
          id
        }
        if (amount !== undefined) {
          body = {
            ...body,
            amount
          }
        }
        const request = await axios.post(`${this.serviceUrl}/GenerateAsset`, body, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
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

export { InvoiceService }
