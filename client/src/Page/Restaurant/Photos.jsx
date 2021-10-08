import React,{useState} from "react";
import ImageViewer from 'react-simple-image-viewer';

//components
import PhotoCollection from "../../restaurant/PhotosCollection";

const Photos=()=>{
  const [photos,setPhotos]=useState([
      "https://b.zmtcdn.com/data/pictures/chains/2/19726202/7a33cb5d02c52cf74e99467ef5bf92df.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/19726202/cad99fb1da5d088481af9600309ebf5f.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/19726202/f53881f03e6e80a01c707d18b0e71530.jpg",
     ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
    return (
        <>
         {isMenuOpen && (
        <ImageViewer
          src={ photos}
          currentIndex={ CurrentImg }
          disableScroll={ false }
          onClose={ closeViewer }
        />
        )}

        <div className="flex flex-wrap gap-2">
        {photos.map((photo)=>(
            <PhotoCollection image={photo} openViewer={openViewer}/>
        ))}
     </div>
        </>
    );
};

export default Photos;