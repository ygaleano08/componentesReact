import React from "react";

import VideoThumbnail from "./VideoThumbnail";

export function ThumbContainer() {
  let video1 = {
    title:
      "CHAYANNE SUS MEJORES ROMANTICAS ÉXITOS CHAYANNE 30 GRANDES ÉXITOS ENGANCHADOS",
    user: "Latin Songs",
    views: "731,791 vistas ° hace 4 semanas",
    imgUrl:
      "https://i.ytimg.com/vi/ZvAzgA7976c/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBoVkhq352967fZrejYPkdLUG6hKw"
  };

  let video2 = {
    title:
      "BTop Hits 2020 | Ed Sheeran, Adele, Shawn Mendes, Maroon 5, Taylor Swift, Charlie Puth, Sam Smith",
    user: "Latin Songs",
    views: "822,193 vistas °3 feb. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/RqLbctYcwIU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMC8rN3oQKKpsdBcy06QAhmr4O3A"
  };

  let video3 = {
    title:
      "Popurri Lilly Goodman Al Final, Cúbreme, Yo Sin Ti, Es Tu Amor, Nadie Me Dijo y Más",
    user: "Católica oficial",
    views: "3,362,683 vistas °14 feb. 2019",
    imgUrl:
      "https://i.ytimg.com/vi/bEChfLBRzZ0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD183d5EBULxvnwRmujecsvbRtcew"
  };

  let video4 = {
    title:
      "BTop Hits 2020 | Ed Sheeran, Adele, Shawn Mendes, Maroon 5, Taylor Swift, Charlie Puth, Sam Smith",
    user: "Latin Songs",
    views: "737,100 vistas °13 feb. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/DBn8dknik0g/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCkp-l7XDJbQeqbDY6OlyzMfXdY8A"
  };

  let video5 = {
    title:
      "BTop Hits 2020 | Ed Sheeran, Adele, Shawn Mendes, Maroon 5, Taylor Swift, Charlie Puth, Sam Smith",
    user: "Latin Songs",
    views: "737,100 vistas °13 feb. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/eoO0u5qVC8Q/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCu4ESRQ6QL3EIThiLaHEHFl_8kZQ"
  };

  let video6 = {
    title:
      "BTop Hits 2020 | Ed Sheeran, Adele, Shawn Mendes, Maroon 5, Taylor Swift, Charlie Puth, Sam Smith",
    user: "Latin Songs",
    views: "737,100 vistas °13 feb. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/b8_Kh6Y4i8Q/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCqSTz0aLLuBgwz-5ggUWS4him78w"
  };

  let video7 = {
    title:
      "BTop Hits 2020 | Ed Sheeran, Adele, Shawn Mendes, Maroon 5, Taylor Swift, Charlie Puth, Sam Smith",
    user: "Latin Songs",
    views: "737,100 vistas °13 feb. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/PXsUy24bpwQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC91xSZS23KuQxIMhWG_cTLws1LdA"
  };

  let video8 = {
    title:
      "Viejitas Pero Bonitas, Marco Atonio Solis y Ana Grabriel las 35 Grandes Canciones",
    user: "Latin Songs",
    views: "737,100 vistas °13 feb. 2020",
    imgUrl:
      "https://i.ytimg.com/vi/WYkARqRZAiY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAoE5uY7nNX4FY8dFZ8zviZNaO1EQ"
  };

  return (
    <div className="thumb-container">
      <VideoThumbnail
        imgUrl={video1.imgUrl}
        title={video1.title}
        user={video1.user}
        views={video1.views}
      />
      <VideoThumbnail
        imgUrl={video2.imgUrl}
        title={video2.title}
        user={video2.user}
        views={video2.views}
      />
      <VideoThumbnail
        imgUrl={video3.imgUrl}
        title={video3.title}
        user={video3.user}
        views={video3.views}
      />
      <VideoThumbnail
        imgUrl={video4.imgUrl}
        title={video4.title}
        user={video4.user}
        views={video4.views}
      />
      <VideoThumbnail
        imgUrl={video5.imgUrl}
        title={video5.title}
        user={video5.user}
        views={video5.views}
      />
      <VideoThumbnail
        imgUrl={video6.imgUrl}
        title={video6.title}
        user={video6.user}
        views={video6.views}
      />
      <VideoThumbnail
        imgUrl={video7.imgUrl}
        title={video7.title}
        user={video7.user}
        views={video7.views}
      />
      <VideoThumbnail
        imgUrl={video8.imgUrl}
        title={video8.title}
        user={video8.user}
        views={video8.views}
      />
    </div>
  );
}
