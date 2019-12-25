import { KobanSDK } from '../src/koban-api-library'

/**
 * Dummy test
 */
describe('Dummy test | KobanSDK test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('KobanSDK is instantiable', () => {
    expect(
      new KobanSDK({
        token: '',
        user: ''
      })
    ).toBeInstanceOf(KobanSDK)
  })
})
