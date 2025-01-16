import { db } from '../connections';

export const getEmployees = async (office?: string) => {
    let query = `SELECT * FROM employee`;
    
    if (office) {
        query += ` WHERE office = $1`;
        return await db.query(query, [office]);
    } else {
        return await db.query(query);
    }
}


export async function getEmployeeById(id: number) {
    return await db.any(`Select * from employee where id = $1`, [id])
}

export const saveEmployee = async (employee: any) => {
    try {
      return await db.one(
        `INSERT INTO employee (id, first_name, last_name, office, birth_day, phone) 
        VALUES ($1, $2, $3, $4, $5, $6) 
        RETURNING id`,
        [
          employee.id,
          employee.first_name,
          employee.last_name,
          employee.office,
          employee.birth_day,
          employee.phone,
        ]
      );
    } catch (error) {
      console.error("Error inserting employee:", error);
      throw new Error("Database error: Unable to save employee.");
    }
  };
  

export const updateEmployee = async (id: number, employee: any) => {
    const query = `
        UPDATE employee
        SET first_name = $2, last_name = $3, office = $4, phone = $5
        WHERE id = $1
        RETURNING *;
    `;
    return db.one(query, [id, employee.first_name, employee.last_name, employee.office, employee.phone]);
};


export const deleteEmployee =async (id: number) => {
    return await db.any(`Delete from employee WHERE id = $1`, [id])
}