define('stations-editor/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('stations-editor/tests/components/create-pr.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/create-pr.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/create-pr.js should pass jshint.');
  });
});
define('stations-editor/tests/components/station-autocomplete.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/station-autocomplete.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/station-autocomplete.js should pass jshint.');
  });
});
define('stations-editor/tests/components/station-checkbox.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/station-checkbox.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/station-checkbox.js should pass jshint.');
  });
});
define('stations-editor/tests/components/station-details.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/station-details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/station-details.js should pass jshint.');
  });
});
define('stations-editor/tests/components/station-map.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/station-map.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/station-map.js should pass jshint.');
  });
});
define('stations-editor/tests/components/station-text-input.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/station-text-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/station-text-input.js should pass jshint.');
  });
});
define('stations-editor/tests/components/user-navbar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/user-navbar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-navbar.js should pass jshint.');
  });
});
define('stations-editor/tests/dummy/config/environment', ['exports'], function (exports) {
    /* global ENV, environment */
    if (environment === 'production') {
        ENV.baseURL = '/stations-studio';
    }
});
define('stations-editor/tests/dummy/config/environment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - dummy/config/environment.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/config/environment.js should pass jshint.');
  });
});
define('stations-editor/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('stations-editor/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('stations-editor/tests/helpers/ember-power-select', ['exports', 'ember'], function (exports, _ember) {
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;

  // Helpers for integration tests

  function typeText(selector, text) {
    $(selector).val(text);
    $(selector).trigger('input');
  }

  function triggerKeydown(domElement, k) {
    var oEvent = document.createEvent("Events");
    oEvent.initEvent('keydown', true, true);
    $.extend(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    _ember['default'].run(function () {
      domElement.dispatchEvent(oEvent);
    });
  }

  function typeInSearch(text) {
    _ember['default'].run(function () {
      typeText('.ember-power-select-search input, .ember-power-select-trigger-multiple-input', text);
    });
  }

  function clickTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-power-select-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    var event = new window.Event('mousedown', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      return event[key] = options[key];
    });
    _ember['default'].run(function () {
      return _ember['default'].$(selector)[0].dispatchEvent(event);
    });
  }

  // Helpers for acceptance tests

  exports['default'] = function () {
    var isEmberOne = _ember['default'].VERSION.match(/1\.13/);

    _ember['default'].Test.registerAsyncHelper('selectChoose', function (app, cssPath, value) {
      var id = find(cssPath).find('.ember-power-select-trigger').attr('class').match(/ember-power-select-trigger-ember(\d+)/)[1];
      // If the dropdown is closed, open it
      if (_ember['default'].$('.ember-power-select-dropdown-ember' + id).length === 0) {
        click(cssPath + ' .ember-power-select-trigger');
      }

      // Select the option with the given text
      click('.ember-power-select-dropdown-ember' + id + ' .ember-power-select-option:contains("' + value + '")');
    });

    _ember['default'].Test.registerAsyncHelper('selectSearch', function (app, cssPath, value) {
      var id = find(cssPath).find('.ember-power-select-trigger').attr('class').match(/ember-power-select-trigger-ember(\d+)/)[1];
      var isMultipleSelect = _ember['default'].$(cssPath + ' .ember-power-select-trigger-multiple-input').length > 0;

      var dropdownIsClosed = _ember['default'].$('.ember-power-select-dropdown-ember' + id).length === 0;
      if (dropdownIsClosed) {
        click(cssPath + ' .ember-power-select-trigger');
      }

      if (isMultipleSelect) {
        fillIn(cssPath + ' .ember-power-select-trigger-multiple-input', value);
        if (isEmberOne) {
          triggerEvent(cssPath + ' .ember-power-select-trigger-multiple-input', 'input');
        }
      } else {
        fillIn('.ember-power-select-search input', value);
        if (isEmberOne) {
          triggerEvent('.ember-power-select-dropdown-ember' + id + ' .ember-power-select-search input', 'input');
        }
      }
    });
  };
});
define('stations-editor/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'stations-editor/tests/helpers/start-app', 'stations-editor/tests/helpers/destroy-app'], function (exports, _qunit, _stationsEditorTestsHelpersStartApp, _stationsEditorTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _stationsEditorTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _stationsEditorTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('stations-editor/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('stations-editor/tests/helpers/resolver', ['exports', 'ember/resolver', 'stations-editor/config/environment'], function (exports, _emberResolver, _stationsEditorConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _stationsEditorConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _stationsEditorConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('stations-editor/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('stations-editor/tests/helpers/start-app', ['exports', 'ember', 'stations-editor/app', 'stations-editor/config/environment'], function (exports, _ember, _stationsEditorApp, _stationsEditorConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _stationsEditorConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _stationsEditorApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('stations-editor/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('stations-editor/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('stations-editor/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('stations-editor/tests/routes/auth.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/auth.js should pass jshint.');
  });
});
define('stations-editor/tests/routes/changelog.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/changelog.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/changelog.js should pass jshint.');
  });
});
define('stations-editor/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('stations-editor/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('stations-editor/tests/routes/station.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/station.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/station.js should pass jshint.');
  });
});
define('stations-editor/tests/services/stations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/stations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/stations.js should pass jshint.');
  });
});
define('stations-editor/tests/services/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/user.js should pass jshint.');
  });
});
define('stations-editor/tests/test-helper', ['exports', 'stations-editor/tests/helpers/resolver', 'ember-qunit'], function (exports, _stationsEditorTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_stationsEditorTestsHelpersResolver['default']);
});
define('stations-editor/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('stations-editor/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map