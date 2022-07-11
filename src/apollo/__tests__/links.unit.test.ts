import { defaultLocale } from 'next-i18next.config'
import { getParams, getLocale, resolveSearchParams } from '../links'

describe('apollo', () => {
  describe('`getParams`', () => {
    it('should return an empty object', () => {
      expect(getParams()).toStrictEqual({})
    })

    it('should return an object with the querystring parameters', () => {
      const qs = '?param1=one&param2=two'
      const expectedValue = { param1: 'one', param2: 'two' }
      expect(getParams(qs)).toStrictEqual(expectedValue)
    })

    it('should return an object with no undefined values', () => {
      const qs = '?param1=one&param2=undefined&param3=three'
      const expectedValue = { param1: 'one', param3: 'three' }
      expect(getParams(qs)).toStrictEqual(expectedValue)
    })
  })

  describe('`getLocale`', () => {
    let windowSpy: jest.SpyInstance

    beforeEach(() => {
      windowSpy = jest.spyOn(window, 'window', 'get')
    })

    afterEach(() => {
      windowSpy.mockRestore()
    })

    it('should return the default locale when on the server', () => {
      windowSpy.mockImplementation(() => undefined)
      expect(getLocale()).toBe(defaultLocale)
    })

    it('should return the locale in the URL on the client', () => {
      const locale = 'en'

      windowSpy.mockImplementation(() => ({
        location: {
          pathname: `/${locale}/fake-path`
        }
      }))

      expect(getLocale()).toBe(locale)
    })
  })

  describe('`resolveSearchParams`', () => {
    const apiKey = `${process.env.NEXT_PUBLIC_API_KEY_NAME}=${process.env.NEXT_PUBLIC_API_KEY}`

    it('should return the default params', () => {
      const uri = `http://fake-host/${defaultLocale}/fake-path`
      expect(resolveSearchParams(uri)).toBe(`${apiKey}&language=${defaultLocale}`)
    })

    it('should return the default parameters plus the parameters from the given URL', () => {
      const uri = `http://fake-host/${defaultLocale}/fake-path?param1=one&param2=two`
      expect(resolveSearchParams(uri)).toBe(`${apiKey}&language=${defaultLocale}&param1=one&param2=two`)
    })

    it('should return the querystring with the default parameter value replaced', () => {
      const locale = `en`
      const uri = `http://fake-host/fake-path?param1=one&language=${locale}`
      expect(resolveSearchParams(uri)).toBe(`${apiKey}&language=${locale}&param1=one`)
    })
  })
})
