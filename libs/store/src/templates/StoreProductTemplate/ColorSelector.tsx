import { StoreProductColor } from '@ring/store'
import { ButtonUnstyled, Grid, Image, Paper } from '@ring/ui'
import { ReactElement } from 'react'

type ColorSelectorProps = {
  colors: Array<StoreProductColor>
  colorSelected: StoreProductColor['color']
  onSelectColor: ({
    imageSelected,
    colorSelected,
  }: {
    imageSelected: StoreProductColor['image']
    colorSelected: StoreProductColor['color']
  }) => void
}

export function ColorSelector({
  colors,
  colorSelected,
  onSelectColor,
}: ColorSelectorProps): ReactElement | null {
  return (
    <div>
      {colorSelected ? <div>Color: {colorSelected}</div> : null}
      <Grid container>
        {colors.map(({ image, color }) => (
          <Grid item key={color} xs={4} sm={2}>
            <ButtonUnstyled
              onClick={() =>
                onSelectColor({ imageSelected: image, colorSelected: color })
              }
            >
              <Paper elevation={colorSelected === color ? 4 : 0}>
                <Image
                  src={image.src}
                  alt={image.alt || color}
                  layout="responsive"
                  width={1}
                  height={1}
                />
              </Paper>
            </ButtonUnstyled>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
