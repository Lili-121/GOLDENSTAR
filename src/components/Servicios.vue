<template>
  <q-page class="q-pa-md">
    <div id="titulo" class="text-h5 text-center q-mb-md">Servicios GoldenStar</div>
    <div class="cartas-container">
      <q-card
        v-for="servicio in servicios"
        :key="servicio.id"
        class="q-mb-md servicio-card"
        style="background-color: rgb(160, 186, 177);"
        bordered
      >
        <q-card-section style="background-color: rgb(160, 186, 177)">
          <q-img
            :src="servicio.imagen"
            :alt="servicio.nombre"
            style="height: 200px; object-fit: cover;"
          />
        </q-card-section>
        <q-card-section style="background-color: rgb(160, 186, 177)">
          <div class="text-h6">{{ servicio.nombre }}</div>
          <div>{{ servicio.descripcion }}</div>
        </q-card-section>
        <q-card-actions style="background-color: rgb(160, 186, 177)" align="center">
          <q-btn label="Más información" color="primary" @click="mostrarDetalle(servicio)" />
        </q-card-actions>
      </q-card>
    </div>

    <!-- Detalle del servicio (modal) -->
    <q-dialog v-model="mostrarModal" persistent>
      <q-card v-if="servicioSeleccionado.id">
        <q-card-section>
          <q-img
            :src="servicioSeleccionado.imagen"
            :alt="servicioSeleccionado.nombre"
            style="height: 300px; object-fit: cover;"
          />
        </q-card-section>
        <q-card-section>
          <q-card-title>{{ servicioSeleccionado.nombre }}</q-card-title>
          <div>{{ servicioSeleccionado.detalle }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cerrar" color="primary" @click="cerrarModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
  <div class="footer">
    <h2>GoldenStar Hotel 2024</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servicios: [
        {
          id: 1,
          nombre: "Restaurante Gourmet",
          descripcion: "Disfruta de la mejor gastronomía local e internacional en nuestro restaurante gourmet.",
          detalle: "Nuestro restaurante gourmet ofrece una experiencia culinaria única con platos preparados por chefs de renombre.",
          imagen: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 2,
          nombre: "Spa de Lujo",
          descripcion: "Relájate y renueva tus energías en nuestro spa de lujo con tratamientos exclusivos.",
          detalle: "Nuestro spa de lujo ofrece una variedad de tratamientos relajantes y rejuvenecedores para tu bienestar total.",
          imagen: "https://images.pexels.com/photos/3757657/pexels-photo-3757657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 3,
          nombre: "Piscina Infinity",
          descripcion: "Disfruta de nuestras piscinas infinity con vistas espectaculares que te harán sentir en el paraíso.",
          detalle: "Nuestras piscinas infinity ofrecen una experiencia única con vistas impresionantes y comodidades exclusivas.",
          imagen: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 4,
          nombre: "Centro de Convenciones",
          descripcion: "Organiza eventos exitosos en nuestro moderno centro de convenciones con todas las facilidades necesarias.",
          detalle: "Nuestro centro de convenciones está equipado con tecnología avanzada y ofrece espacios flexibles para eventos de todo tipo.",
          imagen: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ],
      mostrarModal: false,
      servicioSeleccionado: {}
    };
  },
  methods: {
    mostrarDetalle(servicio) {
      this.servicioSeleccionado = servicio;
      this.mostrarModal = true;
    },
    cerrarModal() {
      this.mostrarModal = false;
      this.servicioSeleccionado = {};
    }
  }
};
</script>

<style scoped>
.text-h5 {
  font-size: 24px;
  font-weight: bold;
}

.cartas-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1000px; /* Ajusta el ancho máximo del contenedor */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
}
/* 
.servicio-card {
  flex: 1 1 calc(33.33% - 10px);
  max-width: calc(33.33% - 10px);
} */

#titulo {
  font-size: 35px;
  font-weight: bold;
  margin-left: 0px;
  margin-top: 35px;
  margin-bottom: 0px;
  color: rgb(255, 255, 255);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.footer {
  background-color: rgb(11, 41, 35);
  color: rgb(174, 174, 174);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  height: 70px;
  text-align: center;
}

.footer h2 {
  font-size: 15px !important;
  margin: 0px;
  padding-top: 5px;
}
</style>