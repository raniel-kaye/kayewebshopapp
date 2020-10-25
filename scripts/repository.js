var repository = (function () {
    'use strict';
    var products = [{
    id: 1,
    name: 'City Hunter',
    price: 60.89,
    description: 'Its based on a japanese manga/comic book',
    category: 'Action Movie'
    }, {
    id: 2,
    name: 'The Sniper',
    price: 50.78,
    description: ' The movie that you awaited for',
    category: 'Action Movies'
    }, {
    id: 3,
    name: 'The City Hunter',
    price: 50.90,
    description: ' Yoon-sungs ultimate goal is to avenge his fathers killers.',
    category: 'Action Movies'
    }, { 
    id: 4,
    name: 'Operation Red Sea',
    price: 56.50,
    description: 'A Chinese special forces unit must rescue their fellow citizens in the country of Yewaire on the Arabian Peninsula amidst violent coup and threats from a terrorist group ',
    category: 'Action Movies'
    }, {
    id: 5,
    name: 'Kingdom',
    price: 30.50,
    description: 'Orphaned by war and forced into slavery, Xin and Piao dream of becoming great generals of the world.',
    category: 'Action Movies'
    }, 
    ];
    return {
    getTopProducts: function () {
    return [products[1], products[2], products[3]];
    },
    getProduct: function (id) {
    return products.filter(p => p.id === id)[0];
    },
    search: function (q) {
        if (q == null) {
       return [];
        } else {
        return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
        }
    }
    };
    })();