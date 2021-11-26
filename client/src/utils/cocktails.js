const cocktails = [
  {
    cocktailName: 'Fancy Name',
    cocktailDescription: 'Leverage agile frame works to provide a robust synopsis for high level overviews.',
    cocktailGarnishes: [
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmount: '1.5 oz'
      },
      {
        ingredientName: 'Cranberry Juice',
        ingredientAmount: '2 oz'
      },
      {
        ingredientName: 'Other Stuff',
        ingredientAmount: '0.5 oz'
      },
    ],
    cocktailSteps: [
      'Grab a shaker.',
      'Fill shaker with ice.',
      'Insert shaker into bartender.',
      'Pour into old fashion glass.',
      'Garnish with an orange wedge.'
    ]
  },
  {
    cocktailName: 'Fancy Name 2',
    cocktailDescription: 'Longer Text.  Leverage agile frame works to provide a robust synopsis for high level overviews. Leverage agile frame works to provide.',
    cocktailGarnishes: [
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/chocolatini.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmount: '1.5 oz'
      },
      {
        ingredientName: 'Cranberry Juice',
        ingredientAmount: '2 oz'
      },
      {
        ingredientName: 'Other Stuff',
        ingredientAmount: '0.5 oz'
      },
      {
        ingredientName: 'Bitters',
        ingredientAmount: '2 oz'
      },
      {
        ingredientName: 'More Stuff',
        ingredientAmount: '1.5 oz'
      },
    ],
    cocktailSteps: [
      'Grab a shaker.',
      'Fill shaker with ice.',
      'Insert shaker into bartender.',
      'Pour into old fashion glass.',
      'Garnish with an orange wedge.'
    ]
  },
  {
    cocktailName: 'Vodka Cranberry',
    cocktailDescription: 'You might think the Vodka Cranberry drink is simply vodka and cranberry juice,  but this drink actually has four ingredients that are important to the flavor.',
    cocktailGarnishes: [
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
      {
        garnishName: 'Lime Wheel',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Lime Juice',
        garnishImage: 'assets/images/icons/wedge.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/vodka-cranberry.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmount: '1 oz'
      },
      {
        ingredientName: 'Cranberry Juice',
        ingredientAmount: '4.5 oz'
      },
      {
        ingredientName: 'Orange Juice',
        ingredientAmount: '0.5 oz'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice',
      'Insert highball glass into bartender',
      'Squeeze some lime juice',
      'Add a lime wheel to garnish'
    ]
  },
  {
    cocktailName: 'Vodka Tonic',
    cocktailDescription: 'Looking for a refreshing cocktail that goes down easy? Try the vodka tonic!',
    cocktailGarnishes: [
      {
        garnishName: 'Highball Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Lime Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Lemon Juice',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Lime Juice',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/vodka-tonic.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Vodka',
        ingredientAmount: '1.5 oz'
      },
      {
        ingredientName: 'Tonic',
        ingredientAmount: '4 oz'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice',
      'Insert highball glass into bartender',
      'Squeeze in the juice from 1 lemon wedge and 1 lime wedge',
      'Add the squeezed wedges into the drink',
      'Add another lime wedge to the glass as a garnish.'
    ]
  },
  {
    cocktailName: 'Tequila Sunrise',
    cocktailDescription: 'The Tequila Sunrise cocktail, with its bright striations of color, evokes a summer sunrise.',
    cocktailGarnishes: [
      {
        garnishName: 'Orange Wedge',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Cherries',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Highball Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/tequila-sunrise.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Tequila Blanco',
        ingredientAmount: '2 oz'
      },
      {
        ingredientName: 'Orange Juice',
        ingredientAmount: '4 oz'
      },
      {
        ingredientName: 'Grenadine',
        ingredientAmount: '0.25 oz'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice',
      'Insert highball glass into bartender', // grenadine to be served last, 
      'Garnish with orange slice and cherry'

    ]
  },
  {
    cocktailName: 'Gin and Tonic',
    cocktailDescription: 'Gin & Tonic. If you can say it, you can make it. Right? ',
    cocktailGarnishes: [
      {
        garnishName: 'Cocktail Glass',
        garnishImage: 'assets/images/icons/cocktail.png',
      },
      {
        garnishName: 'Two Lime Wedges',
        garnishImage: 'assets/images/icons/wedge.png',
      },
      {
        garnishName: 'Ice Cubes',
        garnishImage: 'assets/images/icons/ice.png',
      },
    ],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [
      {
        ingredientName: 'Gin',
        ingredientAmount: '2 oz'
      },
      {
        ingredientName: 'Tonic',
        ingredientAmount: '4 oz'
      }
    ],
    cocktailSteps: [
      'Fill a highball glass with ice, then add the gin',
      'Top with the tonic water and gently stir',
      'Garnish with lime wheels or seasonal garnishes'
    ]
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
  {
    cocktailName: 'Drink',
    cocktailDescription: 'lorem ipsum',
    cocktailGarnishes: [],
    cocktailImage: 'assets/images/cocktails/hella-tasty.jpg',
    cocktailIngredients: [],
    cocktailSteps: []
  },
]

export default cocktails;