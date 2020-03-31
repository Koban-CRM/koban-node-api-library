import axios from 'axios'
import {
  KobanAPIResponse,
  KobanDealUniqueProperty,
  KobanThirdUniqueProperty,
  KobanDeal
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class DealService
 */
class DealService extends BaseService {
  /**
   * Creates an instance of ActionService.
   * @param {IConfigService} config
   * @memberof DealService
   */
  constructor(config: IConfigService) {
    super(config, '/ncDeal')
  }

  /**
   * Crée ou modifie un ensemble d'opportunités.
   * Si une opportunité correspondant à la clé uniqueproperty existe, alors l'API met à jour l'action.
   * Sinon l'API effectue une création.
   *
   * @param {KobanDeal[]} deals Liste des opportunités en tableau
   * @param {KobanDealUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si l'opportunité doit être créé ou modifié.
   * L'API vérifie qu'une opportunité correspondante à cette clé existe.
   * Si elle existe, L'api effectue une modification, sinon il effectue une création
   * @param {KobanThirdUniqueProperty} thirduniqueproperty Propriété définissant la clé de l'opportunité associé au compte.
   * @returns {Promise<string[]>}
   * @memberof DealService
   */
  public async PostMany(
    deals: KobanDeal[],
    uniqueproperty: KobanDealUniqueProperty,
    thirduniqueproperty: KobanThirdUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (deals.length > 100) {
          throw new Error(
            `You are trying to send ${deals.length} deals but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/PostMany`, deals, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            uniqueproperty,
            thirduniqueproperty
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

export { DealService }
