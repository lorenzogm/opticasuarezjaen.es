import { useSpacing } from '@ring/storyblok/hooks'
import { CarouselStoryblok } from '@ring/storyblok/types'
import { Carousel as CarouselRing } from '@ring/ui'
import { ReactElement } from 'react'

type CarouselProps = CarouselStoryblok & {
  mobileMarginBottom?: string
  tabletMarginBottom?: string
  laptopMarginBottom?: string
}

export function Carousel({
  items,
  mobileMarginBottom,
  tabletMarginBottom,
  laptopMarginBottom,
}: CarouselProps): ReactElement {
  const mobileMarginBottomUpdated = useSpacing(mobileMarginBottom)
  const tabletMarginBottomUpdated = useSpacing(tabletMarginBottom)
  const laptopMarginBottomUpdated = useSpacing(laptopMarginBottom)

  return (
    <CarouselRing
      items={items.map((item) => ({ src: item.filename, alt: item.alt || '' }))}
      mobileMarginBottom={mobileMarginBottomUpdated}
      tabletMarginBottom={tabletMarginBottomUpdated}
      laptopMarginBottom={laptopMarginBottomUpdated}
    />
  )
}
