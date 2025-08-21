
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Car, Clock, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';

// Import car images
import etiosImage from '../assets/etios.jpeg';
import swiftImage from '../assets/swift.jpeg';
import innovaImage from '../assets/innova.jpeg';
import ertigaImage from '../assets/ertiga.jpeg';

const Booking = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    passengers: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    specialRequests: ''
  });

  // Kashmir route pricing data with new pricing structure
  const routes = [
    { id: 'srinagar-pahalgam', name: 'Srinagar to Pahalgam', distance: '95 km', duration: '3 hrs', isAirport: false },
    { id: 'srinagar-gulmarg', name: 'Srinagar to Gulmarg', distance: '52 km', duration: '2 hrs', isAirport: false },
    { id: 'srinagar-sonamarg', name: 'Srinagar to Sonamarg', distance: '87 km', duration: '3 hrs', isAirport: false },
    { id: 'pahalgam-sonamarg', name: 'Pahalgam to Sonamarg', distance: '115 km', duration: '4 hrs', isAirport: false },
    { id: 'gulmarg-sonamarg', name: 'Gulmarg to Sonamarg', distance: '105 km', duration: '3.5 hrs', isAirport: false },
    { id: 'airport-hotel-srinagar', name: 'Airport to Hotel (Srinagar)', distance: '15 km', duration: '45 mins', isAirport: true },
    { id: 'airport-dal-lake', name: 'Airport to Dal Lake', distance: '18 km', duration: '50 mins', isAirport: true },
    { id: 'srinagar-kargil', name: 'Srinagar to Kargil', distance: '204 km', duration: '7 hrs', isAirport: false },
    { id: 'srinagar-leh', name: 'Srinagar to Leh', distance: '434 km', duration: '12 hrs', isAirport: false },
    { id: 'srinagar-gurez', name: 'Srinagar to Gurez', distance: '123 km', duration: '4 hrs', isAirport: false },
    { id: 'srinagar-kokernag', name: 'Srinagar to Kokernag', distance: '70 km', duration: '2.5 hrs', isAirport: false },
    { id: 'srinagar-achbal', name: 'Srinagar to Achbal', distance: '65 km', duration: '2 hrs', isAirport: false },
    { id: 'srinagar-daksum', name: 'Srinagar to Daksum', distance: '80 km', duration: '3 hrs', isAirport: false },
    { id: 'srinagar-sinthantop', name: 'Srinagar to Sinthan Top', distance: '130 km', duration: '4.5 hrs', isAirport: false },
  ];

  // Car options with new pricing structure
  const cars = [
    {
      id: 'etios',
      name: 'Toyota Etios',
      type: 'Sedan',
      seats: 4,
      features: ['AC', 'Power Steering', 'Music System'],
      priceRegular: 2200,
      priceAirport: 0,
      image: etiosImage // Updated Etios image
    },
    {
      id: 'dzire',
      name: 'Swift Dzire',
      type: 'Sedan',
      seats: 4,
      features: ['AC', 'Power Steering', 'Music System', 'Bluetooth'],
      priceRegular: 2200,
    
      image: swiftImage // Updated Dzire image
    },
    {
      id: 'innova',
      name: 'Innova Crysta',
      type: 'SUV',
      seats: 7,
      features: ['AC', 'Power Steering', 'Music System', 'Bluetooth', 'Premium Interior'],
      priceRegular: 2800,
    
      image: innovaImage // Updated Innova image
    },
    {
      id: 'ertiga',
      name: 'Maruti Ertiga',
      type: 'MPV',
      seats: 7,
      features: ['AC', 'Power Steering', 'Music System', 'Bluetooth', 'Spacious Interior'],
      priceRegular: 2500,
      
      image: ertigaImage // Added Ertiga image
    },
    {
      id: 'traveller',
      name: 'Tempo Traveller',
      type: 'MPV',
      seats: 7,
      features: ['AC', 'Power Steering', 'Music System', 'Bluetooth', 'Spacious Interior'],
      priceRegular: 5500,
    
      image: ertigaImage // Added Ertiga image
    },
  ];

  const getSelectedRoute = () => routes.find(route => route.id === selectedRoute);
  const getSelectedCar = () => cars.find(car => car.id === selectedCar);
  
  const calculatePrice = () => {
    const route = getSelectedRoute();
    const car = getSelectedCar();
    if (!route || !car) return 0;
    
    return route.isAirport ? car.priceAirport : car.priceRegular;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookNow = () => {
    const route = getSelectedRoute();
    const car = getSelectedCar();
    const price = calculatePrice();
    
    if (!route || !car || !formData.name || !formData.phone) {
      alert('Please fill in all required fields and select route and car');
      return;
    }

    // Create WhatsApp message
    const message = `*New Booking Request*
    
*Route:* ${route.name}
*Distance:* ${route.distance} (${route.duration})
*Car:* ${car.name} (${car.type})
*Price:* ₹${price}

*Customer Details:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Passengers:* ${formData.passengers || 'Not specified'}
*Pickup Date:* ${formData.pickupDate || 'Not specified'}
*Pickup Time:* ${formData.pickupTime || 'Not specified'}
*Return Date:* ${formData.returnDate || 'Not specified'}
*Special Requests:* ${formData.specialRequests || 'None'}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/916005107475?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Book Your Kashmir Journey with Mir BaBa
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the beauty of Kashmir with Mir BaBa premium services. Choose your route and vehicle for a comfortable journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Route Selection */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Select Your Route
                </CardTitle>
                <CardDescription>Choose your pickup and destination points</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {routes.map((route) => (
                    <div
                      key={route.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedRoute === route.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedRoute(route.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{route.name}</h3>
                          <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {route.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {route.duration}
                            </span>
                          </div>
                        </div>
                        <Badge variant={route.isAirport ? "default" : "secondary"}>
                          {route.isAirport ? "Airport" : "Regular"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Car Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Choose Your Vehicle
                </CardTitle>
                <CardDescription>Select from our premium fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {cars.map((car) => (
                    <div
                      key={car.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedCar === car.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedCar(car.id)}
                    >
                      <div className="flex gap-4">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{car.name}</h3>
                              <p className="text-sm text-muted-foreground">{car.type}</p>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                <Users className="h-3 w-3" />
                                {car.seats} seats
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className="mb-1">
                                {car.type}
                              </Badge>
                              <div className="text-xs text-muted-foreground">
                                <div>Regular: ₹{car.priceRegular}</div>
                                <div>Airport: ₹{car.priceAirport}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {car.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedRoute && (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">{getSelectedRoute()?.name}</p>
                    <p className="text-sm text-muted-foreground">{getSelectedRoute()?.distance} • {getSelectedRoute()?.duration}</p>
                  </div>
                )}
                {selectedCar && (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">{getSelectedCar()?.name}</p>
                    <p className="text-sm text-muted-foreground">{getSelectedCar()?.type} • {getSelectedCar()?.seats} seats</p>
                  </div>
                )}
                {selectedRoute && selectedCar && (
                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Fare:</span>
                      <span className="text-xl font-bold text-primary">₹{calculatePrice()}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Passenger Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    placeholder="Enter your phone number" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="passengers">Number of Passengers</Label>
                  <Select value={formData.passengers} onValueChange={(value) => handleInputChange('passengers', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select passengers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Passenger</SelectItem>
                      <SelectItem value="2">2 Passengers</SelectItem>
                      <SelectItem value="3">3 Passengers</SelectItem>
                      <SelectItem value="4">4 Passengers</SelectItem>
                      <SelectItem value="5">5 Passengers</SelectItem>
                      <SelectItem value="6">6 Passengers</SelectItem>
                      <SelectItem value="7">7 Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Pickup Date</Label>
                  <Input 
                    id="pickup-date" 
                    type="date" 
                    value={formData.pickupDate}
                    onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pickup-time">Pickup Time</Label>
                  <Input 
                    id="pickup-time" 
                    type="time" 
                    value={formData.pickupTime}
                    onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="return-date">Return Date (Optional)</Label>
                  <Input 
                    id="return-date" 
                    type="date" 
                    value={formData.returnDate}
                    onChange={(e) => handleInputChange('returnDate', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="aadhaar">Aadhaar Photo</Label>
                  <Input id="aadhaar" type="file" accept="image/*" />
                  <p className="text-xs text-muted-foreground">Please upload a clear photo of your Aadhaar card</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="special-requests">Special Requests</Label>
                  <Textarea 
                    id="special-requests" 
                    placeholder="Any special requirements or requests..." 
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  />
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg" 
                  disabled={!selectedRoute || !selectedCar || !formData.name || !formData.phone}
                  onClick={handleBookNow}
                >
                  Book Now - ₹{calculatePrice()}
                </Button>
                
                <div className="flex items-center justify-center">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us: +91 6005107475
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
