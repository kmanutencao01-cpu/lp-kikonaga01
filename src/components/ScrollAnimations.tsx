import { useEffect } from 'react';

export const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-fade-in, .animate-scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        // Skip elements with hero-image-fixed class
        if (isVisible && element instanceof HTMLElement && !element.classList.contains('hero-image-fixed')) {
          element.style.transform = `translateY(${rate}px)`;
        }
      });
    };

    // Add scroll listener for parallax
    window.addEventListener('scroll', handleScroll);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

// Floating Particles Component
export const FloatingParticles = () => {
  useEffect(() => {
    const containers = document.querySelectorAll('.particles-container');
    
    containers.forEach((container) => {
      const createParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration between 15s and 25s
        const duration = Math.random() * 10 + 15;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, duration * 1000);
      };

      // Create initial particles
      for (let i = 0; i < 15; i++) {
        setTimeout(() => createParticle(), i * 200);
      }

      // Create new particles periodically
      const particleInterval = setInterval(createParticle, 3000);

      // Store interval for cleanup
      (container as any).particleInterval = particleInterval;
    });

    return () => {
      containers.forEach((container) => {
        if ((container as any).particleInterval) {
          clearInterval((container as any).particleInterval);
        }
      });
    };
  }, []);

  return (
    <div className="particles-container pointer-events-none" />
  );
};

export default ScrollAnimations;