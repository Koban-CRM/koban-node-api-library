import axios from 'axios'
import { KobanTag, KobanAPIResponse } from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class TagService
 */
class TagService extends BaseService {
  /**
   * Creates an instance of TagService.
   * @param {IConfigService} config
   * @memberof TagService
   */
  constructor(config: IConfigService) {
    super(config, '/ncTag')
  }

  /**
   * Ajoute un tag a une catégorie.
   *
   * @param {KobanAction} tag
   * @returns {Promise<KobanAPIResponse>}
   * @memberof TagService
   */
  public async PostAddToCategory(tag: KobanTag): Promise<KobanAPIResponse> {
    return new Promise<KobanAPIResponse>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostAddToCategory`, tag, {
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
        resolve(responseData)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export { TagService }
