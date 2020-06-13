const sampleSuggestedPrices = { //eslint-disable-line
  'Very Good (VG)': { currency: 'USD', value: 170.77798861480076 },
  'Good Plus (G+)': { currency: 'USD', value: 94.87666034155598 },
  'Near Mint (NM or M-)': { currency: 'USD', value: 322.5806451612903 },
  'Good (G)': { currency: 'USD', value: 56.92599620493358 },
  'Very Good Plus (VG+)': { currency: 'USD', value: 246.67931688804555 },
  'Mint (M)': { currency: 'USD', value: 360.5313092979127 },
  'Fair (F)': { currency: 'USD', value: 37.95066413662239 },
  'Poor (P)': { currency: 'USD', value: 18.975332068311197 }
};

const sampleWantsArray = [4282482, 1292887]; //eslint-disable-line

export const sampleRates = {
  "CAD": 1.357661005,
  "HKD": 7.7500884643,
  "ISK": 134.5541401274,
  "PHP": 50.2149681529,
  "DKK": 6.59509908,
  "HUF": 306.0863411182,
  "CZK": 23.6181882519,
  "GBP": 0.7931086341,
  "RON": 4.2766277424,
  "SEK": 9.2978591649,
  "IDR": 14205.8032554848,
  "INR": 75.8912774239,
  "BRL": 5.0767869781,
  "RUB": 69.6799363057,
  "HRK": 6.6932059448,
  "JPY": 107.2717622081,
  "THB": 30.9501061571,
  "CHF": 0.9463021939,
  "EUR": 0.8846426044,
  "MYR": 4.2675159236,
  "BGN": 1.7301840057,
  "TRY": 6.8315640481,
  "CNY": 7.0762561925,
  "NOK": 9.5961606511,
  "NZD": 1.5528131635,
  "ZAR": 17.055378627,
  "USD": 1.0,
  "MXN": 22.5097310686,
  "SGD": 1.3904812456,
  "AUD": 1.4549716914,
  "ILS": 3.4668259023,
  "KRW": 1203.5120311394,
  "PLN": 3.9352441614
}

const sampleWantsObject = { //eslint-disable-line
  'wants': [
    {
      'rating': 0,
      'resource_url': 'https://api.discogs.com/users/aaroncmullan/wants/4282482',
      'basic_information': {
        'labels': [
          {
            'name': 'Elektra',
            'entity_type': '1',
            'catno': 'EKS-74051',
            'resource_url': 'https://api.discogs.com/labels/651',
            'id': 651,
            'entity_type_name': 'Label'
          }
        ],
        'year': 1969,
        'master_url': 'https://api.discogs.com/masters/38215',
        'artists': [
          {
            'join': '',
            'name': 'The Stooges',
            'anv': '',
            'tracks': '',
            'role': '',
            'resource_url': 'https://api.discogs.com/artists/39770',
            'id': 39770
          }
        ],
        'id': 4282482,
        'thumb': '',
        'title': 'The Stooges',
        'formats': [
          {
            'descriptions': [
              'LP',
              'Album',
              'Stereo'
            ],
            'text': 'CP - Columbia Pitman Pressing',
            'name': 'Vinyl',
            'qty': '1'
          }
        ],
        'cover_image': '',
        'resource_url': 'https://api.discogs.com/releases/4282482',
        'master_id': 38215
      },
      'id': 4282482,
      'date_added': '2020-02-19T16:43:51-08:00'
    },
    {
      'rating': 0,
      'resource_url': 'https://api.discogs.com/users/aaroncmullan/wants/1292887',
      'basic_information': {
        'labels': [
          {
            'name': 'United Artists Records',
            'entity_type': '1',
            'catno': 'UAS 29 414 I',
            'resource_url': 'https://api.discogs.com/labels/4898',
            'id': 4898,
            'entity_type_name': 'Label'
          }
        ],
        'year': 1972,
        'master_url': 'https://api.discogs.com/masters/11693',
        'artists': [
          {
            'join': '',
            'name': 'Can',
            'anv': '',
            'tracks': '',
            'role': '',
            'resource_url': 'https://api.discogs.com/artists/17203',
            'id': 17203
          }
        ],
        'id': 1292887,
        'thumb': '',
        'title': 'Ege Bamyasi',
        'formats': [
          {
            'descriptions': [
              'LP',
              'Album',
              'Stereo'
            ],
            'name': 'Vinyl',
            'qty': '1'
          }
        ],
        'cover_image': '',
        'resource_url': 'https://api.discogs.com/releases/1292887',
        'master_id': 11693
      },
      'id': 1292887,
      'date_added': '2020-02-01T05:52:42-08:00'
    }
  ],
  'pagination': {
    'per_page': 50,
    'items': 2,
    'page': 1,
    'urls': {},
    'pages': 1
  }
};

