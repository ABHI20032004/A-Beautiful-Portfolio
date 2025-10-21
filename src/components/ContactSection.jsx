import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collab? Feel free to reach out.
          I'm always open to discuss new opportunities.
        </p>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:abhi@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    abhi@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+91 7631994088"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7631994088
                  </a>
                </div>
              </div>

              {/* Location */}
               <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a href="https://www.google.com/maps/place/IIIT+Kota+permanent+campus/@25.0502788,75.8273708,21z/data=!4m6!3m5!1s0x396f874a7d8fde0d:0x471f3c2337f358e8!8m2!3d25.050219!4d75.8273862!16s%2Fg%2F11gy9z31n0?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank" 
                  className="text-muted-foreground hover:text-primary transition-colors">
                    IIIT Kota , Ranpur , Rajasthan
                  </a>
                </div>
              </div>
              </div>

                <div className=" pt-8">
                    <h4 className="font-medium mb-4 ">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="">
                            <Linkedin className="text-primary"/>
                        </a>
                        <a href="">
                            <Twitter className="text-primary"/>
                        </a>
                        <a href="">
                            <Instagram className="text-primary"/>
                        </a>
                        <a href="">
                            <Facebook className="text-primary"/>
                        </a>

                    </div>
                </div>

            </div>

              <div className="bg-card p-8 rounded-lg shadow-xs"
                    onSubmit={handleSubmit}>
                    <h3 className=" text-2xl font-semibold mb-6">
                        Send a Message
                    </h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name"
                                   className="block text-sm font-medium mb-2">
                                Your Name</label>
                            <input type="text" 
                                   id="name" 
                                   name="name" 
                                   required 
                                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:rind-primary"
                                   placeholder="Abhi..." />
                        </div>

                            <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium mb-2">
                                Your Email</label>
                            <input type="email" 
                                   id="name" 
                                   name="email" 
                                   required 
                                   className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:rind-primary"
                                   placeholder="abc@gmail.com..." />
                        </div>

                        <div>
                            <label htmlFor="message"
                                   className="block text-sm font-medium mb-2">
                                Your Message</label>
                            < textarea 
                                   id="message" 
                                   name="message" 
                                   required 
                                   className=" w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:rind-primary resize-none"
                                   placeholder="Hello I did like to talk about..."
                                    />
                        </div>

                        <div className="flex justify-center pt-5 ">
                        <button type="submit " 
                             disabled={isSubmitting}
                             className={cn("cosmic-button flex items-center justify-center gap-2" )}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16}/>
                            
                        </button>
                        </div>
                    </form>
              </div>

          </div>
        </div>
    </section>
  );
};
