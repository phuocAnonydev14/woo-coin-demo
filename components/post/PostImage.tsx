'use client';

import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { cn } from '@/lib/utils';
import { Lightbox } from 'react-modal-image';

interface PostImageProps {
  images: string | string[];
  isDetailPage?: boolean;
}

export const PostImage = (props: PostImageProps) => {
  const { images, isDetailPage } = props;
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <div className="w-full overflow-hidden">
      {typeof images === 'string' && (
        <div className="cursor-pointer">
          <ImgBox
            setToggler={() => setSelectedImage(images)}
            image={images}
            isDetailPage={isDetailPage}
          />
        </div>
      )}
      {Array.isArray(images) &&
        (images.length <= 2 ? (
          <div className="flex gap-2">
            {images.map((image) => (
              <div className="mr-2 cursor-pointer" key={image}>
                <ImgBox
                  setToggler={() => setSelectedImage(image)}
                  image={image}
                  isDetailPage={isDetailPage}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full overflow-hidden">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              partialVisible
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 2,
                  partialVisibilityGutter: 40,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 768 },
                  items: 2,
                  slidesToSlide: 1, // optional, default to 1.,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: { max: 767, min: 100 },
                  items: 2,
                  slidesToSlide: 1, // optional, default to 1.
                  partialVisibilityGutter: 10,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {images.map((image) => (
                <div className="mr-2 cursor-grab" key={image}>
                  <ImgBox
                    setToggler={() => setSelectedImage(image)}
                    image={image}
                    isDetailPage={isDetailPage}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      {selectedImage && (
        <Lightbox
          small={selectedImage}
          large={selectedImage}
          className={cn(
            'h-auto max-h-[350px] w-auto select-none rounded-[8px] object-cover lg:max-h-[400px]',
            isDetailPage && 'h-auto w-full',
          )}
          hideDownload
          hideZoom
          // @ts-expect-error: no type for this attr
          onClose={() => setSelectedImage('')}
        />
      )}
    </div>
  );
};

const ImgBox = ({
  image,
  isDetailPage,
  setToggler,
}: {
  image: string;
  setToggler: () => void;
  isDetailPage?: boolean;
}) => {
  return (
    <img
      className={cn(
        'h-auto max-h-[350px] w-auto select-none rounded-[8px] border-[1px] object-cover outline-[#00000026] lg:max-h-[400px]',
        isDetailPage && 'h-auto w-full',
      )}
      onClick={setToggler}
      src={image}
      alt="Image"
    />
  );
};
