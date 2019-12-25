import {
  KobanSDK,
  KobanPayment,
  KobanUniquePropertyPayment,
  KobanInvoiceUniquePropertyPayment
} from '../src/koban-api-library'
import axios from 'axios'

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

/**
 *
 */
describe('Payment Service', () => {
  let kobanSDK: KobanSDK
  // let payment: KobanPayment;

  beforeEach(() => {
    kobanSDK = new KobanSDK({
      token: '',
      user: ''
    })
    // payment = new KobanPayment({
    //   "Extcode": "883576138707942B",
    //   "Invoice": {
    //     "Number": "17-199",
    //     "Lines": []
    //   },
    //   "PaymentDate": "2019-12-12T08:18:33Z",
    //   "Ttc": 4320,
    //   "ModeRglt": {
    //     "Code": "ADYEN_PAYMENT"
    //   }
    // });
  })

  it('should throw error if more than 100 payments send to api', async () => {
    let payments: KobanPayment[] = []
    for (let i = 1; i <= 101; i++) {
      payments.push(new KobanPayment())
    }
    await expect(
      kobanSDK.paymentService.createOrUpdateMany(
        payments,
        KobanUniquePropertyPayment.Extcode,
        KobanInvoiceUniquePropertyPayment.Number
      )
    ).rejects.toThrow(
      new Error(
        `You are trying to send ${payments.length} payment(s) but only a maximum of 100 is accepted per api call.`
      )
    )
  })

  it('should succeed on createOrUpdateMany', async () => {
    // setup
    const resp = {
      data: {
        Success: true,
        Result: ['abcd']
      }
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.paymentService.createOrUpdateMany(
      [new KobanPayment()],
      KobanUniquePropertyPayment.Extcode,
      KobanInvoiceUniquePropertyPayment.Number
    )

    // expect
    expect(result).toBeInstanceOf(Array)
    expect(result).toEqual(['abcd'])
    expect(axios.post).toHaveBeenCalledTimes(1)
    // expect(axios.post).toHaveBeenCalledWith(
    //   "https://api.unsplash.com/search/photos",
    //   {
    //     params: {
    //       client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
    //       query: "cats"
    //     }
    //   }
    // );
  })

  it('should return Error on createOrUpdateMany', async () => {
    // setup
    const resp = {
      data: {
        Success: false,
        Errors: ['test error 1', 'test error 2']
      }
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    await expect(
      kobanSDK.paymentService.createOrUpdateMany(
        [new KobanPayment()],
        KobanUniquePropertyPayment.Extcode,
        KobanInvoiceUniquePropertyPayment.Number
      )
    ).rejects.toThrow(new Error(resp.data.Errors.join('\n')))
  })
})
