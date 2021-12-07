const router = require("express").Router();
// routes
const authRoutes = require('./auth.route');

const routesIndex = [
    {
        path:'/auth',
        route:authRoutes
    }
]

routesIndex.forEach((route)=>{
    router.use(route.path,route.route);
})






module.exports = router;