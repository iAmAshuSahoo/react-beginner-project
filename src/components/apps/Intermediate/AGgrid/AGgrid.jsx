import {useState, useEffect, useMemo} from 'react'

function AGgrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?q=moon")
      .then((response) => response.json())
      .then((data) => setImages(getImages(data.collection.items)));
  }, []);

  const getImages = (images) => {
    // console.log(tempImages)
    const tempImages = [];
    if (images.length > 0) {
      images.forEach((item) => {
        item.links && item.links.length > 0 && item.links.filter(imgLink => {
          if (imgLink.render === "image") {
            tempImages.push(imgLink.href);
            return imgLink.href
          }
        })
        return tempImages
      })
    }
    return tempImages
  }
   console.log(images)
 return(<div>
  {images.map((image, ind) => {
      return <img src={image} />
  })}
</div>)
}

export default AGgrid