const sampleScrape = { //eslint-disable-line
  pagination: { items: 3, hasNext: false, totalPages: 1 },
  listing: [
    {
      'title':'The Stooges - The Stooges (LP, Album, CP )',
      'condition_sleeve':' Very Good (VG)',
      'condition_media':'Very Good Plus (VG+)',
      'seller':'compwiz4u',
      'ships_from':'United States',
      'price':'$299.00',
      'shipping':'\n + $5.00\n \n shipping',
      'converted_price':' $304.00 total',
      'release_link':'/The-Stooges-The-Stoog es/release/4282482',
      'id':'/sell/item/782289920',
      'thumbnail':'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip _icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
    },
    {
      'title':'The Stooges - The Stooges (LP, Album, CP )',
      'condition_sleeve':'Very Good Plus (VG+)',
      'condition_media':'Very Good Plus (VG+)',
      'seller':'mm74',
      'ships_from':'Italy',
      'price':'€340.0 0',
      'shipping':'\n + shipping',
      'converted_price':'about $369.57',
      'release_link':'/The-Stooges-The-Stooges/release/4282482',
      'id':'/sell/i tem/1041594205',
      'thumbnail':'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():q uality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
    },
    {
      'title':'The Stooges - The Stooges (LP, Album, CP )',
      'condition_sleeve':'Near Mint (NM or M-)',
      'condition_media':'Near Mint (NM or M-)',
      'seller':'johem',
      'ships_from':'Germany',
      'price':'€490.00',
      'shipping':'\n + sh ipping',
      'converted_price':'about $532.61',
      'release_link':'/The-Stooges-The-Stooges/release/4282482',
      'id':'/sell/item/1052174199',
      'thumbnail':' https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4 282482-1375913082-1796.jpeg.jpg'
    }
  ],
  'id':4282482,
  'type':'release',
  'thumbnail':'https://img.discogs.com/kmwujHzuyUhKgMFowrB6lQ_EHkY=/fit-in/300x 300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4282482-1375913082-1796.jpeg.jpg'
};

export const sampleGetSaleItems = // 20200612150600
// http://localhost:3002/api/v1/sales/11160522

