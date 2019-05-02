// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/document_list/documento_list_component.template.dart' as _ref1;
import 'src/todo_list/todo_list_component.template.dart' as _ref2;
import 'package:angular_document_management/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'src/document_list/documento_list_component.template.dart' as import3;
import 'src/document_list/documento_list_component.dart' as import4;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import5;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import6;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import7;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import8;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import10;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import11;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import13;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import15;
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/src/runtime.dart' as import17;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/window/module.dart' as import19;
import 'package:angular/src/di/errors.dart' as import20;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import21;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import22;
import 'package:angular_components/utils/disposer/disposer.dart' as import23;
import 'package:angular/src/core/zone/ng_zone.dart' as import24;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import25;
import 'package:angular/src/core/linker/component_loader.dart' as import26;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import27;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import28;
import 'package:angular/src/core/di/opaque_token.dart' as import29;
import 'package:angular_components/laminate/overlay/module.dart' as import30;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import31;
import 'package:angular_components/laminate/enums/alignment.dart' as import32;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.ViewDocumentoListComponent0 _compView_0;
  import4.DocumentoListComponent _DocumentoListComponent_0_5;
  dynamic __Document_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  dynamic __AcxImperativeViewUtils_0_9;
  import5.DomRuler __DomRuler_0_10;
  dynamic __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import6.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import7.ZIndexer __ZIndexer_0_18;
  import8.OverlayDomRenderService __OverlayDomRenderService_0_19;
  dynamic __OverlayService_0_20;
  List<import10.RelativePosition> __defaultPopupPositions_0_21;
  import11.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import15.document.createElement('my-app');
    _renderType ??= import16.appViewUtils.createRenderType((import17.isDevMode ? 'asset:angular_document_management/lib/app_component.dart' : null), ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  dynamic get _Document_0_6 {
    if ((__Document_0_6 == null)) {
      (__Document_0_6 = import19.getDocument());
    }
    return __Document_0_6;
  }

  dynamic get _Window_0_7 {
    if ((__Window_0_7 == null)) {
      (__Window_0_7 = import19.getWindow());
    }
    return __Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((__DomService_0_8 == null)) {
      (__DomService_0_8 = (import17.isDevMode
          ? import20.debugInjectorWrap(import21.DomService, () {
              return import22.createDomService(parentView.injectorGet(import21.DomService, viewData.parentIndex, null), parentView.injectorGet(import23.Disposer, viewData.parentIndex, null), parentView.injectorGet(import24.NgZone, viewData.parentIndex), _Window_0_7);
            })
          : import22.createDomService(parentView.injectorGet(import21.DomService, viewData.parentIndex, null), parentView.injectorGet(import23.Disposer, viewData.parentIndex, null), parentView.injectorGet(import24.NgZone, viewData.parentIndex), _Window_0_7)));
    }
    return __DomService_0_8;
  }

  dynamic get _AcxImperativeViewUtils_0_9 {
    if ((__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = (import17.isDevMode
          ? import20.debugInjectorWrap(import25.AcxImperativeViewUtils, () {
              return import25.AcxImperativeViewUtils(parentView.injectorGet(import26.ComponentLoader, viewData.parentIndex), _DomService_0_8);
            })
          : import25.AcxImperativeViewUtils(parentView.injectorGet(import26.ComponentLoader, viewData.parentIndex), _DomService_0_8)));
    }
    return __AcxImperativeViewUtils_0_9;
  }

  import5.DomRuler get _DomRuler_0_10 {
    if ((__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = import5.DomRuler(_Document_0_6, _DomService_0_8));
    }
    return __DomRuler_0_10;
  }

  dynamic get _ManagedZone_0_11 {
    if ((__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = (import17.isDevMode
          ? import20.debugInjectorWrap(import27.ManagedZone, () {
              return import28.Angular2ManagedZone(parentView.injectorGet(import24.NgZone, viewData.parentIndex));
            })
          : import28.Angular2ManagedZone(parentView.injectorGet(import24.NgZone, viewData.parentIndex))));
    }
    return __ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = (import17.isDevMode
          ? import20.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainerName'), () {
              return import30.getDefaultContainerName(parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null));
            })
          : import30.getDefaultContainerName(parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerName'), viewData.parentIndex, null))));
    }
    return __overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = (import17.isDevMode
          ? import20.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainerParent'), () {
              return import30.getOverlayContainerParent(_Document_0_6, parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null));
            })
          : import30.getOverlayContainerParent(_Document_0_6, parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainerParent'), viewData.parentIndex, null))));
    }
    return __overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = (import17.isDevMode
          ? import20.debugInjectorWrap(const import29.OpaqueToken<dynamic>('overlayContainer'), () {
              return import30.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null));
            })
          : import30.getDefaultContainer(_overlayContainerName_0_12, _overlayContainerParent_0_13, parentView.injectorGet(const import29.OpaqueToken<dynamic>('overlayContainer'), viewData.parentIndex, null))));
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

  import6.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = import6.OverlayStyleConfig(_Document_0_6));
    }
    return __OverlayStyleConfig_0_17;
  }

  import7.ZIndexer get _ZIndexer_0_18 {
    if ((__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = import7.ZIndexer());
    }
    return __ZIndexer_0_18;
  }

  import8.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = import8.OverlayDomRenderService(_OverlayStyleConfig_0_17, _overlayContainer_0_14, _overlayContainerName_0_12, _DomRuler_0_10, _DomService_0_8, _AcxImperativeViewUtils_0_9, _overlaySyncDom_0_15, _overlayRepositionLoop_0_16, _ZIndexer_0_18));
    }
    return __OverlayDomRenderService_0_19;
  }

  dynamic get _OverlayService_0_20 {
    if ((__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = (import17.isDevMode
          ? import20.debugInjectorWrap(import31.OverlayService, () {
              return import31.OverlayService(parentView.injectorGet(import24.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, parentView.injectorGet(import31.OverlayService, viewData.parentIndex, null));
            })
          : import31.OverlayService(parentView.injectorGet(import24.NgZone, viewData.parentIndex), _overlaySyncDom_0_15, _OverlayDomRenderService_0_19, parentView.injectorGet(import31.OverlayService, viewData.parentIndex, null))));
    }
    return __OverlayService_0_20;
  }

  List<import10.RelativePosition> get _defaultPopupPositions_0_21 {
    if ((__defaultPopupPositions_0_21 == null)) {
      (__defaultPopupPositions_0_21 = const [import10.RelativePosition(animationOrigin: 'top center'), import10.RelativePosition(animationOrigin: 'top right', originX: import10.Alignment('End', 'flex-end')), import10.RelativePosition(animationOrigin: 'top left', originX: import10.Alignment('Start', 'flex-start')), import10.RelativePosition(animationOrigin: 'bottom center', originY: import10.Alignment('End', 'flex-end')), import10.RelativePosition(animationOrigin: 'bottom right', originX: import10.Alignment('End', 'flex-end'), originY: import10.Alignment('End', 'flex-end')), import10.RelativePosition(animationOrigin: 'bottom left', originX: import10.Alignment('Start', 'flex-start'), originY: import10.Alignment('End', 'flex-end'))]);
    }
    return __defaultPopupPositions_0_21;
  }

  import11.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = import11.DomPopupSourceFactory(_DomRuler_0_10));
    }
    return __DomPopupSourceFactory_0_22;
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import15.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewDocumentoListComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _DocumentoListComponent_0_5 = import4.DocumentoListComponent();
    _compView_0.create(_DocumentoListComponent_0_5, []);
    init(const [], null);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import15.Document) && (0 == nodeIndex))) {
      return _Document_0_6;
    }
    if ((identical(token, import15.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import21.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import25.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import5.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import27.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import29.OpaqueToken<dynamic>('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import6.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import7.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import8.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import31.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, const import29.OpaqueToken<List<import32.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_21;
    }
    if ((identical(token, import11.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if ((!import16.AppViewUtils.throwOnChanges && firstCheck)) {
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

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return ViewAppComponent0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import13.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroy();
  }
}

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
