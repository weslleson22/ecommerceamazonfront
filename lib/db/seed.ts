/* eslint-disable @typescript-eslint/no-explicit-any */
import data from '@/lib/data'
import { connectToDatabase } from '.'

import { cwd } from 'process'
import { loadEnvConfig } from '@next/env'
import Product from './models/product.model'


loadEnvConfig(cwd())

const main = async () => {
  try {
const {products} = data
    await connectToDatabase(process.env.MONGODB_URI)

    await Product.deleteMany()
    const createdProducts = await Product.insertMany(products)

    console.log({
        createdProducts,
        message: 'Products created successfully'
        
  })
  process.exit(0)
}catch (error) {
    console.log(error)
    throw new Error('Failed to seed database')
  }
}
main()