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
