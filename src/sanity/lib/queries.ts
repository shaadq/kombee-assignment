import { defineQuery } from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`)

export const POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`)

export const LANDING_PAGE_QUERY = defineQuery(`
  *[_type == "landingPage"][0]{
    hero{
      title,
      subtitle,
      image,
      buttons[]{
        label,
        url
      },
      stats[]{
        value,
        label
      }
    },

    productInfo{
      title,
      points,
      image
    },

    efficiencyMotor{
      title,
      subtitle,
      description,
      image
    },

    accessories[]{
      name,
      description,
      image
    },

    gallery{
      sectionTitle,
      images
    },

    colors[]{
      label,
      hex,
      image
    },

    testimonials[]{
      quote,
      name,
      role,
      avatar
    },

    newsletter{
      title,
      description,
      buttonLabel
    }
  }
`)

export const HEADER_QUERY = defineQuery(`
  *[_type == "header"][0]{
    logo,
    navItems[]{ label, url, type, children[] {label, url} }
  }
`)

export const FOOTER_QUERY = defineQuery(`
  *[_type == "footer"][0]{
    columns[]{
      title,
      links[]{ label, url }
    },
    socialLinks[]{ label, url },image
  }
`)

export const HERO_QUERY = defineQuery(`
  *[_type == "landingPage"][0].hero{
    title,
    titleBold,
    subtitle,
    image,
    buttons[]{ label, url },
    stats[]{ value, unit, label }
  }
`)

export const PRODUCT_INFO_QUERY = defineQuery(`
  *[_type == "landingPage"][0].productInfo{
    title,
    subtitle,
    points,
    image
  }
`)

export const EFFICIENCY_MOTOR_QUERY = defineQuery(`
  *[_type == "landingPage"][0].efficiencyMotor{
    title,
    subtitle,
    description,
    image
  }
`)

export const ACCESSORIES_QUERY = defineQuery(`
  *[_type == "landingPage"][0].accessories[]{
    name,
    description,
    image
  }
`)

export const GALLERY_QUERY = defineQuery(`
  *[_type == "landingPage"][0].gallery{
    sectionTitle,
    images
  }
`)

export const COLORS_QUERY = defineQuery(`
  *[_type == "landingPage"][0].color

`)

export const TESTIMONIALS_QUERY = defineQuery(`
 *[_type == "landingPage"][0].testimonials
`)

export const NEWSLETTER_QUERY = defineQuery(`
  *[_type == "landingPage"][0].newsletter{
    title,
    description,
    buttonLabel
  }
`)

export const FULL_PAGE_QUERY = defineQuery(`
{
  "header": *[_type == "header"][0]{
    logo,
    navItems[]{ label, url }
  },

  "landingPage": *[_type == "landingPage"][0]{
    hero{
      title,
      subtitle,
      image,
      buttons[]{ label, url },
      stats[]{ value, label }
    },
    productInfo{
      title,
      points,
      image
    },
    efficiencyMotor{
      title,
      description,
      image
    },
    accessories[]{
      name,
      description,
      image
    },
    gallery{
      sectionTitle,
      images
    },
    colors[]{
      label,
      hex,
      image
    },
    testimonials[]{
      quote,
      name,
      role,
      avatar
    },
    newsletter{
      title,
      description,
      buttonLabel
    }
  },

  "footer": *[_type == "footer"][0]{
    columns[]{
      title,
      links[]{ label, url }
    },
    socialLinks[]{ label, url }
  }
}
`)
