import axios from 'axios'

export const fetchProvinces = async () => {
  try {
    const response = await axios.get('https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/T15.json')
    const data = response.data
    return data
  } catch (error) {
    console.log(error)
  }
}
