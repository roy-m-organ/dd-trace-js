const { expect } = require('chai')
const { Client } = require('../../../versions/pg').get()

describe('mocha-test-integration-db', () => {
  it('can do integration tests with db', async () => {
    const client = new Client({
      user: 'postgres',
      password: 'postgres',
      database: 'postgres'
    })
    await client.connect()
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    expect(res.rows[0]).not.to.equal(null)
    await client.end()
  })
})