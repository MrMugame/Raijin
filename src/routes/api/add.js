import db from "$lib/database";

export const post = async ( { request } ) => {
    const res = await request.json();
    const insert = db.prepare("INSERT INTO weather (time, temp, hum, pres) VALUES(@time, @temp, @hum, @pres)");
    
    res.time = Math.floor(new Date().getTime() / 1000);

    try {
        insert.run(res);
    } catch (e) {
        return {
            status: 400,
            body: {
                error: e.toString()
            }
        }    
    }

    return {
        status: 201,
    }
}