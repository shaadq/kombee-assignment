import { defineType, defineField } from 'sanity'

export const accessory = defineType({
    name: 'accessory',
    title: 'Accessory',
    type: 'object',
    fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'image', type: 'image' })
    ]
})
