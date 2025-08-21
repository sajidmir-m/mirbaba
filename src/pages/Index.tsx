import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Star, Users, Clock, CheckCircle, MessageCircle, Sparkles, Heart, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import kashirHeroBg from '@/assets/kashmir-hero-bg.jpg';
import kashmirServicesBg from '@/assets/kashmir-services-bg.jpg';
import patternOverlay from '@/assets/pattern-overlay.jpg';

// Import all required images
import dallakeImg from '@/assets/dallake.jpeg';
import gulmargImg from '@/assets/Gulmarg.jpeg';
import pahalghamImg from '@/assets/pahalgham.jpeg';
import sonamargImg from '@/assets/sonamarg.jpeg';
import gurezImg from '@/assets/gurez.jpg';
import gurezVideo from '@/assets/gurez.mp4';
import kokernagImg from '@/assets/kokernag.jpeg';
import achbalImg from '@/assets/achbal.jpeg';
import daksumImg from '@/assets/daksum.jpg';
import sinthanTopImg from '@/assets/sinthan top.jpeg';
import outstationImg from '@/assets/outstation.jpeg';
import airportImg from '@/assets/airport.jpg';
import corporateImg from '@/assets/corporate.jpeg';
import dalLakeImg from '@/assets/dal-lake.jpg';

