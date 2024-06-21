<template>
<div class="contenedor">
  <q-layout view="hHh lpR fFf">

  <q-header elevated class="bg-primary text-white">
    <div class="baner">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title>
          <div class="titulo">
          Golden Star
          <img class="logo" src="/src/img/logo.png">
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </div>
    </q-header>
    <q-drawer class="lateral" show-if-above v-model="leftDrawerOpen" side="left">
    <div class="botones">
    <div id="btn" class="q-pa-md q-gutter-sm">
    <q-btn class="btns" to="/" color="brown-11" text-color="black" label="Inicio" />
    <q-btn class="btns" to="/habitaciones" color="brown-11" text-color="black" label="Habitaciones" />
    <q-btn class="btns" to="/servicios" color="brown-11" text-color="black" label="Servicios" />
    <q-btn class="btns" to="/contacto" color="brown-11" text-color="black" label="Contacto" />
    <q-btn class="btns" to="/deportes" color="brown-11" text-color="black" label="Deportes Extremos" />
  </div>
  </div>
    </q-drawer>

    <q-page-container class="contPrincipal">
      <router-view />
    </q-page-container>

  </q-layout>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.logo{
  width: 65px;
  height: 55px;
  margin-top: 15px;
  margin-bottom: -8px !important;
}
.contenedor{
  font-family: "Playfair Display", serif;
  background-color: rgb(11, 41, 35);
}

.titulo{
  font-size: 50px !important;
  text-align: center;
  font-weight: bold;
  color: rgb(255, 255, 255); /* Blanco */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra negra */
}

.baner{
  background-color: rgb(11, 41, 35);
}

#btn{
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 60px;
}

.btns{
  font-weight: bold;
  font-size: 17px;
  background-color: rgb(49, 136, 107) !important;
  color: white !important;
}

.btns:hover{
  background-color: rgb(129, 171, 157) !important;
  color: rgb(0, 0, 0) !important;
}

.lateral{
  background-color: rgb(10, 89, 61) ;
}

.contPrincipal {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(32, 80, 63, 0.588) ;
  min-height: 100%;
  overflow-y: hidden !important;
}

</style>