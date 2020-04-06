import axios from 'axios'
import {
  KobanAPIResponse,
  KobanResultList,
  KobanAction,
  KobanActionUniqueProperty,
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class ActionService
 */
class ActionService extends BaseService {
  /**
   * Creates an instance of ActionService.
   * @param {IConfigService} config
   * @memberof ActionService
   */
  constructor(config: IConfigService) {
    super(config, '/ncAction')
  }

  /**
   * Ajoute une action.
   *
   * @param {KobanAction} action
   * @returns {Promise<KobanAction>}
   * @memberof ActionService
   */
  public async postOne(action: KobanAction): Promise<KobanAction> {
    return new Promise<KobanAction>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}`, action, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user,
          },
        })
        const responseData: KobanAction = new KobanAction(request.data)
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Crée ou modifie un ensemble d'actions.
   * Si une action correspondant à la clé uniqueproperty existe, alors l'API met à jour l'action.
   * Sinon l'API effectue une création.
   *
   * @param {KobanAction[]} actions Liste des actions en tableau
   * @param {KobanActionUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si l'action doit être créé ou modifié.
   * L'API vérifie qu'une action correspondante à cette clé existe.
   * Si elle existe, L'api effectue une modification, sinon il effectue une création
   * @returns {Promise<string[]>}
   * @memberof ActionService
   */
  public async postMany(
    actions: KobanAction[],
    uniqueproperty: KobanActionUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (actions.length > 100) {
          throw new Error(
            `You are trying to send ${actions.length} actions but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/PostMany`, actions, {
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
}

export { ActionService }
