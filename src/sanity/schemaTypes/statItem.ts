import { defineType, defineField } from 'sanity'

export const statItem = defineType({
    name: 'statItem',
    title: 'Stat Item',
    type: 'object',
    fields: [
        defineField({ name: 'value', type: 'string' }),
        defineField({ name: 'unit', type: 'string' }),
        defineField({ name: 'label', type: 'string' })
    ]
})
