import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-brand-gold text-black hover:brightness-110 shadow-sm",
      secondary: "bg-brand-graphite text-white border border-white/10 hover:border-brand-gold/50 shadow-sm",
      outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black",
      ghost: "hover:bg-white/5 text-white",
    };

    const sizes = {
      sm: "h-9 px-6 text-xs",
      md: "h-12 px-8 text-sm",
      lg: "h-14 px-10 text-sm",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      // Check if it's an external or internal link
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return (
          <a href={href} className={classes}>
            {children}
          </a>
        );
      }
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
