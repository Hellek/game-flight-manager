import { createStore } from 'effector'

export interface City {
  // Уникальный ID
  id: number
  // Название города
  name: string
  // Кол-во путешественников в город с City['id']
  travelers: Map<City['id'], number>
}

export const $cities = createStore<City[]>([])

export const $cityNames = createStore([
  'Волгоград',
  'Псков',
  'Старый оскол',
  'Казань',
  'Новокузнецк',
])
