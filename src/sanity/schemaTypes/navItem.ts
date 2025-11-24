import { defineType, defineField } from 'sanity'

export const navItem = defineType({
    name: 'navItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        defineField({ name: 'label', type: 'string' }),
        defineField({ name: 'url', type: 'string' })
    ]
})
