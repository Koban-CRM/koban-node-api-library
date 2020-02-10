import { KobanNullable } from './types'
import { IKobanBaseModel, KobanBaseModel } from './baseModel'
import { IKobanThird, KobanThird } from './third'

/**
 *
 *
 * @interface IKobanProject
 * @extends {IKobanBaseModel}
 */
interface IKobanProject extends IKobanBaseModel {
  Label: KobanNullable<string>
  Status: KobanNullable<string>
  Third: KobanNullable<Partial<IKobanThird>>
}

/**
 *
 *
 * @class KobanProject
 * @extends {KobanBaseModel}
 */
class KobanProject extends KobanBaseModel {
  /**
   *
   *
   * @type {string}
   * @memberof KobanProject
   */
  public Label?: string
  /**
   *
   *
   * @type {string}
   * @memberof KobanProject
   */
  public Status?: string
  /**
   *
   *
   * @type {Third}
   * @memberof KobanProject
   */
  public Third?: KobanThird

  /**
   * Creates an instance of KobanProject.
   * @param {Partial<IKobanProject>} [project={}]
   * @memberof KobanProject
   */
  constructor(project: Partial<IKobanProject> = {}) {
    super(project)
    const { Label, Status, Third } = project
    if (Label) {
      this.Label = Label
    }
    if (Status) {
      this.Status = Status
    }
    if (Third) {
      this.Third = new KobanThird(Third)
    }
  }
}

export { IKobanProject, KobanProject }
