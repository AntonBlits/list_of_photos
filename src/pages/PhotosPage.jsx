import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Photo } from '../components/Photo';
import { usePhotos } from '../hooks/photos';
import style from './PhotosPage.module.css';

export function PhotosPage() {
   const { photos, loading, error } = usePhotos();

   return (
      <div className={style.photosPage}>
         {loading && <Loader />}
         {error && <ErrorMessage error={error} />}
         {photos.map(photo => <Photo key={photo.id} photo={photo} />)}
      </div>
   )
}