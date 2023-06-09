-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Logic" (
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
    CONSTRAINT "Logic_nextQuestionId_fkey" FOREIGN KEY ("nextQuestionId") REFERENCES "Question" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Logic" ("createdAt", "formOutputId", "id", "index", "isElse", "isIf", "isReturn", "nextQuestionId", "questionId", "updatedAt") SELECT "createdAt", "formOutputId", "id", "index", "isElse", "isIf", "isReturn", "nextQuestionId", "questionId", "updatedAt" FROM "Logic";
DROP TABLE "Logic";
ALTER TABLE "new_Logic" RENAME TO "Logic";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
