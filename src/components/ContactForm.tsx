
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimateOnScroll } from './AnimateOnScroll';

type FormState = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

export function ContactForm() {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleLicenseTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, licenseType: value }));
    if (errors.licenseType) {
      setErrors(prev => ({ ...prev, licenseType: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: '',
        });
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimateOnScroll animation="fade-in" delay={100}>
        <div className="space-y-2">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in" delay={200}>
        <div className="space-y-2">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in" delay={300}>
        <div className="space-y-2">
          <Input
            type="text"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className={errors.company ? "border-red-500" : ""}
          />
          {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in" delay={400}>
        <div className="space-y-2">
          <Select 
            value={formData.licenseType} 
            onValueChange={handleLicenseTypeChange}
          >
            <SelectTrigger className={errors.licenseType ? "border-red-500" : ""}>
              <SelectValue placeholder="License Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enterprise">Enterprise Software</SelectItem>
              <SelectItem value="design">Design Tools</SelectItem>
              <SelectItem value="development">Development Tools</SelectItem>
              <SelectItem value="productivity">Productivity Applications</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in" delay={500}>
        <div className="space-y-2">
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-in" delay={600}>
        <Button 
          type="submit" 
          className="w-full bg-softsell-purple hover:bg-softsell-purple-dark transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </AnimateOnScroll>
    </form>
  );
}
