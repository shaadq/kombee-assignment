import { defineType, defineField } from 'sanity'

export const cta = defineType({
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            type: 'string'
        }),
        defineField({
            name: 'url',
            type: 'url'
        })
    ]
})
