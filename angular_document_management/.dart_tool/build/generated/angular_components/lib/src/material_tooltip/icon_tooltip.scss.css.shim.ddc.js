define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/material_popup/material_popup', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/focus/focus', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_tooltip/module', 'packages/angular/angular.template', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/content/deferred_content_aware.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/laminate/popup/popup.template', 'packages/angular_components/material_tooltip/module.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/src/material_tooltip/tooltip_controller.template', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/focus/keyboard_only_focus_indicator', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/focus/keyboard_only_focus_indicator.template', 'packages/angular_components/theme/dark_theme.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/utils/browser/feature_detector/feature_detector.template', 'packages/angular_components/utils/disposer/disposer.template'], function(dart_sdk, view_type, change_detection, modules, icon_tooltip, material_popup, material_popup$, popup_hierarchy, ng_zone, overlay_ref, dom_service, zindexer, alignment, focus, modal, deferred_content_aware, material_dropdown_base, tooltip_controller, disposer, module, angular, deferred_content, deferred_content_aware$, focus$, alignment$, popup, module$, css, tooltip_controller$, material_icon, dom_popup_source, material_icon$, keyboard_only_focus_indicator, dark_theme, keyboard_only_focus_indicator$, dark_theme$, delayed_action, feature_detector, disposer$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__errors = change_detection.src__di__errors;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__material_tooltip__paper_tooltip = icon_tooltip.src__material_tooltip__paper_tooltip;
  const src__material_tooltip__tooltip_target$46template = icon_tooltip.src__material_tooltip__tooltip_target$46template;
  const src__material_tooltip__tooltip_target = icon_tooltip.src__material_tooltip__tooltip_target;
  const src__material_tooltip__icon_tooltip = icon_tooltip.src__material_tooltip__icon_tooltip;
  const src__material_tooltip__ink_tooltip$46template = icon_tooltip.src__material_tooltip__ink_tooltip$46template;
  const src__material_tooltip__tooltip_source$46template = icon_tooltip.src__material_tooltip__tooltip_source$46template;
  const material_popup__material_popup = material_popup.material_popup__material_popup;
  const material_popup__material_popup$46template = material_popup$.material_popup__material_popup$46template;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const focus__focus = focus.focus__focus;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_tooltip__module = module.material_tooltip__module;
  const angular$46template = angular.angular$46template;
  const content__deferred_content$46template = deferred_content.content__deferred_content$46template;
  const content__deferred_content_aware$46template = deferred_content_aware$.content__deferred_content_aware$46template;
  const focus__focus$46template = focus$.focus__focus$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const material_tooltip__module$46template = module$.material_tooltip__module$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const src__material_tooltip__tooltip_controller$46template = tooltip_controller$.src__material_tooltip__tooltip_controller$46template;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const focus__keyboard_only_focus_indicator = keyboard_only_focus_indicator.focus__keyboard_only_focus_indicator;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const focus__keyboard_only_focus_indicator$46template = keyboard_only_focus_indicator$.focus__keyboard_only_focus_indicator$46template;
  const theme__dark_theme$46template = dark_theme$.theme__dark_theme$46template;
  const model__action__delayed_action$46template = delayed_action.model__action__delayed_action$46template;
  const utils__browser__feature_detector__feature_detector$46template = feature_detector.utils__browser__feature_detector__feature_detector$46template;
  const utils__disposer__disposer$46template = disposer$.utils__disposer__disposer$46template;
  const _root = Object.create(null);
  const src__material_tooltip__paper_tooltip$46scss$46css$46shim = Object.create(_root);
  const src__material_tooltip__paper_tooltip$46template = Object.create(_root);
  const src__material_tooltip__icon_tooltip$46scss$46css$46shim = Object.create(_root);
  const src__material_tooltip__icon_tooltip$46template = Object.create(_root);
  const src__material_tooltip__tooltip$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfMaterialPaperTooltipComponent = () => (AppViewOfMaterialPaperTooltipComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)))();
  let AppViewAndintToAppViewOfMaterialPaperTooltipComponent = () => (AppViewAndintToAppViewOfMaterialPaperTooltipComponent = dart.constFn(dart.fnType(AppViewOfMaterialPaperTooltipComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMaterialPopupComponent = () => (JSArrayOfMaterialPopupComponent = dart.constFn(_interceptors.JSArray$(material_popup__material_popup.MaterialPopupComponent)))();
  let ListOfMaterialPopupComponent = () => (ListOfMaterialPopupComponent = dart.constFn(core.List$(material_popup__material_popup.MaterialPopupComponent)))();
  let _ViewMaterialPaperTooltipComponent1ToListOfMaterialPopupComponent = () => (_ViewMaterialPaperTooltipComponent1ToListOfMaterialPopupComponent = dart.constFn(dart.fnType(ListOfMaterialPopupComponent(), [src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1])))();
  let ComponentFactoryOfMaterialPaperTooltipComponent = () => (ComponentFactoryOfMaterialPaperTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus__focus.AutoFocusDirective, [])))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [])))();
  let ComponentRefOfMaterialPaperTooltipComponent = () => (ComponentRefOfMaterialPaperTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)))();
  let MaterialPaperTooltipComponentToTooltip = () => (MaterialPaperTooltipComponentToTooltip = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.Tooltip, [src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidToClickableTooltipTargetDirective = () => (VoidToClickableTooltipTargetDirective = dart.constFn(dart.fnType(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective, [])))();
  let VoidToKeyboardOnlyFocusIndicatorDirective = () => (VoidToKeyboardOnlyFocusIndicatorDirective = dart.constFn(dart.fnType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, [])))();
  let AppViewOfMaterialIconTooltipComponent = () => (AppViewOfMaterialIconTooltipComponent = dart.constFn(src__core__linker__app_view.AppView$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)))();
  let AppViewAndintToAppViewOfMaterialIconTooltipComponent = () => (AppViewAndintToAppViewOfMaterialIconTooltipComponent = dart.constFn(dart.fnType(AppViewOfMaterialIconTooltipComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfMaterialIconTooltipComponent = () => (ComponentFactoryOfMaterialIconTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let ComponentRefOfMaterialIconTooltipComponent = () => (ComponentRefOfMaterialIconTooltipComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)))();
  dart.defineLazy(src__material_tooltip__paper_tooltip$46scss$46css$46shim, {
    /*src__material_tooltip__paper_tooltip$46scss$46css$46shim.styles*/get styles() {
      return [".paper-container._ngcontent-%ID%{background-color:#fff;font-size:13px;line-height:20px;max-height:400px;max-width:400px;min-width:160px;padding:24px;display:flex;flex-direction:column}@media (max-width:448px){.paper-container._ngcontent-%ID%{max-width:100vw;box-sizing:border-box}}.paper-container._ngcontent-%ID% .header:not(:empty)._ngcontent-%ID%{display:block;font-weight:bold;margin-bottom:8px}.paper-container._ngcontent-%ID% .body._ngcontent-%ID%{flex-grow:1}.paper-container._ngcontent-%ID% .footer._ngcontent-%ID% material-button._ngcontent-%ID%{margin:0}"];
    }
  });
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template, {
    /*src__material_tooltip__paper_tooltip$46template.styles$MaterialPaperTooltipComponent*/get styles$MaterialPaperTooltipComponent() {
      return [src__material_tooltip__paper_tooltip$46scss$46css$46shim.styles];
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _query_MaterialPopupComponent_1_0_isDirty = Symbol('_query_MaterialPopupComponent_1_0_isDirty');
  const _NgIf_0_9 = Symbol('_NgIf_0_9');
  let const$;
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0 = class ViewMaterialPaperTooltipComponent0 extends src__core__linker__app_view.AppView$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], dart.fn(src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1, AppViewAndintToAppViewOfMaterialPaperTooltipComponent()));
      this[_NgIf_0_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_NgIf_0_9].ngIf = _ctx.popupSource != null;
      this[_appEl_0].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MaterialPopupComponent_1_0_isDirty])) {
          this.ctx.popupChild = src__core__linker__app_view_utils.firstOrNull(material_popup__material_popup.MaterialPopupComponent, this[_appEl_0].mapNestedViews(material_popup__material_popup.MaterialPopupComponent, src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, dart.fn(nestedView => JSArrayOfMaterialPopupComponent().of([nestedView[_MaterialPopupComponent_0_8]]), _ViewMaterialPaperTooltipComponent1ToListOfMaterialPopupComponent())));
          this[_query_MaterialPopupComponent_1_0_isDirty] = false;
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
    }
  };
  (src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_query_MaterialPopupComponent_1_0_isDirty] = true;
    this[_NgIf_0_9] = null;
    src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-tooltip-card"));
    let t = src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType;
    t == null ? src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/paper_tooltip.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tooltip__paper_tooltip$46template.styles$MaterialPaperTooltipComponent) : t;
    this.setupComponentType(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType);
  }).prototype = src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0);
  dart.setMethodSignature(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MaterialPopupComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_NgIf_0_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, {
    /*src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent0 = function(parentView, parentIndex) {
    return new src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template, {
    /*src__material_tooltip__paper_tooltip$46template._MaterialPaperTooltipComponentNgFactory*/get _MaterialPaperTooltipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialPaperTooltipComponent()).new("material-tooltip-card", dart.fn(src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0, AppViewAndintToAppViewOfMaterialPaperTooltipComponent())));
    }
  });
  dart.copyProperties(src__material_tooltip__paper_tooltip$46template, {
    get MaterialPaperTooltipComponentNgFactory() {
      return src__material_tooltip__paper_tooltip$46template._MaterialPaperTooltipComponentNgFactory;
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _PopupRef_0_9 = Symbol('_PopupRef_0_9');
  const __PopupHierarchy_0_12 = Symbol('__PopupHierarchy_0_12');
  const _AutoFocusDirective_2_5 = Symbol('_AutoFocusDirective_2_5');
  const _expr_1 = Symbol('_expr_1');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _el_0 = Symbol('_el_0');
  const _PopupHierarchy_0_12 = Symbol('_PopupHierarchy_0_12');
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1 = class _ViewMaterialPaperTooltipComponent1 extends src__core__linker__app_view.AppView$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) {
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    build() {
      this[_compView_0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], "enforceSpaceConstraints", "");
      this.createAttr(this[_el_0], "role", "tooltip");
      this.createAttr(this[_el_0], "trackLayoutChanges", "");
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_MaterialPopupComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), "tooltip", src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this[_el_0])), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), "tooltip", src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$2 || (const$2 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0].ref, this[_appEl_0], new src__core__linker__element_ref.ElementRef.new(this[_el_0]));
      this[_PopupRef_0_9] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      let _text_1 = html.Text.new("\n  ");
      let doc = html.document;
      let _el_2 = doc[$createElement]("div");
      _el_2.className = "paper-container";
      this.addShimC(html.HtmlElement._check(_el_2));
      this[_AutoFocusDirective_2_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(_el_2), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(this[_PopupRef_0_9])), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(_el_2), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(this[_PopupRef_0_9]));
      let _text_3 = html.Text.new("\n    ");
      _el_2[$append](_text_3);
      let _el_4 = src__core__linker__app_view.createDivAndAppend(doc, _el_2);
      _el_4.className = "header";
      this.addShimC(_el_4);
      this.project(_el_4, 0);
      let _text_5 = html.Text.new("\n    ");
      _el_2[$append](_text_5);
      let _el_6 = src__core__linker__app_view.createDivAndAppend(doc, _el_2);
      _el_6.className = "body";
      this.addShimC(_el_6);
      this.project(_el_6, 1);
      let _text_7 = html.Text.new("\n    ");
      _el_2[$append](_text_7);
      let _el_8 = src__core__linker__app_view.createDivAndAppend(doc, _el_2);
      _el_8.className = "footer";
      this.addShimC(_el_8);
      this.project(_el_8, 2);
      let _text_9 = html.Text.new("\n  ");
      _el_2[$append](_text_9);
      let _text_10 = html.Text.new("\n");
      this[_compView_0].create(this[_MaterialPopupComponent_0_8], [const$4 || (const$4 = dart.constList([], dart.dynamic)), JSArrayOfNode().of([_text_1, _el_2, _text_10]), const$5 || (const$5 = dart.constList([], dart.dynamic))]);
      _el_2[$addEventListener]("mouseover", this.eventHandler0(html.Event, dart.bind(this.ctx, 'onMouseOver')));
      _el_2[$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this.ctx, 'onMouseLeave')));
      this.init0(this[_appEl_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_PopupRef_0_9];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_PopupHierarchy_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
        this[_MaterialPopupComponent_0_8].trackLayoutChanges = true;
      }
      let currVal_1 = _ctx.focusContents;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MaterialPopupComponent_0_8].autoDismiss = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_3 = _ctx.offsetX;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialPopupComponent_0_8].offsetX = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = _ctx.offsetY;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialPopupComponent_0_8].offsetY = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_5;
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.popupSource;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_MaterialPopupComponent_0_8].source = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_8 = _ctx.showPopup;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.focusContents;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_AutoFocusDirective_2_5].autoFocus = currVal_9;
        this[_expr_9] = currVal_9;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      this[_appEl_0].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(_ctx.popupClassName == null)) {
          this[_compView_0].updateChildClass(this[_el_0], _ctx.popupClassName);
        }
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0, this.parentView)[_query_MaterialPopupComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_compView_0].destroy();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
  };
  (src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[_PopupRef_0_9] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_expr_1] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_el_0] = null;
    src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0._renderType;
  }).prototype = src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1);
  dart.setMethodSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getGetters(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [_PopupRef_0_9]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_AutoFocusDirective_2_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.int),
    [_expr_4]: dart.fieldType(core.int),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponent1 = function(parentView, parentIndex) {
    return new src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template, {
    /*src__material_tooltip__paper_tooltip$46template.styles$MaterialPaperTooltipComponentHost*/get styles$MaterialPaperTooltipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _TooltipController_0_5 = Symbol('_TooltipController_0_5');
  const _MaterialPaperTooltipComponent_0_6 = Symbol('_MaterialPaperTooltipComponent_0_6');
  const __Tooltip_0_7 = Symbol('__Tooltip_0_7');
  const _Tooltip_0_7 = Symbol('_Tooltip_0_7');
  src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0 = class _ViewMaterialPaperTooltipComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) {
    get [_Tooltip_0_7]() {
      if (this[__Tooltip_0_7] == null) {
        this[__Tooltip_0_7] = src__material_tooltip__paper_tooltip.getTooltipHandle(this[_MaterialPaperTooltipComponent_0_6]);
      }
      return this[__Tooltip_0_7];
    }
    build() {
      this[_compView_0] = new src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TooltipController_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_controller.TooltipController, dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null))), VoidToTooltipController())) : material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      this[_MaterialPaperTooltipComponent_0_6] = new src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.new(src__material_tooltip__tooltip_controller.TooltipController._check(this[_TooltipController_0_5]), this[_compView_0].ref, this.rootEl, null);
      this[_compView_0].create(this[_MaterialPaperTooltipComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialPaperTooltipComponent()).new(0, this, this.rootEl, this[_MaterialPaperTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 === nodeIndex) {
        return this[_TooltipController_0_5];
      }
      if ((token === dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 === nodeIndex) {
        return this[_MaterialPaperTooltipComponent_0_6];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.Tooltip) && 0 === nodeIndex) {
        return this[_Tooltip_0_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TooltipController_0_5] = null;
    this[_MaterialPaperTooltipComponent_0_6] = null;
    this[__Tooltip_0_7] = null;
    src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.prototype;
  dart.addTypeTests(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0);
  dart.setMethodSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getGetters(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_Tooltip_0_7]: dart.dynamic
  }));
  dart.setFieldSignature(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0),
    [_TooltipController_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialPaperTooltipComponent_0_6]: dart.fieldType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent),
    [__Tooltip_0_7]: dart.fieldType(dart.dynamic)
  }));
  src__material_tooltip__paper_tooltip$46template.viewFactory_MaterialPaperTooltipComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tooltip__paper_tooltip$46template._ViewMaterialPaperTooltipComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tooltip__paper_tooltip$46template, {
    /*src__material_tooltip__paper_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$6;
  let const$7;
  src__material_tooltip__paper_tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__paper_tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__paper_tooltip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent), src__material_tooltip__paper_tooltip$46template.MaterialPaperTooltipComponentNgFactory);
    src__di__reflector.registerDependencies(dart.fn(src__material_tooltip__paper_tooltip.getTooltipHandle, MaterialPaperTooltipComponentToTooltip()), const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.constList([dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__focus$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__module$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.defineLazy(src__material_tooltip__icon_tooltip$46scss$46css$46shim, {
    /*src__material_tooltip__icon_tooltip$46scss$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%:hover material-icon._ngcontent-%ID%,._nghost-%ID%:focus material-icon._ngcontent-%ID%{color:#3367d6}._nghost-%ID% material-icon._ngcontent-%ID%{color:rgba(0,0,0,0.54);cursor:pointer}._nghost-%ID%.acx-theme-dark:hover material-icon._ngcontent-%ID%,._nghost-%ID%.acx-theme-dark:focus material-icon._ngcontent-%ID%{color:#fff}._nghost-%ID%.acx-theme-dark material-icon._ngcontent-%ID%{color:#fff}"];
    }
  });
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template, {
    /*src__material_tooltip__icon_tooltip$46template.styles$MaterialIconTooltipComponent*/get styles$MaterialIconTooltipComponent() {
      return [src__material_tooltip__icon_tooltip$46scss$46css$46shim.styles];
    }
  });
  const _compView_1 = Symbol('_compView_1');
  const _appEl_1 = Symbol('_appEl_1');
  const _ClickableTooltipTargetDirective_1_8 = Symbol('_ClickableTooltipTargetDirective_1_8');
  const _MaterialIconComponent_1_9 = Symbol('_MaterialIconComponent_1_9');
  const _KeyboardOnlyFocusIndicatorDirective_1_10 = Symbol('_KeyboardOnlyFocusIndicatorDirective_1_10');
  const _compView_4 = Symbol('_compView_4');
  const _TooltipController_4_5 = Symbol('_TooltipController_4_5');
  const _MaterialPaperTooltipComponent_4_6 = Symbol('_MaterialPaperTooltipComponent_4_6');
  const __Tooltip_4_7 = Symbol('__Tooltip_4_7');
  const _expr_3$ = Symbol('_expr_3');
  const _expr_4$ = Symbol('_expr_4');
  const _expr_5$ = Symbol('_expr_5');
  const _expr_6$ = Symbol('_expr_6');
  const _el_1 = Symbol('_el_1');
  const _Tooltip_4_7 = Symbol('_Tooltip_4_7');
  let const$8;
  let const$9;
  const _handle_blur_1_0 = Symbol('_handle_blur_1_0');
  const _handle_click_1_1 = Symbol('_handle_click_1_1');
  let const$10;
  src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0 = class ViewMaterialIconTooltipComponent0 extends src__core__linker__app_view.AppView$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent) {
    get [_Tooltip_4_7]() {
      if (this[__Tooltip_4_7] == null) {
        this[__Tooltip_4_7] = src__material_tooltip__paper_tooltip.getTooltipHandle(this[_MaterialPaperTooltipComponent_4_6]);
      }
      return this[__Tooltip_4_7];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("    ");
      parentRenderNode[$append](_text_0);
      this[_compView_1] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.createAttr(this[_el_1], "clickableTooltipTarget", "");
      this.createAttr(this[_el_1], "keyboardOnlyFocusIndicator", "");
      this[_el_1].tabIndex = 0;
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ClickableTooltipTargetDirective_1_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective, dart.wrapType(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective), dart.fn(() => new src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_compView_1].ref), VoidToClickableTooltipTargetDirective())) : new src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_1], html.HtmlElement._check(this[_el_1]), this[_compView_1].ref);
      this[_MaterialIconComponent_1_9] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_1]));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective, dart.wrapType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective), dart.fn(() => new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex))), VoidToKeyboardOnlyFocusIndicatorDirective())) : new focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      let _text_2 = html.Text.new("\n    ");
      this[_compView_1].create(this[_MaterialIconComponent_1_9], []);
      let _text_3 = html.Text.new("\n    ");
      parentRenderNode[$append](_text_3);
      this[_compView_4] = new src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      parentRenderNode[$append](_el_4);
      this.addShimC(_el_4);
      this[_TooltipController_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_controller.TooltipController, dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null))), VoidToTooltipController())) : material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      this[_MaterialPaperTooltipComponent_4_6] = new src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent.new(src__material_tooltip__tooltip_controller.TooltipController._check(this[_TooltipController_4_5]), this[_compView_4].ref, _el_4, null);
      let _text_5 = html.Text.new("\n      ");
      let _text_6 = html.Text.new("\n    ");
      this[_compView_4].create(this[_MaterialPaperTooltipComponent_4_6], [const$8 || (const$8 = dart.constList([], dart.dynamic)), (() => {
          let _ = [_text_5];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          _[$addAll]([_text_6]);
          return _;
        })(), const$9 || (const$9 = dart.constList([], dart.dynamic))]);
      this[_el_1][$addEventListener]("blur", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_blur_1_0)));
      this[_el_1][$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_1)));
      this[_el_1][$addEventListener]("mouseover", this.eventHandler0(html.Event, dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseOver')));
      this[_el_1][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'onMouseLeave')));
      this[_el_1][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ClickableTooltipTargetDirective_1_8], 'kbTrigger')));
      this[_el_1][$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'keydown')));
      this[_el_1][$addEventListener]("mousedown", this.eventHandler0(html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'onMouseInteraction')));
      this[_el_1][$addEventListener]("focus", this.eventHandler1(html.Event, html.Event, dart.bind(this[_KeyboardOnlyFocusIndicatorDirective_1_10], 'onFocus')));
      this.ctx.tooltipBehavior = this[_ClickableTooltipTargetDirective_1_8];
      this.init(const$10 || (const$10 = dart.constList([], dart.dynamic)), null);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_TooltipController_4_5];
      }
      if ((token === dart.wrapType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialPaperTooltipComponent_4_6];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.Tooltip) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_Tooltip_4_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_tooltipRef = this[_ClickableTooltipTargetDirective_1_8];
      changed = false;
      if (firstCheck) {
        if (!(_ctx.icon == null)) {
          this[_MaterialIconComponent_1_9].icon = _ctx.icon;
          changed = true;
        }
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      let currVal_3 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialPaperTooltipComponent_4_6].preferredPositions = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.offsetX;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this[_MaterialPaperTooltipComponent_4_6].offsetX = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = _ctx.offsetY;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        this[_MaterialPaperTooltipComponent_4_6].offsetY = currVal_5;
        changed = true;
        this[_expr_5$] = currVal_5;
      }
      let currVal_6 = local_tooltipRef;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6$], currVal_6))) {
        this[_MaterialPaperTooltipComponent_4_6].tooltipRef = currVal_6;
        changed = true;
        this[_expr_6$] = currVal_6;
      }
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      this[_appEl_1].detectChangesInNestedViews();
      if (firstCheck) {
        if (!(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel == null)) {
          this.setAttr(this[_el_1], "aria-label", src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.helpTooltipLabel);
        }
        if (!(_ctx.iconSize == null)) {
          this.setAttr(this[_el_1], "size", _ctx.iconSize);
        }
      }
      this[_compView_1].detectChanges();
      this[_compView_4].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ClickableTooltipTargetDirective_1_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
      this[_compView_1].destroy();
      this[_compView_4].destroy();
      this[_ClickableTooltipTargetDirective_1_8].ngOnDestroy();
    }
    [_handle_blur_1_0]($event) {
      this[_ClickableTooltipTargetDirective_1_8].onBlur(html.FocusEvent._check($event));
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].resetOutline();
    }
    [_handle_click_1_1]($event) {
      this[_ClickableTooltipTargetDirective_1_8].onClick();
      this[_KeyboardOnlyFocusIndicatorDirective_1_10].onMouseInteraction();
    }
  };
  (src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1] = null;
    this[_ClickableTooltipTargetDirective_1_8] = null;
    this[_MaterialIconComponent_1_9] = null;
    this[_KeyboardOnlyFocusIndicatorDirective_1_10] = null;
    this[_compView_4] = null;
    this[_TooltipController_4_5] = null;
    this[_MaterialPaperTooltipComponent_4_6] = null;
    this[__Tooltip_4_7] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6$] = null;
    this[_el_1] = null;
    src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-icon-tooltip"));
    let t = src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType;
    t == null ? src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/src/material_tooltip/icon_tooltip.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__material_tooltip__icon_tooltip$46template.styles$MaterialIconTooltipComponent) : t;
    this.setupComponentType(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType);
  }).prototype = src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.prototype;
  dart.addTypeTests(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0);
  dart.setMethodSignature(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_blur_1_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_click_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getGetters(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_Tooltip_4_7]: dart.dynamic
  }));
  dart.setFieldSignature(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, () => ({
    __proto__: dart.getFields(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_ClickableTooltipTargetDirective_1_8]: dart.fieldType(src__material_tooltip__tooltip_target.ClickableTooltipTargetDirective),
    [_MaterialIconComponent_1_9]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_KeyboardOnlyFocusIndicatorDirective_1_10]: dart.fieldType(focus__keyboard_only_focus_indicator.KeyboardOnlyFocusIndicatorDirective),
    [_compView_4]: dart.fieldType(src__material_tooltip__paper_tooltip$46template.ViewMaterialPaperTooltipComponent0),
    [_TooltipController_4_5]: dart.fieldType(dart.dynamic),
    [_MaterialPaperTooltipComponent_4_6]: dart.fieldType(src__material_tooltip__paper_tooltip.MaterialPaperTooltipComponent),
    [__Tooltip_4_7]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(core.int),
    [_expr_5$]: dart.fieldType(core.int),
    [_expr_6$]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0, {
    /*src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponent0 = function(parentView, parentIndex) {
    return new src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template, {
    /*src__material_tooltip__icon_tooltip$46template._MaterialIconTooltipComponentNgFactory*/get _MaterialIconTooltipComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialIconTooltipComponent()).new("material-icon-tooltip", dart.fn(src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0, AppViewAndintToAppViewOfMaterialIconTooltipComponent())));
    }
  });
  dart.copyProperties(src__material_tooltip__icon_tooltip$46template, {
    get MaterialIconTooltipComponentNgFactory() {
      return src__material_tooltip__icon_tooltip$46template._MaterialIconTooltipComponentNgFactory;
    }
  });
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template, {
    /*src__material_tooltip__icon_tooltip$46template.styles$MaterialIconTooltipComponentHost*/get styles$MaterialIconTooltipComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _AcxDarkTheme_0_5 = Symbol('_AcxDarkTheme_0_5');
  const _MaterialIconTooltipComponent_0_6 = Symbol('_MaterialIconTooltipComponent_0_6');
  let const$11;
  let const$12;
  src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0 = class _ViewMaterialIconTooltipComponentHost0 extends src__core__linker__app_view.AppView$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent) {
    build() {
      this[_compView_0$] = new src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_AcxDarkTheme_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGet(const$11 || (const$11 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.injectorGet(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialIconTooltipComponent_0_6] = new src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent.new(theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_5]), this.rootEl, null, null, null);
      this[_compView_0$].create(this[_MaterialIconTooltipComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialIconTooltipComponent()).new(0, this, this.rootEl, this[_MaterialIconTooltipComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 === nodeIndex) {
        return this[_AcxDarkTheme_0_5];
      }
      if (token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) && 0 === nodeIndex) {
        return this[_MaterialIconTooltipComponent_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
    }
  };
  (src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_AcxDarkTheme_0_5] = null;
    this[_MaterialIconTooltipComponent_0_6] = null;
    src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.prototype;
  dart.addTypeTests(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0);
  dart.setMethodSignature(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getMethods(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0, () => ({
    __proto__: dart.getFields(src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__material_tooltip__icon_tooltip$46template.ViewMaterialIconTooltipComponent0),
    [_AcxDarkTheme_0_5]: dart.fieldType(dart.dynamic),
    [_MaterialIconTooltipComponent_0_6]: dart.fieldType(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent)
  }));
  src__material_tooltip__icon_tooltip$46template.viewFactory_MaterialIconTooltipComponentHost0 = function(parentView, parentIndex) {
    return new src__material_tooltip__icon_tooltip$46template._ViewMaterialIconTooltipComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__material_tooltip__icon_tooltip$46template, {
    /*src__material_tooltip__icon_tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__icon_tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__icon_tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__icon_tooltip$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__material_tooltip__icon_tooltip.MaterialIconTooltipComponent), src__material_tooltip__icon_tooltip$46template.MaterialIconTooltipComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content_aware$46template.initReflector();
    focus__keyboard_only_focus_indicator$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    theme__dark_theme$46template.initReflector();
    src__material_tooltip__paper_tooltip$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.defineLazy(src__material_tooltip__tooltip$46template, {
    /*src__material_tooltip__tooltip$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__material_tooltip__tooltip$46template.initReflector = function() {
    if (dart.test(src__material_tooltip__tooltip$46template._visited)) {
      return;
    }
    src__material_tooltip__tooltip$46template._visited = true;
    src__material_tooltip__ink_tooltip$46template.initReflector();
    src__material_tooltip__ink_tooltip$46template.initReflector();
    angular$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_tooltip__module$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    utils__browser__feature_detector__feature_detector$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
    src__material_tooltip__tooltip_controller$46template.initReflector();
    src__material_tooltip__tooltip_source$46template.initReflector();
    src__material_tooltip__tooltip_target$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.ddc", {
    "package:angular_components/src/material_tooltip/paper_tooltip.scss.css.shim.dart": src__material_tooltip__paper_tooltip$46scss$46css$46shim,
    "package:angular_components/src/material_tooltip/paper_tooltip.template.dart": src__material_tooltip__paper_tooltip$46template,
    "package:angular_components/src/material_tooltip/icon_tooltip.scss.css.shim.dart": src__material_tooltip__icon_tooltip$46scss$46css$46shim,
    "package:angular_components/src/material_tooltip/icon_tooltip.template.dart": src__material_tooltip__icon_tooltip$46template,
    "package:angular_components/src/material_tooltip/tooltip.template.dart": src__material_tooltip__tooltip$46template
  }, '{"version":3,"sourceRoot":"","sources":["paper_tooltip.scss.css.shim.dart","paper_tooltip.template.dart","icon_tooltip.scss.css.shim.dart","icon_tooltip.template.dart","tooltip.template.dart"],"names":[],"mappings":"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","file":"icon_tooltip.scss.css.shim.ddc.js"}');
  // Exports:
  return {
    src__material_tooltip__paper_tooltip$46scss$46css$46shim: src__material_tooltip__paper_tooltip$46scss$46css$46shim,
    src__material_tooltip__paper_tooltip$46template: src__material_tooltip__paper_tooltip$46template,
    src__material_tooltip__icon_tooltip$46scss$46css$46shim: src__material_tooltip__icon_tooltip$46scss$46css$46shim,
    src__material_tooltip__icon_tooltip$46template: src__material_tooltip__icon_tooltip$46template,
    src__material_tooltip__tooltip$46template: src__material_tooltip__tooltip$46template
  };
});

//# sourceMappingURL=icon_tooltip.scss.css.shim.ddc.js.map
