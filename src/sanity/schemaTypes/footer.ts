import { defineType, defineField, defineArrayMember } from 'sanity'

export const footer = defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'copyright',
            type: 'string'
        }),
        defineField({
            name: 'columns',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({
                            name: 'links',
                            type: 'array',
                            of: [
                                defineArrayMember({
                                    type: 'navItem'
                                })
                            ]
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: 'socials',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'image', type: 'image' }),
                        defineField({
                            name: 'url',
                            type: 'string',
                        })
                    ]
                })
            ]
        }),
    ]
})
