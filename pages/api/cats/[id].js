// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// localhost:3000/api/cats

import {cats} from '../../../data'

export default function handler(req, res) {
    // debugger
    const {id} = req.query
    const cat = cats.find((cat) => cat.id === Number(id))
    res.status(200).json(cat)
}
