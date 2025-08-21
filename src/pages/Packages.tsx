import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Star, Users, Clock, CheckCircle, MessageCircle, Sparkles, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Import destination images
import dallakeImg from '@/assets/dallake.jpeg';
import gulmargImg from '@/assets/Gulmarg.jpeg';
import pahalghamImg from '@/assets/pahalgham.jpeg';
import sonamargImg from '@/assets/sonamarg.jpeg';
import gurezImg from '@/assets/gurez.jpg';

const Packages = () => {
  const tourPackages = [
    {
      title: 'Srinagar City Tour',
      image: dallakeImg,
      duration: '1 Day',
      price: '₹3,500',
      description: 'Explore the beautiful city of Srinagar including Dal Lake, Mughal Gardens, and local markets.',
      highlights: [
        'Shikara ride on Dal Lake',
        'Visit to Nishat and Shalimar Gardens',
        'Shopping at local handicraft markets',
        'Lunch at authentic Kashmiri restaurant'
      ]
    },
    {
      title: 'Gulmarg Adventure',
      image: gulmargImg,
      duration: '2 Days',
      price: '₹7,500',
      description: 'Experience the beauty of Gulmarg with its meadows, gondola ride, and adventure activities.',
      highlights: [
        'Gondola ride to Apherwat Peak',
        'Skiing or snowboarding (seasonal)',
        'Horse riding in meadows',
        'Overnight stay in luxury hotel'
      ]
    },
    {
      title: 'Pahalgam Retreat',
      image: pahalghamImg,
      duration: '2 Days',
      price: '₹8,000',
      description: 'Relax in the serene valley of Pahalgam with its beautiful rivers and mountains.',
      highlights: [
        'Visit to Betaab Valley',
        'Lidder River rafting experience',
        'Aru Valley excursion',
        'Overnight stay in riverside resort'
      ]
    },
    {
      title: 'Sonamarg Glacier Tour',
      image: sonamargImg,
      duration: '1 Day',
      price: '₹4,500',
      description: 'Visit the meadow of gold and experience the majestic Thajiwas Glacier.',
      highlights: [
        'Thajiwas Glacier trek',
        'Horse riding in meadows',
        'Photography at Zero Point',
        'Picnic lunch with mountain views'
      ]
    },
    {
      title: 'Kashmir Complete Tour',
      image: gurezImg,
      duration: '5 Days',
      price: '₹25,000',
      description: 'Comprehensive tour covering all major attractions in Kashmir including Srinagar, Gulmarg, Pahalgam, and Sonamarg.',
      highlights: [
        'All major tourist destinations covered',
        'Luxury accommodations throughout',
        'Experienced guide and driver',
        'All meals and activities included'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Sparkles className="h-3 w-3 mr-1" />
              Curated Experiences
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kashmir Tour Packages</h1>
            <p className="text-lg text-white/80 mb-8">
              Discover the beauty of Kashmir with our carefully crafted tour packages.
              From day trips to comprehensive multi-day tours, we have something for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link to="/booking">Book a Package</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+916005107475">Call for Custom Package</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {pkg.duration}
                    </Badge>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Highlights:</h4>
                      <ul className="space-y-1">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-lg font-semibold">{pkg.price}</p>
                      </div>
                      <Button asChild>
                        <Link to="/booking">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Personalized Experience
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
            <p className="text-muted-foreground mb-8">
              We can create a personalized itinerary based on your preferences, duration, and budget.
              Contact us to discuss your dream Kashmir vacation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/contact">
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="tel:+916005107475">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 6005107475
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;