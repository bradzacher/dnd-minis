import type { BuilderType } from '..';

export function Mini(builder: BuilderType) {
  builder.prismaNode('Mini', {
    id: { field: 'id' },
    fields: t => ({
      name: t.exposeString('name'),
      quantity: t.exposeInt('quantity'),
      size: t.string({
        select: {
          size: {
            select: {
              name: true,
            },
          },
        },
        resolve: mini => mini.size.name,
      }),
      type: t.string({
        select: {
          type: {
            select: {
              name: true,
            },
          },
        },
        resolve: mini => mini.type.name,
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
        resolve: mini =>
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          mini.subType == null ? null : mini.subType.name,
      }),
      monsters: t.relation('monsters'),
    }),
  });
}
