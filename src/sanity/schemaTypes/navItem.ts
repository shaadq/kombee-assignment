import { defineType, defineField, defineArrayMember } from 'sanity'

export const navItem = defineType({
    name: 'navItem',
    title: 'Navigation Item',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
            // validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'type',
            title: 'Item Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Link', value: 'link' },
                    { title: 'Dropdown', value: 'dropdown' },
                ],
                layout: 'radio',
            },
            // validation: (Rule) => Rule.required(),
        }),

        // Link URL
        defineField({
            name: 'url',
            type: 'string',
            hidden: ({ parent }) => parent?.type !== 'link',
        }),

        // Dropdown items
        defineField({
            name: 'children',
            title: 'Dropdown Items',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', type: 'string' }),
                        defineField({ name: 'url', type: 'string' }),
                    ],
                }),
            ],
            hidden: ({ parent }) => parent?.type !== 'dropdown',
        }),
    ],
})
