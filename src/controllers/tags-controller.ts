import express, { Request, Response } from "express";
import * as tagService from '../services/tags-service'

const router = express.Router();
const bodyParser = require("body-parser");

var cors = require("cors");
router.use(bodyParser.json());
router.use(cors())

router.get('/tags', (req: Request, res: Response) => {
    tagService.getTags().then(
        (tag) => {
            res.send(tag)
        }).catch((error) => {
            res.send(error.message)
        })
})

router.get('/tags/:id', (req: Request, res: Response) => {
    tagService.getTagByUser(parseInt(req.params.id)).then(
        (tag) => {
            res.send(tag)
        }
    )
})

router.post('/tags',(req: Request, res: Response) => {
    tagService.saveTag(req.body).then(
        () => {
            res.status(200).json( {
                message: "Tag was saved"
            });
        }
    ).catch((error) => {
        res.status(303).json( {
            message: "Error: " + error.message
        })
    })
})

router.put('/tags/:id', (req: Request, res: Response) =>{
    tagService.updateTag(parseInt(req.params.id), req.body).then(
        () => {
            res.status(200).json( {
                message: "Tag was updated"
            });
        }
    ).catch((error) => {
        res.status(303).json({
            message: "Error :" + error.message
        })
    })
})


router.delete('/tags/:id', (req: Request, res: Response) => {
    tagService.deleteTag(parseInt(req.params.id)).then(
        (tag) => {
            res.send(tag)
        }
    ).catch((error) => res.send(error.message))
} )


export default router