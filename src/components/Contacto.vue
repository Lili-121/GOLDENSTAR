<template>
  <div class="contacto">
    <div class="overlay">
      <h2 class="titulo">Contáctenos</h2>
      <p>Dirección: Calle Principal #123, San Gil, Santander, Colombia</p>
      <p>Teléfono: +57 123 456 7890</p>
      <p>Email: info@goldenstarhotel.com</p>
      <p id="ultimo">Horarios de atención: Lunes a Domingo, 8:00 AM - 10:00 PM</p>

      <form @submit.prevent="submitForm">
        <q-input class="inpt" filled v-model="name" label="Nombre" style="color: white;" required />
        <q-input class="inpt" filled v-model="email" label="Correo electrónico" type="email" style="color: white;" required />
        <q-input class="inpt" filled v-model="subject" label="Asunto" style="color: white;" required />
        <q-textarea filled v-model="message" label="Mensaje" rows="5" style="color: white;" required />
        <q-btn id="envia" type="submit" label="Enviar" color="brown-12" text-color="black" style="margin-top: 50px; font-weight: bold; width: 150px;"/>
      </form>
    </div>
  </div>
  <div class="footer">
    <h2>GoldenStar Hotel 2024</h2>
  </div>
  <q-btn
    icon="arrow_upward"
    @click="scrollToTop"
    class="scroll-to-top"
    fab
    color="primary"
  />
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const slide = ref(1);
    const name = ref('');
    const email = ref('');
    const subject = ref('');
    const message = ref('');

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const submitForm = () => {
      // Aquí podrías manejar el envío del formulario
      alert(`Mensaje enviado por ${name.value}`);
    };

    onMounted(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 6.557, lng: -73.131 },
        zoom: 15,
      });
      new google.maps.Marker({
        position: { lat: 6.557, lng: -73.131 },
        map,
        title: 'Golden Star Hotel',
      });
    });

    // Enlace de Google Maps que deseas usar
    const googleMapsLink = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.897618750012!2d-73.15471936523437!3d6.554824000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69c72715c3eca9%3A0xa03bfda06440ee00!2sSan%20Gil%2C%20Santander!5e0!3m2!1ses!2sco!4v1718922501897!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    return {
      slide,
      name,
      email,
      subject,
      message,
      scrollToTop,
      submitForm,
      googleMapsLink,
    };
  },
};
</script>

<style scoped>
.contacto {
  position: relative;
  text-align: center;
  background-image: url(https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  background-size: cover;
  padding: 20px;
}

.overlay {
  position: relative;
  background-color: rgba(0, 0, 0, 0.6); /* Película transparente */
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.contacto form {
  max-width: 600px;
  margin: auto;
}

#map {
  height: 400px;
  width: 100%;
  margin-top: 20px;
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

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: rgb(12, 104, 73) !important;
}

.titulo {
  font-size: 35px;
  font-weight: bold;
  margin-left: 0px;
  margin-top: 35px;
  margin-bottom: 30px;
  color: rgb(255, 255, 255); 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#ultimo{
  margin-bottom: 50px;
}

</style>