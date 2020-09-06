import Profession from '../model/Profession'

import { Request, Response } from 'express'


class ProfessionController {

  async index(req: Request, res: Response) {
     const profession = await Profession.find()

     return res.json(profession)
  }

  async delete(req: Request, res:Response){
    const {_id} = req.params


    await Profession.findByIdAndDelete(_id)

    return res.status(204).send({message: 'Profession destroy'})
  }
}

export default ProfessionController