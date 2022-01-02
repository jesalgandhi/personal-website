<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  <v-container>
    <v-row>
      <v-col>
        <v-footer class='slide-in-bottom pb-6'>
          <v-row>
            <v-col
              class="text-center black white--text shadow-drop-center"
              id='footer-inner'
              cols="12"
              >
              <router-link to='/' v-show="isResumePage==true" 
                class='pr-2'
                style='text-decoration:none'>
                <v-btn
                  fab
                  x-small
                  color="white"
                  class='text-md font-weight-bold'
                >
                  <span>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            color="black"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            mdi-home
                          </v-icon>
                        </template>
                        <span>Home</span>
                      </v-tooltip>
                    </span>
                </v-btn>
              </router-link>
              <strong> Jesal Gandhi </strong> © {{ new Date().getFullYear() }}
              <span v-show="isResumePage==false">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="white"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class='pb-2 pl-1 pt-1'
                      >
                      mdi-image-area
                    </v-icon>
                  </template>
                  <span>Reload the page for a new image!</span>
                </v-tooltip>
              </span>
              <span class='pl-3' v-show="isResumePage==true">
                <a href="resume.pdf" download='Jesal Gandhi - Resume.pdf' style='text-decoration:none;'>
                  <v-btn
                    fab
                    x-small
                    color="blue"
                    class='text-md font-weight-bold'
                  >
                    <span>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            color="white"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            mdi-download
                          </v-icon>
                        </template>
                        <span>Download</span>
                      </v-tooltip>
                    </span>
                  </v-btn>
                </a>
              </span>
            </v-col>
          </v-row>
        </v-footer>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<style scoped>

  v-footer   {
    height: 150px
  }

  #footer-inner {
    border-radius: 30px 30px 30px 30px;
    width:150px
  }

  .slide-in-bottom {
	-webkit-animation: slide-in-bottom 1.4s cubic-bezier(.67,.15,.35,.95) 1.6s both;
        animation: slide-in-bottom 1.4s cubic-bezier(.67,.15,.35,.95) 1.6s both;
  }

  @-webkit-keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
              transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }
@keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
              transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  .shadow-drop-center {
    -webkit-animation: shadow-drop-center 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 3s both;
          animation: shadow-drop-center 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 3s both;
  }

  @-webkit-keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.35);
              box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.35);
              box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.35);
    }
  }

</style>

<script>
import data from './components/MainCard.vue'

export default {
  name: 'App',

  data: () => ({
    pexels: data()
  }),

  computed: {
    isResumePage() {
      return this.$route.name == 'Resume' 
    }
  }
}
</script>
