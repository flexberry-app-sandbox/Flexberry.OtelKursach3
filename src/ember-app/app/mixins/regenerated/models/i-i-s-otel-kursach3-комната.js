import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  класс: DS.attr('i-i-s-otel-kursach3-классы'),
  кодКомнаты: DS.attr('number'),
  колвоМест: DS.attr('i-i-s-otel-kursach3-места'),
  стоимость: DS.attr('number'),
  отель: DS.belongsTo('i-i-s-otel-kursach3-отель', { inverse: null, async: false })
});

export let ValidationRules = {
  класс: {
    descriptionKey: 'models.i-i-s-otel-kursach3-комната.validations.класс.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКомнаты: {
    descriptionKey: 'models.i-i-s-otel-kursach3-комната.validations.кодКомнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  колвоМест: {
    descriptionKey: 'models.i-i-s-otel-kursach3-комната.validations.колвоМест.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-otel-kursach3-комната.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отель: {
    descriptionKey: 'models.i-i-s-otel-kursach3-комната.validations.отель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-otel-kursach3-комната', {
    кодКомнаты: attr('Код комнаты', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    класс: attr('Класс', { index: 2 }),
    колвоМест: attr('Колво мест', { index: 3 }),
    отель: belongsTo('i-i-s-otel-kursach3-отель', 'Отель', {
      адрес: attr('Адрес', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'адрес' })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-otel-kursach3-комната', {
    кодКомнаты: attr('Код комнаты', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 }),
    класс: attr('Класс', { index: 2 }),
    колвоМест: attr('Колво мест', { index: 3 }),
    отель: belongsTo('i-i-s-otel-kursach3-отель', 'Адрес', {
      адрес: attr('Адрес', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
