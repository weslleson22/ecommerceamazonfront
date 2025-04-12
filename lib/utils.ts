import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string =>{
  const [init, decimal]= num.toString().split('.')	
  return decimal ? `${init}.${decimal.padEnd(2, '0')}` : init
}

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-')

    const CURRENCY_FORMATTER = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
      minimumFractionDigits: 2,
    })
    export function formatCurrency(amount: number) {
      return CURRENCY_FORMATTER.format(amount)
    }
    
    const NUMBER_FORMATTER = new Intl.NumberFormat('pt-BR')
    export function formatNumber(number: number) {
      return NUMBER_FORMATTER.format(number)
    }