{
  "pagination": {
    "items": 6,
    "hasNext": false,
    "totalPages": 1
  },
  "listing": [
    {
      "title": "13th Floor Elevators - Easter Everywhere (LP, Album, \"Po)",
      "condition_sleeve": "Very Good (VG)",
      "condition_media": "Very Good (VG)",
      "seller": "Psychedelic-Eye",
      "ships_from": "Italy",
      "price": "$160.00"
    },
    {
      "title": "13th Floor Elevators - Easter Everywhere (LP, Album, \"Po)",
      "condition_sleeve": "Very Good (VG)",
      "condition_media": "Very Good (VG)",
      "seller": "billyfrancis",
      "ships_from": "United States",
      "price": "£250.00"
    },
    {
      "title": "13th Floor Elevators - Easter Everywhere (LP, Album, \"Po)",
      "condition_sleeve": "Very Good (VG)",
      "condition_media": "Good Plus (G+)",
      "seller": "cultureyard_records",
      "ships_from": "United States",
      "price": "€295.00"
    },
    {
      "title": "13th Floor Elevators - Easter Everywhere (LP, Album, \"Po)",
      "condition_sleeve": "Very Good (VG)",
      "condition_media": "Good Plus (G+)",
      "seller": "cultureyard_records",
      "ships_from": "United States",
      "price": "CA$295.00"
    },
    {
      "title": "13th Floor Elevators - Easter Everywhere (LP, Album, \"Po)",
      "condition_sleeve": "Very Good Plus (VG+)",
      "condition_media": "Very Good Plus (VG+)",
      "seller": "PlutoniumCake",
      "ships_from": "Italy",
      "price": "A$350.00"
    },
    {
      "title": "13th Floor Elevators - Easter Everywhere (LP, Album, \"Po)",
      "condition_sleeve": "Very Good Plus (VG+)",
      "condition_media": "Very Good Plus (VG+)",
      "seller": "dacapoforeverchanges",
      "ships_from": "Italy",
      "price": "¥675.00"
    }
  ],
  "id": "11160522",
  "type": "release"
};

const sampleWantListObject = { //eslint-disable-line
  'wants': [
    {
      'rating': 0,
      'resource_url': 'https://api.discogs.com/users/aaroncmullan/wants/4282482',
      'basic_information': {
        'labels': [
          {
            'name': 'Elektra',
            'entity_type': '1',
            'catno': 'EKS-74051',
            'resource_url': 'https://api.discogs.com/labels/651',
            'id': 651,
            'entity_type_name': 'Label'
          }
        ],
        'year': 1969,
        'master_url': 'https://api.discogs.com/masters/38215',
        'artists': [
          {
            'join': '',
            'name': 'The Stooges',
            'anv': '',
            'tracks': '',
            'role': '',
            'resource_url': 'https://api.discogs.com/artists/39770',
            'id': 39770
          }
        ],
        'id': 4282482,
        'thumb': '',
        'title': 'The Stooges',
        'formats': [
          {
            'descriptions': [
              'LP',
              'Album',
              'Stereo'
            ],
            'text': 'CP - Columbia Pitman Pressing',
            'name': 'Vinyl',
            'qty': '1'
          }
        ],
        'cover_image': '',
        'resource_url': 'https://api.discogs.com/releases/4282482',
        'master_id': 38215
      },
      'id': 4282482,
      'date_added': '2020-02-19T16:43:51-08:00'
    },
    {
      'rating': 0,
      'resource_url': 'https://api.discogs.com/users/aaroncmullan/wants/1292887',
      'basic_information': {
        'labels': [
          {
            'name': 'United Artists Records',
            'entity_type': '1',
            'catno': 'UAS 29 414 I',
            'resource_url': 'https://api.discogs.com/labels/4898',
            'id': 4898,
            'entity_type_name': 'Label'
          }
        ],
        'year': 1972,
        'master_url': 'https://api.discogs.com/masters/11693',
        'artists': [
          {
            'join': '',
            'name': 'Can',
            'anv': '',
            'tracks': '',
            'role': '',
            'resource_url': 'https://api.discogs.com/artists/17203',
            'id': 17203
          }
        ],
        'id': 1292887,
        'thumb': '',
        'title': 'Ege Bamyasi',
        'formats': [
          {
            'descriptions': [
              'LP',
              'Album',
              'Stereo'
            ],
            'name': 'Vinyl',
            'qty': '1'
          }
        ],
        'cover_image': '',
        'resource_url': 'https://api.discogs.com/releases/1292887',
        'master_id': 11693
      },
      'id': 6028905,
      'date_added': '2020-02-01T05:52:42-08:00'
    }
  ],
  'pagination': {
    'per_page': 50,
    'items': 2,
    'page': 1,
    'urls': {},
    'pages': 1
  }
};
