import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.otel-kursach3.caption'),
          title: i18n.t('forms.application.sitemap.otel-kursach3.title'),
          children: [{
            link: 'i-i-s-otel-kursach3-отель-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-отель-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-отель-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-otel-kursach3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-сотрудники-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-otel-kursach3-должность-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-должность-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-otel-kursach3-доступ-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-доступ-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-otel-kursach3-комната-l',
            caption: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.otel-kursach3.i-i-s-otel-kursach3-комната-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})