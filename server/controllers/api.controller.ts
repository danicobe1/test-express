import { Request, Response } from 'express';
let pkg = require(__dirname + '/../../package.json');

export let httpGet = (req: Request, res: Response) => {
  res.json({
    message: 'Hello World',
    name: 'Anonimous',
  });
}

export let httpPut = (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: 'Hello',
    name: req.body.name
  })    
}
