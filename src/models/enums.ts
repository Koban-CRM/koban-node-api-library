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
  INPROBLEM = 'INPROBLEM',
}

/**
 * Propriété définissant la clé de la facture associé
 *
 * @enum {number}
 */
enum KobanInvoiceUniqueProperty {
  /** Numéro */
  Number = 'Number',
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
  Extcode = 'Extcode',
}

/**
 * Propriété définissant la clé du paiement associé
 *
 * @enum {number}
 */
enum KobanPaymentUniqueProperty {
  /** Code externe */
  Extcode = 'Extcode',
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
  Extcode = 'Extcode',
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
  ExtcodeThenEmail = 'ExtcodeThenEmail',
  /** Autre Code */
  OtherCode = 'OtherCode',
  /** Identifiant et si il n'existe pas Compte comptable */
  GuidThenAccountingcode = 'GuidThenAccountingcode',
  /** Numéro Officiel */
  OfficialNumber = 'OfficialNumber',
  /** Code externe et si il n'existe pas EMail du Lead */
  ExtcodeThenEmailLead = 'ExtcodeThenEmailLead',
  /** Identifiant et si il n'existe pas EMail */
  GuidThenExtcode = 'GuidThenExtcode',
  /** Identifiant et si il n'existe pas Code externe et si il n'existe pas EMail */
  GuidThenExtcodeThenEMail = 'GuidThenExtcodeThenEMail',
  /** Autre Code et si il n'existe pas Email et si il n'existe pas Nom et code postal */
  OtherCodeThenEMailThenNameAddress = 'OtherCodeThenEMailThenNameAddress',
}

/**
 *
 *
 * @enum {number}
 */
enum KobanProductCategoryUniqueProperty {
  /** Reference */
  Reference = 'Reference',
}

/**
 *
 *
 * @enum {number}
 */
enum KobanProductUniqueProperty {
  /** Reference */
  Reference = 'Reference',
  /** Identifiant */
  Guid = 'Guid',
  /** Autre Code */
  OtherCode = 'OtherCode',
}

/**
 * Propriété définissant la clé d'action associée
 *
 * @enum {number}
 */
enum KobanActionUniqueProperty {
  /** Guid */
  Guid = 'Guid',
  /** Code externe */
  Extcode = 'Extcode',
}

/**
 * Propriété définissant la clé de l'opportunité associée
 *
 * @enum {number}
 */
enum KobanQuoteUniqueProperty {
  /** Numéro */
  Number = 'Number',
  /** Code externe */
  Extcode = 'Extcode',
}

export {
  KobanDealUniqueProperty,
  KobanInvoiceStatus,
  KobanInvoiceUniqueProperty,
  KobanOrderUniqueProperty,
  KobanPaymentUniqueProperty,
  KobanProductCategoryUniqueProperty,
  KobanProductUniqueProperty,
  KobanThirdUniqueProperty,
  KobanActionUniqueProperty,
  KobanQuoteUniqueProperty,
}
