import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client('https://ignewnews.prismic.io/api/v2', {
    accessToken:
      'MC5ZcFZKeGhBQUFDTUFhc29y.77-977-9bu-_ve-_ve-_vQnvv73vv70KfX1zTO-_ve-_ve-_ve-_vTDvv70RJO-_vTnvv73vv71pE0kBQO-_vQ',
    req,
  });

  console.log(prismic, 'teste');

  return prismic;
}
