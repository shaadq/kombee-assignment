import { defineType, defineField, defineArrayMember } from 'sanity'

export const landingPage = defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
        defineField({
            name: 'hero',
            type: 'hero'
        }),
        defineField({
            name: 'productInfo',
            type: 'productInfo'
        }),
        defineField({
            name: 'efficiencyMotor',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'subtitle', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'image', type: 'image' })
            ]
        }),
        defineField({
            name: 'accessories',
            type: 'accessory'
        }),
        defineField({
            name: 'gallery',
            type: 'gallery'
        }),
        defineField({
            name: 'color',
            type: 'color'
        }),
        defineField({
            name: 'testimonials',
            title: 'Testimonials Section',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                }),
                defineField({
                    name: 'items',
                    title: 'Testimonials',
                    type: 'array',
                    of: [
                        defineArrayMember({
                            type: 'testimonial'
                        })
                    ]
                })
            ]
        }),
        defineField({
            name: 'newsletter',
            type: 'newsletter'
        })
    ]
})
