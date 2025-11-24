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
            name: 'buttons',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'cta'
                })
            ]
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
