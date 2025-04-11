'use client'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
//import Image from 'next/image'
import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'
//import Search from './header/search'
//import useSettingStore from '@/hooks/use-setting-store'
//import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'

//import { SelectValue } from '@radix-ui/react-select'
//import { useLocale, useTranslations } from 'next-intl'
//import { usePathname, useRouter } from '@/i18n/routing'
//import { i18n } from '@/i18n-config'

export default function Footer() {
  /*const router = useRouter()
  const pathname = usePathname()
  const {
    setting: { site, availableCurrencies, currency },
    setCurrency,
  } = useSettingStore()
  const { locales } = i18n

  const locale = useLocale()
  const t = useTranslations()
  */
  return (
    <footer className='bg-black  text-white underline-link'>
      <div className='w-full'>
        <Button
          variant='ghost'
          className='bg-gray-800 w-full  rounded-none '
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className='mr-2 h-4 w-4' />
          Back to top
        </Button>
        </div>
        <div className='p-4'>
          <div className='flex justify-center gap-3 text-sm'>
                <Link href='/page/conditions-of-use'>Condições de Uso</Link>
                <Link href='/page/privacy-policy'>Aviso de Privacidade</Link> 
                <Link href='/page/help'>Ajuda</Link>
          </div>
          <div className='flex justify-center gap-3 text-sm'>
            <p> 2025, © {APP_NAME}, Todos os direitos reservados</p>
          </div>
          <div className='mt-8 flex justify-center text-sm text-gray-400'>
            <p>
                   Desenvolvedor de Software📍São Luís – MA, Brasil - CEP 65054-005 📞 (98) 98497-1547 ✉️ sw.suportedev@gmail.com  
            
            </p>
            
          </div>

        </div>
        
    </footer>
  )
}