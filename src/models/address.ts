import { KobanNullable } from './types'

/**
 *
 *
 * @interface IKobanAddress
 */
interface IKobanAddress {
  Reference: KobanNullable<string>
  Compl: KobanNullable<string>
  Street: KobanNullable<string>
  ZipCode: KobanNullable<string>
  City: KobanNullable<string>
  Name: KobanNullable<string>
  FirstName: KobanNullable<string>
  Phone: KobanNullable<string>
  Country: KobanNullable<string>
}

/**
 *
 *
 * @class KobanAddress
 */
class KobanAddress {
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public Reference?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public Compl?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public Street?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public ZipCode?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public City?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public Name?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public FirstName?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public Phone?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanAddress
   */
  public Country?: string

  /**
   * Creates an instance of KobanAddress.
   * @param {Partial<IKobanAddress>} [address={}]
   * @memberof KobanAddress
   */
  constructor(address: Partial<IKobanAddress> = {}) {
    const { Reference, Compl, Street, ZipCode, City, Name, FirstName, Phone, Country } = address
    if (Reference) {
      this.Reference = Reference
    }
    if (Compl) {
      this.Compl = Compl
    }
    if (Street) {
      this.Street = Street
    }
    if (ZipCode) {
      this.ZipCode = ZipCode
    }
    if (City) {
      this.City = City
    }
    if (Name) {
      this.Name = Name
    }
    if (FirstName) {
      this.FirstName = FirstName
    }
    if (Phone) {
      this.Phone = Phone
    }
    if (Country) {
      this.Country = Country
    }
  }
}

export { IKobanAddress, KobanAddress }
