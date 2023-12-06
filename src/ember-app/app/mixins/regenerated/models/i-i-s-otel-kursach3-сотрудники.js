import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодСотрудника: DS.attr('number'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-otel-kursach3-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-otel-kursach3-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-otel-kursach3-сотрудники.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-otel-kursach3-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-otel-kursach3-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-otel-kursach3-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-otel-kursach3-сотрудники', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    должность: belongsTo('i-i-s-otel-kursach3-должность', 'Должность', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-otel-kursach3-сотрудники', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    имя: attr('Имя', { index: 1 }),
    фамилия: attr('Фамилия', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    должность: belongsTo('i-i-s-otel-kursach3-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
