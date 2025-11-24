import { defineType, defineField, defineArrayMember } from 'sanity'

export const productInfo = defineType({
    name: 'productInfo',
    title: 'Product Information',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({
            name: 'points',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'string'
                })
            ]
        }),
        defineField({ name: 'image', type: 'image' })
    ]
})
