define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const equatable = Object.create(_root);
  const src__equatable_utils = Object.create(_root);
  const src__equatable = Object.create(_root);
  const src__equatable_mixin = Object.create(_root);
  const $hashCode = dartx.hashCode;
  const $forEach = dartx.forEach;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $runtimeType = dartx.runtimeType;
  const $isNotEmpty = dartx.isNotEmpty;
  const $toString = dartx.toString;
  const $_equals = dartx._equals;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  src__equatable_utils.mapPropsToHashCode = function(props) {
    let hashCode = 0;
    props[$forEach](dart.fn(prop => {
      let propHashCode = core.List.is(prop) ? src__equatable_utils.mapPropsToHashCode(prop) : dart.hashCode(prop);
      hashCode = (hashCode ^ dart.notNull(propHashCode)) >>> 0;
    }, dynamicToNull()));
    return hashCode;
  };
  src__equatable_utils.equals = function(list1, list2) {
    if (list1 == list2) return true;
    if (list1 == null || list2 == null) return false;
    let length = list1[$length];
    if (length != list2[$length]) return false;
    for (let i = 0; i < dart.notNull(length); i++) {
      if (core.List.is(list1[$_get](i)) && core.List.is(list2[$_get](i))) {
        if (!dart.test(src__equatable_utils.equals(core.List.as(list1[$_get](i)), core.List.as(list2[$_get](i))))) return false;
      } else {
        if (!dart.equals(list1[$_get](i), list2[$_get](i))) return false;
      }
    }
    return true;
  };
  let const$;
  src__equatable.Equatable = class Equatable extends core.Object {
    get props() {
      return this[props$];
    }
    set props(value) {
      super.props = value;
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || src__equatable.Equatable.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.test(src__equatable_utils.equals(this.props, other.props));
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[$runtimeType])) ^ dart.notNull(src__equatable_utils.mapPropsToHashCode(this.props))) >>> 0;
    }
    toString() {
      return dart.test(this.props[$isNotEmpty]) ? dart.toString(this.props) : super.toString();
    }
  };
  (src__equatable.Equatable.new = function(props) {
    if (props === void 0) props = const$ || (const$ = dart.constList([], dart.dynamic));
    this[props$] = props;
  }).prototype = src__equatable.Equatable.prototype;
  dart.addTypeTests(src__equatable.Equatable);
  const props$ = Symbol("Equatable.props");
  dart.setMethodSignature(src__equatable.Equatable, () => ({
    __proto__: dart.getMethods(src__equatable.Equatable.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__equatable.Equatable, () => ({
    __proto__: dart.getFields(src__equatable.Equatable.__proto__),
    props: dart.finalFieldType(core.List)
  }));
  dart.defineExtensionMethods(src__equatable.Equatable, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__equatable.Equatable, ['hashCode']);
  src__equatable_mixin.EquatableMixinBase = class EquatableMixinBase extends core.Object {};
  src__equatable_mixin.EquatableMixinBase[dart.mixinOn] = Object => class EquatableMixinBase extends Object {
    get props() {
      return [];
    }
    toString() {
      return super.toString();
    }
  };
  (src__equatable_mixin.EquatableMixinBase.new = function() {
  }).prototype = src__equatable_mixin.EquatableMixinBase.prototype;
  dart.addTypeTests(src__equatable_mixin.EquatableMixinBase);
  src__equatable_mixin.EquatableMixinBase[dart.implements] = () => [core.Object];
  dart.setGetterSignature(src__equatable_mixin.EquatableMixinBase, () => ({
    __proto__: dart.getGetters(src__equatable_mixin.EquatableMixinBase.__proto__),
    props: core.List
  }));
  src__equatable_mixin.EquatableMixin = class EquatableMixin extends core.Object {};
  src__equatable_mixin.EquatableMixin[dart.mixinOn] = EquatableMixinBase => class EquatableMixin extends EquatableMixinBase {
    _equals(other) {
      if (other == null) return false;
      return this === other || src__equatable_mixin.EquatableMixin.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.test(src__equatable_utils.equals(this.props, other.props));
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this[$runtimeType])) ^ dart.notNull(src__equatable_utils.mapPropsToHashCode(this.props))) >>> 0;
    }
    toString() {
      return dart.test(this.props[$isNotEmpty]) ? dart.toString(this.props) : super.toString();
    }
  };
  (src__equatable_mixin.EquatableMixin.new = function() {
  }).prototype = src__equatable_mixin.EquatableMixin.prototype;
  dart.addTypeTests(src__equatable_mixin.EquatableMixin);
  src__equatable_mixin.EquatableMixin[dart.implements] = () => [src__equatable_mixin.EquatableMixinBase];
  dart.setMethodSignature(src__equatable_mixin.EquatableMixin, () => ({
    __proto__: dart.getMethods(src__equatable_mixin.EquatableMixin.__proto__),
    _equals: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__equatable_mixin.EquatableMixin, () => ({
    __proto__: dart.getGetters(src__equatable_mixin.EquatableMixin.__proto__),
    hashCode: core.int
  }));
  dart.trackLibraries("packages/equatable/equatable.ddc", {
    "package:equatable/equatable.dart": equatable,
    "package:equatable/src/equatable_utils.dart": src__equatable_utils,
    "package:equatable/src/equatable.dart": src__equatable,
    "package:equatable/src/equatable_mixin.dart": src__equatable_mixin
  }, '{"version":3,"sourceRoot":"","sources":["src/equatable_utils.dart","src/equatable.dart","src/equatable_mixin.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;qDAAuB,KAAU;AAC/B,QAAI,WAAW;AAEf,SAAK,UAAQ,CAAC,QAAC,IAAI;AACjB,UAAM,4BACF,IAAI,IAAW,uCAAkB,CAAC,IAAI,kBAAI,IAAI;AAClD,cAAQ,GAAG,CAAA,AAAS,QAAD,gBAAG,YAAY;;AAGpC,UAAO,SAAQ;EACjB;yCAEY,KAAU,EAAE,KAAU;AAChC,QAAI,AAAU,KAAK,IAAE,KAAK,EAAG,MAAO;AACpC,QAAI,KAAK,IAAI,QAAQ,KAAK,IAAI,MAAM,MAAO;AAC3C,QAAI,SAAS,KAAK,SAAO;AACzB,QAAI,MAAM,IAAI,KAAK,SAAO,EAAE,MAAO;AACnC,aAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,MAAM,GAAE,CAAC,IAAI;AAC/B,uBAAI,KAAK,QAAC,CAAC,mBAAa,KAAK,QAAC,CAAC,IAAW;AACxC,uBAAK,2BAAM,cAAC,KAAK,QAAC,CAAC,iBAAW,KAAK,QAAC,CAAC,MAAY,MAAO;aACnD;AACL,yBAAI,KAAK,QAAC,CAAC,GAAK,KAAK,QAAC,CAAC,IAAG,MAAO;;;AAGrC,UAAO;EACT;;;IChBa;;;;;;YASM,KAAY;UAAZ,KAAY;YACzB,AAAU,AAAa,UAAP,KAAK,gCACrB,KAAK,iBACD,kBAAW,mBAAI,KAAK,gBACpB,2BAAM,CAAC,UAAK,EAAE,KAAK,MAAM;IAAC;;YAGd,EAAqB,2BAArB,kBAAW,kBAAY,uCAAkB,CAAC,UAAK;IAAC;;uBAG/C,UAAK,aAAW,kBAAG,UAAK,IAAc,cAAc;IAAE;;2CAbhE,KAAqB;0BAAhB,QAAQ;IAAR,YAAK,GAAL,KAAK;EAAa;;;;;;;;;;;;;;;;;YCPhB;IAAE;;YAGC,eAAc;IAAE;;;EACvC;;;;;;;;;YAQmB,KAAY;UAAZ,KAAY;AAC3B,YAAO,AAAU,AAAa,UAAP,KAAK,2CACxB,KAAK,iBACD,kBAAW,mBAAI,KAAK,gBACpB,2BAAM,CAAC,UAAK,EAAE,KAAK,MAAM;IACnC;;YAGoB,EAAqB,2BAArB,kBAAW,kBAAY,uCAAkB,CAAC,UAAK;IAAC;;uBAG/C,UAAK,aAAW,kBAAG,UAAK,IAAc,cAAc;IAAE;;;EAC7E","file":"equatable.ddc.js"}');
  // Exports:
  return {
    equatable: equatable,
    src__equatable_utils: src__equatable_utils,
    src__equatable: src__equatable,
    src__equatable_mixin: src__equatable_mixin
  };
});

//# sourceMappingURL=equatable.ddc.js.map
