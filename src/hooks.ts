import type {Handle} from "@sveltejs/kit";

/* todo remove if works
export const handle: Handle = async ({request,resolve}) => {
    if (request.query.has("_method")){
        request.method = request.query.get("_method").toUpperCase();
    }

    const response = await resolve(request);
    return response;
}*/

    export async function handle({ event, resolve }) {
      const response = await resolve(event);
    
      if (response.headers.get('content-type').startsWith('text/html')) {
        const body = await response.text();
        return new Response(body.replace(/cloud/g, 'butt'), response);
      }
      
      return response;
    }