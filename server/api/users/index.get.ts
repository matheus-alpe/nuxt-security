import { faker } from '@faker-js/faker'

export default defineEventHandler((event) => {
    const q = getQuery(event)
    const count = Number(q.count) || 10;

    const users = []
    for (let i = 0; i < count; i++) {
        users.push({
            id: faker.string.nanoid(5),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar()
        })
    }

    return users
})
