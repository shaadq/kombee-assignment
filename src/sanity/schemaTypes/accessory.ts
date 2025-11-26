import { defineType, defineField, defineArrayMember } from 'sanity'

export const accessory = defineType({
    name: 'accessory',
    title: 'Accessory',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'subtitle',
            type: 'string'
        }),
        defineField({
            name: 'buttonText',
            type: 'string'
        }),
        defineField({
            name: 'buttonUrl',
            type: 'string'
        }),
        defineField({
            name: 'items',
            title: 'Accessory Items',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'image', type: 'image' }),
                        defineField({
                            name: 'points',
                            title: 'Points',
                            type: 'array',
                            of: [{ type: 'string' }]
                        })
                    ]
                })
            ]
        })
    ]
})
