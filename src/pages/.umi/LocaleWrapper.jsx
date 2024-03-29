
import { _setIntlObject, addLocaleData, IntlProvider, intlShape } from 'umi-plugin-locale';

const InjectedWrapper = (() => {
  let sfc = (props, context) => {
    _setIntlObject(context.intl);
    return props.children;
  };
  sfc.contextTypes = {
    intl: intlShape,
  };
  return sfc;
})();

import 'moment/locale/pt-br';
import 'moment/locale/zh-cn';
import 'moment/locale/zh-tw';

const baseNavigator = true;
const useLocalStorage = true;

import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
let defaultAntd = require('antd/lib/locale-provider/zh_CN');
defaultAntd = defaultAntd.default || defaultAntd;

const localeInfo = {
  'en-US': {
    messages: {
      ...require('D:/somelong/test/ant-design-pro-master/ant-design-pro-master/src/locales/en-US.js').default,
    },
    locale: 'en-US',
    antd: require('antd/lib/locale-provider/en_US'),
    data: require('react-intl/locale-data/en'),
    momentLocale: '',
  },
  'pt-BR': {
    messages: {
      ...require('D:/somelong/test/ant-design-pro-master/ant-design-pro-master/src/locales/pt-BR.js').default,
    },
    locale: 'pt-BR',
    antd: require('antd/lib/locale-provider/pt_BR'),
    data: require('react-intl/locale-data/pt'),
    momentLocale: 'pt-br',
  },
  'zh-CN': {
    messages: {
      ...require('D:/somelong/test/ant-design-pro-master/ant-design-pro-master/src/locales/zh-CN.js').default,
    },
    locale: 'zh-CN',
    antd: require('antd/lib/locale-provider/zh_CN'),
    data: require('react-intl/locale-data/zh'),
    momentLocale: 'zh-cn',
  },
  'zh-TW': {
    messages: {
      ...require('D:/somelong/test/ant-design-pro-master/ant-design-pro-master/src/locales/zh-TW.js').default,
    },
    locale: 'zh-TW',
    antd: require('antd/lib/locale-provider/zh_TW'),
    data: require('react-intl/locale-data/zh'),
    momentLocale: 'zh-tw',
  },
};

let appLocale = {
  locale: 'zh-CN',
  messages: {},
  data: require('react-intl/locale-data/zh'),
  momentLocale: 'zh-cn',
};

const runtimeLocale = window.g_plugins.mergeConfig('locale') || {};
const runtimeLocaleDefault =  typeof runtimeLocale.default === 'function' ? runtimeLocale.default() : runtimeLocale.default;
if (useLocalStorage && localStorage.getItem('umi_locale') && localeInfo[localStorage.getItem('umi_locale')]) {
  appLocale = localeInfo[localStorage.getItem('umi_locale')];
} else if (localeInfo[navigator.language] && baseNavigator){
  appLocale = localeInfo[navigator.language];
} else if(localeInfo[runtimeLocaleDefault]){
  appLocale = localeInfo[runtimeLocaleDefault];
} else {
  appLocale = localeInfo['zh-CN'] || appLocale;
}
window.g_lang = appLocale.locale;
appLocale.data && addLocaleData(appLocale.data);

export default function LocaleWrapper(props) {
  let ret = props.children;
  ret = (<IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
    <InjectedWrapper>{ret}</InjectedWrapper>
  </IntlProvider>)
  ret = (<LocaleProvider locale={appLocale.antd ? (appLocale.antd.default || appLocale.antd) : defaultAntd}>
    {ret}
  </LocaleProvider>);
  return ret;
}
