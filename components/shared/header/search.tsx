import { SearchIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { APP_NAME } from '@/lib/constants'
const categories = [
    'men', 'women', 'kids', 'accessories'
]
export default async function Search() {
  return (
    <form action='/search' method='GET' className='flex  items-stretch h-10 '>
<Select name='category'>
  <SelectTrigger
    className='h-full px-3 text-base bg-gray-100 text-black border-r dark:border-gray-200 rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none flex items-center'
  >
    <SelectValue placeholder='All' />
  </SelectTrigger>
  <SelectContent position='popper'>
    <SelectItem value='all'>All</SelectItem>
    {categories.map((category) => (
      <SelectItem key={category} value={category}>
        {category}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

      <Input
        className=' rounded-none dark:border-gray-200 bg-gray-100 text-black text-base '
        placeholder={`Sistema de Pesquisa ${APP_NAME}`}
        name='q'
        type='search'
      />
      <button
        type='submit'
        className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md px-3 py-2 '
      >
        <SearchIcon className='w-6 h-6' />
      </button>
    </form>
  )
}