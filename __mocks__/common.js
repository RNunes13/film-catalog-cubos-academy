/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */

// TODO: Remove this mock when next/future/image feature exits experimental
jest.mock('next/future/image', () => (props) => {
  const mappedProps = Object
    .entries(props || {})
    .reduce((obj, [k, v]) => {
      obj[k] = typeof v === `boolean` ? `${v}` : v
      return obj
    }, {})

  return (
    <img alt='' {...mappedProps} />
  )
})
