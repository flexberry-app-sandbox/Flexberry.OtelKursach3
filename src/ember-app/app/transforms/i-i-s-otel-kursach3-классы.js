import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КлассыEnum from '../enums/i-i-s-otel-kursach3-классы';

export default FlexberryEnum.extend({
  enum: КлассыEnum,
  sourceType: 'IIS.OtelKursach3.Классы'
});
