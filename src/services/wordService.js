import api from './api.js'

export async function validateWord(word, signal) {
  const { data } = await api.get('/validate', { params: { word }, signal })
  return data.exists
}
