import axios from 'axios'
import {
  KobanAPIResponse,
  KobanInvoiceUniqueProperty,
  KobanPayment,
  KobanPaymentUniqueProperty
} from '../models'
import { BaseService, IConfigService } from './base.service'

/**
 *
 *
 * @class PaymentService
 */
class PaymentService extends BaseService {
  /**
   * Creates an instance of InvoiceService.
   * @param {IConfigService} config
   * @memberof InvoiceService
   */
  constructor(config: IConfigService) {
    super(config, '/ncPayment')
  }

  /**
   * Crée ou modifie un ensemble de paiements.
   * Si un paiement correspondant à la clé uniqueproperty existe, alors l'API effectue une création.
   * Sinon l'API met à jour le payment.
   *
   * @param {KobanPayment[]} payments Liste des paiements
   * Limite à 100 objects
   * @param {KobanPaymentUniqueProperty} uniqueproperty Propriété sélectionnée pour vérifier si le paiement doit être créé ou modifié.
   * L'API vérifie qu'un paiement correspondant à cette clé existe.
   * Si il existe, il effectue une modification, sinon il effectue une création
   * @param {KobanInvoiceUniqueProperty} invoiceuniqueproperty Propriété sélectionnée pour sélectionner la facture correspondant au paiement.
   * @returns {Promise<string[]>}
   * @memberof PaymentService
   */
  public async createOrUpdateMany(
    payments: KobanPayment[],
    uniqueproperty: KobanPaymentUniqueProperty,
    invoiceuniqueproperty: KobanInvoiceUniqueProperty
  ): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {
      try {
        if (payments.length > 100) {
          throw new Error(
            `You are trying to send ${payments.length} payment(s) but only a maximum of 100 is accepted per api call.`
          )
        }
        const request = await axios.post(`${this.serviceUrl}/PostMany`, payments, {
          headers: {
            Accept: 'application/json',
            'X-ncApi': this.key,
            'X-ncUser': this.user
          },
          params: {
            invoiceuniqueproperty,
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
}

export { PaymentService }
