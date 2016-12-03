'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var MonitoringArtDatasource, MonitoringArtQueryCtrl, MonitoringArtConfigCtrl, MonitoringArtQueryOptionsCtrl, MonitoringArtAnnotationsQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      MonitoringArtDatasource = _datasource.MonitoringArtDatasource;
    }, function (_query_ctrl) {
      MonitoringArtQueryCtrl = _query_ctrl.MonitoringArtQueryCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', MonitoringArtConfigCtrl = function MonitoringArtConfigCtrl() {
        _classCallCheck(this, MonitoringArtConfigCtrl);
      });

      MonitoringArtConfigCtrl.templateUrl = 'partials/config.html';

      _export('QueryOptionsCtrl', MonitoringArtQueryOptionsCtrl = function MonitoringArtQueryOptionsCtrl() {
        _classCallCheck(this, MonitoringArtQueryOptionsCtrl);
      });

      MonitoringArtQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('AnnotationsQueryCtrl', MonitoringArtAnnotationsQueryCtrl = function MonitoringArtAnnotationsQueryCtrl() {
        _classCallCheck(this, MonitoringArtAnnotationsQueryCtrl);
      });

      MonitoringArtAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

      _export('Datasource', MonitoringArtDatasource);

      _export('QueryCtrl', MonitoringArtQueryCtrl);

      _export('ConfigCtrl', MonitoringArtConfigCtrl);

      _export('QueryOptionsCtrl', MonitoringArtQueryOptionsCtrl);

      _export('AnnotationsQueryCtrl', MonitoringArtAnnotationsQueryCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
