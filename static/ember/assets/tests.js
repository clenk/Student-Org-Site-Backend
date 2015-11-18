define('student-org-site/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function () {
    ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('student-org-site/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function () {
    ok(true, 'app.js should pass jshint.');
  });
});
define('student-org-site/tests/components/calendar-event.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/calendar-event.js should pass jshint', function () {
    ok(true, 'components/calendar-event.js should pass jshint.');
  });
});
define('student-org-site/tests/components/nav-bar.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/nav-bar.js should pass jshint', function () {
    ok(true, 'components/nav-bar.js should pass jshint.');
  });
});
define('student-org-site/tests/components/page-title.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/page-title.js should pass jshint', function () {
    ok(true, 'components/page-title.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/add-event.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/add-event.js should pass jshint', function () {
    ok(true, 'controllers/add-event.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/admin.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/admin.js should pass jshint', function () {
    ok(true, 'controllers/admin.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function () {
    ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/auth.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/auth.js should pass jshint', function () {
    ok(true, 'controllers/auth.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/calendar.js should pass jshint', function () {
    ok(true, 'controllers/calendar.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/create-account.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/create-account.js should pass jshint', function () {
    ok(true, 'controllers/create-account.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/post.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/post.js should pass jshint', function () {
    ok(true, 'controllers/post.js should pass jshint.');
  });
});
define('student-org-site/tests/controllers/search.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/search.js should pass jshint', function () {
    ok(true, 'controllers/search.js should pass jshint.');
  });
});
define('student-org-site/tests/helpers/date-formatter.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/date-formatter.js should pass jshint', function () {
    ok(true, 'helpers/date-formatter.js should pass jshint.');
  });
});
define('student-org-site/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('student-org-site/tests/helpers/format-events.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/format-events.js should pass jshint', function () {
    ok(true, 'helpers/format-events.js should pass jshint.');
  });
});
define('student-org-site/tests/helpers/resolver', ['exports', 'ember/resolver', 'student-org-site/config/environment'], function (exports, _emberResolver, _studentOrgSiteConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _studentOrgSiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _studentOrgSiteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('student-org-site/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function () {
    ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('student-org-site/tests/helpers/start-app', ['exports', 'ember', 'student-org-site/app', 'student-org-site/router', 'student-org-site/config/environment'], function (exports, _ember, _studentOrgSiteApp, _studentOrgSiteRouter, _studentOrgSiteConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application;

    var attributes = _ember['default'].merge({}, _studentOrgSiteConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _studentOrgSiteApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('student-org-site/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function () {
    ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('student-org-site/tests/helpers/text-preview.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/text-preview.js should pass jshint', function () {
    ok(true, 'helpers/text-preview.js should pass jshint.');
  });
});
define('student-org-site/tests/models/event.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/event.js should pass jshint', function () {
    ok(true, 'models/event.js should pass jshint.');
  });
});
define('student-org-site/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/post.js should pass jshint', function () {
    ok(true, 'models/post.js should pass jshint.');
  });
});
define('student-org-site/tests/models/tag.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/tag.js should pass jshint', function () {
    ok(true, 'models/tag.js should pass jshint.');
  });
});
define('student-org-site/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/user.js should pass jshint', function () {
    ok(true, 'models/user.js should pass jshint.');
  });
});
define('student-org-site/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function () {
    ok(true, 'router.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/about.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/about.js should pass jshint', function () {
    ok(true, 'routes/about.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/add-event.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/add-event.js should pass jshint', function () {
    ok(true, 'routes/add-event.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/admin.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/admin.js should pass jshint', function () {
    ok(true, 'routes/admin.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function () {
    ok(true, 'routes/application.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/auth.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/auth.js should pass jshint', function () {
    ok(true, 'routes/auth.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/calendar.js should pass jshint', function () {
    ok(true, 'routes/calendar.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/create-account.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/create-account.js should pass jshint', function () {
    ok(true, 'routes/create-account.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/index.js should pass jshint', function () {
    ok(true, 'routes/index.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/post.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/post.js should pass jshint', function () {
    ok(true, 'routes/post.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/posts.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/posts.js should pass jshint', function () {
    ok(true, 'routes/posts.js should pass jshint.');
  });
});
define('student-org-site/tests/routes/search.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/search.js should pass jshint', function () {
    ok(true, 'routes/search.js should pass jshint.');
  });
});
define('student-org-site/tests/test-helper', ['exports', 'student-org-site/tests/helpers/resolver', 'ember-qunit'], function (exports, _studentOrgSiteTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_studentOrgSiteTestsHelpersResolver['default']);
});
define('student-org-site/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function () {
    ok(true, 'test-helper.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('student-org-site/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/adapters');
  test('unit/adapters/application-test.js should pass jshint', function () {
    ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/components/calendar-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('calendar-event', 'Unit | Component | calendar event', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('student-org-site/tests/unit/components/calendar-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/components');
  test('unit/components/calendar-event-test.js should pass jshint', function () {
    ok(true, 'unit/components/calendar-event-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/components/nav-bar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('nav-bar', 'Unit | Component | nav bar', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('student-org-site/tests/unit/components/nav-bar-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/components');
  test('unit/components/nav-bar-test.js should pass jshint', function () {
    ok(true, 'unit/components/nav-bar-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/components/page-title-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('page-title', 'Unit | Component | page title', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('student-org-site/tests/unit/components/page-title-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/components');
  test('unit/components/page-title-test.js should pass jshint', function () {
    ok(true, 'unit/components/page-title-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/add-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:add-event', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/add-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/add-event-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/add-event-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/admin-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/admin-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/admin-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/admin-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/application-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/auth-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/auth-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/auth-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/calendar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:calendar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/calendar-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/calendar-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/create-account-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:create-account', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/create-account-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/create-account-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/create-account-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/post-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/post-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/controllers/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('student-org-site/tests/unit/controllers/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/search-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/search-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/helpers/date-formatter-test', ['exports', 'student-org-site/helpers/date-formatter', 'qunit'], function (exports, _studentOrgSiteHelpersDateFormatter, _qunit) {

  (0, _qunit.module)('Unit | Helper | date formatter');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _studentOrgSiteHelpersDateFormatter.dateFormatter)(42);
    assert.ok(result);
  });
});
define('student-org-site/tests/unit/helpers/date-formatter-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/helpers');
  test('unit/helpers/date-formatter-test.js should pass jshint', function () {
    ok(true, 'unit/helpers/date-formatter-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/helpers/text-preview-test', ['exports', 'student-org-site/helpers/text-preview', 'qunit'], function (exports, _studentOrgSiteHelpersTextPreview, _qunit) {

  (0, _qunit.module)('Unit | Helper | text preview');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _studentOrgSiteHelpersTextPreview.textPreview)(42);
    assert.ok(result);
  });
});
define('student-org-site/tests/unit/helpers/text-preview-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/helpers');
  test('unit/helpers/text-preview-test.js should pass jshint', function () {
    ok(true, 'unit/helpers/text-preview-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/models/event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('event', 'Unit | Model | event', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('student-org-site/tests/unit/models/event-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/event-test.js should pass jshint', function () {
    ok(true, 'unit/models/event-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: ['model:author', 'model:tag']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('student-org-site/tests/unit/models/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/post-test.js should pass jshint', function () {
    ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/models/tag-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('tag', 'Unit | Model | tag', {
    // Specify the other units that are required for this test.
    needs: ['model:post']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('student-org-site/tests/unit/models/tag-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/tag-test.js should pass jshint', function () {
    ok(true, 'unit/models/tag-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: ['model:post']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('student-org-site/tests/unit/models/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/user-test.js should pass jshint', function () {
    ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/about-test.js should pass jshint', function () {
    ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/add-event-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:add-event', 'Unit | Route | add event', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/add-event-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/add-event-test.js should pass jshint', function () {
    ok(true, 'unit/routes/add-event-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/admin-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:admin', 'Unit | Route | admin', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/admin-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/admin-test.js should pass jshint', function () {
    ok(true, 'unit/routes/admin-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/application-test.js should pass jshint', function () {
    ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:auth', 'Unit | Route | auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/auth-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/auth-test.js should pass jshint', function () {
    ok(true, 'unit/routes/auth-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/calendar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:calendar', 'Unit | Route | calendar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/calendar-test.js should pass jshint', function () {
    ok(true, 'unit/routes/calendar-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/create-account-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:create-account', 'Unit | Route | create account', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/create-account-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/create-account-test.js should pass jshint', function () {
    ok(true, 'unit/routes/create-account-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/index-test.js should pass jshint', function () {
    ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:post', 'Unit | Route | post', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/post-test.js should pass jshint', function () {
    ok(true, 'unit/routes/post-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/posts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:posts', 'Unit | Route | posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/posts-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/posts-test.js should pass jshint', function () {
    ok(true, 'unit/routes/posts-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/routes/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('student-org-site/tests/unit/routes/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/search-test.js should pass jshint', function () {
    ok(true, 'unit/routes/search-test.js should pass jshint.');
  });
});
define('student-org-site/tests/unit/views/calendar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('view:calendar', 'Unit | View | calendar');

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var view = this.subject();
    assert.ok(view);
  });
});
define('student-org-site/tests/unit/views/calendar-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/views');
  test('unit/views/calendar-test.js should pass jshint', function () {
    ok(true, 'unit/views/calendar-test.js should pass jshint.');
  });
});
define('student-org-site/tests/views/calendar.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - views');
  test('views/calendar.js should pass jshint', function () {
    ok(true, 'views/calendar.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('student-org-site/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map