import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel-kursach3-доступ', 'Unit | Model | i-i-s-otel-kursach3-доступ', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otel-kursach3-гости',
    'model:i-i-s-otel-kursach3-должность',
    'model:i-i-s-otel-kursach3-доступ',
    'model:i-i-s-otel-kursach3-комната',
    'model:i-i-s-otel-kursach3-отель',
    'model:i-i-s-otel-kursach3-регистр-записи',
    'model:i-i-s-otel-kursach3-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
