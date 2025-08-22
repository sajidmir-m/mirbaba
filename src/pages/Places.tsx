import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Car, MapPin, Phone, Star, Users, Clock, CheckCircle, MessageCircle, Sparkles, Heart, Camera, Mountain, TreePine, Waves, Calendar, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import patternOverlay from '@/assets/pattern-overlay.jpg';
import dallakeImg from '@/assets/dallake.jpeg';
import wularlakeImg from '@/assets/wularlake.jpeg';
import manasbalImg from '@/assets/manasbal lkae.jpeg';
import gulmargImg from '@/assets/Gulmarg.jpeg';
import pahalghamImg from '@/assets/pahalgham.jpeg';
import sonamargImg from '@/assets/sonamarg.jpeg';
import gurezImg from '@/assets/gurez.jpg';
import gurezVideo from '@/assets/gurez.mp4';
import kokernagImg from '@/assets/kokernag.jpeg';
import achbalImg from '@/assets/achbal.jpeg';
import daksumImg from '@/assets/daksum.jpg';
import sinthanTopImg from '@/assets/sinthan top.jpeg';
import nishatImg from '@/assets/nishat.jpeg';
import shalimarImg from '@/assets/shalimar.jpeg';
const Places = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const destinations = [
    // Lakes
    {
      name: 'Dal Lake',
      description: 'Famous for its houseboats and shikaras, Dal Lake is the jewel of Srinagar. Experience the serene beauty of floating gardens and traditional Kashmiri hospitality.',
      distance: '10 km from city center',
      duration: '2-4 hours',
      bestTime: 'March to November',
      highlights: ['Houseboat Stay', 'Shikara Ride', 'Floating Gardens', 'Sunset Views'],
      image: '/src/assets/dallake.jpeg', // Dal Lake image
      category: 'Lake'
    },
    {
      name: 'Mansbal Lake',
      description: 'Known as the "supreme gem of all lakes", Mansbal Lake is famous for its crystal clear waters, lotus flowers, and bird watching opportunities.',
      distance: '32 km from Srinagar',
      duration: '3-4 hours',
      bestTime: 'April to October',
      highlights: ['Bird Watching', 'Lotus Blooms', 'Boating', 'Peaceful Ambiance'],
      image: '/src/assets/manasbal lkae.jpeg', // Updated lake image
      category: 'Lake'
    },
    {
      name: 'Wular Lake',
      description: 'One of Asia\'s largest freshwater lakes, Wular Lake offers stunning mountain views and is a paradise for bird watchers and nature enthusiasts.',
      distance: '60 km from Srinagar',
      duration: 'Full day',
      bestTime: 'May to September',
      highlights: ['Bird Sanctuary', 'Fishing', 'Boat Rides', 'Nature Photography'],
      image: '/src/assets/wular lake.jpeg', // Updated lake image
      category: 'Lake'
    },
    
    // Valleys
    {
      name: 'Pahalgam',
      description: 'The "Valley of Shepherds" is a picturesque town surrounded by pine forests and snow-capped mountains, perfect for trekking and nature walks.',
      distance: '95 km from Srinagar',
      duration: 'Full day',
      bestTime: 'April to October',
      highlights: ['Betaab Valley', 'Aru Valley', 'Trekking', 'River Rafting'],
      image: '/src/assets/pahalgham.jpeg', // Pahalgam image
      category: 'Valley'
    },
    {
      name: 'Gurez',
      description: 'A pristine valley with rich cultural heritage, Gurez offers untouched natural beauty, traditional villages, and stunning mountain landscapes.',
      distance: '123 km from Srinagar',
      duration: '2-3 days',
      bestTime: 'June to September',
      highlights: ['Habba Khatoon Peak', 'Dard-Shin Culture', 'Fishing', 'Trekking'],
      image: '/src/assets/gurez.jpg', // Updated valley image
      category: 'Valley'
    },
    {
      name: 'Sinthan Top',
      description: 'A high-altitude mountain pass connecting Kashmir Valley to Kishtwar, offering breathtaking panoramic views of snow-capped mountains.',
      distance: '130 km from Srinagar',
      duration: 'Full day',
      bestTime: 'May to October',
      highlights: ['Snow Activities', 'Panoramic Views', 'Photography', 'Adventure'],
      image: '/src/assets/sinthan top.jpeg', // Updated valley image
      category: 'Valley'
    },
    {
      name: 'Daksum',
      description: 'A serene valley with dense forests, meadows, and the beautiful Bringhi river flowing through it, perfect for nature lovers seeking tranquility.',
      distance: '80 km from Srinagar',
      duration: 'Full day',
      bestTime: 'April to October',
      highlights: ['Dense Forests', 'Fishing', 'Camping', 'Nature Walks'],
      image: '/src/assets/daksum.jpg', // Updated valley image
      category: 'Valley'
    },
    
    // Hill Stations
    {
      name: 'Gulmarg',
      description: 'Known as the "Meadow of Flowers", Gulmarg is a premier skiing destination with the world\'s highest cable car ride offering breathtaking views of snow-capped peaks.',
      distance: '52 km from Srinagar',
      duration: 'Full day',
      bestTime: 'December to March (Skiing), May to September (Flowers)',
      highlights: ['Gondola Ride', 'Skiing', 'Golf Course', 'Mountain Views'],
      image: '/src/assets/Gulmarg.jpeg', // Gulmarg image
      category: 'Hill Station'
    },
    {
      name: 'Sonamarg',
      description: 'The "Meadow of Gold" is a stunning valley surrounded by glaciers and snow-capped peaks, offering spectacular views and adventure activities.',
      distance: '87 km from Srinagar',
      duration: 'Full day',
      bestTime: 'May to September',
      highlights: ['Thajiwas Glacier', 'Mountain Trekking', 'Photography', 'Adventure Sports'],
      image: '/src/assets/sonamarg.jpeg', // Sonamarg image
      category: 'Hill Station'
    },
    {
      name: 'Drung',
      description: 'A hidden gem near Gulmarg with a beautiful waterfall, lush meadows, and stunning mountain views, perfect for a peaceful day trip.',
      distance: '60 km from Srinagar',
      duration: 'Full day',
      bestTime: 'April to October',
      highlights: ['Waterfall', 'Picnic Spot', 'Trekking', 'Photography'],
      image: '/src/assets/drung.jpeg', // Updated hill station image
      category: 'Hill Station'
    },
    
    // Gardens
    {
      name: 'Shalimar Bagh',
      description: 'A beautiful Mughal garden built by Emperor Jahangir, featuring terraced lawns, fountains, and stunning views of Dal Lake.',
      distance: '15 km from city center',
      duration: '2-3 hours',
      bestTime: 'March to October',
      highlights: ['Mughal Architecture', 'Garden Walks', 'Photography', 'Historical Site'],
      image: '/src/assets/shalimar.jpeg', // Updated garden image
      category: 'Garden'
    },
    {
      name: 'Nishat Bagh',
      description: 'The "Garden of Joy" is another magnificent Mughal garden with 12 terraces representing the 12 zodiac signs, offering panoramic views.',
      distance: '12 km from city center',
      duration: '2-3 hours',
      bestTime: 'March to October',
      highlights: ['Terraced Gardens', 'Mountain Views', 'Fountains', 'Cultural Heritage'],
      image: '/src/assets/nishat.jpeg', // Mughal Gardens image
      category: 'Garden'
    },
    {
      name: 'Kokernag',
      description: 'Famous for its gardens and natural springs, Kokernag is known for its trout fishing and the spring that resembles a cock\'s claw.',
      distance: '70 km from Srinagar',
      duration: 'Full day',
      bestTime: 'April to October',
      highlights: ['Trout Fishing', 'Natural Springs', 'Gardens', 'Picnic Spots'],
      image: '/src/assets/kokernag.jpeg', // Updated garden image
      category: 'Garden'
    },
    {
      name: 'Achbal',
      description: 'A beautiful Mughal garden built around a natural spring, featuring cascading terraces, chinar trees, and peaceful surroundings.',
      distance: '65 km from Srinagar',
      duration: 'Full day',
      bestTime: 'April to October',
      highlights: ['Mughal Architecture', 'Natural Springs', 'Peaceful Ambiance', 'Photography'],
      image: '/src/assets/achbal.jpeg', // Updated garden image
      category: 'Garden'
    },
    {
      name: 'Verinag',
      description: 'The source of the Jhelum River, Verinag features an octagonal stone basin surrounded by a beautiful Mughal garden with cascading waters.',
      distance: '80 km from Srinagar',
      duration: 'Full day',
      bestTime: 'April to October',
      highlights: ['Jhelum Source', 'Mughal Architecture', 'Natural Springs', 'Historical Site'],
      image: '/src/assets/verinag.jpg', // Updated garden image
      category: 'Garden'
    },
    {
      name: 'Tulip Garden',
      description: 'Asia\'s largest tulip garden, showcasing millions of tulips in various colors against the backdrop of Dal Lake and Zabarwan mountains.',
      distance: '8 km from city center',
      duration: '2-3 hours',
      bestTime: 'March to April',
      highlights: ['Tulip Blooms', 'Photography', 'Mountain Views', 'Seasonal Festival'],
      image: '/src/assets/tulip.jpeg', // Updated garden image
      category: 'Garden'
    }
  ];

  const categories = [
    { name: 'Lake', icon: Waves, color: 'from-blue-500 to-cyan-500' },
    { name: 'Valley', icon: TreePine, color: 'from-purple-500 to-pink-500' },
    { name: 'Hill Station', icon: Mountain, color: 'from-green-500 to-emerald-500' },
    { name: 'Garden', icon: Sparkles, color: 'from-yellow-500 to-orange-500' }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Lake': return Waves;
      case 'Hill Station': return Mountain;
      case 'Valley': return TreePine;
      case 'Garden': return Sparkles;
      case 'Meadow': return Mountain;
      default: return MapPin;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Lake': return 'from-blue-500 to-cyan-500';
      case 'Hill Station': return 'from-green-500 to-emerald-500';
      case 'Valley': return 'from-purple-500 to-pink-500';
      case 'Garden': return 'from-yellow-500 to-orange-500';
      case 'Meadow': return 'from-indigo-500 to-purple-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden bg-gradient-to-br from-green-900/90 via-blue-900/80 to-purple-900/90"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(20, 83, 45, 0.9), rgba(30, 58, 138, 0.8), rgba(88, 28, 135, 0.9)), url(${patternOverlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              <MapPin className="h-3 w-3 mr-1" />
              Explore Kashmir
            </Badge>
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
              Beautiful Places in Kashmir
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Discover the most breathtaking places in Kashmir with our expert guided tours and premium transportation services through heaven on earth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link to="/booking">Book Your Tour</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+916005107475">Call +91 6005107475</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Explore by Category</h2>
            <p className="text-muted-foreground">Choose your preferred type of destination</p>
          </div>
          
          <div className="flex justify-end mb-6">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" /> All
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryName = category.name.replace(/s$/, '');
              const count = destinations.filter(place => place.category === categoryName).length;
              const isSelected = selectedCategory === categoryName;
              
              return (
                <div 
                  key={index} 
                  className={`group cursor-pointer hover-scale animate-fade-in ${isSelected ? 'ring-2 ring-primary ring-offset-2 rounded-lg' : ''}`} 
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedCategory(categoryName)}
                >
                  <div className={`w-full h-40 bg-gradient-to-br ${category.color} rounded-lg flex flex-col items-center justify-center group-hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                    <category.icon className="h-12 w-12 text-white mb-2 relative z-10" />
                    <span className="text-white font-medium text-lg relative z-10">{category.name}</span>
                    <Badge className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white">
                      {count} places
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <MapPin className="h-3 w-3 mr-1" />
              Popular Destinations
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Must-Visit Places</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From serene lakes to majestic mountains, explore the most beautiful destinations that Kashmir has to offer.
            </p>
          </div>
          
          {/* Filter stats */}
          {selectedCategory && (
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="px-3 py-1">
                  <span className="font-semibold">{selectedCategory}</span>
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {destinations.filter(place => place.category === selectedCategory).length} places
                </Badge>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSelectedCategory(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear filter
              </Button>
            </div>
          )}

          {/* No results message */}
          {selectedCategory && destinations.filter(place => place.category === selectedCategory).length === 0 && (
            <div className="text-center py-16 bg-muted/30 rounded-lg">
              <div className="mb-4">
                <Filter className="h-12 w-12 text-muted-foreground mx-auto" />
              </div>
              <h3 className="text-xl font-medium mb-2">No destinations found</h3>
              <p className="text-muted-foreground">No places found in the {selectedCategory} category.</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setSelectedCategory(null)}
              >
                View all destinations
              </Button>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations
              .filter(place => selectedCategory === null || place.category === selectedCategory)
              .map((place, index) => {
                const CategoryIcon = getCategoryIcon(place.category);
                const categoryColor = getCategoryColor(place.category);
                
                return (
                <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${categoryColor} p-2 rounded-full`}>
                      <CategoryIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">{place.name}</h3>
                      <Badge variant="secondary" className="text-xs">{place.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{place.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-blue-500" />
                        <span className="text-blue-600 font-medium">{place.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-green-500" />
                        <span className="text-green-600 font-medium">{place.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-purple-500" />
                        <span className="text-purple-600 font-medium">Best: {place.bestTime}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Highlights:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {place.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      <Link to="/booking">Book Tour to {place.name}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Why Choose Mir BaBa for Tours?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide premium transportation services with experienced drivers who know Kashmir like the back of their hand.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover-scale animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Expert Guides</h3>
              <p className="text-muted-foreground leading-relaxed">Our drivers are local experts who know every hidden gem and the best routes to avoid crowds.</p>
            </div>
            <div className="text-center group hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Photo Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">We know the best spots for photography and will help you capture the perfect moments.</p>
            </div>
            <div className="text-center group hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Personalized Experience</h3>
              <p className="text-muted-foreground leading-relaxed">Customize your tour according to your interests and time constraints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Explore Kashmir?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your tour now and experience the breathtaking beauty of Kashmir with our premium transportation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/booking">Book Your Tour</Link>
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

export default Places;
