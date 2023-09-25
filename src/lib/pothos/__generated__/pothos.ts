/* eslint-disable */
import type { Prisma, Mini, Monster, MonsterSize, MonsterType, MonsterSubType, Image, Sheet, SheetType } from "@/lib/prisma/__generated__/client";
export default interface PrismaTypes {
    Mini: {
        Name: "Mini";
        Shape: Mini;
        Include: Prisma.MiniInclude;
        Select: Prisma.MiniSelect;
        OrderBy: Prisma.MiniOrderByWithRelationInput;
        WhereUnique: Prisma.MiniWhereUniqueInput;
        Where: Prisma.MiniWhereInput;
        Create: Prisma.MiniCreateInput;
        Update: Prisma.MiniUpdateInput;
        RelationName: "size" | "type" | "subType" | "monsters";
        ListRelations: "monsters";
        Relations: {
            size: {
                Shape: MonsterSize;
                Name: "MonsterSize";
            };
            type: {
                Shape: MonsterType;
                Name: "MonsterType";
            };
            subType: {
                Shape: MonsterSubType | null;
                Name: "MonsterSubType";
            };
            monsters: {
                Shape: Monster[];
                Name: "Monster";
            };
        };
    };
    Monster: {
        Name: "Monster";
        Shape: Monster;
        Include: Prisma.MonsterInclude;
        Select: Prisma.MonsterSelect;
        OrderBy: Prisma.MonsterOrderByWithRelationInput;
        WhereUnique: Prisma.MonsterWhereUniqueInput;
        Where: Prisma.MonsterWhereInput;
        Create: Prisma.MonsterCreateInput;
        Update: Prisma.MonsterUpdateInput;
        RelationName: "size" | "type" | "subType" | "sheet" | "image" | "minis";
        ListRelations: "minis";
        Relations: {
            size: {
                Shape: MonsterSize;
                Name: "MonsterSize";
            };
            type: {
                Shape: MonsterType;
                Name: "MonsterType";
            };
            subType: {
                Shape: MonsterSubType | null;
                Name: "MonsterSubType";
            };
            sheet: {
                Shape: Sheet;
                Name: "Sheet";
            };
            image: {
                Shape: Image | null;
                Name: "Image";
            };
            minis: {
                Shape: Mini[];
                Name: "Mini";
            };
        };
    };
    MonsterSize: {
        Name: "MonsterSize";
        Shape: MonsterSize;
        Include: Prisma.MonsterSizeInclude;
        Select: Prisma.MonsterSizeSelect;
        OrderBy: Prisma.MonsterSizeOrderByWithRelationInput;
        WhereUnique: Prisma.MonsterSizeWhereUniqueInput;
        Where: Prisma.MonsterSizeWhereInput;
        Create: Prisma.MonsterSizeCreateInput;
        Update: Prisma.MonsterSizeUpdateInput;
        RelationName: "minis" | "monsters";
        ListRelations: "minis" | "monsters";
        Relations: {
            minis: {
                Shape: Mini[];
                Name: "Mini";
            };
            monsters: {
                Shape: Monster[];
                Name: "Monster";
            };
        };
    };
    MonsterType: {
        Name: "MonsterType";
        Shape: MonsterType;
        Include: Prisma.MonsterTypeInclude;
        Select: Prisma.MonsterTypeSelect;
        OrderBy: Prisma.MonsterTypeOrderByWithRelationInput;
        WhereUnique: Prisma.MonsterTypeWhereUniqueInput;
        Where: Prisma.MonsterTypeWhereInput;
        Create: Prisma.MonsterTypeCreateInput;
        Update: Prisma.MonsterTypeUpdateInput;
        RelationName: "minis" | "monsters";
        ListRelations: "minis" | "monsters";
        Relations: {
            minis: {
                Shape: Mini[];
                Name: "Mini";
            };
            monsters: {
                Shape: Monster[];
                Name: "Monster";
            };
        };
    };
    MonsterSubType: {
        Name: "MonsterSubType";
        Shape: MonsterSubType;
        Include: Prisma.MonsterSubTypeInclude;
        Select: Prisma.MonsterSubTypeSelect;
        OrderBy: Prisma.MonsterSubTypeOrderByWithRelationInput;
        WhereUnique: Prisma.MonsterSubTypeWhereUniqueInput;
        Where: Prisma.MonsterSubTypeWhereInput;
        Create: Prisma.MonsterSubTypeCreateInput;
        Update: Prisma.MonsterSubTypeUpdateInput;
        RelationName: "minis" | "monsters";
        ListRelations: "minis" | "monsters";
        Relations: {
            minis: {
                Shape: Mini[];
                Name: "Mini";
            };
            monsters: {
                Shape: Monster[];
                Name: "Monster";
            };
        };
    };
    Image: {
        Name: "Image";
        Shape: Image;
        Include: Prisma.ImageInclude;
        Select: Prisma.ImageSelect;
        OrderBy: Prisma.ImageOrderByWithRelationInput;
        WhereUnique: Prisma.ImageWhereUniqueInput;
        Where: Prisma.ImageWhereInput;
        Create: Prisma.ImageCreateInput;
        Update: Prisma.ImageUpdateInput;
        RelationName: "monsters";
        ListRelations: "monsters";
        Relations: {
            monsters: {
                Shape: Monster[];
                Name: "Monster";
            };
        };
    };
    Sheet: {
        Name: "Sheet";
        Shape: Sheet;
        Include: Prisma.SheetInclude;
        Select: Prisma.SheetSelect;
        OrderBy: Prisma.SheetOrderByWithRelationInput;
        WhereUnique: Prisma.SheetWhereUniqueInput;
        Where: Prisma.SheetWhereInput;
        Create: Prisma.SheetCreateInput;
        Update: Prisma.SheetUpdateInput;
        RelationName: "type" | "monsters";
        ListRelations: "monsters";
        Relations: {
            type: {
                Shape: SheetType;
                Name: "SheetType";
            };
            monsters: {
                Shape: Monster[];
                Name: "Monster";
            };
        };
    };
    SheetType: {
        Name: "SheetType";
        Shape: SheetType;
        Include: Prisma.SheetTypeInclude;
        Select: Prisma.SheetTypeSelect;
        OrderBy: Prisma.SheetTypeOrderByWithRelationInput;
        WhereUnique: Prisma.SheetTypeWhereUniqueInput;
        Where: Prisma.SheetTypeWhereInput;
        Create: Prisma.SheetTypeCreateInput;
        Update: Prisma.SheetTypeUpdateInput;
        RelationName: "Sheet";
        ListRelations: "Sheet";
        Relations: {
            Sheet: {
                Shape: Sheet[];
                Name: "Sheet";
            };
        };
    };
}