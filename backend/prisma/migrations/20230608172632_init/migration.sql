-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormOutput" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT 'Untitled',
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "formId" INTEGER NOT NULL,
    CONSTRAINT "FormOutput_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_FormOutput" ("content", "createdAt", "formId", "id", "updatedAt") SELECT "content", "createdAt", "formId", "id", "updatedAt" FROM "FormOutput";
DROP TABLE "FormOutput";
ALTER TABLE "new_FormOutput" RENAME TO "FormOutput";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
