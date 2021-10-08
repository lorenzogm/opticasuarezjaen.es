import IconArrowForward from '@material-ui/icons/ArrowForward'
import {
  Button,
  Form,
  FormInputText,
  Grid,
  LayoutCheckout,
  StoreUserAddress,
  useUserAddress,
} from '@ring/core/index'
import { ReactElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type CheckoutAddressTemplateProps = {
  onSubmit: SubmitHandler<CheckoutAddressFormValues>
}

export function StoreCheckoutAddressTemplate({
  onSubmit,
}: CheckoutAddressTemplateProps): ReactElement {
  const { address } = useUserAddress()
  const useFormMethods = useForm<CheckoutAddressFormValues>({
    defaultValues: {
      address: {
        email: address.email,
        firstName: address.firstName,
        lastName: address.lastName,
        address: address.address,
        addressMoreInfo: address.addressMoreInfo,
        postcode: address.postcode,
        city: address.city,
        country: address.country,
      },
    },
  })

  return (
    <LayoutCheckout activeStep={0}>
      <Form<CheckoutAddressFormValues>
        useFormMethods={useFormMethods}
        onSubmit={onSubmit}
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <FormInputText name="address.email" label="Email" required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInputText name="address.firstName" label="Nombre" required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInputText name="address.lastName" label="Apellidos" required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInputText name="address.address" label="Dirección" required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInputText
              name="address.addressMoreInfo"
              label="Más información"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInputText
              name="address.postcode"
              label="Código postal"
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInputText name="address.city" label="Población" required />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInputText
              name="address.country"
              label="País"
              required
              disabled
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button type="submit" endIcon={<IconArrowForward />} fullWidth>
              Guardar dirección
            </Button>
          </Grid>
        </Grid>
      </Form>
    </LayoutCheckout>
  )
}

export type CheckoutAddressFormValues = {
  address: StoreUserAddress
}