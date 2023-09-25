-- CreateTable
CREATE TABLE "Mini" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sizeId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "subTypeId" INTEGER,
    "quantity" INTEGER,
    CONSTRAINT "Mini_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "MonsterSize" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Mini_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "MonsterType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Mini_subTypeId_fkey" FOREIGN KEY ("subTypeId") REFERENCES "MonsterSubType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sizeId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "subTypeId" INTEGER,
    "sheetId" INTEGER NOT NULL,
    "imageId" INTEGER,
    "sheetUrl" TEXT NOT NULL,
    "sheetTypeId" INTEGER NOT NULL,
    CONSTRAINT "Monster_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "MonsterSize" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Monster_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "MonsterType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Monster_subTypeId_fkey" FOREIGN KEY ("subTypeId") REFERENCES "MonsterSubType" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Monster_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Monster_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Monster_sheetTypeId_fkey" FOREIGN KEY ("sheetTypeId") REFERENCES "SheetType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MonsterSize" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MonsterType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MonsterSubType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SheetType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MiniToMonster" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MiniToMonster_A_fkey" FOREIGN KEY ("A") REFERENCES "Mini" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MiniToMonster_B_fkey" FOREIGN KEY ("B") REFERENCES "Monster" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_MiniToMonster_AB_unique" ON "_MiniToMonster"("A", "B");

-- CreateIndex
CREATE INDEX "_MiniToMonster_B_index" ON "_MiniToMonster"("B");

-- Insert Seed Data
INSERT INTO "SheetType" ("id","name") VALUES
  (NULL, "DndBeyond"),
  (NULL, "Flee Mortals");

INSERT INTO "MonsterSize" ("id","name") VALUES
 (NULL,'Tiny'),
 (NULL,'Small'),
 (NULL,'Medium'),
 (NULL,'Large'),
 (NULL,'Huge'),
 (NULL,'Gargantuan');

INSERT INTO "MonsterType" ("id","name") VALUES
 (NULL,'Aberration'),
 (NULL,'Beast'),
 (NULL,'Celestial'),
 (NULL,'Construct'),
 (NULL,'Dragon'),
 (NULL,'Elemental'),
 (NULL,'Fey'),
 (NULL,'Fiend'),
 (NULL,'Giant'),
 (NULL,'Humanoid'),
 (NULL,'Monstrosity'),
 (NULL,'Ooze'),
 (NULL,'Plant'),
 (NULL,'Undead');

INSERT INTO "MonsterSubType" ("id", "name") VALUES
 (NULL,'Aarakocra'),
 (NULL,'Adult Chromatic'),
 (NULL,'Air Genasi'),
 (NULL,'Angel'),
 (NULL,'any'),
 (NULL,'any race'),
 (NULL,'Archfey'),
 (NULL,'Bard'),
 (NULL,'Beholder'),
 (NULL,'Blindheim'),
 (NULL,'Brown Bear'),
 (NULL,'Bullywug'),
 (NULL,'Cattle'),
 (NULL,'Changeling'),
 (NULL,'Chromatic'),
 (NULL,'Cleric'),
 (NULL,'Cloud Giant'),
 (NULL,'Demon'),
 (NULL,'Derro'),
 (NULL,'Devil'),
 (NULL,'Dinosaur'),
 (NULL,'dire corby'),
 (NULL,'Dragonborn'),
 (NULL,'Drow'),
 (NULL,'Druid'),
 (NULL,'Dwarf'),
 (NULL,'Earth Genasi'),
 (NULL,'Elf'),
 (NULL,'Fire Genasi'),
 (NULL,'Fire Giant'),
 (NULL,'Firenewt'),
 (NULL,'Frost Giant'),
 (NULL,'Gem'),
 (NULL,'Giff'),
 (NULL,'Gith'),
 (NULL,'Gnoll'),
 (NULL,'Gnome'),
 (NULL,'Goblinoid'),
 (NULL,'Goliath'),
 (NULL,'Grimlock'),
 (NULL,'Grippli'),
 (NULL,'Grung'),
 (NULL,'Hag'),
 (NULL,'Half-Elf'),
 (NULL,'Half-Giant'),
 (NULL,'Half-Orc'),
 (NULL,'Halfling'),
 (NULL,'Harengon'),
 (NULL,'High-Elf'),
 (NULL,'Hill Giant'),
 (NULL,'Human'),
 (NULL,'Inevitable'),
 (NULL,'Jermlaine'),
 (NULL,'Kalashtar'),
 (NULL,'Kender'),
 (NULL,'Kenku'),
 (NULL,'Kobold'),
 (NULL,'Kraul'),
 (NULL,'Kuo-toa'),
 (NULL,'Leonin'),
 (NULL,'Lizardfolk'),
 (NULL,'Locathah'),
 (NULL,'Meazel'),
 (NULL,'Merfolk'),
 (NULL,'Metallic'),
 (NULL,'Mind Flayer'),
 (NULL,'Mongrelfolk'),
 (NULL,'Monk'),
 (NULL,'Myconid'),
 (NULL,'Nagpa'),
 (NULL,'Ogre'),
 (NULL,'Orc'),
 (NULL,'Paladin'),
 (NULL,'Quaggoth'),
 (NULL,'Ranger'),
 (NULL,'Sahuagin'),
 (NULL,'Saurial'),
 (NULL,'Shadar-Kai'),
 (NULL,'Shapechanger'),
 (NULL,'Shifter'),
 (NULL,'Simic Hybrid'),
 (NULL,'Skulk'),
 (NULL,'Sorcerer'),
 (NULL,'Stone Giant'),
 (NULL,'Storm Giant'),
 (NULL,'Tabaxi'),
 (NULL,'Thri-kreen'),
 (NULL,'Tiefling'),
 (NULL,'Titan'),
 (NULL,'Tortle'),
 (NULL,'Triton'),
 (NULL,'Troglodyte'),
 (NULL,'Unicorn'),
 (NULL,'Warforged'),
 (NULL,'Warlock'),
 (NULL,'Water Genasi'),
 (NULL,'Wizard'),
 (NULL,'Xvart'),
 (NULL,'Young Gem'),
 (NULL,'Yuan-ti'),
 (NULL,'Yugoloth');
