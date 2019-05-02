// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'documento_list_component.dart';
export 'documento_list_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_bloc/angular_bloc.template.dart' as _ref1;
import 'package:angular_components/angular_components.template.dart' as _ref2;
import 'package:angular_forms/angular_forms.template.dart' as _ref3;
import 'package:angular_components/css/mdc_web/card/mdc-card.scss.css.shim.dart' as import0;
import 'package:angular_components/app_layout/layout.scss.css.shim.dart' as import1;
import 'package:angular_document_management/src/document_list/documento_list_component.css.shim.dart' as import2;
import 'package:angular/src/core/linker/app_view.dart';
import 'documento_list_component.dart' as import4;
import 'package:angular_components/app_layout/material_temporary_drawer.template.dart' as import5;
import 'package:angular_components/app_layout/material_temporary_drawer.dart' as import6;
import 'package:angular_components/material_button/material_button.template.dart' as import7;
import 'package:angular_components/material_button/material_button.dart' as import8;
import 'package:angular_components/material_icon/material_icon.template.dart' as import9;
import 'package:angular_components/material_icon/material_icon.dart' as import10;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import13;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import17;
import 'package:angular/src/core/linker/app_view_utils.dart' as import18;
import 'package:angular/src/runtime.dart' as import19;
import 'package:angular/angular.dart';
import 'package:angular/src/di/errors.dart' as import21;
import 'package:angular_components/theme/dark_theme.dart' as import22;
import 'package:angular/src/core/di/opaque_token.dart' as import23;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/content/deferred_content_aware.dart' as import25;
import 'package:angular_components/button_decorator/button_decorator.dart' as import26;
import 'package:angular_components/interfaces/has_disabled.dart' as import27;
import 'package:angular_components/material_input/material_auto_suggest_input.template.dart' as import28;
import 'package:angular_components/material_input/material_auto_suggest_input.dart' as import29;
import 'package:angular_components/utils/id_generator/id_generator.dart' as import30;
import 'package:angular_components/src/laminate/popup/popup_size_provider.dart' as import31;
import 'package:angular_components/model/ui/has_renderer.dart' as import32;
import 'package:angular_components/model/selection/selection_container.dart' as import33;
import 'package:angular_components/model/ui/highlight_provider.dart' as import34;
import 'package:angular_components/mixins/material_dropdown_base.dart' as import35;
import 'package:angular_components/model/ui/has_factory.dart' as import36;
import 'package:angular_components/focus/focus_interface.dart' as import37;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.template.dart' as import38;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart' as import39;
import 'package:angular/src/core/zone/ng_zone.dart' as import40;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import41;
import 'package:common_sales_management/src/models/factura.dart' as import42;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import43;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import44;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import45;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import46;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import48;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import49;
import 'package:angular_components/utils/browser/window/module.dart' as import50;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import51;
import 'package:angular_components/utils/disposer/disposer.dart' as import52;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import53;
import 'package:angular/src/core/linker/component_loader.dart' as import54;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import55;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import56;
import 'package:angular_components/laminate/overlay/module.dart' as import57;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import58;
import 'package:angular_components/laminate/enums/alignment.dart' as import59;

final List<dynamic> styles$DocumentoListComponent = [import0.styles, import1.styles, import2.styles];

