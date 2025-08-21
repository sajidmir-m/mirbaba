import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';
import { Car, Phone, Menu, X, Sparkles, MapPin, Users, Clock } from 'lucide-react';
import { useState } from 'react';
import logoSvg from '@/assets/logo.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/', icon: Car },
    { name: 'Services', path: '/services', icon: Users },
    { name: 'Places', path: '/places', icon: MapPin },
    { name: 'Fleet', path: '/fleet', icon: Car },
    { name: 'Packages', path: '/packages', icon: Sparkles },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Booking', path: '/booking', icon: Clock },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-lg animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 animate-scale-in group">
            <div className="relative">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img src={logoSvg} alt="Mir BaBa Logo" className="h-12 w-12" />
              </div>
              <Sparkles className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mir BaBa
              </span>
              <span className="text-xs text-muted-foreground font-medium">Kashmir's Premium Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 story-link ${
                  isActiveRoute(item.path)
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
                {isActiveRoute(item.path) && (
                  <Badge variant="secondary" className="ml-1 h-5 text-xs">
                    •
                  </Badge>
                )}
              </Link>
            ))}
          </div>

          {/* Call to Action & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Call Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex items-center gap-2 hover-scale border-primary/20 text-primary hover:bg-primary/10" 
              asChild
            >
              <a href="tel:+916005107475">
                <Phone className="h-4 w-4 animate-pulse" />
                <span className="hidden md:inline">Call Now</span>
                <span className="md:hidden">Call</span>
              </a>
            </Button>

            {/* Book Now Button */}
            <Button 
              size="sm" 
              className="hidden sm:flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover-scale" 
              asChild
            >
              <Link to="/booking">
                Book Now
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <div className="space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActiveRoute(item.path)
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                  {isActiveRoute(item.path) && (
                    <Badge variant="secondary" className="ml-auto">
                      Active
                    </Badge>
                  )}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-center gap-2" 
                  asChild
                >
                  <a href="tel:+916005107475">
                    <Phone className="h-4 w-4" />
                    Call +91 6005107475
                  </a>
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" 
                  asChild
                >
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                    Book Your Ride Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;