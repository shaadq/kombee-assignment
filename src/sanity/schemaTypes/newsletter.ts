import { defineType, defineField } from 'sanity'

export const newsletter = defineType({
    name: 'newsletter',
    title: 'Newsletter Section',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'buttonLabel', type: 'string' })
    ]
})
