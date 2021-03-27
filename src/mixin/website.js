import { equals } from "ramda";
import { siteType } from "@/constant/website";

const computed = {
  /* 崎崎網站 */
  isChiNav() {
    return equals(this.$route.meta.genre, siteType.chi)
  },
  /* 十校聯展網站 */
  isSchoolNav() {
    return equals(this.$route.meta.genre, siteType.school)
  },
}

export default {
  computed
}