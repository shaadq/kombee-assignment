import { defineType, defineField, defineArrayMember } from 'sanity'

export const header = defineType({
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'button1Text',
            type: 'string',
        }),
        defineField({
            name: 'button1Url',
            type: 'url',
        }),
        defineField({
            name: 'button2Text',
            type: 'string',
        }),
        defineField({
            name: 'button2Url',
            type: 'url',
        }),
        defineField({
            name: 'navItems',
            title: 'Navigation Items',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'navItem'
                })
            ]
        })
    ]
})
