// export const getSectionTypes = () => [
//   { id: 'eef691f0-eefe-431e-9864-23287feaf204', value: 'Agrícola' },
//   { id: 'ee96e205-7775-445f-9666-843595682629', value: 'Acuícola' },
//   { id: 'adc9e71c-9d41-4482-9b7e-4ae0a4339d95', value: 'Procesadora' },
//   { id: 'c5b5885b-58d4-4164-95a8-5ce10904d8cf', value: 'Distribuidora' },
//   { id: '48ddf850-317f-4cf7-84e2-2d0e5a89ba0c', value: 'Laboratorio' },
//   { id: '7a814d5a-ef2a-4699-965c-5f4edad7aa17', value: 'Restaurante' },
//   { id: '064a8e1f--46b8-9384-140c70563d71', value: 'Transporte' },
// ]

import axios from 'axios'
const api = 'http://localhost:3004'

export const getSectionTypes = () =>
  axios
    .get(`${api}/sections_types`)
    .then((items) => items.data)

export const getServicesTypes = () =>
  axios
    .get(`${api}/services_types`)
    .then((items) => items.data)

export const getCountriesAutocomplete = () =>
  axios
    .get(`${api}/countries`)
    .then((items) => items.data)

export const getStatesAutocomplete = (uuid) =>
  axios
    .get(`${api}/states?parent_id=${uuid}`)
    .then((items) => items.data)

export const getTownsAutocomplete = (uuid) =>
  axios
    .get(`${api}/towns?parent_id=${uuid}`)
    .then((items) => items.data)

export const addSolicitudServicio = (data) =>
  axios
    .post(`${api}/solicitud_servicio`, data)
    .then((items) => items.data)
