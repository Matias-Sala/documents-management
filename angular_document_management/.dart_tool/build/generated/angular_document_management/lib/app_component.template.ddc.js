define(['dart_sdk', 'packages/angular_document_management/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_document_management/src/document_list/documento_list_component', 'packages/angular_document_management/app_component', 'packages/angular/angular.template', 'packages/angular_components/css/mdc_web/card/mdc-card.scss.css.shim', 'packages/angular_components/app_layout/layout.scss.css.shim', 'packages/angular_components/app_layout/material_temporary_drawer.template', 'packages/angular_components/app_layout/material_temporary_drawer', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_input/material_auto_suggest_input.template', 'packages/angular_components/material_input/material_auto_suggest_input', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/highlight_provider', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/model/ui/has_factory', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_expansionpanel/material_expansionpanel.template', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/common_sales_management/common_sales_managemnet', 'packages/angular_bloc/angular_bloc.template', 'packages/angular_components/angular_components.template', 'packages/angular_forms/angular_forms.template', 'packages/angular/core.template', 'packages/angular_components/material_input/material_input.template', 'packages/angular_components/material_input/deferred_validator', 'packages/angular_forms/src/directives', 'packages/angular_components/material_input/material_input', 'packages/angular_components/material_input/material_input_default_value_accessor', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/material_input/base_material_input', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox'], function(dart_sdk, app_component$46css, view_type, change_detection, modules, module, dom_service, disposer, ng_zone, angular_2, imperative_view, dom_ruler, managed_zone, angular_2$, module$, overlay_ref, zindexer, alignment, dom_popup_source, documento_list_component, app_component, angular, mdc$45card$46scss$46css, layout$46scss$46css, material_temporary_drawer, material_temporary_drawer$, material_button, dark_theme, material_button$, material_icon, material_icon$, deferred_content_aware, button_decorator, has_disabled, material_auto_suggest_input, material_auto_suggest_input$, id_generator, popup_hierarchy, has_renderer, selection_container, highlight_provider, material_dropdown_base, has_factory, focus_interface, material_expansionpanel, material_expansionpanel$, common_sales_managemnet, angular_bloc, angular_components, angular_forms, core, material_input, deferred_validator, directives, material_input$, material_input_default_value_accessor, material_fab, material_fab$, reference, base_material_input, material_checkbox, material_checkbox$) {
  'use strict';
  const core$ = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = change_detection.src__core__change_detection__constants;
  const src__runtime__optimizations = change_detection.src__runtime__optimizations;
  const src__core__metadata__view = change_detection.src__core__metadata__view;
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__component_loader = modules.src__core__linker__component_loader;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__laminate__overlay__render__overlay_style_config = overlay_ref.src__laminate__overlay__render__overlay_style_config;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_ref.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__document_list__documento_list_component = documento_list_component.src__document_list__documento_list_component;
  const src__todo_list__todo_list_service = documento_list_component.src__todo_list__todo_list_service;
  const src__todo_list__todo_list_component = documento_list_component.src__todo_list__todo_list_component;
  const app_component$ = app_component.app_component;
  const angular$46template = angular.angular$46template;
  const css__mdc_web__card__mdc$45card$46scss$46css$46shim = mdc$45card$46scss$46css.css__mdc_web__card__mdc$45card$46scss$46css$46shim;
  const app_layout__layout$46scss$46css$46shim = layout$46scss$46css.app_layout__layout$46scss$46css$46shim;
  const app_layout__material_temporary_drawer$46template = material_temporary_drawer.app_layout__material_temporary_drawer$46template;
  const app_layout__material_temporary_drawer = material_temporary_drawer$.app_layout__material_temporary_drawer;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_input__material_auto_suggest_input$46template = material_auto_suggest_input.material_input__material_auto_suggest_input$46template;
  const material_input__material_auto_suggest_input = material_auto_suggest_input$.material_input__material_auto_suggest_input;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__highlight_provider = highlight_provider.model__ui__highlight_provider;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const model__ui__has_factory = has_factory.model__ui__has_factory;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_expansionpanel__material_expansionpanel$46template = material_expansionpanel.material_expansionpanel__material_expansionpanel$46template;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel$.material_expansionpanel__material_expansionpanel;
  const src__models__factura = common_sales_managemnet.src__models__factura;
  const angular_bloc$46template = angular_bloc.angular_bloc$46template;
  const angular_components$46template = angular_components.angular_components$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const core$46template = core.core$46template;
  const material_input__material_input$46template = material_input.material_input__material_input$46template;
  const material_input__deferred_validator = deferred_validator.material_input__deferred_validator;
  const src__directives__ng_model = directives.src__directives__ng_model;
  const src__directives__ng_control = directives.src__directives__ng_control;
  const material_input__material_input = material_input$.material_input__material_input;
  const material_input__material_input_default_value_accessor = material_input_default_value_accessor.material_input__material_input_default_value_accessor;
  const material_button__material_fab$46template = material_fab.material_button__material_fab$46template;
  const material_button__material_fab = material_fab$.material_button__material_fab;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const material_input__base_material_input = base_material_input.material_input__base_material_input;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const src__document_list__documento_list_component$46css$46shim = Object.create(_root);
  const src__document_list__documento_list_component$46template = Object.create(_root);
  const src__todo_list__todo_list_service$46template = Object.create(_root);
  const src__todo_list__todo_list_component$46css$46shim = Object.create(_root);
  const src__todo_list__todo_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core$.String, dart.dynamic)))();
  let VoidToDomService = () => (VoidToDomService = dart.constFn(dart.fnType(utils__browser__dom_service__dom_service.DomService, [])))();
  let VoidToAcxImperativeViewUtils = () => (VoidToAcxImperativeViewUtils = dart.constFn(dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, [])))();
  let VoidToAngular2ManagedZone = () => (VoidToAngular2ManagedZone = dart.constFn(dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, [])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core$.String, [])))();
  let VoidToHtmlElement = () => (VoidToHtmlElement = dart.constFn(dart.fnType(html.HtmlElement, [])))();
  let VoidToOverlayService = () => (VoidToOverlayService = dart.constFn(dart.fnType(src__laminate__overlay__overlay_service.OverlayService, [])))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core$.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let AppViewOfDocumentoListComponent = () => (AppViewOfDocumentoListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__document_list__documento_list_component.DocumentoListComponent)))();
  let AppViewAndintToAppViewOfDocumentoListComponent = () => (AppViewAndintToAppViewOfDocumentoListComponent = dart.constFn(dart.fnType(AppViewOfDocumentoListComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let ComponentFactoryOfDocumentoListComponent = () => (ComponentFactoryOfDocumentoListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__document_list__documento_list_component.DocumentoListComponent)))();
  let VoidToMaterialAutoSuggestInputComponent = () => (VoidToMaterialAutoSuggestInputComponent = dart.constFn(dart.fnType(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, [])))();
  let VoidToMaterialExpansionPanel = () => (VoidToMaterialExpansionPanel = dart.constFn(dart.fnType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, [])))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let ComponentRefOfDocumentoListComponent = () => (ComponentRefOfDocumentoListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__document_list__documento_list_component.DocumentoListComponent)))();
  let VoidToTodoListService = () => (VoidToTodoListService = dart.constFn(dart.fnType(src__todo_list__todo_list_service.TodoListService, [])))();
  let AppViewOfTodoListComponent = () => (AppViewOfTodoListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent)))();
  let AppViewAndintToAppViewOfTodoListComponent = () => (AppViewAndintToAppViewOfTodoListComponent = dart.constFn(dart.fnType(AppViewOfTodoListComponent(), [src__core__linker__app_view.AppView, core$.int])))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentFactoryOfTodoListComponent = () => (ComponentFactoryOfTodoListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__todo_list__todo_list_component.TodoListComponent)))();
  let ComponentRefOfTodoListComponent = () => (ComponentRefOfTodoListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent)))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _DocumentoListComponent_0_5 = Symbol('_DocumentoListComponent_0_5');
  const __Document_0_6 = Symbol('__Document_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10 = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11 = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12 = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13 = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14 = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15 = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16 = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17 = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18 = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19 = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20 = Symbol('__OverlayService_0_20');
  const __defaultPopupPositions_0_21 = Symbol('__defaultPopupPositions_0_21');
  const __DomPopupSourceFactory_0_22 = Symbol('__DomPopupSourceFactory_0_22');
  const _Document_0_6 = Symbol('_Document_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10 = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11 = Symbol('_ManagedZone_0_11');
  let const$;
  let const$0;
  let const$1;
  const _overlayContainerName_0_12 = Symbol('_overlayContainerName_0_12');
  let const$2;
  let const$3;
  let const$4;
  const _overlayContainerParent_0_13 = Symbol('_overlayContainerParent_0_13');
  let const$5;
  let const$6;
  let const$7;
  const _overlayContainer_0_14 = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15 = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16 = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17 = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18 = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19 = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20 = Symbol('_OverlayService_0_20');
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  const _defaultPopupPositions_0_21 = Symbol('_defaultPopupPositions_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_Document_0_6]() {
      if (this[__Document_0_6] == null) {
        this[__Document_0_6] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_DomRuler_0_10]() {
      if (this[__DomRuler_0_10] == null) {
        this[__DomRuler_0_10] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_10];
    }
    get [_ManagedZone_0_11]() {
      if (this[__ManagedZone_0_11] == null) {
        this[__ManagedZone_0_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11];
    }
    get [_overlayContainerName_0_12]() {
      if (this[__overlayContainerName_0_12] == null) {
        this[__overlayContainerName_0_12] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core$.String, const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGet(const$1 || (const$1 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12];
    }
    get [_overlayContainerParent_0_13]() {
      if (this[__overlayContainerParent_0_13] == null) {
        this[__overlayContainerParent_0_13] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$2 || (const$2 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.parentView.injectorGet(const$3 || (const$3 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6]), this.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13];
    }
    get [_overlayContainer_0_14]() {
      if (this[__overlayContainer_0_14] == null) {
        this[__overlayContainer_0_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$5 || (const$5 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_12]), html.HtmlElement._check(this[_overlayContainerParent_0_13]), this.parentView.injectorGet(const$7 || (const$7 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14];
    }
    get [_overlaySyncDom_0_15]() {
      if (this[__overlaySyncDom_0_15] == null) {
        this[__overlaySyncDom_0_15] = true;
      }
      return this[__overlaySyncDom_0_15];
    }
    get [_overlayRepositionLoop_0_16]() {
      if (this[__overlayRepositionLoop_0_16] == null) {
        this[__overlayRepositionLoop_0_16] = true;
      }
      return this[__overlayRepositionLoop_0_16];
    }
    get [_OverlayStyleConfig_0_17]() {
      if (this[__OverlayStyleConfig_0_17] == null) {
        this[__OverlayStyleConfig_0_17] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6]));
      }
      return this[__OverlayStyleConfig_0_17];
    }
    get [_ZIndexer_0_18]() {
      if (this[__ZIndexer_0_18] == null) {
        this[__ZIndexer_0_18] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18];
    }
    get [_OverlayDomRenderService_0_19]() {
      if (this[__OverlayDomRenderService_0_19] == null) {
        this[__OverlayDomRenderService_0_19] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17], html.HtmlElement._check(this[_overlayContainer_0_14]), core$.String._check(this[_overlayContainerName_0_12]), this[_DomRuler_0_10], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_9]), this[_overlaySyncDom_0_15], this[_overlayRepositionLoop_0_16], this[_ZIndexer_0_18]);
      }
      return this[__OverlayDomRenderService_0_19];
    }
    get [_OverlayService_0_20]() {
      if (this[__OverlayService_0_20] == null) {
        this[__OverlayService_0_20] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15], this[_OverlayDomRenderService_0_19], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20];
    }
    get [_defaultPopupPositions_0_21]() {
      if (this[__defaultPopupPositions_0_21] == null) {
        this[__defaultPopupPositions_0_21] = const$21 || (const$21 = dart.constList([const$8 || (const$8 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$10 || (const$10 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$9 || (const$9 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$12 || (const$12 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$11 || (const$11 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$14 || (const$14 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$13 || (const$13 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$17 || (const$17 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$15 || (const$15 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$16 || (const$16 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$20 || (const$20 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$18 || (const$18 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$19 || (const$19 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_21];
    }
    get [_DomPopupSourceFactory_0_22]() {
      if (this[__DomPopupSourceFactory_0_22] == null) {
        this[__DomPopupSourceFactory_0_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_10]);
      }
      return this[__DomPopupSourceFactory_0_22];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_DocumentoListComponent_0_5] = new src__document_list__documento_list_component.DocumentoListComponent.new();
      this[_compView_0].create(this[_DocumentoListComponent_0_5], []);
      this.init(const$22 || (const$22 = dart.constList([], dart.dynamic)), null);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11];
      }
      if (token === (const$23 || (const$23 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12];
      }
      if (token === (const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13];
      }
      if (token === (const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14];
      }
      if (token === (const$26 || (const$26 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15];
      }
      if (token === (const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20];
      }
      if (token === (const$28 || (const$28 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_22];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DocumentoListComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_DocumentoListComponent_0_5].ngOnDestroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_DocumentoListComponent_0_5] = null;
    this[__Document_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__DomRuler_0_10] = null;
    this[__ManagedZone_0_11] = null;
    this[__overlayContainerName_0_12] = null;
    this[__overlayContainerParent_0_13] = null;
    this[__overlayContainer_0_14] = null;
    this[__overlaySyncDom_0_15] = null;
    this[__overlayRepositionLoop_0_16] = null;
    this[__OverlayStyleConfig_0_17] = null;
    this[__ZIndexer_0_18] = null;
    this[__OverlayDomRenderService_0_19] = null;
    this[__OverlayService_0_20] = null;
    this[__defaultPopupPositions_0_21] = null;
    this[__DomPopupSourceFactory_0_22] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_document_management/lib/app_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getGetters(app_component$46template.ViewAppComponent0.__proto__),
    [_Document_0_6]: dart.dynamic,
    [_Window_0_7]: dart.dynamic,
    [_DomService_0_8]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9]: dart.dynamic,
    [_DomRuler_0_10]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11]: dart.dynamic,
    [_overlayContainerName_0_12]: dart.dynamic,
    [_overlayContainerParent_0_13]: dart.dynamic,
    [_overlayContainer_0_14]: dart.dynamic,
    [_overlaySyncDom_0_15]: core$.bool,
    [_overlayRepositionLoop_0_16]: core$.bool,
    [_OverlayStyleConfig_0_17]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20]: dart.dynamic,
    [_defaultPopupPositions_0_21]: core$.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_0_22]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_compView_0]: dart.fieldType(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0),
    [_DocumentoListComponent_0_5]: dart.fieldType(src__document_list__documento_list_component.DocumentoListComponent),
    [__Document_0_6]: dart.fieldType(dart.dynamic),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_10]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_12]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_0_16]: dart.fieldType(core$.bool),
    [__OverlayStyleConfig_0_17]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20]: dart.fieldType(dart.dynamic),
    [__defaultPopupPositions_0_21]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_0_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new("my-app", dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent())));
    }
  });
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(app_component$46template, {
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__document_list__documento_list_component$46template.initReflector();
    src__todo_list__todo_list_component$46template.initReflector();
  };
  dart.defineLazy(src__document_list__documento_list_component$46css$46shim, {
    /*src__document_list__documento_list_component$46css$46shim.styles*/get styles() {
      return ["._nghost-%ID%{display:block;overflow:hidden;position:relative}.controls._ngcontent-%ID%{align-items:flex-start;display:flex;flex-direction:column}.custom-width[persistent]._ngcontent-%ID%,.custom-width[permanent]._ngcontent-%ID%{width:50%}.custom-width[persistent]:not([end])._ngcontent-%ID% ~ material-content._ngcontent-%ID%,.custom-width[persistent]:not([end])._ngcontent-%ID% ~ .material-content._ngcontent-%ID%,.custom-width[permanent]:not([end])._ngcontent-%ID% ~ material-content._ngcontent-%ID%,.custom-width[permanent]:not([end])._ngcontent-%ID% ~ .material-content._ngcontent-%ID%{margin-left:50%}.custom-width[persistent][end]._ngcontent-%ID% ~ material-content._ngcontent-%ID%,.custom-width[persistent][end]._ngcontent-%ID% ~ .material-content._ngcontent-%ID%,.custom-width[permanent][end]._ngcontent-%ID% ~ material-content._ngcontent-%ID%,.custom-width[permanent][end]._ngcontent-%ID% ~ .material-content._ngcontent-%ID%{margin-right:50%}.custom-width[persistent].mat-drawer-collapsed:not([end])._ngcontent-%ID%{transform:translateX(-100%)}.custom-width[persistent].mat-drawer-collapsed:not([end])._ngcontent-%ID% ~ material-content._ngcontent-%ID%,.custom-width[persistent].mat-drawer-collapsed:not([end])._ngcontent-%ID% ~ .material-content._ngcontent-%ID%{margin-left:0}.custom-width[persistent].mat-drawer-collapsed[end]._ngcontent-%ID%{transform:translateX(100%)}.custom-width[persistent].mat-drawer-collapsed[end]._ngcontent-%ID% ~ material-content._ngcontent-%ID%,.custom-width[persistent].mat-drawer-collapsed[end]._ngcontent-%ID% ~ .material-content._ngcontent-%ID%{margin-right:0}.custom-width._ngcontent-%ID%  > .drawer-content{left:-50%;width:50%}.custom-width.mat-drawer-expanded._ngcontent-%ID%  > .drawer-content{transform:translateX(100%)}.custom-width[end]._ngcontent-%ID%  > .drawer-content{left:initial;right:-50%}.custom-width[end].mat-drawer-expanded._ngcontent-%ID%  > .drawer-content{transform:translateX(-100%)}.dark._ngcontent-%ID%  div.panel.themeable{background-color:#424242}.dark._ngcontent-%ID%  div.panel.themeable{color:#fff}.dark._ngcontent-%ID%  div.panel.themeable > header{color:rgba(255,255,255,0.87)}.dark._ngcontent-%ID%  div.panel.themeable > header p.secondary-text{color:rgba(255,255,255,0.54)}.dark._ngcontent-%ID%  div.panel.themeable material-icon.expand-button{color:rgba(255,255,255,0.87)}.dark._ngcontent-%ID%  div.panel.themeable > header > .header.closed:hover,.dark._ngcontent-%ID%  div.panel.themeable > header > .header.closed:focus{background-color:#212121}.dark._ngcontent-%ID%  div.panel.themeable > header > .header.closed:hover,.dark._ngcontent-%ID%  div.panel.themeable > header > .header.closed:focus{color:#fff}.dense._ngcontent-%ID%  div.panel.themeable .header,.dense._ngcontent-%ID%  div.panel.themeable.open > header:not(.hidden) > .header{min-height:32px}.dense._ngcontent-%ID%  div.panel.themeable .action-buttons{padding:8px 0}.dense._ngcontent-%ID%  div.panel.themeable .panel-name{margin:8px 0;line-height:16px}.dense._ngcontent-%ID%  div.panel.themeable .content-wrapper{margin:0 24px 8px}.reminder._ngcontent-%ID%{color:#4285f4;margin-right:4px;vertical-align:text-top}.action._ngcontent-%ID%{padding:8px 0}.flat-panels._ngcontent-%ID% material-expansionpanel._ngcontent-%ID%{width:320px}.expand-on-left-panels._ngcontent-%ID% material-expansionpanel._ngcontent-%ID%{width:480px}.independent-panels._ngcontent-%ID% material-expansionpanel._ngcontent-%ID%{width:600px}.custom-toolbelt-buttons._ngcontent-%ID%  .btn-yes.btn:not([disabled]),.custom-toolbelt-buttons._ngcontent-%ID%  .btn-yes.btn:not([disabled]).highlighted,.custom-toolbelt-buttons._ngcontent-%ID%  .btn-yes.btn:not([disabled]).highlighted[raised]{color:#4285f4}.custom-toolbelt-panel._ngcontent-%ID% [toolbelt]._ngcontent-%ID%{align-items:center;display:flex;justify-content:space-between;color:rgba(0,0,0,0.54);padding-right:24px}.confirmation-dialog._ngcontent-%ID%{height:144px;text-align:center;width:320px}.confirmation-dialog._ngcontent-%ID% h3._ngcontent-%ID%{font-size:15px;font-weight:400}.confirmation-dialog._ngcontent-%ID% material-yes-no-buttons._ngcontent-%ID%{display:block}.left-align-action-buttons._ngcontent-%ID%  material-yes-no-buttons{flex-direction:row}.bottom-header-action._ngcontent-%ID%  div.panel.themeable header{flex-direction:column}"];
    }
  });
  dart.defineLazy(src__document_list__documento_list_component$46template, {
    /*src__document_list__documento_list_component$46template.styles$DocumentoListComponent*/get styles$DocumentoListComponent() {
      return [css__mdc_web__card__mdc$45card$46scss$46css$46shim.styles, app_layout__layout$46scss$46css$46shim.styles, src__document_list__documento_list_component$46css$46shim.styles];
    }
  });
  const _compView_0$ = Symbol('_compView_0');
  const _MaterialTemporaryDrawerComponent_0_5 = Symbol('_MaterialTemporaryDrawerComponent_0_5');
  const _compView_5 = Symbol('_compView_5');
  const _AcxDarkTheme_5_5 = Symbol('_AcxDarkTheme_5_5');
  const _MaterialButtonComponent_5_6 = Symbol('_MaterialButtonComponent_5_6');
  const _compView_6 = Symbol('_compView_6');
  const _MaterialIconComponent_6_5 = Symbol('_MaterialIconComponent_6_5');
  const _compView_11 = Symbol('_compView_11');
  const _MaterialIconComponent_11_5 = Symbol('_MaterialIconComponent_11_5');
  const _appEl_12 = Symbol('_appEl_12');
  const _NgIf_12_9 = Symbol('_NgIf_12_9');
  const _appEl_15 = Symbol('_appEl_15');
  const _NgFor_15_9 = Symbol('_NgFor_15_9');
  const _expr_3 = Symbol('_expr_3');
  let const$29;
  let const$30;
  const _handle_trigger_5_0 = Symbol('_handle_trigger_5_0');
  let const$31;
  src__document_list__documento_list_component$46template.ViewDocumentoListComponent0 = class ViewDocumentoListComponent0 extends src__core__linker__app_view.AppView$(src__document_list__documento_list_component.DocumentoListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$] = new app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      parentRenderNode[$append](_el_0);
      this.createAttr(_el_0, "attr.overlay", "true");
      this.createAttr(_el_0, "temporary", "");
      this.addShimC(_el_0);
      this[_MaterialTemporaryDrawerComponent_0_5] = new app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent.new();
      let _text_1 = html.Text.new("Here is some drawer content.");
      this[_compView_0$].create(this[_MaterialTemporaryDrawerComponent_0_5], [JSArrayOfText().of([_text_1])]);
      let doc = html.document;
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      _el_2.className = "material-content";
      this.addShimC(_el_2);
      let _el_3 = src__core__linker__app_view.createAndAppend(doc, "header", _el_2);
      _el_3.className = "material-header shadow";
      this.addShimE(_el_3);
      let _el_4 = src__core__linker__app_view.createDivAndAppend(doc, _el_3);
      _el_4.className = "material-header-row";
      this.addShimC(_el_4);
      this[_compView_5] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      _el_4[$append](_el_5);
      _el_5.className = "material-drawer-button";
      this.createAttr(_el_5, "icon", "");
      this.addShimC(_el_5);
      this[_AcxDarkTheme_5_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$29 || (const$29 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.injectorGet(const$30 || (const$30 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_5_6] = new material_button__material_button.MaterialButtonComponent.new(_el_5, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_5_5]), this[_compView_5].ref, null);
      this[_compView_6] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 6);
      let _el_6 = this[_compView_6].rootEl;
      this.createAttr(_el_6, "icon", "menu");
      this.addShimC(_el_6);
      this[_MaterialIconComponent_6_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_6);
      this[_compView_6].create(this[_MaterialIconComponent_6_5], []);
      this[_compView_5].create(this[_MaterialButtonComponent_5_6], [JSArrayOfHtmlElement().of([_el_6])]);
      let _el_7 = src__core__linker__app_view.createSpanAndAppend(doc, _el_4);
      _el_7.className = "material-header-title";
      this.addShimE(_el_7);
      let _text_8 = html.Text.new("Mis Facturas");
      _el_7[$append](_text_8);
      let _el_9 = src__core__linker__app_view.createDivAndAppend(doc, _el_4);
      _el_9.className = "material-spacer";
      this.addShimC(_el_9);
      let _el_10 = src__core__linker__app_view.createAndAppend(doc, "nav", _el_4);
      _el_10.className = "material-navigation";
      this.addShimE(_el_10);
      this[_compView_11] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 11);
      let _el_11 = this[_compView_11].rootEl;
      _el_10[$append](_el_11);
      this.createAttr(_el_11, "icon", "search");
      this.addShimC(_el_11);
      this[_MaterialIconComponent_11_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_11);
      this[_compView_11].create(this[_MaterialIconComponent_11_5], []);
      let _anchor_12 = src__core__linker__app_view.createViewContainerAnchor();
      _el_2[$append](_anchor_12);
      this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, 2, this, _anchor_12);
      let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], dart.fn(src__document_list__documento_list_component$46template.viewFactory_DocumentoListComponent1, AppViewAndintToAppViewOfDocumentoListComponent()));
      this[_NgIf_12_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_12], _TemplateRef_12_8);
      let _el_13 = src__core__linker__app_view.createDivAndAppend(doc, _el_2);
      this.createAttr(_el_13, "style", "margin: 48px;");
      this.addShimC(_el_13);
      let _el_14 = src__core__linker__app_view.createDivAndAppend(doc, _el_13);
      _el_14.className = "mdc-card";
      this.addShimC(_el_14);
      let _anchor_15 = src__core__linker__app_view.createViewContainerAnchor();
      _el_14[$append](_anchor_15);
      this[_appEl_15] = new src__core__linker__view_container.ViewContainer.new(15, 14, this, _anchor_15);
      let _TemplateRef_15_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_15], dart.fn(src__document_list__documento_list_component$46template.viewFactory_DocumentoListComponent2, AppViewAndintToAppViewOfDocumentoListComponent()));
      this[_NgFor_15_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_15], _TemplateRef_15_8);
      let subscription_0 = this[_MaterialButtonComponent_5_6].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_5_0)));
      this.init(const$31 || (const$31 = dart.constList([], dart.dynamic)), [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialTemporaryDrawerComponent_0_5];
      }
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_AcxDarkTheme_5_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialButtonComponent_5_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTemporaryDrawerComponent_0_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_5_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_6_5].icon = "menu";
        changed = true;
      }
      if (changed) {
        this[_compView_6].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_11_5].icon = "search";
        changed = true;
      }
      if (changed) {
        this[_compView_11].markAsCheckOnce();
      }
      this[_NgIf_12_9].ngIf = false;
      let currVal_3 = _ctx.state.documentos;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_NgFor_15_9].ngForOf = currVal_3;
        this[_expr_3] = currVal_3;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_15_9].ngDoCheck();
      }
      this[_appEl_12].detectChangesInNestedViews();
      this[_appEl_15].detectChangesInNestedViews();
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_5].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_6].detectChanges();
      this[_compView_11].detectChanges();
    }
    destroyInternal() {
      this[_appEl_12].destroyNestedViews();
      this[_appEl_15].destroyNestedViews();
      this[_compView_0$].destroy();
      this[_compView_5].destroy();
      this[_compView_6].destroy();
      this[_compView_11].destroy();
    }
    [_handle_trigger_5_0]($event) {
      let local_drawer = this[_MaterialTemporaryDrawerComponent_0_5];
      local_drawer.toggle();
    }
  };
  (src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialTemporaryDrawerComponent_0_5] = null;
    this[_compView_5] = null;
    this[_AcxDarkTheme_5_5] = null;
    this[_MaterialButtonComponent_5_6] = null;
    this[_compView_6] = null;
    this[_MaterialIconComponent_6_5] = null;
    this[_compView_11] = null;
    this[_MaterialIconComponent_11_5] = null;
    this[_appEl_12] = null;
    this[_NgIf_12_9] = null;
    this[_appEl_15] = null;
    this[_NgFor_15_9] = null;
    this[_expr_3] = null;
    src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("documento-list"));
    let t = src__document_list__documento_list_component$46template.ViewDocumentoListComponent0._renderType;
    t == null ? src__document_list__documento_list_component$46template.ViewDocumentoListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_document_management/lib/src/document_list/documento_list_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__document_list__documento_list_component$46template.styles$DocumentoListComponent) : t;
    this.setupComponentType(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0._renderType);
  }).prototype = src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.prototype;
  dart.addTypeTests(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0);
  dart.setMethodSignature(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0, () => ({
    __proto__: dart.getMethods(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__document_list__documento_list_component.DocumentoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_5_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0, () => ({
    __proto__: dart.getFields(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.__proto__),
    [_compView_0$]: dart.fieldType(app_layout__material_temporary_drawer$46template.ViewMaterialTemporaryDrawerComponent0),
    [_MaterialTemporaryDrawerComponent_0_5]: dart.fieldType(app_layout__material_temporary_drawer.MaterialTemporaryDrawerComponent),
    [_compView_5]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_5_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_5_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_6]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_6_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_compView_11]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_11_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_12_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_15]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_15_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0, {
    /*src__document_list__documento_list_component$46template.ViewDocumentoListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__document_list__documento_list_component$46template.viewFactory_DocumentoListComponent0 = function(parentView, parentIndex) {
    return new src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__document_list__documento_list_component$46template, {
    /*src__document_list__documento_list_component$46template._DocumentoListComponentNgFactory*/get _DocumentoListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfDocumentoListComponent()).new("documento-list", dart.fn(src__document_list__documento_list_component$46template.viewFactory_DocumentoListComponentHost0, AppViewAndintToAppViewOfDocumentoListComponent())));
    }
  });
  dart.copyProperties(src__document_list__documento_list_component$46template, {
    get DocumentoListComponentNgFactory() {
      return src__document_list__documento_list_component$46template._DocumentoListComponentNgFactory;
    }
  });
  const _compView_2 = Symbol('_compView_2');
  const _MaterialAutoSuggestInputComponent_2_5 = Symbol('_MaterialAutoSuggestInputComponent_2_5');
  const _expr_0 = Symbol('_expr_0');
  let const$32;
  let const$33;
  let const$34;
  const _handle_showClearIcon_2_0 = Symbol('_handle_showClearIcon_2_0');
  const _handle_inputTextChange_2_1 = Symbol('_handle_inputTextChange_2_1');
  src__document_list__documento_list_component$46template._ViewDocumentoListComponent1 = class _ViewDocumentoListComponent1 extends src__core__linker__app_view.AppView$(src__document_list__documento_list_component.DocumentoListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("header");
      _el_0.className = "material-header shadow";
      this.createAttr(_el_0, "style", "background-color: white;");
      this.addShimE(_el_0);
      let _el_1 = src__core__linker__app_view.createDivAndAppend(doc, _el_0);
      _el_1.className = "material-header-row";
      this.addShimC(_el_1);
      this[_compView_2] = new material_input__material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_1[$append](_el_2);
      this.addShimC(_el_2);
      this[_MaterialAutoSuggestInputComponent_2_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent, dart.wrapType(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent), dart.fn(() => material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.new(null, utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.viewData.parentIndex, null))), VoidToMaterialAutoSuggestInputComponent())) : material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent.new(null, utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.viewData.parentIndex, null)));
      this[_compView_2].create(this[_MaterialAutoSuggestInputComponent_2_5], [const$32 || (const$32 = dart.constList([], dart.dynamic)), const$33 || (const$33 = dart.constList([], dart.dynamic)), const$34 || (const$34 = dart.constList([], dart.dynamic))]);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(_el_2, "showClearIcon", this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_showClearIcon_2_0)));
      let subscription_0 = this[_MaterialAutoSuggestInputComponent_2_5].textChanged.listen(this.eventHandler1(core$.String, core$.String, dart.bind(this, _handle_inputTextChange_2_1)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer) || token === dart.wrapType(model__selection__selection_container.SelectionContainer) || token === dart.wrapType(model__ui__highlight_provider.HighlightProvider) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle) || token === dart.wrapType(model__ui__has_renderer.HasComponentRenderer) || token === dart.wrapType(model__ui__has_factory.HasFactoryRenderer) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider)) && 2 === nodeIndex) {
        return this[_MaterialAutoSuggestInputComponent_2_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.myOptions == null)) {
          this[_MaterialAutoSuggestInputComponent_2_5].optionsInput = _ctx.myOptions;
        }
      }
      let currVal_0 = _ctx.myInput;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialAutoSuggestInputComponent_2_5].inputText = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialAutoSuggestInputComponent_2_5].ngOnInit();
      }
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_compView_2].destroy();
      this[_MaterialAutoSuggestInputComponent_2_5].ngOnDestroy();
    }
    [_handle_showClearIcon_2_0]($event) {
      true;
    }
    [_handle_inputTextChange_2_1]($event) {
      this.ctx.myInput = core$.String._check($event);
    }
  };
  (src__document_list__documento_list_component$46template._ViewDocumentoListComponent1.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_MaterialAutoSuggestInputComponent_2_5] = null;
    this[_expr_0] = null;
    src__document_list__documento_list_component$46template._ViewDocumentoListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__document_list__documento_list_component$46template.ViewDocumentoListComponent0._renderType;
  }).prototype = src__document_list__documento_list_component$46template._ViewDocumentoListComponent1.prototype;
  dart.addTypeTests(src__document_list__documento_list_component$46template._ViewDocumentoListComponent1);
  dart.setMethodSignature(src__document_list__documento_list_component$46template._ViewDocumentoListComponent1, () => ({
    __proto__: dart.getMethods(src__document_list__documento_list_component$46template._ViewDocumentoListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__document_list__documento_list_component.DocumentoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_showClearIcon_2_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_inputTextChange_2_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__document_list__documento_list_component$46template._ViewDocumentoListComponent1, () => ({
    __proto__: dart.getFields(src__document_list__documento_list_component$46template._ViewDocumentoListComponent1.__proto__),
    [_compView_2]: dart.fieldType(material_input__material_auto_suggest_input$46template.ViewMaterialAutoSuggestInputComponent0),
    [_MaterialAutoSuggestInputComponent_2_5]: dart.fieldType(material_input__material_auto_suggest_input.MaterialAutoSuggestInputComponent),
    [_expr_0]: dart.fieldType(core$.String)
  }));
  src__document_list__documento_list_component$46template.viewFactory_DocumentoListComponent1 = function(parentView, parentIndex) {
    return new src__document_list__documento_list_component$46template._ViewDocumentoListComponent1.new(parentView, parentIndex);
  };
  const _MaterialExpansionPanel_0_5 = Symbol('_MaterialExpansionPanel_0_5');
  const _compView_4 = Symbol('_compView_4');
  const _AcxDarkTheme_4_5 = Symbol('_AcxDarkTheme_4_5');
  const _MaterialButtonComponent_4_6 = Symbol('_MaterialButtonComponent_4_6');
  const _MaterialIconComponent_5_5 = Symbol('_MaterialIconComponent_5_5');
  const _expr_2 = Symbol('_expr_2');
  const _text_1 = Symbol('_text_1');
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  const _handle_yes_3_0 = Symbol('_handle_yes_3_0');
  const _handle_no_3_1 = Symbol('_handle_no_3_1');
  src__document_list__documento_list_component$46template._ViewDocumentoListComponent2 = class _ViewDocumentoListComponent2 extends src__core__linker__app_view.AppView$(src__document_list__documento_list_component.DocumentoListComponent) {
    build() {
      this[_compView_0$] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      _el_0.className = "custom-toolbelt-panel";
      this.addShimC(_el_0);
      this[_MaterialExpansionPanel_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel, dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel), dart.fn(() => new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), this[_compView_0$].ref, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null), VoidToMaterialExpansionPanel())) : new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.viewData.parentIndex)), this[_compView_0$].ref, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null);
      this[_text_1] = html.Text.new("");
      let doc = html.document;
      let _el_2 = doc[$createElement]("div");
      this.createAttr(_el_2, "toolbelt", "");
      this.addShimC(html.HtmlElement._check(_el_2));
      let _el_3 = src__core__linker__app_view.createAndAppend(doc, "material-yes-no-buttons", _el_2);
      _el_3.className = "custom-toolbelt-buttons";
      this.createAttr(_el_3, "noText", "Cancel");
      this.createAttr(_el_3, "yesText", "Done");
      this.addShimE(_el_3);
      this[_compView_4] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_2[$append](_el_4);
      this.createAttr(_el_4, "icon", "");
      this.addShimC(_el_4);
      this[_AcxDarkTheme_4_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGet(const$35 || (const$35 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core$.bool._check(this.parentView.parentView.injectorGet(const$36 || (const$36 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.parentView.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_4_6] = new material_button__material_button.MaterialButtonComponent.new(_el_4, theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_4_5]), this[_compView_4].ref, null);
      this[_compView_5] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 5);
      let _el_5 = this[_compView_5].rootEl;
      this.createAttr(_el_5, "icon", "cloud_download");
      this.addShimC(_el_5);
      this[_MaterialIconComponent_5_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_5);
      this[_compView_5].create(this[_MaterialIconComponent_5_5], []);
      this[_compView_4].create(this[_MaterialButtonComponent_4_6], [JSArrayOfHtmlElement().of([_el_5])]);
      this[_compView_0$].create(this[_MaterialExpansionPanel_0_5], [const$37 || (const$37 = dart.constList([], dart.dynamic)), const$38 || (const$38 = dart.constList([], dart.dynamic)), const$39 || (const$39 = dart.constList([], dart.dynamic)), JSArrayOfText().of([this[_text_1]]), JSArrayOfElement().of([_el_2])]);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(_el_3, "yes", this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_yes_3_0)));
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(_el_3, "no", this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_no_3_1)));
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_AcxDarkTheme_4_5];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 4 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialButtonComponent_4_6];
      }
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 5) {
        return this[_MaterialExpansionPanel_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = src__runtime__optimizations.unsafeCast(src__models__factura.Factura, this.locals[$_get]("$implicit"));
      changed = false;
      if (firstCheck) {
        this[_MaterialExpansionPanel_0_5].showSaveCancel = false;
        changed = true;
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate1("Factura Nro: ", local_item.numero, "");
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialExpansionPanel_0_5].name = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialExpansionPanel_0_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_4].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_4_6].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_5_5].icon = "cloud_download";
        changed = true;
      }
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_item.descripcion);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_text_1][$text] = core$.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_4].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_5].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
      this[_compView_4].destroy();
      this[_compView_5].destroy();
      this[_MaterialExpansionPanel_0_5].ngOnDestroy();
    }
    [_handle_yes_3_0]($event) {
      true;
    }
    [_handle_no_3_1]($event) {
      true;
    }
  };
  (src__document_list__documento_list_component$46template._ViewDocumentoListComponent2.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialExpansionPanel_0_5] = null;
    this[_compView_4] = null;
    this[_AcxDarkTheme_4_5] = null;
    this[_MaterialButtonComponent_4_6] = null;
    this[_compView_5] = null;
    this[_MaterialIconComponent_5_5] = null;
    this[_expr_0] = null;
    this[_expr_2] = null;
    this[_text_1] = null;
    src__document_list__documento_list_component$46template._ViewDocumentoListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__document_list__documento_list_component$46template.ViewDocumentoListComponent0._renderType;
  }).prototype = src__document_list__documento_list_component$46template._ViewDocumentoListComponent2.prototype;
  dart.addTypeTests(src__document_list__documento_list_component$46template._ViewDocumentoListComponent2);
  dart.setMethodSignature(src__document_list__documento_list_component$46template._ViewDocumentoListComponent2, () => ({
    __proto__: dart.getMethods(src__document_list__documento_list_component$46template._ViewDocumentoListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__document_list__documento_list_component.DocumentoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_yes_3_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_no_3_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__document_list__documento_list_component$46template._ViewDocumentoListComponent2, () => ({
    __proto__: dart.getFields(src__document_list__documento_list_component$46template._ViewDocumentoListComponent2.__proto__),
    [_compView_0$]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_0_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_compView_4]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_AcxDarkTheme_4_5]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_4_6]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_compView_5]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_5_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(core$.String),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text)
  }));
  src__document_list__documento_list_component$46template.viewFactory_DocumentoListComponent2 = function(parentView, parentIndex) {
    return new src__document_list__documento_list_component$46template._ViewDocumentoListComponent2.new(parentView, parentIndex);
  };
  dart.defineLazy(src__document_list__documento_list_component$46template, {
    /*src__document_list__documento_list_component$46template.styles$DocumentoListComponentHost*/get styles$DocumentoListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _DocumentoListComponent_0_5$ = Symbol('_DocumentoListComponent_0_5');
  const __Document_0_6$ = Symbol('__Document_0_6');
  const __Window_0_7$ = Symbol('__Window_0_7');
  const __DomService_0_8$ = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9$ = Symbol('__AcxImperativeViewUtils_0_9');
  const __DomRuler_0_10$ = Symbol('__DomRuler_0_10');
  const __ManagedZone_0_11$ = Symbol('__ManagedZone_0_11');
  const __overlayContainerName_0_12$ = Symbol('__overlayContainerName_0_12');
  const __overlayContainerParent_0_13$ = Symbol('__overlayContainerParent_0_13');
  const __overlayContainer_0_14$ = Symbol('__overlayContainer_0_14');
  const __overlaySyncDom_0_15$ = Symbol('__overlaySyncDom_0_15');
  const __overlayRepositionLoop_0_16$ = Symbol('__overlayRepositionLoop_0_16');
  const __OverlayStyleConfig_0_17$ = Symbol('__OverlayStyleConfig_0_17');
  const __ZIndexer_0_18$ = Symbol('__ZIndexer_0_18');
  const __OverlayDomRenderService_0_19$ = Symbol('__OverlayDomRenderService_0_19');
  const __OverlayService_0_20$ = Symbol('__OverlayService_0_20');
  const __defaultPopupPositions_0_21$ = Symbol('__defaultPopupPositions_0_21');
  const __DomPopupSourceFactory_0_22$ = Symbol('__DomPopupSourceFactory_0_22');
  const _Document_0_6$ = Symbol('_Document_0_6');
  const _Window_0_7$ = Symbol('_Window_0_7');
  const _DomService_0_8$ = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9$ = Symbol('_AcxImperativeViewUtils_0_9');
  const _DomRuler_0_10$ = Symbol('_DomRuler_0_10');
  const _ManagedZone_0_11$ = Symbol('_ManagedZone_0_11');
  let const$40;
  let const$41;
  let const$42;
  const _overlayContainerName_0_12$ = Symbol('_overlayContainerName_0_12');
  let const$43;
  let const$44;
  let const$45;
  const _overlayContainerParent_0_13$ = Symbol('_overlayContainerParent_0_13');
  let const$46;
  let const$47;
  let const$48;
  const _overlayContainer_0_14$ = Symbol('_overlayContainer_0_14');
  const _overlaySyncDom_0_15$ = Symbol('_overlaySyncDom_0_15');
  const _overlayRepositionLoop_0_16$ = Symbol('_overlayRepositionLoop_0_16');
  const _OverlayStyleConfig_0_17$ = Symbol('_OverlayStyleConfig_0_17');
  const _ZIndexer_0_18$ = Symbol('_ZIndexer_0_18');
  const _OverlayDomRenderService_0_19$ = Symbol('_OverlayDomRenderService_0_19');
  const _OverlayService_0_20$ = Symbol('_OverlayService_0_20');
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  const _defaultPopupPositions_0_21$ = Symbol('_defaultPopupPositions_0_21');
  const _DomPopupSourceFactory_0_22$ = Symbol('_DomPopupSourceFactory_0_22');
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0 = class _ViewDocumentoListComponentHost0 extends src__core__linker__app_view.AppView$(src__document_list__documento_list_component.DocumentoListComponent) {
    get [_Document_0_6$]() {
      if (this[__Document_0_6$] == null) {
        this[__Document_0_6$] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_6$];
    }
    get [_Window_0_7$]() {
      if (this[__Window_0_7$] == null) {
        this[__Window_0_7$] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7$];
    }
    get [_DomService_0_8$]() {
      if (this[__DomService_0_8$] == null) {
        this[__DomService_0_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__browser__dom_service__dom_service.DomService, dart.wrapType(utils__browser__dom_service__dom_service.DomService), dart.fn(() => utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7$])), VoidToDomService())) : utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7$]));
      }
      return this[__DomService_0_8$];
    }
    get [_AcxImperativeViewUtils_0_9$]() {
      if (this[__AcxImperativeViewUtils_0_9$] == null) {
        this[__AcxImperativeViewUtils_0_9$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils), dart.fn(() => new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$])), VoidToAcxImperativeViewUtils())) : new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]));
      }
      return this[__AcxImperativeViewUtils_0_9$];
    }
    get [_DomRuler_0_10$]() {
      if (this[__DomRuler_0_10$] == null) {
        this[__DomRuler_0_10$] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_6$]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]));
      }
      return this[__DomRuler_0_10$];
    }
    get [_ManagedZone_0_11$]() {
      if (this[__ManagedZone_0_11$] == null) {
        this[__ManagedZone_0_11$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(utils__angular__managed_zone__angular_2.Angular2ManagedZone, dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone), dart.fn(() => new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex))), VoidToAngular2ManagedZone())) : new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_11$];
    }
    get [_overlayContainerName_0_12$]() {
      if (this[__overlayContainerName_0_12$] == null) {
        this[__overlayContainerName_0_12$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(core$.String, const$40 || (const$40 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), dart.fn(() => laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$41 || (const$41 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null)), VoidToString())) : laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$42 || (const$42 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_12$];
    }
    get [_overlayContainerParent_0_13$]() {
      if (this[__overlayContainerParent_0_13$] == null) {
        this[__overlayContainerParent_0_13$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$43 || (const$43 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), dart.fn(() => laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6$]), this.injectorGet(const$44 || (const$44 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_6$]), this.injectorGet(const$45 || (const$45 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_13$];
    }
    get [_overlayContainer_0_14$]() {
      if (this[__overlayContainer_0_14$] == null) {
        this[__overlayContainer_0_14$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(html.HtmlElement, const$46 || (const$46 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), dart.fn(() => laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_12$]), html.HtmlElement._check(this[_overlayContainerParent_0_13$]), this.injectorGet(const$47 || (const$47 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null)), VoidToHtmlElement())) : laminate__overlay__module.getDefaultContainer(core$.String._check(this[_overlayContainerName_0_12$]), html.HtmlElement._check(this[_overlayContainerParent_0_13$]), this.injectorGet(const$48 || (const$48 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer"))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_14$];
    }
    get [_overlaySyncDom_0_15$]() {
      if (this[__overlaySyncDom_0_15$] == null) {
        this[__overlaySyncDom_0_15$] = true;
      }
      return this[__overlaySyncDom_0_15$];
    }
    get [_overlayRepositionLoop_0_16$]() {
      if (this[__overlayRepositionLoop_0_16$] == null) {
        this[__overlayRepositionLoop_0_16$] = true;
      }
      return this[__overlayRepositionLoop_0_16$];
    }
    get [_OverlayStyleConfig_0_17$]() {
      if (this[__OverlayStyleConfig_0_17$] == null) {
        this[__OverlayStyleConfig_0_17$] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_6$]));
      }
      return this[__OverlayStyleConfig_0_17$];
    }
    get [_ZIndexer_0_18$]() {
      if (this[__ZIndexer_0_18$] == null) {
        this[__ZIndexer_0_18$] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_18$];
    }
    get [_OverlayDomRenderService_0_19$]() {
      if (this[__OverlayDomRenderService_0_19$] == null) {
        this[__OverlayDomRenderService_0_19$] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_17$], html.HtmlElement._check(this[_overlayContainer_0_14$]), core$.String._check(this[_overlayContainerName_0_12$]), this[_DomRuler_0_10$], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8$]), utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils._check(this[_AcxImperativeViewUtils_0_9$]), this[_overlaySyncDom_0_15$], this[_overlayRepositionLoop_0_16$], this[_ZIndexer_0_18$]);
      }
      return this[__OverlayDomRenderService_0_19$];
    }
    get [_OverlayService_0_20$]() {
      if (this[__OverlayService_0_20$] == null) {
        this[__OverlayService_0_20$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__overlay__overlay_service.OverlayService, dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), dart.fn(() => new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15$], this[_OverlayDomRenderService_0_19$], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null))), VoidToOverlayService())) : new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_15$], this[_OverlayDomRenderService_0_19$], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_20$];
    }
    get [_defaultPopupPositions_0_21$]() {
      if (this[__defaultPopupPositions_0_21$] == null) {
        this[__defaultPopupPositions_0_21$] = const$62 || (const$62 = dart.constList([const$49 || (const$49 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top center"}))), const$51 || (const$51 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top right", originX: const$50 || (const$50 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$53 || (const$53 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "top left", originX: const$52 || (const$52 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start")))}))), const$55 || (const$55 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom center", originY: const$54 || (const$54 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$58 || (const$58 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom right", originX: const$56 || (const$56 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end"))), originY: const$57 || (const$57 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))}))), const$61 || (const$61 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: "bottom left", originX: const$59 || (const$59 = dart.const(new laminate__enums__alignment.Alignment.new("Start", "flex-start"))), originY: const$60 || (const$60 = dart.const(new laminate__enums__alignment.Alignment.new("End", "flex-end")))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_21$];
    }
    get [_DomPopupSourceFactory_0_22$]() {
      if (this[__DomPopupSourceFactory_0_22$] == null) {
        this[__DomPopupSourceFactory_0_22$] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_10$]);
      }
      return this[__DomPopupSourceFactory_0_22$];
    }
    build() {
      this[_compView_0$] = new src__document_list__documento_list_component$46template.ViewDocumentoListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_DocumentoListComponent_0_5$] = new src__document_list__documento_list_component.DocumentoListComponent.new();
      this[_compView_0$].create(this[_DocumentoListComponent_0_5$], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfDocumentoListComponent()).new(0, this, this.rootEl, this[_DocumentoListComponent_0_5$]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_6$];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7$];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8$];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9$];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_10$];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_11$];
      }
      if (token === (const$63 || (const$63 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerName")))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_12$];
      }
      if (token === (const$64 || (const$64 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainerParent")))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_13$];
      }
      if (token === (const$65 || (const$65 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayContainer")))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_14$];
      }
      if (token === (const$66 || (const$66 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlaySyncDom")))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_15$];
      }
      if (token === (const$67 || (const$67 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop")))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_16$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_17$];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_18$];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_19$];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_20$];
      }
      if (token === (const$68 || (const$68 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions")))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_21$];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_22$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_DocumentoListComponent_0_5$].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
      this[_DocumentoListComponent_0_5$].ngOnDestroy();
    }
  };
  (src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_DocumentoListComponent_0_5$] = null;
    this[__Document_0_6$] = null;
    this[__Window_0_7$] = null;
    this[__DomService_0_8$] = null;
    this[__AcxImperativeViewUtils_0_9$] = null;
    this[__DomRuler_0_10$] = null;
    this[__ManagedZone_0_11$] = null;
    this[__overlayContainerName_0_12$] = null;
    this[__overlayContainerParent_0_13$] = null;
    this[__overlayContainer_0_14$] = null;
    this[__overlaySyncDom_0_15$] = null;
    this[__overlayRepositionLoop_0_16$] = null;
    this[__OverlayStyleConfig_0_17$] = null;
    this[__ZIndexer_0_18$] = null;
    this[__OverlayDomRenderService_0_19$] = null;
    this[__OverlayService_0_20$] = null;
    this[__defaultPopupPositions_0_21$] = null;
    this[__DomPopupSourceFactory_0_22$] = null;
    src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0.prototype;
  dart.addTypeTests(src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0);
  dart.setMethodSignature(src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0, () => ({
    __proto__: dart.getMethods(src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__document_list__documento_list_component.DocumentoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0, () => ({
    __proto__: dart.getGetters(src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0.__proto__),
    [_Document_0_6$]: dart.dynamic,
    [_Window_0_7$]: dart.dynamic,
    [_DomService_0_8$]: dart.dynamic,
    [_AcxImperativeViewUtils_0_9$]: dart.dynamic,
    [_DomRuler_0_10$]: laminate__ruler__dom_ruler.DomRuler,
    [_ManagedZone_0_11$]: dart.dynamic,
    [_overlayContainerName_0_12$]: dart.dynamic,
    [_overlayContainerParent_0_13$]: dart.dynamic,
    [_overlayContainer_0_14$]: dart.dynamic,
    [_overlaySyncDom_0_15$]: core$.bool,
    [_overlayRepositionLoop_0_16$]: core$.bool,
    [_OverlayStyleConfig_0_17$]: src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig,
    [_ZIndexer_0_18$]: laminate__overlay__zindexer.ZIndexer,
    [_OverlayDomRenderService_0_19$]: src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService,
    [_OverlayService_0_20$]: dart.dynamic,
    [_defaultPopupPositions_0_21$]: core$.List$(laminate__enums__alignment.RelativePosition),
    [_DomPopupSourceFactory_0_22$]: src__laminate__popup__dom_popup_source.DomPopupSourceFactory
  }));
  dart.setFieldSignature(src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0, () => ({
    __proto__: dart.getFields(src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(src__document_list__documento_list_component$46template.ViewDocumentoListComponent0),
    [_DocumentoListComponent_0_5$]: dart.fieldType(src__document_list__documento_list_component.DocumentoListComponent),
    [__Document_0_6$]: dart.fieldType(dart.dynamic),
    [__Window_0_7$]: dart.fieldType(dart.dynamic),
    [__DomService_0_8$]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9$]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_10$]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_11$]: dart.fieldType(dart.dynamic),
    [__overlayContainerName_0_12$]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_13$]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_14$]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_15$]: dart.fieldType(core$.bool),
    [__overlayRepositionLoop_0_16$]: dart.fieldType(core$.bool),
    [__OverlayStyleConfig_0_17$]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_18$]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_19$]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_20$]: dart.fieldType(dart.dynamic),
    [__defaultPopupPositions_0_21$]: dart.fieldType(ListOfRelativePosition()),
    [__DomPopupSourceFactory_0_22$]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory)
  }));
  src__document_list__documento_list_component$46template.viewFactory_DocumentoListComponentHost0 = function(parentView, parentIndex) {
    return new src__document_list__documento_list_component$46template._ViewDocumentoListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__document_list__documento_list_component$46template, {
    /*src__document_list__documento_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__document_list__documento_list_component$46template.initReflector = function() {
    if (dart.test(src__document_list__documento_list_component$46template._visited)) {
      return;
    }
    src__document_list__documento_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__document_list__documento_list_component.DocumentoListComponent), src__document_list__documento_list_component$46template.DocumentoListComponentNgFactory);
    angular$46template.initReflector();
    angular_bloc$46template.initReflector();
    angular_components$46template.initReflector();
    angular_forms$46template.initReflector();
  };
  dart.defineLazy(src__todo_list__todo_list_service$46template, {
    /*src__todo_list__todo_list_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__todo_list__todo_list_service$46template.initReflector = function() {
    if (dart.test(src__todo_list__todo_list_service$46template._visited)) {
      return;
    }
    src__todo_list__todo_list_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__todo_list__todo_list_service.TodoListService), dart.fn(() => new src__todo_list__todo_list_service.TodoListService.new(), VoidToTodoListService()));
    core$46template.initReflector();
  };
  dart.defineLazy(src__todo_list__todo_list_component$46css$46shim, {
    /*src__todo_list__todo_list_component$46css$46shim.styles*/get styles() {
      return ["ul._ngcontent-%ID%{list-style:none;padding-left:0}li._ngcontent-%ID%{line-height:3em}li:hover._ngcontent-%ID%{background-color:#EEE}li._ngcontent-%ID% material-checkbox._ngcontent-%ID%{vertical-align:middle}li._ngcontent-%ID% material-fab._ngcontent-%ID%{float:right;vertical-align:middle}.done._ngcontent-%ID%{text-decoration:line-through}"];
    }
  });
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template.styles$TodoListComponent*/get styles$TodoListComponent() {
      return [src__todo_list__todo_list_component$46css$46shim.styles];
    }
  });
  const _compView_1 = Symbol('_compView_1');
  const _DeferredValidator_1_5 = Symbol('_DeferredValidator_1_5');
  const _NgValidators_1_6 = Symbol('_NgValidators_1_6');
  const _NgModel_1_7 = Symbol('_NgModel_1_7');
  const _NgControl_1_8 = Symbol('_NgControl_1_8');
  const _MaterialInputComponent_1_9 = Symbol('_MaterialInputComponent_1_9');
  const _BaseMaterialInput_1_10 = Symbol('_BaseMaterialInput_1_10');
  const _MaterialInputDefaultValueAccessor_1_11 = Symbol('_MaterialInputDefaultValueAccessor_1_11');
  const _compView_2$ = Symbol('_compView_2');
  const _MaterialFabComponent_2_5 = Symbol('_MaterialFabComponent_2_5');
  const _compView_3 = Symbol('_compView_3');
  const _MaterialIconComponent_3_5 = Symbol('_MaterialIconComponent_3_5');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  const _expr_3$ = Symbol('_expr_3');
  const _expr_6 = Symbol('_expr_6');
  const _anchor_4 = Symbol('_anchor_4');
  const _el_4_0 = Symbol('_el_4_0');
  let const$69;
  let const$70;
  const _handle_ngModelChange_1_1 = Symbol('_handle_ngModelChange_1_1');
  let const$71;
  src__todo_list__todo_list_component$46template.ViewTodoListComponent0 = class ViewTodoListComponent0 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(_el_0);
      this[_compView_1] = new material_input__material_input$46template.ViewMaterialInputComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.createAttr(_el_1, "autoFocus", "");
      this.createAttr(_el_1, "floatingLabel", "");
      this.createAttr(_el_1, "label", "What do you need to do?");
      this.createAttr(_el_1, "style", "width:80%");
      this.addShimC(_el_1);
      this[_DeferredValidator_1_5] = new material_input__deferred_validator.DeferredValidator.new();
      this[_NgValidators_1_6] = [this[_DeferredValidator_1_5]];
      this[_NgModel_1_7] = new src__directives__ng_model.NgModel.new(this[_NgValidators_1_6], null);
      this[_NgControl_1_8] = this[_NgModel_1_7];
      this[_MaterialInputComponent_1_9] = new material_input__material_input.MaterialInputComponent.new(null, null, null, this[_NgControl_1_8], this[_compView_1].ref, this[_DeferredValidator_1_5]);
      this[_BaseMaterialInput_1_10] = this[_MaterialInputComponent_1_9];
      this[_MaterialInputDefaultValueAccessor_1_11] = new material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor.new(this[_BaseMaterialInput_1_10], this[_NgControl_1_8]);
      this[_compView_1].create(this[_MaterialInputComponent_1_9], [const$69 || (const$69 = dart.constList([], dart.dynamic)), const$70 || (const$70 = dart.constList([], dart.dynamic))]);
      this[_compView_2$] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 2);
      let _el_2 = this[_compView_2$].rootEl;
      _el_0[$append](_el_2);
      this.createAttr(_el_2, "mini", "");
      this.createAttr(_el_2, "raised", "");
      this.addShimC(_el_2);
      this[_MaterialFabComponent_2_5] = new material_button__material_fab.MaterialFabComponent.new(_el_2, this[_compView_2$].ref);
      this[_compView_3] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      this.createAttr(_el_3, "icon", "add");
      this.addShimC(_el_3);
      this[_MaterialIconComponent_3_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_3);
      this[_compView_3].create(this[_MaterialIconComponent_3_5], []);
      this[_compView_2$].create(this[_MaterialFabComponent_2_5], [JSArrayOfHtmlElement().of([_el_3])]);
      this[_anchor_4] = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](this[_anchor_4]);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, null, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent2, AppViewAndintToAppViewOfTodoListComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      src__core__linker__app_view_utils.appViewUtils.eventManager.addEventListener(_el_1, "keyup.enter", this.eventHandler0(dart.dynamic, dart.bind(this.ctx, 'add')));
      let subscription_0 = this[_NgModel_1_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_1_1)));
      let subscription_1 = this[_MaterialFabComponent_2_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'add')));
      this.init([], [subscription_0, subscription_1]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_input__deferred_validator.DeferredValidator) && 1 === nodeIndex) {
        return this[_DeferredValidator_1_5];
      }
      if (token === (const$71 || (const$71 = dart.const(new src__core__di__opaque_token.MultiToken.new("NgValidators")))) && 1 === nodeIndex) {
        return this[_NgValidators_1_6];
      }
      if (token === dart.wrapType(src__directives__ng_model.NgModel) && 1 === nodeIndex) {
        return this[_NgModel_1_7];
      }
      if (token === dart.wrapType(src__directives__ng_control.NgControl) && 1 === nodeIndex) {
        return this[_NgControl_1_8];
      }
      if ((token === dart.wrapType(material_input__material_input.MaterialInputComponent) || token === dart.wrapType(utils__angular__reference__reference.ReferenceDirective) || token === dart.wrapType(focus__focus_interface.Focusable) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 1 === nodeIndex) {
        return this[_MaterialInputComponent_1_9];
      }
      if (token === dart.wrapType(material_input__base_material_input.BaseMaterialInput) && 1 === nodeIndex) {
        return this[_BaseMaterialInput_1_10];
      }
      if (token === dart.wrapType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor) && 1 === nodeIndex) {
        return this[_MaterialInputDefaultValueAccessor_1_11];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_1_7].model = _ctx.newTodo;
      this[_NgModel_1_7].ngAfterChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_NgModel_1_7].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialInputComponent_1_9].label = "What do you need to do?";
        changed = true;
        this[_MaterialInputComponent_1_9].floatingLabel = true;
        changed = true;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_2_5].raised = true;
        changed = true;
      }
      let currVal_3 = _ctx.newTodo[$isEmpty];
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialFabComponent_2_5].disabled = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      if (changed) {
        this[_compView_2$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_2_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_3_5].icon = "add";
        changed = true;
      }
      if (changed) {
        this[_compView_3].markAsCheckOnce();
      }
      let currVal_6 = _ctx.items[$isEmpty] === true;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        if (currVal_6) {
          let doc = html.document;
          this[_el_4_0] = doc[$createElement]("p");
          this.addShimE(this[_el_4_0]);
          let _text_4_1 = html.Text.new("Nothing to do! Add items above.");
          this[_el_4_0][$append](_text_4_1);
          this.addInlinedNodes(this[_anchor_4], JSArrayOfNode().of([this[_el_4_0]]), true);
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_4_0]]), true);
        }
        this[_expr_6] = currVal_6;
      }
      this[_NgIf_5_9].ngIf = _ctx.items[$isNotEmpty];
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_2$].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_2$].detectChanges();
      this[_compView_3].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialInputComponent_1_9].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_compView_1].destroy();
      this[_compView_2$].destroy();
      this[_compView_3].destroy();
      this[_MaterialInputComponent_1_9].ngOnDestroy();
      this[_MaterialInputDefaultValueAccessor_1_11].ngOnDestroy();
    }
    [_handle_ngModelChange_1_1]($event) {
      this.ctx.newTodo = core$.String._check($event);
    }
  };
  (src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_DeferredValidator_1_5] = null;
    this[_NgValidators_1_6] = null;
    this[_NgModel_1_7] = null;
    this[_NgControl_1_8] = null;
    this[_MaterialInputComponent_1_9] = null;
    this[_BaseMaterialInput_1_10] = null;
    this[_MaterialInputDefaultValueAccessor_1_11] = null;
    this[_compView_2$] = null;
    this[_MaterialFabComponent_2_5] = null;
    this[_compView_3] = null;
    this[_MaterialIconComponent_3_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_3$] = null;
    this[_expr_6] = false;
    this[_anchor_4] = null;
    this[_el_4_0] = null;
    src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("todo-list"));
    let t = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
    t == null ? src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_document_management/lib/src/todo_list/todo_list_component.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, src__todo_list__todo_list_component$46template.styles$TodoListComponent) : t;
    this.setupComponentType(src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType);
  }).prototype = src__todo_list__todo_list_component$46template.ViewTodoListComponent0.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template.ViewTodoListComponent0);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_1_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template.ViewTodoListComponent0.__proto__),
    [_compView_1]: dart.fieldType(material_input__material_input$46template.ViewMaterialInputComponent0),
    [_DeferredValidator_1_5]: dart.fieldType(material_input__deferred_validator.DeferredValidator),
    [_NgValidators_1_6]: dart.fieldType(core$.List),
    [_NgModel_1_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_NgControl_1_8]: dart.fieldType(src__directives__ng_model.NgModel),
    [_MaterialInputComponent_1_9]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_BaseMaterialInput_1_10]: dart.fieldType(material_input__material_input.MaterialInputComponent),
    [_MaterialInputDefaultValueAccessor_1_11]: dart.fieldType(material_input__material_input_default_value_accessor.MaterialInputDefaultValueAccessor),
    [_compView_2$]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_2_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_compView_3]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_3_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_3$]: dart.fieldType(core$.bool),
    [_expr_6]: dart.fieldType(core$.bool),
    [_anchor_4]: dart.fieldType(html.Comment),
    [_el_4_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(src__todo_list__todo_list_component$46template.ViewTodoListComponent0, {
    /*src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent0 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template._TodoListComponentNgFactory*/get _TodoListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTodoListComponent()).new("todo-list", dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponentHost0, AppViewAndintToAppViewOfTodoListComponent())));
    }
  });
  dart.copyProperties(src__todo_list__todo_list_component$46template, {
    get TodoListComponentNgFactory() {
      return src__todo_list__todo_list_component$46template._TodoListComponentNgFactory;
    }
  });
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _expr_0$ = Symbol('_expr_0');
  src__todo_list__todo_list_component$46template._ViewTodoListComponent2 = class _ViewTodoListComponent2 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = src__core__linker__app_view.createAndAppend(doc, "ul", _el_0);
      this.addShimC(html.HtmlElement._check(_el_1));
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      _el_1[$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 1, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent3, AppViewAndintToAppViewOfTodoListComponent()));
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.items;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_2_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_2_9].ngDoCheck();
      }
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_2].destroyNestedViews();
    }
  };
  (src__todo_list__todo_list_component$46template._ViewTodoListComponent2.new = function(parentView, parentIndex) {
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0$] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponent2.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponent2);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent2, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent2, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponent2.__proto__),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent2 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponent2.new(parentView, parentIndex);
  };
  const _MaterialCheckboxComponent_1_5 = Symbol('_MaterialCheckboxComponent_1_5');
  const _compView_4$ = Symbol('_compView_4');
  const _MaterialFabComponent_4_5 = Symbol('_MaterialFabComponent_4_5');
  const _compView_5$ = Symbol('_compView_5');
  const _MaterialIconComponent_5_5$ = Symbol('_MaterialIconComponent_5_5');
  const _expr_1 = Symbol('_expr_1');
  const _el_2 = Symbol('_el_2');
  const _text_3 = Symbol('_text_3');
  let const$72;
  const _handle_trigger_4_0 = Symbol('_handle_trigger_4_0');
  src__todo_list__todo_list_component$46template._ViewTodoListComponent3 = class _ViewTodoListComponent3 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("li");
      this.addShimE(_el_0);
      this[_compView_1] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 1);
      let _el_1 = this[_compView_1].rootEl;
      _el_0[$append](_el_1);
      this.createAttr(_el_1, "materialTooltip", "Mark item as done");
      this.addShimC(_el_1);
      this[_MaterialCheckboxComponent_1_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(_el_1, this[_compView_1].ref, null, null, null);
      this[_compView_1].create(this[_MaterialCheckboxComponent_1_5], [const$72 || (const$72 = dart.constList([], dart.dynamic))]);
      this[_el_2] = src__core__linker__app_view.createSpanAndAppend(doc, _el_0);
      this.addShimE(this[_el_2]);
      this[_text_3] = html.Text.new("");
      this[_el_2][$append](this[_text_3]);
      this[_compView_4$] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 4);
      let _el_4 = this[_compView_4$].rootEl;
      _el_0[$append](_el_4);
      this.createAttr(_el_4, "mini", "");
      this.addShimC(_el_4);
      this[_MaterialFabComponent_4_5] = new material_button__material_fab.MaterialFabComponent.new(_el_4, this[_compView_4$].ref);
      this[_compView_5$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 5);
      let _el_5 = this[_compView_5$].rootEl;
      this.createAttr(_el_5, "icon", "delete");
      this.addShimC(_el_5);
      this[_MaterialIconComponent_5_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_5);
      this[_compView_5$].create(this[_MaterialIconComponent_5_5$], []);
      this[_compView_4$].create(this[_MaterialFabComponent_4_5], [JSArrayOfHtmlElement().of([_el_5])]);
      let subscription_0 = this[_MaterialFabComponent_4_5].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_4_0)));
      this.init([_el_0], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 1 === nodeIndex) {
        return this[_MaterialCheckboxComponent_1_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_done = this[_MaterialCheckboxComponent_1_5];
      let local_item = src__runtime__optimizations.unsafeCast(core$.String, this.locals[$_get]("$implicit"));
      changed = false;
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_4$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialFabComponent_4_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_5_5$].icon = "delete";
        changed = true;
      }
      if (changed) {
        this[_compView_5$].markAsCheckOnce();
      }
      this[_compView_1].detectHostChanges(firstCheck);
      let currVal_0 = local_done.checked;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateClass(html.HtmlElement._check(this[_el_2]), "done", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_text_3][$text] = core$.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_4$].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_4$].detectChanges();
      this[_compView_5$].detectChanges();
    }
    destroyInternal() {
      this[_compView_1].destroy();
      this[_compView_4$].destroy();
      this[_compView_5$].destroy();
      this[_MaterialCheckboxComponent_1_5].ngOnDestroy();
    }
    [_handle_trigger_4_0]($event) {
      let local_i = src__runtime__optimizations.unsafeCast(core$.int, this.locals[$_get]("index"));
      this.ctx.remove(local_i);
    }
  };
  (src__todo_list__todo_list_component$46template._ViewTodoListComponent3.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_MaterialCheckboxComponent_1_5] = null;
    this[_compView_4$] = null;
    this[_MaterialFabComponent_4_5] = null;
    this[_compView_5$] = null;
    this[_MaterialIconComponent_5_5$] = null;
    this[_expr_0$] = null;
    this[_expr_1] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__todo_list__todo_list_component$46template.ViewTodoListComponent0._renderType;
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponent3.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponent3);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent3, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_4_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponent3, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponent3.__proto__),
    [_compView_1]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_1_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_compView_4$]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_4_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_compView_5$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_5_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(core$.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_el_2]: dart.fieldType(html.Element),
    [_text_3]: dart.fieldType(html.Text)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponent3 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template.styles$TodoListComponentHost*/get styles$TodoListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0$0 = Symbol('_compView_0');
  const _TodoListService_0_5 = Symbol('_TodoListService_0_5');
  const _TodoListComponent_0_6 = Symbol('_TodoListComponent_0_6');
  src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0 = class _ViewTodoListComponentHost0 extends src__core__linker__app_view.AppView$(src__todo_list__todo_list_component.TodoListComponent) {
    build() {
      this[_compView_0$0] = new src__todo_list__todo_list_component$46template.ViewTodoListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_TodoListService_0_5] = new src__todo_list__todo_list_service.TodoListService.new();
      this[_TodoListComponent_0_6] = new src__todo_list__todo_list_component.TodoListComponent.new(this[_TodoListService_0_5]);
      this[_compView_0$0].create(this[_TodoListComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTodoListComponent()).new(0, this, this.rootEl, this[_TodoListComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__todo_list__todo_list_service.TodoListService) && 0 === nodeIndex) {
        return this[_TodoListService_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_TodoListComponent_0_6].ngOnInit();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
    }
  };
  (src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_TodoListService_0_5] = null;
    this[_TodoListComponent_0_6] = null;
    src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.prototype;
  dart.addTypeTests(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0);
  dart.setMethodSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0, () => ({
    __proto__: dart.getMethods(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__todo_list__todo_list_component.TodoListComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core$.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0, () => ({
    __proto__: dart.getFields(src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(src__todo_list__todo_list_component$46template.ViewTodoListComponent0),
    [_TodoListService_0_5]: dart.fieldType(src__todo_list__todo_list_service.TodoListService),
    [_TodoListComponent_0_6]: dart.fieldType(src__todo_list__todo_list_component.TodoListComponent)
  }));
  src__todo_list__todo_list_component$46template.viewFactory_TodoListComponentHost0 = function(parentView, parentIndex) {
    return new src__todo_list__todo_list_component$46template._ViewTodoListComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__todo_list__todo_list_component$46template, {
    /*src__todo_list__todo_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__todo_list__todo_list_component$46template.initReflector = function() {
    if (dart.test(src__todo_list__todo_list_component$46template._visited)) {
      return;
    }
    src__todo_list__todo_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__todo_list__todo_list_component.TodoListComponent), src__todo_list__todo_list_component$46template.TodoListComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__todo_list__todo_list_service$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_document_management/app_component.template.ddc", {
    "package:angular_document_management/app_component.template.dart": app_component$46template,
    "package:angular_document_management/src/document_list/documento_list_component.css.shim.dart": src__document_list__documento_list_component$46css$46shim,
    "package:angular_document_management/src/document_list/documento_list_component.template.dart": src__document_list__documento_list_component$46template,
    "package:angular_document_management/src/todo_list/todo_list_service.template.dart": src__todo_list__todo_list_service$46template,
    "package:angular_document_management/src/todo_list/todo_list_component.css.shim.dart": src__todo_list__todo_list_component$46css$46shim,
    "package:angular_document_management/src/todo_list/todo_list_component.template.dart": src__todo_list__todo_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart","src/document_list/documento_list_component.css.shim.dart","src/document_list/documento_list_component.template.dart","src/todo_list/todo_list_service.template.dart","src/todo_list/todo_list_component.css.shim.dart","src/todo_list/todo_list_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template,
    src__document_list__documento_list_component$46css$46shim: src__document_list__documento_list_component$46css$46shim,
    src__document_list__documento_list_component$46template: src__document_list__documento_list_component$46template,
    src__todo_list__todo_list_service$46template: src__todo_list__todo_list_service$46template,
    src__todo_list__todo_list_component$46css$46shim: src__todo_list__todo_list_component$46css$46shim,
    src__todo_list__todo_list_component$46template: src__todo_list__todo_list_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
