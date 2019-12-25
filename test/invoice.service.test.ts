import {
  KobanSDK,
  KobanInvoice,
  KobanUniquePropertyInvoice,
  KobanOrderUniquePropertyInvoice,
  KobanThirdUniquePropertyInvoice
} from '../src/koban-api-library'
import axios from 'axios'

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

/**
 *
 */
describe('Invoice Service', () => {
  let kobanSDK: KobanSDK
  let invoice: KobanInvoice
  let invoices: KobanInvoice[] = []

  beforeEach(() => {
    kobanSDK = new KobanSDK({
      token: '',
      user: ''
    })
    invoice = new KobanInvoice({
      Number: '17-199',
      Third: {
        Label: '360° FAHRENHEIT',
        FirstName: null,
        Gender: null,
        StructCode: null,
        Status: {
          Label: 'Client',
          Code: 'CLI',
          Guid: '55018e76608776de640afdae',
          DUpdated: 0.0,
          Updated: '0001-01-01T00:00:00',
          DCreated: 0.0,
          Created: '0001-01-01T00:00:00'
        },
        Type: {
          Label: 'Professionnel',
          Code: 'PRO',
          Guid: '55018e76608776de640afdb1',
          DUpdated: 0.0,
          Updated: '0001-01-01T00:00:00',
          DCreated: 0.0,
          Created: '0001-01-01T00:00:00'
        },
        Extcode: null,
        OtherCode: null,
        Comments:
          '&lt;div&gt;Comptes en exclu :   &lt;span&gt;Arche Promotion, &lt;b&gt;BatiNantes&lt;/b&gt;, &lt;b&gt;BNP Immobilier&lt;/b&gt;, &lt;b&gt;Bouygues Immobilier&lt;/b&gt;, &lt;i&gt;BPD Marignan&lt;/i&gt;, Cibex, CIPL, &lt;b&gt;Cogedim&lt;/b&gt;,&nbsp;&lt;b&gt;Constructa&lt;/b&gt;, &lt;i&gt;Cr&eacute;dit Agricole Immobilier&lt;/i&gt;, &lt;b&gt;Demathieu Bard&lt;/b&gt;, &lt;b&gt;Eiffage&lt;/b&gt;, &lt;b&gt;Emerige&lt;/b&gt;, Franco Suisse, Groupe Arc, Groupe Pierre &amp; vacances, &lt;i&gt;Quartus&lt;/i&gt;, &lt;i&gt;Hermitage&lt;/i&gt;, &lt;b&gt;Icade&lt;/b&gt;, Interconstruction, &lt;i&gt;Kaufman &amp; Broad,&lt;/i&gt; &lt;i&gt;Les nouveaux Constructeurs&lt;/i&gt;, &lt;i&gt;Nacarat&lt;/i&gt;, &lt;i&gt;Nafilyan &amp; Partners&lt;/i&gt;, &lt;b&gt;Nexity&lt;/b&gt;, Groupe Giboire, &lt;b&gt;Ogic&lt;/b&gt;, &lt;b&gt;Pitch&lt;/b&gt;, &lt;b&gt;Promogim&lt;/b&gt;, Pichet, Sagec, Sefricim, &lt;b&gt;Sogeprom&lt;/b&gt;, Tagerim, &lt;b&gt;Vinci&lt;/b&gt;&lt;/span&gt;  &lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;El&eacute;ments : Zoho CRM&lt;/div&gt;&lt;div&gt;Marignan : SalesForce&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;360 : Front Web / BackWeb / Intranet / Extranet de prescription&lt;/div&gt;&lt;div&gt;70% de l&apos;activit&eacute;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Cr&eacute;&eacute;e en 2014 / 65% des parts + Prof nouvelles technos (strat&eacute;gie du march&eacute; / &eacute;conomie du secteur)&lt;/div&gt;&lt;div&gt;9 personnes&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&gt;&gt;&gt; BtoBtoC : Immobilier, Banque&lt;/div&gt;&lt;div&gt;Emerige &gt; Grosse dynamique&lt;/div&gt;&lt;div&gt;ERP : Prim Promo d&eacute;di&eacute; au m&eacute;tier (hors de prix, 90/2000, sp&eacute;cialis&eacute;)&lt;/div&gt;&lt;div&gt;Commerciaux externe &gt; Signature du compromis &gt; Dossier remonte sur l&apos;ERP&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&gt;&gt;&gt; Sortie de stats&nbsp;&lt;/div&gt;&lt;div&gt;Rencontre : Eptica (Gestion de flux entrants), SugarCRM, PrimPromo, CallCenter&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;                            &lt;br&gt;03/10/2017 14:45:00 - &lt;br&gt;&lt;br&gt;30/04/2018 09:36:54 - Guillaume Lecanu - &lt;br&gt;&lt;br&gt;&lt;a href=&quot;http://test.fr&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;http://test.fr/&lt;/a&gt; &lt;br&gt;&lt;br&gt;30/04/2018 10:36:56 - Guillaume Lecanu - &lt;br&gt;&lt;br&gt;&lt;span&gt;Bonjour nous recherchons une villa pour notre famille. nous sommes 4 Nous recherchons soit pour une periode de 15 jours soit 1 an. merci&lt;/span&gt;&lt;br&gt;',
        AccountingCode: null,
        Address: {
          Reference: null,
          Compl: '',
          Street: '13 rue Vivienne',
          ZipCode: '75002',
          City: 'PARIS ',
          Name: null,
          FirstName: null,
          Phone: null,
          Country: 'FR'
        },
        DelivAddress: null,
        Website: 'http://www.3cent60.biz/',
        Phone: null,
        Cell: null,
        Fax: null,
        EMail: '',
        OfficialNumber: '362 521 879 00034',
        Vat: null,
        Unsuscribe: false,
        InvalidMail: false,
        Title: null,
        eShop: null,
        TaxRate: 0.0,
        AssignedTo: {
          FullName: 'Guillaume Lecanu',
          Extcode: '2',
          EMail: 'ulysse@koban-crm.com',
          Guid: '55018e75608776de640afda6',
          DUpdated: 0.0,
          Updated: '0001-01-01T00:00:00',
          DCreated: 0.0,
          Created: '0001-01-01T00:00:00'
        },
        UpdatedBy: '55018e75608776de640afda6',
        Tags: [
          {
            Guid: null,
            TagCategory: null,
            TagCategoryCode: '558031150dc3610c7cf5427d',
            Label: 'CRM',
            ExternalCode: null
          },
          {
            Guid: null,
            TagCategory: null,
            TagCategoryCode: '558031150dc3610c7cf5427d',
            Label: 'Marketing',
            ExternalCode: null
          },
          {
            Guid: null,
            TagCategory: null,
            TagCategoryCode: '58e4a00b0dc3610328f4f43f',
            Label: 'COMPTE CLE',
            ExternalCode: null
          },
          {
            Guid: null,
            TagCategory: null,
            TagCategoryCode: '552f80750dc36109fc25d0e1',
            Label: 'Revendeur',
            ExternalCode: null
          }
        ],
        MoreFields: [
          {
            FieldId: '5501907f608777d868e05fdb_lb',
            Value: 'EDUCLEVER'
          },
          {
            FieldId: '5501907f608777d868e05fdb',
            Value: '56eabce30dc36110fc739a36'
          }
        ],
        Origin: {
          Label: 'Réseau - Client',
          Code: 'Réseau  - Client',
          Guid: '55018e7c608776de640b00e6',
          DUpdated: 0.0,
          Updated: '0001-01-01T00:00:00',
          DCreated: 0.0,
          Created: '0001-01-01T00:00:00'
        },
        NextAction: null,
        UTMCampaign: null,
        UTMMedium: null,
        UTMSource: null,
        Optin: false,
        Geo: null,
        IBAN: null,
        Guid: '57ecff7a0dc3610dc0c4df02',
        DUpdated: 1532366768.096,
        Updated: '2018-07-23T17:26:08.096',
        DCreated: 1475149690.303,
        Created: '2016-09-29T11:48:10.303'
      },
      Contact: {
        Label: 'Benoit TEZENAS DU MONTCEL',
        GridLabel: 'Benoit TEZENAS DU MONTCEL',
        Name: 'TEZENAS DU MONTCEL',
        FirstName: 'Benoit',
        Function: 'Gérant',
        Obsolete: false,
        CanDecide: true,
        CanBuy: false,
        IsPrivate: false,
        Extcode: null,
        Gender: 'Monsieur',
        Phone: '',
        Status: 'CLI',
        Photo: null,
        ToSync: false,
        MoreFields: [
          {
            FieldId: 'nl_5704ffda0dc3640c748f843a',
            Value: 'true'
          },
          {
            FieldId: '560fed4b0dc374034c66b306',
            Value: 'true'
          },
          {
            FieldId: '57484fc40dc3611220c21a3d',
            Value: 'true'
          }
        ],
        Unsuscribe: false,
        AssignedTo: null,
        Origin: null,
        Comments: null,
        InvalidMail: false,
        Fax: null,
        Cell: '06 76 55 59 86',
        EMail: 'b.tezenas@3cent60.net',
        Third: {
          Label: '360° FAHRENHEIT',
          FirstName: null,
          Gender: null,
          StructCode: null,
          Status: {
            Label: 'Client',
            Code: 'CLI',
            Guid: '55018e76608776de640afdae',
            DUpdated: 0.0,
            Updated: '0001-01-01T00:00:00',
            DCreated: 0.0,
            Created: '0001-01-01T00:00:00'
          },
          Type: {
            Label: 'Professionnel',
            Code: 'PRO',
            Guid: '55018e76608776de640afdb1',
            DUpdated: 0.0,
            Updated: '0001-01-01T00:00:00',
            DCreated: 0.0,
            Created: '0001-01-01T00:00:00'
          },
          Extcode: null,
          OtherCode: null,
          Comments:
            '&lt;div&gt;Comptes en exclu :   &lt;span&gt;Arche Promotion, &lt;b&gt;BatiNantes&lt;/b&gt;, &lt;b&gt;BNP Immobilier&lt;/b&gt;, &lt;b&gt;Bouygues Immobilier&lt;/b&gt;, &lt;i&gt;BPD Marignan&lt;/i&gt;, Cibex, CIPL, &lt;b&gt;Cogedim&lt;/b&gt;,&nbsp;&lt;b&gt;Constructa&lt;/b&gt;, &lt;i&gt;Cr&eacute;dit Agricole Immobilier&lt;/i&gt;, &lt;b&gt;Demathieu Bard&lt;/b&gt;, &lt;b&gt;Eiffage&lt;/b&gt;, &lt;b&gt;Emerige&lt;/b&gt;, Franco Suisse, Groupe Arc, Groupe Pierre &amp; vacances, &lt;i&gt;Quartus&lt;/i&gt;, &lt;i&gt;Hermitage&lt;/i&gt;, &lt;b&gt;Icade&lt;/b&gt;, Interconstruction, &lt;i&gt;Kaufman &amp; Broad,&lt;/i&gt; &lt;i&gt;Les nouveaux Constructeurs&lt;/i&gt;, &lt;i&gt;Nacarat&lt;/i&gt;, &lt;i&gt;Nafilyan &amp; Partners&lt;/i&gt;, &lt;b&gt;Nexity&lt;/b&gt;, Groupe Giboire, &lt;b&gt;Ogic&lt;/b&gt;, &lt;b&gt;Pitch&lt;/b&gt;, &lt;b&gt;Promogim&lt;/b&gt;, Pichet, Sagec, Sefricim, &lt;b&gt;Sogeprom&lt;/b&gt;, Tagerim, &lt;b&gt;Vinci&lt;/b&gt;&lt;/span&gt;  &lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;El&eacute;ments : Zoho CRM&lt;/div&gt;&lt;div&gt;Marignan : SalesForce&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;360 : Front Web / BackWeb / Intranet / Extranet de prescription&lt;/div&gt;&lt;div&gt;70% de l&apos;activit&eacute;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Cr&eacute;&eacute;e en 2014 / 65% des parts + Prof nouvelles technos (strat&eacute;gie du march&eacute; / &eacute;conomie du secteur)&lt;/div&gt;&lt;div&gt;9 personnes&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&gt;&gt;&gt; BtoBtoC : Immobilier, Banque&lt;/div&gt;&lt;div&gt;Emerige &gt; Grosse dynamique&lt;/div&gt;&lt;div&gt;ERP : Prim Promo d&eacute;di&eacute; au m&eacute;tier (hors de prix, 90/2000, sp&eacute;cialis&eacute;)&lt;/div&gt;&lt;div&gt;Commerciaux externe &gt; Signature du compromis &gt; Dossier remonte sur l&apos;ERP&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&gt;&gt;&gt; Sortie de stats&nbsp;&lt;/div&gt;&lt;div&gt;Rencontre : Eptica (Gestion de flux entrants), SugarCRM, PrimPromo, CallCenter&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;                            &lt;br&gt;03/10/2017 14:45:00 - &lt;br&gt;&lt;br&gt;30/04/2018 09:36:54 - Guillaume Lecanu - &lt;br&gt;&lt;br&gt;&lt;a href=&quot;http://test.fr&quot; target=&quot;_blank&quot; rel=&quot;nofollow&quot;&gt;http://test.fr/&lt;/a&gt; &lt;br&gt;&lt;br&gt;30/04/2018 10:36:56 - Guillaume Lecanu - &lt;br&gt;&lt;br&gt;&lt;span&gt;Bonjour nous recherchons une villa pour notre famille. nous sommes 4 Nous recherchons soit pour une periode de 15 jours soit 1 an. merci&lt;/span&gt;&lt;br&gt;',
          AccountingCode: null,
          Address: {
            Reference: null,
            Compl: '',
            Street: '13 rue Vivienne',
            ZipCode: '75002',
            City: 'PARIS ',
            Name: null,
            FirstName: null,
            Phone: null,
            Country: 'FR'
          },
          DelivAddress: null,
          Website: 'http://www.3cent60.biz/',
          Phone: null,
          Cell: null,
          Fax: null,
          EMail: '',
          OfficialNumber: '362 521 879 00034',
          Vat: null,
          Unsuscribe: false,
          InvalidMail: false,
          Title: null,
          eShop: null,
          TaxRate: 0.0,
          AssignedTo: {
            FullName: 'Guillaume Lecanu',
            Extcode: '2',
            EMail: 'ulysse@koban-crm.com',
            Guid: '55018e75608776de640afda6',
            DUpdated: 0.0,
            Updated: '0001-01-01T00:00:00',
            DCreated: 0.0,
            Created: '0001-01-01T00:00:00'
          },
          UpdatedBy: '55018e75608776de640afda6',
          Tags: [
            {
              Guid: null,
              TagCategory: null,
              TagCategoryCode: '558031150dc3610c7cf5427d',
              Label: 'CRM',
              ExternalCode: null
            },
            {
              Guid: null,
              TagCategory: null,
              TagCategoryCode: '558031150dc3610c7cf5427d',
              Label: 'Marketing',
              ExternalCode: null
            },
            {
              Guid: null,
              TagCategory: null,
              TagCategoryCode: '58e4a00b0dc3610328f4f43f',
              Label: 'COMPTE CLE',
              ExternalCode: null
            },
            {
              Guid: null,
              TagCategory: null,
              TagCategoryCode: '552f80750dc36109fc25d0e1',
              Label: 'Revendeur',
              ExternalCode: null
            }
          ],
          MoreFields: [
            {
              FieldId: '5501907f608777d868e05fdb_lb',
              Value: 'EDUCLEVER'
            },
            {
              FieldId: '5501907f608777d868e05fdb',
              Value: '56eabce30dc36110fc739a36'
            }
          ],
          Origin: {
            Label: 'Réseau - Client',
            Code: 'Réseau  - Client',
            Guid: '55018e7c608776de640b00e6',
            DUpdated: 0.0,
            Updated: '0001-01-01T00:00:00',
            DCreated: 0.0,
            Created: '0001-01-01T00:00:00'
          },
          NextAction: null,
          UTMCampaign: null,
          UTMMedium: null,
          UTMSource: null,
          Optin: false,
          Geo: null,
          IBAN: null,
          Guid: '57ecff7a0dc3610dc0c4df02',
          DUpdated: 1532366768.096,
          Updated: '2018-07-23T17:26:08.096',
          DCreated: 1475149690.303,
          Created: '2016-09-29T11:48:10.303'
        },
        Tags: [
          {
            Guid: null,
            TagCategory: null,
            TagCategoryCode: '552f80750dc36109fc25d0e1',
            Label: 'Revendeur',
            ExternalCode: null
          }
        ],
        Optin: false,
        Guid: '57ed07b70dc36108d0bb5a05',
        DUpdated: 1531320314.569,
        Updated: '2018-07-11T14:45:14.569',
        DCreated: 1475151799.645,
        Created: '2016-09-29T12:23:19.645'
      },
      Order: {
        Number: 'C17-0213',
        Extcode: null,
        Status: 'CLOSED',
        Dateorder: '2017-05-17T02:00:00',
        DeliveryDateEstimated: '0001-01-01T00:00:00',
        Third: {
          Label: null,
          FirstName: null,
          Gender: null,
          StructCode: null,
          Status: null,
          Type: null,
          Extcode: null,
          OtherCode: null,
          Comments: null,
          AccountingCode: null,
          Address: null,
          DelivAddress: null,
          Website: null,
          Phone: null,
          Cell: null,
          Fax: null,
          EMail: null,
          OfficialNumber: null,
          Vat: null,
          Unsuscribe: false,
          InvalidMail: false,
          Title: null,
          eShop: null,
          TaxRate: 0.0,
          AssignedTo: null,
          UpdatedBy: null,
          Tags: null,
          MoreFields: null,
          Origin: null,
          NextAction: null,
          UTMCampaign: null,
          UTMMedium: null,
          UTMSource: null,
          Optin: false,
          Geo: null,
          IBAN: null,
          Guid: '57ecff7a0dc3610dc0c4df02',
          DUpdated: 0.0,
          Updated: '0001-01-01T00:00:00',
          DCreated: 0.0,
          Created: '0001-01-01T00:00:00'
        },
        Quote: {
          Label: null,
          Status: null,
          Number: null,
          Deal: null,
          IsWon: false,
          Datesent: '0001-01-01T00:00:00',
          Sections: null,
          Guid: '58d8d90e0dc3610dc8b93ecc',
          DUpdated: 0.0,
          Updated: '0001-01-01T00:00:00',
          DCreated: 0.0,
          Created: '0001-01-01T00:00:00'
        },
        ShippingAddress: null,
        CurrencyCode: null,
        Shipping: null,
        Deal: null,
        Lines: [
          {
            Product: {
              Reference: null,
              Label: 'Formation Utilisation et Administration KOBAN',
              Comments: null,
              eShopURL: null,
              Obsolete: false,
              Catproduct: null,
              MoreFields: null,
              Prht: 0.0,
              Margin: 0.0,
              Ht: 0.0,
              Ttc: 0.0,
              Vat: 0.0,
              Unit: null,
              StockMin: 0.0,
              PCB: 0.0,
              Regroup: null,
              Classification: null,
              IsSelling: false,
              Model: null,
              OtherCode: null,
              Declinaisons: null,
              Guid: '55018e80608776de640b023b',
              DUpdated: 0.0,
              Updated: '0001-01-01T00:00:00',
              DCreated: 0.0,
              Created: '0001-01-01T00:00:00'
            },
            Quantity: 2.0,
            Vat: 0.0,
            Red: 0.0,
            Ht: 1800.0,
            Ttc: 2160.0,
            Prht: 860.0,
            UnitPrice: 900.0,
            Extcode: null,
            Comments:
              '&lt;div&gt;Formation en 2 journ&eacute;es de 7 heures,&nbsp;6 personnes form&eacute;es simultan&eacute;ment au maximum&lt;br&gt;&lt;u&gt;&lt;b&gt;&lt;i&gt;(Tarif hors frais de d&eacute;placement ou mission du formateur Koban)&lt;/i&gt;&lt;/b&gt;&lt;/u&gt;&lt;br&gt;&lt;br&gt;La formation des &eacute;quipes Marketing aborde les th&egrave;mes suivants !&lt;br&gt;- Tracking d&apos;un site web et lecture des remont&eacute;es du tracking&lt;br&gt;- Param&eacute;trage du r&eacute;f&eacute;rentiel marketing&lt;br&gt;- Requ&ecirc;tes sur pistes&lt;br&gt;- Requ&ecirc;tes sur comptes&lt;br&gt;- Param&eacute;trage des options emailing de Koban : exp&eacute;diteurs, gestion des emails invalides, SPF, DKIM&lt;br&gt;- Cr&eacute;ation depuis un mod&egrave;le existant d&apos;un mod&egrave;le email&lt;br&gt;- Cr&eacute;ation et lancement d&apos;une campagne emailing&lt;br&gt;- Cr&eacute;ation d&apos;un sc&eacute;nario et lancement d&apos;un sc&eacute;nario - Suivi et action sur r&eacute;sultats&lt;br&gt;- Analyse des indicateurs standards pr&eacute;sents dans Koban&lt;br&gt;&lt;br&gt;Mat&eacute;riel informatique et connexion Web haut d&eacute;bit assur&eacute;s par le client&lt;br&gt;eBazten est enregistr&eacute; aupr&egrave;s de la Pr&eacute;fecture du Rh&ocirc;ne sous le num&eacute;ro 82 69 12067 69.&lt;/div&gt;',
            DeclinaisonCode: null
          },
          {
            Product: {
              Reference: null,
              Label: 'Formation Utilisation et Administration KOBAN',
              Comments: null,
              eShopURL: null,
              Obsolete: false,
              Catproduct: null,
              MoreFields: null,
              Prht: 0.0,
              Margin: 0.0,
              Ht: 0.0,
              Ttc: 0.0,
              Vat: 0.0,
              Unit: null,
              StockMin: 0.0,
              PCB: 0.0,
              Regroup: null,
              Classification: null,
              IsSelling: false,
              Model: null,
              OtherCode: null,
              Declinaisons: null,
              Guid: '55018e80608776de640b023b',
              DUpdated: 0.0,
              Updated: '0001-01-01T00:00:00',
              DCreated: 0.0,
              Created: '0001-01-01T00:00:00'
            },
            Quantity: 2.0,
            Vat: 0.0,
            Red: 0.0,
            Ht: 1800.0,
            Ttc: 2160.0,
            Prht: 860.0,
            UnitPrice: 900.0,
            Extcode: null,
            Comments:
              'Formation en 2 journ&eacute;es de 7 heures,&nbsp;6 personnes form&eacute;es simultan&eacute;ment au maximum&lt;br&gt;&lt;b&gt;&lt;i&gt;&lt;u&gt;(Tarif hors frais de d&eacute;placement ou mission du formateur Koban)&lt;/u&gt;&lt;/i&gt;&lt;/b&gt;&lt;br&gt;&lt;br&gt;La formation des administrateurs aborde les th&egrave;mes suivants :&lt;br&gt;JOURNEE 1&nbsp;&lt;br&gt;- D&eacute;couverte avanc&eacute;e de l&apos;outil&lt;br&gt;- Param&eacute;trages initiaux standards : personnalisation, automatismes, actions&lt;br&gt;JOURNEE 2&nbsp;&lt;br&gt;- Param&eacute;trage de l&apos;affectation automatique&lt;br&gt;- Gestion des droits&lt;br&gt;&lt;br&gt;Mat&eacute;riel informatique et connexion Web haut d&eacute;bit assur&eacute;s par le client&lt;br&gt;&lt;span&gt;eBazten est enregistr&eacute; aupr&egrave;s de la Pr&eacute;fecture du Rh&ocirc;ne sous le num&eacute;ro 82 69 12067 69.&lt;/span&gt;',
            DeclinaisonCode: null
          },
          {
            Product: {
              Reference: null,
              Label: 'Formation Utilisation et Administration KOBAN',
              Comments: null,
              eShopURL: null,
              Obsolete: false,
              Catproduct: null,
              MoreFields: null,
              Prht: 0.0,
              Margin: 0.0,
              Ht: 0.0,
              Ttc: 0.0,
              Vat: 0.0,
              Unit: null,
              StockMin: 0.0,
              PCB: 0.0,
              Regroup: null,
              Classification: null,
              IsSelling: false,
              Model: null,
              OtherCode: null,
              Declinaisons: null,
              Guid: '55018e80608776de640b023b',
              DUpdated: 0.0,
              Updated: '0001-01-01T00:00:00',
              DCreated: 0.0,
              Created: '0001-01-01T00:00:00'
            },
            Quantity: 1.5,
            Vat: 0.0,
            Red: 0.0,
            Ht: 1350.0,
            Ttc: 1620.0,
            Prht: 860.0,
            UnitPrice: 900.0,
            Extcode: null,
            Comments:
              'Formation en 0.5 journ&eacute;e de 3.5 heures, 6 personnes form&eacute;es simultan&eacute;ment au maximum&lt;br&gt;Devis pour 3 groupes de 6 commerciaux&lt;br&gt;&lt;b&gt;&lt;i&gt;&lt;u&gt;(Tarif hors frais de d&eacute;placement ou mission du formateur Koban)&lt;/u&gt;&lt;/i&gt;&lt;/b&gt;&lt;br&gt;&lt;br&gt;La formation des commerciaux utilisateurs aborde les th&egrave;mes suivants :&lt;br&gt;- D&eacute;couverte de l&apos;outil, compr&eacute;hension des notions de pistes, actions, transformation en prospect, affectations, tags&lt;br&gt;- Gestion des actions commerciales et de l&apos;agenda&lt;br&gt;- Communication interne via le fil&lt;br&gt;&lt;br&gt;L&apos;utilisation du lot 1 restant relativement simple, nous proposons de former chaque groupe sur une demi journ&eacute;e.&lt;br&gt;&lt;br&gt;Mat&eacute;riel informatique et connexion Web haut d&eacute;bit assur&eacute;s par le client&lt;br&gt;eBazten est enregistr&eacute; aupr&egrave;s de la Pr&eacute;fecture du Rh&ocirc;ne sous le num&eacute;ro 82 69 12067 69.&lt;br&gt;',
            DeclinaisonCode: null
          },
          {
            Product: {
              Reference: null,
              Label: 'Formation Utilisation et Administration KOBAN',
              Comments: null,
              eShopURL: null,
              Obsolete: false,
              Catproduct: null,
              MoreFields: null,
              Prht: 0.0,
              Margin: 0.0,
              Ht: 0.0,
              Ttc: 0.0,
              Vat: 0.0,
              Unit: null,
              StockMin: 0.0,
              PCB: 0.0,
              Regroup: null,
              Classification: null,
              IsSelling: false,
              Model: null,
              OtherCode: null,
              Declinaisons: null,
              Guid: '55018e80608776de640b023b',
              DUpdated: 0.0,
              Updated: '0001-01-01T00:00:00',
              DCreated: 0.0,
              Created: '0001-01-01T00:00:00'
            },
            Quantity: 3.0,
            Vat: 0.0,
            Red: 0.0,
            Ht: 2700.0,
            Ttc: 3240.0,
            Prht: 860.0,
            UnitPrice: 900.0,
            Extcode: null,
            Comments:
              'Formation en 1 journ&eacute;e de 7 heures, 6 personnes form&eacute;es simultan&eacute;ment au maximum&lt;br&gt;Devis pour 3 groupes de 6 commerciaux&lt;br&gt;&lt;i&gt;&lt;u&gt;(Tarif hors frais de d&eacute;placement ou mission du formateur Koban)&lt;/u&gt;&lt;/i&gt;&lt;br&gt;&lt;br&gt;La formation des commerciaux utilisateurs aborde les th&egrave;mes suivants :&lt;br&gt;- Gestion des prospects&lt;br&gt;- Compr&eacute;hension des programmes et lots&lt;br&gt;- Pose des options&lt;br&gt;- R&eacute;servations&lt;br&gt;&lt;br&gt;Mat&eacute;riel informatique et connexion Web haut d&eacute;bit assur&eacute;s par le client&lt;br&gt;eBazten est enregistr&eacute; aupr&egrave;s de la Pr&eacute;fecture du Rh&ocirc;ne sous le num&eacute;ro 82 69 12067 69.',
            DeclinaisonCode: null
          }
        ],
        Comments: null,
        PaymentMode: 'VIR',
        Deposit: null,
        eShop: null,
        SellingMode: null,
        eShopStatus: null,
        eShopInvoiceNumber: null,
        DeliveryMode: null,
        DeliveryAddress: null,
        InvoiceAddress: null,
        UtmCampaign: null,
        Structure: null,
        AmountPayed: 0.0,
        Guid: '59061ed60dc36110c88736a9',
        DUpdated: 0.0,
        Updated: '0001-01-01T00:00:00',
        DCreated: 0.0,
        Created: '0001-01-01T00:00:00'
      },
      InvoiceDate: '2017-07-23T18:37:07.219',
      DueDate: '0001-01-01T00:00:00',
      Status: 'CLOSED',
      PaymentMode: {
        Label: 'Virement bancaire',
        Code: 'VIR',
        Guid: '55018e77608776de640afdfb',
        DUpdated: 0.0,
        Updated: '0001-01-01T00:00:00',
        DCreated: 0.0,
        Created: '0001-01-01T00:00:00'
      },
      Amount: '360000',
      AmountTtc: '432000',
      CurrencyCode: 'EUR',
      Lines: [
        {
          Product: {
            Reference: null,
            Label: 'Formation Utilisation et Administration KOBAN',
            Comments: null,
            eShopURL: null,
            Obsolete: false,
            Catproduct: null,
            MoreFields: null,
            Prht: 0.0,
            Margin: 0.0,
            Ht: 0.0,
            Ttc: 0.0,
            Vat: 0.0,
            Unit: null,
            StockMin: 0.0,
            PCB: 0.0,
            Regroup: null,
            Classification: null,
            IsSelling: false,
            Model: null,
            OtherCode: null,
            Declinaisons: null,
            Guid: '55018e80608776de640b023b',
            DUpdated: 0.0,
            Updated: '0001-01-01T00:00:00',
            DCreated: 0.0,
            Created: '0001-01-01T00:00:00'
          },
          Quantity: 1.0,
          Vat: 20.0,
          Red: 0.0,
          Ht: 900.0,
          Ttc: 1080.0,
          Prht: 860.0,
          UnitPrice: 900.0,
          Extcode: null,
          Comments:
            '&lt;div&gt;Formation en 1 journ&eacute;e&nbsp;de 7 heures,&nbsp;6 personnes form&eacute;es simultan&eacute;ment au maximum&lt;br&gt;5 juillet 2017&lt;br&gt;&lt;u&gt;&lt;b&gt;&lt;i&gt;(Tarif hors frais de d&eacute;placement ou mission du formateur Koban)&lt;/i&gt;&lt;/b&gt;&lt;/u&gt;&lt;br&gt;&lt;br&gt;La formation des &eacute;quipes Marketing aborde les th&egrave;mes suivants !&lt;br&gt;- Tracking d&apos;un site web et lecture des remont&eacute;es du tracking&lt;br&gt;- Param&eacute;trage du r&eacute;f&eacute;rentiel marketing&lt;br&gt;- Requ&ecirc;tes sur pistes&lt;br&gt;- Requ&ecirc;tes sur comptes&lt;br&gt;- Param&eacute;trage des options emailing de Koban : exp&eacute;diteurs, gestion des emails invalides, SPF, DKIM&lt;br&gt;- Cr&eacute;ation depuis un mod&egrave;le existant d&apos;un mod&egrave;le email&lt;br&gt;- Cr&eacute;ation et lancement d&apos;une campagne emailing&lt;br&gt;- Cr&eacute;ation d&apos;un sc&eacute;nario et lancement d&apos;un sc&eacute;nario - Suivi et action sur r&eacute;sultats&lt;br&gt;- Analyse des indicateurs standards pr&eacute;sents dans Koban&lt;br&gt;&lt;br&gt;Mat&eacute;riel informatique et connexion Web haut d&eacute;bit assur&eacute;s par le client&lt;br&gt;eBazten est enregistr&eacute; aupr&egrave;s de la Pr&eacute;fecture du Rh&ocirc;ne sous le num&eacute;ro 82 69 12067 69.&lt;/div&gt;',
          DeclinaisonCode: null
        },
        {
          Product: {
            Reference: null,
            Label: 'Formation Utilisation et Administration KOBAN',
            Comments: null,
            eShopURL: null,
            Obsolete: false,
            Catproduct: null,
            MoreFields: null,
            Prht: 0.0,
            Margin: 0.0,
            Ht: 0.0,
            Ttc: 0.0,
            Vat: 0.0,
            Unit: null,
            StockMin: 0.0,
            PCB: 0.0,
            Regroup: null,
            Classification: null,
            IsSelling: false,
            Model: null,
            OtherCode: null,
            Declinaisons: null,
            Guid: '55018e80608776de640b023b',
            DUpdated: 0.0,
            Updated: '0001-01-01T00:00:00',
            DCreated: 0.0,
            Created: '0001-01-01T00:00:00'
          },
          Quantity: 3.0,
          Vat: 20.0,
          Red: 0.0,
          Ht: 2700.0,
          Ttc: 3240.000244140625,
          Prht: 860.0,
          UnitPrice: 900.0,
          Extcode: null,
          Comments:
            'Formation en 1 journ&eacute;e de 7 heures, 6 personnes form&eacute;es simultan&eacute;ment au maximum&lt;br&gt;10 11 12 juillet 2017&lt;br&gt;Devis pour 3 groupes de 6 commerciaux&lt;br&gt;&lt;i&gt;&lt;u&gt;(Tarif hors frais de d&eacute;placement ou mission du formateur Koban)&lt;/u&gt;&lt;/i&gt;&lt;br&gt;&lt;br&gt;La formation des commerciaux utilisateurs aborde les th&egrave;mes suivants :&lt;br&gt;- Gestion des prospects&lt;br&gt;- Compr&eacute;hension des programmes et lots&lt;br&gt;- Pose des options&lt;br&gt;- R&eacute;servations&lt;br&gt;&lt;br&gt;Mat&eacute;riel informatique et connexion Web haut d&eacute;bit assur&eacute;s par le client&lt;br&gt;eBazten est enregistr&eacute; aupr&egrave;s de la Pr&eacute;fecture du Rh&ocirc;ne sous le num&eacute;ro 82 69 12067 69.',
          DeclinaisonCode: null
        }
      ],
      Asset: false,
      Origin: {
        Label: 'Réseau - Client',
        Code: 'Réseau  - Client',
        Guid: '55018e7c608776de640b00e6',
        DUpdated: 0.0,
        Updated: '0001-01-01T00:00:00',
        DCreated: 0.0,
        Created: '0001-01-01T00:00:00'
      },
      Header: null,
      MarketingCampaign: null,
      Source: null,
      Canal: null,
      Guid: '5974d0b30dc3610ddc780935',
      Updated: '2019-12-12T09:18:39.543',
      Created: '0001-01-01T00:00:00'
    })
    invoices.push(invoice)
  })

  it('should throw error if more than 100 invoices send to api', async () => {
    for (let i = 1; i <= 100; i++) {
      invoices.push(new KobanInvoice())
    }
    await expect(
      kobanSDK.invoiceService.createOrUpdateMany(
        invoices,
        KobanUniquePropertyInvoice.Number,
        KobanOrderUniquePropertyInvoice.Number,
        KobanThirdUniquePropertyInvoice.Email
      )
    ).rejects.toThrow(
      new Error(
        `You are trying to send 101 invoices but only a maximum of 100 is accepted per api call.`
      )
    )
  })

  it('should succeed on createOrUpdateMany', async () => {
    // setup
    const resp = {
      data: {
        Success: true,
        Result: ['abcd']
      }
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.invoiceService.createOrUpdateMany(
      [new KobanInvoice()],
      KobanUniquePropertyInvoice.Number,
      KobanOrderUniquePropertyInvoice.Number,
      KobanThirdUniquePropertyInvoice.Email
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

  it('should return Error on createOrUpdateMany', async () => {
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
      kobanSDK.invoiceService.createOrUpdateMany(
        [new KobanInvoice()],
        KobanUniquePropertyInvoice.Number,
        KobanOrderUniquePropertyInvoice.Number,
        KobanThirdUniquePropertyInvoice.Email
      )
    ).rejects.toThrow(new Error(resp.data.Errors.join('\n')))
  })

  it('should get Invoice object', async () => {
    // setup
    const resp = {
      data: {
        Success: true,
        Result: {}
      }
    }
    mockedAxios.get.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.invoiceService.getOne('abcd')

    // expect
    expect(result).toBeInstanceOf(KobanInvoice)
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

  it('should return Error on getOne', async () => {
    // setup
    const resp = {
      data: {
        Success: false,
        Message: "cette facture n'existe pas"
      }
    }
    mockedAxios.get.mockResolvedValue(resp)

    // work
    await expect(kobanSDK.invoiceService.getOne('abcd')).rejects.toThrow(
      new Error(resp.data.Message)
    )
  })

  it('should set invoice in Problem status', async () => {
    // setup
    const resp = {
      data: {
        Success: true,
        Result: true
      }
    }
    mockedAxios.put.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.invoiceService.inProblem('abcd', 'test in Problem')

    // expect
    expect(result).toBe(true)
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

  it('should return Error on inProblem', async () => {
    // setup
    const resp = {
      data: {
        Success: false,
        Message: "cette facture n'existe pas"
      }
    }
    mockedAxios.put.mockResolvedValue(resp)

    // work
    await expect(kobanSDK.invoiceService.inProblem('abcd', 'test problem')).rejects.toThrow(
      new Error(resp.data.Message)
    )
  })

  it('should generate invoice asset', async () => {
    // setup
    const resp = {
      data: {
        Success: true,
        Result: true
      }
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    const result = await kobanSDK.invoiceService.generateAsset('abcd', 10000)

    // expect
    expect(result).toBe(true)
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

  it('should return Error on generateAsset', async () => {
    // setup
    const resp = {
      data: {
        Success: false,
        Message: "cette facture n'existe pas"
      }
    }
    mockedAxios.post.mockResolvedValue(resp)

    // work
    await expect(kobanSDK.invoiceService.generateAsset('abcd')).rejects.toThrow(
      new Error(resp.data.Message)
    )
  })
})
