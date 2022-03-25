import { ApiClient } from '../src/client/api.client'
import { User } from '../src/types/user.type'
import { generateUser } from '../src/types/user.generator'
import * as fake from 'faker'
import { strict as assert } from 'assert'

describe('Crocodiles controller', () => {
  let api: ApiClient
  let user: User

  beforeEach(async () => {
    const authorization = await ApiClient.unauthorized(generateUser())
    api = await authorization.register().cookie
  })

  test('should create a new crocodile', async () => {
    const name = fake.name.firstName()
    const crocodile = await api.crocodile.createCrocodiles({
      name: name,
      sex: 'M',
      date_of_birth: '2022-10-15'
    })

    assert.equal(crocodile.name, name, 'Crocodile name is not same')
  })

  test('should fetch crocodiles', async () => {
    const name = fake.name.firstName()
    await api.crocodile.createCrocodiles({
      name: name,
      sex: 'M',
      date_of_birth: '2022-10-15'
    })
    const crocodiles = await api.crocodile.fetchCrocodiles()
    assert.equal(crocodiles[0].name, name, 'Crocodile name is not same')
  })
})
