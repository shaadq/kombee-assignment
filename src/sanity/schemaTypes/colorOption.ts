import { defineType, defineField } from 'sanity'

export const colorOption = defineType({
    name: 'colorOption',
    title: 'Color Option',
    type: 'object',
    fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'hex', type: 'string' }),
        defineField({ name: 'image', type: 'image' })
    ]
})
