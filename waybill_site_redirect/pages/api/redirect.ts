
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { service } = req.query
  const base = process.env.PROVIDER_BASE_URL
  const token = process.env.DISCOUNT_TOKEN || ''
  if (!base) {
    res.status(500).send('PROVIDER_BASE_URL not set')
    return
  }
  // Construct destination URL
  const dest = `${base}?service=${service}&token=${token}`
  res.writeHead(302, { Location: dest })
  res.end()
}
