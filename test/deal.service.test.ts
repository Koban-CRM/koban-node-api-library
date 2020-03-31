import {
  KobanSDK,
  KobanDeal,
  KobanDealUniqueProperty,
  KobanThirdUniqueProperty
} from '../src/koban-api-library'
import axios from 'axios'
import {} from '../src/models'

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

/**
 *
 */
describe('Deal Service', () => {
  let kobanSDK: KobanSDK
  let deal: KobanDeal
  let deals: KobanDeal[] = []

  beforeEach(() => {
    kobanSDK = new KobanSDK({
      token: '',
      user: ''
    })
    deal = new KobanDeal({})
    deals = []
    deals.push(deal)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should throw error if more than 100 deals send to api', async () => {
    for (let i = 1; i <= 100; i++) {
      deals.push(new KobanDeal())
    }
    await expect(
      kobanSDK.dealService.PostMany(
        deals,
        KobanDealUniqueProperty.Extcode,
        KobanThirdUniqueProperty.Extcode
      )
    ).rejects.toThrow(
      new Error(
        `You are trying to send 101 deals but only a maximum of 100 is accepted per api call.`
      )
    )
  })

  it('should succeed on PostMany', async () => {
    // setup
    const resp = {
      data: {
        Success: true,
        Result: ['abcd']
      }
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.dealService.PostMany(
      [deal],
      KobanDealUniqueProperty.Extcode,
      KobanThirdUniqueProperty.Extcode
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

  it('should return Error on PostMany', async () => {
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
      kobanSDK.dealService.PostMany(
        [deal],
        KobanDealUniqueProperty.Extcode,
        KobanThirdUniqueProperty.Extcode
      )
    ).rejects.toThrow(new Error(resp.data.Errors.join('\n')))
  })
})
