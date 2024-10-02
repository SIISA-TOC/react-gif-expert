import React from 'react';
import { getGifs } from '../helpers/gstGifs'
import { useState, useEffect } from 'react';

export const useFetchGifs = ( category ) => {

    
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsloading(false);
  }

  useEffect( () => {
    getImages();
  }, [] )

    return {
        images,
        isLoading
    }


}
