import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const categoryData: Prisma.CategoryCreateWithoutGamesInput[] = [
  {
    name: 'firstMeeting',
  },
  {
    name: 'getToKnow',
  },
]

const gameData: Prisma.GameCreateInput[] = [
  {
    name: '「実は・・・」自己紹介',
    description: '「実は・・・」で始まるエピソードを盛り込んだ自己紹介をしてもらいます。',
    categories: {
      connect: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    },
  },
  {
    name: 'ウソ、ホント？',
    description:
      '自分について4つの事実を箇条書きしてもらいます。ただし、そのうちの一つはウソ。どれが嘘か見抜けるでしょうか？',
    categories: {
      connect: [
        {
          id: 1,
        },
      ],
    },
  },
  {
    name: '他己紹介',
    description:
      '参加者でペアを作り、お互いをインタビューします。その後、全員の前でインタビュー相手の紹介をします。今まで知らなかった相手のことを聴けるチャンス！',
    categories: {
      connect: [
        {
          id: 2,
        },
      ],
    },
  },
]

const evalutionData: Prisma.GameEvaluationCreateInput[] = [
  {
    value: 4,
    game: {
      connect: {
        id: 1,
      },
    },
  },
  {
    value: 3,
    game: {
      connect: {
        id: 2,
      },
    },
  },
]

async function main() {
  for (const data of categoryData) {
    const result = await prisma.category.upsert({
      where: {},
      update: {},
      create: data,
    })
    console.log(result)
  }
  for (const data of gameData) {
    const result = await prisma.game.upsert({
      where: {},
      update: {},
      create: data,
    })
    console.log(result)
  }
  for (const data of evalutionData) {
    const result = await prisma.gameEvaluation.upsert({
      where: {},
      update: {},
      create: data,
    })
    console.log(result)
  }
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
