
import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ChatWidget } from '@/components/ChatWidget';
import { ContactForm } from '@/components/ContactForm';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, FileUp, FileCheck, Users, Award, MessageCircle, ShieldCheck } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'SoftSell - Monetize Your Unused Software Licenses';
    
    // Add meta tags for SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'SoftSell helps businesses monetize their unused software licenses. Get quick valuations and hassle-free payments.';
    document.head.appendChild(metaDescription);
    
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-softsell-light-gray dark:from-softsell-dark-gray dark:to-black pt-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
          
          {/* Abstract shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-softsell-purple opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-softsell-orange opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6 md:pr-8 text-center md:text-left">
              <AnimateOnScroll animation="fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-softsell-purple to-softsell-orange">Transform</span> Unused Licenses into Cash
                </h1>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in" delay={300}>
                <p className="text-lg md:text-xl text-muted-foreground">
                  SoftSell helps businesses monetize their unused software licenses. 
                  Get quick valuations and hassle-free payments for your dormant digital assets.
                </p>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-softsell-purple to-softsell-purple-dark hover:opacity-90 text-white shadow-lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Sell My Licenses
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-softsell-purple text-softsell-purple hover:bg-softsell-purple/10"
                    onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    How It Works
                  </Button>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in" delay={800}>
                <div className="flex items-center justify-center md:justify-start gap-8 pt-6">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-softsell-purple mr-2" />
                    <span>Quick Valuation</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-softsell-purple mr-2" />
                    <span>Fast Payment</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <AnimateOnScroll animation="fade-in" delay={400}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-softsell-purple to-softsell-orange rounded-lg blur-2xl opacity-20"></div>
                  <div className="relative bg-white dark:bg-softsell-dark-gray rounded-lg shadow-2xl overflow-hidden border border-softsell-light-gray dark:border-gray-700">
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-gradient-to-r from-softsell-purple to-softsell-purple-dark rounded-md flex items-center justify-center">
                            <FileCheck className="h-6 w-6 text-white" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-lg font-medium">License Valuation</h3>
                            <p className="text-sm text-muted-foreground">Sample estimate</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-md space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Adobe Creative Cloud</span>
                            <span className="font-medium">$329</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-softsell-purple to-softsell-orange rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>8 months remaining</span>
                            <span>65% of retail value</span>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-muted rounded-md space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Microsoft Office 365</span>
                            <span className="font-medium">$189</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-softsell-purple to-softsell-orange rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>12 months remaining</span>
                            <span>70% of retail value</span>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-softsell-purple hover:bg-softsell-purple-dark">
                          Get Your Valuation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        
        {/* Down arrow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#how-it-works" className="text-softsell-purple hover:text-softsell-purple-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-softsell-dark-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How SoftSell Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process makes selling your unused software licenses quick and profitable.
              </p>
            </AnimateOnScroll>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mt-12">
            <AnimateOnScroll className="relative step-card" animation="slide-in" delay={100}>
              <Card className="h-full border-softsell-light-gray dark:border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-softsell-light-gray dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <FileUp className="h-8 w-8 text-softsell-purple" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2">1. Upload License</h3>
                  <p className="text-muted-foreground flex-grow">
                    Submit your license details through our secure form. We handle all types of enterprise software, design tools, and productivity applications.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            
            <AnimateOnScroll className="relative step-card" animation="slide-in" delay={300}>
              <Card className="h-full border-softsell-light-gray dark:border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-softsell-light-gray dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <FileCheck className="h-8 w-8 text-softsell-purple" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2">2. Get Valuation</h3>
                  <p className="text-muted-foreground flex-grow">
                    Our experts will review your submission and provide you with a competitive offer within 24 hours based on market demand and remaining subscription time.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            
            <AnimateOnScroll className="relative step-card" animation="slide-in" delay={500}>
              <Card className="h-full border-softsell-light-gray dark:border-gray-700">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-softsell-light-gray dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-softsell-purple" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2">3. Get Paid</h3>
                  <p className="text-muted-foreground flex-grow">
                    Accept our offer and receive payment via your preferred method within 1-3 business days. We handle the entire transfer process securely and legally.
                  </p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-softsell-light-gray dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the best experience for businesses looking to recover value from their software investments.
              </p>
            </AnimateOnScroll>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AnimateOnScroll delay={100}>
              <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-transparent hover:border-softsell-purple transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-softsell-light-gray dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-softsell-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">Best Value</h3>
                <p className="text-muted-foreground">
                  We offer up to 70% of retail value for your licenses, significantly higher than industry averages.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={200}>
              <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-transparent hover:border-softsell-purple transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-softsell-light-gray dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-softsell-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">Secure Process</h3>
                <p className="text-muted-foreground">
                  Our license transfer process is fully compliant with all software agreements and regulations.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={300}>
              <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-transparent hover:border-softsell-purple transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-softsell-light-gray dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-softsell-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated team of software licensing experts is available to assist you every step of the way.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={400}>
              <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-transparent hover:border-softsell-purple transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-softsell-light-gray dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-softsell-purple" />
                </div>
                <h3 className="text-xl font-medium mb-2">Trusted Network</h3>
                <p className="text-muted-foreground">
                  Join thousands of satisfied businesses who have recovered value from their unused licenses.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-softsell-dark-gray overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've helped hundreds of businesses recover value from their unused software licenses.
              </p>
            </AnimateOnScroll>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mt-12">
            <AnimateOnScroll animation="fade-in" delay={100} className="w-full md:w-1/2">
              <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-softsell-light-gray dark:border-gray-700 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-softsell-purple to-softsell-purple-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
                      JT
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">James Thompson</h4>
                      <p className="text-sm text-muted-foreground">CTO, Horizon Tech</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground mb-4">
                  "SoftSell made it incredibly easy to recoup costs on our unused Adobe licenses. The valuation was fair, payment was prompt, and the whole process took less than a week. Highly recommended for any business looking to optimize their software budget."
                </blockquote>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-in" delay={300} className="w-full md:w-1/2">
              <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-softsell-light-gray dark:border-gray-700 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-softsell-purple to-softsell-orange rounded-full flex items-center justify-center text-white font-bold text-xl">
                      SA
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Sarah Anderson</h4>
                      <p className="text-sm text-muted-foreground">Operations Manager, Dynamic Solutions</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="italic text-muted-foreground mb-4">
                  "After downsizing our team, we had several enterprise licenses that were going unused. SoftSell offered us 65% of the original value, which was much more than we expected. The team was professional, responsive, and made the entire process stress-free."
                </blockquote>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-softsell-light-gray to-white dark:from-gray-900 dark:to-softsell-dark-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <AnimateOnScroll>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to monetize your unused software licenses? Fill out the form to get started with your valuation.
                </p>
                
                <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-softsell-light-gray dark:border-gray-700">
                  <ContactForm />
                </div>
              </AnimateOnScroll>
            </div>
            
            <div className="w-full md:w-1/2">
              <AnimateOnScroll animation="fade-in" delay={200}>
                <div className="bg-white dark:bg-softsell-dark-gray p-6 rounded-lg shadow-lg border border-softsell-light-gray dark:border-gray-700 h-full">
                  <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">What types of licenses do you buy?</h4>
                      <p className="text-muted-foreground">
                        We purchase a wide range of software licenses including enterprise software, design tools, development tools, and productivity applications. We specialize in Adobe, Microsoft, Autodesk, and many others.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">How much can I expect to receive?</h4>
                      <p className="text-muted-foreground">
                        Typically, our clients receive 30-70% of the original license value, depending on the software type, remaining subscription time, and current market demand.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">How long does the process take?</h4>
                      <p className="text-muted-foreground">
                        Our process is designed to be quick and efficient. You'll typically receive a valuation within 24 hours, and once accepted, payment can be processed within 1-3 business days.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg mb-2">Is the license transfer process legal?</h4>
                      <p className="text-muted-foreground">
                        Yes, our process complies with all software licensing agreements that allow for license transfers. We have a team of legal experts who ensure all transactions are legitimate and properly documented.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-softsell-dark-gray text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-softsell-purple to-softsell-purple-dark h-8 w-8 rounded-md flex items-center justify-center mr-2">
                  <span className="text-white font-bold">S²</span>
                </div>
                <span className="font-bold text-xl text-white">SoftSell</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                SoftSell helps businesses monetize their unused software licenses. 
                Get quick valuations and hassle-free payments.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
                  <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-medium mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">hello@softsell.example</li>
                  <li className="text-gray-400">+1 (555) 123-4567</li>
                  <li className="text-gray-400">123 Software Lane, Suite 456<br />San Francisco, CA 94107</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 SoftSell. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">Twitter</span>Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">LinkedIn</span>LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">Facebook</span>Facebook</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default Index;
