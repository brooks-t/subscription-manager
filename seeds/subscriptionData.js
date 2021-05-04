const { Subscription } = require('../models');

const subscriptiondata = [
  {
    title: 'Netflix',
    category: 'Video',
    next_payment: 'May 30, 2021',
    billing_cycle: 'monthly',
    amount: 10.00,
    rating: 5,
    user_id: 1
  },
  {
    title: 'Audible',
    category: 'Audio',
    next_payment: 'May 29, 2021',
    billing_cycle: 'monthly',
    amount: 9.00,
    rating: 4,
    user_id: 1
  },
  {
    title: 'Amazon',
    category: 'Shipping',
    next_payment: 'December 28, 2021',
    billing_cycle: 'yearly',
    amount: 99.00,
    rating: 5,
    user_id: 1
  },
  {
    title: 'Netflix',
    category: 'Video',
    next_payment: 'May 30, 2021',
    billing_cycle: 'monthly',
    amount: 10.00,
    rating: 5,
    user_id: 2
  },
  {
    title: 'Amazon',
    category: 'Shipping',
    next_payment: 'August 19, 2021',
    billing_cycle: 'yearly',
    amount: 99.00,
    rating: 2,
    user_id: 2
  },
  {
    title: 'Hulu',
    category: 'Video',
    next_payment: 'May 22, 2021',
    billing_cycle: 'monthly',
    amount: 5.00,
    rating: 3,
    user_id: 2
  },
  {
    title: 'New York Times',
    category: 'News',
    next_payment: 'May 10, 2021',
    billing_cycle: 'weekly',
    amount: 3.00,
    rating: 1,
    user_id: 2
  },
  {
    title: 'Disney+',
    category: 'Video',
    next_payment: 'Nov 30, 2021',
    billing_cycle: 'yearly',
    amount: 75.00,
    rating: 4,
    user_id: 3
  },
  {
    title: 'Athletic Greens',
    category: 'Nutrition',
    next_payment: 'May 15, 2021',
    billing_cycle: 'monthly',
    amount: 85.00,
    rating: 4,
    user_id: 4
  },
  {
    title: 'Amazon',
    category: 'Shipping',
    next_payment: 'May 28, 2021',
    billing_cycle: 'yearly',
    amount: 99.00,
    rating: 5,
    user_id: 4
  },
  {
    title: 'Wall Street Journal',
    category: 'News',
    next_payment: 'May 11, 2021',
    billing_cycle: 'monthly',
    amount: 40.00,
    rating: 3,
    user_id: 5
  },
  {
    title: 'Netflix',
    category: 'Video',
    next_payment: 'June 1, 2021',
    billing_cycle: 'monthly',
    amount: 8.00,
    rating: 5,
    user_id: 5
  },
];

const seedSubscriptions = () => Subscription.bulkCreate(subscriptiondata);

module.exports = seedSubscriptions;