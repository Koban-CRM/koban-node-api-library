import { KobanSDK, KobanAction, KobanActionUniqueProperty } from '../src/koban-api-library'
import axios from 'axios'

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

/**
 *
 */
describe('Action Service', () => {
  let kobanSDK: KobanSDK
  let action: KobanAction
  let actions: KobanAction[] = []

  beforeEach(() => {
    kobanSDK = new KobanSDK({
      token: '',
      user: ''
    })
    action = new KobanAction({})
    actions = []
    actions.push(action)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should succeed on PostOne', async () => {
    // setup
    const resp = {
      data: new KobanAction()
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.actionService.PostOne(action)

    // expect
    expect(result).toBeInstanceOf(KobanAction)
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

  it('should return Error on PostOne', async () => {
    // setup
    mockedAxios.post.mockRejectedValue(new Error('Network error: Something went wrong'))

    // work
    await expect(kobanSDK.actionService.PostOne(new KobanAction())).rejects.toThrow(
      new Error('Network error: Something went wrong')
    )
  })

  it('should throw error if more than 100 invoices send to api', async () => {
    for (let i = 1; i <= 100; i++) {
      actions.push(new KobanAction())
    }
    await expect(
      kobanSDK.actionService.PostMany(actions, KobanActionUniqueProperty.Guid)
    ).rejects.toThrow(
      new Error(
        `You are trying to send 101 actions but only a maximum of 100 is accepted per api call.`
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
    const result = await kobanSDK.actionService.PostMany([action], KobanActionUniqueProperty.Guid)

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
      kobanSDK.actionService.PostMany([action], KobanActionUniqueProperty.Guid)
    ).rejects.toThrow(new Error(resp.data.Errors.join('\n')))
  })
})
