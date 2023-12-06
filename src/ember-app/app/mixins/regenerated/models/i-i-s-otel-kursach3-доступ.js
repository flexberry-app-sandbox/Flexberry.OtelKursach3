import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступ: DS.attr('string'),
  кодДоступа: DS.attr('number'),
  комната: DS.belongsTo('i-i-s-otel-kursach3-комната', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-otel-kursach3-сотрудники', { inverse: null, async: false }),
  гости: DS.hasMany('i-i-s-otel-kursach3-гости', { inverse: 'доступ', async: false }),
  регистрЗаписи: DS.hasMany('i-i-s-otel-kursach3-регистр-записи', { inverse: 'доступ', async: false })
});

export let ValidationRules = {
  доступ: {
    descriptionKey: 'models.i-i-s-otel-kursach3-доступ.validations.доступ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДоступа: {
    descriptionKey: 'models.i-i-s-otel-kursach3-доступ.validations.кодДоступа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-otel-kursach3-доступ.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-otel-kursach3-доступ.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-otel-kursach3-доступ.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  регистрЗаписи: {
    descriptionKey: 'models.i-i-s-otel-kursach3-доступ.validations.регистрЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоступE', 'i-i-s-otel-kursach3-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    комната: belongsTo('i-i-s-otel-kursach3-комната', 'Комната', {
      кодКомнаты: attr('Код комнаты', { index: 3, hidden: true }),
      класс: attr('Класс', { index: 4, hidden: true }),
      колвоМест: attr('Колво мест', { index: 5, hidden: true }),
      стоимость: attr('Стоимость', { index: 6, hidden: true })
    }, { index: 2, displayMemberPath: 'кодКомнаты' }),
    сотрудники: belongsTo('i-i-s-otel-kursach3-сотрудники', 'Сотрудники', {
      имя: attr('Имя', { index: 8, hidden: true }),
      фамилия: attr('Фамилия', { index: 9, hidden: true }),
      отчество: attr('Отчество', { index: 10, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    гости: hasMany('i-i-s-otel-kursach3-гости', 'Гости', {
      кодГостя: attr('Код гостя', { index: 0 }),
      имя: attr('Имя', { index: 1 }),
      фамилия: attr('Фамилия', { index: 2 }),
      отчество: attr('Отчество', { index: 3 }),
      комментарий: attr('Комментарий', { index: 4 })
    }),
    регистрЗаписи: hasMany('i-i-s-otel-kursach3-регистр-записи', 'Регистр записи', {
      кодРегитсра: attr('Код регитсра', { index: 0 }),
      датаЗаселения: attr('Дата заселения', { index: 1 }),
      датаВыезда: attr('Дата выезда', { index: 2 })
    })
  });

  modelClass.defineProjection('ДоступL', 'i-i-s-otel-kursach3-доступ', {
    кодДоступа: attr('Код доступа', { index: 0 }),
    доступ: attr('Доступ', { index: 1 }),
    комната: belongsTo('i-i-s-otel-kursach3-комната', 'Код комнаты', {
      кодКомнаты: attr('Код комнаты', { index: 2 }),
      класс: attr('Класс', { index: 3 }),
      колвоМест: attr('Колво мест', { index: 4 }),
      стоимость: attr('Стоимость', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-otel-kursach3-сотрудники', 'Имя', {
      имя: attr('Имя', { index: 6 }),
      фамилия: attr('Фамилия', { index: 7 }),
      отчество: attr('Отчество', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
