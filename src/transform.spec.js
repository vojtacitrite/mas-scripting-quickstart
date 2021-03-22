import { expect } from 'chai'
import transform from './transform'

describe('Response transformation', () => {
  it('Happy path', () => {
    expect(transform({ response: 'response' })).to.be.equal('RESPONSE')
  })
})
