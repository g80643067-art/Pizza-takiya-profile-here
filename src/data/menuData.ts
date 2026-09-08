import { MenuItem, CategoryId } from '../types';

// Realistically generated food photo assets accurately matching menu items
import comboDoubleImg from '../assets/images/combo_double_1788760149761.jpg';
import tomatoPizzaImg from '../assets/images/tomato_pizza_1788759921479.jpg';
import onionPizzaImg from '../assets/images/onion_pizza_1788759937217.jpg';
import capsicumPizzaImg from '../assets/images/capsicum_pizza_1788759952208.jpg';
import cornPizzaImg from '../assets/images/corn_pizza_1788759971936.jpg';
import paneerPizzaImg from '../assets/images/paneer_pizza_1788759992844.jpg';
import spicyPizzaImg from '../assets/images/spicy_pizza_1788760008730.jpg';
import vegBurgerImg from '../assets/images/veg_burger_1788760028448.jpg';
import paneerBurgerImg from '../assets/images/paneer_burger_1788759706673.jpg';
import cheeseBurgerImg from '../assets/images/cheese_burger_1788759785887.jpg';
import frenchBurgerImg from '../assets/images/french_burger_1788760129593.jpg';
import paneerSandwichImg from '../assets/images/paneer_sandwich_1788759722104.jpg';
import cheeseSandwichImg from '../assets/images/cheese_sandwich_1788759801992.jpg';
import vegMaggiImg from '../assets/images/veg_maggi_1788759816060.jpg';
import paneerMaggiImg from '../assets/images/paneer_maggi_1788759676021.jpg';
import vegMomosImg from '../assets/images/veg_momos_1788759864282.jpg';
import paneerTikkaImg from '../assets/images/paneer_tikka_1788759834575.jpg';
import frenchFriesImg from '../assets/images/french_fries_1788760098907.jpg';
import cheeseFrenchFriesImg from '../assets/images/cheese_french_fries_1788759770036.jpg';
import alooPattiesImg from '../assets/images/aloo_patties_1788760113689.jpg';
import cheeseGarlicBreadImg from '../assets/images/cheese_garlic_bread_1788759896886.jpg';
import stuffedGarlicBreadImg from '../assets/images/stuffed_garlic_bread_1788759643370.jpg';
import chilliGarlicBreadImg from '../assets/images/chilli_garlic_bread_1788759659943.jpg';
import zingyParcelImg from '../assets/images/zingy_parcel_1788759752325.jpg';
import whitePastaImg from '../assets/images/white_pasta_1788760046462.jpg';
import smokyPaneerPastaImg from '../assets/images/smoky_paneer_pasta_1788759690384.jpg';
import potatoBitesImg from '../assets/images/potato_bites_1788759737317.jpg';
import kulhadChaiImg from '../assets/images/kulhad_chai_1788759624780.jpg';
import hotCoffeeImg from '../assets/images/hot_coffee_1788760080837.jpg';
import coldCoffeeImg from '../assets/images/cold_coffee_1788760061833.jpg';
import pizzaCokeComboImg from '../assets/images/real_pizza_coke_1788811139041.jpg';
import plainCheesePizzaImg from '../assets/images/plain_cheese_pizza_1788763675821.jpg';
import paneerCheeseOnlyImg from '../assets/images/paneer_cheese_only_1788808084396.jpg';
import vegSandwichNoCheeseImg from '../assets/images/veg_sandwich_no_cheese_1788808111573.jpg';
import burgerDrinkComboImg from '../assets/images/burger_drink_combo_1788808157287.jpg';
import bowlIceCreamImg from '../assets/images/bowl_ice_cream_1788808180594.jpg';
import loadedCheesePizzaImg from '../assets/images/loaded_cheese_pizza.jpg';
import pizzaIndianaImg from '../assets/images/pizza_indiana.jpg';
import freshVeggiePizzaImg from '../assets/images/fresh_veggie_pizza.jpg';
import crushVeggiePizzaImg from '../assets/images/crush_veggie_pizza.jpg';
import countryFreshPizzaImg from '../assets/images/country_fresh_pizza.jpg';
import farmFreshPizzaImg from '../assets/images/farm_fresh_pizza.jpg';
import darkSpicyPizzaImg from '../assets/images/dark_spicy_pizza.jpg';
import loversSpecialPizzaImg from '../assets/images/lovers_special_pizza.jpg';
import nachoCheeseDipImg from '../assets/images/nacho_cheese_dip.jpg';
import thumsUpCanImg from '../assets/images/thums_up_can.jpg';
import mountainDewBottleImg from '../assets/images/mountain_dew_bottle.jpg';

