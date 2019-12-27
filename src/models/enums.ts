/**
 * Statut de la facture
 *
 * @enum {number}
 */
enum KobanInvoiceStatus {
  /** Brouillon */
  DRAFT = 'DRAFT',
  /** En cours */
  PENDING = 'PENDING',
  /** En paiement */
  INPAYMENT = 'INPAYMENT',
  /** Soldé */
  CLOSED = 'CLOSED',
  /** En litige */
  INPROBLEM = 'INPROBLEM'
}

/**
 * Propriété définissant la clé de la facture associé
 *
 * @enum {number}
 */
enum KobanInvoiceUniqueProperty {
  /** Numéro */
  Number = 'Number'
}

/**
 * Propriété définissant la clé de bon de commande associé
 *
 * @enum {number}
 */
enum KobanOrderUniqueProperty {
  /** Numéro */
  Number = 'Number',
  /** Code externe */
  Extcode = 'Extcode'
}

/**
 * Propriété définissant la clé du paiement associé
 *
 * @enum {number}
 */
enum KobanPaymentUniqueProperty {
  /** Code externe */
  Extcode = 'Extcode'
}

/**
 * Propriété définissant la clé de l'opportunité associée
 *
 * @enum {number}
 */
enum KobanDealUniqueProperty {
  /** Identifiant Koban */
  Guid = 'Guid',
  /** Code externe */
  Extcode = 'Extcode'
}

/**
 * Propriété définissant la clé du compte associé
 *
 * @enum {number}
 */
enum KobanThirdUniqueProperty {
  /** Email */
  Email = 'Email',
  /** Identifiant */
  Guid = 'Guid',
  /** Code externe */
  Extcode = 'Extcode',
  /** Nom et code postal */
  NameAddress = 'NameAddress',
  /** Compte comptable */
  AccountingCode = 'AccountingCode',
  /** Code externe et si il n'existe pas EMail */
  ExtcodeThenEmail = 'ExtcodeThenEmail'
}

/**
 *
 *
 * @enum {number}
 */
enum KobanProductCategoryUniqueProperty {
  /** Reference */
  Reference = 'Reference'
}

/**
 *
 *
 * @enum {number}
 */
enum KobanProductUniqueProperty {
  /** Reference */
  Reference = 'Reference'
}

export {
  KobanDealUniqueProperty,
  KobanInvoiceStatus,
  KobanInvoiceUniqueProperty,
  KobanOrderUniqueProperty,
  KobanPaymentUniqueProperty,
  KobanProductCategoryUniqueProperty,
  KobanProductUniqueProperty,
  KobanThirdUniqueProperty
}
