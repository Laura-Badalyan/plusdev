export const PATHS = {
  ROOT: '/',
  UI: '/ui',
  SIGN_IN: '/sign-in',
  FORGOT_PASSWORD: 'forgot-password',
  RECOVER_PASSWORD: 'recover-password',
  ERROR_403: 'no-access',
  DASHBOARD: '/applications',
  APPLICATIONS: '/applications',
  APPLICATIONS_VIEW: '/applications/view/:id',
};

export const COLORS = {
  PRIMARY: {
    BLUE: '#456FAE',
    BLUE_LIGHT: '#DBE9FD',
    BLUE_DARK: '#091024',
    GRAY_DARK: '#414141',
    GRAY: '#808080',
    GRAY_LIGHT: '#969393',
    WHITE: '#FFFFFF',
    SILVER: '#BFBFBF',
    SILVER_LIGHT: '#E2E0E8',
  },
  ALERT: {
    RED: '#ed1b1b',
    GRAY: '#808080',
    GREEN: '#5ACA75',
  },
  SECONDARY: {
    BLUE: '#4D7EC7',
    BLUE_LIGHT: '#59CFDF',
    CYAN: '#4DC7B5',
    MAGENTA: '#F27281',
    MAGENTA_LIGHT: '#D789D9',
    YELLOW: '#F5B452',
    YELLOW_LIGHT: '#EDE06D',
    GRAY_LIGHT: '#8A91AE',
    MAXIMUM_BLUE: '#4DAAC7',
    GREEN_LIGHT: '#4DC78C',
    BLUE_MEDIUM: '#7F6DED',
    LAVANDER: '#AC89D9',
    PURPLE_MIDDLE: '#D989AF',
    PEARL_AQUA: '#89D9C6',
    PASTEL_BLUE: '#B8D4D6',
    PURPLE_BLUE: '#A2ACDE',
    AERO_BLUE: '#BBDACB',
    LAVANDER_DARKL: '#C7BDD4',
    PINK: '#DBAFA1',
  },
};

export const AUTH_KEYS = {
  USER: 'npast-admin-user',
  TOKEN: 'npast-admin-token',
};

export const VARIABLES = {
  MAX_PROJECT_TITLE_LENGTH: 15,
};

export const DEFAULT_ICON = 'logo-small';
export const DEFAULT_COLOR = COLORS.PRIMARY.GRAY_LIGHT;

export const screenSize = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export const PAGE_SIZE = 10;
export const PAGE_NUMBER = 1;
export const DEFAULT_PAGE = { pageNumber: PAGE_NUMBER, pageSize: PAGE_SIZE };

export const USER_TYPES = {
  0: 'Սուպեր ադմինիստրատոր',
  1: 'ՄՍԾ ղեկավար',
};
export const USERS = {
  ADMIN: 0,
  MSC_HEAD: 1,
  VIEWER: 2,
  MSC_VIEWER: 3,
};


export const VALIDATE_MESSAGES = {
  required: 'Պարտադիր դաշտ',
  types: {
    email: '${label} դաշտը վավեր չէ',
    number: '${label} դաշտը վավեր չէ',
  },
  number: {
    range: '${label}ը պետք է լինի ${min} և ${max}',
  },
};
export const phonePattern = /^\+374\d{8}$/;

export const DATE_FORMAT_YYYYMMDD = 'DD/MM/YYYY';
export const DATE_FORMAT_YYYY_MM_DD = 'YYYY-MM-DD';

export const ACTIONS = {
  VIEW: 'view',
  EDIT: 'edit',
};
