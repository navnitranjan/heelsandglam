import React from 'react';

export default function GalleryPage() {
  return (
    <div className="luxury-container py-20 text-center">
      <span className="text-[10px] uppercase tracking-luxury text-gold font-sans font-medium">
        Editorial Lookbooks
      </span>
      <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">
        The Runway Gallery
      </h1>
      <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-10" />
      <p className="text-sm text-alabaster/60 font-sans max-w-2xl mx-auto leading-relaxed">
        This view is a dynamic lookbook displaying student portfolio work, campaign 
        photoshoots, pageants, and behind-the-scenes clips.
      </p>
    </div>
  );
}
