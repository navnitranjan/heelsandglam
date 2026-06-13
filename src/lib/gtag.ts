export const GA_TRACKING_ID = 'G-EBDYJ8KNC2';

// log the pageview with their URL
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// log specific events
export const trackEvent = ({ action, category, label, value }: { 
  action: string; 
  category: string; 
  label: string; 
  value?: any; 
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
