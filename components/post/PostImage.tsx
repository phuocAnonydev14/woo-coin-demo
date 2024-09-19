"use client"

import FsLightbox from "fslightbox-react";
import {useState} from "react";

interface PostImageProps {
	images: string[]
}

export const PostImage = (props: PostImageProps) => {
	const {images} = props
	const [toggler, setToggler] = useState(false);
	
	return <div>
		<img className="w-auto cursor-pointer h-auto lg:max-h-[500px] max-h-[400px] object-cover rounded-xl"
				 src={images[0]}
				 alt=""
				 onClick={() => setToggler(!toggler)}
		/>
		<FsLightbox
			toggler={toggler}
			sources={images}
		/>
	</div>
}