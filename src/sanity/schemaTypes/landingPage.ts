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
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'accessory'
                })
            ]
        }),
        defineField({
            name: 'gallery',
            type: 'gallery'
        }),
        defineField({
            name: 'colors',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'colorOption'
                })
            ]
        }),
        defineField({
            name: 'testimonials',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'testimonial'
                })
            ]
        }),
        defineField({
            name: 'newsletter',
            type: 'newsletter'
        })
    ]
})
