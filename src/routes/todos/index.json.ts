import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const get: RequestHandler = async ({request}) => {    
    return api(request);
  }

export const post: RequestHandler = async ({ request }) => {
    const formData = await request.formData(); 
    return api(request, {
        created_at: new Date(),
        text: formData.get("text") as String,
        done: false
    })  
   
  }
 