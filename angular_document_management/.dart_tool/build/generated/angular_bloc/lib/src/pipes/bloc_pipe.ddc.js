define(['dart_sdk', 'packages/angular/src/core/change_detection/change_detection', 'packages/bloc/bloc'], function(dart_sdk, change_detection, bloc) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = change_detection.src__core__metadata__lifecycle_hooks;
  const src__core__change_detection__pipe_transform = change_detection.src__core__change_detection__pipe_transform;
  const src__core__change_detection__change_detector_ref = change_detection.src__core__change_detection__change_detector_ref;
  const src__bloc = bloc.src__bloc;
  const _root = Object.create(null);
  const src__pipes__bloc_pipe = Object.create(_root);
  const src__pipes__pipes = Object.create(_root);
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let dynamicTobottom = () => (dynamicTobottom = dart.constFn(dart.fnType(dart.bottom, [dart.dynamic])))();
  const _ref = Symbol('_ref');
  const _bloc = Symbol('_bloc');
  const _latestValue = Symbol('_latestValue');
  const _subscription = Symbol('_subscription');
  const _dispose = Symbol('_dispose');
  const _subscribe = Symbol('_subscribe');
  const _updateLatestValue = Symbol('_updateLatestValue');
  src__pipes__bloc_pipe.BlocPipe = class BlocPipe extends core.Object {
    ngOnDestroy() {
      if (this[_subscription] != null) {
        this[_dispose]();
      }
    }
    transform(bloc) {
      if (this[_bloc] == null) {
        if (bloc != null) {
          this[_subscribe](bloc);
        }
      } else if (!dart.test(src__pipes__bloc_pipe.BlocPipe._maybeStreamIdentical(bloc, this[_bloc]))) {
        this[_dispose]();
        return this.transform(bloc);
      }
      if (bloc == null) {
        return null;
      }
      let l = this[_latestValue];
      return l != null ? l : bloc.initialState;
    }
    [_subscribe](bloc) {
      this[_bloc] = bloc;
      this[_subscription] = bloc.state.listen(dart.fn(value => this[_updateLatestValue](bloc, value), ObjectTovoid()), {onError: dart.fn(e => dart.throw(e), dynamicTobottom())});
    }
    [_updateLatestValue](async, value) {
      if (core.identical(async, this[_bloc])) {
        this[_latestValue] = value;
        this[_ref].markForCheck();
      }
    }
    [_dispose]() {
      this[_subscription].cancel();
      this[_latestValue] = null;
      this[_subscription] = null;
      this[_bloc] = null;
    }
    static _maybeStreamIdentical(a, b) {
      if (!core.identical(a, b)) {
        return async.Stream.is(a) && async.Stream.is(b) && dart.equals(a, b);
      }
      return true;
    }
  };
  (src__pipes__bloc_pipe.BlocPipe.new = function(ref) {
    this[_bloc] = null;
    this[_latestValue] = null;
    this[_subscription] = null;
    this[_ref] = ref;
  }).prototype = src__pipes__bloc_pipe.BlocPipe.prototype;
  dart.addTypeTests(src__pipes__bloc_pipe.BlocPipe);
  src__pipes__bloc_pipe.BlocPipe[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnDestroy, src__core__change_detection__pipe_transform.PipeTransform];
  dart.setMethodSignature(src__pipes__bloc_pipe.BlocPipe, () => ({
    __proto__: dart.getMethods(src__pipes__bloc_pipe.BlocPipe.__proto__),
    ngOnDestroy: dart.fnType(dart.void, []),
    transform: dart.fnType(dart.dynamic, [src__bloc.Bloc]),
    [_subscribe]: dart.fnType(dart.void, [src__bloc.Bloc]),
    [_updateLatestValue]: dart.fnType(dart.void, [dart.dynamic, core.Object]),
    [_dispose]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__pipes__bloc_pipe.BlocPipe, () => ({
    __proto__: dart.getFields(src__pipes__bloc_pipe.BlocPipe.__proto__),
    [_bloc]: dart.fieldType(src__bloc.Bloc),
    [_latestValue]: dart.fieldType(core.Object),
    [_subscription]: dart.fieldType(async.StreamSubscription),
    [_ref]: dart.fieldType(src__core__change_detection__change_detector_ref.ChangeDetectorRef)
  }));
  dart.trackLibraries("packages/angular_bloc/src/pipes/bloc_pipe.ddc", {
    "package:angular_bloc/src/pipes/bloc_pipe.dart": src__pipes__bloc_pipe,
    "package:angular_bloc/src/pipes/pipes.dart": src__pipes__pipes
  }, '{"version":3,"sourceRoot":"","sources":["bloc_pipe.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAkBI,UAAI,mBAAa,IAAI,MAAM;AACzB,sBAAQ;;IAEZ;cAEkB,IAAS;AACzB,UAAI,WAAK,IAAI,MAAM;AACjB,YAAI,IAAI,IAAI,MAAM;AAChB,0BAAU,CAAC,IAAI;;YAEZ,gBAAK,oDAAqB,CAAC,IAAI,EAAE,WAAK,IAAG;AAC9C,sBAAQ;AACR,cAAO,eAAS,CAAC,IAAI;;AAEvB,UAAI,IAAI,IAAI,MAAM;AAChB,cAAO;;AAET,cAAO,kBAAY;6BAAI,IAAI,aAAa;IAC1C;iBAEgB,IAAS;AACvB,iBAAK,GAAG,IAAI;AACZ,yBAAa,GAAG,IAAI,MAAM,OAAO,CAC7B,QAAC,KAAY,IAAK,wBAAkB,CAAC,IAAI,EAAE,KAAK,8BACvC,QAAC,CAAS,IAAK,WAAM,CAAC;IACrC;yBAEwB,KAAa,EAAE,KAAY;AACjD,UAAI,eAAU,KAAK,EAAE,WAAK,GAAG;AAC3B,0BAAY,GAAG,KAAK;AACpB,kBAAI,aAAa;;IAErB;;AAGE,yBAAa,OAAO;AACpB,wBAAY,GAAG;AACf,yBAAa,GAAG;AAChB,iBAAK,GAAG;IACV;iCAKkC,CAAS,EAAE,CAAS;AACpD,WAAK,eAAU,CAAC,EAAE,CAAC,GAAG;AACpB,cAAkC,iBAA3B,CAAC,qBAAc,CAAC,iBAAc,CAAC,EAAI,CAAC;;AAE7C,YAAO;IACT;;;IA1DK,WAAK;IACH,kBAAY;IACA,mBAAa;IAGlB,UAAI;EAAC","file":"bloc_pipe.ddc.js"}');
  // Exports:
  return {
    src__pipes__bloc_pipe: src__pipes__bloc_pipe,
    src__pipes__pipes: src__pipes__pipes
  };
});

//# sourceMappingURL=bloc_pipe.ddc.js.map
