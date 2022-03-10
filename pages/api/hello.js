// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// localhost:3000/api/hello

export default function handler(req, res) {

  let da_girl = ""
  // 1 month pass
  // da_girl = "Tianna"

  res.status(200).json({ name: da_girl })
}
