'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'solid' | 'outline' | 'text';
  isMagnetic?: boolean;
}

export default function Button({
  children,
  className,
  href,
  variant = 'solid',
  isMagnetic = true,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMagnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic pull limit (20px)
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const styles = cn(
    'relative inline-flex items-center justify-center text-xs uppercase tracking-luxury py-3.5 px-8 transition-all duration-350 select-none font-sans font-medium',
    variant === 'solid' && 'bg-gold text-abyss hover:bg-alabaster hover:text-abyss',
    variant === 'outline' && 'border border-gold text-gold hover:bg-gold hover:text-abyss',
    variant === 'text' && 'text-alabaster hover:text-gold py-2 px-0',
    className
  );

  const innerContent = (
    <span
      className="inline-block transition-transform duration-350"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {children}
    </span>
  );

  const motionHandlers = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        ref={buttonRef as any}
        {...motionHandlers}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      className={styles}
      ref={buttonRef}
      {...motionHandlers}
      {...props}
    >
      {innerContent}
    </button>
  );
}
