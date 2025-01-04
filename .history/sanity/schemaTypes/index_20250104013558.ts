import { type SchemaTypeDefinition } from 'sanity'
import category from '../schemas/category'
import product from '../schemas/product'
import heroImages from '../schemas/heroImages'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroImages, product, category ],
}
