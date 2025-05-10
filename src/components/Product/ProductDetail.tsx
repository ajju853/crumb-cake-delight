import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { useApp } from '@/contexts/AppContext';
import NotFound from '@/pages/NotFound';

interface ProductDetailProps {
  specialEdition?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ specialEdition = false }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Handle special edition cakes
  if (specialEdition) {
    const specialId = id?.replace('special-edition-', '');
    const index = specialId ? parseInt(specialId) - 31 : 0; // Adjust for the starting index
    
    const specialCakeImages = [
      {
        src: 'lovable-uploads/88f3bcba-7a32-4f54-8005-8d9a63995748.png',
        title: 'Chocolate Floral Cake',
        description: 'Decadent chocolate cake with elegant floral decorations, perfect for special occasions.'
      },
      {
        src: 'lovable-uploads/31b25d0c-c5f5-46d1-ba6e-067461b1d913.png',
        title: 'White Floral Wedding Cake',
        description: 'Elegant white wedding cake adorned with fresh flowers, ideal for the most memorable day.'
      },
      {
        src: 'lovable-uploads/b34cc02f-6b46-4298-8be2-bf6508e76af4.png',
        title: 'Fruit-topped White Cake',
        description: 'Light white cake topped with a generous assortment of seasonal fresh fruits and light dusting.'
      },
      {
        src: 'lovable-uploads/c02d5a00-65e8-4ba3-8fec-29ace6028ec3.png',
        title: 'Pink Drip Cake',
        description: 'Delicate pink drip cake decorated with macarons, fresh flowers, and berries.'
      },
      {
        src: 'lovable-uploads/2b974fd9-c3e4-4e32-9d5a-a7924193f2ea.png',
        title: 'White Buttercream Floral Cake',
        description: 'Textured white buttercream cake with fresh roses and greenery, perfect for weddings.'
      },
      {
        src: 'lovable-uploads/86e2323c-241c-4657-ac5e-1a03951df4b4.png',
        title: 'Dark Chocolate Sprinkles Cake',
        description: 'Rich dark chocolate cake covered in chocolate sprinkles and festive decorations.'
      },
      {
        src: 'lovable-uploads/74955790-1e06-4800-bacd-3f87e12be169.png',
        title: 'Pink Double Drip Cake',
        description: 'Stunning pink cake with dual white and dark chocolate drips, topped with fresh fruits and flowers.'
      },
      {
        src: 'lovable-uploads/2d713df2-ee47-433d-a79d-a4f60e3d7e9e.png',
        title: 'Painted Floral Cake',
        description: 'Hand-painted floral design on white fondant with gold accents and a fresh flower topper.'
      },
      {
        src: 'lovable-uploads/72260158-ef63-4842-9f73-7a941b6b7a03.png',
        title: 'Gold Leaf Floral Cake',
        description: 'White buttercream cake with gold leaf accents and a fresh flower arrangement topper.'
      },
      {
        src: 'lovable-uploads/4d524a73-5ea6-49cb-8066-931e50a11869.png',
        title: 'Red Berry Cake',
        description: 'Vibrant red glaze cake topped with fresh berries, flowers, and eucalyptus leaves.'
      },
      {
        src: 'lovable-uploads/f57c3e87-89a4-4398-b5af-5573354c3089.png',
        title: 'Blue Nautical Cake',
        description: 'Blue textured buttercream cake with a sailing ship topper, perfect for maritime celebrations.'
      }
    ];
    
    if (index >= 0 && index < specialCakeImages.length) {
      const cake = specialCakeImages[index];
      
      const handleAddToCart = () => {
        addToCart({
          id: `special-${index + 31}`,
          name: cake.title,
          price: 2500,
          image: cake.src,
          quantity: quantity
        });
      };
      
      return (
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-lg"
            >
              <img 
                src={cake.src} 
                alt={cake.title} 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary" className="bg-purple-500 text-white">Special Edition</Badge>
                  <Badge variant="outline">Custom Cake</Badge>
                </div>
                
                <h1 className="text-3xl font-bold font-serif text-bakery-brown dark:text-bakery-cream">{cake.title}</h1>
                
                <div className="flex items-center mt-2">
                  <div className="flex items-center text-amber-500">
                    <span className="text-lg font-medium">4.9</span>
                    <span className="ml-1">★</span>
                    <span className="ml-1 text-gray-600 dark:text-gray-400">(Limited Edition)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">{cake.description}</p>
              
              <div className="text-3xl font-serif font-semibold text-bakery-brown dark:text-bakery-pink">
                ₹2,500
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 dark:text-gray-300">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <Button 
                variant="default" 
                size="lg"
                className="w-full bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              
              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-md text-amber-800 dark:text-amber-200">
                <h4 className="font-medium mb-2">Special Edition Note</h4>
                <p className="text-sm">This cake is part of our limited edition collection. Please allow 48 hours for preparation. For custom modifications, please contact us directly.</p>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full flex">
                <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                <TabsTrigger value="customization" className="flex-1">Customization</TabsTrigger>
                <TabsTrigger value="delivery" className="flex-1">Delivery</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="p-6 bg-white dark:bg-gray-900 rounded-lg mt-4">
                <h3 className="text-xl font-serif mb-4">Product Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Size Options</h4>
                    <p className="text-gray-600 dark:text-gray-300">Available in 6", 8", and 10" sizes</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Perfect For</h4>
                    <p className="text-gray-600 dark:text-gray-300">Weddings, Anniversaries, Special Events</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Allergen Information</h4>
                    <p className="text-gray-600 dark:text-gray-300">Contains dairy, eggs, wheat, and nuts. Please contact us for allergen-free options.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="customization" className="p-6 bg-white dark:bg-gray-900 rounded-lg mt-4">
                <h3 className="text-xl font-serif mb-4">Customization Options</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Our special edition cakes can be customized to suit your preferences and occasion.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Custom cake toppers</li>
                  <li>Personalized messages</li>
                  <li>Flavor variations</li>
                  <li>Color adjustments</li>
                  <li>Dietary modifications (upon request)</li>
                </ul>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  For custom requests, please contact our cake design team at least 7 days before your event.
                </p>
              </TabsContent>
              
              <TabsContent value="delivery" className="p-6 bg-white dark:bg-gray-900 rounded-lg mt-4">
                <h3 className="text-xl font-serif mb-4">Delivery Information</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  We take extra care when delivering our special edition cakes to ensure they arrive in perfect condition.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Delivery Areas</h4>
                    <p className="text-gray-600 dark:text-gray-300">Available within 30km of our bakery location</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Timing</h4>
                    <p className="text-gray-600 dark:text-gray-300">Delivery slots available from 9am to 7pm</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Special Handling</h4>
                    <p className="text-gray-600 dark:text-gray-300">Temperature-controlled delivery vehicles ensure your cake arrives in perfect condition</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      );
    }
    
    return <NotFound />;
  }
  
  // Original code for regular product details
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <NotFound />;
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  };
  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);
  
  // Mock additional images for the product
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1536&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1589&auto=format&fit=crop"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg"
          >
            <img 
              src={productImages[activeImage]} 
              alt={product.name} 
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
          
          <div className="flex space-x-4">
            {productImages.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                  activeImage === index ? 'border-bakery-dark-pink' : 'border-transparent'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {product.new && (
                <Badge variant="secondary" className="bg-emerald-500 text-white">New</Badge>
              )}
              {product.bestseller && (
                <Badge variant="secondary" className="bg-amber-500 text-white">Bestseller</Badge>
              )}
              <Badge variant="outline">{product.category}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold font-serif text-bakery-brown dark:text-bakery-cream">{product.name}</h1>
            
            <div className="flex items-center mt-2">
              {product.rating && (
                <div className="flex items-center text-amber-500">
                  <span className="text-lg font-medium">{product.rating}</span>
                  <span className="ml-1">★</span>
                  <span className="ml-1 text-gray-600 dark:text-gray-400">({product.reviews} reviews)</span>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          
          <div className="text-3xl font-serif font-semibold text-bakery-brown dark:text-bakery-pink">
            {formattedPrice}
          </div>
          
          {/* Dietary Information */}
          {product.dietary && (
            <div className="flex flex-wrap gap-2">
              {product.dietary.eggless && (
                <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900">Eggless</Badge>
              )}
              {product.dietary.glutenFree && (
                <Badge variant="outline" className="bg-green-50 dark:bg-green-900">Gluten-Free</Badge>
              )}
              {product.dietary.vegan && (
                <Badge variant="outline" className="bg-purple-50 dark:bg-purple-900">Vegan</Badge>
              )}
              {product.dietary.sugarFree && (
                <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-900">Sugar-Free</Badge>
              )}
            </div>
          )}
          
          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-300">Quantity:</span>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-10 text-center">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(q => q + 1)}
              >
                +
              </Button>
            </div>
          </div>
          
          <Button 
            variant="default" 
            size="lg"
            className="w-full bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="ingredients" className="w-full">
          <TabsList className="w-full flex">
            <TabsTrigger value="ingredients" className="flex-1">Ingredients</TabsTrigger>
            <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ingredients" className="p-6 bg-white dark:bg-gray-900 rounded-lg mt-4">
            <h3 className="text-xl font-serif mb-4">Ingredients</h3>
            {product.ingredients ? (
              <ul className="list-disc pl-5 space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 capitalize">
                    {ingredient}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Ingredients information not available.</p>
            )}
          </TabsContent>
          
          <TabsContent value="details" className="p-6 bg-white dark:bg-gray-900 rounded-lg mt-4">
            <h3 className="text-xl font-serif mb-4">Product Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Category</h4>
                <p className="text-gray-600 dark:text-gray-300">{product.category}</p>
              </div>
              {product.occasion && (
                <div>
                  <h4 className="font-medium">Perfect For</h4>
                  <p className="text-gray-600 dark:text-gray-300">{product.occasion}</p>
                </div>
              )}
              <div>
                <h4 className="font-medium">Tags</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {product.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="capitalize">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="p-6 bg-white dark:bg-gray-900 rounded-lg mt-4">
            <h3 className="text-xl font-serif mb-4">Customer Reviews</h3>
            {/* Mock reviews */}
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-bakery-cream flex items-center justify-center text-bakery-brown">
                      A
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Anita S.</p>
                      <div className="flex text-amber-500 text-sm">★★★★★</div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 weeks ago</span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  This {product.name.toLowerCase()} exceeded my expectations! So moist and flavorful. 
                  Will definitely order again for special occasions.
                </p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-bakery-cream flex items-center justify-center text-bakery-brown">
                      R
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Rahul K.</p>
                      <div className="flex text-amber-500 text-sm">★★★★<span className="text-gray-300">★</span></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1 month ago</span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Delicious flavors and beautiful presentation. I removed one star because delivery was slightly delayed, 
                  but the cake itself was perfect.
                </p>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Read All Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
