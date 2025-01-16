import { db } from '../connections';

export const getTags = async () => {
   return await db.query(`Select * from tags`)
}

export async function getTagByUser(id: number) {
    return await db.any(`Select * from tags where user_id = $1`, [id])
}

export const saveTag = async (tag: any) => {
    return await db.one(`Insert into tags(id, user_id, slug)` + 
    'VALUES ($1, $2, $3)', 
    [tag.id, tag.user_id, tag.slug])
}

export const updateTag = async (id: number, tag: any) => {
    return await db.one(`Update tags SET id = $1, user_id = $2, slug = $3` + 
    'WHERE id = $1',
    [id, tag.user_id, tag.slug]
    )
}

export const deleteTag = async (id: number) => {
    return await db.any(`Delete from tags WHERE id = $1`, [id])
}