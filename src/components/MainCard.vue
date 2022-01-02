<template>
  <v-container id="main-card-container" class='pt-0 slide-bottom'>
    <v-row>
      <v-col
        cols="12"
      >
          <v-img
            max-height="800"
            max-width="1800"
            :src="info['photos'][photo_num]['src']['large2x']"
            alt="https://wallpapersmug.com/u/1296ef/colorful-huawei-matebook.jpg"
            id='main-card'
            transition='none'
            class='shadow-drop-center'
          >
          <v-container fill-height fluid class='card-content fade-in pl-4'>
            <v-row align="center" justify="center" v-bind:style="{color: textColor}">
              <v-col>
                <h1 class="display-4 font-weight-bold text-sm-left" id='main-title'>
                  Hi, my name is Jesal Gandhi.
                </h1>
                <h1 class="display-2 text-sm-left mt-2 mb-3 ml-1" id='sub-title'>
                  I am a student at Stevens Institute of Technology.
                </h1>
                <v-row>
                  <v-col >
                    <router-link style="text-decoration: none;" to='/resume'>
                    <v-btn
                      rounded
                      x-large
                      color="white"
                      class='text-md font-weight-bold'
                      style='width:315px'
                      
                    >
                      My Resume
                      
                    </v-btn>
                    </router-link>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="mx-2"
                          fab
                          large
                          color="white"
                          v-bind="attrs"
                          v-on="on"
                          target='_blank'
                          href='https://www.linkedin.com/in/jesal-gandhi-60bb91218/'
                        >
                          <v-icon dark x-large>
                            mdi-linkedin
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>LinkedIn</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="mx-2"
                          fab
                          large
                          color="white"
                          v-bind="attrs"
                          v-on="on"
                          target='_blank'
                          href='https://github.com/jesalgandhi'
                        >
                          <v-icon dark x-large>
                            mdi-github
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>GitHub</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="mx-2"
                          fab
                          large
                          color="white"
                          v-bind="attrs"
                          v-on="on"
                          target='_blank'
                          href='https://www.youtube.com/channel/UCUyWmXcMVrz4W7fjGHe2vPg'
                        >
                          <v-icon dark x-large>
                            mdi-youtube
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>YouTube</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="mx-2"
                          fab
                          large
                          color="white"
                          v-bind="attrs"
                          v-on="on"
                          href='mailto:jesalgandhi9988@gmail.com'
                        >
                          <v-icon dark x-large>
                            mdi-email
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Email</span>
                    </v-tooltip>
                      <v-col>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <span class='pt-2'>
                              <v-chip
                                link
                                small
                                outlined
                                v-bind="attrs"
                                v-on="on"
                                v-bind:href="info['photos'][photo_num]['url']"
                                target='_blank'
                                v-bind:color="textColor"
                              >
                              Photo provided by Pexels.
                              </v-chip>
                            </span>
                          </template>
                        <span>Photo by {{ info['photos'][photo_num]['photographer'] }}</span>
                        </v-tooltip>
                    </v-col>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>            
          </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>



<style scoped>
  @font-face {
    font-family: "Metro";
    src: url('https://mdn.mozillademos.org/files/2468/VeraSeBd.ttf');
  }

  #main-card {
    border-radius: 0px 0px 30px 30px;
    /* box-shadow: 2px 2px 2px 2px grey; */
  }

  body {
    font-family: 'Metro';
  }

  .slide-bottom {
    -webkit-animation: slide-bottom 1.3s cubic-bezier(.67,.15,.35,.95);
    animation: slide-bottom 1.3s cubic-bezier(.67,.15,.35,.95);
  }

  /* ----------------------------------------------
 * Generated by Animista on 2021-12-28 22:11:58
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-200px);
            transform: translateY(-200px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}
@keyframes slide-bottom {
  0% {
    
    -webkit-transform: translateY(-200px);
            transform: translateY(-200px);
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
}



.shadow-drop-center {
	-webkit-animation: shadow-drop-center 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 1.5s both;
        animation: shadow-drop-center 0.6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 1.5s both;
}
/**
 * ----------------------------------------
 * animation shadow-drop-center
 * ----------------------------------------
 */
@-webkit-keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.55);
            box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.55);
  }
}
@keyframes shadow-drop-center {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.55);
            box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.55);
  }
}

  .fade-in {
	-webkit-animation: fade-in .6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 1.5s both;
        animation: fade-in .6s cubic-bezier(0.550, 0.055, 0.675, 0.190) 1.5s both;
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } 
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script>

require('dotenv').config();
import { createClient } from 'pexels';
const { contrastColor } = require('contrast-color');

const api_key = `${process.env.VUE_APP_API_KEY}`
const client = createClient(api_key);
const results_per_page = 30
const queries = ['Nature','Abstract','Texture','Pattern','Background']
const query = queries[Math.floor(Math.random() * queries.length)] // Random query from queries


  export default {
    name: 'MainCard',

    data: () => ({
      info: null,
      photo_index: null,
      textColor: null,
      photo_num: null
    }),

    mounted () {
      client.photos.search({ query, color: ! 'white', per_page: results_per_page }).then(photos => {
        this.info = photos // Populates info with API call
        this.photo_index = Math.floor(Math.random() * results_per_page) // Random result from API call
        this.photo_num = Math.floor(Math.random() * (results_per_page - 1))
        this.textColor = contrastColor({ bgColor: photos['photos'][this.photo_num]['avg_color'] })
      });
    },
  }

</script>
