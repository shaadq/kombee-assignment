import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

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
`);

export const HEADER_QUERY = defineQuery(`
  *[_type == "header"][0]{
    logo,
    navItems[]{ label, url, type, children[] {label, url} }
  }
`);

export const FOOTER_QUERY = defineQuery(`
  *[_type == "footer"][0]{
    columns[]{
      title,
      links[]{ label, url }
    },
    socials[]{ image, url },
    image,
    copyright
  }
`);

export const HERO_QUERY = defineQuery(`
  *[_type == "landingPage"][0].hero{
    title,
    titleBold,
    subtitle,
    image,
    buttonText,
    buttonUrl,
    videoPlayButton,
    stats[]{ value, unit, label }
  }
`);

export const PRODUCT_INFO_QUERY = defineQuery(`
  *[_type == "landingPage"][0].productInfo{
    title,
    subtitle,
    points,
    image
  }
`);

export const EFFICIENCY_MOTOR_QUERY = defineQuery(`
  *[_type == "landingPage"][0].efficiencyMotor{
    title,
    subtitle,
    description,
    image
  }
`);

export const ACCESSORIES_QUERY = defineQuery(`
  *[_type == "landingPage"][0].accessories{
    title,
    subtitle,
    buttonText,
    buttonUrl,
    items[]{
      title,
      image,
      points
    }
  }
`);

export const GALLERY_QUERY = defineQuery(`
  *[_type == "landingPage"][0].gallery{
    title,
    subtitle,
    points[] {
      text,
      url
    },
    images[] {
      title,
      image
    }
  }
`);

export const COLORS_QUERY = defineQuery(`
  *[_type == "landingPage"][0].color

`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "landingPage"][0].testimonials{
    title,
    items[]{
      quote,
      name,
      role,
      avatar
    }
  }
`);

export const NEWSLETTER_QUERY = defineQuery(`
  *[_type == "landingPage"][0].newsletter{
    title,
    description,
    buttonLabel
  }
`);
