import { writable } from 'svelte/store';

export const formStore = writable({
  fullName: '',
  email: '',
  nik: '',
  streetAddress: '',
  district: '',
  city: '',
  province: '',
  imageUrl: ''
});