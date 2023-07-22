import Skeleton from "react-loading-skeleton";
import usePhotos from '../hooks/use-photos';

export default function Timeline() {
  //get the logged in user's photos
  const {photos} = usePhotos();
  console.log('photos',photos);
  //loading the photos using react skeleton
  //render photos
  //if no photos, suggest user to post photos
  return (
    <div className="container col-span-2">
      <p>timeline </p>
    </div>
  );
}
