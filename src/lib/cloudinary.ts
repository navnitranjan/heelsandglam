interface CloudinaryLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export const cldLoader = ({ src, width, quality }: CloudinaryLoaderProps): string => {
  // If the src is a full URL, return it directly
  if (src.startsWith('http')) {
    return src;
  }
  
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'heels-and-glam';
  const params = ['f_auto', 'q_auto:best', `w_${width}`, 'c_limit'];
  
  if (quality) {
    params.push(`q_${quality}`);
  }
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${src}`;
};
