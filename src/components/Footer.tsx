import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a
              href="mailto:arushmukker@gmail.com"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>arushmukker@gmail.com</span>
            </a>
            <a
              href="tel:+918448807728"
              className="flex items-center space-x-2 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 8448807728</span>
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arush Mukker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
