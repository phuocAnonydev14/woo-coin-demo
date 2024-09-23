'use client';

import FsLightbox from 'fslightbox-react';
import { useState } from 'react';

interface PostImageProps {
  images: string[];
}

export const PostImage = (props: PostImageProps) => {
  const { images } = props;
  const [toggler, setToggler] = useState(false);

  return (
    <div>
      <img
        className="h-auto max-h-[400px] w-auto cursor-pointer rounded-xl object-cover lg:max-h-[500px]"
        src={images[0]}
        alt=""
        onClick={() => setToggler(!toggler)}
      />
      <FsLightbox toggler={toggler} sources={images} />
    </div>
  );
};
