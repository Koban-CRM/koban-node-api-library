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
 * Propriété sélectionnée pour vérifier si le bon de commande doit être créé ou modifié
 *
 * @enum {number}
 */
enum KobanUniquePropertyInvoice {
  /** Numéro */
  Number = 'Number'
}

/**
 * Propriété définissant la clé de bon de commande associé à la facture
 *
 * @enum {number}
 */
enum KobanOrderUniquePropertyInvoice {
  /** Numéro */
  Number = 'Number'
}

/**
 * Propriété définissant la clé du compte associé à la facture
 *
 * @enum {number}
 */
enum KobanThirdUniquePropertyInvoice {
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
 * Propriété sélectionnée pour vérifier si le paiement doit être créé ou modifié
 *
 * @enum {number}
 */
enum KobanUniquePropertyPayment {
  /** Code externe */
  Extcode = 'Extcode'
}

/**
 * Propriété sélectionnée pour sélectionner la facture correspondant au paiement.
 *
 * @enum {number}
 */
enum KobanInvoiceUniquePropertyPayment {
  /** Numéro */
  Number = 'Number'
}

export {
  KobanInvoiceStatus,
  KobanInvoiceUniquePropertyPayment,
  KobanOrderUniquePropertyInvoice,
  KobanThirdUniquePropertyInvoice,
  KobanUniquePropertyInvoice,
  KobanUniquePropertyPayment
}