class ViewDocumentoListComponent0 extends AppView<import4.DocumentoListComponent> {
  import5.ViewMaterialTemporaryDrawerComponent0 _compView_0;
  import6.MaterialTemporaryDrawerComponent _MaterialTemporaryDrawerComponent_0_5;
  import7.ViewMaterialButtonComponent0 _compView_5;
  dynamic _AcxDarkTheme_5_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_5_6;
  import9.ViewMaterialIconComponent0 _compView_6;
  import10.MaterialIconComponent _MaterialIconComponent_6_5;
  import9.ViewMaterialIconComponent0 _compView_11;
  import10.MaterialIconComponent _MaterialIconComponent_11_5;
  ViewContainer _appEl_12;
  NgIf _NgIf_12_9;
  ViewContainer _appEl_15;
  import13.NgFor _NgFor_15_9;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewDocumentoListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import17.document.createElement('documento-list');
    _renderType ??= import18.appViewUtils.createRenderType((import19.isDevMode ? 'asset:angular_document_management/lib/src/document_list/documento_list_component.dart' : null), ViewEncapsulation.Emulated, styles$DocumentoListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import4.DocumentoListComponent> build() {
    final _rootEl = rootEl;
    final import17.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import5.ViewMaterialTemporaryDrawerComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    createAttr(_el_0, 'attr.overlay', 'true');
    createAttr(_el_0, 'temporary', '');
    addShimC(_el_0);
    _MaterialTemporaryDrawerComponent_0_5 = import6.MaterialTemporaryDrawerComponent();
    final _text_1 = import17.Text('Here is some drawer content.');
    _compView_0.create(_MaterialTemporaryDrawerComponent_0_5, [
      [_text_1]
    ]);
    var doc = import17.document;
    final _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.className = 'material-content';
    addShimC(_el_2);
    final _el_3 = createAndAppend(doc, 'header', _el_2);
    _el_3.className = 'material-header shadow';
    addShimE(_el_3);
    final _el_4 = createDivAndAppend(doc, _el_3);
    _el_4.className = 'material-header-row';
    addShimC(_el_4);
    _compView_5 = import7.ViewMaterialButtonComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    _el_4.append(_el_5);
    _el_5.className = 'material-drawer-button';
    createAttr(_el_5, 'icon', '');
    addShimC(_el_5);
    _AcxDarkTheme_5_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import22.AcxDarkTheme, () {
            return import22.AcxDarkTheme(parentView.injectorGet(const import23.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null));
          })
        : import22.AcxDarkTheme(parentView.injectorGet(const import23.OpaqueToken<dynamic>('acxDarkTheme'), viewData.parentIndex, null)));
    _MaterialButtonComponent_5_6 = import8.MaterialButtonComponent(_el_5, _AcxDarkTheme_5_5, _compView_5.ref, null);
    _compView_6 = import9.ViewMaterialIconComponent0(this, 6);
    final _el_6 = _compView_6.rootEl;
    createAttr(_el_6, 'icon', 'menu');
    addShimC(_el_6);
    _MaterialIconComponent_6_5 = import10.MaterialIconComponent(_el_6);
    _compView_6.create(_MaterialIconComponent_6_5, []);
    _compView_5.create(_MaterialButtonComponent_5_6, [
      [_el_6]
    ]);
    final _el_7 = createSpanAndAppend(doc, _el_4);
    _el_7.className = 'material-header-title';
    addShimE(_el_7);
    final _text_8 = import17.Text('Mis Facturas');
    _el_7.append(_text_8);
    final _el_9 = createDivAndAppend(doc, _el_4);
    _el_9.className = 'material-spacer';
    addShimC(_el_9);
    final _el_10 = createAndAppend(doc, 'nav', _el_4);
    _el_10.className = 'material-navigation';
    addShimE(_el_10);
    _compView_11 = import9.ViewMaterialIconComponent0(this, 11);
    final _el_11 = _compView_11.rootEl;
    _el_10.append(_el_11);
    createAttr(_el_11, 'icon', 'search');
    addShimC(_el_11);
    _MaterialIconComponent_11_5 = import10.MaterialIconComponent(_el_11);
    _compView_11.create(_MaterialIconComponent_11_5, []);
    final _anchor_12 = createViewContainerAnchor();
    _el_2.append(_anchor_12);
    _appEl_12 = ViewContainer(12, 2, this, _anchor_12);
    TemplateRef _TemplateRef_12_8 = TemplateRef(_appEl_12, viewFactory_DocumentoListComponent1);
    _NgIf_12_9 = NgIf(_appEl_12, _TemplateRef_12_8);
    final _el_13 = createDivAndAppend(doc, _el_2);
    createAttr(_el_13, 'style', 'margin: 48px;');
    addShimC(_el_13);
    final _el_14 = createDivAndAppend(doc, _el_13);
    _el_14.className = 'mdc-card';
    addShimC(_el_14);
    final _anchor_15 = createViewContainerAnchor();
    _el_14.append(_anchor_15);
    _appEl_15 = ViewContainer(15, 14, this, _anchor_15);
    TemplateRef _TemplateRef_15_8 = TemplateRef(_appEl_15, viewFactory_DocumentoListComponent2);
    _NgFor_15_9 = import13.NgFor(_appEl_15, _TemplateRef_15_8);
    final subscription_0 = _MaterialButtonComponent_5_6.trigger.listen(eventHandler1(_handle_trigger_5_0));
    init(const [], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((identical(token, import6.MaterialTemporaryDrawerComponent) || identical(token, import25.DeferredContentAware)) && ((0 <= nodeIndex) && (nodeIndex <= 1)))) {
      return _MaterialTemporaryDrawerComponent_0_5;
    }
    if ((identical(token, import22.AcxDarkTheme) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _AcxDarkTheme_5_5;
    }
    if ((((identical(token, import8.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled)) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialButtonComponent_5_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialTemporaryDrawerComponent_0_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_5_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_6_5.icon = 'menu';
      changed = true;
    }
    if (changed) {
      _compView_6.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_11_5.icon = 'search';
      changed = true;
    }
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    _NgIf_12_9.ngIf = false;
    final currVal_3 = _ctx.state.documentos;
    if (import18.checkBinding(_expr_3, currVal_3)) {
      _NgFor_15_9.ngForOf = currVal_3;
      _expr_3 = currVal_3;
    }
    if (!import18.AppViewUtils.throwOnChanges) {
      _NgFor_15_9.ngDoCheck();
    }
    _appEl_12.detectChangesInNestedViews();
    _appEl_15.detectChangesInNestedViews();
    _compView_0.detectHostChanges(firstCheck);
    _compView_5.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_5.detectChanges();
    _compView_6.detectChanges();
    _compView_11.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_12.destroyNestedViews();
    _appEl_15.destroyNestedViews();
    _compView_0.destroy();
    _compView_5.destroy();
    _compView_6.destroy();
    _compView_11.destroy();
  }

  void _handle_trigger_5_0($event) {
    final import6.MaterialTemporaryDrawerComponent local_drawer = _MaterialTemporaryDrawerComponent_0_5;
    local_drawer.toggle();
  }
}

AppView<import4.DocumentoListComponent> viewFactory_DocumentoListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewDocumentoListComponent0(parentView, parentIndex);
}

const ComponentFactory<import4.DocumentoListComponent> _DocumentoListComponentNgFactory = const ComponentFactory('documento-list', viewFactory_DocumentoListComponentHost0);
ComponentFactory<import4.DocumentoListComponent> get DocumentoListComponentNgFactory {
  return _DocumentoListComponentNgFactory;
}

class _ViewDocumentoListComponent1 extends AppView<import4.DocumentoListComponent> {
  import28.ViewMaterialAutoSuggestInputComponent0 _compView_2;
  import29.MaterialAutoSuggestInputComponent _MaterialAutoSuggestInputComponent_2_5;
  String _expr_0;
  _ViewDocumentoListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDocumentoListComponent0._renderType;
  }
  @override
  ComponentRef<import4.DocumentoListComponent> build() {
    var doc = import17.document;
    final _el_0 = doc.createElement('header');
    _el_0.className = 'material-header shadow';
    createAttr(_el_0, 'style', 'background-color: white;');
    addShimE(_el_0);
    final _el_1 = createDivAndAppend(doc, _el_0);
    _el_1.className = 'material-header-row';
    addShimC(_el_1);
    _compView_2 = import28.ViewMaterialAutoSuggestInputComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_1.append(_el_2);
    addShimC(_el_2);
    _MaterialAutoSuggestInputComponent_2_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import29.MaterialAutoSuggestInputComponent, () {
            return import29.MaterialAutoSuggestInputComponent(null, parentView.parentView.injectorGet(import30.IdGenerator, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import31.PopupSizeProvider, parentView.viewData.parentIndex, null));
          })
        : import29.MaterialAutoSuggestInputComponent(null, parentView.parentView.injectorGet(import30.IdGenerator, parentView.viewData.parentIndex, null), parentView.parentView.injectorGet(import31.PopupSizeProvider, parentView.viewData.parentIndex, null)));
    _compView_2.create(_MaterialAutoSuggestInputComponent_2_5, [const [], const [], const []]);
    import18.appViewUtils.eventManager.addEventListener(_el_2, 'showClearIcon', eventHandler1(_handle_showClearIcon_2_0));
    final subscription_0 = _MaterialAutoSuggestInputComponent_2_5.textChanged.listen(eventHandler1(_handle_inputTextChange_2_1));
    init([_el_0], [subscription_0]);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if (((((((((((identical(token, import29.MaterialAutoSuggestInputComponent) || identical(token, import27.HasDisabled)) || identical(token, import32.HasRenderer)) || identical(token, import33.SelectionContainer)) || identical(token, import34.HighlightProvider)) || identical(token, import35.DropdownHandle)) || identical(token, import32.HasComponentRenderer)) || identical(token, import36.HasFactoryRenderer)) || identical(token, import37.Focusable)) || identical(token, import31.PopupSizeProvider)) && (2 == nodeIndex))) {
      return _MaterialAutoSuggestInputComponent_2_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.myOptions, null)) {
        (_MaterialAutoSuggestInputComponent_2_5.optionsInput = _ctx.myOptions);
      }
    }
    final currVal_0 = _ctx.myInput;
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _MaterialAutoSuggestInputComponent_2_5.inputText = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialAutoSuggestInputComponent_2_5.ngOnInit();
    }
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2.destroy();
    _MaterialAutoSuggestInputComponent_2_5.ngOnDestroy();
  }

  void _handle_showClearIcon_2_0($event) {
    true;
  }

  void _handle_inputTextChange_2_1($event) {
    ctx.myInput = $event;
  }
}

