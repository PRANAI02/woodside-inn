// Woodside Inn — Bengaluru. Content sourced from public listings (Jul 2026).
// Prices are representative gastropub pricing — verify against the current in-house menu.

export const INFO = {
  name: "Woodside Inn",
  city: "Bengaluru",
  tagline: "An ode to Bengaluru's pub culture",
  address:
    "35, 80 Feet Rd, HAL 3rd Stage, New Thippasandra, Indiranagar, Bengaluru, Karnataka 560075",
  addressShort: "New Thippasandra, Indiranagar",
  phoneDisplay: "+91 91487 29675",
  phoneRaw: "919148729675",
  hours: "12 Noon – 1 AM · Daily",
  costForTwo: "₹1,500 for two",
  rating: "4.6",
  ratingCount: "250+",
  mapsUrl:
    "https://www.google.com/maps/place/Woodside+Inn+-+Bengaluru/@12.9709991,77.6473365,17z/data=!4m6!3m5!1s0x3bae179a3db84c0b:0xb1117e8680eb4be4!8m2!3d12.971017!4d77.647467!16s%2Fg%2F11x_rzl090",
  mapEmbed:
    "https://maps.google.com/maps?q=Woodside%20Inn%20Bengaluru%20Indiranagar&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export type Dish = {
  key: string;
  name: string;
  note: string;
  img: string;
};

export const SIGNATURES: Dish[] = [
  {
    key: "From the grill",
    name: "Grilled Harissa Chicken Skewers",
    note: "Off the live grill, charred and basted in North-African harissa.",
    img: "/images/harissa-chicken.jpg",
  },
  {
    key: "House favourite",
    name: "Buttermilk Fried Chicken",
    note: "Brined, buttermilk-battered, fried to a glassy crunch, spiced mayo.",
    img: "/images/fried-chicken.jpg",
  },
  {
    key: "Charcoal grill",
    name: "Bacon-Wrapped Grilled Prawns",
    note: "Tiger prawns wrapped in bacon off the charcoal grill, citrus mayo.",
    img: "/images/prawns.jpg",
  },
  {
    key: "Comfort",
    name: "Double Cheddar Tenderloin Burger",
    note: "Twin patties, molten cheddar, on a toasted brioche bun.",
    img: "/images/burger.jpg",
  },
  {
    key: "From the sea",
    name: "Lemon Pepper Fried Sea Bass",
    note: "Crisp-fried fillet with a red jalapeño apple coulis.",
    img: "/images/seabass.jpg",
  },
  {
    key: "Sweet finish",
    name: "Flourless Belgian Chocolate Torte",
    note: "Dense, dark and molten at the centre.",
    img: "/images/torte.jpg",
  },
];

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  veg?: boolean;
};
export type MenuCategory = { title: string; kicker: string; items: MenuItem[] };

export const MENU: MenuCategory[] = [
  {
    title: "Off the Grill & Small Plates",
    kicker: "Light fare",
    items: [
      {
        name: "Prawn Ajillo",
        desc: "Fermented Bombay XO, warm potato bun · charcoal grill",
        price: "₹695",
      },
      {
        name: "Bacon-Wrapped Grilled Prawns",
        desc: "Citrus mayo · charcoal grill",
        price: "₹695",
      },
      {
        name: "Slow-Roasted Belgian Pork Belly Bites",
        desc: "Hoisin chilli garlic glaze, smacked cucumber",
        price: "₹695",
      },
      {
        name: "Lemon Pepper Fried Sea Bass",
        desc: "Red jalapeño apple coulis",
        price: "₹695",
      },
      {
        name: "Crispy Calamari Rings",
        desc: "Hot garlic dip, tartare sauce",
        price: "₹595",
      },
      {
        name: "Korean Tenderloin Bulgogi Brochettes",
        desc: "Sesame garlic aioli · charcoal grill",
        price: "₹695",
      },
    ],
  },
  {
    title: "Wood-Fired Pizza · Veg",
    kicker: '11" thin crust',
    items: [
      {
        name: "Truffle 4 Cheese",
        desc: "Cheddar, gouda, mozzarella, brie, truffle oil",
        price: "₹645",
        veg: true,
      },
      {
        name: "So Mush-Room Bianco",
        desc: "Assorted mushrooms, goat cheese, caramelised onions",
        price: "₹545",
        veg: true,
      },
      {
        name: "Margherita",
        desc: "Roasted tomatoes, arugula, garlic crumble",
        price: "₹545",
        veg: true,
      },
      {
        name: "Primavera",
        desc: "Tomatoes, peppers, mushrooms, olives, broccoli",
        price: "₹595",
        veg: true,
      },
      {
        name: "Southwest Sunset",
        desc: "Green peppers, charred corn, pickled pineapple",
        price: "₹595",
        veg: true,
      },
    ],
  },
  {
    title: "Wood-Fired Pizza · Non-Veg",
    kicker: '11" thin crust',
    items: [
      {
        name: "Pepperoni Delight",
        desc: "Italian pork pepperoni, basil",
        price: "₹695",
      },
      {
        name: "Bacon Brie Melt",
        desc: "Smoky bacon, brie, maple chilli oil",
        price: "₹695",
      },
      {
        name: "Pesto Grilled Chicken",
        desc: "Basil pesto, roasted tomatoes, olive tapenade",
        price: "₹645",
      },
      {
        name: "Lamb-a-licious",
        desc: "Lamb bolognese, kalamata olives, feta",
        price: "₹645",
      },
      {
        name: "Goan Odyssey",
        desc: "Chouriço ragu, caramelised onions, ricotta",
        price: "₹595",
      },
    ],
  },
];

