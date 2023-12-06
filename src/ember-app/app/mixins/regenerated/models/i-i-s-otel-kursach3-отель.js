import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  кодОтеля: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-otel-kursach3-отель.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодОтеля: {
    descriptionKey: 'models.i-i-s-otel-kursach3-отель.validations.кодОтеля.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-otel-kursach3-отель.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтельE', 'i-i-s-otel-kursach3-отель', {
    адрес: attr('Адрес', { index: 0 }),
    кодОтеля: attr('Код отеля', { index: 1 }),
    наименование: attr('Наименование', { index: 2 })
  });

  modelClass.defineProjection('ОтельL', 'i-i-s-otel-kursach3-отель', {
    адрес: attr('Адрес', { index: 0 }),
    кодОтеля: attr('Код отеля', { index: 1 }),
    наименование: attr('Наименование', { index: 2 })
  });
};
