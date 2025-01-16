import express, { Request, Response } from "express";
import * as employeeService from "../services/service";

const router = express.Router();
const bodyParser = require("body-parser");

var cors = require("cors");
router.use(bodyParser.json());
router.use(cors())

router.get('/employees', (req: Request, res: Response) => {
    const office = req.query.office as string | undefined;

    employeeService.getEmployees(office).then(
        (employees) => {
            res.send(employees);
        }).catch((error) => {
            res.send(error.message);
        });
});


router.get('/employees/:id', (req: Request, res: Response) => {
    employeeService.getEmployeeById(parseInt(req.params.id)).then(
        (employee) => {
            res.send(employee)
        }
    )
})

router.post('/employees',(req: Request, res: Response) => {
    employeeService.saveEmployee(req.body).then(
        () => {
            res.status(200).json( {
                message: "User was saved"
            });
        }
    ).catch((error) => {
        res.status(303).json( {
            message: "Error: " + error.message
        })
    })
})

router.put('/employees/:id', (req: Request, res: Response) =>{
    employeeService.updateEmployee(parseInt(req.params.id), req.body).then(
        () => {
            res.status(200).json( {
                message: "Employee was updated"
            });
        }
    ).catch((error) => {
        res.status(303).json({
            message: "Error :" + error.message
        })
    })
})


router.delete('/employees/:id', (req: Request, res: Response) => {
    employeeService.deleteEmployee(parseInt(req.params.id)).then(
        (employee) => {
            res.send(employee)
        }
    ).catch((error) => res.send(error.message))
} )


export default router