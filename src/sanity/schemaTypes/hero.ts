import { defineType, defineField, defineArrayMember } from 'sanity'

export const hero = defineType({
    name: 'hero',
    title: 'Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'titleBold',
            type: 'string'
        }),
        defineField({
            name: 'subtitle',
            type: 'text'
        }),
        defineField({
            name: 'image',
            type: 'image'
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
            name: 'videoPlayButton',
            type: 'image'
        }),
        defineField({
            name: 'stats',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'statItem'
                })
            ]
        })
    ]
})
