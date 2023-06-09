-- CreateTable
CREATE TABLE "Logic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "index" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "questionId" INTEGER NOT NULL,
    "isIf" BOOLEAN NOT NULL DEFAULT true,
    "isElse" BOOLEAN NOT NULL DEFAULT false,
    "isReturn" BOOLEAN NOT NULL DEFAULT false,
    "formOutputId" INTEGER,
    "nextQuestionId" INTEGER,
    CONSTRAINT "Logic_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Logic_formOutputId_fkey" FOREIGN KEY ("formOutputId") REFERENCES "FormOutput" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Logic_nextQuestionId_fkey" FOREIGN KEY ("nextQuestionId") REFERENCES "Question" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Logic_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_LogicToOption" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LogicToOption_A_fkey" FOREIGN KEY ("A") REFERENCES "Logic" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LogicToOption_B_fkey" FOREIGN KEY ("B") REFERENCES "Option" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_LogicToOption_AB_unique" ON "_LogicToOption"("A", "B");

-- CreateIndex
CREATE INDEX "_LogicToOption_B_index" ON "_LogicToOption"("B");
