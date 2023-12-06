import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВыезда: DS.attr('date'),
  датаЗаселения: DS.attr('date'),
  кодРегитсра: DS.attr('number'),
  доступ: DS.belongsTo('i-i-s-otel-kursach3-доступ', { inverse: 'регистрЗаписи', async: false })
});

export let ValidationRules = {
  датаВыезда: {
    descriptionKey: 'models.i-i-s-otel-kursach3-регистр-записи.validations.датаВыезда.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаЗаселения: {
    descriptionKey: 'models.i-i-s-otel-kursach3-регистр-записи.validations.датаЗаселения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодРегитсра: {
    descriptionKey: 'models.i-i-s-otel-kursach3-регистр-записи.validations.кодРегитсра.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доступ: {
    descriptionKey: 'models.i-i-s-otel-kursach3-регистр-записи.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрЗаписиE', 'i-i-s-otel-kursach3-регистр-записи', {
    кодРегитсра: attr('Код регитсра', { index: 0 }),
    датаЗаселения: attr('Дата заселения', { index: 1 }),
    датаВыезда: attr('Дата выезда', { index: 2 })
  });
};
