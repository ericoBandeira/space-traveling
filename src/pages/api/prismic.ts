import { NextApiRequest, NextApiResponse } from 'next';

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const decoded = Buffer.from(request.query.nextpage, 'base64');
  const URL = `${decoded}&access_token=MC5ZcFZKeGhBQUFDTUFhc29y.77-977-9bu-_ve-_ve-_vQnvv73vv70KfX1zTO-_ve-_ve-_ve-_vTDvv70RJO-_vTnvv73vv71pE0kBQO-_vQ`;
  const data = await fetch(URL).then(res => res.json());

  console.log('data', data);

  return response.status(200).json(data);
};
