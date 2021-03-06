define(['dart_sdk', 'packages/angular_components/mixins/material_dropdown_base'], function(dart_sdk, material_dropdown_base) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const _root = Object.create(null);
  const material_menu__menu_root = Object.create(_root);
  const _dropdown = Symbol('_dropdown');
  material_menu__menu_root.MenuRoot = class MenuRoot extends core.Object {
    get visible() {
      return this[visible];
    }
    set visible(value) {
      this[visible] = value;
    }
  };
  (material_menu__menu_root.MenuRoot.new = function() {
    this[visible] = null;
  }).prototype = material_menu__menu_root.MenuRoot.prototype;
  dart.addTypeTests(material_menu__menu_root.MenuRoot);
  const visible = Symbol("MenuRoot.visible");
  dart.setFieldSignature(material_menu__menu_root.MenuRoot, () => ({
    __proto__: dart.getFields(material_menu__menu_root.MenuRoot.__proto__),
    visible: dart.fieldType(core.bool)
  }));
  material_menu__menu_root.MenuRootDirective = class MenuRootDirective extends material_menu__menu_root.MenuRoot {
    closeHierarchy() {
      this.visible = false;
      this[_dropdown].close();
    }
  };
  (material_menu__menu_root.MenuRootDirective.new = function(dropdown) {
    this[_dropdown] = dropdown;
    material_menu__menu_root.MenuRootDirective.__proto__.new.call(this);
    this.visible = true;
  }).prototype = material_menu__menu_root.MenuRootDirective.prototype;
  dart.addTypeTests(material_menu__menu_root.MenuRootDirective);
  dart.setMethodSignature(material_menu__menu_root.MenuRootDirective, () => ({
    __proto__: dart.getMethods(material_menu__menu_root.MenuRootDirective.__proto__),
    closeHierarchy: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_root.MenuRootDirective, () => ({
    __proto__: dart.getFields(material_menu__menu_root.MenuRootDirective.__proto__),
    [_dropdown]: dart.finalFieldType(mixins__material_dropdown_base.DropdownHandle)
  }));
  dart.trackLibraries("packages/angular_components/material_menu/menu_root.ddc", {
    "package:angular_components/material_menu/menu_root.dart": material_menu__menu_root
  }, '{"version":3,"sourceRoot":"","sources":["menu_root.dart"],"names":[],"mappings":";;;;;;;;;;IAiCO;;;;;;;;iBAAO;EACd;;;;;;;;;AAdI,kBAAO,GAAG;AACV,qBAAS,MAAM;IACjB;;;IAPmC,eAAS;;AAC1C,gBAAO,GAAG;EACZ","file":"menu_root.ddc.js"}');
  // Exports:
  return {
    material_menu__menu_root: material_menu__menu_root
  };
});

//# sourceMappingURL=menu_root.ddc.js.map
