<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite>
      <q-carousel-slide :name="1" img-src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <q-carousel-slide :name="2" img-src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <q-carousel-slide :name="3" img-src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <q-carousel-slide :name="4" img-src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </q-carousel>
  </div>
  <div class="contenedor1">
    <h1 id="titulo">Bienvenidos a Golden Star</h1>
    <p id="text">Nos complace darle la bienvenida a nuestro refugio de lujo y confort, donde cada detalle ha sido cuidadosamente diseñado para brindarle una experiencia inolvidable. Ubicado en el corazón de San Gil Santander, nuestro hotel combina elegancia, modernidad y el encanto local para ofrecerle un oasis de tranquilidad y sofisticación.</p>
    <p id="text">Disfrute de nuestras instalaciones de primera clase, desde habitaciones exquisitamente decoradas y restaurantes gourmet, hasta nuestro relajante spa y espectaculares vistas. Ya sea que esté aquí por negocios o por placer, nuestro dedicado equipo está a su disposición para asegurarse de que su estancia sea perfecta.
    Gracias por elegir Golden Star. Esperamos que disfrute de su estancia con nosotros y se sienta como en casa.</p>
  </div>
  <div class="informacion">
    <div class="card-wrapper">
      <q-card class="my-card">
        <q-img src="https://media.istockphoto.com/id/1457724042/es/foto/familia-asi%C3%A1tica-feliz-que-disfruta-de-actividades-en-la-playa-durante-las-vacaciones-de.jpg?s=612x612&w=0&k=20&c=WFchTwEUsCHEgy1PVnLzvu3CvcJ-PYdosz1r9hyNKrQ=">
          <div class="absolute-bottom text-h6">
            Golden Star
          </div>
        </q-img>
        <q-card-section>
          {{ lorem1 }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-img src="https://plus.unsplash.com/premium_photo-1661301025064-4254e5b04311?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <div class="absolute-bottom text-h6">
            Golden Star
          </div>
        </q-img>
        <q-card-section>
          {{ lorem2 }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <div class="absolute-bottom text-h6">
            Golden Star
          </div>
        </q-img>
        <q-card-section>
          {{ lorem3 }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <div class="absolute-bottom text-h6">
            Golden Star
          </div>
        </q-img>
        <q-card-section>
          {{ lorem4 }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <q-btn class="btn2" to="/" color="brown-11" text-color="black" label="Registrarse" />
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
import { ref } from 'vue'

export default {
  setup() {
    const slide = ref(1);
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return {
      slide,
      scrollToTop,
      lorem1: 'Un lugar donde la familia se siente como en casa. Descubre nuestro ambiente cálido y acogedor diseñado para crear recuerdos inolvidables juntos.',
      lorem2: 'Nuestro hotel ofrece un ambiente tranquilo y productivo, donde cada rincón se convierte en tu propia oficina lejos de la oficina.',
      lorem3: 'Sumérgete en la serenidad de nuestras cristalinas aguas, donde el tiempo se detiene y los momentos se vuelven eternos.',
      lorem4: 'Descubre una experiencia gastronómica que deleitará tus sentidos, donde cada plato es una obra maestra culinaria y cada bocado es un viaje de sabores.',
    }
  }
}
</script>

<style scoped>
#titulo {
  font-size: 35px;
  font-weight: bold;
  margin-left: 0px;
  margin-top: 15px;
  margin-bottom: 0px;
  color: rgb(255, 255, 255); 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#text {
  margin-left: 70px;
  margin-right: 70px;
  text-align: justify;
  font-size: 17px;
  color: black;
  font-weight: 500;
}

.q-pa-md {
  padding: 0px;
}

.contenedor1 {
  text-align: center;
  background-color: rgb(111, 139, 129) !important;
  margin-left: 20px;
  margin-right: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-bottom: 20px;
}

.my-card {
  width: 100%;
  max-width: 352px;
  text-align: justify;
  background-color: rgb(160, 186, 177);
  font-weight: 500;
}

.informacion {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.btn2 {
  width: 400px;
  display: block;
  margin: 35px auto 50px auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  background-color: rgb(195, 168, 98) !important;
}

.footer{
  background-color: rgb(11, 41, 35);
  color: rgb(174, 174, 174); 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  height: 70px;
  text-align: center;
}

.footer h2{
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
</style>