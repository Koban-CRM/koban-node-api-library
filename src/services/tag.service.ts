import axios from 'axios'
import { KobanTag, KobanResult } from '../models'
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
   * @returns {Promise<KobanAction>}
   * @memberof TagService
   */
  public async PostAddToCategory(tag: KobanTag): Promise<KobanResult<String>> {
    return new Promise<KobanResult<String>>(async (resolve, reject) => {
      try {
        const request = await axios.post(`${this.serviceUrl}/PostAddToCategory`, tag, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          }
        })
        const responseData: KobanResult<String> = new KobanResult<String>(request.data, String)
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
