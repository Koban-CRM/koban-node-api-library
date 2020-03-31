import {
  KobanSDK,
  KobanQuote,
  KobanActionUniqueProperty,
  KobanQuoteUniqueProperty,
  KobanDealUniqueProperty
} from '../src/koban-api-library'
import axios from 'axios'
import {} from '../src/models'

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

/**
 *
 */
describe('Action Service', () => {
  let kobanSDK: KobanSDK
  let quote: KobanQuote
  let quotes: KobanQuote[] = []

  beforeEach(() => {
    kobanSDK = new KobanSDK({
      token: '',
      user: ''
    })
    quote = new KobanQuote({})
    quotes = []
    quotes.push(quote)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should throw error if more than 100 quotes send to api', async () => {
    for (let i = 1; i <= 100; i++) {
      quotes.push(new KobanQuote())
    }
    await expect(
      kobanSDK.quoteService.PostMany(
        quotes,
        KobanQuoteUniqueProperty.Number,
        KobanDealUniqueProperty.Extcode
      )
    ).rejects.toThrow(
      new Error(
        `You are trying to send 101 quotes but only a maximum of 100 is accepted per api call.`
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
    const result = await kobanSDK.quoteService.PostMany(
      [quote],
      KobanQuoteUniqueProperty.Number,
      KobanDealUniqueProperty.Extcode
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
      kobanSDK.quoteService.PostMany(
        [quote],
        KobanQuoteUniqueProperty.Number,
        KobanDealUniqueProperty.Extcode
      )
    ).rejects.toThrow(new Error(resp.data.Errors.join('\n')))
  })
})
