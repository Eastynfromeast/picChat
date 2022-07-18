import React from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { resourceLimits } from 'worker_threads';

function UploadImage() {
	const storage = getStorage();
	const storageRef = ref(storage);

	const imageRef = ref(storage, 'tt_sanso_01.jpg');
	//const [attachment, setAttachment] = React.useState('');

	const [image, setImage] = React.useState('');
	const [imgTitle, setImgTitle] = React.useState('');
	const [attachment, setAttachment] = React.useState('');
	const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { files, value },
		} = event;
		const theFile = files ? [0] : null;
		const fileReader: FileReader = new FileReader();
		setImage(value);
		fileReader.onloadend = finishedEvent => {
			const { currentTarget: result } = finishedEvent;

			setAttachment(result);
		};
		//fileReader.readAsDataURL(theFile);
	};
	const handleImgTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setImgTitle(event?.target.value);
	};

	const postImage = (file: any) => {
		// const storageRef = ref(storage);
		// uploadBytes(storageRef, file).then(snapshot => {
		// 	alert('Uploaded a blob or file!');
		// });
	};

	return (
		<div>
			<h2> Upload Image </h2>
			<form onSubmit={postImage}>
				<label htmlFor="file"> Choose an image file you want to upload</label>
				<br />
				<input type="file" id="image" value={image} onChange={onFileSelected} />
				<br />
				<label htmlFor="imageTitle">Title for image :</label>
				<br />
				<input
					type="text"
					id="imageTitle"
					value={imgTitle}
					onChange={handleImgTitle}
				/>
				<button onClick={postImage}> post the image</button>
				{attachment && (
					<div>
						<img src={attachment} width="50px" height="50px" alt="attachment" />
						<button>Clear</button>
					</div>
				)}
			</form>
		</div>
	);
}

export default UploadImage;
