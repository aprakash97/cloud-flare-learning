export default{
    async fetch(request, env, ctx){
        const url = new URL(request.url)

        //GET /
        if(request.method === "GET" && url.pathname === "/"){
            return Response.json({
                message: "API is running"
            })
        }

        //GET /status
        if(request.method === "GET" && url.pathname === "/status"){
            return Response.json({
                status: "OK",
                timestamp: new Date().toISOString()
            })
        }

        // 404 fallback
        return Response.json({
            error: "Not Found"
        }, {
            status: 404
        })
    }
}