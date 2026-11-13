export type MenuItem = {
  name: string
  description?: string
  price: number
  note?: string
}

export type MenuCategory = {
  id: string
  label: string
  intro?: string
  items: MenuItem[]
}

/** Edit prices here anytime — they flow into the live menu. */
export const menuCategories: MenuCategory[] = [
  {
    id: 'signatures',
    label: 'Signatures',
    intro: 'The drinks that put Beanstro on the Binondo map.',
    items: [
      {
        name: 'Vietnamese Coffee',
        description: 'Strong, sweet, and street-stall classic.',
        price: 250,
      },
      {
        name: 'Beanondo Campfire',
        description: 'Macadamia and cacao-infused house favorite.',
        price: 220,
      },
      {
        name: 'Beanondo Cacao',
        description: 'Rich cacao layered over our local brew.',
        price: 210,
      },
      {
        name: 'Mandarin Coffee',
        description: 'Bright citrus meets espresso.',
        price: 210,
      },
      {
        name: 'Hot Tablea with Marshmallow',
        description: 'Filipino tablea cocoa, toasted marshmallow.',
        price: 190,
      },
      {
        name: 'Matcha Seasalt Cloud',
        description: 'Creamy matcha with a sea-salt foam finish.',
        price: 230,
      },
    ],
  },
  {
    id: 'coffee-matcha',
    label: 'Coffee & Matcha',
    intro: 'Everyday cups for workdays and long Chinatown walks.',
    items: [
      { name: 'Espresso', price: 120 },
      { name: 'Americano', price: 140 },
      { name: 'Latte', price: 160 },
      { name: 'Cappuccino', price: 160 },
      { name: 'Flat White', price: 165 },
      { name: 'Iced Latte', price: 170 },
      { name: 'Matcha Latte', price: 180 },
      { name: 'Iced Matcha', price: 185 },
    ],
  },
  {
    id: 'sticky-rice',
    label: 'Sticky Rice',
    intro: 'Unexpected café dessert — and worth the stop.',
    items: [
      {
        name: 'Mango Sticky Rice',
        description: 'Sweet mango, soft sticky rice, coconut cream.',
        price: 120,
      },
      {
        name: 'Cacao Sticky Rice',
        description: 'Same comfort, finished with chocolate sauce.',
        price: 200,
      },
    ],
  },
  {
    id: 'pastries',
    label: 'Cookies & Croissants',
    intro: 'House-baked croissants and chewy cookie favorites.',
    items: [
      {
        name: 'Dubai Chewy Cookie',
        description: 'Chewy mochi, crunchy knafeh-inspired filling.',
        price: 130,
      },
      { name: 'Biscoff Cookie', price: 110 },
      { name: 'Salted Caramel Cookie', price: 110 },
      { name: 'Chocolate Chip Cookie', price: 110 },
      {
        name: 'House Croissant',
        description: 'Baked in-house with French pastry guidance.',
        price: 120,
      },
      { name: 'Tiramisu', description: 'Sweet, creamy, café classic.', price: 240 },
    ],
  },
  {
    id: 'rice-meals',
    label: 'Rice Meals',
    intro: 'Hearty plates with your choice of egg.',
    items: [
      {
        name: 'Milkfish Rice Meal',
        description: 'Served with rice and egg of your choice.',
        price: 220,
      },
      {
        name: 'Hungarian Sausage Rice Meal',
        description: 'Served with rice and egg of your choice.',
        price: 210,
      },
      {
        name: 'Tapa Rice Meal',
        description: 'Served with rice and egg of your choice.',
        price: 210,
      },
    ],
  },
]

export function formatPrice(peso: number): string {
  return `₱${peso}`
}
