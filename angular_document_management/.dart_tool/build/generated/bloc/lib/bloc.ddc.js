define(['dart_sdk', 'packages/rxdart/futures'], function(dart_sdk, futures) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__subjects__publish_subject = futures.src__subjects__publish_subject;
  const src__subjects__behavior_subject = futures.src__subjects__behavior_subject;
  const _root = Object.create(null);
  const src__bloc = Object.create(_root);
  const src__bloc_supervisor = Object.create(_root);
  const src__bloc_delegate = Object.create(_root);
  const bloc = Object.create(_root);
  const src__transition = Object.create(_root);
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  const _eventSubject = Symbol('_eventSubject');
  const _stateSubject = Symbol('_stateSubject');
  const _bindStateSubject = Symbol('_bindStateSubject');
  const _handleError = Symbol('_handleError');
  const _is_Bloc_default = Symbol('_is_Bloc_default');
  src__bloc.Bloc$ = dart.generic((Event, State) => {
    let PublishSubjectOfEvent = () => (PublishSubjectOfEvent = dart.constFn(src__subjects__publish_subject.PublishSubject$(Event)))();
    let TransitionOfEvent$State = () => (TransitionOfEvent$State = dart.constFn(src__transition.Transition$(Event, State)))();
    let StreamOfEvent = () => (StreamOfEvent = dart.constFn(async.Stream$(Event)))();
    let EventToStreamOfState = () => (EventToStreamOfState = dart.constFn(dart.fnType(StreamOfState(), [Event])))();
    let BehaviorSubjectOfState = () => (BehaviorSubjectOfState = dart.constFn(src__subjects__behavior_subject.BehaviorSubject$(State)))();
    let StreamOfState = () => (StreamOfState = dart.constFn(async.Stream$(State)))();
    let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [State])))();
    class Bloc extends core.Object {
      get state() {
        return this[_stateSubject].stream;
      }
      get currentState() {
        return this[_stateSubject].value;
      }
      onTransition(transition) {
        TransitionOfEvent$State()._check(transition);
        return null;
      }
      onError(error, stacktrace) {
        return null;
      }
      dispatch(event) {
        Event._check(event);
        try {
          this[_eventSubject].sink.add(event);
        } catch (e) {
          let error = dart.getThrown(e);
          this[_handleError](error);
        }
      }
      dispose() {
        this[_eventSubject].close();
        this[_stateSubject].close();
      }
      transform(events, next) {
        StreamOfEvent()._check(events);
        EventToStreamOfState()._check(next);
        return StreamOfState()._check(events.asyncExpand(State, next));
      }
      [_bindStateSubject]() {
        let currentEvent = null;
        this.transform(this[_eventSubject], dart.fn(event => {
          currentEvent = event;
          return this.mapEventToState(currentEvent).handleError(dart.bind(this, _handleError));
        }, EventToStreamOfState())).forEach(dart.fn(nextState => {
          if (dart.equals(this.currentState, nextState)) return;
          let transition = new (TransitionOfEvent$State()).new({currentState: this.currentState, event: currentEvent, nextState: nextState});
          let t = src__bloc_supervisor.BlocSupervisor.new().delegate;
          t == null ? null : t.onTransition(transition);
          this.onTransition(transition);
          this[_stateSubject].add(nextState);
        }, StateToNull()));
      }
      [_handleError](error, stacktrace) {
        if (stacktrace === void 0) stacktrace = null;
        this.onError(error, stacktrace);
        let t = src__bloc_supervisor.BlocSupervisor.new().delegate;
        t == null ? null : t.onError(error, stacktrace);
      }
    }
    (Bloc.new = function() {
      this[_eventSubject] = PublishSubjectOfEvent().new();
      this[_stateSubject] = null;
      this[_stateSubject] = BehaviorSubjectOfState().seeded(this.initialState);
      this[_bindStateSubject]();
    }).prototype = Bloc.prototype;
    dart.addTypeTests(Bloc);
    Bloc.prototype[_is_Bloc_default] = true;
    dart.setMethodSignature(Bloc, () => ({
      __proto__: dart.getMethods(Bloc.__proto__),
      onTransition: dart.fnType(dart.void, [core.Object]),
      onError: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      dispatch: dart.fnType(dart.void, [core.Object]),
      dispose: dart.fnType(dart.void, []),
      transform: dart.fnType(async.Stream$(State), [core.Object, core.Object]),
      [_bindStateSubject]: dart.fnType(dart.void, []),
      [_handleError]: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setGetterSignature(Bloc, () => ({
      __proto__: dart.getGetters(Bloc.__proto__),
      state: async.Stream$(State),
      currentState: State
    }));
    dart.setFieldSignature(Bloc, () => ({
      __proto__: dart.getFields(Bloc.__proto__),
      [_eventSubject]: dart.finalFieldType(PublishSubjectOfEvent()),
      [_stateSubject]: dart.fieldType(BehaviorSubjectOfState())
    }));
    return Bloc;
  });
  src__bloc.Bloc = src__bloc.Bloc$();
  dart.addTypeTests(src__bloc.Bloc, _is_Bloc_default);
  src__bloc_supervisor.BlocSupervisor = class BlocSupervisor extends core.Object {
    get delegate() {
      return this[delegate];
    }
    set delegate(value) {
      this[delegate] = value;
    }
    static new() {
      return src__bloc_supervisor.BlocSupervisor._singleton;
    }
  };
  (src__bloc_supervisor.BlocSupervisor._internal = function() {
    this[delegate] = null;
  }).prototype = src__bloc_supervisor.BlocSupervisor.prototype;
  dart.addTypeTests(src__bloc_supervisor.BlocSupervisor);
  const delegate = Symbol("BlocSupervisor.delegate");
  dart.setFieldSignature(src__bloc_supervisor.BlocSupervisor, () => ({
    __proto__: dart.getFields(src__bloc_supervisor.BlocSupervisor.__proto__),
    delegate: dart.fieldType(src__bloc_delegate.BlocDelegate)
  }));
  dart.defineLazy(src__bloc_supervisor.BlocSupervisor, {
    /*src__bloc_supervisor.BlocSupervisor._singleton*/get _singleton() {
      return new src__bloc_supervisor.BlocSupervisor._internal();
    }
  });
  src__bloc_delegate.BlocDelegate = class BlocDelegate extends core.Object {
    onTransition(transition) {
      return null;
    }
    onError(error, stacktrace) {
      return null;
    }
  };
  (src__bloc_delegate.BlocDelegate.new = function() {
  }).prototype = src__bloc_delegate.BlocDelegate.prototype;
  dart.addTypeTests(src__bloc_delegate.BlocDelegate);
  dart.setMethodSignature(src__bloc_delegate.BlocDelegate, () => ({
    __proto__: dart.getMethods(src__bloc_delegate.BlocDelegate.__proto__),
    onTransition: dart.fnType(dart.void, [src__transition.Transition]),
    onError: dart.fnType(dart.void, [core.Object, core.StackTrace])
  }));
  const _is_Transition_default = Symbol('_is_Transition_default');
  src__transition.Transition$ = dart.generic((Event, State) => {
    let TransitionOfEvent$State = () => (TransitionOfEvent$State = dart.constFn(src__transition.Transition$(Event, State)))();
    class Transition extends core.Object {
      get currentState() {
        return this[currentState$];
      }
      set currentState(value) {
        super.currentState = value;
      }
      get event() {
        return this[event$];
      }
      set event(value) {
        super.event = value;
      }
      get nextState() {
        return this[nextState$];
      }
      set nextState(value) {
        super.nextState = value;
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || TransitionOfEvent$State().is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.currentState, other.currentState) && dart.equals(this.event, other.event) && dart.equals(this.nextState, other.nextState);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.currentState)) ^ dart.notNull(dart.hashCode(this.event)) ^ dart.notNull(dart.hashCode(this.nextState))) >>> 0;
      }
      toString() {
        return "Transition { currentState: " + dart.str(this.currentState) + ", event: " + dart.str(this.event) + ", nextState: " + dart.str(this.nextState) + " }";
      }
    }
    (Transition.new = function(opts) {
      let currentState = opts && 'currentState' in opts ? opts.currentState : null;
      let event = opts && 'event' in opts ? opts.event : null;
      let nextState = opts && 'nextState' in opts ? opts.nextState : null;
      this[currentState$] = currentState;
      this[event$] = event;
      this[nextState$] = nextState;
      if (!(currentState != null)) dart.assertFailed();
      if (!(event != null)) dart.assertFailed();
      if (!(nextState != null)) dart.assertFailed();
    }).prototype = Transition.prototype;
    dart.addTypeTests(Transition);
    Transition.prototype[_is_Transition_default] = true;
    const currentState$ = Symbol("Transition.currentState");
    const event$ = Symbol("Transition.event");
    const nextState$ = Symbol("Transition.nextState");
    dart.setMethodSignature(Transition, () => ({
      __proto__: dart.getMethods(Transition.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Transition, () => ({
      __proto__: dart.getGetters(Transition.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(Transition, () => ({
      __proto__: dart.getFields(Transition.__proto__),
      currentState: dart.finalFieldType(State),
      event: dart.finalFieldType(Event),
      nextState: dart.finalFieldType(State)
    }));
    dart.defineExtensionMethods(Transition, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Transition, ['hashCode']);
    return Transition;
  });
  src__transition.Transition = src__transition.Transition$();
  dart.addTypeTests(src__transition.Transition, _is_Transition_default);
  dart.trackLibraries("packages/bloc/bloc.ddc", {
    "package:bloc/src/bloc.dart": src__bloc,
    "package:bloc/src/bloc_supervisor.dart": src__bloc_supervisor,
    "package:bloc/src/bloc_delegate.dart": src__bloc_delegate,
    "package:bloc/bloc.dart": bloc,
    "package:bloc/src/transition.dart": src__transition
  }, '{"version":3,"sourceRoot":"","sources":["src/bloc.dart","src/bloc_supervisor.dart","src/bloc_delegate.dart","src/transition.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cAe6B,oBAAa,OAAO;;;cAMrB,oBAAa,MAAM;;mBAW3B,UAAmC;yCAAV;cAAe;MAAI;cAMjD,KAAY,EAAE,UAAqB;cAAK;MAAI;eAQ3C,KAAW;qBAAL;AAClB,YAAI;AACF,6BAAa,KAAK,IAAI,CAAC,KAAK;;cACrB;AAAO,AACd,4BAAY,CAAC,KAAK;;MAEtB;;AAKE,2BAAa,MAAM;AACnB,2BAAa,MAAM;MACrB;gBA+BE,MAAoB,EACpB,IAA+B;+BADjB;sCACA;AAEd,sCAAO,MAAM,YAAY,QAAC,IAAI;MAChC;;AAUE,YAAM;AAEN,sBAAS,CAAC,mBAAa,EAAE,QAAC,KAAW;AACnC,sBAAY,GAAG,KAAK;AACpB,gBAAO,qBAAe,CAAC,YAAY,aAAa,CAAC,6BAAY;2CACrD,CACR,QAAC,SAAe;AACd,0BAAI,iBAAY,EAAI,SAAS,GAAE;AAC/B,cAAM,iBAAa,+BAAU,gBACb,iBAAY,SACnB,YAAY,aACR,SAAS;AAEtB,yDAAc,WAAW;4CAAe,UAAU;AAClD,2BAAY,CAAC,UAAU;AACvB,6BAAa,IAAI,CAAC,SAAS;;MAGjC;qBAEkB,KAAY,EAAG,UAAqB;mCAAV;AAC1C,oBAAO,CAAC,KAAK,EAAE,UAAU;AACzB,uDAAc,WAAW;qCAAU,KAAK,EAAE,UAAU;MACtD;;;MAtH4B,mBAAa,GAAG,2BAAqB;MAE1C,mBAAa;AAalC,yBAAa,GAAG,+BAA6B,CAAC,iBAAY;AAC1D,6BAAiB;IACnB;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICrBa;;;;;;;AAIY,AACvB,YAAO,+CAAU;IACnB;;;IANa,cAAQ;EAQK;;;;;;;;MANE,8CAAU;iBAAG,6CAAwB;;;;iBCI/C,UAAqB;YAAK;IAAI;YAMnC,KAAY,EAAE,UAAqB;YAAK;IAAI;;;EAC3D;;;;;;;;;;;MCZc;;;;;;MACA;;;;;;MACA;;;;;;cAWK,KAAY;YAAZ,KAAY;cACzB,AAAU,AAAa,UAAP,KAAK,iCACrB,KAAK,iBACD,kBAAW,mBAAI,KAAK,kBACpB,iBAAY,EAAI,KAAK,aAAa,iBAClC,UAAK,EAAI,KAAK,MAAM,iBACpB,cAAS,EAAI,KAAK,UAAU;;;cAIhC,EAAsB,AAAiB,2BAAvC,iBAAY,gCAAY,UAAK,gCAAY,cAAS;MAAS;;cAI3D,0CAA6B,iBAAY,2BAAU,UAAK,+BAAc,cAAS;MAAG;;;UAtBrE;UACA;UACA;MAFA,mBAAY,GAAZ,YAAY;MACZ,YAAK,GAAL,KAAK;MACL,gBAAS,GAAT,SAAS;YACb,YAAY,IAAI;YAChB,KAAK,IAAI;YACT,SAAS,IAAI;IAAK","file":"bloc.ddc.js"}');
  // Exports:
  return {
    src__bloc: src__bloc,
    src__bloc_supervisor: src__bloc_supervisor,
    src__bloc_delegate: src__bloc_delegate,
    bloc: bloc,
    src__transition: src__transition
  };
});

//# sourceMappingURL=bloc.ddc.js.map
