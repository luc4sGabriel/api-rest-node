import fastify from 'fastify'
import cripto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transactions = knex('transactions').where('amount', 1000).select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running')
  })
