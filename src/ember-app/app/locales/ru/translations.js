import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Otel kursach3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otel kursach3',
          title: 'Otel kursach3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
