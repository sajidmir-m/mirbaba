import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Star, Users, Clock, CheckCircle, MessageCircle, Sparkles, Heart, Shield, Zap, Award } from 'lucide-react';
import Navigation from '@/components/Navigation';
import kashmirServicesBg from '@/assets/kashmir-services-bg.jpg';
// Using direct path for local.jpg
import localImg from '@/assets/local.jpg';
import outstationImg from '@/assets/outstation.jpeg';

import airportImg from '@/assets/airport.jpg';
import corporateImg from '@/assets/corporate.jpeg';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Local Rides',
      description: 'Comfortable city rides within Srinagar with professional drivers and well-maintained vehicles. Perfect for daily commutes, shopping trips, and city exploration.',
      features: ['Professional Driver', 'AC Vehicle', 'GPS Tracking', '24/7 Support'],
      image: localImg
    },
    {
      icon: MapPin,
      title: 'Outstation Trips',
      description: 'Explore Kashmir valleys and tourist spots with our experienced drivers who know every scenic route and hidden gem in the valley.',
      features: ['Scenic Routes', 'Expert Guide', 'Flexible Stops', 'Photo Opportunities'],
      image: outstationImg
    },
    {
      icon: Users,
      title: 'Airport Transfer',
      description: 'Safe and reliable pickup and drop services to and from Srinagar International Airport. We ensure you never miss your flight.',
      features: ['Flight Tracking', 'Meet & Greet', 'Luggage Assistance', 'Fixed Pricing'],
      image: airportImg
    },
    {
      icon: Clock,
      title: 'Corporate Service',
      description: 'Professional transportation for business travelers and corporate events. Maintain your professional image with our premium service.',
      features: ['Business Class', 'WiFi Available', 'Meeting Setup', 'Flexible Hours'],
      image: corporateImg
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All our vehicles are regularly maintained and drivers are thoroughly vetted for your safety.'
    },
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Get a ride within minutes with our efficient booking system and widespread driver network.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Experience luxury and comfort with our premium vehicles and professional service standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(88, 28, 135, 0.8), rgba(67, 56, 202, 0.9)), url(${kashmirServicesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Premium Transportation
            </Badge>
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
              Our Premium Services
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the beauty of Kashmir with Mir BaBa premium services. Choose your route and vehicle for a comfortable journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+916005107475">Call +91 6005107475</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              What We Offer
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our range of luxury transportation services designed for your ultimate comfort and convenience in the paradise of Kashmir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative">
                  <div className="absolute -top-6 left-4 bg-white p-3 rounded-full shadow-lg border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl pt-4 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Why Choose Mir BaBa?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide premium transportation services with experienced drivers who know Kashmir like the back of their hand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Explore Kashmir?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your ride now and experience the beauty of Kashmir with our premium transportation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/booking">Book Your Ride</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+916005107475">Call +91 6005107475</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
