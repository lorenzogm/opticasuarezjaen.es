import { StoreProductTemplate as StoreProductRingTemplate } from '@ring/core/index'
import { StoreProductStoryblok } from '@ring/storyblok/types'
import { ReactElement } from 'react'

export type StoreProductTemplateProps = StoreProductStoryblok

export function StoreProductTemplate({
  brand,
  colorDefault,
  colors,
  imageDefault,
  name,
  price,
  type,
}: StoreProductTemplateProps): ReactElement {
  const product = {
    brand,
    colorDefault,
    colors: colors
      ? colors.map(({ color, image }) => ({
          color,
          image: { src: image.filename, alt: image.alt },
        }))
      : undefined,
    imageDefault: { ...imageDefault, src: imageDefault.filename },
    name,
    price: price.number,
    type,
  }

  return <StoreProductRingTemplate product={product} />
}
