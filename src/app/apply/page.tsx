import React from 'react';

export default function ApplyPage() {
  return (
    <div className="luxury-container py-20 text-center animate-fade-in">
      <span className="text-[10px] uppercase tracking-luxury text-gold font-sans font-medium">
        Admissions Office
      </span>
      <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">
        Request Cohort Admission
      </h1>
      <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-10" />
      <p className="text-sm text-alabaster/60 font-sans max-w-2xl mx-auto leading-relaxed">
        This view holds the multi-step questionnaire and scheduled consultation 
        triggers to process cohort entries.
      </p>
    </div>
  );
}
