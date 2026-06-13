import React from 'react';

interface ProgramDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function ProgramDetailPage({ params }: ProgramDetailProps) {
  const { slug } = await params;

  return (
    <div className="luxury-container py-20 text-center animate-fade-in">
      <span className="text-[10px] uppercase tracking-luxury text-gold font-sans font-medium">
        Cohort Syllabus
      </span>
      <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6 capitalize">
        Program: {slug.replace('-', ' ')}
      </h1>
      <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-10" />
      <p className="text-sm text-alabaster/60 font-sans max-w-2xl mx-auto leading-relaxed">
        This view is dynamically resolved. It will show the complete week-by-week 
        curriculum layout, tuition, and intake calendars for the &quot;{slug}&quot; cohort.
      </p>
    </div>
  );
}
