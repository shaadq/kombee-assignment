import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'object',
    fields: [
        defineField({ name: 'quote', type: 'text' }),
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'role', type: 'string' }),
        defineField({ name: 'avatar', type: 'image' })
    ]
})
