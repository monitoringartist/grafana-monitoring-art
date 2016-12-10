import {MonitoringArtDatasource} from './datasource';
import {MonitoringArtDatasourceQueryCtrl} from './query_ctrl';

class MonitoringArtConfigCtrl {}
MonitoringArtConfigCtrl.templateUrl = 'partials/config.html';

class MonitoringArtQueryOptionsCtrl {}
MonitoringArtQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

export {
  MonitoringArtDatasource as Datasource,
  MonitoringArtDatasourceQueryCtrl as QueryCtrl,
  MonitoringArtConfigCtrl as ConfigCtrl,
  MonitoringArtQueryOptionsCtrl as QueryOptionsCtrl,
};

