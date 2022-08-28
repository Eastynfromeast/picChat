import React from 'react';
import { ref, uploadString } from 'firebase/storage';
import { storage } from './service/firebase';

function PostImage() {
	// const imageRef = ref(storage, 'tt_sanso_01.jpg');

	const [image, setImage] = React.useState<string | undefined>('');
	const [imgTitle, setImgTitle] = React.useState<string | undefined>('');
	const [attachment, setAttachment] = React.useState<any>();
	const [imgText, setImgText] = React.useState<string | undefined>('');
	const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const {
			target: { files, value },
		} = event;

		const theFile: File | null = files ? files[0] : null;

		if (theFile != null) {
			const fileReader: FileReader = new FileReader();
			setImage(value);
			fileReader.onloadend = (finishedEvent: ProgressEvent<FileReader>) => {
				const { target: result } = finishedEvent;
				setAttachment(result?.result);
				console.log(attachment);
			};

			fileReader.readAsDataURL(theFile);
			// return theFile;
		} else {
			console.log('There is no file available');
		}
	};

	const handleImgTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setImgTitle(event?.target.value);
	};

	const handleImgText = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		// const target = (event.target as HTMLTextAreaElement)
		setImgText(event?.target.value);
	};

	const postImage = (event: React.FormEvent): void => {
		event.preventDefault();

		if (attachment != null) {
			const fileName: string | null = imgTitle ? imgTitle : null;
			const storageRef = ref(storage, 'images/' + fileName + '.jpg');

			// Data URL string
			uploadString(storageRef, attachment, 'data_url').then(snapshot => {
				alert('Uploaded a data_url string!');
			});
		}
	};

	const clearAttachment = (event: React.MouseEvent<HTMLButtonElement>): void => {
		setAttachment(null);
		setImage('');
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
				<input type="text" id="imageTitle" value={imgTitle} onChange={handleImgTitle} />
				<div>
					<label htmlFor="imageText"> Write down text for the image selected.</label>
					<textarea id="imageText" rows={5} value={imgText} onChange={handleImgText} />
				</div>
				<button onClick={postImage}> post the image</button>
				{attachment && (
					<div>
						<img src={attachment} width="100px" height="100px" alt={imgTitle} />
						<button onClick={clearAttachment}> Clear </button>
					</div>
				)}
			</form>
		</div>
	);
}

export default PostImage;
