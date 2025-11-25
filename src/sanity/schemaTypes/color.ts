// /schemas/colorSection.js
import { defineType, defineField, defineArrayMember } from 'sanity'

export const color = defineType({
    name: 'color',
    title: 'Color',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'image', type: 'image' }),
        defineField({
            name: 'colors',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'colorOption'
                })
            ]
        })
    ]
})
