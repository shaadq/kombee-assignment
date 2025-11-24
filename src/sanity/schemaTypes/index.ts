import { type SchemaTypeDefinition } from 'sanity'

import { accessory } from './accessory'
import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { colorOption } from './colorOption'
import { cta } from './cta'
import { navItem } from './navItem'
import { newsletter } from './newsletter'
import { newType } from './newType'
import { postType } from './postType'
import { statItem } from './statItem'
import { testimonial } from './testimonial'
import { header } from './header'
import { footer } from './footer'
import { hero } from './hero'
import { productInfo } from './productInfo'
import { gallery } from './gallery'
import { landingPage } from './landingPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Default schema types
    blockContentType,
    categoryType,
    postType,
    authorType,
    newType,

    // Custom schema types
    header,
    footer,
    navItem,

    hero,
    cta,
    statItem,
    productInfo,
    accessory,
    gallery,
    colorOption,
    testimonial,
    newsletter,
    landingPage
  ],
}
