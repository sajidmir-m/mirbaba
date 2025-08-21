import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Lock, User, Car, Calendar, MapPin, Users, Clock, CheckCircle, MessageCircle, Sparkles, LogIn } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock data for bookings
  const bookings = [
    {
      id: 'B001',
      customerName: 'Rahul Sharma',
      phone: '+91 9876543210',
      service: 'Airport Transfer',
      date: '2023-09-15',
      status: 'Completed',
      amount: '₹1,500'
    },
    {
      id: 'B002',
      customerName: 'Priya Patel',
      phone: '+91 8765432109',
      service: 'Gulmarg Day Trip',
      date: '2023-09-18',
      status: 'Confirmed',
      amount: '₹4,500'
    },
    {
      id: 'B003',
      customerName: 'Amit Kumar',
      phone: '+91 7654321098',
      service: 'Pahalgam 2-Day Package',
      date: '2023-09-20',
      status: 'Pending',
      amount: '₹8,000'
    },
    {
      id: 'B004',
      customerName: 'Neha Gupta',
      phone: '+91 6543210987',
      service: 'City Tour',
      date: '2023-09-22',
      status: 'Confirmed',
      amount: '₹2,500'
    },
    {
      id: 'B005',
      customerName: 'Vikram Singh',
      phone: '+91 5432109876',
      service: 'Airport Transfer',
      date: '2023-09-25',
      status: 'Pending',
      amount: '₹1,800'
    }
  ];

  // Mock data for vehicles
  const vehicles = [
    {
      id: 'V001',
      name: 'Toyota Etios',
      regNumber: 'JK01A 1234',
      driver: 'Farooq Ahmad',
      status: 'Available'
    },
    {
      id: 'V002',
      name: 'Maruti Swift',
      regNumber: 'JK01B 5678',
      driver: 'Imran Khan',
      status: 'On Trip'
    },
    {
      id: 'V003',
      name: 'Toyota Innova',
      regNumber: 'JK01C 9012',
      driver: 'Bashir Ahmed',
      status: 'Available'
    },
    {
      id: 'V004',
      name: 'Maruti Ertiga',
      regNumber: 'JK01D 3456',
      driver: 'Sajad Lone',
      status: 'Maintenance'
    }
  ];

  // Login form handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {!isLoggedIn ? (
        // Login Screen
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Admin Login</CardTitle>
                  <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="Enter your username" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button type="submit" className="w-full">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ) : (
        // Admin Dashboard
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">Manage bookings, vehicles, and more</p>
              </div>
              <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                Logout
              </Button>
            </div>
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Bookings</p>
                    <h3 className="text-3xl font-bold">128</h3>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Active Vehicles</p>
                    <h3 className="text-3xl font-bold">12</h3>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total Drivers</p>
                    <h3 className="text-3xl font-bold">15</h3>
                  </div>
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-amber-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Revenue (Monthly)</p>
                    <h3 className="text-3xl font-bold">₹2.4L</h3>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Dashboard Content */}
            <Tabs defaultValue="bookings">
              <TabsList className="mb-8">
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
                <TabsTrigger value="drivers">Drivers</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bookings" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Recent Bookings</h2>
                  <Button size="sm">
                    Add New Booking
                  </Button>
                </div>
                
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {bookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell className="font-medium">{booking.id}</TableCell>
                            <TableCell>
                              <div>
                                <p>{booking.customerName}</p>
                                <p className="text-xs text-muted-foreground">{booking.phone}</p>
                              </div>
                            </TableCell>
                            <TableCell>{booking.service}</TableCell>
                            <TableCell>{booking.date}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={booking.status === 'Completed' ? 'default' : 
                                        booking.status === 'Confirmed' ? 'outline' : 'secondary'}
                              >
                                {booking.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{booking.amount}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="vehicles" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Vehicle Fleet</h2>
                  <Button size="sm">
                    Add New Vehicle
                  </Button>
                </div>
                
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Vehicle</TableHead>
                          <TableHead>Reg. Number</TableHead>
                          <TableHead>Driver</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {vehicles.map((vehicle) => (
                          <TableRow key={vehicle.id}>
                            <TableCell className="font-medium">{vehicle.id}</TableCell>
                            <TableCell>{vehicle.name}</TableCell>
                            <TableCell>{vehicle.regNumber}</TableCell>
                            <TableCell>{vehicle.driver}</TableCell>
                            <TableCell>
                              <Badge 
                                variant={vehicle.status === 'Available' ? 'outline' : 
                                        vehicle.status === 'On Trip' ? 'default' : 'secondary'}
                              >
                                {vehicle.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">Edit</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="drivers">
                <Card>
                  <CardContent className="py-10 text-center">
                    <h3 className="text-xl font-medium mb-2">Drivers Management</h3>
                    <p className="text-muted-foreground mb-4">This section is under development</p>
                    <Button disabled>Coming Soon</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardContent className="py-10 text-center">
                    <h3 className="text-xl font-medium mb-2">System Settings</h3>
                    <p className="text-muted-foreground mb-4">This section is under development</p>
                    <Button disabled>Coming Soon</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      )}
    </div>
  );
};

export default Admin;