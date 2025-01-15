import { db } from '../connections';

export const getEmployees = async () => {
   return await db.query(`Select * from employee`)
}

export async function getEmployeeById(id: number) {
    return await db.any(`Select * from employee where id = $1`, [id])
}

export const saveEmployee =async (employee: any) => {
    return await db.one(`Insert into employee(id, first_name, last_name, office, birth_day, phone)` + 
    'VALUES ($1, $2, $3, $4, $5, $6)', 
    [employee.id, employee.first_name, employee.last_name, employee.office, employee.birth_day, employee.phone])
}

export const updateEmployee = async (id: number, employee: any) => {
    return await db.one(`Update employee SET id = $1, first_name = $2, last_name = $3, office = $4, birth_day = $5, phone = $6` + 
    'WHERE id = $1',
    [id, employee.first_name, employee.last_name, employee.office, employee.birth_day, employee.phone]
    )
}

export const deleteEmployee =async (id: number) => {
    return await db.any(`Delete from employee WHERE id = $1`, [id])
}