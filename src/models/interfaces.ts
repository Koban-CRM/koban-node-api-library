type KobanNullable<T> = T | undefined | null

/**
 *
 *
 * @interface IKobanAPIResponse
 */
interface IKobanAPIResponse {
  Result: string[]
  Success: boolean
  Message?: string
  Errors: string[]
}

export { KobanNullable, IKobanAPIResponse }