export const RESTAURANT_INFO = {
  name: "THE PIZZA LOVER'S",
  tagline: "Eat With Love ❤️",
  cuisine: "100% Pure Vegetarian",
  rating: 4.3,
  reviewCount: 58,
  priceRange: "₹1–200 per person",
  phone: "093697 22736",
  phoneRaw: "919369722736",
  address: "Takiya Rd, Patan, Takiya, Uttar Pradesh 209867",
  landmark: "Near Takiya Mela Ground",
  hours: "10:00 AM – 10:00 PM",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Pizza+Lover%27s+Takiya+Rd+Patan+Takiya+Uttar+Pradesh+209867",
};

export const CATEGORIES: { id: CategoryId; name: string; icon: string }[] = [
  { id: 'all', name: 'Full Menu', icon: '🍽️' },
  { id: 'pizza', name: 'Classic Pizzas', icon: '🍕' },
  { id: 'special-pizza', name: 'Special Pizzas', icon: '⭐' },
  { id: 'combos', name: 'Value Combos', icon: '🔥' },
  { id: 'burger-sandwich', name: 'Burgers & Sandwiches', icon: '🍔' },
  { id: 'maggi-fries-sides', name: 'Maggi, Fries & Sides', icon: '🍟' },
  { id: 'pasta-garlic-bread', name: 'Pasta & Garlic Breads', icon: '🍝' },
  { id: 'drinks-beverages', name: 'Drinks & Chai', icon: '🥤' },
];

export const STANDARD_PIZZA_SIZES = [
  { name: 'Small' as const, code: 'S' as const, price: 75 },
  { name: 'Medium' as const, code: 'M' as const, price: 165 },
  { name: 'Large' as const, code: 'L' as const, price: 265 },
];

export const LOADED_PIZZA_SIZES = [
  { name: 'Small' as const, code: 'S' as const, price: 135 },
  { name: 'Medium' as const, code: 'M' as const, price: 265 },
  { name: 'Large' as const, code: 'L' as const, price: 365 },
];

export const DARK_SPICY_PIZZA_SIZES = [
  { name: 'Small' as const, code: 'S' as const, price: 175 },
  { name: 'Medium' as const, code: 'M' as const, price: 335 },
  { name: 'Large' as const, code: 'L' as const, price: 465 },
];

export const ADDON_PRICES = {
  extraCheese: { Small: 30, Medium: 45, Large: 60 },
  extraTopping: { Small: 25, Medium: 40, Large: 55 },
};

