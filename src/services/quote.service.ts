import axios from 'axios'
import {
  KobanAPIResponse,
  KobanQuote,
  KobanDealUniqueProperty,
  KobanQuoteUniqueProperty
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class QuoteService
 */
class QuoteService extends BaseService {
  /**
   * Creates an instance of QuoteService.
   * @param {IConfigService} config
   * @memberof QuoteService
   */
  constructor(config: IConfigService) {
    super(config, '/ncQuote')
  }

  /**
   * Crée ou modifie un ensemble de devis.
   * Si un devis correspondant à la clé uniqueproperty existe, alors l'API met à jour l'action.
   * Sinon l'API effectue une création.
   *
   * @param {KobanQuote[]} quotes Liste des devis en tableau
   * @param {KobanQuoteUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le devis doit être créé ou modifié.
   * L'API vérifie qu'un devis correspondant à cette clé existe.
   * Si elle existe, L'api effectue une modification, sinon il effectue une création
   * @param {KobanDealUniqueProperty} dealuniqueproperty Propriété définissant la clé du devis associé à l'opportunité.
   * @returns {Promise<string[]>}
   * @memberof QuoteService
   */
  public async PostMany(
    quotes: KobanQuote[],
    uniqueproperty: KobanQuoteUniqueProperty,
    dealuniqueproperty: KobanDealUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (quotes.length > 100) {
          throw new Error(
            `You are trying to send ${quotes.length} quotes but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/PostMany`, quotes, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            uniqueproperty,
            dealuniqueproperty
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

export { QuoteService }
