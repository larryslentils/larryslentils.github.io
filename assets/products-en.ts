import { Product } from "./products";

const Products: Product[] = [
  {
    id: "demo-magazine-subscription",
    name: "Unlimited B2B introductions, featuring Larry's Lentils & Friends",
    prices: {
      physical: 99.00,
      digital: 0,
    },
    description: "Subscribe to our B2B hospitality service, featuring 'Larry's Lentils and Friends'. Enjoy unlimited hosted introductions to freelancers at our locations with savory foods. Taste power! Choose a weekly or monthly subscription. Contact us directly for 'Pay Whatever' payment options.",
    image: "/images/ah.jpg",
    plans: [{
      frequency: 'monthly',
      id: 'magazine-monthly-plan',
      interval: 1,
      name: 'Monthly subscription',
      price: 99.00
    },{
      frequency: 'weekly',
      id: 'magazine-weekly-plan',
      interval: 1,
      name: 'Weekly subscription',
      price: 35.00
    }],
  },
]

export default Products;
