import type { BuilderType } from '..';

export function Monster(builder: BuilderType) {
  builder.prismaNode('Monster', {
    id: { field: 'id' },
    fields: t => ({
      name: t.exposeString('name'),
      size: t.string({
        select: {
          size: {
            select: {
              name: true,
            },
          },
        },
        resolve: monster => monster.size.name,
      }),
      type: t.string({
        select: {
          type: {
            select: {
              name: true,
            },
          },
        },
        resolve: monster => monster.type.name,
      }),
      subType: t.string({
        nullable: true,
        select: {
          subType: {
            select: {
              name: true,
            },
          },
        },
        resolve: monster =>
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          monster.subType == null ? null : monster.subType.name,
      }),
      image: t.relation('image'),
      sheetUrl: t.exposeString('sheetUrl'),
      sheetType: t.string({
        select: {
          type: {
            select: {
              name: true,
            },
          },
        },
        resolve: monster => monster.type.name,
      }),
      minis: t.relation('minis'),
    }),
  });
}
