import { useEffect } from 'react';
import { getStorage, ref } from 'firebase/storage';

function useUploadImage() {
	const storage = getStorage();
	const storageRef = ref(storage);
}

export default useUploadImage;
