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
          caption: i18n.t('forms.application.sitemap.доступ.caption'),
          title: i18n.t('forms.application.sitemap.доступ.title'),
          children: [{
            link: 'i-i-s-otel-kursach3-доступ-l',
            caption: i18n.t('forms.application.sitemap.доступ.i-i-s-otel-kursach3-доступ-l.caption'),
            title: i18n.t('forms.application.sitemap.доступ.i-i-s-otel-kursach3-доступ-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-otel-kursach3-отель-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel-kursach3-отель-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel-kursach3-отель-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-otel-kursach3-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-otel-kursach3-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-otel-kursach3-комната-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-otel-kursach3-должность-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel-kursach3-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel-kursach3-должность-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-otel-kursach3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel-kursach3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-otel-kursach3-сотрудники-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})