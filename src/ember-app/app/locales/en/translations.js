import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtelKursach3ДолжностьLForm from './forms/i-i-s-otel-kursach3-должность-l';
import IISOtelKursach3ДоступLForm from './forms/i-i-s-otel-kursach3-доступ-l';
import IISOtelKursach3КомнатаLForm from './forms/i-i-s-otel-kursach3-комната-l';
import IISOtelKursach3ОтельLForm from './forms/i-i-s-otel-kursach3-отель-l';
import IISOtelKursach3СотрудникиLForm from './forms/i-i-s-otel-kursach3-сотрудники-l';
import IISOtelKursach3ДолжностьEForm from './forms/i-i-s-otel-kursach3-должность-e';
import IISOtelKursach3ДоступEForm from './forms/i-i-s-otel-kursach3-доступ-e';
import IISOtelKursach3КомнатаEForm from './forms/i-i-s-otel-kursach3-комната-e';
import IISOtelKursach3ОтельEForm from './forms/i-i-s-otel-kursach3-отель-e';
import IISOtelKursach3СотрудникиEForm from './forms/i-i-s-otel-kursach3-сотрудники-e';
import IISOtelKursach3ГостиModel from './models/i-i-s-otel-kursach3-гости';
import IISOtelKursach3ДолжностьModel from './models/i-i-s-otel-kursach3-должность';
import IISOtelKursach3ДоступModel from './models/i-i-s-otel-kursach3-доступ';
import IISOtelKursach3КомнатаModel from './models/i-i-s-otel-kursach3-комната';
import IISOtelKursach3ОтельModel from './models/i-i-s-otel-kursach3-отель';
import IISOtelKursach3РегистрЗаписиModel from './models/i-i-s-otel-kursach3-регистр-записи';
import IISOtelKursach3СотрудникиModel from './models/i-i-s-otel-kursach3-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otel-kursach3-гости': IISOtelKursach3ГостиModel,
    'i-i-s-otel-kursach3-должность': IISOtelKursach3ДолжностьModel,
    'i-i-s-otel-kursach3-доступ': IISOtelKursach3ДоступModel,
    'i-i-s-otel-kursach3-комната': IISOtelKursach3КомнатаModel,
    'i-i-s-otel-kursach3-отель': IISOtelKursach3ОтельModel,
    'i-i-s-otel-kursach3-регистр-записи': IISOtelKursach3РегистрЗаписиModel,
    'i-i-s-otel-kursach3-сотрудники': IISOtelKursach3СотрудникиModel
  },

  'application-name': 'Otel kursach3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Otel kursach3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otel kursach3',
          title: 'Otel kursach3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        доступ: {
          caption: 'Доступ',
          title: 'Доступ',
          'i-i-s-otel-kursach3-доступ-l': {
            caption: 'Доступ',
            title: ''
          }
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-otel-kursach3-отель-l': {
            caption: 'Отель',
            title: 'Отель'
          },
          'i-i-s-otel-kursach3-комната-l': {
            caption: 'Комната',
            title: 'Комната'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-otel-kursach3-должность-l': {
            caption: 'Должность',
            title: 'Должность'
          },
          'i-i-s-otel-kursach3-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          }
        },
        'otel-kursach3': {
          caption: 'OtelKursach3',
          title: 'OtelKursach3',
          'i-i-s-otel-kursach3-отель-l': {
            caption: 'Отель',
            title: ''
          },
          'i-i-s-otel-kursach3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-otel-kursach3-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-otel-kursach3-доступ-l': {
            caption: 'Доступ',
            title: ''
          },
          'i-i-s-otel-kursach3-комната-l': {
            caption: 'Комната',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-otel-kursach3-должность-l': IISOtelKursach3ДолжностьLForm,
    'i-i-s-otel-kursach3-доступ-l': IISOtelKursach3ДоступLForm,
    'i-i-s-otel-kursach3-комната-l': IISOtelKursach3КомнатаLForm,
    'i-i-s-otel-kursach3-отель-l': IISOtelKursach3ОтельLForm,
    'i-i-s-otel-kursach3-сотрудники-l': IISOtelKursach3СотрудникиLForm,
    'i-i-s-otel-kursach3-должность-e': IISOtelKursach3ДолжностьEForm,
    'i-i-s-otel-kursach3-доступ-e': IISOtelKursach3ДоступEForm,
    'i-i-s-otel-kursach3-комната-e': IISOtelKursach3КомнатаEForm,
    'i-i-s-otel-kursach3-отель-e': IISOtelKursach3ОтельEForm,
    'i-i-s-otel-kursach3-сотрудники-e': IISOtelKursach3СотрудникиEForm
  },

});

export default translations;
