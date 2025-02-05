import { writable } from 'svelte/store';

export const formStore = writable({
  fullName: '',
  email: '',
  nik: '',
  phoneNumber: '',
  streetAddress: '',
  district: '',
  city: '',
  province: '',
  imageUrl: ''
});