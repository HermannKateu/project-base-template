import { createApp } from 'vue';
import  { createI18n } from "vue-i18n";
import { createPinia } from 'pinia';

import App from './App.vue';
import './index.css';
import router from './router';
import i18nMessages from "./i18n.json";

const defaultLanguage = (): string => {
    const result = navigator.language.split("-")[0];
    if (result !== "fr") {
      return "en";
    }
    return result;
  };
  
  const locale = defaultLanguage();
  
  const i18n =  createI18n({
    locale,
    legacy: false,
    fallbackLocale: "en",
    messages: i18nMessages,
  });
  

createApp(App)
.use(i18n)
.use(createPinia())
.use(router)
.mount('#app')
