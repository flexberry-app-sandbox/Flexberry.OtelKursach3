import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import МестаEnum from '../enums/i-i-s-otel-kursach3-места';

export default FlexberryEnum.extend({
  enum: МестаEnum,
  sourceType: 'IIS.OtelKursach3.Места'
});
