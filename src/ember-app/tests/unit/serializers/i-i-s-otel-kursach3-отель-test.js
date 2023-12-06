import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel-kursach3-отель', 'Unit | Serializer | i-i-s-otel-kursach3-отель', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otel-kursach3-отель',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otel-kursach3-классы',
    'transform:i-i-s-otel-kursach3-места',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