export type Pour = { name: string; price: string; desc?: string };
export const BREWS = [
  "Toit",
  "Geist",
  "Red Rhino",
  "Mannheim",
  "Kingfisher",
  "Heineken",
];
// Real signature cocktails (each contains 60ml spirit).
export const COCKTAILS: Pour[] = [
  {
    name: "Tokyo Twist",
    desc: "Suntory Toki & Oaksmith whisky, Granny Smith, yuzu, fizz",
    price: "₹1,225",
  },
  {
    name: "Coconut Lemongrass Margarita",
    desc: "Jose Cuervo silver tequila, lemongrass, coconut, citrus",
    price: "₹995",
  },
  {
    name: "Beat the Heat",
    desc: "Bombay Sapphire & Langley's gin, mandarin, basil-grapefruit tonic",
    price: "₹945",
  },
  {
    name: "Mahura Sour",
    desc: "Six Brothers Mahua, citrus, bitters",
    price: "₹895",
  },
  {
    name: "Green Apple & Plum Martini",
    desc: "Belenkaya gold vodka, plum, Granny Smith, citrus",
    price: "₹725",
  },
  {
    name: "Tangerine Lemon Drop",
    desc: "Langley's gin, triple sec, limoncello, mandarin",
    price: "₹695",
  },
  {
    name: "Fresh Grape & Mandarin Twist",
    desc: "Langley's gin, mandarin orange, grape juice",
    price: "₹625",
  },
  {
    name: "Watermelon Kaffir Lime Fizz",
    desc: "Cuban rum, kaffir lime, sea salt, watermelon, fizz",
    price: "₹595",
  },
  {
    name: "Fruit Punch",
    desc: "Belenkaya vodka, assorted fruits, citrus, clarified vanilla ice cream",
    price: "₹545",
  },
];

export type Review = { text: string; who: string };
// Real Google reviews from the Indiranagar outlet (verbatim, trimmed for length). All 5★.
export const REVIEWS: Review[] = [
  {
    text: "This beloved Mumbai restaurant has finally made its way to Bangalore, and it absolutely lives up to the hype! We went all out — the onion rings, shroom toast, twice-whipped ricotta, truffle Parmesan fries, chicken wings and harissa skewers were all outstanding. Not one miss.",
    who: "K Ash · Local Guide",
  },
  {
    text: "One of those meals where you just keep grinning at your friend like an idiot because everything is so good. Their espresso martini could wake up the dead and then make them dance, and those bacon-wrapped prawns — I'm still thinking about them.",
    who: "Manu Madhavankutty · Local Guide",
  },
  {
    text: "What a treat! The Brie and bacon pizza from their wood-fire oven was EPIC, and their in-house chilli oils are chef's kiss. The tenderloin, bacon-wrapped prawns, potato skins and sea bass were all yummm. Amazing vibe.",
    who: "M Deshprabhu · Local Guide",
  },
  {
    text: "Their 4-course set menu at just ₹999 is perfect if you want to try a little of everything. The twice-whipped ricotta with sourdough crostini was my absolute favourite, and the matcha tres leches was so unique. This deal was too good!!",
    who: "Supritha Venkatesh · Local Guide",
  },
  {
    text: "The neighbourhood pub everyone craves for — food that's comforting and hearty but at the same time elevated. A select range of the best beer from all of Blore's breweries, Geist and Toit on tap. Great rock music, excellent tipples and food that has everyone beaming.",
    who: "Palki Hatangadi · Local Guide",
  },
  {
    text: "The food was really good and the beers were excellent. Their happy hours are an absolute steal deal. A great spot for good food, drinks and catching up with friends — especially during happy hours.",
    who: "K P · Local Guide",
  },
];

export const ORDER_LINKS = [
  {
    name: "Swiggy",
    desc: "Delivery across Indiranagar & HAL",
    href: "https://www.swiggy.com/city/bangalore/woodside-inn-hal-3rd-stage-indiranagar-rest1329459",
  },
  {
    name: "Zomato",
    desc: "Delivery, menu & photos",
    href: "https://www.zomato.com/bangalore/woodside-inn-thippasandra-bangalore",
  },
  {
    name: "District",
    desc: "Book a table online",
    href: "https://www.district.in/dining/bangalore/woodside-inn-thippasandra-bangalore",
  },
];

export const GALLERY = [
  "/images/spread.jpg",
  "/images/hero-bar.png",
  "/images/harissa-chicken.jpg",
  "/images/prawns.jpg",
  "/images/interior.jpg",
  "/images/fried-chicken.jpg",
  "/images/cocktail.jpg",
  "/images/prawns2.jpg",
  "/images/beer-taps.jpg",
  "/images/pizza.jpg",
  "/images/steak-frites.jpg",
  "/images/beer-glasses.jpg",
];
