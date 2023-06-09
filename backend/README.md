# PermitForm Backend

## Run the server

```
npm run start
```

## Setup

```
npm install
```

## GraphQL

### Generate Types

```
npx prisma generate
```

## Prisma

### Migrate Database

```
npx prisma migrate dev --name init
```

## Database spec

```prisma
model Form {
  id          Int          @id @default(autoincrement())
  title       String
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  questions   Question[]
  responses   Response[]
  formOutputs FormOutput[]
}

model Question {
  id        Int      @id @default(autoincrement())
  index     Int
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  multiple  Boolean  @default(false)

  options    Option[]
  form       Form     @relation(fields: [formId], references: [id], onDelete: Cascade)
  formId     Int
  logics     Logic[]  @relation(name: "questionField")
  nextLogics Logic[]  @relation(name: "nextQuestion")
}

model Option {
  id         Int        @id @default(autoincrement())
  index      Int
  content    String
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
  question   Question   @relation(fields: [questionId], references: [id], onDelete: Cascade)
  questionId Int
  responses  Response[]
  logics     Logic[]
}

model Response {
  id              Int      @id @default(autoincrement())
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  form            Form     @relation(fields: [formId], references: [id], onDelete: Cascade)
  formId          Int
  selectedOptions Option[]
}

model FormOutput {
  id        Int      @id @default(autoincrement())
  title     String   @default("Untitled")
  content   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  form      Form     @relation(fields: [formId], references: [id], onDelete: Cascade)
  formId    Int
  logics    Logic[]
}

model Logic {
  id             Int         @id @default(autoincrement())
  createdAt      DateTime    @default(now())
  index          Int
  updatedAt      DateTime    @updatedAt
  question       Question    @relation(name: "questionField", fields: [questionId], references: [id], onDelete: Cascade)
  questionId     Int
  isIf           Boolean     @default(true)
  isElse         Boolean     @default(false)
  options        Option[]
  isReturn       Boolean     @default(false)
  formOutput     FormOutput? @relation(fields: [formOutputId], references: [id], onDelete: Cascade)
  formOutputId   Int?
  nextQuestion   Question?   @relation(name: "nextQuestion", fields: [nextQuestionId], references: [id])
  nextQuestionId Int?
}
```
