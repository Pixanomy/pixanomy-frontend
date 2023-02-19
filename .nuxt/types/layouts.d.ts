import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "no-live"
declare module "C:/Users/Basti/OneDrive/Documents/My Websites/Handmade Sites/Javascript-Projects/Nuxt-Projects/Applications/AlternateCMS-Framework/TheMeeoviCompany-Sites/pixanomy-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}