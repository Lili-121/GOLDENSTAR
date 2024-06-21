<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-center q-mb-md">Bienvenido a Golden Star Hotel</div>
    
    <!-- Cartas interactivas -->
    <q-card
      v-for="servicio in servicios"
      :key="servicio.id"
      class="q-mb-md"
      style="max-width: 400px;"
      bordered
    >
      <q-card-section>
        <q-img
          :src="servicio.imagen"
          :alt="servicio.nombre"
          style="height: 200px; object-fit: cover;"
        />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">{{ servicio.nombre }}</div>
        <div>{{ servicio.descripcion }}</div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="Más información" color="primary" @click="mostrarDetalle(servicio)" />
      </q-card-actions>
    </q-card>

    <!-- Detalle del servicio (modal) -->
    <q-dialog v-model="mostrarModal" persistent>
      <q-card>
        <q-card-section>
          <q-card-title>{{ servicioSeleccionado.nombre }}</q-card-title>
        </q-card-section>
        <q-card-section>
          <div>{{ servicioSeleccionado.detalle }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Cerrar" color="primary" @click="cerrarModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      servicios: [
        {
          id: 1,
          nombre: "Paracaidismo",
          descripcion: "Experimenta la adrenalina de saltar desde grandes alturas con nuestro servicio de paracaidismo.",
          detalle: "El paracaidismo en Golden Star te ofrece la oportunidad única de saltar desde aviones a gran altura y disfrutar de vistas espectaculares.",
          imagen: ""
        },
        {
          id: 2,
          nombre: "Rafting en Aguas Bravas",
          descripcion: "Enfréntate a emocionantes rápidos en nuestro servicio de rafting en aguas bravas.",
          detalle: "El rafting en Golden Star te lleva a través de emocionantes rápidos en ríos cercanos, proporcionando una experiencia llena de acción y diversión.",
          imagen: ""
        },
        {
          id: 3,
          nombre: "Escalada en Roca",
          descripcion: "Desafía tus habilidades físicas y mentales con nuestro servicio de escalada en roca.",
          detalle: "La escalada en roca en Golden Star te ofrece rutas desafiantes y vistas panorámicas, ideal para los amantes de la aventura y la naturaleza.",
          imagen: ""
        },
        {
          id: 4,
          nombre: "Buceo en Arrecifes",
          descripcion: "Explora el mundo submarino con nuestro servicio de buceo en arrecifes.",
          detalle: "El buceo en arrecifes en Golden Star te sumerge en aguas cristalinas llenas de vida marina, ofreciendo una experiencia inolvidable para los amantes del mar.",
          imagen: ""
        },
        {
          id: 5,
          nombre: "Parapente",
          descripcion: "Vuela como un pájaro y disfruta de vistas panorámicas con nuestro servicio de parapente.",
          detalle: "El parapente en Golden Star te permite volar en tandem con expertos, disfrutando de vistas impresionantes de paisajes naturales y urbanos.",
          imagen: ""
        },
        {
          id: 6,
          nombre: "Ciclismo de Montaña",
          descripcion: "Recorre senderos desafiantes y paisajes naturales con nuestro servicio de ciclismo de montaña.",
          detalle: "El ciclismo de montaña en Golden Star te lleva a través de senderos variados y emocionantes, perfecto para explorar la naturaleza y la aventura al aire libre.",
          imagen: ""
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
</style>