export const MENU_ITEMS: MenuItem[] = [
  // --- COMBOS (Special Deals) ---
  {
    id: 'combo-1',
    name: 'Veg Combo Double',
    category: 'combos',
    description: 'Double veg feast with delicious personal pizza, crunchy sides and refreshing beverage. Perfect sharing combo.',
    price: 269,
    isPopular: true,
    isBestDeal: true,
    tag: 'Best Deal',
    image: comboDoubleImg,
  },
  {
    id: 'combo-2',
    name: 'Medium Pizza + 2 Coke',
    category: 'combos',
    description: 'Freshly baked Medium Hand-Tossed Pizza served with two chilled Cokes. Unbeatable value!',
    price: 209,
    isPopular: true,
    isBestDeal: true,
    tag: 'Super Saver',
    image: pizzaCokeComboImg,
  },
  {
    id: 'combo-3',
    name: 'Burger, Fingers, Cold Drink Combo',
    category: 'combos',
    description: 'Crisp veg burger, crispy potato fingers, and your favorite chilled cold drink. Student budget favorite!',
    price: 99,
    isPopular: true,
    isBestDeal: true,
    tag: 'Under ₹100 Deal',
    image: burgerDrinkComboImg,
  },

  // --- CLASSIC PIZZAS (S: ₹75, M: ₹165, L: ₹265) ---
  {
    id: 'pz-cheese',
    name: 'Cheese Pizza',
    category: 'pizza',
    description: 'Classic mozzarella cheese melted over spiced herb pizza tomato sauce.',
    price: 75,
    isPopular: true,
    sizes: STANDARD_PIZZA_SIZES,
    hasCustomAddons: true,
    image: plainCheesePizzaImg,
  },
  {
    id: 'pz-mozzarella',
    name: 'Mozzarella Cheese Pizza',
    category: 'pizza',
    description: 'Double layer of stretchy authentic mozzarella cheese on fresh hand-stretched crust.',
    price: 75,
    sizes: STANDARD_PIZZA_SIZES,
    hasCustomAddons: true,
    image: plainCheesePizzaImg,
  },
  {
    id: 'pz-tomato-cheese',
    name: 'Tomato & Cheese Pizza',
    category: 'pizza',
    description: 'Juicy sliced farm-fresh tomatoes, rich cheese blend and Italian basil seasonings.',
    price: 75,
    sizes: STANDARD_PIZZA_SIZES,
    hasCustomAddons: true,
    image: tomatoPizzaImg,
  },
  {
    id: 'pz-onion-cheese',
    name: 'Onion & Cheese Pizza',
    category: 'pizza',
    description: 'Sweet caramelized crisp red onions paired with creamy golden melted cheese.',
    price: 75,
    isPopular: true,
    sizes: STANDARD_PIZZA_SIZES,
    hasCustomAddons: true,
    image: onionPizzaImg,
  },
  {
    id: 'pz-capsicum-cheese',
    name: 'Capsicum & Cheese Pizza',
    category: 'pizza',
    description: 'Crisp green bell capsicum, aromatic oregano flakes and mozzarella cheese.',
    price: 75,
    sizes: STANDARD_PIZZA_SIZES,
    hasCustomAddons: true,
    image: capsicumPizzaImg,
  },
  {
    id: 'pz-corn-cheese',
    name: 'Corn & Cheese Pizza',
    category: 'pizza',
    description: 'Golden sweet American corn kernels with creamy melted mozzarella cheese.',
    price: 75,
    isPopular: true,
    sizes: STANDARD_PIZZA_SIZES,
    hasCustomAddons: true,
    image: cornPizzaImg,
  },

  // --- SPECIAL PIZZAS (Loaded Cheese & Veggies: S ₹135, M ₹265, L ₹365) ---
  {
    id: 'sp-loaded-cheese',
    name: 'Loaded Cheese Pizza',
    category: 'special-pizza',
    description: 'Cheesy overload! Double mozzarella, cheddar cheese drizzle and herb crust.',
    price: 135,
    isPopular: true,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    tag: 'Chef Choice',
    image: loadedCheesePizzaImg,
  },
  {
    id: 'sp-pizza-indiana',
    name: 'Pizza Indiana',
    category: 'special-pizza',
    description: 'Desi zesty spiced gravy base topped with paneer, onions, crunchy capsicum and spices.',
    price: 135,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    image: pizzaIndianaImg,
  },
  {
    id: 'sp-masala-paneer',
    name: 'Masala Paneer Pizza',
    category: 'special-pizza',
    description: 'Tender marinated tandoori spiced paneer cubes, roasted capsicum, onion and gooey cheese.',
    price: 135,
    isPopular: true,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    image: paneerPizzaImg,
  },
  {
    id: 'sp-fresh-veggie',
    name: 'Fresh Veggie Pizza',
    category: 'special-pizza',
    description: 'Garden fresh tomatoes, sweet corn, crunchy green capsicum and onions.',
    price: 135,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    image: freshVeggiePizzaImg,
  },
  {
    id: 'sp-crush-veggie',
    name: 'Crush Veggie Pizza',
    category: 'special-pizza',
    description: 'Finely diced and spiced crunchy vegetables seasoned with herbs and baked golden.',
    price: 135,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    image: crushVeggiePizzaImg,
  },
  {
    id: 'sp-country-fresh',
    name: 'Country Fresh Pizza',
    category: 'special-pizza',
    description: 'Rustic toppings of crisp onion, green capsicum, juicy tomatoes and sweet golden corn.',
    price: 135,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    image: countryFreshPizzaImg,
  },
  {
    id: 'sp-farm-fresh',
    name: 'Farm Fresh Pizza',
    category: 'special-pizza',
    description: 'Farm garden medley of crisp vegetables loaded with mozzarella and herbs.',
    price: 135,
    sizes: LOADED_PIZZA_SIZES,
    hasCustomAddons: true,
    image: farmFreshPizzaImg,
  },

  // --- SPECIAL PIZZAS (Dark Spicy & Premium: S ₹175, M ₹335, L ₹465) ---
  {
    id: 'sp-dark-spicy',
    name: 'Dark Spicy Pizza',
    category: 'special-pizza',
    description: 'Fiery peri-peri spice blend, smoky red paprika, jalapeños, onions and spicy chili drizzle.',
    price: 175,
    isPopular: true,
    sizes: DARK_SPICY_PIZZA_SIZES,
    hasCustomAddons: true,
    tag: 'Spicy Lover',
    image: darkSpicyPizzaImg,
  },
  {
    id: 'sp-spicy-paneer',
    name: 'Spicy Paneer Pizza',
    category: 'special-pizza',
    description: 'Fiery spiced cottage cheese paneer chunks with hot paprika, onions and herbs.',
    price: 175,
    sizes: DARK_SPICY_PIZZA_SIZES,
    hasCustomAddons: true,
    image: paneerPizzaImg,
  },
  {
    id: 'sp-paneer-cheese',
    name: 'Paneer & Cheese Pizza',
    category: 'special-pizza',
    description: 'Rich creamy combination of soft paneer cubes blanketed in thick layers of mozzarella.',
    price: 175,
    sizes: DARK_SPICY_PIZZA_SIZES,
    hasCustomAddons: true,
    image: paneerCheeseOnlyImg,
  },
  {
    id: 'sp-pizza-extra-cheese',
    name: 'Pizza Extra Cheese',
    category: 'special-pizza',
    description: 'Triple cheese blend covering every bite with gooey, melty strings of goodness.',
    price: 175,
    sizes: DARK_SPICY_PIZZA_SIZES,
    hasCustomAddons: true,
    image: loadedCheesePizzaImg,
  },
  {
    id: 'sp-spicy-hot',
    name: 'Spicy Hot Pizza',
    category: 'special-pizza',
    description: 'Zesty green chillies, spicy herb sauce, crunchy capsicum, onion and red chili flakes.',
    price: 175,
    sizes: DARK_SPICY_PIZZA_SIZES,
    hasCustomAddons: true,
    image: spicyPizzaImg,
  },
  {
    id: 'sp-golden-corn',
    name: 'Golden Corn Pizza',
    category: 'special-pizza',
    description: 'Heaps of tender sweet corn combined with a rich cheese blend and Italian herbs.',
    price: 175,
    sizes: DARK_SPICY_PIZZA_SIZES,
    hasCustomAddons: true,
    image: cornPizzaImg,
  },
  {
    id: 'sp-special',
    name: "The Pizza Lover's Special",
    category: 'special-pizza',
    description: 'Our house signature pizza! Loaded paneer, sweet corn, capsicum, olives, onion and double cheese.',
    price: 175,
    isPopular: true,
    sizes: DARK_SPICY_PIZZA_SIZES,
    hasCustomAddons: true,
    tag: 'House Special',
    image: loversSpecialPizzaImg,
  },

  // --- BURGERS & SANDWICHES ---
  {
    id: 'bg-veg',
    name: 'Veg. Burger',
    category: 'burger-sandwich',
    description: 'Golden spiced potato veg patty, fresh cucumber, tomato, onion and tangy house burger mayo.',
    price: 29,
    isPopular: true,
    image: vegBurgerImg,
  },
  {
    id: 'bg-paneer',
    name: 'Paneer Burger',
    category: 'burger-sandwich',
    description: 'Crispy herb-crusted paneer slice topped with crunchy onions and mint mayo.',
    price: 39,
    image: paneerBurgerImg,
  },
  {
    id: 'bg-cheese',
    name: 'Cheese Burger',
    category: 'burger-sandwich',
    description: 'Crisp veg patty with a hot melted slice of processed cheese and creamy dressing.',
    price: 49,
    isPopular: true,
    image: cheeseBurgerImg,
  },
  {
    id: 'bg-french-cheese',
    name: 'French Cheese Burger',
    category: 'burger-sandwich',
    description: 'Gourmet styled burger stuffed with French cheese dressing, crunchy potato bites and herbs.',
    price: 55,
    image: frenchBurgerImg,
  },
  {
    id: 'sw-veg',
    name: 'Veg. Sandwich',
    category: 'burger-sandwich',
    description: 'Toasted white bread stuffed with seasoned veggies and fresh green chutney.',
    price: 29,
    image: vegSandwichNoCheeseImg,
  },
  {
    id: 'sw-paneer',
    name: 'Paneer Sandwich',
    category: 'burger-sandwich',
    description: 'Grilled sandwich loaded with spiced paneer stuffing, herbs and buttery toast.',
    price: 39,
    isPopular: true,
    image: paneerSandwichImg,
  },
  {
    id: 'sw-cheese',
    name: 'Cheese Sandwich',
    category: 'burger-sandwich',
    description: 'Gooey toasted cheese sandwich with Italian herb seasoning.',
    price: 49,
    image: cheeseSandwichImg,
  },

  // --- MAGGI, FRIES & SIDES ---
  {
    id: 'mg-veg',
    name: 'Veg. Maggi',
    category: 'maggi-fries-sides',
    description: 'Hot piping Maggi tossed with sautéed onions, tomatoes, green peas and special tastemaker.',
    price: 39,
    isPopular: true,
    image: vegMaggiImg,
  },
  {
    id: 'mg-veg-paneer',
    name: 'Veg. Paneer Maggi',
    category: 'maggi-fries-sides',
    description: 'Masala Maggi enriched with soft paneer cubes and fresh garden vegetables.',
    price: 49,
    image: paneerMaggiImg,
  },
  {
    id: 'sd-veg-momos',
    name: 'Veg. Momos',
    category: 'maggi-fries-sides',
    description: 'Steamed delicate dumplings packed with seasoned minced veggies, served with spicy red chutney.',
    price: 39,
    isPopular: true,
    image: vegMomosImg,
  },
  {
    id: 'sd-paneer-tikka',
    name: 'Paneer Tikka',
    category: 'maggi-fries-sides',
    description: 'Char-grilled cottage cheese cubes marinated in rich Indian spices, served with mint dip.',
    price: 49,
    image: paneerTikkaImg,
  },
  {
    id: 'fr-french-fries',
    name: 'French Fries',
    category: 'maggi-fries-sides',
    description: 'Crispy salted golden potato fries served with ketchup dip.',
    price: 39,
    isPopular: true,
    image: frenchFriesImg,
  },
  {
    id: 'fr-cheese-french-fries',
    name: 'Cheese French Fries',
    category: 'maggi-fries-sides',
    description: 'Crispy golden french fries smothered in warm, savory melted cheese sauce.',
    price: 49,
    image: cheeseFrenchFriesImg,
  },
  {
    id: 'sd-patties',
    name: 'Patties',
    category: 'maggi-fries-sides',
    description: 'Crispy flaky puff pastry filled with spiced potato masala.',
    price: 15,
    image: alooPattiesImg,
  },
  {
    id: 'sd-bowl-ice-cream',
    name: 'Bowl Ice Cream',
    category: 'maggi-fries-sides',
    description: 'Cool refreshing sweet scoop of creamy ice cream in a bowl.',
    price: 39,
    image: bowlIceCreamImg,
  },

  // --- PASTA & GARLIC BREADS ---
  {
    id: 'ot-cheese-garlic-bread',
    name: 'Cheese Garlic Bread',
    category: 'pasta-garlic-bread',
    description: 'Toasted buttery bread infused with garlic herbs and topped with bubbling mozzarella.',
    price: 80,
    isPopular: true,
    image: cheeseGarlicBreadImg,
  },
  {
    id: 'ot-stuffed-garlic-bread',
    name: 'Stuffed Garlic Bread',
    category: 'pasta-garlic-bread',
    description: 'Freshly baked bread stuffed with sweet corn, jalapeños and rich liquid cheese.',
    price: 100,
    isPopular: true,
    image: stuffedGarlicBreadImg,
  },
  {
    id: 'ot-chilli-stuffed-garlic-bread',
    name: 'Chilli Stuffed Garlic Bread',
    category: 'pasta-garlic-bread',
    description: 'Spicy chili garlic bread baked with cheese and fiery green chillies.',
    price: 120,
    image: chilliGarlicBreadImg,
  },
  {
    id: 'ot-zingy-parcel',
    name: 'Zingy Parcel',
    category: 'pasta-garlic-bread',
    description: 'Golden baked flaky parcel stuffed with spiced paneer filling and creamy mayo.',
    price: 60,
    image: zingyParcelImg,
  },
  {
    id: 'ot-white-pasta',
    name: 'White Pasta',
    category: 'pasta-garlic-bread',
    description: 'Classic creamy Alfredo white sauce penne pasta with sweet corn, capsicum and herbs.',
    price: 79,
    isPopular: true,
    image: whitePastaImg,
  },
  {
    id: 'ot-smoky-paneer-pasta',
    name: 'Smoky Paneer Pasta',
    category: 'pasta-garlic-bread',
    description: 'Spicy smoky red and pink sauce pasta tossed with tender paneer cubes and herbs.',
    price: 99,
    image: smokyPaneerPastaImg,
  },
  {
    id: 'ot-potato-bites',
    name: 'Potato Bites',
    category: 'pasta-garlic-bread',
    description: 'Crispy crunchy bite-sized potato poppers seasoned with chili garlic herbs.',
    price: 39,
    image: potatoBitesImg,
  },
  {
    id: 'ot-cheese-dip',
    name: 'Cheese Dip',
    category: 'pasta-garlic-bread',
    description: 'Warm, velvety cheese dip cup perfect for pizza crusts and garlic breads.',
    price: 20,
    image: nachoCheeseDipImg,
  },

  // --- DRINKS, COFFEE & TEA ---
  {
    id: 'dk-thums-up',
    name: 'Thums Up',
    category: 'drinks-beverages',
    description: 'Chilled refreshing fizzy cola taste with strong punch.',
    price: 20,
    image: thumsUpCanImg,
  },
  {
    id: 'dk-sprite',
    name: 'Sprite',
    category: 'drinks-beverages',
    description: 'Crisp lemon-lime refreshing cold drink.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'dk-dew',
    name: 'Mountain Dew',
    category: 'drinks-beverages',
    description: 'Electrifying citrus soda served icy cold.',
    price: 20,
    image: mountainDewBottleImg,
  },
  {
    id: 'dk-limca',
    name: 'Limca',
    category: 'drinks-beverages',
    description: 'Zesty sparkling lime drink to refresh your palate.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'dk-pepsi',
    name: 'Pepsi',
    category: 'drinks-beverages',
    description: 'Crisp sweet chilled cola served cold.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'dk-maaza',
    name: 'Maaza',
    category: 'drinks-beverages',
    description: 'Rich thick Alphonso mango fruit drink, sweet and delicious.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'cf-kulhad-chai',
    name: 'Kulhad Chai',
    category: 'drinks-beverages',
    description: 'Aromatic elaichi and ginger spiced milk tea served in an earthen clay kulhad cup.',
    price: 20,
    isPopular: true,
    tag: 'Desi Hit',
    image: kulhadChaiImg,
  },
  {
    id: 'cf-hot-coffee',
    name: 'Hot Coffee',
    category: 'drinks-beverages',
    description: 'Rich frothy café style hot coffee prepared with fresh milk.',
    price: 25,
    image: hotCoffeeImg,
  },
  {
    id: 'cf-cold-coffee',
    name: 'Cold Coffee',
    category: 'drinks-beverages',
    description: 'Chilled thick creamy chocolate drizzled blended cold coffee.',
    price: 49,
    isPopular: true,
    image: coldCoffeeImg,
  },
];
