import { defineType, defineField, defineArrayMember } from 'sanity'

export const gallery = defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'object',
    fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({
            name: 'images',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image'
                })
            ]
        })
    ]
})
