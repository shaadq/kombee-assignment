import { type SchemaTypeDefinition } from 'sanity'

import { accessory } from './accessory'
import { color } from './color'
import { colorOption } from './colorOption'
import { cta } from './cta'
import { footer } from './footer'
import { gallery } from './gallery'
import { header } from './header'
import { hero } from './hero'
import { landingPage } from './landingPage'
import { navItem } from './navItem'
import { newsletter } from './newsletter'
import { productInfo } from './productInfo'
import { statItem } from './statItem'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
    color,
    colorOption,
    testimonial,
    newsletter,
    landingPage
  ],
}
