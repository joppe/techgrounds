export async function getValue(value) {
  return new Promise((resolve, reject) => {
    if (value?.size > 0) {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(value);
    } else {
      resolve(value);
    }
  });
}
