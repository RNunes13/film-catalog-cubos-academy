/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */

// TODO: Remove this mock when next/future/image feature exits experimental
jest.mock('next/future/image', () => (props) => {
  const { blurDataURL, ...rest } = props
  const mappedProps = Object
    .entries(rest || {})
    .reduce((obj, [k = '', v]) => {
      obj[k] = typeof v === `boolean` ? `${v}` : v
      return obj
    }, {})

  return (
    <img alt='' {...mappedProps} />
  )
})

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      asPath: '',
    })
  },
}))
