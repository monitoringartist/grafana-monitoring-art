import {MonitoringArtDatasource} from './datasource';
import {MonitoringArtQueryCtrl} from './query_ctrl';

class MonitoringArtConfigCtrl {}
MonitoringArtConfigCtrl.templateUrl = 'partials/config.html';

class MonitoringArtQueryOptionsCtrl {}
MonitoringArtQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

class MonitoringArtAnnotationsQueryCtrl {}
MonitoringArtAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'

export {
  MonitoringArtDatasource as Datasource,
  MonitoringArtQueryCtrl as QueryCtrl,
  MonitoringArtConfigCtrl as ConfigCtrl,
  MonitoringArtQueryOptionsCtrl as QueryOptionsCtrl,
  MonitoringArtAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
