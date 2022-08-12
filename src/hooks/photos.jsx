import axios from 'axios';
import { useEffect, useState } from 'react';

export function usePhotos() {
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   async function fetchPhotos() {
      try {
         setError('');
         setLoading(true);
         const response = await axios.get('https://boiling-refuge-66454.herokuapp.com/images');
         setPhotos(response.data);
         setLoading(false);
      } catch (error) {
         setLoading(false);
         setError(error.message);
      }
   }

   useEffect(() => {
      fetchPhotos();
   }, []);

   return { photos, loading, error }
}