import type { BuilderType } from '..';

export function Image(builder: BuilderType) {
  builder.prismaNode('Image', {
    id: { field: 'id' },
    fields: t => ({
      url: t.exposeString('url'),
    }),
  });
}
