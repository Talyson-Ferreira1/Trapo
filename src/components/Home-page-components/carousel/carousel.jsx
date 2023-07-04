'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { appFirebase } from '@/services/firebase';

import styles from './style.module.css';

export default function Carousel() {
  const storage = getStorage(appFirebase);
  const carouselRef = useRef(null);

  const [allImages, setAllImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = ref(storage, 'carousel');
        const imagesSnapshot = await listAll(imagesRef);

        const imageURLs = await Promise.all(
          imagesSnapshot.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { url, name: item.name };
          })
        );

        setAllImages(imageURLs);
      } catch (error) {
        console.error('Error fetching images from Firebase Storage:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const images = carousel.querySelectorAll(`.${styles.images}`);

    let currentIndex = 0;
    let interval;

    const startCarousel = () => {
      interval = setInterval(() => {
        const currentImage = images[currentIndex];
        currentImage.style.opacity = 0;

        currentIndex = (currentIndex + 1) % images.length;

        const nextImage = images[currentIndex];
        nextImage.style.opacity = 1;

        // Check if it's the last image
        if (currentIndex === images.length - 1) {
          // Reverse the images order
          images.forEach((image, index) => {
            image.style.order = images.length - index;
          });
        }
      }, 10000);
    };

    startCarousel();

    return () => {
      clearInterval(interval);
    };
  }, [allImages]);

  return (
    <div className={`${styles.container_carousel}`} ref={carouselRef}>
      {allImages.map((image, index) => (
        <div
          key={index}
          className={`${styles.images} ${
            index === currentIndex ? styles.active : ''
          }`}
        >
          <img
            className={`${styles.image}`}
            src={image.url}
            alt={`image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
