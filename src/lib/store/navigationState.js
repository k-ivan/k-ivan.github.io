import { writable } from 'svelte/store';

/**
 * @type {string|null} - loading | loaded | null
 */
const navigationState = writable(null)

export default navigationState;