import { defineType, defineField, defineArrayMember } from 'sanity'

export const gallery = defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'object',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({
            name: 'points',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', type: 'string' }),
                        defineField({ name: 'url', type: 'string' })
                    ]
                })
            ]
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'image', type: 'image' })
                    ]
                })
            ]
        })
    ]
})
