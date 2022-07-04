import db from "../lib/database"

export const get = () => {
    const query = db.prepare("SELECT * FROM weather WHERE time > unixepoch('now', '-5 day')");

    const content = query.all();

    return {
        status: 200,
        body: { content }
    }
}