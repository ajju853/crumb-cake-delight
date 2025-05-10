
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [sprinkles, setSprinkles] = useState<{id: number, x: number, y: number, size: number, color: string}[]>([]);
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  // Create floating cake icons
  useEffect(() => {
    const icons = [];
    const iconTypes = ['🧁', '🍰', '🎂', '🍪'];
    
    for (let i = 0; i < 8; i++) {
      icons.push({
        id: i,
        icon: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.5 + 1,
        delay: Math.random() * 3
      });
    }
    
    return () => {};
  }, []);
  
  // Hide loader after animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);
  
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    
    try {
      const success = await login(data.email, data.password);
      
      if (success) {
        // Create sprinkles for button click animation
        const newSprinkles = [];
        for (let i = 0; i < 20; i++) {
          newSprinkles.push({
            id: i,
            x: 50 + (Math.random() * 60 - 30),
            y: 50 + (Math.random() * 40 - 20),
            size: Math.random() * 10 + 5,
            color: ['#FFC2D1', '#A67C52', '#FFF5E4', '#FF9FB2'][Math.floor(Math.random() * 4)]
          });
        }
        setSprinkles(newSprinkles);
        
        setLoginSuccess(true);
        
        // Redirect after success animation
        setTimeout(() => {
          navigate('/profile');
        }, 1500);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[400px] flex flex-col items-center justify-center p-4">
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 720 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="swirl-loader w-40 h-40 rounded-full animate-cream-swirl"></div>
          </motion.div>
        )}
        
        {!showLoader && !loginSuccess && (
          <motion.div 
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <h2 className="text-2xl font-bold font-serif text-center text-bakery-brown dark:text-bakery-cream mb-6">
              Welcome Back!
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                  
                  {sprinkles.map((sprinkle) => (
                    <motion.div
                      key={sprinkle.id}
                      className="absolute pointer-events-none rounded-full"
                      initial={{ 
                        left: `50%`,
                        top: `50%`,
                        width: 0,
                        height: 0,
                        opacity: 0 
                      }}
                      animate={{ 
                        left: `${sprinkle.x}%`,
                        top: `${sprinkle.y}%`,
                        width: `${sprinkle.size}px`,
                        height: `${sprinkle.size}px`,
                        opacity: [0, 1, 0],
                      }}
                      transition={{ 
                        duration: 1,
                        ease: "easeOut"
                      }}
                      style={{
                        backgroundColor: sprinkle.color,
                      }}
                    />
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-center text-gray-500 dark:text-gray-400"
                >
                  <p>Don't have an account? <a href="#" className="text-bakery-brown dark:text-bakery-pink hover:underline">Sign up</a></p>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        )}
        
        {loginSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-5xl mb-4"
            >
              ✨
            </motion.div>
            <h2 className="text-2xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-2">
              Welcome back!
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Redirecting you to your profile...
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginForm;
