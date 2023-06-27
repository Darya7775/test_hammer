import * as Icon from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: '',
  breadcrumb: true,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards',
      path: `${APP_PREFIX_PATH}/dashboards`,
      title: 'sidenav.dashboard',
      icon: Icon.DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: Icon.ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-catalog-goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'sidenav.main.catalog.goods',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'sidenav.main.catalog.categories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'sidenav.main.catalog.collections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: Icon.ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-scheduler',
      path: `${APP_PREFIX_PATH}/main/scheduler`,
      title: 'sidenav.main.scheduler',
      icon: Icon.ApartmentOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.clients',
      icon: Icon.UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-clients-clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/clients-list`,
          title: 'sidenav.main.clients.clients-list',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clients-customer-groups',
          path: `${APP_PREFIX_PATH}/main/clients/customer-groups`,
          title: 'sidenav.main.clients.customer-groups',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: Icon.PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promo-codes',
      path: `${APP_PREFIX_PATH}/main/promo_codes`,
      title: 'sidenav.main.promoCodes',
      icon: Icon.GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offline-points',
      path: `${APP_PREFIX_PATH}/main/offline_points`,
      title: 'sidenav.main.offlinePoints',
      icon: Icon.ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offline-points-addresses',
          path: `${APP_PREFIX_PATH}/main/offline_points/addresses`,
          title: 'sidenav.main.offlinePoints.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        }, 
        {
          key: 'main-offline-points-geofences',
          path: `${APP_PREFIX_PATH}/main/offline_points/geofences`,
          title: 'sidenav.main.offlinePoints.geofences',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: Icon.UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-distribution',
      path: `${APP_PREFIX_PATH}/main/distribution`,
      title: 'sidenav.main.distribution',
      icon: Icon.MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}];

const systemicNavTree = [{
  key: 'systemic',
  path: `${APP_PREFIX_PATH}/systemic`,
  title: 'sidenav.systemic',
  icon: '',
  breadcrumb: true,
  isGroupTitle: true,
  submenu: [
    {
      key: 'systemic-settings',
      path: `${APP_PREFIX_PATH}/systemic/settings`,
      title: 'sidenav.systemic.settings',
      icon: Icon.SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systemic-mobile-app',
      path: `${APP_PREFIX_PATH}/systemic/mobile_app`,
      title: 'sidenav.systemic.mobileApp',
      icon: Icon.TabletOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systemic-logs',
      path: `${APP_PREFIX_PATH}/systemic/logs`,
      title: 'sidenav.systemic.logs',
      icon: Icon.FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }]
}];

const navigationConfig = [
  ...mainNavTree,
  ...systemicNavTree
];

export default navigationConfig;