
import { Product } from '../types';

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Vanilla Bean Layer Cake",
    description: "Three layers of moist vanilla bean cake with silky buttercream frosting, perfect for any occasion.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["vanilla", "buttercream", "classic", "birthday"],
    ingredients: ["flour", "sugar", "eggs", "butter", "vanilla beans", "milk", "baking powder"],
    occasion: "Birthday",
    rating: 4.8,
    reviews: 246,
    featured: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "2",
    name: "Belgian Chocolate Truffle Cake",
    description: "Decadent chocolate cake layers filled with chocolate ganache and covered in chocolate shavings.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1589&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["chocolate", "ganache", "truffle", "anniversary"],
    ingredients: ["dark chocolate", "flour", "sugar", "eggs", "butter", "cocoa powder", "heavy cream"],
    occasion: "Anniversary",
    rating: 4.9,
    reviews: 312,
    featured: true,
    bestseller: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "3",
    name: "Rose Pistachio Chiffon Cake",
    description: "Light and airy rose-flavored chiffon cake layered with pistachio buttercream and rose petals.",
    price: 1800,
    image: "https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=1470&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["rose", "pistachio", "chiffon", "elegant", "wedding"],
    ingredients: ["flour", "sugar", "egg whites", "rose water", "pistachios", "butter", "cream"],
    occasion: "Wedding",
    rating: 4.7,
    reviews: 98,
    featured: true,
    new: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "4",
    name: "Lemon Raspberry Cheesecake",
    description: "Tangy lemon cheesecake on a graham cracker crust topped with fresh raspberry compote.",
    price: 1350,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1470&auto=format&fit=crop",
    category: "Cheesecakes",
    tags: ["lemon", "raspberry", "cheesecake", "summer"],
    ingredients: ["cream cheese", "sugar", "eggs", "lemons", "raspberries", "graham crackers", "butter"],
    occasion: "Summer Party",
    rating: 4.6,
    reviews: 174,
    featured: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "5",
    name: "Earl Grey Lavender Cupcakes",
    description: "Delicate Earl Grey tea-infused cupcakes topped with lavender buttercream frosting.",
    price: 180,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1480&auto=format&fit=crop",
    category: "Cupcakes",
    tags: ["tea", "lavender", "earl grey", "cupcakes"],
    ingredients: ["flour", "sugar", "eggs", "butter", "earl grey tea leaves", "lavender buds", "milk"],
    occasion: "Tea Party",
    rating: 4.5,
    reviews: 86,
    featured: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "6",
    name: "Cardamom Rose Cookies",
    description: "Shortbread cookies infused with cardamom and rose water, topped with edible rose petals.",
    price: 75,
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a11a?q=80&w=1469&auto=format&fit=crop",
    category: "Cookies & Macarons",
    tags: ["cookies", "cardamom", "rose", "shortbread"],
    ingredients: ["flour", "butter", "sugar", "cardamom", "rose water", "rose petals"],
    rating: 4.4,
    reviews: 62,
    featured: false,
    new: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "7",
    name: "Vegan Chocolate Coconut Tart",
    description: "Rich chocolate ganache in a coconut crust, completely plant-based and utterly delicious.",
    price: 900,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1587&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["vegan", "chocolate", "coconut", "tart"],
    ingredients: ["coconut cream", "dark chocolate", "coconut oil", "cocoa powder", "maple syrup", "vanilla"],
    rating: 4.7,
    reviews: 53,
    featured: true,
    dietary: {
      eggless: true,
      glutenFree: true,
      vegan: true,
      sugarFree: false
    }
  },
  {
    id: "8",
    name: "Passionfruit Mango Layer Cake",
    description: "Tropical layers of mango cake with passionfruit curd filling and coconut buttercream.",
    price: 1600,
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1471&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["tropical", "mango", "passionfruit", "coconut", "summer"],
    ingredients: ["flour", "sugar", "eggs", "butter", "mango", "passionfruit", "coconut milk"],
    occasion: "Summer Party",
    rating: 4.8,
    reviews: 41,
    featured: false,
    new: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "9",
    name: "French Macaron Collection",
    description: "Assorted French macarons in flavors like pistachio, raspberry, chocolate, vanilla, and lemon.",
    price: 120,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1470&auto=format&fit=crop",
    category: "Cookies & Macarons",
    tags: ["macarons", "french", "assorted", "gift"],
    ingredients: ["almond flour", "egg whites", "sugar", "various flavorings"],
    rating: 4.9,
    reviews: 217,
    featured: true,
    bestseller: true,
    dietary: {
      eggless: false,
      glutenFree: true,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "10",
    name: "Matcha White Chocolate Cheesecake",
    description: "Creamy matcha green tea cheesecake with white chocolate chunks on a chocolate crust.",
    price: 1400,
    image: "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=1589&auto=format&fit=crop",
    category: "Cheesecakes",
    tags: ["matcha", "white chocolate", "cheesecake", "japanese"],
    ingredients: ["cream cheese", "sugar", "eggs", "matcha powder", "white chocolate", "chocolate cookie crust"],
    rating: 4.6,
    reviews: 88,
    featured: false,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "11",
    name: "Red Velvet Cupcakes",
    description: "Moist red velvet cupcakes topped with cream cheese frosting and red velvet crumbs.",
    price: 150,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1374&auto=format&fit=crop",
    category: "Cupcakes",
    tags: ["red velvet", "cream cheese", "cupcakes", "classic"],
    ingredients: ["flour", "sugar", "eggs", "butter", "cocoa powder", "red food coloring", "cream cheese"],
    rating: 4.7,
    reviews: 156,
    featured: false,
    bestseller: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "12",
    name: "Pistachio Rosewater Mini Cakes",
    description: "Individual pistachio cakes soaked in rosewater syrup and topped with crushed pistachios.",
    price: 220,
    image: "https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?q=80&w=1470&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["pistachio", "rosewater", "mini cakes", "middle eastern"],
    ingredients: ["pistachios", "flour", "sugar", "eggs", "butter", "rosewater", "honey"],
    rating: 4.5,
    reviews: 42,
    featured: false,
    new: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "13",
    name: "Mango Coconut Panna Cotta",
    description: "Silky smooth coconut panna cotta topped with fresh mango puree and diced mangoes.",
    price: 250,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1587&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["panna cotta", "mango", "coconut", "italian", "summer"],
    ingredients: ["coconut milk", "cream", "gelatin", "sugar", "mangoes", "vanilla"],
    occasion: "Summer Party",
    rating: 4.6,
    reviews: 38,
    featured: false,
    dietary: {
      eggless: true,
      glutenFree: true,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "14",
    name: "Mixed Berry Charlotte",
    description: "Ladyfinger-wrapped cake filled with vanilla bavarian cream and mixed berry compote.",
    price: 1700,
    image: "https://images.unsplash.com/photo-1576618148165-0884a2fa4624?q=80&w=1480&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["charlotte", "mixed berries", "bavarian cream", "french"],
    ingredients: ["ladyfingers", "strawberries", "blueberries", "raspberries", "cream", "gelatin", "sugar"],
    rating: 4.8,
    reviews: 29,
    featured: false,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "15",
    name: "Blackberry Lavender Cake",
    description: "Tender lavender-infused cake layers with blackberry compote filling and blackberry buttercream.",
    price: 1600,
    image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=1574&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["blackberry", "lavender", "spring", "floral"],
    ingredients: ["flour", "sugar", "eggs", "butter", "lavender buds", "blackberries", "cream"],
    occasion: "Spring Celebration",
    rating: 4.7,
    reviews: 32,
    featured: false,
    new: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "16",
    name: "Chocolate Hazelnut Entremet",
    description: "Multi-layered chocolate cake with praline crunch, hazelnut mousse, and mirror glaze.",
    price: 2000,
    image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=1587&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["entremet", "chocolate", "hazelnut", "mirror glaze", "french"],
    ingredients: ["dark chocolate", "hazelnuts", "cream", "eggs", "sugar", "butter", "gelatin"],
    rating: 4.9,
    reviews: 47,
    featured: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "17",
    name: "Vegan Strawberry Shortcake",
    description: "Plant-based vanilla sponge cake with coconut whipped cream and fresh strawberries.",
    price: 1400,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1465&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["vegan", "strawberry", "shortcake", "summer"],
    ingredients: ["flour", "coconut oil", "almond milk", "strawberries", "coconut cream", "vanilla"],
    occasion: "Summer Party",
    rating: 4.6,
    reviews: 28,
    featured: false,
    dietary: {
      eggless: true,
      glutenFree: false,
      vegan: true,
      sugarFree: false
    }
  },
  {
    id: "18",
    name: "Gluten-Free Lemon Blueberry Cake",
    description: "Zesty lemon cake made with gluten-free flour, filled with blueberry compote and lemon cream.",
    price: 1600,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1470&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["gluten-free", "lemon", "blueberry", "spring"],
    ingredients: ["gluten-free flour", "sugar", "eggs", "butter", "lemons", "blueberries", "cream"],
    occasion: "Spring Celebration",
    rating: 4.7,
    reviews: 36,
    featured: false,
    dietary: {
      eggless: false,
      glutenFree: true,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "19",
    name: "Salted Caramel Apple Tart",
    description: "Buttery tart shell filled with cinnamon-spiced apples and drizzled with salted caramel sauce.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1585828922344-85c9daa264b0?q=80&w=1564&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["apple", "caramel", "tart", "fall", "cinnamon"],
    ingredients: ["flour", "butter", "apples", "sugar", "cinnamon", "salt", "cream"],
    occasion: "Fall Celebration",
    rating: 4.8,
    reviews: 42,
    featured: false,
    seasonal: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "20",
    name: "French Chocolate Opera Cake",
    description: "Classic French dessert with layers of almond sponge, coffee buttercream, and chocolate ganache.",
    price: 1800,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1557&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["opera", "french", "chocolate", "coffee", "almond"],
    ingredients: ["almonds", "eggs", "sugar", "flour", "coffee", "dark chocolate", "butter"],
    rating: 4.9,
    reviews: 53,
    featured: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "21",
    name: "Lavender Honey Mini Cakes",
    description: "Delicate mini cakes infused with lavender and sweetened with honey, topped with dried lavender buds.",
    price: 200,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1587&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["lavender", "honey", "mini cakes", "floral"],
    ingredients: ["flour", "sugar", "eggs", "butter", "lavender", "honey", "cream"],
    rating: 4.6,
    reviews: 24,
    featured: false,
    new: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "22",
    name: "Triple Chocolate Mousse Cake",
    description: "Three layers of chocolate bliss: dark chocolate cake, milk chocolate mousse, and white chocolate ganache.",
    price: 1700,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1465&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["chocolate", "mousse", "triple", "decadent"],
    ingredients: ["dark chocolate", "milk chocolate", "white chocolate", "cream", "eggs", "sugar", "flour"],
    rating: 4.9,
    reviews: 67,
    featured: true,
    bestseller: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "23",
    name: "Birthday Confetti Cake",
    description: "Festive vanilla cake filled with rainbow sprinkles and topped with colorful vanilla buttercream.",
    price: 1300,
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=1470&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["birthday", "confetti", "sprinkles", "funfetti", "celebration"],
    ingredients: ["flour", "sugar", "eggs", "butter", "vanilla", "sprinkles", "milk"],
    occasion: "Birthday",
    rating: 4.7,
    reviews: 98,
    featured: false,
    bestseller: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "24",
    name: "Tiramisu Cake Roll",
    description: "Coffee-soaked sponge cake rolled with mascarpone filling and dusted with cocoa powder.",
    price: 1400,
    image: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=1632&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["tiramisu", "coffee", "italian", "mascarpone", "cake roll"],
    ingredients: ["eggs", "sugar", "flour", "mascarpone cheese", "coffee", "cocoa powder", "rum"],
    rating: 4.8,
    reviews: 59,
    featured: false,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "25",
    name: "Sugar-Free Berry Cheesecake",
    description: "Creamy cheesecake sweetened with stevia, topped with fresh mixed berries and a sugar-free glaze.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1465&auto=format&fit=crop",
    category: "Cheesecakes",
    tags: ["sugar-free", "berries", "cheesecake", "healthy", "diabetic-friendly"],
    ingredients: ["cream cheese", "stevia", "eggs", "almond flour", "strawberries", "blueberries", "raspberries"],
    rating: 4.5,
    reviews: 32,
    featured: false,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: true
    }
  },
  {
    id: "26",
    name: "Champagne Rose Cupcakes",
    description: "Delicate champagne-infused cupcakes with rose buttercream frosting and edible gold leaf.",
    price: 200,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1480&auto=format&fit=crop",
    category: "Cupcakes",
    tags: ["champagne", "rose", "cupcakes", "luxury", "celebration"],
    ingredients: ["flour", "sugar", "eggs", "butter", "champagne", "rose water", "gold leaf"],
    occasion: "Wedding",
    rating: 4.8,
    reviews: 41,
    featured: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "27",
    name: "Bourbon Pecan Pie Tart",
    description: "Buttery shortbread crust filled with bourbon-infused pecan filling and caramel drizzle.",
    price: 1300,
    image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1587&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["pecan", "bourbon", "tart", "southern", "fall"],
    ingredients: ["pecans", "flour", "butter", "eggs", "bourbon", "brown sugar", "corn syrup"],
    occasion: "Fall Celebration",
    rating: 4.7,
    reviews: 38,
    featured: false,
    seasonal: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "28",
    name: "Fig Honey Almond Tart",
    description: "Almond frangipane tart topped with fresh figs, honey drizzle, and toasted almonds.",
    price: 1400,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop",
    category: "Specialty Desserts",
    tags: ["fig", "honey", "almond", "tart", "fall"],
    ingredients: ["almonds", "flour", "butter", "eggs", "figs", "honey", "sugar"],
    occasion: "Fall Celebration",
    rating: 4.6,
    reviews: 29,
    featured: false,
    seasonal: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "29",
    name: "Earl Grey London Fog Cake",
    description: "Earl Grey-infused cake layers with vanilla bean buttercream and a hint of lavender.",
    price: 1600,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1587&auto=format&fit=crop",
    category: "Layer Cakes",
    tags: ["earl grey", "tea", "london fog", "lavender", "vanilla"],
    ingredients: ["flour", "sugar", "eggs", "butter", "earl grey tea", "vanilla beans", "lavender"],
    rating: 4.7,
    reviews: 36,
    featured: false,
    new: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  },
  {
    id: "30",
    name: "Basque Burnt Cheesecake",
    description: "Crustless cheesecake with a caramelized top and creamy interior, baked at high heat.",
    price: 1350,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1574&auto=format&fit=crop",
    category: "Cheesecakes",
    tags: ["basque", "burnt", "cheesecake", "spanish", "trending"],
    ingredients: ["cream cheese", "sugar", "eggs", "heavy cream", "vanilla"],
    rating: 4.8,
    reviews: 48,
    featured: true,
    bestseller: true,
    dietary: {
      eggless: false,
      glutenFree: false,
      vegan: false,
      sugarFree: false
    }
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// Helper function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Helper function to get products by multiple filters
export const getFilteredProducts = (
  categoryFilters: string[],
  occasionFilters: string[],
  dietaryFilters: string[],
  priceRange: [number, number],
  sortBy: string
) => {
  let filtered = [...products];
  
  // Filter by category
  if (categoryFilters.length > 0) {
    filtered = filtered.filter(product => categoryFilters.includes(product.category));
  }
  
  // Filter by occasion
  if (occasionFilters.length > 0) {
    filtered = filtered.filter(product => product.occasion && occasionFilters.includes(product.occasion));
  }
  
  // Filter by dietary restrictions
  if (dietaryFilters.length > 0) {
    filtered = filtered.filter(product => {
      if (!product.dietary) return false;
      
      return dietaryFilters.some(filter => {
        switch (filter) {
          case 'eggless':
            return product.dietary.eggless;
          case 'glutenFree':
            return product.dietary.glutenFree;
          case 'vegan':
            return product.dietary.vegan;
          case 'sugarFree':
            return product.dietary.sugarFree;
          default:
            return false;
        }
      });
    });
  }
  
  // Filter by price range
  filtered = filtered.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );
  
  // Sort products
  switch (sortBy) {
    case 'priceAsc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'priceDesc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'nameAsc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'nameDesc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'rating':
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    default:
      // Default sort by featured/bestseller
      filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        if (a.bestseller && !b.bestseller) return -1;
        if (!a.bestseller && b.bestseller) return 1;
        return 0;
      });
  }
  
  return filtered;
};
