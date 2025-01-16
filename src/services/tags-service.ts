import { db } from '../connections';

export const getTags = async () => {
   return await db.query(`Select * from tags`)
}

export async function getTagByUser(id: number) {
    return await db.any(`Select * from tags where user_id = $1`, [id])
}

export const saveTag = async (tag: any) => {
    try {
      return await db.one(
        `INSERT INTO tags (id, user_id, slug) VALUES ($1, $2, $3) RETURNING id`,
        [tag.id, tag.user_id, tag.slug]
      );
    } catch (error) {
      throw new Error("Database error: Unable to save tag.");
    }
  };
  

export const updateTag = async (id: number, tag: { user_id: number; slug: string }) => {
    const query = `
        UPDATE tags
        SET user_id = $2, slug = $3
        WHERE id = $1
        RETURNING *;
    `;
    return db.one(query, [id, tag.user_id, tag.slug]);
};


export const deleteTag = async (id: number) => {
    return await db.any(`Delete from tags WHERE id = $1`, [id])
}