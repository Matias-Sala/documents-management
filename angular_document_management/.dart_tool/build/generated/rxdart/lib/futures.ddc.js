define(['dart_sdk', 'packages/rxdart/src/streams/amb', 'packages/rxdart/src/samplers/buffer_strategy'], function(dart_sdk, amb, buffer_strategy) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection$ = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__streams__combine_latest = amb.src__streams__combine_latest;
  const src__streams__concat = amb.src__streams__concat;
  const src__streams__concat_eager = amb.src__streams__concat_eager;
  const src__streams__defer = amb.src__streams__defer;
  const src__streams__error = amb.src__streams__error;
  const src__streams__merge = amb.src__streams__merge;
  const src__streams__never = amb.src__streams__never;
  const src__streams__race = amb.src__streams__race;
  const src__streams__range = amb.src__streams__range;
  const src__streams__repeat = amb.src__streams__repeat;
  const src__streams__retry = amb.src__streams__retry;
  const src__streams__retry_when = amb.src__streams__retry_when;
  const src__streams__switch_latest = amb.src__streams__switch_latest;
  const src__streams__timer = amb.src__streams__timer;
  const src__streams__zip = amb.src__streams__zip;
  const src__samplers__buffer_strategy = buffer_strategy.src__samplers__buffer_strategy;
  const src__utils__notification = buffer_strategy.src__utils__notification;
  const src__transformers__do = buffer_strategy.src__transformers__do;
  const src__transformers__sample = buffer_strategy.src__transformers__sample;
  const src__transformers__take_until = buffer_strategy.src__transformers__take_until;
  const _root = Object.create(null);
  const src__subjects__replay_subject = Object.create(_root);
  const src__subjects__publish_subject = Object.create(_root);
  const src__subjects__behavior_subject = Object.create(_root);
  const src__subjects__subject = Object.create(_root);
  const subjects = Object.create(_root);
  const src__transformers__group_by = Object.create(_root);
  const transformers = Object.create(_root);
  const src__observables__value_observable = Object.create(_root);
  const src__observables__observable = Object.create(_root);
  const src__observables__replay_observable = Object.create(_root);
  const src__observables__connectable_observable = Object.create(_root);
  const rxdart = Object.create(_root);
  const src__futures__as_observable_future = Object.create(_root);
  const futures = Object.create(_root);
  const src__transformers__buffer = Object.create(_root);
  const src__transformers__debounce = Object.create(_root);
  const src__transformers__default_if_empty = Object.create(_root);
  const src__transformers__delay = Object.create(_root);
  const src__transformers__dematerialize = Object.create(_root);
  const src__transformers__distinct_unique = Object.create(_root);
  const src__transformers__exhaust_map = Object.create(_root);
  const src__transformers__flat_map = Object.create(_root);
  const src__transformers__flat_map_latest = Object.create(_root);
  const src__transformers__ignore_elements = Object.create(_root);
  const src__transformers__interval = Object.create(_root);
  const src__transformers__map_to = Object.create(_root);
  const src__transformers__materialize = Object.create(_root);
  const src__utils__type_token = Object.create(_root);
  const src__transformers__of_type = Object.create(_root);
  const src__transformers__on_error_resume_next = Object.create(_root);
  const src__transformers__on_error_resume = Object.create(_root);
  const src__transformers__scan = Object.create(_root);
  const src__transformers__skip_until = Object.create(_root);
  const src__transformers__start_with = Object.create(_root);
  const src__transformers__start_with_many = Object.create(_root);
  const src__transformers__switch_if_empty = Object.create(_root);
  const src__transformers__switch_map = Object.create(_root);
  const src__transformers__throttle = Object.create(_root);
  const src__transformers__time_interval = Object.create(_root);
  const src__transformers__timestamp = Object.create(_root);
  const src__transformers__window = Object.create(_root);
  const src__transformers__with_latest_from = Object.create(_root);
  const src__utils__composite_subscription = Object.create(_root);
  const src__futures__wrapped_future = Object.create(_root);
  const src__futures__stream_max_future = Object.create(_root);
  const src__futures__stream_min_future = Object.create(_root);
  const $addAll = dartx.addAll;
  const $putIfAbsent = dartx.putIfAbsent;
  const $forEach = dartx.forEach;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $isNotEmpty = dartx.isNotEmpty;
  const $add = dartx.add;
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $where = dartx.where;
  const $map = dartx.map;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $toString = dartx.toString;
  const $last = dartx.last;
  const $sort = dartx.sort;
  const $first = dartx.first;
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AsObservableFutureOfbool = () => (AsObservableFutureOfbool = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(core.bool)))();
  let ObservableOfint = () => (ObservableOfint = dart.constFn(src__observables__observable.Observable$(core.int)))();
  let AsObservableFutureOfString = () => (AsObservableFutureOfString = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(core.String)))();
  let AsObservableFutureOfint = () => (AsObservableFutureOfint = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let __Tovoid = () => (__Tovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let JSArrayOfTimer = () => (JSArrayOfTimer = dart.constFn(_interceptors.JSArray$(async.Timer)))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let __ToNull = () => (__ToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let IterableOfFuture = () => (IterableOfFuture = dart.constFn(core.Iterable$(async.Future)))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let TypeTokenOfbool = () => (TypeTokenOfbool = dart.constFn(src__utils__type_token.TypeToken$(core.bool)))();
  let TypeTokenOfdouble = () => (TypeTokenOfdouble = dart.constFn(src__utils__type_token.TypeToken$(core.double)))();
  let TypeTokenOfint = () => (TypeTokenOfint = dart.constFn(src__utils__type_token.TypeToken$(core.int)))();
  let TypeTokenOfnum = () => (TypeTokenOfnum = dart.constFn(src__utils__type_token.TypeToken$(core.num)))();
  let TypeTokenOfString = () => (TypeTokenOfString = dart.constFn(src__utils__type_token.TypeToken$(core.String)))();
  let TypeTokenOfSymbol = () => (TypeTokenOfSymbol = dart.constFn(src__utils__type_token.TypeToken$(core.Symbol)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  const _queue = Symbol('_queue');
  const _maxSize = Symbol('_maxSize');
  const _isAddingStreamItems = Symbol('_isAddingStreamItems');
  const _addError = Symbol('_addError');
  const _add = Symbol('_add');
  const _stream = Symbol('_stream');
  const _is_Observable_default = Symbol('_is_Observable_default');
  src__observables__observable.Observable$ = dart.generic(T => {
    let ConcatStreamOfT = () => (ConcatStreamOfT = dart.constFn(src__streams__concat.ConcatStream$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let ConcatEagerStreamOfT = () => (ConcatEagerStreamOfT = dart.constFn(src__streams__concat_eager.ConcatEagerStream$(T)))();
    let DeferStreamOfT = () => (DeferStreamOfT = dart.constFn(src__streams__defer.DeferStream$(T)))();
    let ErrorStreamOfT = () => (ErrorStreamOfT = dart.constFn(src__streams__error.ErrorStream$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let MergeStreamOfT = () => (MergeStreamOfT = dart.constFn(src__streams__merge.MergeStream$(T)))();
    let NeverStreamOfT = () => (NeverStreamOfT = dart.constFn(src__streams__never.NeverStream$(T)))();
    let RaceStreamOfT = () => (RaceStreamOfT = dart.constFn(src__streams__race.RaceStream$(T)))();
    let RepeatStreamOfT = () => (RepeatStreamOfT = dart.constFn(src__streams__repeat.RepeatStream$(T)))();
    let RetryStreamOfT = () => (RetryStreamOfT = dart.constFn(src__streams__retry.RetryStream$(T)))();
    let RetryWhenStreamOfT = () => (RetryWhenStreamOfT = dart.constFn(src__streams__retry_when.RetryWhenStream$(T)))();
    let SwitchLatestStreamOfT = () => (SwitchLatestStreamOfT = dart.constFn(src__streams__switch_latest.SwitchLatestStream$(T)))();
    let TimerStreamOfT = () => (TimerStreamOfT = dart.constFn(src__streams__timer.TimerStream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StreamOfListOfT = () => (StreamOfListOfT = dart.constFn(async.Stream$(ListOfT())))();
    let EventSinkOfListOfT = () => (EventSinkOfListOfT = dart.constFn(async.EventSink$(ListOfT())))();
    let TAndEventSinkOfListOfT__Tovoid = () => (TAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfListOfT()], [core.int])))();
    let ListOfTAndEventSinkOfListOfT__Tovoid = () => (ListOfTAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [ListOfT(), EventSinkOfListOfT()], [core.int])))();
    let SamplerBuilderOfT$ListOfT = () => (SamplerBuilderOfT$ListOfT = dart.constFn(dart.fnType(StreamOfListOfT(), [StreamOfT(), TAndEventSinkOfListOfT__Tovoid(), ListOfTAndEventSinkOfListOfT__Tovoid()])))();
    let BufferStreamTransformerOfT = () => (BufferStreamTransformerOfT = dart.constFn(src__transformers__buffer.BufferStreamTransformer$(T)))();
    let IterableOfStreamOfT = () => (IterableOfStreamOfT = dart.constFn(core.Iterable$(StreamOfT())))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let DebounceStreamTransformerOfT = () => (DebounceStreamTransformerOfT = dart.constFn(src__transformers__debounce.DebounceStreamTransformer$(T)))();
    let DefaultIfEmptyStreamTransformerOfT = () => (DefaultIfEmptyStreamTransformerOfT = dart.constFn(src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer$(T)))();
    let DelayStreamTransformerOfT = () => (DelayStreamTransformerOfT = dart.constFn(src__transformers__delay.DelayStreamTransformer$(T)))();
    let DistinctUniqueStreamTransformerOfT = () => (DistinctUniqueStreamTransformerOfT = dart.constFn(src__transformers__distinct_unique.DistinctUniqueStreamTransformer$(T)))();
    let DoStreamTransformerOfT = () => (DoStreamTransformerOfT = dart.constFn(src__transformers__do.DoStreamTransformer$(T)))();
    let AsObservableFutureOfT = () => (AsObservableFutureOfT = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let IgnoreElementsStreamTransformerOfT = () => (IgnoreElementsStreamTransformerOfT = dart.constFn(src__transformers__ignore_elements.IgnoreElementsStreamTransformer$(T)))();
    let IntervalStreamTransformerOfT = () => (IntervalStreamTransformerOfT = dart.constFn(src__transformers__interval.IntervalStreamTransformer$(T)))();
    let MaterializeStreamTransformerOfT = () => (MaterializeStreamTransformerOfT = dart.constFn(src__transformers__materialize.MaterializeStreamTransformer$(T)))();
    let NotificationOfT = () => (NotificationOfT = dart.constFn(src__utils__notification.Notification$(T)))();
    let StreamMaxFutureOfT = () => (StreamMaxFutureOfT = dart.constFn(src__futures__stream_max_future.StreamMaxFuture$(T)))();
    let StreamMinFutureOfT = () => (StreamMinFutureOfT = dart.constFn(src__futures__stream_min_future.StreamMinFuture$(T)))();
    let dynamicToStreamOfT = () => (dynamicToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [dart.dynamic])))();
    let OnErrorResumeStreamTransformerOfT = () => (OnErrorResumeStreamTransformerOfT = dart.constFn(src__transformers__on_error_resume.OnErrorResumeStreamTransformer$(T)))();
    let dynamicToObservableOfT = () => (dynamicToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [dart.dynamic])))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    let StreamConsumerOfT = () => (StreamConsumerOfT = dart.constFn(async.StreamConsumer$(T)))();
    let TAndTToT = () => (TAndTToT = dart.constFn(dart.fnType(T, [T, T])))();
    let SampleStreamTransformerOfT = () => (SampleStreamTransformerOfT = dart.constFn(src__transformers__sample.SampleStreamTransformer$(T)))();
    let StartWithStreamTransformerOfT = () => (StartWithStreamTransformerOfT = dart.constFn(src__transformers__start_with.StartWithStreamTransformer$(T)))();
    let StartWithManyStreamTransformerOfT = () => (StartWithManyStreamTransformerOfT = dart.constFn(src__transformers__start_with_many.StartWithManyStreamTransformer$(T)))();
    let SwitchIfEmptyStreamTransformerOfT = () => (SwitchIfEmptyStreamTransformerOfT = dart.constFn(src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer$(T)))();
    let ThrottleStreamTransformerOfT = () => (ThrottleStreamTransformerOfT = dart.constFn(src__transformers__throttle.ThrottleStreamTransformer$(T)))();
    let TimeIntervalStreamTransformerOfT = () => (TimeIntervalStreamTransformerOfT = dart.constFn(src__transformers__time_interval.TimeIntervalStreamTransformer$(T)))();
    let TimeIntervalOfT = () => (TimeIntervalOfT = dart.constFn(src__transformers__time_interval.TimeInterval$(T)))();
    let TimestampStreamTransformerOfT = () => (TimestampStreamTransformerOfT = dart.constFn(src__transformers__timestamp.TimestampStreamTransformer$(T)))();
    let TimestampedOfT = () => (TimestampedOfT = dart.constFn(src__transformers__timestamp.Timestamped$(T)))();
    let AsObservableFutureOfListOfT = () => (AsObservableFutureOfListOfT = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(ListOfT())))();
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    let AsObservableFutureOfSetOfT = () => (AsObservableFutureOfSetOfT = dart.constFn(src__futures__as_observable_future.AsObservableFuture$(SetOfT())))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let EventSinkOfStreamOfT = () => (EventSinkOfStreamOfT = dart.constFn(async.EventSink$(StreamOfT())))();
    let TAndEventSinkOfStreamOfT__Tovoid = () => (TAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndEventSinkOfStreamOfT__Tovoid = () => (StreamOfTAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [StreamOfT(), EventSinkOfStreamOfT()], [core.int])))();
    let SamplerBuilderOfT$StreamOfT = () => (SamplerBuilderOfT$StreamOfT = dart.constFn(dart.fnType(StreamOfStreamOfT(), [StreamOfT(), TAndEventSinkOfStreamOfT__Tovoid(), StreamOfTAndEventSinkOfStreamOfT__Tovoid()])))();
    let WindowStreamTransformerOfT = () => (WindowStreamTransformerOfT = dart.constFn(src__transformers__window.WindowStreamTransformer$(T)))();
    let PublishConnectableObservableOfT = () => (PublishConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.PublishConnectableObservable$(T)))();
    let ValueConnectableObservableOfT = () => (ValueConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ValueConnectableObservable$(T)))();
    let ReplayConnectableObservableOfT = () => (ReplayConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ReplayConnectableObservable$(T)))();
    class Observable extends async.Stream$(T) {
      any(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].any(test));
      }
      static combineLatest(T, R, streams, combiner) {
        return new (src__observables__observable.Observable$(R)).new(new (src__streams__combine_latest.CombineLatestStream$(T, R)).new(streams, combiner));
      }
      static combineLatestList(T, streams) {
        return new (src__observables__observable.Observable$(core.List$(T))).new(src__streams__combine_latest.CombineLatestStream.list(T, streams));
      }
      static combineLatest2(A, B, T, streamA, streamB, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine2(A, B, T, streamA, streamB, combiner));
      }
      static combineLatest3(A, B, C, T, streamA, streamB, streamC, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner));
      }
      static combineLatest4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner));
      }
      static combineLatest5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner));
      }
      static combineLatest6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner));
      }
      static combineLatest7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner));
      }
      static combineLatest8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner));
      }
      static combineLatest9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__combine_latest.CombineLatestStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner));
      }
      static concat(streams) {
        return new (ObservableOfT()).new(new (ConcatStreamOfT()).new(streams));
      }
      static concatEager(streams) {
        return new (ObservableOfT()).new(new (ConcatEagerStreamOfT()).new(streams));
      }
      static defer(streamFactory, opts) {
        let reusable = opts && 'reusable' in opts ? opts.reusable : false;
        return new (ObservableOfT()).new(new (DeferStreamOfT()).new(streamFactory, {reusable: reusable}));
      }
      static error(error) {
        return new (ObservableOfT()).new(new (ErrorStreamOfT()).new(error));
      }
      static eventTransformed(source, mapSink) {
        return new (ObservableOfT()).new(StreamOfT().eventTransformed(source, mapSink));
      }
      static fromFuture(future) {
        return new (ObservableOfT()).new(StreamOfT().fromFuture(future));
      }
      static fromIterable(data) {
        return new (ObservableOfT()).new(StreamOfT().fromIterable(data));
      }
      static just(data) {
        return new (ObservableOfT()).new(StreamOfT().fromIterable(JSArrayOfT().of([data])));
      }
      static empty() {
        return new (ObservableOfT()).new(StreamOfT().empty());
      }
      static merge(streams) {
        return new (ObservableOfT()).new(new (MergeStreamOfT()).new(streams));
      }
      static never() {
        return new (ObservableOfT()).new(new (NeverStreamOfT()).new());
      }
      static periodic(period, computation) {
        if (computation === void 0) computation = null;
        return new (ObservableOfT()).new(StreamOfT().periodic(period, computation));
      }
      static race(streams) {
        return new (ObservableOfT()).new(new (RaceStreamOfT()).new(streams));
      }
      static range(startInclusive, endInclusive) {
        return new (ObservableOfint()).new(new src__streams__range.RangeStream.new(startInclusive, endInclusive));
      }
      static repeat(streamFactory, count) {
        if (count === void 0) count = null;
        return new (ObservableOfT()).new(new (RepeatStreamOfT()).new(streamFactory, count));
      }
      static retry(streamFactory, count) {
        if (count === void 0) count = null;
        return new (ObservableOfT()).new(new (RetryStreamOfT()).new(streamFactory, count));
      }
      static retryWhen(streamFactory, retryWhenFactory) {
        return new (ObservableOfT()).new(new (RetryWhenStreamOfT()).new(streamFactory, retryWhenFactory));
      }
      static switchLatest(streams) {
        return new (ObservableOfT()).new(new (SwitchLatestStreamOfT()).new(streams));
      }
      static timer(value, duration) {
        return new (ObservableOfT()).new(new (TimerStreamOfT()).new(value, duration));
      }
      static zip2(A, B, T, streamA, streamB, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip2(A, B, T, streamA, streamB, zipper));
      }
      static zip(T, R, streams, zipper) {
        return new (src__observables__observable.Observable$(R)).new(new (src__streams__zip.ZipStream$(T, R)).new(streams, zipper));
      }
      static zipList(T, streams) {
        return new (src__observables__observable.Observable$(core.List$(T))).new(src__streams__zip.ZipStream.list(T, streams));
      }
      static zip3(A, B, C, T, streamA, streamB, streamC, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip3(A, B, C, T, streamA, streamB, streamC, zipper));
      }
      static zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper));
      }
      static zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper));
      }
      static zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper));
      }
      static zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper));
      }
      static zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper));
      }
      static zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (src__observables__observable.Observable$(T)).new(src__streams__zip.ZipStream.zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper));
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        return new (ObservableOfT()).new(this[_stream].asBroadcastStream({onListen: onListen, onCancel: onCancel}));
      }
      asyncExpand(S, mapper) {
        return new (src__observables__observable.Observable$(S)).new(async.Stream$(S)._check(this[_stream].asyncExpand(S, mapper)));
      }
      asyncMap(S, convert) {
        return new (src__observables__observable.Observable$(S)).new(async.Stream$(S)._check(this[_stream].asyncMap(S, convert)));
      }
      buffer(sampler) {
        SamplerBuilderOfT$ListOfT()._check(sampler);
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(dart.fn((stream, bufferHandler, scheduleHandler) => sampler(stream, bufferHandler, scheduleHandler), SamplerBuilderOfT$ListOfT())));
      }
      bufferCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onCount(T, ListOfT(), count, startBufferEvery)));
      }
      bufferFuture(O, onFutureHandler) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onFuture(T, ListOfT(), O, onFutureHandler)));
      }
      bufferTest(onTestHandler) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTest(T, ListOfT(), onTestHandler)));
      }
      bufferTime(duration) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTime(T, ListOfT(), duration)));
      }
      bufferWhen(O, other) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onStream(T, ListOfT(), O, other)));
      }
      cast(R) {
        return new (src__observables__observable.Observable$(R)).new(async.Stream$(R)._check(this[_stream].cast(R)));
      }
      concatMap(S, mapper) {
        return new (src__observables__observable.Observable$(S)).new(async.Stream$(S)._check(this[_stream].asyncExpand(S, mapper)));
      }
      concatWith(other) {
        IterableOfStreamOfT()._check(other);
        return new (ObservableOfT()).new(new (ConcatStreamOfT()).new((() => {
          let _ = JSArrayOfStreamOfT().of([this[_stream]]);
          _[$addAll](other);
          return _;
        })()));
      }
      contains(needle) {
        return new (AsObservableFutureOfbool()).new(this[_stream].contains(needle));
      }
      debounce(duration) {
        return this.transform(T, new (DebounceStreamTransformerOfT()).new(duration));
      }
      defaultIfEmpty(defaultValue) {
        T._check(defaultValue);
        return this.transform(T, new (DefaultIfEmptyStreamTransformerOfT()).new(defaultValue));
      }
      delay(duration) {
        return this.transform(T, new (DelayStreamTransformerOfT()).new(duration));
      }
      dematerialize(S) {
        return src__observables__observable.Observable$(S)._check(this.cast(src__utils__notification.Notification$(S)).transform(S, new (src__transformers__dematerialize.DematerializeStreamTransformer$(S)).new()));
      }
      distinct(equals) {
        if (equals === void 0) equals = null;
        return new (ObservableOfT()).new(this[_stream].distinct(equals));
      }
      distinctUnique(opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
        return this.transform(T, new (DistinctUniqueStreamTransformerOfT()).new({equals: equals, hashCode: hashCode}));
      }
      doOnCancel(onCancel) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onCancel: onCancel}));
      }
      doOnData(onData) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onData: onData}));
      }
      doOnDone(onDone) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onDone: onDone}));
      }
      doOnEach(onEach) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onEach: onEach}));
      }
      doOnError(onError) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onError: onError}));
      }
      doOnListen(onListen) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onListen: onListen}));
      }
      doOnPause(onPause) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onPause: onPause}));
      }
      doOnResume(onResume) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onResume: onResume}));
      }
      drain(S, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return new (src__futures__as_observable_future.AsObservableFuture$(S)).new(async.Future$(S)._check(this[_stream].drain(S, futureValue)));
      }
      elementAt(index) {
        return new (AsObservableFutureOfT()).new(this[_stream].elementAt(index));
      }
      every(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].every(test));
      }
      exhaustMap(S, mapper) {
        return this.transform(S, new (src__transformers__exhaust_map.ExhaustMapStreamTransformer$(T, S)).new(mapper));
      }
      expand(S, convert) {
        return new (src__observables__observable.Observable$(S)).new(async.Stream$(S)._check(this[_stream].expand(S, convert)));
      }
      get first() {
        return new (AsObservableFutureOfT()).new(this[_stream].first);
      }
      firstWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].firstWhere(test, {orElse: orElse}));
      }
      flatMap(S, mapper) {
        return this.transform(S, new (src__transformers__flat_map.FlatMapStreamTransformer$(T, S)).new(mapper));
      }
      flatMapIterable(S, mapper) {
        return src__observables__observable.Observable$(S)._check(this.transform(core.Iterable$(S), new (src__transformers__flat_map.FlatMapStreamTransformer$(T, core.Iterable$(S))).new(mapper)).expand(S, dart.fn(iterable => iterable, dart.fnType(core.Iterable$(S), [core.Iterable$(S)]))));
      }
      fold(S, initialValue, combine) {
        return new (src__futures__as_observable_future.AsObservableFuture$(S)).new(async.Future$(S)._check(this[_stream].fold(S, initialValue, combine)));
      }
      forEach(action) {
        return new src__futures__as_observable_future.AsObservableFuture.new(this[_stream].forEach(action));
      }
      groupBy(S, grouper) {
        return this.transform(src__transformers__group_by.GroupByObservable$(T, S), new (src__transformers__group_by.GroupByStreamTransformer$(T, S)).new(grouper));
      }
      handleError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return new (ObservableOfT()).new(this[_stream].handleError(onError, {test: test}));
      }
      ignoreElements() {
        return this.transform(T, new (IgnoreElementsStreamTransformerOfT()).new());
      }
      interval(duration) {
        return this.transform(T, new (IntervalStreamTransformerOfT()).new(duration));
      }
      get isBroadcast() {
        return this[_stream] != null ? this[_stream].isBroadcast : false;
      }
      get isEmpty() {
        return new (AsObservableFutureOfbool()).new(this[_stream].isEmpty);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return new (AsObservableFutureOfString()).new(this[_stream].join(separator));
      }
      get last() {
        return new (AsObservableFutureOfT()).new(this[_stream].last);
      }
      lastWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].lastWhere(test, {orElse: orElse}));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get length() {
        return new (AsObservableFutureOfint()).new(this[_stream].length);
      }
      map(S, convert) {
        return new (src__observables__observable.Observable$(S)).new(async.Stream$(S)._check(this[_stream].map(S, convert)));
      }
      mapTo(S, value) {
        return this.transform(S, new (src__transformers__map_to.MapToStreamTransformer$(T, S)).new(value));
      }
      materialize() {
        return this.transform(NotificationOfT(), new (MaterializeStreamTransformerOfT()).new());
      }
      max(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMaxFutureOfT()).new(this[_stream], comparator));
      }
      mergeWith(streams) {
        IterableOfStreamOfT()._check(streams);
        return new (ObservableOfT()).new(new (MergeStreamOfT()).new((() => {
          let _ = JSArrayOfStreamOfT().of([this[_stream]]);
          _[$addAll](streams);
          return _;
        })()));
      }
      min(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMinFutureOfT()).new(this[_stream], comparator));
      }
      ofType(S, typeToken) {
        return this.transform(S, new (src__transformers__of_type.OfTypeStreamTransformer$(T, S)).new(typeToken));
      }
      onErrorResumeNext(recoveryStream) {
        StreamOfT()._check(recoveryStream);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => recoveryStream, dynamicToStreamOfT())));
      }
      onErrorResume(recoveryFn) {
        dynamicToStreamOfT()._check(recoveryFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(recoveryFn));
      }
      onErrorReturn(returnValue) {
        T._check(returnValue);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnValue), dynamicToObservableOfT())));
      }
      onErrorReturnWith(returnFn) {
        dynamicToT()._check(returnFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnFn(e)), dynamicToObservableOfT())));
      }
      pairwise() {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(src__samplers__buffer_strategy.onCount(T, ListOfT(), 2, 1), {exhaustBufferOnDone: false}));
      }
      pipe(streamConsumer) {
        StreamConsumerOfT()._check(streamConsumer);
        return new src__futures__as_observable_future.AsObservableFuture.new(this[_stream].pipe(streamConsumer));
      }
      reduce(combine) {
        TAndTToT()._check(combine);
        return new (AsObservableFutureOfT()).new(this[_stream].reduce(combine));
      }
      sample(sampleStream) {
        return this.transform(T, new (SampleStreamTransformerOfT()).new(sampleStream));
      }
      scan(S, accumulator, seed) {
        if (seed === void 0) seed = null;
        return this.transform(S, new (src__transformers__scan.ScanStreamTransformer$(T, S)).new(accumulator, seed));
      }
      get single() {
        return new (AsObservableFutureOfT()).new(this[_stream].single);
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].singleWhere(test, {orElse: orElse}));
      }
      skip(count) {
        return new (ObservableOfT()).new(this[_stream].skip(count));
      }
      skipUntil(S, otherStream) {
        return this.transform(T, new (src__transformers__skip_until.SkipUntilStreamTransformer$(T, S)).new(otherStream));
      }
      skipWhile(test) {
        return new (ObservableOfT()).new(this[_stream].skipWhile(test));
      }
      startWith(startValue) {
        T._check(startValue);
        return this.transform(T, new (StartWithStreamTransformerOfT()).new(startValue));
      }
      startWithMany(startValues) {
        ListOfT()._check(startValues);
        return this.transform(T, new (StartWithManyStreamTransformerOfT()).new(startValues));
      }
      switchIfEmpty(fallbackStream) {
        StreamOfT()._check(fallbackStream);
        return this.transform(T, new (SwitchIfEmptyStreamTransformerOfT()).new(fallbackStream));
      }
      switchMap(S, mapper) {
        return this.transform(S, new (src__transformers__switch_map.SwitchMapStreamTransformer$(T, S)).new(mapper));
      }
      take(count) {
        return new (ObservableOfT()).new(this[_stream].take(count));
      }
      takeUntil(S, otherStream) {
        return this.transform(T, new (src__transformers__take_until.TakeUntilStreamTransformer$(T, S)).new(otherStream));
      }
      takeWhile(test) {
        return new (ObservableOfT()).new(this[_stream].takeWhile(test));
      }
      throttle(duration) {
        return this.transform(T, new (ThrottleStreamTransformerOfT()).new(duration));
      }
      timeInterval() {
        return this.transform(TimeIntervalOfT(), new (TimeIntervalStreamTransformerOfT()).new());
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return new (ObservableOfT()).new(this[_stream].timeout(timeLimit, {onTimeout: onTimeout}));
      }
      timestamp() {
        return this.transform(TimestampedOfT(), new (TimestampStreamTransformerOfT()).new());
      }
      transform(S, streamTransformer) {
        async.StreamTransformer$(T, S)._check(streamTransformer);
        return new (src__observables__observable.Observable$(S)).new(super.transform(S, streamTransformer));
      }
      toList() {
        return new (AsObservableFutureOfListOfT()).new(this[_stream].toList());
      }
      toSet() {
        return new (AsObservableFutureOfSetOfT()).new(this[_stream].toSet());
      }
      where(test) {
        return new (ObservableOfT()).new(this[_stream].where(test));
      }
      window(sampler) {
        SamplerBuilderOfT$StreamOfT()._check(sampler);
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(dart.fn((stream, bufferHandler, scheduleHandler) => sampler(stream, bufferHandler, scheduleHandler), SamplerBuilderOfT$StreamOfT())));
      }
      windowCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onCount(T, StreamOfT(), count, startBufferEvery)));
      }
      windowFuture(O, onFutureHandler) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onFuture(T, StreamOfT(), O, onFutureHandler)));
      }
      windowTest(onTestHandler) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTest(T, StreamOfT(), onTestHandler)));
      }
      windowTime(duration) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onTime(T, StreamOfT(), duration)));
      }
      windowWhen(O, other) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(src__samplers__buffer_strategy.onStream(T, StreamOfT(), O, other)));
      }
      withLatestFrom(S, R, latestFromStream, fn) {
        return this.transform(R, new (src__transformers__with_latest_from.WithLatestFromStreamTransformer$(T, S, R)).new(latestFromStream, fn));
      }
      zipWith(S, R, other, zipper) {
        return new (src__observables__observable.Observable$(R)).new(src__streams__zip.ZipStream.zip2(T, S, R, this[_stream], other, zipper));
      }
      publish() {
        return PublishConnectableObservableOfT().new(this);
      }
      publishValue() {
        return ValueConnectableObservableOfT().new(this);
      }
      publishValueSeeded(seedValue) {
        T._check(seedValue);
        return ValueConnectableObservableOfT().seeded(this, seedValue);
      }
      publishReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return ReplayConnectableObservableOfT().new(this, {maxSize: maxSize});
      }
      share() {
        return this.publish().refCount();
      }
      shareValue() {
        return this.publishValue().refCount();
      }
      shareValueSeeded(seedValue) {
        T._check(seedValue);
        return this.publishValueSeeded(seedValue).refCount();
      }
      shareReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return this.publishReplay({maxSize: maxSize}).refCount();
      }
    }
    (Observable.new = function(stream) {
      this[_stream] = stream;
      Observable.__proto__.new.call(this);
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      any: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      asBroadcastStream: dart.fnType(src__observables__observable.Observable$(T), [], {onListen: dart.fnType(dart.void, [async.StreamSubscription$(T)]), onCancel: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      asyncExpand: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      asyncMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.FutureOr$(S), [T])]]),
      buffer: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [core.Object]),
      bufferCount: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [core.int], [core.int]),
      bufferFuture: dart.gFnType(O => [src__observables__observable.Observable$(core.List$(T)), [dart.fnType(async.Future$(O), [])]]),
      bufferTest: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [dart.fnType(core.bool, [T])]),
      bufferTime: dart.fnType(src__observables__observable.Observable$(core.List$(T)), [core.Duration]),
      bufferWhen: dart.gFnType(O => [src__observables__observable.Observable$(core.List$(T)), [async.Stream$(O)]]),
      cast: dart.gFnType(R => [src__observables__observable.Observable$(R), []]),
      concatMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      concatWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      contains: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.bool), [core.Object]),
      debounce: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      defaultIfEmpty: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      delay: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      dematerialize: dart.gFnType(S => [src__observables__observable.Observable$(S), []]),
      distinct: dart.fnType(src__observables__observable.Observable$(T), [], [dart.fnType(core.bool, [T, T])]),
      distinctUnique: dart.fnType(src__observables__observable.Observable$(T), [], {equals: dart.fnType(core.bool, [T, T]), hashCode: dart.fnType(core.int, [T])}),
      doOnCancel: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnData: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [T])]),
      doOnDone: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnEach: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [src__utils__notification.Notification$(T)])]),
      doOnError: dart.fnType(src__observables__observable.Observable$(T), [core.Function]),
      doOnListen: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnPause: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [async.Future])]),
      doOnResume: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(dart.void, [])]),
      drain: dart.gFnType(S => [src__futures__as_observable_future.AsObservableFuture$(S), [], [S]]),
      elementAt: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [core.int]),
      every: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      exhaustMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      expand: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(core.Iterable$(S), [T])]]),
      firstWhere: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(dart.dynamic, []), orElse: core.Object}),
      flatMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      flatMapIterable: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(core.Iterable$(S)), [T])]]),
      fold: dart.gFnType(S => [src__futures__as_observable_future.AsObservableFuture$(S), [S, dart.fnType(S, [S, T])]]),
      forEach: dart.fnType(src__futures__as_observable_future.AsObservableFuture, [dart.fnType(dart.void, [T])]),
      groupBy: dart.gFnType(S => [src__observables__observable.Observable$(src__transformers__group_by.GroupByObservable$(T, S)), [dart.fnType(S, [T])]]),
      handleError: dart.fnType(src__observables__observable.Observable$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      ignoreElements: dart.fnType(src__observables__observable.Observable$(T), []),
      interval: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      join: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.String), [], [core.String]),
      lastWhere: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(core.Object, []), orElse: core.Object}),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {onError: core.Function, onDone: dart.fnType(dart.void, []), cancelOnError: core.bool}),
      map: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(S, [T])]]),
      mapTo: dart.gFnType(S => [src__observables__observable.Observable$(S), [S]]),
      materialize: dart.fnType(src__observables__observable.Observable$(src__utils__notification.Notification$(T)), []),
      max: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      mergeWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      min: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      ofType: dart.gFnType(S => [src__observables__observable.Observable$(S), [src__utils__type_token.TypeToken$(S)]]),
      onErrorResumeNext: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      onErrorResume: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      onErrorReturn: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      onErrorReturnWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      pairwise: dart.fnType(src__observables__observable.Observable$(core.List$(T)), []),
      pipe: dart.fnType(src__futures__as_observable_future.AsObservableFuture, [core.Object]),
      reduce: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [core.Object]),
      sample: dart.fnType(src__observables__observable.Observable$(T), [async.Stream]),
      scan: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(S, [S, T, core.int])], [S]]),
      singleWhere: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {orElse: core.Object}),
      skip: dart.fnType(src__observables__observable.Observable$(T), [core.int]),
      skipUntil: dart.gFnType(S => [src__observables__observable.Observable$(T), [async.Stream$(S)]]),
      skipWhile: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      startWith: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      startWithMany: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      switchIfEmpty: dart.fnType(src__observables__observable.Observable$(T), [core.Object]),
      switchMap: dart.gFnType(S => [src__observables__observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      take: dart.fnType(src__observables__observable.Observable$(T), [core.int]),
      takeUntil: dart.gFnType(S => [src__observables__observable.Observable$(T), [async.Stream$(S)]]),
      takeWhile: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      throttle: dart.fnType(src__observables__observable.Observable$(T), [core.Duration]),
      timeInterval: dart.fnType(src__observables__observable.Observable$(src__transformers__time_interval.TimeInterval$(T)), []),
      timeout: dart.fnType(src__observables__observable.Observable$(T), [core.Duration], {onTimeout: dart.fnType(dart.void, [async.EventSink$(T)])}),
      timestamp: dart.fnType(src__observables__observable.Observable$(src__transformers__timestamp.Timestamped$(T)), []),
      transform: dart.gFnType(S => [src__observables__observable.Observable$(S), [core.Object]]),
      toList: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.List$(T)), []),
      toSet: dart.fnType(src__futures__as_observable_future.AsObservableFuture$(core.Set$(T)), []),
      where: dart.fnType(src__observables__observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      window: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [core.Object]),
      windowCount: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [core.int], [core.int]),
      windowFuture: dart.gFnType(O => [src__observables__observable.Observable$(async.Stream$(T)), [dart.fnType(async.Future$(O), [])]]),
      windowTest: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [dart.fnType(core.bool, [T])]),
      windowTime: dart.fnType(src__observables__observable.Observable$(async.Stream$(T)), [core.Duration]),
      windowWhen: dart.gFnType(O => [src__observables__observable.Observable$(async.Stream$(T)), [async.Stream$(O)]]),
      withLatestFrom: dart.gFnType((S, R) => [src__observables__observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      zipWith: dart.gFnType((S, R) => [src__observables__observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      publish: dart.fnType(src__observables__connectable_observable.ConnectableObservable$(T), []),
      publishValue: dart.fnType(src__observables__connectable_observable.ValueConnectableObservable$(T), []),
      publishValueSeeded: dart.fnType(src__observables__connectable_observable.ValueConnectableObservable$(T), [core.Object]),
      publishReplay: dart.fnType(src__observables__connectable_observable.ReplayConnectableObservable$(T), [], {maxSize: core.int}),
      share: dart.fnType(src__observables__observable.Observable$(T), []),
      shareValue: dart.fnType(src__observables__value_observable.ValueObservable$(T), []),
      shareValueSeeded: dart.fnType(src__observables__value_observable.ValueObservable$(T), [core.Object]),
      shareReplay: dart.fnType(src__observables__replay_observable.ReplayObservable$(T), [], {maxSize: core.int})
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      first: src__futures__as_observable_future.AsObservableFuture$(T),
      isEmpty: src__futures__as_observable_future.AsObservableFuture$(core.bool),
      last: src__futures__as_observable_future.AsObservableFuture$(T),
      length: src__futures__as_observable_future.AsObservableFuture$(core.int),
      single: src__futures__as_observable_future.AsObservableFuture$(T)
    }));
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_stream]: dart.finalFieldType(StreamOfT())
    }));
    return Observable;
  });
  src__observables__observable.Observable = src__observables__observable.Observable$();
  dart.addTypeTests(src__observables__observable.Observable, _is_Observable_default);
  const _is_Subject_default = Symbol('_is_Subject_default');
  src__subjects__subject.Subject$ = dart.generic(T => {
    let _StreamSinkWrapperOfT = () => (_StreamSinkWrapperOfT = dart.constFn(src__subjects__subject._StreamSinkWrapper$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class Subject extends src__observables__observable.Observable$(T) {
      get controller() {
        return this[controller$];
      }
      set controller(value) {
        super.controller = value;
      }
      get sink() {
        return new (_StreamSinkWrapperOfT()).new(this);
      }
      get onListen() {
        return this.controller.onListen;
      }
      set onListen(onListenHandler) {
        this.controller.onListen = onListenHandler;
      }
      get stream() {
        return this;
      }
      get onPause() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      set onPause(onPauseHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      get onResume() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      set onResume(onResumeHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      get onCancel() {
        return this.controller.onCancel;
      }
      set onCancel(onCancelHandler) {
        this.controller.onCancel = onCancelHandler;
      }
      get isClosed() {
        return this.controller.isClosed;
      }
      get isPaused() {
        return this.controller.isPaused;
      }
      get hasListener() {
        return this.controller.hasListener;
      }
      get done() {
        return this.controller.done;
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add an error while items are being added from addStream"));
        }
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.onAddError(error, stackTrace);
        this.controller.addError(error, stackTrace);
      }
      onAddError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        let completer = CompleterOfT().new();
        this[_isAddingStreamItems] = true;
        source.listen(dart.fn(event => {
          this[_add](event);
        }, TToNull()), {onError: dart.fn((e, s) => {
            this.controller.addError(e, s);
            if (dart.test(cancelOnError)) {
              this[_isAddingStreamItems] = false;
              completer.completeError(e);
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
            this[_isAddingStreamItems] = false;
            completer.complete();
          }, VoidToNull()), cancelOnError: cancelOnError});
        return completer.future;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        this[_add](event);
      }
      [_add](event) {
        T._check(event);
        this.onAdd(event);
        this.controller.add(event);
      }
      onAdd(event) {
        T._check(event);
      }
      close() {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot close the subject while items are being added from addStream"));
        }
        return this.controller.close();
      }
    }
    (Subject.new = function(controller, observable) {
      this[_isAddingStreamItems] = false;
      this[controller$] = controller;
      Subject.__proto__.new.call(this, observable);
    }).prototype = Subject.prototype;
    dart.addTypeTests(Subject);
    Subject.prototype[_is_Subject_default] = true;
    const controller$ = Symbol("Subject.controller");
    Subject[dart.implements] = () => [StreamControllerOfT()];
    dart.setMethodSignature(Subject, () => ({
      __proto__: dart.getMethods(Subject.__proto__),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      onAddError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}),
      add: dart.fnType(dart.void, [core.Object]),
      [_add]: dart.fnType(dart.void, [core.Object]),
      onAdd: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Subject, () => ({
      __proto__: dart.getGetters(Subject.__proto__),
      sink: async.StreamSink$(T),
      onListen: dart.fnType(dart.void, []),
      stream: src__observables__observable.Observable$(T),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.dynamic, []),
      isClosed: core.bool,
      isPaused: core.bool,
      hasListener: core.bool,
      done: async.Future
    }));
    dart.setSetterSignature(Subject, () => ({
      __proto__: dart.getSetters(Subject.__proto__),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(Subject, () => ({
      __proto__: dart.getFields(Subject.__proto__),
      controller: dart.finalFieldType(StreamControllerOfT()),
      [_isAddingStreamItems]: dart.fieldType(core.bool)
    }));
    return Subject;
  });
  src__subjects__subject.Subject = src__subjects__subject.Subject$();
  dart.addTypeTests(src__subjects__subject.Subject, _is_Subject_default);
  const _is_ReplaySubject_default = Symbol('_is_ReplaySubject_default');
  src__subjects__replay_subject.ReplaySubject$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let QueueOfT = () => (QueueOfT = dart.constFn(collection$.Queue$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let VoidToObservableOfT = () => (VoidToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [])))();
    let ReplaySubjectOfT = () => (ReplaySubjectOfT = dart.constFn(src__subjects__replay_subject.ReplaySubject$(T)))();
    let ReplayObservableOfT = () => (ReplayObservableOfT = dart.constFn(src__observables__replay_observable.ReplayObservable$(T)))();
    class ReplaySubject extends src__subjects__subject.Subject$(T) {
      static new(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let queue = QueueOfT().new();
        return new (ReplaySubjectOfT()).__(controller, ObservableOfT().defer(dart.fn(() => new (ObservableOfT()).new(controller.stream).startWithMany(queue.toList({growable: false})), VoidToObservableOfT()), {reusable: true}), queue, maxSize);
      }
      onAdd(event) {
        T._check(event);
        if (this[_queue].length == this[_maxSize]) {
          this[_queue].removeFirst();
        }
        this[_queue].add(event);
      }
      get values() {
        return this[_queue].toList({growable: false});
      }
    }
    (ReplaySubject.__ = function(controller, observable, queue, maxSize) {
      this[_queue] = queue;
      this[_maxSize] = maxSize;
      ReplaySubject.__proto__.new.call(this, controller, observable);
    }).prototype = ReplaySubject.prototype;
    dart.addTypeTests(ReplaySubject);
    ReplaySubject.prototype[_is_ReplaySubject_default] = true;
    ReplaySubject[dart.implements] = () => [ReplayObservableOfT()];
    dart.setMethodSignature(ReplaySubject, () => ({
      __proto__: dart.getMethods(ReplaySubject.__proto__),
      onAdd: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(ReplaySubject, () => ({
      __proto__: dart.getGetters(ReplaySubject.__proto__),
      values: core.List$(T)
    }));
    dart.setFieldSignature(ReplaySubject, () => ({
      __proto__: dart.getFields(ReplaySubject.__proto__),
      [_queue]: dart.finalFieldType(QueueOfT()),
      [_maxSize]: dart.finalFieldType(core.int)
    }));
    return ReplaySubject;
  });
  src__subjects__replay_subject.ReplaySubject = src__subjects__replay_subject.ReplaySubject$();
  dart.addTypeTests(src__subjects__replay_subject.ReplaySubject, _is_ReplaySubject_default);
  const _is_PublishSubject_default = Symbol('_is_PublishSubject_default');
  src__subjects__publish_subject.PublishSubject$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let PublishSubjectOfT = () => (PublishSubjectOfT = dart.constFn(src__subjects__publish_subject.PublishSubject$(T)))();
    class PublishSubject extends src__subjects__subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        return new (PublishSubjectOfT()).__(controller, new (ObservableOfT()).new(controller.stream));
      }
    }
    (PublishSubject.__ = function(controller, observable) {
      PublishSubject.__proto__.new.call(this, controller, observable);
    }).prototype = PublishSubject.prototype;
    dart.addTypeTests(PublishSubject);
    PublishSubject.prototype[_is_PublishSubject_default] = true;
    return PublishSubject;
  });
  src__subjects__publish_subject.PublishSubject = src__subjects__publish_subject.PublishSubject$();
  dart.addTypeTests(src__subjects__publish_subject.PublishSubject, _is_PublishSubject_default);
  const _wrapper = Symbol('_wrapper');
  const _is_BehaviorSubject_default = Symbol('_is_BehaviorSubject_default');
  src__subjects__behavior_subject.BehaviorSubject$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let _WrapperOfT = () => (_WrapperOfT = dart.constFn(src__subjects__behavior_subject._Wrapper$(T)))();
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let BehaviorSubjectOfT = () => (BehaviorSubjectOfT = dart.constFn(src__subjects__behavior_subject.BehaviorSubject$(T)))();
    let VoidToObservableOfT = () => (VoidToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [])))();
    let ValueObservableOfT = () => (ValueObservableOfT = dart.constFn(src__observables__value_observable.ValueObservable$(T)))();
    class BehaviorSubject extends src__subjects__subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (_WrapperOfT()).new();
        return new (BehaviorSubjectOfT()).__(controller, ObservableOfT().defer(dart.fn(() => {
          if (dart.test(wrapper.latestIsError)) {
            async.scheduleMicrotask(dart.fn(() => controller.addError(wrapper.latestError, wrapper.latestStackTrace), VoidTovoid()));
          } else if (dart.test(wrapper.latestIsValue)) {
            return new (ObservableOfT()).new(controller.stream).startWith(wrapper.latestValue);
          }
          return controller.stream;
        }, VoidToStreamOfT()), {reusable: true}), wrapper);
      }
      static seeded(seedValue, opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = StreamControllerOfT().broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (_WrapperOfT()).seeded(seedValue);
        return new (BehaviorSubjectOfT()).__(controller, ObservableOfT().defer(dart.fn(() => {
          if (dart.test(wrapper.latestIsError)) {
            async.scheduleMicrotask(dart.fn(() => controller.addError(wrapper.latestError, wrapper.latestStackTrace), VoidTovoid()));
          }
          return new (ObservableOfT()).new(controller.stream).startWith(wrapper.latestValue);
        }, VoidToObservableOfT()), {reusable: true}), wrapper);
      }
      onAdd(event) {
        T._check(event);
        return this[_wrapper].setValue(event);
      }
      onAddError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        return this[_wrapper].setError(error, stackTrace);
      }
      get stream() {
        return this;
      }
      get hasValue() {
        return this[_wrapper].latestIsValue;
      }
      get value() {
        return this[_wrapper].latestValue;
      }
      set value(newValue) {
        T._check(newValue);
        return this.add(newValue);
      }
    }
    (BehaviorSubject.__ = function(controller, observable, wrapper) {
      this[_wrapper] = wrapper;
      BehaviorSubject.__proto__.new.call(this, controller, observable);
    }).prototype = BehaviorSubject.prototype;
    dart.addTypeTests(BehaviorSubject);
    BehaviorSubject.prototype[_is_BehaviorSubject_default] = true;
    BehaviorSubject[dart.implements] = () => [ValueObservableOfT()];
    dart.setMethodSignature(BehaviorSubject, () => ({
      __proto__: dart.getMethods(BehaviorSubject.__proto__),
      onAdd: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getGetters(BehaviorSubject.__proto__),
      stream: src__observables__value_observable.ValueObservable$(T),
      hasValue: core.bool,
      value: T
    }));
    dart.setSetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getSetters(BehaviorSubject.__proto__),
      value: T
    }));
    dart.setFieldSignature(BehaviorSubject, () => ({
      __proto__: dart.getFields(BehaviorSubject.__proto__),
      [_wrapper]: dart.fieldType(_WrapperOfT())
    }));
    return BehaviorSubject;
  });
  src__subjects__behavior_subject.BehaviorSubject = src__subjects__behavior_subject.BehaviorSubject$();
  dart.addTypeTests(src__subjects__behavior_subject.BehaviorSubject, _is_BehaviorSubject_default);
  const _is__Wrapper_default = Symbol('_is__Wrapper_default');
  src__subjects__behavior_subject._Wrapper$ = dart.generic(T => {
    class _Wrapper extends core.Object {
      setValue(event) {
        T._check(event);
        this.latestIsValue = true;
        this.latestIsError = false;
        this.latestValue = event;
        this.latestError = null;
        this.latestStackTrace = null;
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.latestIsValue = false;
        this.latestIsError = true;
        this.latestValue = null;
        this.latestError = error;
        this.latestStackTrace = stackTrace;
      }
    }
    (_Wrapper.new = function() {
      this.latestValue = null;
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
    }).prototype = _Wrapper.prototype;
    (_Wrapper.seeded = function(latestValue) {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsError = false;
      this.latestValue = latestValue;
      this.latestIsValue = true;
    }).prototype = _Wrapper.prototype;
    dart.addTypeTests(_Wrapper);
    _Wrapper.prototype[_is__Wrapper_default] = true;
    dart.setMethodSignature(_Wrapper, () => ({
      __proto__: dart.getMethods(_Wrapper.__proto__),
      setValue: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setFieldSignature(_Wrapper, () => ({
      __proto__: dart.getFields(_Wrapper.__proto__),
      latestValue: dart.fieldType(T),
      latestError: dart.fieldType(core.Object),
      latestStackTrace: dart.fieldType(core.StackTrace),
      latestIsValue: dart.fieldType(core.bool),
      latestIsError: dart.fieldType(core.bool)
    }));
    return _Wrapper;
  });
  src__subjects__behavior_subject._Wrapper = src__subjects__behavior_subject._Wrapper$();
  dart.addTypeTests(src__subjects__behavior_subject._Wrapper, _is__Wrapper_default);
  const _target = Symbol('_target');
  const _is__StreamSinkWrapper_default = Symbol('_is__StreamSinkWrapper_default');
  src__subjects__subject._StreamSinkWrapper$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamSinkOfT = () => (StreamSinkOfT = dart.constFn(async.StreamSink$(T)))();
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class _StreamSinkWrapper extends core.Object {
      add(data) {
        T._check(data);
        this[_target].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_target].addError(error, stackTrace);
      }
      close() {
        return this[_target].close();
      }
      addStream(source) {
        StreamOfT()._check(source);
        return this[_target].addStream(source);
      }
      get done() {
        return this[_target].done;
      }
    }
    (_StreamSinkWrapper.new = function(target) {
      this[_target] = target;
    }).prototype = _StreamSinkWrapper.prototype;
    dart.addTypeTests(_StreamSinkWrapper);
    _StreamSinkWrapper.prototype[_is__StreamSinkWrapper_default] = true;
    _StreamSinkWrapper[dart.implements] = () => [StreamSinkOfT()];
    dart.setMethodSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getMethods(_StreamSinkWrapper.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(async.Future, []),
      addStream: dart.fnType(async.Future, [core.Object])
    }));
    dart.setGetterSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getGetters(_StreamSinkWrapper.__proto__),
      done: async.Future
    }));
    dart.setFieldSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getFields(_StreamSinkWrapper.__proto__),
      [_target]: dart.finalFieldType(StreamControllerOfT())
    }));
    return _StreamSinkWrapper;
  });
  src__subjects__subject._StreamSinkWrapper = src__subjects__subject._StreamSinkWrapper$();
  dart.addTypeTests(src__subjects__subject._StreamSinkWrapper, _is__StreamSinkWrapper_default);
  const _is_GroupByObservable_default = Symbol('_is_GroupByObservable_default');
  src__transformers__group_by.GroupByObservable$ = dart.generic((T, S) => {
    class GroupByObservable extends src__observables__observable.Observable$(T) {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
    }
    (GroupByObservable.new = function(key, stream) {
      this[key$] = key;
      GroupByObservable.__proto__.new.call(this, stream);
    }).prototype = GroupByObservable.prototype;
    dart.addTypeTests(GroupByObservable);
    GroupByObservable.prototype[_is_GroupByObservable_default] = true;
    const key$ = Symbol("GroupByObservable.key");
    dart.setFieldSignature(GroupByObservable, () => ({
      __proto__: dart.getFields(GroupByObservable.__proto__),
      key: dart.finalFieldType(S)
    }));
    return GroupByObservable;
  });
  src__transformers__group_by.GroupByObservable = src__transformers__group_by.GroupByObservable$();
  dart.addTypeTests(src__transformers__group_by.GroupByObservable, _is_GroupByObservable_default);
  const _is_GroupByStreamTransformer_default = Symbol('_is_GroupByStreamTransformer_default');
  src__transformers__group_by.GroupByStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let TToS = () => (TToS = dart.constFn(dart.fnType(S, [T])))();
    class GroupByStreamTransformer extends async.StreamTransformerBase$(T, src__transformers__group_by.GroupByObservable$(T, S)) {
      get grouper() {
        return this[grouper$];
      }
      set grouper(value) {
        super.grouper = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__group_by.GroupByStreamTransformer._buildTransformer(T, S, this.grouper).bind(stream);
      }
      static _buildTransformer(T, S, grouper) {
        return async.StreamTransformer$(T, src__transformers__group_by.GroupByObservable$(T, S)).new(dart.fn((input, cancelOnError) => {
          let mapper = new (_js_helper.LinkedMap$(S, async.StreamController$(T))).new();
          let controller = null;
          let subscription = null;
          let controllerBuilder = forKey => dart.fn(() => {
            let groupedController = async.StreamController$(T).new();
            controller.add(new (src__transformers__group_by.GroupByObservable$(T, S)).new(forKey, groupedController.stream));
            return groupedController;
          }, dart.fnType(async.StreamController$(T), []));
          dart.fn(controllerBuilder, dart.fnType(dart.fnType(async.StreamController$(T), []), [S]));
          controller = async.StreamController$(src__transformers__group_by.GroupByObservable$(T, S)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let key = grouper(value);
                  let groupedController = mapper[$putIfAbsent](key, controllerBuilder(key));
                  groupedController.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  mapper[$values][$forEach](dart.fn(controller => controller.close(), dart.fnType(async.Future, [async.StreamController$(T)])));
                  mapper[$clear]();
                  controller.close();
                }, VoidToNull())});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(src__transformers__group_by.GroupByObservable$(T, S)), [async.Stream$(T), core.bool])));
      }
    }
    (GroupByStreamTransformer.new = function(grouper) {
      this[grouper$] = grouper;
      GroupByStreamTransformer.__proto__.new.call(this);
    }).prototype = GroupByStreamTransformer.prototype;
    dart.addTypeTests(GroupByStreamTransformer);
    GroupByStreamTransformer.prototype[_is_GroupByStreamTransformer_default] = true;
    const grouper$ = Symbol("GroupByStreamTransformer.grouper");
    dart.setMethodSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getMethods(GroupByStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__transformers__group_by.GroupByObservable$(T, S)), [core.Object])
    }));
    dart.setFieldSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getFields(GroupByStreamTransformer.__proto__),
      grouper: dart.finalFieldType(TToS())
    }));
    return GroupByStreamTransformer;
  });
  src__transformers__group_by.GroupByStreamTransformer = src__transformers__group_by.GroupByStreamTransformer$();
  dart.addTypeTests(src__transformers__group_by.GroupByStreamTransformer, _is_GroupByStreamTransformer_default);
  const _is_ValueObservable_default = Symbol('_is_ValueObservable_default');
  src__observables__value_observable.ValueObservable$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    class ValueObservable extends core.Object {}
    (ValueObservable.new = function() {
    }).prototype = ValueObservable.prototype;
    dart.addTypeTests(ValueObservable);
    ValueObservable.prototype[_is_ValueObservable_default] = true;
    ValueObservable[dart.implements] = () => [ObservableOfT()];
    return ValueObservable;
  });
  src__observables__value_observable.ValueObservable = src__observables__value_observable.ValueObservable$();
  dart.addTypeTests(src__observables__value_observable.ValueObservable, _is_ValueObservable_default);
  const _is_ReplayObservable_default = Symbol('_is_ReplayObservable_default');
  src__observables__replay_observable.ReplayObservable$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    class ReplayObservable extends core.Object {}
    (ReplayObservable.new = function() {
    }).prototype = ReplayObservable.prototype;
    dart.addTypeTests(ReplayObservable);
    ReplayObservable.prototype[_is_ReplayObservable_default] = true;
    ReplayObservable[dart.implements] = () => [ObservableOfT()];
    return ReplayObservable;
  });
  src__observables__replay_observable.ReplayObservable = src__observables__replay_observable.ReplayObservable$();
  dart.addTypeTests(src__observables__replay_observable.ReplayObservable, _is_ReplayObservable_default);
  const _is_ConnectableObservable_default = Symbol('_is_ConnectableObservable_default');
  src__observables__connectable_observable.ConnectableObservable$ = dart.generic(T => {
    class ConnectableObservable extends src__observables__observable.Observable$(T) {}
    (ConnectableObservable.new = function(stream) {
      ConnectableObservable.__proto__.new.call(this, stream);
    }).prototype = ConnectableObservable.prototype;
    dart.addTypeTests(ConnectableObservable);
    ConnectableObservable.prototype[_is_ConnectableObservable_default] = true;
    return ConnectableObservable;
  });
  src__observables__connectable_observable.ConnectableObservable = src__observables__connectable_observable.ConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.ConnectableObservable, _is_ConnectableObservable_default);
  const _source = Symbol('_source');
  const _subject = Symbol('_subject');
  const _is_PublishConnectableObservable_default = Symbol('_is_PublishConnectableObservable_default');
  src__observables__connectable_observable.PublishConnectableObservable$ = dart.generic(T => {
    let PublishSubjectOfT = () => (PublishSubjectOfT = dart.constFn(src__subjects__publish_subject.PublishSubject$(T)))();
    let PublishConnectableObservableOfT = () => (PublishConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.PublishConnectableObservable$(T)))();
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(src__observables__connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class PublishConnectableObservable extends src__observables__connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (PublishConnectableObservableOfT()).__(source, PublishSubjectOfT().new());
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
      }
      refCount() {
        let subscription = null;
        this[_subject].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
        }, VoidToNull());
        this[_subject].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject];
      }
    }
    (PublishConnectableObservable.__ = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
      PublishConnectableObservable.__proto__.new.call(this, subject);
    }).prototype = PublishConnectableObservable.prototype;
    dart.addTypeTests(PublishConnectableObservable);
    PublishConnectableObservable.prototype[_is_PublishConnectableObservable_default] = true;
    dart.setMethodSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getMethods(PublishConnectableObservable.__proto__),
      autoConnect: dart.fnType(src__observables__observable.Observable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(src__observables__observable.Observable$(T), [])
    }));
    dart.setFieldSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getFields(PublishConnectableObservable.__proto__),
      [_source]: dart.finalFieldType(StreamOfT()),
      [_subject]: dart.finalFieldType(PublishSubjectOfT())
    }));
    return PublishConnectableObservable;
  });
  src__observables__connectable_observable.PublishConnectableObservable = src__observables__connectable_observable.PublishConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.PublishConnectableObservable, _is_PublishConnectableObservable_default);
  const _is_ValueConnectableObservable_default = Symbol('_is_ValueConnectableObservable_default');
  src__observables__connectable_observable.ValueConnectableObservable$ = dart.generic(T => {
    let BehaviorSubjectOfT = () => (BehaviorSubjectOfT = dart.constFn(src__subjects__behavior_subject.BehaviorSubject$(T)))();
    let ValueConnectableObservableOfT = () => (ValueConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ValueConnectableObservable$(T)))();
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(src__observables__connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    let ValueObservableOfT = () => (ValueObservableOfT = dart.constFn(src__observables__value_observable.ValueObservable$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ValueConnectableObservable extends src__observables__connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (ValueConnectableObservableOfT()).__(source, BehaviorSubjectOfT().new());
      }
      static seeded(source, seedValue) {
        return new (ValueConnectableObservableOfT()).__(source, BehaviorSubjectOfT().seeded(seedValue));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
      }
      refCount() {
        let subscription = null;
        this[_subject].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
        }, VoidToNull());
        this[_subject].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject];
      }
      get value() {
        return this[_subject].value;
      }
      get hasValue() {
        return this[_subject].hasValue;
      }
    }
    (ValueConnectableObservable.__ = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
      ValueConnectableObservable.__proto__.new.call(this, subject);
    }).prototype = ValueConnectableObservable.prototype;
    dart.addTypeTests(ValueConnectableObservable);
    ValueConnectableObservable.prototype[_is_ValueConnectableObservable_default] = true;
    ValueConnectableObservable[dart.implements] = () => [ValueObservableOfT()];
    dart.setMethodSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getMethods(ValueConnectableObservable.__proto__),
      autoConnect: dart.fnType(src__observables__value_observable.ValueObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(src__observables__value_observable.ValueObservable$(T), [])
    }));
    dart.setGetterSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getGetters(ValueConnectableObservable.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setFieldSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getFields(ValueConnectableObservable.__proto__),
      [_source]: dart.finalFieldType(StreamOfT()),
      [_subject]: dart.finalFieldType(BehaviorSubjectOfT())
    }));
    return ValueConnectableObservable;
  });
  src__observables__connectable_observable.ValueConnectableObservable = src__observables__connectable_observable.ValueConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.ValueConnectableObservable, _is_ValueConnectableObservable_default);
  const _is_ReplayConnectableObservable_default = Symbol('_is_ReplayConnectableObservable_default');
  src__observables__connectable_observable.ReplayConnectableObservable$ = dart.generic(T => {
    let ReplaySubjectOfT = () => (ReplaySubjectOfT = dart.constFn(src__subjects__replay_subject.ReplaySubject$(T)))();
    let ReplayConnectableObservableOfT = () => (ReplayConnectableObservableOfT = dart.constFn(src__observables__connectable_observable.ReplayConnectableObservable$(T)))();
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(src__observables__connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    let ReplayObservableOfT = () => (ReplayObservableOfT = dart.constFn(src__observables__replay_observable.ReplayObservable$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ReplayConnectableObservable extends src__observables__connectable_observable.ConnectableObservable$(T) {
      static new(stream, opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return new (ReplayConnectableObservableOfT()).__(stream, ReplaySubjectOfT().new({maxSize: maxSize}));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
      }
      refCount() {
        let subscription = null;
        this[_subject].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source].listen(dart.bind(this[_subject], 'add'), {onError: dart.bind(this[_subject], 'addError')}), this[_subject]);
        }, VoidToNull());
        this[_subject].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject];
      }
      get values() {
        return this[_subject].values;
      }
    }
    (ReplayConnectableObservable.__ = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
      ReplayConnectableObservable.__proto__.new.call(this, subject);
    }).prototype = ReplayConnectableObservable.prototype;
    dart.addTypeTests(ReplayConnectableObservable);
    ReplayConnectableObservable.prototype[_is_ReplayConnectableObservable_default] = true;
    ReplayConnectableObservable[dart.implements] = () => [ReplayObservableOfT()];
    dart.setMethodSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getMethods(ReplayConnectableObservable.__proto__),
      autoConnect: dart.fnType(src__observables__replay_observable.ReplayObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(src__observables__replay_observable.ReplayObservable$(T), [])
    }));
    dart.setGetterSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getGetters(ReplayConnectableObservable.__proto__),
      values: core.List$(T)
    }));
    dart.setFieldSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getFields(ReplayConnectableObservable.__proto__),
      [_source]: dart.finalFieldType(StreamOfT()),
      [_subject]: dart.finalFieldType(ReplaySubjectOfT())
    }));
    return ReplayConnectableObservable;
  });
  src__observables__connectable_observable.ReplayConnectableObservable = src__observables__connectable_observable.ReplayConnectableObservable$();
  dart.addTypeTests(src__observables__connectable_observable.ReplayConnectableObservable, _is_ReplayConnectableObservable_default);
  const _is_ConnectableObservableStreamSubscription_default = Symbol('_is_ConnectableObservableStreamSubscription_default');
  src__observables__connectable_observable.ConnectableObservableStreamSubscription$ = dart.generic(T => {
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    let SubjectOfT = () => (SubjectOfT = dart.constFn(src__subjects__subject.Subject$(T)))();
    class ConnectableObservableStreamSubscription extends async.StreamSubscription$(T) {
      cancel() {
        this[_subject].close();
        return this[_source].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return async.Future$(E)._check(this[_source].asFuture(E, futureValue));
      }
      get isPaused() {
        return this[_source].isPaused;
      }
      onData(handleData) {
        return this[_source].onData(handleData);
      }
      onDone(handleDone) {
        return this[_source].onDone(handleDone);
      }
      onError(handleError) {
        return this[_source].onError(handleError);
      }
      pause(resumeSignal) {
        if (resumeSignal === void 0) resumeSignal = null;
        return this[_source].pause(resumeSignal);
      }
      resume() {
        return this[_source].resume();
      }
    }
    (ConnectableObservableStreamSubscription.new = function(source, subject) {
      this[_source] = source;
      this[_subject] = subject;
    }).prototype = ConnectableObservableStreamSubscription.prototype;
    dart.addTypeTests(ConnectableObservableStreamSubscription);
    ConnectableObservableStreamSubscription.prototype[_is_ConnectableObservableStreamSubscription_default] = true;
    dart.setMethodSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getMethods(ConnectableObservableStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]]),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onError: dart.fnType(dart.void, [core.Function]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getGetters(ConnectableObservableStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setFieldSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getFields(ConnectableObservableStreamSubscription.__proto__),
      [_source]: dart.finalFieldType(StreamSubscriptionOfT()),
      [_subject]: dart.finalFieldType(SubjectOfT())
    }));
    return ConnectableObservableStreamSubscription;
  });
  src__observables__connectable_observable.ConnectableObservableStreamSubscription = src__observables__connectable_observable.ConnectableObservableStreamSubscription$();
  dart.addTypeTests(src__observables__connectable_observable.ConnectableObservableStreamSubscription, _is_ConnectableObservableStreamSubscription_default);
  const _is_WrappedFuture_default = Symbol('_is_WrappedFuture_default');
  src__futures__wrapped_future.WrappedFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class WrappedFuture extends core.Object {
      get wrapped() {
        return this[wrapped$];
      }
      set wrapped(value) {
        super.wrapped = value;
      }
      asStream() {
        return this.wrapped.asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this.wrapped.catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return async.Future$(S)._check(this.wrapped.then(S, onValue, {onError: onError}));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToFutureOrOfT()._check(onTimeout);
        return this.wrapped.timeout(timeLimit, {onTimeout: onTimeout});
      }
      whenComplete(action) {
        return this.wrapped.whenComplete(action);
      }
    }
    (WrappedFuture.new = function(wrapped) {
      this[wrapped$] = wrapped;
    }).prototype = WrappedFuture.prototype;
    WrappedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(WrappedFuture);
    WrappedFuture.prototype[_is_WrappedFuture_default] = true;
    const wrapped$ = Symbol("WrappedFuture.wrapped");
    WrappedFuture[dart.implements] = () => [FutureOfT()];
    dart.setMethodSignature(WrappedFuture, () => ({
      __proto__: dart.getMethods(WrappedFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.void, [])])
    }));
    dart.setFieldSignature(WrappedFuture, () => ({
      __proto__: dart.getFields(WrappedFuture.__proto__),
      wrapped: dart.finalFieldType(FutureOfT())
    }));
    return WrappedFuture;
  });
  src__futures__wrapped_future.WrappedFuture = src__futures__wrapped_future.WrappedFuture$();
  dart.addTypeTests(src__futures__wrapped_future.WrappedFuture, _is_WrappedFuture_default);
  const _is_AsObservableFuture_default = Symbol('_is_AsObservableFuture_default');
  src__futures__as_observable_future.AsObservableFuture$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(src__observables__observable.Observable$(T)))();
    class AsObservableFuture extends src__futures__wrapped_future.WrappedFuture$(T) {
      asObservable() {
        return ObservableOfT().fromFuture(this.wrapped);
      }
    }
    (AsObservableFuture.new = function(wrapped) {
      AsObservableFuture.__proto__.new.call(this, wrapped);
    }).prototype = AsObservableFuture.prototype;
    dart.addTypeTests(AsObservableFuture);
    AsObservableFuture.prototype[_is_AsObservableFuture_default] = true;
    dart.setMethodSignature(AsObservableFuture, () => ({
      __proto__: dart.getMethods(AsObservableFuture.__proto__),
      asObservable: dart.fnType(src__observables__observable.Observable$(T), [])
    }));
    return AsObservableFuture;
  });
  src__futures__as_observable_future.AsObservableFuture = src__futures__as_observable_future.AsObservableFuture$();
  dart.addTypeTests(src__futures__as_observable_future.AsObservableFuture, _is_AsObservableFuture_default);
  const _is_BufferStreamTransformer_default = Symbol('_is_BufferStreamTransformer_default');
  src__transformers__buffer.BufferStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StreamOfListOfT = () => (StreamOfListOfT = dart.constFn(async.Stream$(ListOfT())))();
    let EventSinkOfListOfT = () => (EventSinkOfListOfT = dart.constFn(async.EventSink$(ListOfT())))();
    let TAndEventSinkOfListOfT__Tovoid = () => (TAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfListOfT()], [core.int])))();
    let ListOfTAndEventSinkOfListOfT__Tovoid = () => (ListOfTAndEventSinkOfListOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [ListOfT(), EventSinkOfListOfT()], [core.int])))();
    let StreamOfTAndFnAndFnToStreamOfListOfT = () => (StreamOfTAndFnAndFnToStreamOfListOfT = dart.constFn(dart.fnType(StreamOfListOfT(), [StreamOfT(), TAndEventSinkOfListOfT__Tovoid(), ListOfTAndEventSinkOfListOfT__Tovoid()])))();
    class BufferStreamTransformer extends async.StreamTransformerBase$(T, core.List$(T)) {
      get sampler() {
        return this[sampler$];
      }
      set sampler(value) {
        super.sampler = value;
      }
      get exhaustBufferOnDone() {
        return this[exhaustBufferOnDone$];
      }
      set exhaustBufferOnDone(value) {
        super.exhaustBufferOnDone = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__buffer.BufferStreamTransformer._buildTransformer(T, this.sampler, this.exhaustBufferOnDone).bind(stream);
      }
      static _buildTransformer(T, scheduler, exhaustBufferOnDone) {
        src__transformers__buffer.BufferStreamTransformer.assertSampler(T, scheduler);
        return async.StreamTransformer$(T, core.List$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let buffer = _interceptors.JSArray$(T).of([]);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (dart.test(exhaustBufferOnDone) && dart.test(buffer[$isNotEmpty])) controller.add(core.List$(T).from(buffer));
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(core.List$(T)).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = scheduler(input, dart.fn((data, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = null;
                  buffer[$add](data);
                  sink.add(buffer);
                }, dart.fnType(core.Null, [T, async.EventSink$(core.List$(T))], [core.int])), dart.fn((_, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  startBufferEvery != null ? startBufferEvery : 0;
                  sink.add(core.List$(T).unmodifiable(buffer));
                  buffer = dart.notNull(startBufferEvery) > 0 && dart.notNull(startBufferEvery) < dart.notNull(buffer[$length]) ? buffer[$sublist](startBufferEvery) : _interceptors.JSArray$(T).of([]);
                }, dart.fnType(core.Null, [core.List$(T), async.EventSink$(core.List$(T))], [core.int]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(core.List$(T)), [async.Stream$(T), core.bool])));
      }
      static assertSampler(T, scheduler) {
        if (scheduler == null) {
          dart.throw(new core.ArgumentError.new("scheduler cannot be null"));
        }
      }
    }
    (BufferStreamTransformer.new = function(sampler, opts) {
      let exhaustBufferOnDone = opts && 'exhaustBufferOnDone' in opts ? opts.exhaustBufferOnDone : true;
      this[sampler$] = sampler;
      this[exhaustBufferOnDone$] = exhaustBufferOnDone;
      BufferStreamTransformer.__proto__.new.call(this);
    }).prototype = BufferStreamTransformer.prototype;
    dart.addTypeTests(BufferStreamTransformer);
    BufferStreamTransformer.prototype[_is_BufferStreamTransformer_default] = true;
    const sampler$ = Symbol("BufferStreamTransformer.sampler");
    const exhaustBufferOnDone$ = Symbol("BufferStreamTransformer.exhaustBufferOnDone");
    dart.setMethodSignature(BufferStreamTransformer, () => ({
      __proto__: dart.getMethods(BufferStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(core.List$(T)), [core.Object])
    }));
    dart.setFieldSignature(BufferStreamTransformer, () => ({
      __proto__: dart.getFields(BufferStreamTransformer.__proto__),
      sampler: dart.finalFieldType(StreamOfTAndFnAndFnToStreamOfListOfT()),
      exhaustBufferOnDone: dart.finalFieldType(core.bool)
    }));
    return BufferStreamTransformer;
  });
  src__transformers__buffer.BufferStreamTransformer = src__transformers__buffer.BufferStreamTransformer$();
  dart.addTypeTests(src__transformers__buffer.BufferStreamTransformer, _is_BufferStreamTransformer_default);
  const _is_DebounceStreamTransformer_default = Symbol('_is_DebounceStreamTransformer_default');
  src__transformers__debounce.DebounceStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DebounceStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, duration) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let lastEvent = null;
          let controller = null;
          let subscription = null;
          let timer = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                lastEvent = value;
                try {
                  src__transformers__debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(lastEvent);
                    lastEvent = null;
                  }, VoidToNull()));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  src__transformers__debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
                  if (lastEvent != null) {
                    async.scheduleMicrotask(dart.fn(() => {
                      controller.add(lastEvent);
                      controller.close();
                    }, VoidToNull()));
                  } else {
                    controller.close();
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              src__transformers__debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DebounceStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__debounce.DebounceStreamTransformer._buildTransformer(T, duration);
      DebounceStreamTransformer.__proto__.new.call(this);
    }).prototype = DebounceStreamTransformer.prototype;
    dart.addTypeTests(DebounceStreamTransformer);
    DebounceStreamTransformer.prototype[_is_DebounceStreamTransformer_default] = true;
    const transformer = Symbol("DebounceStreamTransformer.transformer");
    dart.setMethodSignature(DebounceStreamTransformer, () => ({
      __proto__: dart.getMethods(DebounceStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DebounceStreamTransformer, () => ({
      __proto__: dart.getFields(DebounceStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DebounceStreamTransformer;
  });
  src__transformers__debounce.DebounceStreamTransformer = src__transformers__debounce.DebounceStreamTransformer$();
  dart.addTypeTests(src__transformers__debounce.DebounceStreamTransformer, _is_DebounceStreamTransformer_default);
  const _is_DefaultIfEmptyStreamTransformer_default = Symbol('_is_DefaultIfEmptyStreamTransformer_default');
  src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DefaultIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, defaultValue) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let hasEvent = false;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasEvent = true;
                try {
                  controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasEvent) controller.add(defaultValue);
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DefaultIfEmptyStreamTransformer.new = function(defaultValue) {
      this[transformer] = src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer._buildTransformer(T, defaultValue);
      DefaultIfEmptyStreamTransformer.__proto__.new.call(this);
    }).prototype = DefaultIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(DefaultIfEmptyStreamTransformer);
    DefaultIfEmptyStreamTransformer.prototype[_is_DefaultIfEmptyStreamTransformer_default] = true;
    const transformer = Symbol("DefaultIfEmptyStreamTransformer.transformer");
    dart.setMethodSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(DefaultIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(DefaultIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DefaultIfEmptyStreamTransformer;
  });
  src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer = src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer$();
  dart.addTypeTests(src__transformers__default_if_empty.DefaultIfEmptyStreamTransformer, _is_DefaultIfEmptyStreamTransformer_default);
  const _is_DelayStreamTransformer_default = Symbol('_is_DelayStreamTransformer_default');
  src__transformers__delay.DelayStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DelayStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, duration) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let onDoneCalled = false, hasNoEvents = true;
          let timers = JSArrayOfTimer().of([]);
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasNoEvents = false;
                try {
                  let timer = null;
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(value);
                    timers[$remove](timer);
                    if (onDoneCalled && dart.test(timers[$isEmpty])) {
                      controller.close();
                    }
                  }, VoidToNull()));
                  timers[$add](timer);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasNoEvents) controller.close();
                  onDoneCalled = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              timers[$forEach](dart.fn(src__transformers__delay.DelayStreamTransformer._cancelTimerIfActive, TimerTovoid()));
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DelayStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__delay.DelayStreamTransformer._buildTransformer(T, duration);
      DelayStreamTransformer.__proto__.new.call(this);
    }).prototype = DelayStreamTransformer.prototype;
    dart.addTypeTests(DelayStreamTransformer);
    DelayStreamTransformer.prototype[_is_DelayStreamTransformer_default] = true;
    const transformer = Symbol("DelayStreamTransformer.transformer");
    dart.setMethodSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getMethods(DelayStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getFields(DelayStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DelayStreamTransformer;
  });
  src__transformers__delay.DelayStreamTransformer = src__transformers__delay.DelayStreamTransformer$();
  dart.addTypeTests(src__transformers__delay.DelayStreamTransformer, _is_DelayStreamTransformer_default);
  const _is_DematerializeStreamTransformer_default = Symbol('_is_DematerializeStreamTransformer_default');
  src__transformers__dematerialize.DematerializeStreamTransformer$ = dart.generic(T => {
    let NotificationOfT = () => (NotificationOfT = dart.constFn(src__utils__notification.Notification$(T)))();
    let StreamOfNotificationOfT = () => (StreamOfNotificationOfT = dart.constFn(async.Stream$(NotificationOfT())))();
    let StreamTransformerOfNotificationOfT$T = () => (StreamTransformerOfNotificationOfT$T = dart.constFn(async.StreamTransformer$(NotificationOfT(), T)))();
    class DematerializeStreamTransformer extends async.StreamTransformerBase$(src__utils__notification.Notification$(T), T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfNotificationOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return async.StreamTransformer$(src__utils__notification.Notification$(T), T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(notification => {
                try {
                  if (dart.test(notification.isOnData)) {
                    controller.add(notification.value);
                  } else if (dart.test(notification.isOnDone)) {
                    controller.close();
                  } else if (dart.test(notification.isOnError)) {
                    controller.addError(notification.error, notification.stackTrace);
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [src__utils__notification.Notification$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(src__utils__notification.Notification$(T)), core.bool])));
      }
    }
    (DematerializeStreamTransformer.new = function() {
      this[transformer] = src__transformers__dematerialize.DematerializeStreamTransformer._buildTransformer(T);
      DematerializeStreamTransformer.__proto__.new.call(this);
    }).prototype = DematerializeStreamTransformer.prototype;
    dart.addTypeTests(DematerializeStreamTransformer);
    DematerializeStreamTransformer.prototype[_is_DematerializeStreamTransformer_default] = true;
    const transformer = Symbol("DematerializeStreamTransformer.transformer");
    dart.setMethodSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getMethods(DematerializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getFields(DematerializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfNotificationOfT$T())
    }));
    return DematerializeStreamTransformer;
  });
  src__transformers__dematerialize.DematerializeStreamTransformer = src__transformers__dematerialize.DematerializeStreamTransformer$();
  dart.addTypeTests(src__transformers__dematerialize.DematerializeStreamTransformer, _is_DematerializeStreamTransformer_default);
  const _is_DistinctUniqueStreamTransformer_default = Symbol('_is_DistinctUniqueStreamTransformer_default');
  src__transformers__distinct_unique.DistinctUniqueStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class DistinctUniqueStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, equals, hashCode) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let collection = collection$.HashSet$(T).new({equals: equals, hashCode: hashCode});
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(collection.add(value))) controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              collection.clear();
              collection = null;
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DistinctUniqueStreamTransformer.new = function(opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
      this[transformer] = src__transformers__distinct_unique.DistinctUniqueStreamTransformer._buildTransformer(T, equals, hashCode);
      DistinctUniqueStreamTransformer.__proto__.new.call(this);
    }).prototype = DistinctUniqueStreamTransformer.prototype;
    dart.addTypeTests(DistinctUniqueStreamTransformer);
    DistinctUniqueStreamTransformer.prototype[_is_DistinctUniqueStreamTransformer_default] = true;
    const transformer = Symbol("DistinctUniqueStreamTransformer.transformer");
    dart.setMethodSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getMethods(DistinctUniqueStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getFields(DistinctUniqueStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return DistinctUniqueStreamTransformer;
  });
  src__transformers__distinct_unique.DistinctUniqueStreamTransformer = src__transformers__distinct_unique.DistinctUniqueStreamTransformer$();
  dart.addTypeTests(src__transformers__distinct_unique.DistinctUniqueStreamTransformer, _is_DistinctUniqueStreamTransformer_default);
  const _is_ExhaustMapStreamTransformer_default = Symbol('_is_ExhaustMapStreamTransformer_default');
  src__transformers__exhaust_map.ExhaustMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class ExhaustMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let inputSubscription = null;
          let outputSubscription = null;
          let inputClosed = false, outputIsEmitting = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.fn(value => {
                try {
                  if (!outputIsEmitting) {
                    outputIsEmitting = true;
                    outputSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                        outputIsEmitting = false;
                        if (inputClosed) controller.close();
                      }, VoidToNull())});
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  inputClosed = true;
                  if (!outputIsEmitting) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              inputSubscription.pause(resumeSignal);
              let t = outputSubscription;
              t == null ? null : t.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              inputSubscription.resume();
              let t = outputSubscription;
              t == null ? null : t.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield inputSubscription.cancel();
              if (outputIsEmitting) yield outputSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ExhaustMapStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__exhaust_map.ExhaustMapStreamTransformer._buildTransformer(T, S, mapper);
      ExhaustMapStreamTransformer.__proto__.new.call(this);
    }).prototype = ExhaustMapStreamTransformer.prototype;
    dart.addTypeTests(ExhaustMapStreamTransformer);
    ExhaustMapStreamTransformer.prototype[_is_ExhaustMapStreamTransformer_default] = true;
    const transformer = Symbol("ExhaustMapStreamTransformer.transformer");
    dart.setMethodSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getMethods(ExhaustMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getFields(ExhaustMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return ExhaustMapStreamTransformer;
  });
  src__transformers__exhaust_map.ExhaustMapStreamTransformer = src__transformers__exhaust_map.ExhaustMapStreamTransformer$();
  dart.addTypeTests(src__transformers__exhaust_map.ExhaustMapStreamTransformer, _is_ExhaustMapStreamTransformer_default);
  const _is_FlatMapStreamTransformer_default = Symbol('_is_FlatMapStreamTransformer_default');
  src__transformers__flat_map.FlatMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class FlatMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(S)).of([]);
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let closeAfterNextEvent = false, hasMainEvent = false, openStreams = 0;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let otherStream = mapper(value);
                  hasMainEvent = true;
                  openStreams++;
                  otherSubscription = otherStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      openStreams--;
                      subscriptions[$remove](otherSubscription);
                      if (closeAfterNextEvent && openStreams === 0) controller.close();
                    }, VoidToNull())});
                  subscriptions[$add](otherSubscription);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasMainEvent || openStreams === 0)
                    controller.close();
                  else
                    closeAfterNextEvent = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, VoidToNull()), onCancel: dart.fn(() => {
              let list = ListOfStreamSubscription().from(subscriptions);
              list[$add](subscription);
              return async.Future.wait(dart.dynamic, IterableOfFuture()._check(list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture())))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__flat_map.FlatMapStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapStreamTransformer.__proto__.new.call(this);
    }).prototype = FlatMapStreamTransformer.prototype;
    dart.addTypeTests(FlatMapStreamTransformer);
    FlatMapStreamTransformer.prototype[_is_FlatMapStreamTransformer_default] = true;
    const transformer = Symbol("FlatMapStreamTransformer.transformer");
    dart.setMethodSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return FlatMapStreamTransformer;
  });
  src__transformers__flat_map.FlatMapStreamTransformer = src__transformers__flat_map.FlatMapStreamTransformer$();
  dart.addTypeTests(src__transformers__flat_map.FlatMapStreamTransformer, _is_FlatMapStreamTransformer_default);
  const _is_FlatMapLatestStreamTransformer_default = Symbol('_is_FlatMapLatestStreamTransformer_default');
  src__transformers__flat_map_latest.FlatMapLatestStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class FlatMapLatestStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false, rightClosed = false, hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let t = otherSubscription;
                  t == null ? null : t.cancel();
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              let t = otherSubscription;
              t == null ? null : t.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
              let t = otherSubscription;
              t == null ? null : t.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield subscription.cancel();
              if (hasMainEvent) yield otherSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapLatestStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__flat_map_latest.FlatMapLatestStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapLatestStreamTransformer.__proto__.new.call(this);
    }).prototype = FlatMapLatestStreamTransformer.prototype;
    dart.addTypeTests(FlatMapLatestStreamTransformer);
    FlatMapLatestStreamTransformer.prototype[_is_FlatMapLatestStreamTransformer_default] = true;
    const transformer = Symbol("FlatMapLatestStreamTransformer.transformer");
    dart.setMethodSignature(FlatMapLatestStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapLatestStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(FlatMapLatestStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapLatestStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return FlatMapLatestStreamTransformer;
  });
  src__transformers__flat_map_latest.FlatMapLatestStreamTransformer = src__transformers__flat_map_latest.FlatMapLatestStreamTransformer$();
  dart.addTypeTests(src__transformers__flat_map_latest.FlatMapLatestStreamTransformer, _is_FlatMapLatestStreamTransformer_default);
  const _is_IgnoreElementsStreamTransformer_default = Symbol('_is_IgnoreElementsStreamTransformer_default');
  src__transformers__ignore_elements.IgnoreElementsStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class IgnoreElementsStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(null, {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IgnoreElementsStreamTransformer.new = function() {
      this[transformer] = src__transformers__ignore_elements.IgnoreElementsStreamTransformer._buildTransformer(T);
      IgnoreElementsStreamTransformer.__proto__.new.call(this);
    }).prototype = IgnoreElementsStreamTransformer.prototype;
    dart.addTypeTests(IgnoreElementsStreamTransformer);
    IgnoreElementsStreamTransformer.prototype[_is_IgnoreElementsStreamTransformer_default] = true;
    const transformer = Symbol("IgnoreElementsStreamTransformer.transformer");
    dart.setMethodSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getMethods(IgnoreElementsStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getFields(IgnoreElementsStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return IgnoreElementsStreamTransformer;
  });
  src__transformers__ignore_elements.IgnoreElementsStreamTransformer = src__transformers__ignore_elements.IgnoreElementsStreamTransformer$();
  dart.addTypeTests(src__transformers__ignore_elements.IgnoreElementsStreamTransformer, _is_IgnoreElementsStreamTransformer_default);
  const _is_IntervalStreamTransformer_default = Symbol('_is_IntervalStreamTransformer_default');
  src__transformers__interval.IntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class IntervalStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, duration) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let completer = async.Completer$(T).new();
                  async.Timer.new(duration, dart.fn(() => completer.complete(value), VoidTovoid()));
                  subscription.pause(async.Future$(T)._check(completer.future.then(T, dart.fn(event => {
                    controller.add(event);
                    return event;
                  }, dart.fnType(T, [T])))));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(() => subscription.pause(), VoidTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IntervalStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__interval.IntervalStreamTransformer._buildTransformer(T, duration);
      IntervalStreamTransformer.__proto__.new.call(this);
    }).prototype = IntervalStreamTransformer.prototype;
    dart.addTypeTests(IntervalStreamTransformer);
    IntervalStreamTransformer.prototype[_is_IntervalStreamTransformer_default] = true;
    const transformer = Symbol("IntervalStreamTransformer.transformer");
    dart.setMethodSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(IntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getFields(IntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return IntervalStreamTransformer;
  });
  src__transformers__interval.IntervalStreamTransformer = src__transformers__interval.IntervalStreamTransformer$();
  dart.addTypeTests(src__transformers__interval.IntervalStreamTransformer, _is_IntervalStreamTransformer_default);
  const _is_MapToStreamTransformer_default = Symbol('_is_MapToStreamTransformer_default');
  src__transformers__map_to.MapToStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    let StreamTransformerOfS$T = () => (StreamTransformerOfS$T = dart.constFn(async.StreamTransformer$(S, T)))();
    class MapToStreamTransformer extends async.StreamTransformerBase$(S, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfS()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(S, T, value) {
        return async.StreamTransformer$(S, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(_ => controller.add(value), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (MapToStreamTransformer.new = function(value) {
      this[transformer] = src__transformers__map_to.MapToStreamTransformer._buildTransformer(S, T, value);
      MapToStreamTransformer.__proto__.new.call(this);
    }).prototype = MapToStreamTransformer.prototype;
    dart.addTypeTests(MapToStreamTransformer);
    MapToStreamTransformer.prototype[_is_MapToStreamTransformer_default] = true;
    const transformer = Symbol("MapToStreamTransformer.transformer");
    dart.setMethodSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getMethods(MapToStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getFields(MapToStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfS$T())
    }));
    return MapToStreamTransformer;
  });
  src__transformers__map_to.MapToStreamTransformer = src__transformers__map_to.MapToStreamTransformer$();
  dart.addTypeTests(src__transformers__map_to.MapToStreamTransformer, _is_MapToStreamTransformer_default);
  const _is_MaterializeStreamTransformer_default = Symbol('_is_MaterializeStreamTransformer_default');
  src__transformers__materialize.MaterializeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let NotificationOfT = () => (NotificationOfT = dart.constFn(src__utils__notification.Notification$(T)))();
    let StreamTransformerOfT$NotificationOfT = () => (StreamTransformerOfT$NotificationOfT = dart.constFn(async.StreamTransformer$(T, NotificationOfT())))();
    class MaterializeStreamTransformer extends async.StreamTransformerBase$(T, src__utils__notification.Notification$(T)) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, src__utils__notification.Notification$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(src__utils__notification.Notification$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  controller.add(src__utils__notification.Notification$(T).onData(value));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                  controller.add(src__utils__notification.Notification$(T).onError(e, s));
                }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                  controller.add(src__utils__notification.Notification$(T).onDone());
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(src__utils__notification.Notification$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (MaterializeStreamTransformer.new = function() {
      this[transformer] = src__transformers__materialize.MaterializeStreamTransformer._buildTransformer(T);
      MaterializeStreamTransformer.__proto__.new.call(this);
    }).prototype = MaterializeStreamTransformer.prototype;
    dart.addTypeTests(MaterializeStreamTransformer);
    MaterializeStreamTransformer.prototype[_is_MaterializeStreamTransformer_default] = true;
    const transformer = Symbol("MaterializeStreamTransformer.transformer");
    dart.setMethodSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getMethods(MaterializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__utils__notification.Notification$(T)), [core.Object])
    }));
    dart.setFieldSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getFields(MaterializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$NotificationOfT())
    }));
    return MaterializeStreamTransformer;
  });
  src__transformers__materialize.MaterializeStreamTransformer = src__transformers__materialize.MaterializeStreamTransformer$();
  dart.addTypeTests(src__transformers__materialize.MaterializeStreamTransformer, _is_MaterializeStreamTransformer_default);
  const _is_TypeToken_default = Symbol('_is_TypeToken_default');
  src__utils__type_token.TypeToken$ = dart.generic(S => {
    class TypeToken extends core.Object {
      isType(other) {
        return S.is(other);
      }
      toType(other) {
        return S.as(other);
      }
    }
    (TypeToken.new = function() {
    }).prototype = TypeToken.prototype;
    dart.addTypeTests(TypeToken);
    TypeToken.prototype[_is_TypeToken_default] = true;
    dart.setMethodSignature(TypeToken, () => ({
      __proto__: dart.getMethods(TypeToken.__proto__),
      isType: dart.fnType(core.bool, [dart.dynamic]),
      toType: dart.fnType(S, [dart.dynamic])
    }));
    return TypeToken;
  });
  src__utils__type_token.TypeToken = src__utils__type_token.TypeToken$();
  dart.addTypeTests(src__utils__type_token.TypeToken, _is_TypeToken_default);
  dart.defineLazy(src__utils__type_token, {
    /*src__utils__type_token.kBool*/get kBool() {
      return dart.const(new (TypeTokenOfbool()).new());
    },
    /*src__utils__type_token.kDouble*/get kDouble() {
      return dart.const(new (TypeTokenOfdouble()).new());
    },
    /*src__utils__type_token.kInt*/get kInt() {
      return dart.const(new (TypeTokenOfint()).new());
    },
    /*src__utils__type_token.kNum*/get kNum() {
      return dart.const(new (TypeTokenOfnum()).new());
    },
    /*src__utils__type_token.kString*/get kString() {
      return dart.const(new (TypeTokenOfString()).new());
    },
    /*src__utils__type_token.kSymbol*/get kSymbol() {
      return dart.const(new (TypeTokenOfSymbol()).new());
    }
  });
  const _is_OfTypeStreamTransformer_default = Symbol('_is_OfTypeStreamTransformer_default');
  src__transformers__of_type.OfTypeStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class OfTypeStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, typeToken) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(typeToken.isType(value))) {
                    controller.add(typeToken.toType(value));
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (OfTypeStreamTransformer.new = function(typeToken) {
      this[transformer] = src__transformers__of_type.OfTypeStreamTransformer._buildTransformer(T, S, typeToken);
      OfTypeStreamTransformer.__proto__.new.call(this);
    }).prototype = OfTypeStreamTransformer.prototype;
    dart.addTypeTests(OfTypeStreamTransformer);
    OfTypeStreamTransformer.prototype[_is_OfTypeStreamTransformer_default] = true;
    const transformer = Symbol("OfTypeStreamTransformer.transformer");
    dart.setMethodSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(OfTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getFields(OfTypeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return OfTypeStreamTransformer;
  });
  src__transformers__of_type.OfTypeStreamTransformer = src__transformers__of_type.OfTypeStreamTransformer$();
  dart.addTypeTests(src__transformers__of_type.OfTypeStreamTransformer, _is_OfTypeStreamTransformer_default);
  const _is_OnErrorResumeNextStreamTransformer_default = Symbol('_is_OnErrorResumeNextStreamTransformer_default');
  src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class OnErrorResumeNextStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, recoveryStream) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              let t = inputSubscription;
              t == null ? null : t.pause(resumeSignal);
              let t$ = recoverySubscription;
              t$ == null ? null : t$.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              let t = inputSubscription;
              t == null ? null : t.resume();
              let t$ = recoverySubscription;
              t$ == null ? null : t$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(() => {
                let t = inputSubscription;
                return t == null ? null : t.cancel();
              })(), (() => {
                let t = recoverySubscription;
                return t == null ? null : t.cancel();
              })()])[$where](dart.fn(future => future != null, FutureTobool()))), VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeNextStreamTransformer.new = function(recoveryStream) {
      this[transformer] = src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer._buildTransformer(T, recoveryStream);
      OnErrorResumeNextStreamTransformer.__proto__.new.call(this);
    }).prototype = OnErrorResumeNextStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeNextStreamTransformer);
    OnErrorResumeNextStreamTransformer.prototype[_is_OnErrorResumeNextStreamTransformer_default] = true;
    const transformer = Symbol("OnErrorResumeNextStreamTransformer.transformer");
    dart.setMethodSignature(OnErrorResumeNextStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeNextStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(OnErrorResumeNextStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeNextStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return OnErrorResumeNextStreamTransformer;
  });
  src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer = src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer$();
  dart.addTypeTests(src__transformers__on_error_resume_next.OnErrorResumeNextStreamTransformer, _is_OnErrorResumeNextStreamTransformer_default);
  const _is_OnErrorResumeStreamTransformer_default = Symbol('_is_OnErrorResumeStreamTransformer_default');
  src__transformers__on_error_resume.OnErrorResumeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class OnErrorResumeStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, recoveryFn) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryFn(e).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              let t = inputSubscription;
              t == null ? null : t.pause(resumeSignal);
              let t$ = recoverySubscription;
              t$ == null ? null : t$.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              let t = inputSubscription;
              t == null ? null : t.resume();
              let t$ = recoverySubscription;
              t$ == null ? null : t$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(() => {
                let t = inputSubscription;
                return t == null ? null : t.cancel();
              })(), (() => {
                let t = recoverySubscription;
                return t == null ? null : t.cancel();
              })()])[$where](dart.fn(future => future != null, FutureTobool()))), VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeStreamTransformer.new = function(recoveryFn) {
      this[transformer] = src__transformers__on_error_resume.OnErrorResumeStreamTransformer._buildTransformer(T, recoveryFn);
      OnErrorResumeStreamTransformer.__proto__.new.call(this);
    }).prototype = OnErrorResumeStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeStreamTransformer);
    OnErrorResumeStreamTransformer.prototype[_is_OnErrorResumeStreamTransformer_default] = true;
    const transformer = Symbol("OnErrorResumeStreamTransformer.transformer");
    dart.setMethodSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return OnErrorResumeStreamTransformer;
  });
  src__transformers__on_error_resume.OnErrorResumeStreamTransformer = src__transformers__on_error_resume.OnErrorResumeStreamTransformer$();
  dart.addTypeTests(src__transformers__on_error_resume.OnErrorResumeStreamTransformer, _is_OnErrorResumeStreamTransformer_default);
  const _is_ScanStreamTransformer_default = Symbol('_is_ScanStreamTransformer_default');
  src__transformers__scan.ScanStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let SAndTAndintToS = () => (SAndTAndintToS = dart.constFn(dart.fnType(S, [S, T, core.int])))();
    class ScanStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get accumulator() {
        return this[accumulator$];
      }
      set accumulator(value) {
        super.accumulator = value;
      }
      get seed() {
        return this[seed$];
      }
      set seed(value) {
        super.seed = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__scan.ScanStreamTransformer._buildTransformer(T, S, this.accumulator, this.seed).bind(stream);
      }
      static _buildTransformer(T, S, accumulator, seed) {
        if (seed === void 0) seed = null;
        let index = 0;
        let acc = seed;
        return async.StreamTransformer$(T, S).fromHandlers({handleData: dart.fn((data, sink) => {
            acc = accumulator(acc, data, index++);
            sink.add(acc);
          }, dart.fnType(core.Null, [T, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))});
      }
    }
    (ScanStreamTransformer.new = function(accumulator, seed) {
      if (seed === void 0) seed = null;
      this[accumulator$] = accumulator;
      this[seed$] = seed;
      ScanStreamTransformer.__proto__.new.call(this);
    }).prototype = ScanStreamTransformer.prototype;
    dart.addTypeTests(ScanStreamTransformer);
    ScanStreamTransformer.prototype[_is_ScanStreamTransformer_default] = true;
    const accumulator$ = Symbol("ScanStreamTransformer.accumulator");
    const seed$ = Symbol("ScanStreamTransformer.seed");
    dart.setMethodSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getMethods(ScanStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getFields(ScanStreamTransformer.__proto__),
      accumulator: dart.finalFieldType(SAndTAndintToS()),
      seed: dart.finalFieldType(S)
    }));
    return ScanStreamTransformer;
  });
  src__transformers__scan.ScanStreamTransformer = src__transformers__scan.ScanStreamTransformer$();
  dart.addTypeTests(src__transformers__scan.ScanStreamTransformer, _is_ScanStreamTransformer_default);
  const _is_SkipUntilStreamTransformer_default = Symbol('_is_SkipUntilStreamTransformer_default');
  src__transformers__skip_until.SkipUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class SkipUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("otherStream cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let goTime = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(data => {
                if (goTime) {
                  controller.add(data);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => {
                goTime = true;
                otherSubscription.cancel();
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield (() => {
                let t = otherSubscription;
                return t == null ? null : t.cancel();
              })();
              yield (() => {
                let t = subscription;
                return t == null ? null : t.cancel();
              })();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SkipUntilStreamTransformer.new = function(otherStream) {
      this[transformer] = src__transformers__skip_until.SkipUntilStreamTransformer._buildTransformer(T, S, otherStream);
      SkipUntilStreamTransformer.__proto__.new.call(this);
    }).prototype = SkipUntilStreamTransformer.prototype;
    dart.addTypeTests(SkipUntilStreamTransformer);
    SkipUntilStreamTransformer.prototype[_is_SkipUntilStreamTransformer_default] = true;
    const transformer = Symbol("SkipUntilStreamTransformer.transformer");
    dart.setMethodSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(SkipUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getFields(SkipUntilStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return SkipUntilStreamTransformer;
  });
  src__transformers__skip_until.SkipUntilStreamTransformer = src__transformers__skip_until.SkipUntilStreamTransformer$();
  dart.addTypeTests(src__transformers__skip_until.SkipUntilStreamTransformer, _is_SkipUntilStreamTransformer_default);
  const _is_StartWithStreamTransformer_default = Symbol('_is_StartWithStreamTransformer_default');
  src__transformers__start_with.StartWithStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class StartWithStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, startValue) {
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.add(startValue);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithStreamTransformer.new = function(startValue) {
      this[transformer] = src__transformers__start_with.StartWithStreamTransformer._buildTransformer(T, startValue);
      StartWithStreamTransformer.__proto__.new.call(this);
    }).prototype = StartWithStreamTransformer.prototype;
    dart.addTypeTests(StartWithStreamTransformer);
    StartWithStreamTransformer.prototype[_is_StartWithStreamTransformer_default] = true;
    const transformer = Symbol("StartWithStreamTransformer.transformer");
    dart.setMethodSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return StartWithStreamTransformer;
  });
  src__transformers__start_with.StartWithStreamTransformer = src__transformers__start_with.StartWithStreamTransformer$();
  dart.addTypeTests(src__transformers__start_with.StartWithStreamTransformer, _is_StartWithStreamTransformer_default);
  const _is_StartWithManyStreamTransformer_default = Symbol('_is_StartWithManyStreamTransformer_default');
  src__transformers__start_with_many.StartWithManyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class StartWithManyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, startValues) {
        if (startValues == null) {
          dart.throw(new core.ArgumentError.new("startValues cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              startValues[$forEach](dart.bind(controller, 'add'));
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithManyStreamTransformer.new = function(startValues) {
      this[transformer] = src__transformers__start_with_many.StartWithManyStreamTransformer._buildTransformer(T, startValues);
      StartWithManyStreamTransformer.__proto__.new.call(this);
    }).prototype = StartWithManyStreamTransformer.prototype;
    dart.addTypeTests(StartWithManyStreamTransformer);
    StartWithManyStreamTransformer.prototype[_is_StartWithManyStreamTransformer_default] = true;
    const transformer = Symbol("StartWithManyStreamTransformer.transformer");
    dart.setMethodSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithManyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithManyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return StartWithManyStreamTransformer;
  });
  src__transformers__start_with_many.StartWithManyStreamTransformer = src__transformers__start_with_many.StartWithManyStreamTransformer$();
  dart.addTypeTests(src__transformers__start_with_many.StartWithManyStreamTransformer, _is_StartWithManyStreamTransformer_default);
  const _is_SwitchIfEmptyStreamTransformer_default = Symbol('_is_SwitchIfEmptyStreamTransformer_default');
  src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class SwitchIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, fallbackStream) {
        if (fallbackStream == null) {
          dart.throw(new core.ArgumentError.new("fallbackStream cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let defaultSubscription = null;
          let switchSubscription = null;
          let hasEvent = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
            let t = switchSubscription;
            t == null ? null : t.cancel();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              defaultSubscription = input.listen(dart.fn(value => {
                hasEvent = true;
                controller.add(value);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasEvent) {
                    controller.close();
                  } else {
                    switchSubscription = fallbackStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              let t = defaultSubscription;
              t == null ? null : t.pause(resumeSignal);
              let t$ = switchSubscription;
              t$ == null ? null : t$.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              let t = defaultSubscription;
              t == null ? null : t.resume();
              let t$ = switchSubscription;
              t$ == null ? null : t$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t = defaultSubscription;
              return t == null ? null : t.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchIfEmptyStreamTransformer.new = function(fallbackStream) {
      this[transformer] = src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer._buildTransformer(T, fallbackStream);
      SwitchIfEmptyStreamTransformer.__proto__.new.call(this);
    }).prototype = SwitchIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(SwitchIfEmptyStreamTransformer);
    SwitchIfEmptyStreamTransformer.prototype[_is_SwitchIfEmptyStreamTransformer_default] = true;
    const transformer = Symbol("SwitchIfEmptyStreamTransformer.transformer");
    dart.setMethodSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return SwitchIfEmptyStreamTransformer;
  });
  src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer = src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer$();
  dart.addTypeTests(src__transformers__switch_if_empty.SwitchIfEmptyStreamTransformer, _is_SwitchIfEmptyStreamTransformer_default);
  const _is_SwitchMapStreamTransformer_default = Symbol('_is_SwitchMapStreamTransformer_default');
  src__transformers__switch_map.SwitchMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$S = () => (StreamTransformerOfT$S = dart.constFn(async.StreamTransformer$(T, S)))();
    class SwitchMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, mapper) {
        return async.StreamTransformer$(T, S).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false, rightClosed = false, hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let t = otherSubscription;
                  t == null ? null : t.cancel();
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              let t = otherSubscription;
              t == null ? null : t.pause(resumeSignal);
            }, __ToNull()), onResume: dart.fn(() => {
              subscription.resume();
              let t = otherSubscription;
              t == null ? null : t.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield subscription.cancel();
              if (hasMainEvent) yield otherSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchMapStreamTransformer.new = function(mapper) {
      this[transformer] = src__transformers__switch_map.SwitchMapStreamTransformer._buildTransformer(T, S, mapper);
      SwitchMapStreamTransformer.__proto__.new.call(this);
    }).prototype = SwitchMapStreamTransformer.prototype;
    dart.addTypeTests(SwitchMapStreamTransformer);
    SwitchMapStreamTransformer.prototype[_is_SwitchMapStreamTransformer_default] = true;
    const transformer = Symbol("SwitchMapStreamTransformer.transformer");
    dart.setMethodSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setFieldSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$S())
    }));
    return SwitchMapStreamTransformer;
  });
  src__transformers__switch_map.SwitchMapStreamTransformer = src__transformers__switch_map.SwitchMapStreamTransformer$();
  dart.addTypeTests(src__transformers__switch_map.SwitchMapStreamTransformer, _is_SwitchMapStreamTransformer_default);
  const _is_ThrottleStreamTransformer_default = Symbol('_is_ThrottleStreamTransformer_default');
  src__transformers__throttle.ThrottleStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$T = () => (StreamTransformerOfT$T = dart.constFn(async.StreamTransformer$(T, T)))();
    class ThrottleStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, duration) {
        if (duration == null) {
          dart.throw(new core.ArgumentError.new("duration cannot be null"));
        }
        return async.StreamTransformer$(T, T).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let _timer = null;
          let _closeAfterNextEvent = false;
          function _resetTimer() {
            if (_timer != null && dart.test(_timer.isActive)) return false;
            try {
              _timer = async.Timer.new(duration, dart.fn(() => {
                if (_closeAfterNextEvent && !dart.test(controller.isClosed)) controller.close();
              }, VoidToNull()));
            } catch (e$) {
              let e = dart.getThrown(e$);
              let s = dart.stackTrace(e$);
              controller.addError(e, s);
            }
            return true;
          }
          dart.fn(_resetTimer, VoidTobool());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.where(dart.fn(_ => _resetTimer(), dart.fnType(core.bool, [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  _closeAfterNextEvent = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (ThrottleStreamTransformer.new = function(duration) {
      this[transformer] = src__transformers__throttle.ThrottleStreamTransformer._buildTransformer(T, duration);
      ThrottleStreamTransformer.__proto__.new.call(this);
    }).prototype = ThrottleStreamTransformer.prototype;
    dart.addTypeTests(ThrottleStreamTransformer);
    ThrottleStreamTransformer.prototype[_is_ThrottleStreamTransformer_default] = true;
    const transformer = Symbol("ThrottleStreamTransformer.transformer");
    dart.setMethodSignature(ThrottleStreamTransformer, () => ({
      __proto__: dart.getMethods(ThrottleStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setFieldSignature(ThrottleStreamTransformer, () => ({
      __proto__: dart.getFields(ThrottleStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$T())
    }));
    return ThrottleStreamTransformer;
  });
  src__transformers__throttle.ThrottleStreamTransformer = src__transformers__throttle.ThrottleStreamTransformer$();
  dart.addTypeTests(src__transformers__throttle.ThrottleStreamTransformer, _is_ThrottleStreamTransformer_default);
  const _is_TimeInterval_default = Symbol('_is_TimeInterval_default');
  src__transformers__time_interval.TimeInterval$ = dart.generic(T => {
    class TimeInterval extends core.Object {
      get interval() {
        return this[interval$];
      }
      set interval(value) {
        super.interval = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return src__transformers__time_interval.TimeInterval.is(other) && dart.equals(this.interval, other.interval) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.interval)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeInterval{interval: " + dart.str(this.interval) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (TimeInterval.new = function(value, interval) {
      this[value$] = value;
      this[interval$] = interval;
    }).prototype = TimeInterval.prototype;
    dart.addTypeTests(TimeInterval);
    TimeInterval.prototype[_is_TimeInterval_default] = true;
    const interval$ = Symbol("TimeInterval.interval");
    const value$ = Symbol("TimeInterval.value");
    dart.setMethodSignature(TimeInterval, () => ({
      __proto__: dart.getMethods(TimeInterval.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(TimeInterval, () => ({
      __proto__: dart.getGetters(TimeInterval.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(TimeInterval, () => ({
      __proto__: dart.getFields(TimeInterval.__proto__),
      interval: dart.finalFieldType(core.Duration),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(TimeInterval, ['_equals', 'toString']);
    dart.defineExtensionAccessors(TimeInterval, ['hashCode']);
    return TimeInterval;
  });
  src__transformers__time_interval.TimeInterval = src__transformers__time_interval.TimeInterval$();
  dart.addTypeTests(src__transformers__time_interval.TimeInterval, _is_TimeInterval_default);
  const _is_TimeIntervalStreamTransformer_default = Symbol('_is_TimeIntervalStreamTransformer_default');
  src__transformers__time_interval.TimeIntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let TimeIntervalOfT = () => (TimeIntervalOfT = dart.constFn(src__transformers__time_interval.TimeInterval$(T)))();
    let StreamTransformerOfT$TimeIntervalOfT = () => (StreamTransformerOfT$TimeIntervalOfT = dart.constFn(async.StreamTransformer$(T, TimeIntervalOfT())))();
    class TimeIntervalStreamTransformer extends async.StreamTransformerBase$(T, src__transformers__time_interval.TimeInterval$(T)) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, src__transformers__time_interval.TimeInterval$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(src__transformers__time_interval.TimeInterval$(T)).new({sync: true, onListen: dart.fn(() => {
              let stopwatch = new core.Stopwatch.new();
              stopwatch.start();
              let ems = null;
              subscription = input.listen(dart.fn(value => {
                ems = stopwatch.elapsedMicroseconds;
                stopwatch.stop();
                try {
                  controller.add(new (src__transformers__time_interval.TimeInterval$(T)).new(value, new core.Duration.new({microseconds: ems})));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                stopwatch = new core.Stopwatch.new();
                stopwatch.start();
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  stopwatch.stop();
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(src__transformers__time_interval.TimeInterval$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimeIntervalStreamTransformer.new = function() {
      this[transformer] = src__transformers__time_interval.TimeIntervalStreamTransformer._buildTransformer(T);
      TimeIntervalStreamTransformer.__proto__.new.call(this);
    }).prototype = TimeIntervalStreamTransformer.prototype;
    dart.addTypeTests(TimeIntervalStreamTransformer);
    TimeIntervalStreamTransformer.prototype[_is_TimeIntervalStreamTransformer_default] = true;
    const transformer = Symbol("TimeIntervalStreamTransformer.transformer");
    dart.setMethodSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(TimeIntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__transformers__time_interval.TimeInterval$(T)), [core.Object])
    }));
    dart.setFieldSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getFields(TimeIntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$TimeIntervalOfT())
    }));
    return TimeIntervalStreamTransformer;
  });
  src__transformers__time_interval.TimeIntervalStreamTransformer = src__transformers__time_interval.TimeIntervalStreamTransformer$();
  dart.addTypeTests(src__transformers__time_interval.TimeIntervalStreamTransformer, _is_TimeIntervalStreamTransformer_default);
  const _is_Timestamped_default = Symbol('_is_Timestamped_default');
  src__transformers__timestamp.Timestamped$ = dart.generic(T => {
    class Timestamped extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get timestamp() {
        return this[timestamp$];
      }
      set timestamp(value) {
        super.timestamp = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return src__transformers__timestamp.Timestamped.is(other) && dart.equals(this.timestamp, other.timestamp) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.timestamp)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeStamp{timestamp: " + dart.str(this.timestamp) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (Timestamped.new = function(timestamp, value) {
      this[timestamp$] = timestamp;
      this[value$] = value;
    }).prototype = Timestamped.prototype;
    dart.addTypeTests(Timestamped);
    Timestamped.prototype[_is_Timestamped_default] = true;
    const value$ = Symbol("Timestamped.value");
    const timestamp$ = Symbol("Timestamped.timestamp");
    dart.setMethodSignature(Timestamped, () => ({
      __proto__: dart.getMethods(Timestamped.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object]),
      toString: dart.fnType(core.String, []),
      [$toString]: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Timestamped, () => ({
      __proto__: dart.getGetters(Timestamped.__proto__),
      hashCode: core.int,
      [$hashCode]: core.int
    }));
    dart.setFieldSignature(Timestamped, () => ({
      __proto__: dart.getFields(Timestamped.__proto__),
      value: dart.finalFieldType(T),
      timestamp: dart.finalFieldType(core.DateTime)
    }));
    dart.defineExtensionMethods(Timestamped, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Timestamped, ['hashCode']);
    return Timestamped;
  });
  src__transformers__timestamp.Timestamped = src__transformers__timestamp.Timestamped$();
  dart.addTypeTests(src__transformers__timestamp.Timestamped, _is_Timestamped_default);
  const _is_TimestampStreamTransformer_default = Symbol('_is_TimestampStreamTransformer_default');
  src__transformers__timestamp.TimestampStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let TimestampedOfT = () => (TimestampedOfT = dart.constFn(src__transformers__timestamp.Timestamped$(T)))();
    let StreamTransformerOfT$TimestampedOfT = () => (StreamTransformerOfT$TimestampedOfT = dart.constFn(async.StreamTransformer$(T, TimestampedOfT())))();
    class TimestampStreamTransformer extends async.StreamTransformerBase$(T, src__transformers__timestamp.Timestamped$(T)) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return async.StreamTransformer$(T, src__transformers__timestamp.Timestamped$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(src__transformers__timestamp.Timestamped$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = async.Stream$(src__transformers__timestamp.Timestamped$(T))._check(input.map(src__transformers__timestamp.Timestamped$(T), dart.fn(value => new (src__transformers__timestamp.Timestamped$(T)).new(new core.DateTime.now(), value), dart.fnType(src__transformers__timestamp.Timestamped$(T), [T])))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(src__transformers__timestamp.Timestamped$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimestampStreamTransformer.new = function() {
      this[transformer] = src__transformers__timestamp.TimestampStreamTransformer._buildTransformer(T);
      TimestampStreamTransformer.__proto__.new.call(this);
    }).prototype = TimestampStreamTransformer.prototype;
    dart.addTypeTests(TimestampStreamTransformer);
    TimestampStreamTransformer.prototype[_is_TimestampStreamTransformer_default] = true;
    const transformer = Symbol("TimestampStreamTransformer.transformer");
    dart.setMethodSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getMethods(TimestampStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(src__transformers__timestamp.Timestamped$(T)), [core.Object])
    }));
    dart.setFieldSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getFields(TimestampStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$TimestampedOfT())
    }));
    return TimestampStreamTransformer;
  });
  src__transformers__timestamp.TimestampStreamTransformer = src__transformers__timestamp.TimestampStreamTransformer$();
  dart.addTypeTests(src__transformers__timestamp.TimestampStreamTransformer, _is_TimestampStreamTransformer_default);
  const _is_WindowStreamTransformer_default = Symbol('_is_WindowStreamTransformer_default');
  src__transformers__window.WindowStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let EventSinkOfStreamOfT = () => (EventSinkOfStreamOfT = dart.constFn(async.EventSink$(StreamOfT())))();
    let TAndEventSinkOfStreamOfT__Tovoid = () => (TAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndEventSinkOfStreamOfT__Tovoid = () => (StreamOfTAndEventSinkOfStreamOfT__Tovoid = dart.constFn(dart.fnType(dart.void, [StreamOfT(), EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndFnAndFnToStreamOfStreamOfT = () => (StreamOfTAndFnAndFnToStreamOfStreamOfT = dart.constFn(dart.fnType(StreamOfStreamOfT(), [StreamOfT(), TAndEventSinkOfStreamOfT__Tovoid(), StreamOfTAndEventSinkOfStreamOfT__Tovoid()])))();
    class WindowStreamTransformer extends async.StreamTransformerBase$(T, async.Stream$(T)) {
      get sampler() {
        return this[sampler$];
      }
      set sampler(value) {
        super.sampler = value;
      }
      get exhaustBufferOnDone() {
        return this[exhaustBufferOnDone$];
      }
      set exhaustBufferOnDone(value) {
        super.exhaustBufferOnDone = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return src__transformers__window.WindowStreamTransformer._buildTransformer(T, this.sampler, this.exhaustBufferOnDone).bind(stream);
      }
      static _buildTransformer(T, scheduler, exhaustBufferOnDone) {
        src__transformers__window.WindowStreamTransformer.assertSampler(T, scheduler);
        return async.StreamTransformer$(T, async.Stream$(T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let buffer = _interceptors.JSArray$(T).of([]);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (dart.test(exhaustBufferOnDone) && dart.test(buffer[$isNotEmpty])) controller.add(async.Stream$(T).fromIterable(buffer));
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(async.Stream$(T)).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = scheduler(input, dart.fn((data, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  buffer[$add](data);
                  sink.add(async.Stream$(T).fromIterable(buffer));
                }, dart.fnType(core.Null, [T, async.EventSink$(async.Stream$(T))], [core.int])), dart.fn((_, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  startBufferEvery != null ? startBufferEvery : 0;
                  sink.add(async.Stream$(T).fromIterable(buffer));
                  buffer = dart.notNull(startBufferEvery) > 0 && dart.notNull(startBufferEvery) < dart.notNull(buffer[$length]) ? buffer[$sublist](startBufferEvery) : _interceptors.JSArray$(T).of([]);
                }, dart.fnType(core.Null, [async.Stream$(T), async.EventSink$(async.Stream$(T))], [core.int]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(async.Stream$(T)), [async.Stream$(T), core.bool])));
      }
      static assertSampler(T, scheduler) {
        if (scheduler == null) {
          dart.throw(new core.ArgumentError.new("scheduler cannot be null"));
        }
      }
    }
    (WindowStreamTransformer.new = function(sampler, opts) {
      let exhaustBufferOnDone = opts && 'exhaustBufferOnDone' in opts ? opts.exhaustBufferOnDone : true;
      this[sampler$] = sampler;
      this[exhaustBufferOnDone$] = exhaustBufferOnDone;
      WindowStreamTransformer.__proto__.new.call(this);
    }).prototype = WindowStreamTransformer.prototype;
    dart.addTypeTests(WindowStreamTransformer);
    WindowStreamTransformer.prototype[_is_WindowStreamTransformer_default] = true;
    const sampler$ = Symbol("WindowStreamTransformer.sampler");
    const exhaustBufferOnDone$ = Symbol("WindowStreamTransformer.exhaustBufferOnDone");
    dart.setMethodSignature(WindowStreamTransformer, () => ({
      __proto__: dart.getMethods(WindowStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(async.Stream$(T)), [core.Object])
    }));
    dart.setFieldSignature(WindowStreamTransformer, () => ({
      __proto__: dart.getFields(WindowStreamTransformer.__proto__),
      sampler: dart.finalFieldType(StreamOfTAndFnAndFnToStreamOfStreamOfT()),
      exhaustBufferOnDone: dart.finalFieldType(core.bool)
    }));
    return WindowStreamTransformer;
  });
  src__transformers__window.WindowStreamTransformer = src__transformers__window.WindowStreamTransformer$();
  dart.addTypeTests(src__transformers__window.WindowStreamTransformer, _is_WindowStreamTransformer_default);
  const _is_WithLatestFromStreamTransformer_default = Symbol('_is_WithLatestFromStreamTransformer_default');
  src__transformers__with_latest_from.WithLatestFromStreamTransformer$ = dart.generic((T, S, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamTransformerOfT$R = () => (StreamTransformerOfT$R = dart.constFn(async.StreamTransformer$(T, R)))();
    class WithLatestFromStreamTransformer extends async.StreamTransformerBase$(T, R) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, R, latestFromStream, fn) {
        if (latestFromStream == null) {
          dart.throw(new core.ArgumentError.new("latestFromStream cannot be null"));
        } else if (fn == null) {
          dart.throw(new core.ArgumentError.new("combiner cannot be null"));
        }
        return async.StreamTransformer$(T, R).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let latestFromSubscription = null;
          let latestValue = null;
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                if (latestValue != null) {
                  try {
                    controller.add(fn(value, latestValue));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError')});
              latestFromSubscription = latestFromStream.listen(dart.fn(latest => {
                latestValue = latest;
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, __Tovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, JSArrayOfFuture().of([subscription.cancel(), latestFromSubscription.cancel()])[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(R), [async.Stream$(T), core.bool])));
      }
    }
    (WithLatestFromStreamTransformer.new = function(latestFromStream, fn) {
      this[transformer] = src__transformers__with_latest_from.WithLatestFromStreamTransformer._buildTransformer(T, S, R, latestFromStream, fn);
      WithLatestFromStreamTransformer.__proto__.new.call(this);
    }).prototype = WithLatestFromStreamTransformer.prototype;
    dart.addTypeTests(WithLatestFromStreamTransformer);
    WithLatestFromStreamTransformer.prototype[_is_WithLatestFromStreamTransformer_default] = true;
    const transformer = Symbol("WithLatestFromStreamTransformer.transformer");
    dart.setMethodSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getMethods(WithLatestFromStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setFieldSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getFields(WithLatestFromStreamTransformer.__proto__),
      transformer: dart.finalFieldType(StreamTransformerOfT$R())
    }));
    return WithLatestFromStreamTransformer;
  });
  src__transformers__with_latest_from.WithLatestFromStreamTransformer = src__transformers__with_latest_from.WithLatestFromStreamTransformer$();
  dart.addTypeTests(src__transformers__with_latest_from.WithLatestFromStreamTransformer, _is_WithLatestFromStreamTransformer_default);
  const _isDisposed = Symbol('_isDisposed');
  const _subscriptionsList = Symbol('_subscriptionsList');
  src__utils__composite_subscription.CompositeSubscription = class CompositeSubscription extends core.Object {
    get isDisposed() {
      return this[_isDisposed];
    }
    add(T, subscription) {
      if (dart.test(this.isDisposed)) dart.throw("This composite was disposed, try to use new instance instead");
      this[_subscriptionsList][$add](subscription);
      return subscription;
    }
    remove(subscription) {
      subscription.cancel();
      this[_subscriptionsList][$remove](subscription);
    }
    clear() {
      this[_subscriptionsList][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()));
      this[_subscriptionsList][$clear]();
    }
    dispose() {
      this.clear();
      this[_isDisposed] = true;
    }
  };
  (src__utils__composite_subscription.CompositeSubscription.new = function() {
    this[_isDisposed] = false;
    this[_subscriptionsList] = JSArrayOfStreamSubscription().of([]);
  }).prototype = src__utils__composite_subscription.CompositeSubscription.prototype;
  dart.addTypeTests(src__utils__composite_subscription.CompositeSubscription);
  dart.setMethodSignature(src__utils__composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getMethods(src__utils__composite_subscription.CompositeSubscription.__proto__),
    add: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription$(T)]]),
    remove: dart.fnType(dart.void, [async.StreamSubscription]),
    clear: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__utils__composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getGetters(src__utils__composite_subscription.CompositeSubscription.__proto__),
    isDisposed: core.bool
  }));
  dart.setFieldSignature(src__utils__composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getFields(src__utils__composite_subscription.CompositeSubscription.__proto__),
    [_isDisposed]: dart.fieldType(core.bool),
    [_subscriptionsList]: dart.finalFieldType(ListOfStreamSubscription())
  }));
  const _is_StreamMaxFuture_default = Symbol('_is_StreamMaxFuture_default');
  src__futures__stream_max_future.StreamMaxFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class StreamMaxFuture extends src__futures__wrapped_future.WrappedFuture$(T) {}
    (StreamMaxFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMaxFuture.__proto__.new.call(this, FutureOfT()._check(stream.toList().then(T, dart.fn(values => (() => {
        values[$sort](comparator);
        return values;
      })()[$last], ListOfTToT()))));
    }).prototype = StreamMaxFuture.prototype;
    dart.addTypeTests(StreamMaxFuture);
    StreamMaxFuture.prototype[_is_StreamMaxFuture_default] = true;
    return StreamMaxFuture;
  });
  src__futures__stream_max_future.StreamMaxFuture = src__futures__stream_max_future.StreamMaxFuture$();
  dart.addTypeTests(src__futures__stream_max_future.StreamMaxFuture, _is_StreamMaxFuture_default);
  const _is_StreamMinFuture_default = Symbol('_is_StreamMinFuture_default');
  src__futures__stream_min_future.StreamMinFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    class StreamMinFuture extends src__futures__wrapped_future.WrappedFuture$(T) {}
    (StreamMinFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMinFuture.__proto__.new.call(this, FutureOfT()._check(stream.toList().then(T, dart.fn(values => (() => {
        values[$sort](comparator);
        return values;
      })()[$first], ListOfTToT()))));
    }).prototype = StreamMinFuture.prototype;
    dart.addTypeTests(StreamMinFuture);
    StreamMinFuture.prototype[_is_StreamMinFuture_default] = true;
    return StreamMinFuture;
  });
  src__futures__stream_min_future.StreamMinFuture = src__futures__stream_min_future.StreamMinFuture$();
  dart.addTypeTests(src__futures__stream_min_future.StreamMinFuture, _is_StreamMinFuture_default);
  dart.trackLibraries("packages/rxdart/futures.ddc", {
    "package:rxdart/src/subjects/replay_subject.dart": src__subjects__replay_subject,
    "package:rxdart/src/subjects/publish_subject.dart": src__subjects__publish_subject,
    "package:rxdart/src/subjects/behavior_subject.dart": src__subjects__behavior_subject,
    "package:rxdart/src/subjects/subject.dart": src__subjects__subject,
    "package:rxdart/subjects.dart": subjects,
    "package:rxdart/src/transformers/group_by.dart": src__transformers__group_by,
    "package:rxdart/transformers.dart": transformers,
    "package:rxdart/src/observables/value_observable.dart": src__observables__value_observable,
    "package:rxdart/src/observables/observable.dart": src__observables__observable,
    "package:rxdart/src/observables/replay_observable.dart": src__observables__replay_observable,
    "package:rxdart/src/observables/connectable_observable.dart": src__observables__connectable_observable,
    "package:rxdart/rxdart.dart": rxdart,
    "package:rxdart/src/futures/as_observable_future.dart": src__futures__as_observable_future,
    "package:rxdart/futures.dart": futures,
    "package:rxdart/src/transformers/buffer.dart": src__transformers__buffer,
    "package:rxdart/src/transformers/debounce.dart": src__transformers__debounce,
    "package:rxdart/src/transformers/default_if_empty.dart": src__transformers__default_if_empty,
    "package:rxdart/src/transformers/delay.dart": src__transformers__delay,
    "package:rxdart/src/transformers/dematerialize.dart": src__transformers__dematerialize,
    "package:rxdart/src/transformers/distinct_unique.dart": src__transformers__distinct_unique,
    "package:rxdart/src/transformers/exhaust_map.dart": src__transformers__exhaust_map,
    "package:rxdart/src/transformers/flat_map.dart": src__transformers__flat_map,
    "package:rxdart/src/transformers/flat_map_latest.dart": src__transformers__flat_map_latest,
    "package:rxdart/src/transformers/ignore_elements.dart": src__transformers__ignore_elements,
    "package:rxdart/src/transformers/interval.dart": src__transformers__interval,
    "package:rxdart/src/transformers/map_to.dart": src__transformers__map_to,
    "package:rxdart/src/transformers/materialize.dart": src__transformers__materialize,
    "package:rxdart/src/utils/type_token.dart": src__utils__type_token,
    "package:rxdart/src/transformers/of_type.dart": src__transformers__of_type,
    "package:rxdart/src/transformers/on_error_resume_next.dart": src__transformers__on_error_resume_next,
    "package:rxdart/src/transformers/on_error_resume.dart": src__transformers__on_error_resume,
    "package:rxdart/src/transformers/scan.dart": src__transformers__scan,
    "package:rxdart/src/transformers/skip_until.dart": src__transformers__skip_until,
    "package:rxdart/src/transformers/start_with.dart": src__transformers__start_with,
    "package:rxdart/src/transformers/start_with_many.dart": src__transformers__start_with_many,
    "package:rxdart/src/transformers/switch_if_empty.dart": src__transformers__switch_if_empty,
    "package:rxdart/src/transformers/switch_map.dart": src__transformers__switch_map,
    "package:rxdart/src/transformers/throttle.dart": src__transformers__throttle,
    "package:rxdart/src/transformers/time_interval.dart": src__transformers__time_interval,
    "package:rxdart/src/transformers/timestamp.dart": src__transformers__timestamp,
    "package:rxdart/src/transformers/window.dart": src__transformers__window,
    "package:rxdart/src/transformers/with_latest_from.dart": src__transformers__with_latest_from,
    "package:rxdart/src/utils/composite_subscription.dart": src__utils__composite_subscription,
    "package:rxdart/src/futures/wrapped_future.dart": src__futures__wrapped_future,
    "package:rxdart/src/futures/stream_max_future.dart": src__futures__stream_max_future,
    "package:rxdart/src/futures/stream_min_future.dart": src__futures__stream_min_future
  }, '{"version":3,"sourceRoot":"","sources":["src/observables/observable.dart","src/subjects/subject.dart","src/subjects/replay_subject.dart","src/subjects/publish_subject.dart","src/subjects/behavior_subject.dart","src/transformers/group_by.dart","src/observables/value_observable.dart","src/observables/replay_observable.dart","src/observables/connectable_observable.dart","src/futures/wrapped_future.dart","src/futures/as_observable_future.dart","src/transformers/buffer.dart","src/transformers/debounce.dart","src/transformers/default_if_empty.dart","src/transformers/delay.dart","src/transformers/dematerialize.dart","src/transformers/distinct_unique.dart","src/transformers/exhaust_map.dart","src/transformers/flat_map.dart","src/transformers/flat_map_latest.dart","src/transformers/ignore_elements.dart","src/transformers/interval.dart","src/transformers/map_to.dart","src/transformers/materialize.dart","src/utils/type_token.dart","src/transformers/of_type.dart","src/transformers/on_error_resume_next.dart","src/transformers/on_error_resume.dart","src/transformers/scan.dart","src/transformers/skip_until.dart","src/transformers/start_with.dart","src/transformers/start_with_many.dart","src/transformers/switch_if_empty.dart","src/transformers/switch_map.dart","src/transformers/throttle.dart","src/transformers/time_interval.dart","src/transformers/timestamp.dart","src/transformers/window.dart","src/transformers/with_latest_from.dart","src/utils/composite_subscription.dart","src/futures/stream_max_future.dart","src/futures/stream_min_future.dart"],"names":[],"mappings":"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","file":"futures.ddc.js"}');
  // Exports:
  return {
    src__subjects__replay_subject: src__subjects__replay_subject,
    src__subjects__publish_subject: src__subjects__publish_subject,
    src__subjects__behavior_subject: src__subjects__behavior_subject,
    src__subjects__subject: src__subjects__subject,
    subjects: subjects,
    src__transformers__group_by: src__transformers__group_by,
    transformers: transformers,
    src__observables__value_observable: src__observables__value_observable,
    src__observables__observable: src__observables__observable,
    src__observables__replay_observable: src__observables__replay_observable,
    src__observables__connectable_observable: src__observables__connectable_observable,
    rxdart: rxdart,
    src__futures__as_observable_future: src__futures__as_observable_future,
    futures: futures,
    src__transformers__buffer: src__transformers__buffer,
    src__transformers__debounce: src__transformers__debounce,
    src__transformers__default_if_empty: src__transformers__default_if_empty,
    src__transformers__delay: src__transformers__delay,
    src__transformers__dematerialize: src__transformers__dematerialize,
    src__transformers__distinct_unique: src__transformers__distinct_unique,
    src__transformers__exhaust_map: src__transformers__exhaust_map,
    src__transformers__flat_map: src__transformers__flat_map,
    src__transformers__flat_map_latest: src__transformers__flat_map_latest,
    src__transformers__ignore_elements: src__transformers__ignore_elements,
    src__transformers__interval: src__transformers__interval,
    src__transformers__map_to: src__transformers__map_to,
    src__transformers__materialize: src__transformers__materialize,
    src__utils__type_token: src__utils__type_token,
    src__transformers__of_type: src__transformers__of_type,
    src__transformers__on_error_resume_next: src__transformers__on_error_resume_next,
    src__transformers__on_error_resume: src__transformers__on_error_resume,
    src__transformers__scan: src__transformers__scan,
    src__transformers__skip_until: src__transformers__skip_until,
    src__transformers__start_with: src__transformers__start_with,
    src__transformers__start_with_many: src__transformers__start_with_many,
    src__transformers__switch_if_empty: src__transformers__switch_if_empty,
    src__transformers__switch_map: src__transformers__switch_map,
    src__transformers__throttle: src__transformers__throttle,
    src__transformers__time_interval: src__transformers__time_interval,
    src__transformers__timestamp: src__transformers__timestamp,
    src__transformers__window: src__transformers__window,
    src__transformers__with_latest_from: src__transformers__with_latest_from,
    src__utils__composite_subscription: src__utils__composite_subscription,
    src__futures__wrapped_future: src__futures__wrapped_future,
    src__futures__stream_max_future: src__futures__stream_max_future,
    src__futures__stream_min_future: src__futures__stream_min_future
  };
});

//# sourceMappingURL=futures.ddc.js.map
