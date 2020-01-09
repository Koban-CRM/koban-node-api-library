import axios from 'axios'
import { KobanAPIResponse, KobanResultList, KobanListValue } from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class ListService
 */
class ListService extends BaseService {
  /**
   * Creates an instance of ListService.
   * @param {IConfigService} config
   * @memberof ListService
   */
  constructor(config: IConfigService) {
    super(config, '/ncList')
  }

  /**
   * Ajoute une valeur de liste à une liste existante
   *
   * @param {KobanListValue} listValue Objet ListValue. Le Guid Koban n'est pas à fournir.
   * @param {string} code Code de la liste
   * @returns {Promise<string>}
   * @memberof ListService
   */
  public async postOne(listValue: KobanListValue, code: string): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostOne`, listValue, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            code
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
   * Renvoie les valeurs d'une liste
   *
   * @param {string} code Code externe de la liste (consultable et paramétrable via Paramètres > Général > Listes > Détail de la liste)
   * @returns {Promise<KobanResultList<KobanListValue>>}
   * @memberof ListService
   */
  public async getValues(code: string): Promise<KobanResultList<KobanListValue>> {
    return new Promise<KobanResultList<KobanListValue>>(async (resolve, reject) => {
      try {
        const request = await axios.get(`${this.serviceUrl}/GetValues`, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            code
          }
        })
        const responseData: KobanResultList<KobanListValue> = new KobanResultList<KobanListValue>(
          request.data,
          KobanListValue
        )
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export { ListService }
