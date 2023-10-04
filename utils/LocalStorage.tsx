export const setLocalStorage = (key:string, data:any): void => {
  if (typeof window !== "undefined") {
	  window.localStorage.setItem(key, JSON.stringify(data));
  }
};


export const getLocalStorage = ( key:string ): any | null => {
	let data = null;

	if (typeof window !== "undefined") {
		try {
			const storedData: string | null = window.localStorage.getItem(
				key
			);
			if (storedData) {
				data = JSON.parse(storedData);
			}
		} catch (err) {
			console.error(err);
			// If stored data is not a stringified JSON this will fail,
			// that's why we catch the error
		}
	}

	return data;
};
