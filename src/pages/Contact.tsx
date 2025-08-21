import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Sparkles, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would be replaced with your actual email service implementation
      // For example, using EmailJS, Formspree, or a custom backend API
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Email would be sent to both email addresses
      console.log('Sending email to:', 'info@mirbabaservice.com, mirbabaservice@gmail.com');
      console.log('Form data:', formData);
      
      // Show success message
      setIsSuccess(true);
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible.",
        action: <ToastAction altText="Close">Close</ToastAction>,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-white/80 mb-8">
              Have questions about our services or need to make a booking? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg p-1 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input 
                      id="phone" 
                      placeholder="Your phone number" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Subject of your message" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out to us through any of the following channels. We're available to assist you with your travel needs in Kashmir.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-2">Call us directly for immediate assistance</p>
                      <a href="tel:+916005107475" className="text-primary font-medium hover:underline">+91 6005107475</a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground mb-2">Send us an email for bookings or inquiries</p>
                      <div className="space-y-1">
                        <a href="mailto:info@mirbabaservice.com" className="text-primary font-medium hover:underline block">info@mirbabaservice.com</a>
                        <a href="mailto:mirbabaservice@gmail.com" className="text-primary font-medium hover:underline block">mirbabaservice@gmail.com</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Address</h3>
                      <p className="text-muted-foreground mb-2">Our office location</p>
                      <p className="text-primary font-medium">Khanyar, Srinagar, Jammu and Kashmir, 190003</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-muted-foreground mb-2">We're available</p>
                      <p className="font-medium">24/7 - Always at your service</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Find Us</h2>
            <p className="text-muted-foreground mt-2">Our location in Srinagar, Kashmir</p>
          </div>
          
          <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26563.485284722!2d74.79396611425438!3d34.08887326815366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f7cfffffff%3A0x7a722e3d51418e32!2sKhanyar%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1695234567890!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mir BaBa Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;