const Index = () => {
  const services = [
    {
      icon: Car,
      title: 'Local Rides',
      description: 'Comfortable city rides within Srinagar',
      image: kashirHeroBg
    },
    {
      icon: MapPin,
      title: 'Outstation Trips',
      description: 'Explore Kashmir valleys and tourist spots',
      image: outstationImg
    },
    {
      icon: Users,
      title: 'Airport Transfer',
      description: 'Safe pickup and drop services',
      image: airportImg
    },
    {
      icon: Clock,
      title: 'Corporate Service',
      description: 'Professional transportation for business',
      image: corporateImg
    }
  ];

  const destinations = [
    {
      name: 'Dal Lake',
      description: 'Famous houseboats and shikaras',
      distance: '10 km from city center',
      image: dallakeImg
    },
    {
      name: 'Gulmarg',
      description: 'Skiing and cable car rides',
      distance: '52 km from Srinagar',
      image: gulmargImg
    },
    {
      name: 'Pahalgam',
      description: 'Valley of shepherds',
      distance: '95 km from Srinagar',
      image: pahalghamImg
    },
    {
      name: 'Sonamarg',
      description: 'Meadow of gold',
      distance: '87 km from Srinagar',
      image: sonamargImg
    },
    {
      name: 'Gurez',
      description: 'Pristine valley with rich culture',
      distance: '123 km from Srinagar',
      image: gurezImg
    },
    {
      name: 'Kokernag',
      description: 'Famous for gardens and springs',
      distance: '70 km from Srinagar',
      image: kokernagImg
    },
    {
      name: 'Achbal',
      description: 'Beautiful Mughal garden',
      distance: '65 km from Srinagar',
      image: achbalImg
    },
    {
      name: 'Daksum',
      description: 'Serene valley with dense forests',
      distance: '80 km from Srinagar',
      image: daksumImg
    },
    {
      name: 'Sinthan Top',
      description: 'High altitude mountain pass',
      distance: '130 km from Srinagar',
      image: sinthanTopImg
    }
  ];

  const features = [
    'Professional Drivers',
    'Well-maintained Vehicles',
    '24/7 Customer Support',
    'Competitive Pricing',
    'GPS Tracking',
    'Safe & Reliable'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Video Background */}
      <section 
        className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute min-w-full min-h-full object-cover brightness-150 contrast-125"
          >
            <source src={gurezVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30 z-10"></div>
        </div>
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden z-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge className="w-fit bg-white/20 border-white/30 text-white hover:bg-white/30 animate-scale-in">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Premium Cab Service in Kashmir
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white animate-fade-in">
                  Explore Paradise with
                  <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse"> Mir BaBa</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg leading-relaxed animate-fade-in">
                  Experience the breathtaking beauty of Kashmir with our luxurious and reliable cab services. 
                  From pristine Dal Lake to majestic Gulmarg, we'll take you on an unforgettable journey through paradise with Mir BaBa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                <Button size="lg" className="text-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-2xl hover-scale" asChild>
                  <Link to="/booking" className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Book Your Ride
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg border-white/30 text-white hover:bg-white/20 backdrop-blur-sm hover-scale" asChild>
                  <a href="tel:+916005107475" onClick={(e) => { e.preventDefault(); window.location.href = 'https://wa.me/916005107475'; }} className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4 animate-fade-in">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white">5.0 Rating</span>
                </div>
                <div className="text-sm text-white/80">
                  <span className="font-semibold text-white">500+</span> Happy Customers
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="relative z-10 transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <img 
                  src={dalLakeImg} 
                  alt="Kashmir Valley"
                  className="rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm hover:shadow-purple-500/20"
                />
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 animate-scale-in hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-green-400 animate-pulse" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-white">24/7 Available</p>
                      <p className="text-xs text-white/70">Book anytime</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-md p-3 rounded-full border border-purple-300/30 animate-pulse shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div className="absolute top-20 -right-8 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-md p-3 rounded-lg border border-blue-300/30 animate-pulse shadow-lg hover:shadow-blue-500/40 transition-all duration-300">
                <span className="text-white text-xs font-medium flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Premium Service
                </span>
              </div>
              <div className="absolute bottom-20 -right-6 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-md p-3 rounded-lg border border-yellow-300/30 animate-pulse shadow-lg hover:shadow-yellow-500/40 transition-all duration-300">
                <span className="text-white text-xs font-medium flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Trusted Drivers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(239, 246, 255, 0.95)), url(${kashmirServicesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-3 w-3 mr-1" />
              Premium Services
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our range of luxury transportation services designed for your ultimate comfort and convenience in the paradise of Kashmir.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <CardTitle className="text-xl pt-4 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-muted-foreground">Premium Service</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9)), url(${patternOverlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              <MapPin className="h-3 w-3 mr-1" />
              Explore Kashmir
            </Badge>
            <h2 className="text-5xl font-bold mb-6 text-white">Popular Destinations</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover the most breathtaking places in Kashmir with our expert guided tours and premium transportation services through heaven on earth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((place, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <CardContent className="p-6 text-white">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors duration-300">{place.name}</h3>
                  <p className="text-sm text-white/80 mb-3 leading-relaxed">{place.description}</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <p className="text-xs text-blue-400 font-medium">{place.distance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Why Choose Mir BaBa?</h2>
                <p className="text-xl text-muted-foreground">
                  We provide premium transportation services with experienced drivers who know Kashmir like the back of their hand.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {feature === '24/7 Customer Support' ? (
                      <Clock className="h-5 w-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    )}
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button size="lg" asChild>
                <Link to="/booking">Start Your Journey</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1621198777376-d776c2eb3846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4aSUyMG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" 
                alt="Premium Mountain Taxi Service"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGthc2htaXIlMjBsYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" 
                alt="Kashmir Lake Taxi Service"
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25vdyUyMG1vdW50YWluJTIwdGF4aXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Winter Taxi Adventures"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2FzaG1pciUyMG1vdW50YWluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Kashmir Beauty"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                <Heart className="h-3 w-3 mr-1" />
                Start Your Journey
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">Ready to Explore Kashmir?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Book your luxury cab now and experience the unparalleled beauty of Kashmir with absolute comfort and safety. 
                Our experienced drivers are ready to take you on an unforgettable journey through paradise.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button size="lg" variant="secondary" className="text-lg bg-white text-gray-900 hover:bg-gray-100 shadow-2xl hover-scale" asChild>
                <Link to="/booking" className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Book Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white/30 text-white hover:bg-white/20 backdrop-blur-sm hover-scale" asChild>
                <a href="tel:+916005107475" onClick={(e) => { e.preventDefault(); window.location.href = 'https://wa.me/916005107475'; }} className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Car className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Mir BaBa</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for exploring the beautiful valleys of Kashmir.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block text-muted-foreground hover:text-primary">Home</Link>
                <Link to="/services" className="block text-muted-foreground hover:text-primary">Services</Link>
                <Link to="/places" className="block text-muted-foreground hover:text-primary">Places</Link>
                <Link to="/booking" className="block text-muted-foreground hover:text-primary">Booking</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Local Rides</p>
                <p>Outstation Trips</p>
                <p>Airport Transfer</p>
                <p>Corporate Service</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 6005107475
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  glaciercabways@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Khanyar, Srinagar, Jammu and Kashmir, 190003
                </p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mir BaBa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
