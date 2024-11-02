'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll eventini dinleyip butonun görünürlüğünü ayarlıyoruz
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // Sayfa 300px'den fazla kaydırıldıysa
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Event listener'ı kaldırmak için cleanup işlemi
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Sayfayı yumuşak bir şekilde yukarı kaydırır
    });
  };

  return (
    <div id='back-to-top' className={`fixed right-5 bottom-5 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Button onClick={scrollToTop} className='h-auto p-2 sm:p-3 bg-black hover:bg-opacity-85'>
        <Icon icon="lucide:chevron-up" className='text-2xl' />
      </Button>
    </div>
  );
}

export default BackToTop;
