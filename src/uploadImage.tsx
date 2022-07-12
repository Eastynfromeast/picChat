import React from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

function UploadImage() {
	const storage = getStorage();
	const storageRef = ref(storage);
	console.log(storage, storageRef);
	const mountainsRef = ref(storage, 'mountains.jpg');
	const mountainImagesRef = ref(storage, 'images/mountains.jpg');

	const [image, setImage] = React.useState('');
	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		setImage(event.target.value);
	};

	const postImage = (file: any) => {
		uploadBytes(storageRef, file).then(snapshot => {
			console.log('Uploaded a blob or file!');
		});
	};
	return (
		<div>
			<h2> Upload Image </h2>
			<form onSubmit={postImage}>
				<label htmlFor="file"> Choose an image file you want to upload</label>
				<br />
				<input
					type="file"
					id="image"
					value={image}
					onChange={handleImageUpload}
				/>
				<br />
				<label htmlFor="imageTitle">Title for image :</label>
				<br />
				<input type="text" id="imageTitle" />
				<button onClick={postImage}> post the image</button>
			</form>
		</div>
	);
}

export default UploadImage;
