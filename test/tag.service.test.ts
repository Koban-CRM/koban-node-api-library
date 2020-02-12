import { KobanSDK, KobanTag, KobanAPIResponse } from '../src/koban-api-library'
import axios from 'axios'

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

/**
 *
 */
describe('Tag Service', () => {
  let kobanSDK: KobanSDK
  let tag: KobanTag

  beforeEach(() => {
    kobanSDK = new KobanSDK({
      token: '',
      user: ''
    })
    tag = new KobanTag({
      Guid: 'test',
      ExternalCode: 'test',
      Label: 'test',
      TagCategory: 'test',
      TagCategoryCode: 'test'
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should succeed on PostAddToCategory', async () => {
    // setup
    const resp = {
      data: {
        Result: 'test',
        Success: true
      }
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.tagService.PostAddToCategory(tag)

    // expect
    expect(result).toBeInstanceOf(KobanAPIResponse)
    expect(result).toEqual(resp.data)
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

  it('should return Error on PostAddToCategory', async () => {
    // setup
    const resp = {
      data: {
        Errors: ['test'],
        Success: false
      }
    }
    mockedAxios.post.mockResolvedValue(resp)
    // mockedAxios.post.mockRejectedValue(new Error('Network error: Something went wrong'))

    // work
    await expect(kobanSDK.tagService.PostAddToCategory(new KobanTag())).rejects.toThrow(
      new Error(resp.data.Errors.join('\n'))
    )
  })

  it('should return axio Error on PostAddToCategory', async () => {
    // setup
    mockedAxios.post.mockRejectedValue(new Error('Network error: Something went wrong'))

    // work
    await expect(kobanSDK.tagService.PostAddToCategory(new KobanTag())).rejects.toThrow(
      new Error('Network error: Something went wrong')
    )
  })
})
