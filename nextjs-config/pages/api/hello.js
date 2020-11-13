// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    res.json({ ss: 'ss' })
    var o1 = { a: 1, b: 1 };
var o2 = { b: 2 };

var destination = Object.assign({}, o1, 02);
// RESULT
destination === { a: 1, b:2 }

}