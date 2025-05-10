
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });
  
  const onSubmit = (data: FormValues) => {
    // This would normally send the form data to a server
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out to us. We'll respond shortly.",
      duration: 3000,
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our products, need help with an order, or are interested in custom creations, our team is here to help.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-semibold mb-6 text-bakery-brown dark:text-bakery-cream">
              Send Us a Message
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-serif font-semibold mb-6 text-bakery-brown dark:text-bakery-cream">
              Our Information
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-2">Visit Our Bakery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Sweet Street<br />
                  Barshi, Maharashtra 413411<br />
                  India
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Opening Hours</h3>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Contact Details</h3>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <p>Phone: +91 123 456 7890</p>
                  <p>Email: info@cremecraft.com</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">B.P.Sulakhe Commerce College</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  B.P.Sulakhe Commerce College<br />
                  Barshi, Maharashtra 413411<br />
                  India
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  title="CrèmeCraft Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.4517642837327!2d75.6926343!3d17.6853355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc41056e486f039%3A0xe31971a50c32abf!2sB.P.Sulakhe%20Commerce%20College%2C%20Barshi!5e0!3m2!1sen!2sin!4v1599308787936!5m2!1sen!2sin" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
