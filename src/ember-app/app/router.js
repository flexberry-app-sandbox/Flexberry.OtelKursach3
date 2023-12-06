import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otel-kursach3-должность-l');
  this.route('i-i-s-otel-kursach3-должность-e',
  { path: 'i-i-s-otel-kursach3-должность-e/:id' });
  this.route('i-i-s-otel-kursach3-должность-e.new',
  { path: 'i-i-s-otel-kursach3-должность-e/new' });
  this.route('i-i-s-otel-kursach3-доступ-l');
  this.route('i-i-s-otel-kursach3-доступ-e',
  { path: 'i-i-s-otel-kursach3-доступ-e/:id' });
  this.route('i-i-s-otel-kursach3-доступ-e.new',
  { path: 'i-i-s-otel-kursach3-доступ-e/new' });
  this.route('i-i-s-otel-kursach3-комната-l');
  this.route('i-i-s-otel-kursach3-комната-e',
  { path: 'i-i-s-otel-kursach3-комната-e/:id' });
  this.route('i-i-s-otel-kursach3-комната-e.new',
  { path: 'i-i-s-otel-kursach3-комната-e/new' });
  this.route('i-i-s-otel-kursach3-отель-l');
  this.route('i-i-s-otel-kursach3-отель-e',
  { path: 'i-i-s-otel-kursach3-отель-e/:id' });
  this.route('i-i-s-otel-kursach3-отель-e.new',
  { path: 'i-i-s-otel-kursach3-отель-e/new' });
  this.route('i-i-s-otel-kursach3-сотрудники-l');
  this.route('i-i-s-otel-kursach3-сотрудники-e',
  { path: 'i-i-s-otel-kursach3-сотрудники-e/:id' });
  this.route('i-i-s-otel-kursach3-сотрудники-e.new',
  { path: 'i-i-s-otel-kursach3-сотрудники-e/new' });
});

export default Router;
