define(['dart_sdk', 'packages/angular/core.template'], function(dart_sdk, core) {
  'use strict';
  const core$ = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const core$46template = core.core$46template;
  const _root = Object.create(null);
  const angular_bloc$46template = Object.create(_root);
  const src__pipes__bloc_pipe$46template = Object.create(_root);
  const src__pipes__pipes$46template = Object.create(_root);
  dart.defineLazy(angular_bloc$46template, {
    /*angular_bloc$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  angular_bloc$46template.initReflector = function() {
    if (dart.test(angular_bloc$46template._visited)) {
      return;
    }
    angular_bloc$46template._visited = true;
    src__pipes__pipes$46template.initReflector();
  };
  dart.defineLazy(src__pipes__bloc_pipe$46template, {
    /*src__pipes__bloc_pipe$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__pipes__bloc_pipe$46template.initReflector = function() {
    if (dart.test(src__pipes__bloc_pipe$46template._visited)) {
      return;
    }
    src__pipes__bloc_pipe$46template._visited = true;
    core$46template.initReflector();
  };
  dart.defineLazy(src__pipes__pipes$46template, {
    /*src__pipes__pipes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__pipes__pipes$46template.initReflector = function() {
    if (dart.test(src__pipes__pipes$46template._visited)) {
      return;
    }
    src__pipes__pipes$46template._visited = true;
    src__pipes__bloc_pipe$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_bloc/angular_bloc.template.ddc", {
    "package:angular_bloc/angular_bloc.template.dart": angular_bloc$46template,
    "package:angular_bloc/src/pipes/bloc_pipe.template.dart": src__pipes__bloc_pipe$46template,
    "package:angular_bloc/src/pipes/pipes.template.dart": src__pipes__pipes$46template
  }, '{"version":3,"sourceRoot":"","sources":["angular_bloc.template.dart","src/pipes/bloc_pipe.template.dart","src/pipes/pipes.template.dart"],"names":[],"mappings":";;;;;;;;;;;MAQI,gCAAQ;YAAG;;;;;AAEb,kBAAI,gCAAQ,GAAE;AACZ;;AAEF,uCAAW;AAEX,IAAM,0CAAa;EACrB;;MCRI,yCAAQ;YAAG;;;;;AAEb,kBAAI,yCAAQ,GAAE;AACZ;;AAEF,gDAAW;AAEX,IAAM,6BAAa;EACrB;;MCRI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAM,8CAAa;EACrB","file":"angular_bloc.template.ddc.js"}');
  // Exports:
  return {
    angular_bloc$46template: angular_bloc$46template,
    src__pipes__bloc_pipe$46template: src__pipes__bloc_pipe$46template,
    src__pipes__pipes$46template: src__pipes__pipes$46template
  };
});

//# sourceMappingURL=angular_bloc.template.ddc.js.map
