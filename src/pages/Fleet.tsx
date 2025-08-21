import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Car, Star, Users, Clock, CheckCircle, MessageCircle, Sparkles, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Import car images
import etiosImage from '../assets/etios.jpeg';
import swiftImage from '../assets/swift.jpeg';
import innovaImage from '../assets/innova.jpeg';
import ertigaImage from '../assets/ertiga.jpeg';

const Fleet = () => {
  const vehicles = [
    {
      name: 'Toyota Etios',
      image: etiosImage,
      description: 'Comfortable sedan for city travel',
      capacity: '4 passengers',
      features: ['Air Conditioning', 'Music System', 'Comfortable Seating', 'Luggage Space'],
      pricePerDay: '₹2,200',
      pricePerKm: '₹15'
    },
    {
      name: 'Maruti Swift',
      image: swiftImage,
      description: 'Compact and fuel efficient',
      capacity: '4 passengers',
      features: ['Air Conditioning', 'Music System', 'Fuel Efficient', 'Easy Maneuverability'],
      pricePerDay: '₹2,200',
      pricePerKm: '₹14'
    },
    {
      name: 'Toyota Innova',
      image: innovaImage,
      description: 'Spacious SUV for group travel',
      capacity: '7 passengers',
      features: ['Air Conditioning', 'Music System', 'Spacious Interior', 'Large Luggage Space'],
      pricePerDay: '₹3,000',
      pricePerKm: '₹18'
    },
    {
      name: 'Maruti Ertiga',
      image: ertigaImage,
      description: 'Comfortable MPV for family travel',
      capacity: '6 passengers',
      features: ['Air Conditioning', 'Music System', 'Comfortable Seating', 'Ample Space'],
      pricePerDay: '₹3,000',
      pricePerKm: '₹16'
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
              Premium Fleet
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vehicle Fleet</h1>
            <p className="text-lg text-white/80 mb-8">
              Choose from our range of well-maintained vehicles for your journey through Kashmir.
              All vehicles come with experienced drivers who know the region well.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link to="/booking">Book a Vehicle</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+916005107475">Call for Inquiry</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {vehicle.capacity}
                    </Badge>
                  </div>
                  <CardDescription>{vehicle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-lg font-semibold">{vehicle.pricePerDay} / day</p>
                        <p className="text-xs text-muted-foreground">{vehicle.pricePerKm} / km</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Ride?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us now to reserve your preferred vehicle for your Kashmir journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/booking">Book Online</Link>
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

export default Fleet;