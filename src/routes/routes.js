import Contacto from "../components/Contacto.vue"
import DeportesEx from "../components/DeportesEx.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Servicios from "../components/Servicios.vue"
import Inicio from "../components/Inicio.vue"
import {createRouter, createWebHashHistory} from "vue-router"

const routes=[
    {path:"/contacto", component:Contacto},
    {path:"/deportes", component:DeportesEx},
    {path:"/habitaciones", component:Habitaciones},
    {path:"/servicios", component:Servicios},
    {path:"/", component:Inicio}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})