AppView<import4.DocumentoListComponent> viewFactory_DocumentoListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDocumentoListComponent1(parentView, parentIndex);
}

class _ViewDocumentoListComponent2 extends AppView<import4.DocumentoListComponent> {
  import38.ViewMaterialExpansionPanel0 _compView_0;
  import39.MaterialExpansionPanel _MaterialExpansionPanel_0_5;
  import7.ViewMaterialButtonComponent0 _compView_4;
  dynamic _AcxDarkTheme_4_5;
  import8.MaterialButtonComponent _MaterialButtonComponent_4_6;
  import9.ViewMaterialIconComponent0 _compView_5;
  import10.MaterialIconComponent _MaterialIconComponent_5_5;
  String _expr_0;
  var _expr_2;
  import17.Text _text_1;
  _ViewDocumentoListComponent2(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewDocumentoListComponent0._renderType;
  }
  @override
  ComponentRef<import4.DocumentoListComponent> build() {
    _compView_0 = import38.ViewMaterialExpansionPanel0(this, 0);
    final _el_0 = _compView_0.rootEl;
    _el_0.className = 'custom-toolbelt-panel';
    addShimC(_el_0);
    _MaterialExpansionPanel_0_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import39.MaterialExpansionPanel, () {
            return import39.MaterialExpansionPanel(parentView.parentView.injectorGet(import40.NgZone, parentView.viewData.parentIndex), _compView_0.ref, parentView.parentView.injectorGet(import41.DomService, parentView.viewData.parentIndex), null);
          })
        : import39.MaterialExpansionPanel(parentView.parentView.injectorGet(import40.NgZone, parentView.viewData.parentIndex), _compView_0.ref, parentView.parentView.injectorGet(import41.DomService, parentView.viewData.parentIndex), null));
    _text_1 = import17.Text('');
    var doc = import17.document;
    final _el_2 = doc.createElement('div');
    createAttr(_el_2, 'toolbelt', '');
    addShimC(_el_2);
    final _el_3 = createAndAppend(doc, 'material-yes-no-buttons', _el_2);
    _el_3.className = 'custom-toolbelt-buttons';
    createAttr(_el_3, 'noText', 'Cancel');
    createAttr(_el_3, 'yesText', 'Done');
    addShimE(_el_3);
    _compView_4 = import7.ViewMaterialButtonComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_2.append(_el_4);
    createAttr(_el_4, 'icon', '');
    addShimC(_el_4);
    _AcxDarkTheme_4_5 = (import19.isDevMode
        ? import21.debugInjectorWrap(import22.AcxDarkTheme, () {
            return import22.AcxDarkTheme(parentView.parentView.injectorGet(const import23.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null));
          })
        : import22.AcxDarkTheme(parentView.parentView.injectorGet(const import23.OpaqueToken<dynamic>('acxDarkTheme'), parentView.viewData.parentIndex, null)));
    _MaterialButtonComponent_4_6 = import8.MaterialButtonComponent(_el_4, _AcxDarkTheme_4_5, _compView_4.ref, null);
    _compView_5 = import9.ViewMaterialIconComponent0(this, 5);
    final _el_5 = _compView_5.rootEl;
    createAttr(_el_5, 'icon', 'cloud_download');
    addShimC(_el_5);
    _MaterialIconComponent_5_5 = import10.MaterialIconComponent(_el_5);
    _compView_5.create(_MaterialIconComponent_5_5, []);
    _compView_4.create(_MaterialButtonComponent_4_6, [
      [_el_5]
    ]);
    _compView_0.create(_MaterialExpansionPanel_0_5, [
      const [],
      const [],
      const [],
      [_text_1],
      [_el_2]
    ]);
    import18.appViewUtils.eventManager.addEventListener(_el_3, 'yes', eventHandler1(_handle_yes_3_0));
    import18.appViewUtils.eventManager.addEventListener(_el_3, 'no', eventHandler1(_handle_no_3_1));
    init0(_el_0);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import22.AcxDarkTheme) && ((4 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _AcxDarkTheme_4_5;
    }
    if ((((identical(token, import8.MaterialButtonComponent) || identical(token, import26.ButtonDirective)) || identical(token, import27.HasDisabled)) && ((4 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialButtonComponent_4_6;
    }
    if ((((identical(token, import39.MaterialExpansionPanel) || identical(token, import25.DeferredContentAware)) || identical(token, import27.HasDisabled)) && ((0 <= nodeIndex) && (nodeIndex <= 5)))) {
      return _MaterialExpansionPanel_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final local_item = import19.unsafeCast<import42.Factura>(locals['\$implicit']);
    changed = false;
    if (firstCheck) {
      _MaterialExpansionPanel_0_5.showSaveCancel = false;
      changed = true;
    }
    final currVal_0 = import18.interpolate1('Factura Nro: ', local_item.numero, '');
    if (import18.checkBinding(_expr_0, currVal_0)) {
      _MaterialExpansionPanel_0_5.name = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialExpansionPanel_0_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_4.markAsCheckOnce();
    }
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _MaterialButtonComponent_4_6.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_5_5.icon = 'cloud_download';
      changed = true;
    }
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    final currVal_2 = import18.interpolate0(local_item.descripcion);
    if (import18.checkBinding(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_4.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_4.detectChanges();
    _compView_5.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _compView_4.destroy();
    _compView_5.destroy();
    _MaterialExpansionPanel_0_5.ngOnDestroy();
  }

  void _handle_yes_3_0($event) {
    true;
  }

  void _handle_no_3_1($event) {
    true;
  }
}

AppView<import4.DocumentoListComponent> viewFactory_DocumentoListComponent2(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDocumentoListComponent2(parentView, parentIndex);
}

final List<dynamic> styles$DocumentoListComponentHost = const [];

class _ViewDocumentoListComponentHost0 extends AppView<import4.DocumentoListComponent> {
  ViewDocumentoListComponent0 _compView_0;
  import4.DocumentoListComponent _DocumentoListComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  dynamic __AcxImperativeViewUtils_0_9;
  import43.DomRuler __DomRuler_0_10;
  dynamic __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import44.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import45.ZIndexer __ZIndexer_0_18;
  import46.OverlayDomRenderService __OverlayDomRenderService_0_19;
  dynamic __OverlayService_0_20;
  List<import48.RelativePosition> __defaultPopupPositions_0_21;
  import49.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  _ViewDocumentoListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import15.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import50.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((__Window_0_7 == null)) {
      (__Window_0_7 = import50.getWindow());
    }
    return __Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((__DomService_0_8 == null)) {
      (__DomService_0_8 = (import19.isDevMode
          ? import21.debugInjectorWrap(import41.DomService, () {
              return import51.createDomService(this.injectorGet(import41.DomService, viewData.parentIndex, null), this.injectorGet(import52.Disposer, viewData.parentIndex, null), this.injectorGet(import40.NgZone, viewData.parentIndex), _Window_0_7);
            })
          : import51.createDomService(this.injectorGet(import41.DomService, viewData.parentIndex, null), this.injectorGet(import52.Disposer, viewData.parentIndex, null), this.injectorGet(import40.NgZone, viewData.parentIndex), _Window_0_7)));
    }
    return __DomService_0_8;
  }

  dynamic get _AcxImperativeViewUtils_0_9 {
    if ((__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = (import19.isDevMode
          ? import21.debugInjectorWrap(import53.AcxImperativeViewUtils, () {
              return import53.AcxImperativeViewUtils(this.injectorGet(import54.ComponentLoader, viewData.parentIndex), _DomService_0_8);
            })
          : import53.AcxImperativeViewUtils(this.injectorGet(import54.ComponentLoader, viewData.parentIndex), _DomService_0_8)));
    }
    return __AcxImperativeViewUtils_0_9;
  }

  import43.DomRuler get _DomRuler_0_10 {
    if ((__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import43.DomRuler(_Document_0_6, _DomService_0_8));
    }
    return __DomRuler_0_10;
  }

  dynamic get _ManagedZone_0_11 {
    if ((__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = (import19.isDevMode
          ? import21.debugInjectorWrap(import55.ManagedZone, () {
              return import56.Angular2ManagedZone(this.injectorGet(import40.NgZone, viewData.parentIndex));
            })
          : import56.Angular2ManagedZone(this.injectorGet(import40.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = (import19.isDevMode
          ? import21.debugInjectorWrap(const import23.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import57.getDefaultContainerName(this.injectorGet(const import23.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null));
            })
          : import57.getDefaultContainerName(this.injectorGet(const import23.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null))));
    }
    return __overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = (import19.isDevMode
          ? import21.debugInjectorWrap(const import23.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import57.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import23.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null));
            })
          : import57.getOverlayContainerParent(_Document_0_6, this.injectorGet(const import23.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null))));
    }
    return __overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = (import19.isDevMode
          ? import21.debugInjectorWrap(const import23.OpaqueToken<dynamic>('overlayContainer'), () {
              return import57.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import23.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null));
            })
          : import57.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, this.injectorGet(const import23.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null))));
    }
    return __overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return __overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = true);
    }
    return __overlayRepositionLoop_0_16;
  }

  import44.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import44.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_17;
  }

  import45.ZIndexer get _ZIndexer_0_18 {
    if ((__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import45.ZIndexer());
    }
    return __ZIndexer_0_18;
  }

  import46.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import46.OverlayDomRenderService(_OverlayStyleConfig_0_17, _overlayContainer_0_14, _overlayContainerName_0_12, _DomRuler_0_10, _DomService_0_8, _AcxImperativeViewUtils_0_9, _overlaySyncDom_0_15, _overlayRepositionLoop_0_16, _ZIndexer_0_18));
    }
    return __OverlayDomRenderService_0_19;
  }

  dynamic get _OverlayService_0_20 {
    if ((__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = (import19.isDevMode
          ? import21.debugInjectorWrap(import58.OverlayService, () {
              return import58.OverlayService(this.injectorGet(import40.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import58.OverlayService, viewData.parentIndex, null));
            })
          : import58.OverlayService(this.injectorGet(import40.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, this.injectorGet(import58.OverlayService, viewData.parentIndex, null))));
    }
    return __OverlayService_0_20;
  }

  List<import48.RelativePosition> get _defaultPopupPositions_0_21 {
    if ((__defaultPopupPositions_0_21 == null)) {
      (__defaultPopupPositions_0_21 = const [import48.RelativePosition(animationOrigin: 'top center'), import48.RelativePosition(animationOrigin: 'top right', originX: import48.Alignment('End', 'flex-end')), import48.RelativePosition(animationOrigin: 'top left', originX: import48.Alignment('Start', 'flex-start')), import48.RelativePosition(animationOrigin: 'bottom center', originY: import48.Alignment('End', 'flex-end')), import48.RelativePosition(animationOrigin: 'bottom right', originX: import48.Alignment('End', 'flex-end'), originY: import48.Alignment('End', 'flex-end')), import48.RelativePosition(animationOrigin: 'bottom left', originX: import48.Alignment('Start', 'flex-start'), originY: import48.Alignment('End', 'flex-end'))]);
    }
    return __defaultPopupPositions_0_21;
  }

  import49.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = import49.DomPopupSourceFactory(_DomRuler_0_10));
    }
    return __DomPopupSourceFactory_0_22;
  }

  @override
  ComponentRef<import4.DocumentoListComponent> build() {
    _compView_0 = ViewDocumentoListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _DocumentoListComponent_0_5 = import4.DocumentoListComponent();
    _compView_0.create(_DocumentoListComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _DocumentoListComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import17.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import17.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import41.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import53.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import43.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import55.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import23.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import23.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import23.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import23.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import23.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import44.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import45.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import46.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import58.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, const import23.OpaqueToken<List<import59.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_21;
    }
    if ((identical(token, import49.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import18.AppViewUtils.throwOnChanges && firstCheck)) {
      _DocumentoListComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
    _DocumentoListComponent_0_5.ngOnDestroy();
  }
}

AppView<import4.DocumentoListComponent> viewFactory_DocumentoListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewDocumentoListComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(DocumentoListComponent, DocumentoListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
