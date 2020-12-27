import colors from 'vuetify/es5/util/colors'
import IonicIcon from '~/components/IonicIcon'

export default {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.red,
        test: colors.blue
      }
    }
  },
  icons: {
    values: {
      ionic: {
        component: IonicIcon
      }
    }
  }
}
