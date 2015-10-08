'use strict';

angular.module('duskyStar.version', [
  'duskyStar.version.interpolate-filter',
  'duskyStar.version.version-directive'
])

.value('version', '0.1');
