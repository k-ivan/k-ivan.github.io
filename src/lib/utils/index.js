/**
 * Check if a mobile device
 * @returns {boolean}
 */
export function isMobile() {
  const mobileRE = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;

  return mobileRE.test(navigator.userAgent);
}

/**
 * Array chunk
 * @param {Array<any>} arr - array
 * @param {number} size - chunk size
 * @returns
 */
export function arrayChunk(arr, size) {
  return Array.from({
    length: Math.ceil(arr.length / size)
  }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

/**
 * Fake delay
 * @param {number} delay
 * @returns {Promise<undefined>}
 */
export function sleep(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}