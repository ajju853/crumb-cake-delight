
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Edit, Package } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ProfilePage: React.FC = () => {
  const { user, updateUser, logout, theme, toggleTheme, isAuthenticated } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatarSrc, setAvatarSrc] = useState('');
  const [confetti, setConfetti] = useState<{id: number, x: number, y: number, color: string}[]>([]);
  const [editField, setEditField] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  // Set initial values from user
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarSrc(user.avatar);
    }
  }, [user]);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  if (!user) return null;
  
  // Mock orders data
  const orders = [
    {
      id: 'ORD123456',
      date: '2023-05-01',
      status: 'delivered',
      total: 2500,
      items: [
        { name: 'Belgian Chocolate Truffle Cake', quantity: 1, price: 1500 },
        { name: 'Earl Grey Lavender Cupcakes', quantity: 2, price: 180 },
      ]
    },
    {
      id: 'ORD789012',
      date: '2023-04-15',
      status: 'delivered',
      total: 1800,
      items: [
        { name: 'Rose Pistachio Chiffon Cake', quantity: 1, price: 1800 },
      ]
    },
  ];
  
  const handleSaveProfile = () => {
    // Update user profile
    updateUser({
      ...user,
      name,
      email,
      avatar: avatarSrc
    });
    
    setIsEditing(false);
    
    // Create confetti effect for save animation
    const newConfetti = [];
    for (let i = 0; i < 30; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ['#FFC2D1', '#A67C52', '#FFF5E4', '#FF9FB2'][Math.floor(Math.random() * 4)]
      });
    }
    setConfetti(newConfetti);
    
    // Clear confetti after animation
    setTimeout(() => {
      setConfetti([]);
    }, 2000);
  };
  
  const handleAvatarClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleFieldClick = (field: string) => {
    if (isEditing) {
      setEditField(editField === field ? null : field);
      
      // Create sparkle effect
      const fieldElement = document.getElementById(`field-${field}`);
      if (fieldElement) {
        const rect = fieldElement.getBoundingClientRect();
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${rect.width / 2}px`;
        sparkle.style.top = `${rect.height / 2}px`;
        fieldElement.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, 1500);
      }
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const getOrderStatusClass = (status: string) => {
    switch(status) {
      case 'placed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'preparing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'out-for-delivery':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'delivered':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };
  
  const formattedCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 pb-8 border-b dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <motion.div 
              className="relative"
              whileHover={{ scale: isEditing ? 1.05 : 1 }}
            >
              <div 
                className={`w-32 h-32 rounded-full overflow-hidden border-4 border-bakery-cream dark:border-bakery-pink relative ${isEditing ? 'cursor-pointer' : ''}`}
                onClick={handleAvatarClick}
              >
                <img 
                  src={avatarSrc || '/placeholder.svg'} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Edit size={24} className="text-white" />
                  </div>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
            </motion.div>
            
            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-2 flex flex-col md:flex-row md:items-center gap-2">
                <motion.div layout className="relative" id="field-name">
                  {isEditing && editField === 'name' ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="text-2xl font-bold font-serif bg-transparent border-b border-bakery-brown dark:border-bakery-cream focus:outline-none"
                      autoFocus
                    />
                  ) : (
                    <h1 
                      className="text-2xl font-bold font-serif text-bakery-brown dark:text-bakery-cream"
                      onClick={() => handleFieldClick('name')}
                    >
                      {name}
                    </h1>
                  )}
                </motion.div>
                
                {!isEditing && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-2"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit size={14} className="mr-1" />
                    Edit Profile
                  </Button>
                )}
              </div>
              
              <motion.div layout className="relative mb-4" id="field-email">
                {isEditing && editField === 'email' ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-gray-600 dark:text-gray-300 bg-transparent border-b border-bakery-brown dark:border-bakery-cream focus:outline-none"
                    autoFocus
                  />
                ) : (
                  <p 
                    className="text-gray-600 dark:text-gray-300"
                    onClick={() => handleFieldClick('email')}
                  >
                    {email}
                  </p>
                )}
              </motion.div>
              
              {isEditing ? (
                <div className="flex gap-2 justify-center md:justify-start">
                  <Button 
                    variant="default" 
                    className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                    onClick={handleSaveProfile}
                  >
                    Save Changes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsEditing(false);
                      setName(user.name);
                      setEmail(user.email);
                      setAvatarSrc(user.avatar);
                      setEditField(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <User size={16} className="mr-1" />
                    Account since 2023
                  </span>
                  <span className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Package size={16} className="mr-1" />
                    {orders.length} orders
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {/* Confetti Animation */}
          <AnimatePresence>
            {confetti.map(item => (
              <motion.div
                key={item.id}
                className="fixed w-3 h-3 rounded-full pointer-events-none"
                initial={{ 
                  top: '50%',
                  left: '50%',
                  scale: 0,
                  opacity: 1 
                }}
                animate={{ 
                  top: `${item.y}%`,
                  left: `${item.x}%`,
                  scale: 1,
                  opacity: 0
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ backgroundColor: item.color }}
              />
            ))}
          </AnimatePresence>
        </div>
        
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="w-full flex mb-8">
            <TabsTrigger value="orders" className="flex-1">Orders</TabsTrigger>
            <TabsTrigger value="favorites" className="flex-1">Favorites</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-xl font-serif font-semibold mb-4">Your Orders</h2>
            
            {orders.length > 0 ? (
              <div className="space-y-6">
                {orders.map((order) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border dark:border-gray-800 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(order.date).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className={`text-xs px-2 py-1 rounded-full capitalize ${getOrderStatusClass(order.status)}`}>
                          {order.status.replace('-', ' ')}
                        </span>
                        <span className="font-serif font-medium">
                          {formattedCurrency(order.total)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-sm font-medium mb-2">Order Items</h3>
                      <ul className="space-y-2">
                        {order.items.map((item, index) => (
                          <li key={index} className="flex justify-between text-sm">
                            <span>{item.quantity}x {item.name}</span>
                            <span>{formattedCurrency(item.price * item.quantity)}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 pt-4 border-t dark:border-gray-800 flex justify-end">
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Your order history will appear here</p>
                <Button 
                  variant="default"
                  className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                  onClick={() => navigate('/products')}
                >
                  Browse Products
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="favorites" className="space-y-6">
            <h2 className="text-xl font-serif font-semibold mb-4">Your Favorites</h2>
            <div className="text-center py-8">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Items you favorite will appear here</p>
              <Button 
                variant="default"
                className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                onClick={() => navigate('/products')}
              >
                Browse Products
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-xl font-serif font-semibold mb-4">Account Settings</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Theme Preference</h3>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    className={`flex-1 ${theme === 'light' ? 'border-bakery-brown text-bakery-brown dark:border-bakery-pink dark:text-bakery-pink' : ''}`}
                    onClick={() => theme !== 'light' && toggleTheme()}
                  >
                    <span className="mr-2">☀️</span>
                    Sunny Daylight
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className={`flex-1 ${theme === 'dark' ? 'border-bakery-brown text-bakery-brown dark:border-bakery-pink dark:text-bakery-pink' : ''}`}
                    onClick={() => theme !== 'dark' && toggleTheme()}
                  >
                    <span className="mr-2">🌙</span>
                    Midnight Baking
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Order Updates</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Promotions & Offers</span>
                    <input type="checkbox" defaultChecked className="toggle" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>New Product Alerts</span>
                    <input type="checkbox" className="toggle" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Account Actions</h3>
                <div className="flex flex-col gap-3">
                  <Button variant="outline">Change Password</Button>
                  <Button 
                    variant="destructive"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
