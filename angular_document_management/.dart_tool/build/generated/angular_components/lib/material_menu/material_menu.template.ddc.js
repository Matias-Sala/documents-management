define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/bootstrap/modules', 'packages/angular_components/src/material_tooltip/tooltip_controller', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/material_tooltip/module', 'packages/angular_components/material_button/material_button.template', 'packages/angular_components/theme/dark_theme', 'packages/angular_components/material_button/material_button', 'packages/angular_components/src/material_tooltip/icon_tooltip', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/angular_components/src/laminate/popup/popup_hierarchy', 'packages/angular_components/utils/angular/reference/reference', 'packages/angular_components/focus/focus_interface', 'packages/angular_components/material_menu/material_menu', 'packages/angular_components/button_decorator/button_decorator', 'packages/angular_components/interfaces/has_disabled', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular/angular.template', 'packages/angular_components/focus/focus.template', 'packages/angular_components/interfaces/has_disabled.template', 'packages/angular_components/material_menu/menu_popup_wrapper.template', 'packages/angular_components/material_popup/material_popup.template', 'packages/angular_components/material_tooltip/material_tooltip.template', 'packages/angular_components/mixins/focusable_mixin.template', 'packages/angular_components/model/menu/menu.template', 'packages/angular_components/utils/angular/css/css.template', 'packages/angular_components/utils/disposer/disposer.template', 'packages/angular_components/material_menu/menu_item_groups.scss.css.shim', 'packages/angular_components/focus/focus_trap.template', 'packages/angular_components/focus/focus_trap', 'packages/angular_components/focus/focus', 'packages/angular_components/focus/focus_activable_item', 'packages/angular_components/model/menu/menu', 'packages/angular_components/button_decorator/button_decorator.template', 'packages/angular_components/material_select/material_select_item.template', 'packages/angular_components/material_select/material_select_item', 'packages/angular_components/model/a11y/active_item_directive', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/laminate/components/modal/modal', 'packages/angular_components/model/a11y/active_item_directive.template', 'packages/angular_components/mixins/material_dropdown_base', 'packages/angular_components/material_select/activation_handler', 'packages/angular_components/model/selection/selection_container', 'packages/angular_components/model/ui/has_renderer', 'packages/angular_components/highlighted_text/highlighted_text.template', 'packages/angular_components/highlighted_text/highlighted_text', 'packages/angular_components/material_menu/menu_item_affix_list.template', 'packages/angular_components/material_menu/menu_item_affix_list', 'packages/angular_components/material_menu/menu_root', 'packages/angular_components/model/menu/menu_item_affix', 'packages/observable/observable', 'packages/angular_components/material_popup/material_popup', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/src/laminate/overlay/overlay_ref', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/content/deferred_content', 'packages/angular_components/content/deferred_content_aware', 'packages/angular_components/material_list/material_list.template', 'packages/angular_components/material_list/material_list', 'packages/angular_components/utils/id_generator/id_generator', 'packages/angular_components/content/deferred_content.template', 'packages/angular_components/focus/focus_activable_item.template', 'packages/angular_components/laminate/enums/alignment.template', 'packages/angular_components/material_menu/menu_root.template', 'packages/angular_components/mixins/material_dropdown_base.template', 'packages/angular_components/model/a11y/active_item.template', 'packages/angular_components/model/action/delayed_action.template', 'packages/angular_components/model/menu/selectable_menu.template', 'packages/angular_components/model/selection/select.template', 'packages/angular_components/model/selection/selection_model.template', 'packages/angular_components/model/ui/highlighted_text_model.template', 'packages/angular_components/utils/angular/properties/properties.template', 'packages/angular_components/utils/id_generator/id_generator.template', 'packages/angular_components/material_menu/menu_popup.scss.css.shim', 'packages/angular_components/laminate/popup/popup.template'], function(dart_sdk, view_type, change_detection, modules, tooltip_controller, disposer, module, material_button, dark_theme, material_button$, icon_tooltip, dom_popup_source, popup_hierarchy, reference, focus_interface, material_menu, button_decorator, has_disabled, material_icon, material_icon$, angular, focus, has_disabled$, menu_popup_wrapper, material_popup, material_tooltip, focusable_mixin, menu, css, disposer$, menu_item_groups$46scss$46css, focus_trap, focus_trap$, focus$, focus_activable_item, menu$, button_decorator$, material_select_item, material_select_item$, active_item_directive, dom_service, modal, active_item_directive$, material_dropdown_base, activation_handler, selection_container, has_renderer, highlighted_text, highlighted_text$, menu_item_affix_list, menu_item_affix_list$, menu_root, menu_item_affix, observable, material_popup$, ng_zone, overlay_ref, zindexer, alignment, deferred_content, deferred_content_aware, material_list, material_list$, id_generator, deferred_content$, focus_activable_item$, alignment$, menu_root$, material_dropdown_base$, active_item, delayed_action, selectable_menu, select, selection_model, highlighted_text_model, properties, id_generator$, menu_popup$46scss$46css, popup) {
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
  const src__di__errors = change_detection.src__di__errors;
  const src__core__di__opaque_token = change_detection.src__core__di__opaque_token;
  const src__di__reflector = change_detection.src__di__reflector;
  const src__core__linker__app_view_utils = modules.src__core__linker__app_view_utils;
  const src__core__linker__view_container = modules.src__core__linker__view_container;
  const src__core__linker__app_view = modules.src__core__linker__app_view;
  const src__core__linker__template_ref = modules.src__core__linker__template_ref;
  const src__common__directives__ng_if = modules.src__common__directives__ng_if;
  const src__core__linker__component_factory = modules.src__core__linker__component_factory;
  const src__common__directives__ng_for = modules.src__common__directives__ng_for;
  const src__common__directives__ng_class = modules.src__common__directives__ng_class;
  const src__core__linker__element_ref = modules.src__core__linker__element_ref;
  const src__material_tooltip__tooltip_controller = tooltip_controller.src__material_tooltip__tooltip_controller;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const material_tooltip__module = module.material_tooltip__module;
  const material_button__material_button$46template = material_button.material_button__material_button$46template;
  const theme__dark_theme = dark_theme.theme__dark_theme;
  const material_button__material_button = material_button$.material_button__material_button;
  const src__material_tooltip__tooltip = icon_tooltip.src__material_tooltip__tooltip;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const src__laminate__popup__popup_source_directive = popup_hierarchy.src__laminate__popup__popup_source_directive;
  const src__laminate__popup__popup_ref = popup_hierarchy.src__laminate__popup__popup_ref;
  const src__laminate__popup__popup_hierarchy = popup_hierarchy.src__laminate__popup__popup_hierarchy;
  const src__laminate__popup__popup_size_provider = popup_hierarchy.src__laminate__popup__popup_size_provider;
  const utils__angular__reference__reference = reference.utils__angular__reference__reference;
  const focus__focus_interface = focus_interface.focus__focus_interface;
  const material_menu__material_menu = material_menu.material_menu__material_menu;
  const material_menu__menu_popup = material_menu.material_menu__menu_popup;
  const material_menu__menu_item_groups = material_menu.material_menu__menu_item_groups;
  const button_decorator__button_decorator = button_decorator.button_decorator__button_decorator;
  const interfaces__has_disabled = has_disabled.interfaces__has_disabled;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const angular$46template = angular.angular$46template;
  const focus__focus$46template = focus.focus__focus$46template;
  const interfaces__has_disabled$46template = has_disabled$.interfaces__has_disabled$46template;
  const material_menu__menu_popup_wrapper$46template = menu_popup_wrapper.material_menu__menu_popup_wrapper$46template;
  const material_popup__material_popup$46template = material_popup.material_popup__material_popup$46template;
  const material_tooltip__material_tooltip$46template = material_tooltip.material_tooltip__material_tooltip$46template;
  const mixins__focusable_mixin$46template = focusable_mixin.mixins__focusable_mixin$46template;
  const model__menu__menu$46template = menu.model__menu__menu$46template;
  const utils__angular__css__css$46template = css.utils__angular__css__css$46template;
  const utils__disposer__disposer$46template = disposer$.utils__disposer__disposer$46template;
  const material_menu__menu_item_groups$46scss$46css$46shim = menu_item_groups$46scss$46css.material_menu__menu_item_groups$46scss$46css$46shim;
  const focus__focus_trap$46template = focus_trap.focus__focus_trap$46template;
  const focus__focus_trap = focus_trap$.focus__focus_trap;
  const focus__focus = focus$.focus__focus;
  const focus__focus_activable_item = focus_activable_item.focus__focus_activable_item;
  const model__menu__menu = menu$.model__menu__menu;
  const button_decorator__button_decorator$46template = button_decorator$.button_decorator__button_decorator$46template;
  const material_select__material_select_item$46template = material_select_item.material_select__material_select_item$46template;
  const material_select__material_select_item = material_select_item$.material_select__material_select_item;
  const model__a11y__active_item_directive = active_item_directive.model__a11y__active_item_directive;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const laminate__components__modal__modal = modal.laminate__components__modal__modal;
  const model__a11y__active_item_directive$46template = active_item_directive$.model__a11y__active_item_directive$46template;
  const mixins__material_dropdown_base = material_dropdown_base.mixins__material_dropdown_base;
  const material_select__activation_handler = activation_handler.material_select__activation_handler;
  const model__selection__selection_container = selection_container.model__selection__selection_container;
  const model__ui__has_renderer = has_renderer.model__ui__has_renderer;
  const highlighted_text__highlighted_text$46template = highlighted_text.highlighted_text__highlighted_text$46template;
  const highlighted_text__highlighted_text = highlighted_text$.highlighted_text__highlighted_text;
  const material_menu__menu_item_affix_list$46template = menu_item_affix_list.material_menu__menu_item_affix_list$46template;
  const material_menu__menu_item_affix_list = menu_item_affix_list$.material_menu__menu_item_affix_list;
  const material_menu__menu_root = menu_root.material_menu__menu_root;
  const model__menu__menu_item_affix = menu_item_affix.model__menu__menu_item_affix;
  const src__observable_list = observable.src__observable_list;
  const material_popup__material_popup = material_popup$.material_popup__material_popup;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__laminate__overlay__overlay_service = overlay_ref.src__laminate__overlay__overlay_service;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const content__deferred_content = deferred_content.content__deferred_content;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const material_list__material_list$46template = material_list.material_list__material_list$46template;
  const material_list__material_list = material_list$.material_list__material_list;
  const utils__id_generator__id_generator = id_generator.utils__id_generator__id_generator;
  const content__deferred_content$46template = deferred_content$.content__deferred_content$46template;
  const focus__focus_activable_item$46template = focus_activable_item$.focus__focus_activable_item$46template;
  const laminate__enums__alignment$46template = alignment$.laminate__enums__alignment$46template;
  const material_menu__menu_root$46template = menu_root$.material_menu__menu_root$46template;
  const mixins__material_dropdown_base$46template = material_dropdown_base$.mixins__material_dropdown_base$46template;
  const model__a11y__active_item$46template = active_item.model__a11y__active_item$46template;
  const model__action__delayed_action$46template = delayed_action.model__action__delayed_action$46template;
  const model__menu__selectable_menu$46template = selectable_menu.model__menu__selectable_menu$46template;
  const model__selection__select$46template = select.model__selection__select$46template;
  const model__selection__selection_model$46template = selection_model.model__selection__selection_model$46template;
  const model__ui__highlighted_text_model$46template = highlighted_text_model.model__ui__highlighted_text_model$46template;
  const utils__angular__properties__properties$46template = properties.utils__angular__properties__properties$46template;
  const utils__id_generator__id_generator$46template = id_generator$.utils__id_generator__id_generator$46template;
  const material_menu__menu_popup$46scss$46css$46shim = menu_popup$46scss$46css.material_menu__menu_popup$46scss$46css$46shim;
  const laminate__popup__popup$46template = popup.laminate__popup__popup$46template;
  const _root = Object.create(null);
  const material_menu__material_menu$46template = Object.create(_root);
  const material_menu__menu_item_groups$46template = Object.create(_root);
  const material_menu__menu_popup$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $addAll = dartx.addAll;
  const $text = dartx.text;
  const $addEventListener = dartx.addEventListener;
  const $toString = dartx.toString;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let VoidToTooltipController = () => (VoidToTooltipController = dart.constFn(dart.fnType(src__material_tooltip__tooltip_controller.TooltipController, [])))();
  let VoidToAcxDarkTheme = () => (VoidToAcxDarkTheme = dart.constFn(dart.fnType(theme__dark_theme.AcxDarkTheme, [])))();
  let VoidToMaterialTooltipDirective = () => (VoidToMaterialTooltipDirective = dart.constFn(dart.fnType(src__material_tooltip__tooltip.MaterialTooltipDirective, [])))();
  let VoidToPopupSourceDirective = () => (VoidToPopupSourceDirective = dart.constFn(dart.fnType(src__laminate__popup__popup_source_directive.PopupSourceDirective, [])))();
  let AppViewOfMaterialMenuComponent = () => (AppViewOfMaterialMenuComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent)))();
  let AppViewAndintToAppViewOfMaterialMenuComponent = () => (AppViewAndintToAppViewOfMaterialMenuComponent = dart.constFn(dart.fnType(AppViewOfMaterialMenuComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMenuPopupComponent = () => (JSArrayOfMenuPopupComponent = dart.constFn(_interceptors.JSArray$(material_menu__menu_popup.MenuPopupComponent)))();
  let ListOfMenuPopupComponent = () => (ListOfMenuPopupComponent = dart.constFn(core.List$(material_menu__menu_popup.MenuPopupComponent)))();
  let _ViewMaterialMenuComponent3ToListOfMenuPopupComponent = () => (_ViewMaterialMenuComponent3ToListOfMenuPopupComponent = dart.constFn(dart.fnType(ListOfMenuPopupComponent(), [material_menu__material_menu$46template._ViewMaterialMenuComponent3])))();
  let ComponentFactoryOfMaterialMenuComponent = () => (ComponentFactoryOfMaterialMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__material_menu.MaterialMenuComponent)))();
  let ComponentRefOfMaterialMenuComponent = () => (ComponentRefOfMaterialMenuComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent)))();
  let AppViewOfMenuItemGroupsComponent = () => (AppViewOfMenuItemGroupsComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let AppViewAndintToAppViewOfMenuItemGroupsComponent = () => (AppViewAndintToAppViewOfMenuItemGroupsComponent = dart.constFn(dart.fnType(AppViewOfMenuItemGroupsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfAutoFocusDirective = () => (JSArrayOfAutoFocusDirective = dart.constFn(_interceptors.JSArray$(focus__focus.AutoFocusDirective)))();
  let ListOfAutoFocusDirective = () => (ListOfAutoFocusDirective = dart.constFn(core.List$(focus__focus.AutoFocusDirective)))();
  let _ViewMenuItemGroupsComponent16ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent16ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16])))();
  let _ViewMenuItemGroupsComponent15ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent15ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15])))();
  let JSArrayOfListOfAutoFocusDirective = () => (JSArrayOfListOfAutoFocusDirective = dart.constFn(_interceptors.JSArray$(ListOfAutoFocusDirective())))();
  let _ViewMenuItemGroupsComponent6ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent6ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6])))();
  let _ViewMenuItemGroupsComponent5ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent5ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5])))();
  let _ViewMenuItemGroupsComponent4ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent4ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4])))();
  let _ViewMenuItemGroupsComponent1ToListOfAutoFocusDirective = () => (_ViewMenuItemGroupsComponent1ToListOfAutoFocusDirective = dart.constFn(dart.fnType(ListOfAutoFocusDirective(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1])))();
  let JSArrayOfFocusableActivateItem = () => (JSArrayOfFocusableActivateItem = dart.constFn(_interceptors.JSArray$(focus__focus_activable_item.FocusableActivateItem)))();
  let ListOfFocusableActivateItem = () => (ListOfFocusableActivateItem = dart.constFn(core.List$(focus__focus_activable_item.FocusableActivateItem)))();
  let _ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6])))();
  let _ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5])))();
  let _ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4])))();
  let _ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem = () => (_ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem = dart.constFn(dart.fnType(ListOfFocusableActivateItem(), [material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1])))();
  let ComponentFactoryOfMenuItemGroupsComponent = () => (ComponentFactoryOfMenuItemGroupsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let VoidToActiveItemDirective = () => (VoidToActiveItemDirective = dart.constFn(dart.fnType(model__a11y__active_item_directive.ActiveItemDirective, [])))();
  let VoidToAutoFocusDirective = () => (VoidToAutoFocusDirective = dart.constFn(dart.fnType(focus__focus.AutoFocusDirective, [])))();
  let VoidToMaterialSelectItemComponent = () => (VoidToMaterialSelectItemComponent = dart.constFn(dart.fnType(material_select__material_select_item.MaterialSelectItemComponent, [])))();
  let VoidToMenuItemAffixListComponent = () => (VoidToMenuItemAffixListComponent = dart.constFn(dart.fnType(material_menu__menu_item_affix_list.MenuItemAffixListComponent, [])))();
  let ObservableListOfMenuItemAffix = () => (ObservableListOfMenuItemAffix = dart.constFn(src__observable_list.ObservableList$(model__menu__menu_item_affix.MenuItemAffix)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let VoidToMaterialPopupComponent = () => (VoidToMaterialPopupComponent = dart.constFn(dart.fnType(material_popup__material_popup.MaterialPopupComponent, [])))();
  let VoidToMenuItemGroupsComponent = () => (VoidToMenuItemGroupsComponent = dart.constFn(dart.fnType(material_menu__menu_item_groups.MenuItemGroupsComponent, [])))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let ComponentRefOfMenuItemGroupsComponent = () => (ComponentRefOfMenuItemGroupsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let AppViewOfMenuPopupComponent = () => (AppViewOfMenuPopupComponent = dart.constFn(src__core__linker__app_view.AppView$(material_menu__menu_popup.MenuPopupComponent)))();
  let AppViewAndintToAppViewOfMenuPopupComponent = () => (AppViewAndintToAppViewOfMenuPopupComponent = dart.constFn(dart.fnType(AppViewOfMenuPopupComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfMenuItemGroupsComponent = () => (JSArrayOfMenuItemGroupsComponent = dart.constFn(_interceptors.JSArray$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let ListOfMenuItemGroupsComponent = () => (ListOfMenuItemGroupsComponent = dart.constFn(core.List$(material_menu__menu_item_groups.MenuItemGroupsComponent)))();
  let _ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent = () => (_ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent = dart.constFn(dart.fnType(ListOfMenuItemGroupsComponent(), [material_menu__menu_popup$46template._ViewMenuPopupComponent1])))();
  let ComponentFactoryOfMenuPopupComponent = () => (ComponentFactoryOfMenuPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(material_menu__menu_popup.MenuPopupComponent)))();
  let JSArrayOfHtmlElement = () => (JSArrayOfHtmlElement = dart.constFn(_interceptors.JSArray$(html.HtmlElement)))();
  let ComponentRefOfMenuPopupComponent = () => (ComponentRefOfMenuPopupComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(material_menu__menu_popup.MenuPopupComponent)))();
  dart.defineLazy(material_menu__material_menu$46template, {
    /*material_menu__material_menu$46template.styles$MaterialMenuComponent*/get styles$MaterialMenuComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _appEl_0 = Symbol('_appEl_0');
  const _AcxDarkTheme_0_8 = Symbol('_AcxDarkTheme_0_8');
  const _MaterialButtonComponent_0_9 = Symbol('_MaterialButtonComponent_0_9');
  const _MaterialTooltipDirective_0_10 = Symbol('_MaterialTooltipDirective_0_10');
  const _PopupSourceDirective_0_11 = Symbol('_PopupSourceDirective_0_11');
  const __TooltipController_0_14 = Symbol('__TooltipController_0_14');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  const _appEl_4 = Symbol('_appEl_4');
  const _query_MenuPopupComponent_1_1_isDirty = Symbol('_query_MenuPopupComponent_1_1_isDirty');
  const _NgIf_4_9 = Symbol('_NgIf_4_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _el_0 = Symbol('_el_0');
  const _TooltipController_0_14 = Symbol('_TooltipController_0_14');
  let const$;
  let const$0;
  let const$1;
  const _MenuPopupComponent_0_5 = Symbol('_MenuPopupComponent_0_5');
  material_menu__material_menu$46template.ViewMaterialMenuComponent0 = class ViewMaterialMenuComponent0 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    get [_TooltipController_0_14]() {
      if (this[__TooltipController_0_14] == null) {
        this[__TooltipController_0_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_controller.TooltipController, dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null))), VoidToTooltipController())) : material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)));
      }
      return this[__TooltipController_0_14];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new material_button__material_button$46template.ViewMaterialButtonComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this[_el_0].className = "trigger-button";
      this.createAttr(this[_el_0], "popupSource", "");
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0]);
      this[_AcxDarkTheme_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(theme__dark_theme.AcxDarkTheme, dart.wrapType(theme__dark_theme.AcxDarkTheme), dart.fn(() => new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$ || (const$ = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null))), VoidToAcxDarkTheme())) : new theme__dark_theme.AcxDarkTheme.new(core.bool._check(this.parentView.injectorGet(const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("acxDarkTheme"))), this.viewData.parentIndex, null)));
      this[_MaterialButtonComponent_0_9] = new material_button__material_button.MaterialButtonComponent.new(html.HtmlElement._check(this[_el_0]), theme__dark_theme.AcxDarkTheme._check(this[_AcxDarkTheme_0_8]), this[_compView_0].ref, null);
      this[_MaterialTooltipDirective_0_10] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip.MaterialTooltipDirective, dart.wrapType(src__material_tooltip__tooltip.MaterialTooltipDirective), dart.fn(() => new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0].ref, html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.viewData.parentIndex))), VoidToMaterialTooltipDirective())) : new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), this[_appEl_0], html.HtmlElement._check(this[_el_0]), this[_appEl_0], this[_compView_0].ref, html.Window._check(this.parentView.injectorGet(dart.wrapType(html.Window), this.viewData.parentIndex)));
      this[_PopupSourceDirective_0_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), html.HtmlElement._check(this[_el_0]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null);
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponent1, AppViewAndintToAppViewOfMaterialMenuComponent()));
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponent2, AppViewAndintToAppViewOfMaterialMenuComponent()));
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      let _text_3 = html.Text.new(" ");
      this[_compView_0].create(this[_MaterialButtonComponent_0_9], [(() => {
          let _ = [this[_appEl_1], this[_appEl_2], _text_3];
          _[$addAll](core.Iterable._check(this.projectableNodes[$_get](0)));
          return _;
        })()]);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      parentRenderNode[$append](_anchor_4);
      this[_appEl_4] = new src__core__linker__view_container.ViewContainer.new(4, null, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4], dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponent3, AppViewAndintToAppViewOfMaterialMenuComponent()));
      this[_NgIf_4_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4], _TemplateRef_4_8);
      let subscription_0 = this[_MaterialButtonComponent_0_9].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'handleButtonClick')));
      this.ctx.button = this[_MaterialButtonComponent_0_9];
      this.init(const$1 || (const$1 = dart.constList([], dart.dynamic)), [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(theme__dark_theme.AcxDarkTheme) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_AcxDarkTheme_0_8];
      }
      if ((token === dart.wrapType(material_button__material_button.MaterialButtonComponent) || token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) || token === dart.wrapType(interfaces__has_disabled.HasDisabled)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialButtonComponent_0_9];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_TooltipController_0_14];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_2 = _ctx.disabled;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MaterialButtonComponent_0_9].disabled = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.tabbable;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MaterialButtonComponent_0_9].tabbable = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialButtonComponent_0_9].ngOnInit();
      }
      let currVal_4 = _ctx.tooltipText;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MaterialTooltipDirective_0_10].text = currVal_4;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.hasTooltip;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MaterialTooltipDirective_0_10].canShow = currVal_5;
        this[_expr_5] = currVal_5;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_0_10].ngOnInit();
      }
      this[_NgIf_1_9].ngIf = _ctx.menu.uiIcon != null;
      this[_NgIf_2_9].ngIf = _ctx.buttonText != null;
      this[_NgIf_4_9].ngIf = _ctx.hasSubmenu;
      this[_appEl_0].detectChangesInNestedViews();
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_4].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MenuPopupComponent_1_1_isDirty])) {
          this.ctx.menuPopup = src__core__linker__app_view_utils.firstOrNull(material_menu__menu_popup.MenuPopupComponent, this[_appEl_4].mapNestedViews(material_menu__menu_popup.MenuPopupComponent, material_menu__material_menu$46template._ViewMaterialMenuComponent3, dart.fn(nestedView => JSArrayOfMenuPopupComponent().of([nestedView[_MenuPopupComponent_0_5]]), _ViewMaterialMenuComponent3ToListOfMenuPopupComponent())));
          this[_query_MenuPopupComponent_1_1_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.ariaLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this.setAttr(this[_el_0], "aria-label", currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.hasIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this.setAttr(this[_el_0], "icon", currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialTooltipDirective_0_10].ngAfterViewInit();
          this[_PopupSourceDirective_0_11].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0].destroyNestedViews();
      this[_appEl_1].destroyNestedViews();
      this[_appEl_2].destroyNestedViews();
      this[_appEl_4].destroyNestedViews();
      this[_compView_0].destroy();
      this[_MaterialTooltipDirective_0_10].ngOnDestroy();
      this[_PopupSourceDirective_0_11].ngOnDestroy();
    }
  };
  (material_menu__material_menu$46template.ViewMaterialMenuComponent0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_appEl_0] = null;
    this[_AcxDarkTheme_0_8] = null;
    this[_MaterialButtonComponent_0_9] = null;
    this[_MaterialTooltipDirective_0_10] = null;
    this[_PopupSourceDirective_0_11] = null;
    this[__TooltipController_0_14] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    this[_appEl_4] = null;
    this[_query_MenuPopupComponent_1_1_isDirty] = true;
    this[_NgIf_4_9] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_el_0] = null;
    material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("material-menu"));
    let t = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
    t == null ? material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/material_menu.dart" : null, src__core__metadata__view.ViewEncapsulation.None, material_menu__material_menu$46template.styles$MaterialMenuComponent) : t;
    this.setupComponentType(material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType);
  }).prototype = material_menu__material_menu$46template.ViewMaterialMenuComponent0.prototype;
  dart.addTypeTests(material_menu__material_menu$46template.ViewMaterialMenuComponent0);
  dart.setMethodSignature(material_menu__material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(material_menu__material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getGetters(material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_TooltipController_0_14]: dart.dynamic
  }));
  dart.setFieldSignature(material_menu__material_menu$46template.ViewMaterialMenuComponent0, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template.ViewMaterialMenuComponent0.__proto__),
    [_compView_0]: dart.fieldType(material_button__material_button$46template.ViewMaterialButtonComponent0),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_AcxDarkTheme_0_8]: dart.fieldType(dart.dynamic),
    [_MaterialButtonComponent_0_9]: dart.fieldType(material_button__material_button.MaterialButtonComponent),
    [_MaterialTooltipDirective_0_10]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_PopupSourceDirective_0_11]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [__TooltipController_0_14]: dart.fieldType(dart.dynamic),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MenuPopupComponent_1_1_isDirty]: dart.fieldType(core.bool),
    [_NgIf_4_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(core.bool),
    [_expr_3]: dart.fieldType(core.bool),
    [_expr_4]: dart.fieldType(core.String),
    [_expr_5]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_menu__material_menu$46template.ViewMaterialMenuComponent0, {
    /*material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent0 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template.ViewMaterialMenuComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__material_menu$46template, {
    /*material_menu__material_menu$46template._MaterialMenuComponentNgFactory*/get _MaterialMenuComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMaterialMenuComponent()).new("material-menu", dart.fn(material_menu__material_menu$46template.viewFactory_MaterialMenuComponentHost0, AppViewAndintToAppViewOfMaterialMenuComponent())));
    }
  });
  dart.copyProperties(material_menu__material_menu$46template, {
    get MaterialMenuComponentNgFactory() {
      return material_menu__material_menu$46template._MaterialMenuComponentNgFactory;
    }
  });
  const _MaterialIconComponent_0_5 = Symbol('_MaterialIconComponent_0_5');
  material_menu__material_menu$46template._ViewMaterialMenuComponent1 = class _ViewMaterialMenuComponent1 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    build() {
      this[_compView_0] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this[_MaterialIconComponent_0_5] = new material_icon__material_icon.MaterialIconComponent.new(_el_0);
      this[_compView_0].create(this[_MaterialIconComponent_0_5], []);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      changed = false;
      let currVal_0 = _ctx.menu.uiIcon;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MaterialIconComponent_0_5].icon = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroy();
    }
  };
  (material_menu__material_menu$46template._ViewMaterialMenuComponent1.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialIconComponent_0_5] = null;
    this[_expr_0] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponent1.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponent1);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent1, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponent1.__proto__),
    [_compView_0]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent1 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponent1.new(parentView, parentIndex);
  };
  const _text_1 = Symbol('_text_1');
  material_menu__material_menu$46template._ViewMaterialMenuComponent2 = class _ViewMaterialMenuComponent2 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      this[_text_1] = html.Text.new("");
      _el_0[$append](this[_text_1]);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.buttonText;
      let currVal_0 = l != null ? l : "";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_text_1][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (material_menu__material_menu$46template._ViewMaterialMenuComponent2.new = function(parentView, parentIndex) {
    this[_expr_0] = null;
    this[_text_1] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponent2.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponent2);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent2, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponent2.__proto__),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_text_1]: dart.fieldType(html.Text)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent2 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponent2.new(parentView, parentIndex);
  };
  const _PopupSourceDirective_0_6 = Symbol('_PopupSourceDirective_0_6');
  const _handle_isExpandedChange_0_0 = Symbol('_handle_isExpandedChange_0_0');
  material_menu__material_menu$46template._ViewMaterialMenuComponent3 = class _ViewMaterialMenuComponent3 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    build() {
      this[_compView_0] = new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      let _el_0 = this[_compView_0].rootEl;
      this[_MenuPopupComponent_0_5] = new material_menu__menu_popup.MenuPopupComponent.new();
      this[_PopupSourceDirective_0_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), _el_0, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.viewData.parentIndex)), _el_0, utils__angular__reference__reference.ReferenceDirective._check(this.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.viewData.parentIndex, null)), null);
      this[_compView_0].create(this[_MenuPopupComponent_0_5], [this.projectableNodes[$_get](1)]);
      let subscription_0 = this[_MenuPopupComponent_0_5].isExpandedChange.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_isExpandedChange_0_0)));
      this.init([_el_0], [subscription_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_toggle = src__runtime__optimizations.unsafeCast(material_menu__material_menu$46template.ViewMaterialMenuComponent0, this.parentView)[_PopupSourceDirective_0_11];
      changed = false;
      let currVal_0 = _ctx.menu;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_MenuPopupComponent_0_5].menu = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        this[_MenuPopupComponent_0_5].preferredPositions = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        this[_MenuPopupComponent_0_5].isExpanded = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = _ctx.width;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3], currVal_3))) {
        this[_MenuPopupComponent_0_5].width = currVal_3;
        changed = true;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = local_toggle;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4], currVal_4))) {
        this[_MenuPopupComponent_0_5].popupSource = currVal_4;
        changed = true;
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = _ctx.popupClass;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5], currVal_5))) {
        this[_MenuPopupComponent_0_5].popupClass = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_PopupSourceDirective_0_6].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_menu__material_menu$46template.ViewMaterialMenuComponent0, this.parentView)[_query_MenuPopupComponent_1_1_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_PopupSourceDirective_0_6].ngOnDestroy();
    }
    [_handle_isExpandedChange_0_0]($event) {
      this.ctx.isExpanded = $event;
    }
  };
  (material_menu__material_menu$46template._ViewMaterialMenuComponent3.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MenuPopupComponent_0_5] = null;
    this[_PopupSourceDirective_0_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__material_menu$46template.ViewMaterialMenuComponent0._renderType;
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponent3.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponent3);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_isExpandedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponent3, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponent3.__proto__),
    [_compView_0]: dart.fieldType(material_menu__menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_0_5]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent),
    [_PopupSourceDirective_0_6]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.String)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponent3 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponent3.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__material_menu$46template, {
    /*material_menu__material_menu$46template.styles$MaterialMenuComponentHost*/get styles$MaterialMenuComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MaterialMenuComponent_0_5 = Symbol('_MaterialMenuComponent_0_5');
  material_menu__material_menu$46template._ViewMaterialMenuComponentHost0 = class _ViewMaterialMenuComponentHost0 extends src__core__linker__app_view.AppView$(material_menu__material_menu.MaterialMenuComponent) {
    build() {
      this[_compView_0] = new material_menu__material_menu$46template.ViewMaterialMenuComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_MaterialMenuComponent_0_5] = new material_menu__material_menu.MaterialMenuComponent.new(this.rootEl);
      this[_compView_0].create(this[_MaterialMenuComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMaterialMenuComponent()).new(0, this, this.rootEl, this[_MaterialMenuComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 === nodeIndex) {
        return this[_MaterialMenuComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialMenuComponent_0_5].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_compView_0].destroy();
      this[_MaterialMenuComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_MaterialMenuComponent_0_5] = null;
    material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.prototype;
  dart.addTypeTests(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0);
  dart.setMethodSignature(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__material_menu.MaterialMenuComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(material_menu__material_menu$46template.ViewMaterialMenuComponent0),
    [_MaterialMenuComponent_0_5]: dart.fieldType(material_menu__material_menu.MaterialMenuComponent)
  }));
  material_menu__material_menu$46template.viewFactory_MaterialMenuComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__material_menu$46template._ViewMaterialMenuComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__material_menu$46template, {
    /*material_menu__material_menu$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__material_menu$46template.initReflector = function() {
    if (dart.test(material_menu__material_menu$46template._visited)) {
      return;
    }
    material_menu__material_menu$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__material_menu.MaterialMenuComponent), material_menu__material_menu$46template.MaterialMenuComponentNgFactory);
    angular$46template.initReflector();
    focus__focus$46template.initReflector();
    interfaces__has_disabled$46template.initReflector();
    material_button__material_button$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_menu__menu_popup$46template.initReflector();
    material_menu__menu_popup_wrapper$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__menu__menu$46template.initReflector();
    utils__angular__css__css$46template.initReflector();
    utils__disposer__disposer$46template.initReflector();
  };
  dart.defineLazy(material_menu__menu_item_groups$46template, {
    /*material_menu__menu_item_groups$46template.styles$MenuItemGroupsComponent*/get styles$MenuItemGroupsComponent() {
      return [material_menu__menu_item_groups$46scss$46css$46shim.styles];
    }
  });
  const _compView_1 = Symbol('_compView_1');
  const _FocusTrapComponent_1_5 = Symbol('_FocusTrapComponent_1_5');
  const _appEl_3 = Symbol('_appEl_3');
  const _query_AutoFocusDirective_1_0_isDirty = Symbol('_query_AutoFocusDirective_1_0_isDirty');
  const _query_FocusableActivateItem_1_0_isDirty = Symbol('_query_FocusableActivateItem_1_0_isDirty');
  const _NgFor_3_9 = Symbol('_NgFor_3_9');
  const _expr_0$ = Symbol('_expr_0');
  const _expr_1$ = Symbol('_expr_1');
  const _expr_2$ = Symbol('_expr_2');
  const _el_1 = Symbol('_el_1');
  let const$2;
  const _AutoFocusDirective_1_9 = Symbol('_AutoFocusDirective_1_9');
  const _AutoFocusDirective_2_5 = Symbol('_AutoFocusDirective_2_5');
  const _appEl_2$ = Symbol('_appEl_2');
  const _appEl_19 = Symbol('_appEl_19');
  const _appEl_1$ = Symbol('_appEl_1');
  const _appEl_4$ = Symbol('_appEl_4');
  const _FocusableActivateItem_1_15 = Symbol('_FocusableActivateItem_1_15');
  material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0 = class ViewMenuItemGroupsComponent0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _ctx = this.ctx;
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _text_0 = html.Text.new("\n");
      parentRenderNode[$append](_text_0);
      this[_compView_1] = new focus__focus_trap$46template.ViewFocusTrapComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_FocusTrapComponent_1_5] = new focus__focus_trap.FocusTrapComponent.new();
      let _text_2 = html.Text.new("\n  ");
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgFor_3_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = html.Text.new("\n");
      this[_compView_1].create(this[_FocusTrapComponent_1_5], [JSArrayOfObject().of([_text_2, this[_appEl_3], _text_4])]);
      let _text_5 = html.Text.new("\n");
      parentRenderNode[$append](_text_5);
      this[_el_1][$addEventListener]("focus", this.eventHandler1(html.Event, html.FocusEvent, dart.bind(this.ctx, 'onFocus')));
      this.init(const$2 || (const$2 = dart.constList([], dart.dynamic)), null);
      _rootEl[$addEventListener]("mouseover", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseOver')));
      _rootEl[$addEventListener]("mouseout", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseOut')));
      _rootEl[$addEventListener]("mousemove", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(_ctx, 'onMouseMove')));
      _rootEl[$addEventListener]("keydown", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(_ctx, 'handleKeydown')));
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_2 = _ctx.menu.itemGroups;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_NgFor_3_9].ngForOf = currVal_2;
        this[_expr_2$] = currVal_2;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_3_9].ngDoCheck();
      }
      this[_appEl_3].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_AutoFocusDirective_1_0_isDirty])) {
          this[_FocusTrapComponent_1_5].autoFocus = src__core__linker__app_view_utils.firstOrNull(focus__focus.AutoFocusDirective, this[_appEl_3].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, dart.fn(nestedView => nestedView[_appEl_4$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, dart.fn(nestedView => src__core__linker__app_view_utils.flattenNodes(focus__focus.AutoFocusDirective, JSArrayOfListOfAutoFocusDirective().of([JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_1_9]]), nestedView[_appEl_19].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, dart.fn(nestedView => nestedView[_appEl_2$].mapNestedViews(focus__focus.AutoFocusDirective, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16, dart.fn(nestedView => JSArrayOfAutoFocusDirective().of([nestedView[_AutoFocusDirective_2_5]]), _ViewMenuItemGroupsComponent16ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent15ToListOfAutoFocusDirective()))])), _ViewMenuItemGroupsComponent6ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent5ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent4ToListOfAutoFocusDirective())), _ViewMenuItemGroupsComponent1ToListOfAutoFocusDirective())));
          this[_query_AutoFocusDirective_1_0_isDirty] = false;
        }
        if (dart.test(this[_query_FocusableActivateItem_1_0_isDirty])) {
          this.ctx.focusableItems = this[_appEl_3].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, dart.fn(nestedView => nestedView[_appEl_4$].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, dart.fn(nestedView => nestedView[_appEl_1$].mapNestedViews(focus__focus_activable_item.FocusableActivateItem, material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, dart.fn(nestedView => JSArrayOfFocusableActivateItem().of([nestedView[_FocusableActivateItem_1_15]]), _ViewMenuItemGroupsComponent6ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent5ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent4ToListOfFocusableActivateItem())), _ViewMenuItemGroupsComponent1ToListOfFocusableActivateItem()));
          this[_query_FocusableActivateItem_1_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.isMouseDriven;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateElemClass(this[_el_1], "mouse-driven", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = !dart.test(_ctx.isMouseDriven);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this.updateElemClass(this[_el_1], "keyboard-driven", currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      this[_appEl_3].destroyNestedViews();
      this[_compView_1].destroy();
      this[_FocusTrapComponent_1_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_FocusTrapComponent_1_5] = null;
    this[_appEl_3] = null;
    this[_query_AutoFocusDirective_1_0_isDirty] = true;
    this[_query_FocusableActivateItem_1_0_isDirty] = true;
    this[_NgFor_3_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_el_1] = null;
    material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("menu-item-groups"));
    let t = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
    t == null ? material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_item_groups.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__menu_item_groups$46template.styles$MenuItemGroupsComponent) : t;
    this.setupComponentType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType);
  }).prototype = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0);
  dart.setMethodSignature(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.__proto__),
    [_compView_1]: dart.fieldType(focus__focus_trap$46template.ViewFocusTrapComponent0),
    [_FocusTrapComponent_1_5]: dart.fieldType(focus__focus_trap.FocusTrapComponent),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_AutoFocusDirective_1_0_isDirty]: dart.fieldType(core.bool),
    [_query_FocusableActivateItem_1_0_isDirty]: dart.fieldType(core.bool),
    [_NgFor_3_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, {
    /*material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_item_groups$46template, {
    /*material_menu__menu_item_groups$46template._MenuItemGroupsComponentNgFactory*/get _MenuItemGroupsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMenuItemGroupsComponent()).new("menu-item-groups", dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0, AppViewAndintToAppViewOfMenuItemGroupsComponent())));
    }
  });
  dart.copyProperties(material_menu__menu_item_groups$46template, {
    get MenuItemGroupsComponentNgFactory() {
      return material_menu__menu_item_groups$46template._MenuItemGroupsComponentNgFactory;
    }
  });
  const _NgIf_2_9$ = Symbol('_NgIf_2_9');
  const _NgIf_4_9$ = Symbol('_NgIf_4_9');
  const _el_0$ = Symbol('_el_0');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1 = class _ViewMenuItemGroupsComponent1 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]("div"));
      this[_el_0$].className = "group";
      this.createAttr(this[_el_0$], "group", "");
      this.createAttr(this[_el_0$], "role", "menu");
      this.addShimC(this[_el_0$]);
      let _text_1 = html.Text.new("\n    ");
      this[_el_0$][$append](_text_1);
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$][$append](_anchor_2);
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_2_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2$], _TemplateRef_2_8);
      let _text_3 = html.Text.new("\n    ");
      this[_el_0$][$append](_text_3);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$][$append](_anchor_4);
      this[_appEl_4$] = new src__core__linker__view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4$], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_4_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      let _text_5 = html.Text.new("\n  ");
      this[_el_0$][$append](_text_5);
      this.init0(this[_el_0$]);
    }
    detectChangesInternal() {
      let local_group = src__runtime__optimizations.unsafeCast(model__menu__menu.MenuItemGroup, this.locals[$_get]("$implicit"));
      this[_NgIf_2_9$].ngIf = local_group.hasLabel;
      this[_NgIf_4_9$].ngIf = !dart.test(local_group.isCollapsible) || dart.test(local_group.isExpanded);
      this[_appEl_2$].detectChangesInNestedViews();
      this[_appEl_4$].detectChangesInNestedViews();
      let currVal_0 = local_group.hasSeparator;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateClass(this[_el_0$], "has-separator", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_group.hasLabel;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this.updateClass(this[_el_0$], "has-label", currVal_1);
        this[_expr_1$] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_2$].destroyNestedViews();
      this[_appEl_4$].destroyNestedViews();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.new = function(parentView, parentIndex) {
    this[_appEl_2$] = null;
    this[_NgIf_2_9$] = null;
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.__proto__),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_4$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(core.bool),
    [_el_0$]: dart.fieldType(html.DivElement)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent1 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent1.new(parentView, parentIndex);
  };
  const _ButtonDirective_0_5 = Symbol('_ButtonDirective_0_5');
  const _appEl_7 = Symbol('_appEl_7');
  const _NgIf_7_9 = Symbol('_NgIf_7_9');
  const _text_4 = Symbol('_text_4');
  const _handle_trigger_0_0 = Symbol('_handle_trigger_0_0');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2 = class _ViewMenuItemGroupsComponent2 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      this[_el_0$] = html.DivElement._check(doc[$createElement]("div"));
      this.createAttr(this[_el_0$], "buttonDecorator", "");
      this[_el_0$].className = "group-header";
      this.addShimC(this[_el_0$]);
      this[_ButtonDirective_0_5] = new button_decorator__button_decorator$46template.ButtonDirectiveNgCd.new(new button_decorator__button_decorator.ButtonDirective.new(this[_el_0$], null));
      let _text_1 = html.Text.new("\n      ");
      this[_el_0$][$append](_text_1);
      let _el_2 = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0$]);
      _el_2.className = "group-label";
      this.addShimC(_el_2);
      let _text_3 = html.Text.new("\n        ");
      _el_2[$append](_text_3);
      this[_text_4] = html.Text.new("");
      _el_2[$append](this[_text_4]);
      let _text_5 = html.Text.new("\n      ");
      _el_2[$append](_text_5);
      let _text_6 = html.Text.new("\n      ");
      this[_el_0$][$append](_text_6);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      this[_el_0$][$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 0, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = html.Text.new("\n    ");
      this[_el_0$][$append](_text_8);
      this[_el_0$][$addEventListener]("click", this.eventHandler1(html.Event, html.MouseEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleClick')));
      this[_el_0$][$addEventListener]("keypress", this.eventHandler1(html.Event, html.KeyboardEvent, dart.bind(this[_ButtonDirective_0_5].instance, 'handleKeyPress')));
      let subscription_0 = this[_ButtonDirective_0_5].instance.trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_0_0)));
      this.init([this[_el_0$]], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(button_decorator__button_decorator.ButtonDirective) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 8) {
        return this[_ButtonDirective_0_5].instance;
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      let local_group = src__runtime__optimizations.unsafeCast(model__menu__menu.MenuItemGroup, this.parentView.locals[$_get]("$implicit"));
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_ButtonDirective_0_5].instance.ngOnInit();
      }
      this[_NgIf_7_9].ngIf = local_group.isCollapsible;
      this[_appEl_7].detectChangesInNestedViews();
      let currVal_0 = local_group.isCollapsible;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateClass(this[_el_0$], "is-collapsible", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_ButtonDirective_0_5].detectHostChanges(this, this[_el_0$]);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_group.uiDisplayName);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_text_4][$text] = core.String._check(currVal_1);
        this[_expr_1$] = currVal_1;
      }
    }
    destroyInternal() {
      this[_appEl_7].destroyNestedViews();
    }
    [_handle_trigger_0_0]($event) {
      let local_group = src__runtime__optimizations.unsafeCast(model__menu__menu.MenuItemGroup, this.parentView.locals[$_get]("$implicit"));
      this.ctx.toggleExpansionIfCollapsible(local_group);
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.new = function(parentView, parentIndex) {
    this[_ButtonDirective_0_5] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    this[_text_4] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.__proto__),
    [_ButtonDirective_0_5]: dart.fieldType(button_decorator__button_decorator$46template.ButtonDirectiveNgCd),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(html.DivElement),
    [_text_4]: dart.fieldType(html.Text)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent2 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent2.new(parentView, parentIndex);
  };
  const _compView_0$ = Symbol('_compView_0');
  const _MaterialIconComponent_0_5$ = Symbol('_MaterialIconComponent_0_5');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3 = class _ViewMenuItemGroupsComponent3 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this[_el_0$].className = "expansion-icon";
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_0$]));
      let _text_1 = html.Text.new("\n      ");
      this[_compView_0$].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(this[_el_0$]);
    }
    detectChangesInternal() {
      let changed = false;
      let local_group = src__runtime__optimizations.unsafeCast(model__menu__menu.MenuItemGroup, this.parentView.parentView.locals[$_get]("$implicit"));
      changed = false;
      let currVal_1 = dart.test(local_group.isExpanded) ? "expand_less" : "expand_more";
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_MaterialIconComponent_0_5$].icon = currVal_1;
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      let currVal_0 = local_group.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.updateElemClass(this[_el_0$], "expanded", currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5$] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.__proto__),
    [_compView_0$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_el_0$]: dart.fieldType(html.Element)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent3 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent3.new(parentView, parentIndex);
  };
  const _NgFor_1_9 = Symbol('_NgFor_1_9');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4 = class _ViewMenuItemGroupsComponent4 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _text_0 = html.Text.new("\n      ");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgFor_1_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_1$], _TemplateRef_1_8);
      let _text_2 = html.Text.new("\n    ");
      this.init([_text_0, this[_appEl_1$], _text_2], null);
    }
    detectChangesInternal() {
      let local_group = src__runtime__optimizations.unsafeCast(model__menu__menu.MenuItemGroup, this.parentView.locals[$_get]("$implicit"));
      let currVal_0 = local_group;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_NgFor_1_9].ngForOf = currVal_0;
        this[_expr_0$] = currVal_0;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1$].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$].destroyNestedViews();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.new = function(parentView, parentIndex) {
    this[_appEl_1$] = null;
    this[_NgFor_1_9] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.__proto__),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent4 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent4.new(parentView, parentIndex);
  };
  const _NgIf_1_9$ = Symbol('_NgIf_1_9');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5 = class _ViewMenuItemGroupsComponent5 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let _text_0 = html.Text.new("\n        ");
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, null, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_1_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1$], _TemplateRef_1_8);
      let _text_2 = html.Text.new("\n      ");
      this.init([_text_0, this[_appEl_1$], _text_2], null);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = this.locals[$_get]("$implicit");
      this[_NgIf_1_9$].ngIf = _ctx.isItemVisible(model__menu__menu.MenuItem._check(local_item));
      this[_appEl_1$].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1$].destroyNestedViews();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.new = function(parentView, parentIndex) {
    this[_appEl_1$] = null;
    this[_NgIf_1_9$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).from(["$implicit", null, "index", null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.__proto__),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9$]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent5 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent5.new(parentView, parentIndex);
  };
  const _ActiveItemDirective_1_8 = Symbol('_ActiveItemDirective_1_8');
  const _FocusActivableItemDirective_1_10 = Symbol('_FocusActivableItemDirective_1_10');
  const _MaterialTooltipDirective_1_11 = Symbol('_MaterialTooltipDirective_1_11');
  const _MaterialSelectItemComponent_1_12 = Symbol('_MaterialSelectItemComponent_1_12');
  const _NgClass_1_13 = Symbol('_NgClass_1_13');
  const _PopupSourceDirective_1_14 = Symbol('_PopupSourceDirective_1_14');
  const __TooltipController_1_19 = Symbol('__TooltipController_1_19');
  const _NgIf_3_9 = Symbol('_NgIf_3_9');
  const _appEl_9 = Symbol('_appEl_9');
  const _NgIf_9_9 = Symbol('_NgIf_9_9');
  const _appEl_11 = Symbol('_appEl_11');
  const _NgIf_11_9 = Symbol('_NgIf_11_9');
  const _appEl_14 = Symbol('_appEl_14');
  const _NgIf_14_9 = Symbol('_NgIf_14_9');
  const _appEl_16 = Symbol('_appEl_16');
  const _NgIf_16_9 = Symbol('_NgIf_16_9');
  const _NgIf_19_9 = Symbol('_NgIf_19_9');
  const _expr_3$ = Symbol('_expr_3');
  const _expr_4$ = Symbol('_expr_4');
  const _expr_5$ = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _expr_14 = Symbol('_expr_14');
  const _expr_16 = Symbol('_expr_16');
  const _expr_17 = Symbol('_expr_17');
  const _expr_20 = Symbol('_expr_20');
  const _TooltipController_1_19 = Symbol('_TooltipController_1_19');
  const _handle_trigger_1_0 = Symbol('_handle_trigger_1_0');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6 = class _ViewMenuItemGroupsComponent6 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    get [_TooltipController_1_19]() {
      if (this[__TooltipController_1_19] == null) {
        this[__TooltipController_1_19] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip_controller.TooltipController, dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), dart.fn(() => material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null))), VoidToTooltipController())) : material_tooltip__module.createTooltipController(src__material_tooltip__tooltip_controller.TooltipController._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      }
      return this[__TooltipController_1_19];
    }
    build() {
      let _text_0 = html.Text.new("\n          ");
      this[_compView_1] = new material_select__material_select_item$46template.ViewMaterialSelectItemComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_1].className = src__core__linker__app_view_utils.interpolate2("", "menu-item", " ", material_select__material_select_item.MaterialSelectItemComponent.hostClass, "");
      this.createAttr(this[_el_1], "closeOnActivate", "false");
      this.createAttr(this[_el_1], "popupSource", "");
      this.createAttr(this[_el_1], "role", "menuitem");
      this.createAttr(this[_el_1], "useCheckMarks", "true");
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_appEl_1$] = new src__core__linker__view_container.ViewContainer.new(1, null, this, this[_el_1]);
      this[_ActiveItemDirective_1_8] = new model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd.new(dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(model__a11y__active_item_directive.ActiveItemDirective, dart.wrapType(model__a11y__active_item_directive.ActiveItemDirective), dart.fn(() => new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null))), VoidToActiveItemDirective())) : new model__a11y__active_item_directive.ActiveItemDirective.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__components__modal__modal.Modal._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.Modal), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null))));
      this[_AutoFocusDirective_1_9] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null))), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_ref.PopupRef), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      this[_FocusActivableItemDirective_1_10] = new focus__focus_activable_item.FocusActivableItemDirective.new(html.HtmlElement._check(this[_el_1]));
      this[_MaterialTooltipDirective_1_11] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__material_tooltip__tooltip.MaterialTooltipDirective, dart.wrapType(src__material_tooltip__tooltip.MaterialTooltipDirective), dart.fn(() => new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_1$], html.HtmlElement._check(this[_el_1]), this[_appEl_1$], this[_compView_1].ref, html.Window._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.parentView.viewData.parentIndex))), VoidToMaterialTooltipDirective())) : new src__material_tooltip__tooltip.MaterialTooltipDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_appEl_1$], html.HtmlElement._check(this[_el_1]), this[_appEl_1$], this[_compView_1].ref, html.Window._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(html.Window), this.parentView.parentView.parentView.parentView.viewData.parentIndex)));
      this[_MaterialSelectItemComponent_1_12] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_select__material_select_item.MaterialSelectItemComponent, dart.wrapType(material_select__material_select_item.MaterialSelectItemComponent), dart.fn(() => new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_1].ref, "menuitem"), VoidToMaterialSelectItemComponent())) : new material_select__material_select_item.MaterialSelectItemComponent.new(html.HtmlElement._check(this[_el_1]), mixins__material_dropdown_base.DropdownHandle._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_select__activation_handler.ActivationHandler._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_select__activation_handler.ActivationHandler), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_1].ref, "menuitem");
      this[_NgClass_1_13] = new src__common__directives__ng_class.NgClass.new(this[_el_1]);
      this[_PopupSourceDirective_1_14] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(src__laminate__popup__popup_source_directive.PopupSourceDirective, dart.wrapType(src__laminate__popup__popup_source_directive.PopupSourceDirective), dart.fn(() => new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), html.HtmlElement._check(this[_el_1]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), null), VoidToPopupSourceDirective())) : new src__laminate__popup__popup_source_directive.PopupSourceDirective.new(src__laminate__popup__dom_popup_source.DomPopupSourceFactory._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory), this.parentView.parentView.parentView.parentView.viewData.parentIndex)), html.HtmlElement._check(this[_el_1]), utils__angular__reference__reference.ReferenceDirective._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__angular__reference__reference.ReferenceDirective), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), focus__focus_interface.Focusable._check(this.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(focus__focus_interface.Focusable), this.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), null);
      this[_FocusableActivateItem_1_15] = this[_FocusActivableItemDirective_1_10];
      let _text_2 = html.Text.new("\n            ");
      let _anchor_3 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 1, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_3_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_3], _TemplateRef_3_8);
      let _text_4 = html.Text.new("\n            ");
      let doc = html.document;
      let _el_5 = doc[$createElement]("span");
      _el_5.className = "menu-item-label-section";
      this.addShimE(_el_5);
      let _text_6 = html.Text.new("\n              ");
      _el_5[$append](_text_6);
      let _anchor_7 = src__core__linker__app_view.createViewContainerAnchor();
      _el_5[$append](_anchor_7);
      this[_appEl_7] = new src__core__linker__view_container.ViewContainer.new(7, 5, this, _anchor_7);
      let _TemplateRef_7_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_7], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_7_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_7], _TemplateRef_7_8);
      let _text_8 = html.Text.new("\n              ");
      _el_5[$append](_text_8);
      let _anchor_9 = src__core__linker__app_view.createViewContainerAnchor();
      _el_5[$append](_anchor_9);
      this[_appEl_9] = new src__core__linker__view_container.ViewContainer.new(9, 5, this, _anchor_9);
      let _TemplateRef_9_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_9], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_9_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_9], _TemplateRef_9_8);
      let _text_10 = html.Text.new("\n              ");
      _el_5[$append](_text_10);
      let _anchor_11 = src__core__linker__app_view.createViewContainerAnchor();
      _el_5[$append](_anchor_11);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, 5, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let _text_12 = html.Text.new("\n            ");
      _el_5[$append](_text_12);
      let _text_13 = html.Text.new("\n            ");
      let _anchor_14 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_14] = new src__core__linker__view_container.ViewContainer.new(14, 1, this, _anchor_14);
      let _TemplateRef_14_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_14], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_14_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_14], _TemplateRef_14_8);
      let _text_15 = html.Text.new("\n            ");
      let _anchor_16 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_16] = new src__core__linker__view_container.ViewContainer.new(16, 1, this, _anchor_16);
      let _TemplateRef_16_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_16], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_16_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_16], _TemplateRef_16_8);
      let _text_17 = html.Text.new("\n          ");
      this[_compView_1].create(this[_MaterialSelectItemComponent_1_12], [JSArrayOfObject().of([_text_2, this[_appEl_3], _text_4, _el_5, _text_13, this[_appEl_14], _text_15, this[_appEl_16], _text_17])]);
      let _text_18 = html.Text.new("\n          ");
      let _anchor_19 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_19] = new src__core__linker__view_container.ViewContainer.new(19, null, this, _anchor_19);
      let _TemplateRef_19_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_19], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_19_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_19], _TemplateRef_19_8);
      let _text_20 = html.Text.new("\n        ");
      this[_el_1][$addEventListener]("mouseenter", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseEnter')));
      this[_el_1][$addEventListener]("mouseleave", this.eventHandler0(html.Event, dart.bind(this[_ActiveItemDirective_1_8].instance, 'onMouseLeave')));
      let subscription_0 = this[_MaterialSelectItemComponent_1_12].trigger.listen(this.eventHandler1(html.UIEvent, html.UIEvent, dart.bind(this, _handle_trigger_1_0)));
      this.init([_text_0, this[_appEl_1$], _text_18, this[_appEl_19], _text_20], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(model__selection__selection_container.SelectionItem) || token === dart.wrapType(interfaces__has_disabled.HasDisabled) || token === dart.wrapType(model__ui__has_renderer.HasRenderer)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        return this[_MaterialSelectItemComponent_1_12];
      }
      if (token === dart.wrapType(focus__focus_activable_item.FocusableActivateItem) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        return this[_FocusableActivateItem_1_15];
      }
      if (token === dart.wrapType(src__material_tooltip__tooltip_controller.TooltipController) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 17) {
        return this[_TooltipController_1_19];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_i = src__runtime__optimizations.unsafeCast(core.int, this.parentView.parentView.parentView.locals[$_get]("index"));
      let local_j = src__runtime__optimizations.unsafeCast(core.int, this.parentView.locals[$_get]("index"));
      let local_item = this.parentView.locals[$_get]("$implicit");
      let local_group = src__runtime__optimizations.unsafeCast(model__menu__menu.MenuItemGroup, this.parentView.parentView.parentView.locals[$_get]("$implicit"));
      let currVal_6 = _ctx.isItemActive(model__menu__menu.MenuItem._check(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_6], currVal_6))) {
        this[_ActiveItemDirective_1_8].instance.itemActive = currVal_6;
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = _ctx.hasAutoFocus(_ctx.activeModel == null ? null : _ctx.activeModel.id(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_7], currVal_7))) {
        this[_AutoFocusDirective_1_9].autoFocus = currVal_7;
        this[_expr_7] = currVal_7;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_1_9].ngOnInit();
      }
      let currVal_8 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_8], currVal_8))) {
        this[_FocusActivableItemDirective_1_10].key = currVal_8;
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = _ctx.tooltipPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_9], currVal_9))) {
        this[_MaterialTooltipDirective_1_11].positions = currVal_9;
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = dart.dload(local_item, 'tooltip');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_10], currVal_10))) {
        this[_MaterialTooltipDirective_1_11].text = core.String._check(currVal_10);
        this[_expr_10] = core.String._check(currVal_10);
      }
      let currVal_11 = dart.dload(local_item, 'showTooltip');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_11], currVal_11))) {
        this[_MaterialTooltipDirective_1_11].canShow = core.bool._check(currVal_11);
        this[_expr_11] = core.bool._check(currVal_11);
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialTooltipDirective_1_11].ngOnInit();
      }
      if (firstCheck) {
        this[_MaterialSelectItemComponent_1_12].role = "menuitem";
        this[_MaterialSelectItemComponent_1_12].useCheckMarks = "true";
        this[_MaterialSelectItemComponent_1_12].closeOnActivate = "false";
      }
      let currVal_12 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_12], currVal_12))) {
        this[_MaterialSelectItemComponent_1_12].disabled = currVal_12;
        this[_expr_12] = currVal_12;
      }
      let currVal_14 = _ctx.getItemValue(model__menu__menu.MenuItem._check(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_14], currVal_14))) {
        this[_MaterialSelectItemComponent_1_12].value = currVal_14;
        this[_expr_14] = currVal_14;
      }
      let currVal_16 = _ctx.shouldSelectItemOnClick(model__menu__menu.MenuItem._check(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_16], currVal_16))) {
        this[_MaterialSelectItemComponent_1_12].selectOnActivate = currVal_16;
        this[_expr_16] = currVal_16;
      }
      let currVal_17 = _ctx.getSelectionModel(local_group);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_17], currVal_17))) {
        this[_MaterialSelectItemComponent_1_12].selection = currVal_17;
        this[_expr_17] = currVal_17;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MaterialSelectItemComponent_1_12].ngOnInit();
      }
      if (firstCheck) {
        this[_NgClass_1_13].initialClasses = "menu-item";
      }
      let currVal_20 = dart.dload(local_item, 'cssClasses');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_20], currVal_20))) {
        this[_NgClass_1_13].rawClass = currVal_20;
        this[_expr_20] = currVal_20;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgClass_1_13].ngDoCheck();
      }
      this[_NgIf_3_9].ngIf = core.bool._check(dart.dload(local_item, 'hasIcon'));
      this[_NgIf_7_9].ngIf = _ctx.hasHighlight;
      this[_NgIf_9_9].ngIf = !dart.test(_ctx.hasHighlight);
      this[_NgIf_11_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSecondaryLabel'));
      this[_NgIf_14_9].ngIf = core.bool._check(dart.dload(dart.dload(local_item, 'itemSuffixes'), 'isNotEmpty'));
      this[_NgIf_16_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSubMenu'));
      this[_NgIf_19_9].ngIf = core.bool._check(dart.dload(local_item, 'hasSubMenu'));
      this[_appEl_1$].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
      this[_appEl_7].detectChangesInNestedViews();
      this[_appEl_9].detectChangesInNestedViews();
      this[_appEl_11].detectChangesInNestedViews();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      this[_appEl_19].detectChangesInNestedViews();
      let currVal_0 = local_i;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this.setAttr(this[_el_1], "data-group-index", currVal_0 == null ? null : dart.toString(currVal_0));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = local_j;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this.setAttr(this[_el_1], "data-item-index", currVal_1 == null ? null : dart.toString(currVal_1));
        this[_expr_1$] = currVal_1;
      }
      let currVal_2 = _ctx.activeModel == null ? null : _ctx.activeModel.id(local_item);
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this.setAttr(this[_el_1], "id", currVal_2);
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.isSubMenuVisible(model__menu__menu.MenuItem._check(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this.updateElemClass(this[_el_1], "is-menu-parent", currVal_3);
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this.setAttr(this[_el_1], "aria-disabled", currVal_4[$toString]());
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = dart.dload(local_item, 'hasSubMenu');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        this.setAttr(this[_el_1], "aria-haspopup", currVal_5 == null ? null : dart.toString(currVal_5));
        this[_expr_5$] = currVal_5;
      }
      this[_ActiveItemDirective_1_8].detectHostChanges(this[_compView_1], this[_el_1]);
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_ActiveItemDirective_1_8].instance.ngAfterViewInit();
          this[_MaterialTooltipDirective_1_11].ngAfterViewInit();
          this[_PopupSourceDirective_1_14].ngAfterViewInit();
        }
      }
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, this.parentView.parentView.parentView.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
      src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, this.parentView.parentView.parentView.parentView)[_query_FocusableActivateItem_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_appEl_1$].destroyNestedViews();
      this[_appEl_3].destroyNestedViews();
      this[_appEl_7].destroyNestedViews();
      this[_appEl_9].destroyNestedViews();
      this[_appEl_11].destroyNestedViews();
      this[_appEl_14].destroyNestedViews();
      this[_appEl_16].destroyNestedViews();
      this[_appEl_19].destroyNestedViews();
      this[_compView_1].destroy();
      this[_ActiveItemDirective_1_8].instance.ngOnDestroy();
      this[_AutoFocusDirective_1_9].ngOnDestroy();
      this[_MaterialTooltipDirective_1_11].ngOnDestroy();
      this[_MaterialSelectItemComponent_1_12].ngOnDestroy();
      this[_NgClass_1_13].ngOnDestroy();
      this[_PopupSourceDirective_1_14].ngOnDestroy();
    }
    [_handle_trigger_1_0]($event) {
      let local_item = this.parentView.locals[$_get]("$implicit");
      let local_group = src__runtime__optimizations.unsafeCast(model__menu__menu.MenuItemGroup, this.parentView.parentView.parentView.locals[$_get]("$implicit"));
      this.ctx.handleSelectItemTrigger(model__menu__menu.MenuItem._check(local_item), local_group, html.UIEvent._check($event));
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.new = function(parentView, parentIndex) {
    this[_compView_1] = null;
    this[_appEl_1$] = null;
    this[_ActiveItemDirective_1_8] = null;
    this[_AutoFocusDirective_1_9] = null;
    this[_FocusActivableItemDirective_1_10] = null;
    this[_MaterialTooltipDirective_1_11] = null;
    this[_MaterialSelectItemComponent_1_12] = null;
    this[_NgClass_1_13] = null;
    this[_PopupSourceDirective_1_14] = null;
    this[_FocusableActivateItem_1_15] = null;
    this[__TooltipController_1_19] = null;
    this[_appEl_3] = null;
    this[_NgIf_3_9] = null;
    this[_appEl_7] = null;
    this[_NgIf_7_9] = null;
    this[_appEl_9] = null;
    this[_NgIf_9_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_appEl_14] = null;
    this[_NgIf_14_9] = null;
    this[_appEl_16] = null;
    this[_NgIf_16_9] = null;
    this[_appEl_19] = null;
    this[_NgIf_19_9] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    this[_expr_14] = null;
    this[_expr_16] = null;
    this[_expr_17] = null;
    this[_expr_20] = null;
    this[_el_1] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_trigger_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_TooltipController_1_19]: dart.dynamic
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.__proto__),
    [_compView_1]: dart.fieldType(material_select__material_select_item$46template.ViewMaterialSelectItemComponent0),
    [_appEl_1$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_ActiveItemDirective_1_8]: dart.fieldType(model__a11y__active_item_directive$46template.ActiveItemDirectiveNgCd),
    [_AutoFocusDirective_1_9]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_FocusActivableItemDirective_1_10]: dart.fieldType(focus__focus_activable_item.FocusActivableItemDirective),
    [_MaterialTooltipDirective_1_11]: dart.fieldType(src__material_tooltip__tooltip.MaterialTooltipDirective),
    [_MaterialSelectItemComponent_1_12]: dart.fieldType(material_select__material_select_item.MaterialSelectItemComponent),
    [_NgClass_1_13]: dart.fieldType(src__common__directives__ng_class.NgClass),
    [_PopupSourceDirective_1_14]: dart.fieldType(src__laminate__popup__popup_source_directive.PopupSourceDirective),
    [_FocusableActivateItem_1_15]: dart.fieldType(focus__focus_activable_item.FocusActivableItemDirective),
    [__TooltipController_1_19]: dart.fieldType(dart.dynamic),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_3_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_7]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_7_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_9]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_9_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_14]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_14_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_16]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_16_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_19]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_19_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core.bool),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_7]: dart.fieldType(core.bool),
    [_expr_8]: dart.fieldType(core.String),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(core.String),
    [_expr_11]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_expr_14]: dart.fieldType(dart.dynamic),
    [_expr_16]: dart.fieldType(core.bool),
    [_expr_17]: dart.fieldType(dart.dynamic),
    [_expr_20]: dart.fieldType(dart.dynamic),
    [_el_1]: dart.fieldType(html.Element)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent6 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6.new(parentView, parentIndex);
  };
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7 = class _ViewMenuItemGroupsComponent7 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      _el_0.className = "material-list-item-primary";
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_0);
      let _text_1 = html.Text.new("\n            ");
      this[_compView_0$].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = dart.dload(local_item, 'icon');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_MaterialIconComponent_0_5$].icon = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5$] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.__proto__),
    [_compView_0$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent7 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent7.new(parentView, parentIndex);
  };
  const _compView_2 = Symbol('_compView_2');
  const _HighlightedTextComponent_2_5 = Symbol('_HighlightedTextComponent_2_5');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgIf_5_9 = Symbol('_NgIf_5_9');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8 = class _ViewMenuItemGroupsComponent8 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      _el_0.className = "menu-item-label";
      this.addShimE(_el_0);
      let _text_1 = html.Text.new("\n                ");
      _el_0[$append](_text_1);
      this[_compView_2] = new highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_0[$append](_el_2);
      this.addShimC(_el_2);
      this[_HighlightedTextComponent_2_5] = new highlighted_text__highlighted_text.HighlightedTextComponent.new();
      let _text_3 = html.Text.new("\n                ");
      this[_compView_2].create(this[_HighlightedTextComponent_2_5], []);
      let _text_4 = html.Text.new("\n                ");
      _el_0[$append](_text_4);
      let _anchor_5 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_5_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_5], _TemplateRef_5_8);
      let _text_6 = html.Text.new("\n              ");
      _el_0[$append](_text_6);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = _ctx.highlighted(core.String._check(dart.dload(local_item, 'uiDisplayName')));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_HighlightedTextComponent_2_5].segments = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      this[_NgIf_5_9].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_compView_2].destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.new = function(parentView, parentIndex) {
    this[_compView_2] = null;
    this[_HighlightedTextComponent_2_5] = null;
    this[_appEl_5] = null;
    this[_NgIf_5_9] = null;
    this[_expr_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.__proto__),
    [_compView_2]: dart.fieldType(highlighted_text__highlighted_text$46template.ViewHighlightedTextComponent0),
    [_HighlightedTextComponent_2_5]: dart.fieldType(highlighted_text__highlighted_text.HighlightedTextComponent),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_5_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent8 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent8.new(parentView, parentIndex);
  };
  const _text_2 = Symbol('_text_2');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9 = class _ViewMenuItemGroupsComponent9 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      _el_0.className = "label-annotation";
      this.addShimE(_el_0);
      let _text_1 = html.Text.new("\n                ");
      _el_0[$append](_text_1);
      this[_text_2] = html.Text.new("");
      _el_0[$append](this[_text_2]);
      let _text_3 = html.Text.new("\n              ");
      _el_0[$append](_text_3);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_item, 'labelAnnotation'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.new = function(parentView, parentIndex) {
    this[_expr_0$] = null;
    this[_text_2] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.__proto__),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_text_2]: dart.fieldType(html.Text)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent9 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent9.new(parentView, parentIndex);
  };
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10 = class _ViewMenuItemGroupsComponent10 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      _el_0.className = "menu-item-label";
      this.addShimE(_el_0);
      let _text_1 = html.Text.new("\n                ");
      _el_0[$append](_text_1);
      this[_text_2] = html.Text.new("");
      _el_0[$append](this[_text_2]);
      let _text_3 = html.Text.new("\n                ");
      _el_0[$append](_text_3);
      let _anchor_4 = src__core__linker__app_view.createViewContainerAnchor();
      _el_0[$append](_anchor_4);
      this[_appEl_4$] = new src__core__linker__view_container.ViewContainer.new(4, 0, this, _anchor_4);
      let _TemplateRef_4_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_4$], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_NgIf_4_9$] = new src__common__directives__ng_if.NgIf.new(this[_appEl_4$], _TemplateRef_4_8);
      let _text_5 = html.Text.new("\n              ");
      _el_0[$append](_text_5);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      this[_NgIf_4_9$].ngIf = dart.dload(local_item, 'labelAnnotation') != null && dart.dtest(dart.dload(dart.dload(local_item, 'labelAnnotation'), 'isNotEmpty'));
      this[_appEl_4$].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_item, 'uiDisplayName'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
    destroyInternal() {
      this[_appEl_4$].destroyNestedViews();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.new = function(parentView, parentIndex) {
    this[_appEl_4$] = null;
    this[_NgIf_4_9$] = null;
    this[_expr_0$] = null;
    this[_text_2] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.__proto__),
    [_appEl_4$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_4_9$]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_text_2]: dart.fieldType(html.Text)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent10 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent10.new(parentView, parentIndex);
  };
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11 = class _ViewMenuItemGroupsComponent11 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("sup");
      _el_0.className = "label-annotation";
      this.addShimE(_el_0);
      let _text_1 = html.Text.new("\n                ");
      _el_0[$append](_text_1);
      this[_text_2] = html.Text.new("");
      _el_0[$append](this[_text_2]);
      let _text_3 = html.Text.new("\n                ");
      _el_0[$append](_text_3);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_item, 'labelAnnotation'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.new = function(parentView, parentIndex) {
    this[_expr_0$] = null;
    this[_text_2] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.__proto__),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_text_2]: dart.fieldType(html.Text)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent11 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent11.new(parentView, parentIndex);
  };
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12 = class _ViewMenuItemGroupsComponent12 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      let doc = html.document;
      let _el_0 = doc[$createElement]("span");
      _el_0.className = "menu-item-secondary-label";
      this.addShimE(_el_0);
      let _text_1 = html.Text.new("\n                ");
      _el_0[$append](_text_1);
      this[_text_2] = html.Text.new("");
      _el_0[$append](this[_text_2]);
      let _text_3 = html.Text.new("\n              ");
      _el_0[$append](_text_3);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dload(local_item, 'secondaryLabel'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0$] = currVal_0;
      }
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.new = function(parentView, parentIndex) {
    this[_expr_0$] = null;
    this[_text_2] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.__proto__),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_text_2]: dart.fieldType(html.Text)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent12 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent12.new(parentView, parentIndex);
  };
  const _MenuItemAffixListComponent_0_5 = Symbol('_MenuItemAffixListComponent_0_5');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13 = class _ViewMenuItemGroupsComponent13 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      _el_0.className = "suffix-list";
      this.addShimC(_el_0);
      this[_MenuItemAffixListComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_menu__menu_item_affix_list.MenuItemAffixListComponent, dart.wrapType(material_menu__menu_item_affix_list.MenuItemAffixListComponent), dart.fn(() => new material_menu__menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0$].ref, material_menu__menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null))), VoidToMenuItemAffixListComponent())) : new material_menu__menu_item_affix_list.MenuItemAffixListComponent.new(this[_compView_0$].ref, material_menu__menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      let _text_1 = html.Text.new("\n            ");
      this[_compView_0$].create(this[_MenuItemAffixListComponent_0_5], []);
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(interfaces__has_disabled.HasDisabled) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MenuItemAffixListComponent_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let changed = false;
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = !dart.dtest(dart.dload(local_item, 'enabled'));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_MenuItemAffixListComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = dart.dload(local_item, 'itemSuffixes');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this[_MenuItemAffixListComponent_0_5].items = ObservableListOfMenuItemAffix()._check(currVal_1);
        changed = true;
        this[_expr_1$] = currVal_1;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
      this[_MenuItemAffixListComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MenuItemAffixListComponent_0_5] = null;
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.__proto__),
    [_compView_0$]: dart.fieldType(material_menu__menu_item_affix_list$46template.ViewMenuItemAffixListComponent0),
    [_MenuItemAffixListComponent_0_5]: dart.fieldType(material_menu__menu_item_affix_list.MenuItemAffixListComponent),
    [_expr_0$]: dart.fieldType(core.bool),
    [_expr_1$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent13 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent13.new(parentView, parentIndex);
  };
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14 = class _ViewMenuItemGroupsComponent14 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      _el_0.className = "material-list-item-secondary submenu-icon";
      this.createAttr(_el_0, "icon", "arrow_drop_down");
      this.addShimC(_el_0);
      this[_MaterialIconComponent_0_5$] = new material_icon__material_icon.MaterialIconComponent.new(_el_0);
      let _text_1 = html.Text.new("\n            ");
      this[_compView_0$].create(this[_MaterialIconComponent_0_5$], []);
      this.init0(_el_0);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_0_5$].icon = "arrow_drop_down";
        changed = true;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialIconComponent_0_5$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14.__proto__),
    [_compView_0$]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_0_5$]: dart.fieldType(material_icon__material_icon.MaterialIconComponent)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent14 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent14.new(parentView, parentIndex);
  };
  const _appEl_0$ = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8 = Symbol('_MaterialPopupComponent_0_8');
  const __PopupRef_0_10 = Symbol('__PopupRef_0_10');
  const __PopupHierarchy_0_12 = Symbol('__PopupHierarchy_0_12');
  const _DeferredContentDirective_2_9 = Symbol('_DeferredContentDirective_2_9');
  const _PopupRef_0_10 = Symbol('_PopupRef_0_10');
  const _PopupHierarchy_0_12 = Symbol('_PopupHierarchy_0_12');
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  const _handle_visibleChange_0_0 = Symbol('_handle_visibleChange_0_0');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15 = class _ViewMenuItemGroupsComponent15 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    get [_PopupRef_0_10]() {
      if (this[__PopupRef_0_10] == null) {
        this[__PopupRef_0_10] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupRef_0_10];
    }
    get [_PopupHierarchy_0_12]() {
      if (this[__PopupHierarchy_0_12] == null) {
        this[__PopupHierarchy_0_12] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8]);
      }
      return this[__PopupHierarchy_0_12];
    }
    build() {
      this[_compView_0$] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0$] = this[_compView_0$].rootEl;
      this.createAttr(this[_el_0$], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_0$]));
      this[_appEl_0$] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$]);
      this[_MaterialPopupComponent_0_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const$3 || (const$3 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), core.bool._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const$4 || (const$4 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0$].ref, this[_appEl_0$], new src__core__linker__element_ref.ElementRef.new(this[_el_0$])), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const$5 || (const$5 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), core.bool._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(const$6 || (const$6 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), this[_compView_0$].ref, this[_appEl_0$], new src__core__linker__element_ref.ElementRef.new(this[_el_0$]));
      let _text_1 = html.Text.new("\n            ");
      let _anchor_2 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_2$] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2$], dart.fn(material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16, AppViewAndintToAppViewOfMenuItemGroupsComponent()));
      this[_DeferredContentDirective_2_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_2$], _TemplateRef_2_8, this[_MaterialPopupComponent_0_8]);
      let _text_3 = html.Text.new("\n          ");
      this[_compView_0$].create(this[_MaterialPopupComponent_0_8], [const$7 || (const$7 = dart.constList([], dart.dynamic)), JSArrayOfObject().of([_text_1, this[_appEl_2$], _text_3]), const$8 || (const$8 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialPopupComponent_0_8].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_0_0)));
      this.init([this[_appEl_0$]], [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_MaterialPopupComponent_0_8];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupRef_0_10];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_PopupHierarchy_0_12];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let local_subMenuSource = src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent6, this.parentView)[_PopupSourceDirective_1_14];
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8].autoDismiss = false;
        this[_MaterialPopupComponent_0_8].enforceSpaceConstraints = true;
      }
      let currVal_3 = _ctx.preferredSubMenuPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MaterialPopupComponent_0_8].preferredPositions = currVal_3;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = local_subMenuSource;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this[_MaterialPopupComponent_0_8].source = currVal_4;
        this[_expr_4$] = currVal_4;
      }
      let currVal_5 = _ctx.isSubMenuVisible(model__menu__menu.MenuItem._check(local_item));
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_5$], currVal_5))) {
        this[_MaterialPopupComponent_0_8].visible = currVal_5;
        this[_expr_5$] = currVal_5;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_2_9].preserveDimensions = true;
      }
      this[_appEl_0$].detectChangesInNestedViews();
      this[_appEl_2$].detectChangesInNestedViews();
      let currVal_0 = _ctx.popupClass;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_compView_0$].updateChildClass(this[_el_0$], currVal_0);
        this[_expr_0$] = currVal_0;
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$].destroyNestedViews();
      this[_appEl_2$].destroyNestedViews();
      this[_compView_0$].destroy();
      this[_DeferredContentDirective_2_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8].ngOnDestroy();
    }
    [_handle_visibleChange_0_0]($event) {
      let local_item = this.parentView.parentView.locals[$_get]("$implicit");
      this.ctx.onSubMenuVisibilityChanged(model__menu__menu.MenuItem._check(local_item), core.bool._check($event));
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_appEl_0$] = null;
    this[_MaterialPopupComponent_0_8] = null;
    this[__PopupRef_0_10] = null;
    this[__PopupHierarchy_0_12] = null;
    this[_appEl_2$] = null;
    this[_DeferredContentDirective_2_9] = null;
    this[_expr_0$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    this[_expr_5$] = null;
    this[_el_0$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_visibleChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getGetters(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_PopupRef_0_10]: dart.dynamic,
    [_PopupHierarchy_0_12]: dart.dynamic
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15.__proto__),
    [_compView_0$]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_0_10]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12]: dart.fieldType(dart.dynamic),
    [_appEl_2$]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_DeferredContentDirective_2_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_0$]: dart.fieldType(core.String),
    [_expr_3$]: dart.fieldType(dart.dynamic),
    [_expr_4$]: dart.fieldType(dart.dynamic),
    [_expr_5$]: dart.fieldType(core.bool),
    [_el_0$]: dart.fieldType(html.Element)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent15 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15.new(parentView, parentIndex);
  };
  const _MaterialListComponent_0_5 = Symbol('_MaterialListComponent_0_5');
  const _MenuItemGroupsComponent_2_6 = Symbol('_MenuItemGroupsComponent_2_6');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16 = class _ViewMenuItemGroupsComponent16 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      _el_0.className = "item-group-list";
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5] = new material_list__material_list.MaterialListComponent.new();
      let _text_1 = html.Text.new("\n              ");
      this[_compView_2] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      this.createAttr(_el_2, "autoFocus", "");
      this.addShimC(_el_2);
      this[_AutoFocusDirective_2_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(_el_2, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_PopupRef_0_10])), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(_el_2, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_PopupRef_0_10]));
      this[_MenuItemGroupsComponent_2_6] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_menu__menu_item_groups.MenuItemGroupsComponent, dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent), dart.fn(() => material_menu__menu_item_groups.MenuItemGroupsComponent.new(material_menu__menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_2].ref, src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_MaterialPopupComponent_0_8], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null))), VoidToMenuItemGroupsComponent())) : material_menu__menu_item_groups.MenuItemGroupsComponent.new(material_menu__menu_root.MenuRoot._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex)), this[_compView_2].ref, src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent15, this.parentView)[_MaterialPopupComponent_0_8], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.parentView.parentView.parentView.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.parentView.parentView.parentView.parentView.parentView.viewData.parentIndex, null)));
      let _text_3 = html.Text.new("\n              ");
      this[_compView_2].create(this[_MenuItemGroupsComponent_2_6], []);
      let _text_4 = html.Text.new("\n            ");
      this[_compView_0$].create(this[_MaterialListComponent_0_5], [JSArrayOfNode().of([_text_1, _el_2, _text_4])]);
      let subscription_0 = this[_MenuItemGroupsComponent_2_6].selected.listen(this.eventHandler1(model__menu__menu.MenuItem, model__menu__menu.MenuItem, dart.bind(this.ctx, 'onSubMenuItemSelected')));
      this.init([_el_0], [subscription_0]);
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = this.parentView.parentView.parentView.locals[$_get]("$implicit");
      changed = false;
      let currVal_0 = dart.dload(dart.dload(local_item, 'subMenu'), 'width');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        this[_MaterialListComponent_0_5].width = currVal_0;
        changed = true;
        this[_expr_0$] = currVal_0;
      }
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_2_5].autoFocus = true;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_2_5].ngOnInit();
      }
      changed = false;
      let currVal_2 = dart.dload(local_item, 'subMenu');
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$], currVal_2))) {
        this[_MenuItemGroupsComponent_2_6].menu = model__menu__menu.MenuModel._check(currVal_2);
        changed = true;
        this[_expr_2$] = currVal_2;
      }
      let currVal_3 = _ctx.popupClass;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$], currVal_3))) {
        this[_MenuItemGroupsComponent_2_6].popupClass = currVal_3;
        changed = true;
        this[_expr_3$] = currVal_3;
      }
      let currVal_4 = _ctx.isKeyboardOpenedSubmenu;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$], currVal_4))) {
        this[_MenuItemGroupsComponent_2_6].activateFirstItemOnInit = currVal_4;
        changed = true;
        this[_expr_4$] = currVal_4;
      }
      if (changed) {
        this[_compView_2].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_2_6].ngOnInit();
      }
      this[_compView_0$].detectHostChanges(firstCheck);
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0, this.parentView.parentView.parentView.parentView.parentView.parentView)[_query_AutoFocusDirective_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$].destroy();
      this[_compView_2].destroy();
      this[_AutoFocusDirective_2_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_2_6].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MaterialListComponent_0_5] = null;
    this[_compView_2] = null;
    this[_AutoFocusDirective_2_5] = null;
    this[_MenuItemGroupsComponent_2_6] = null;
    this[_expr_0$] = null;
    this[_expr_2$] = null;
    this[_expr_3$] = null;
    this[_expr_4$] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0._renderType;
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16.__proto__),
    [_compView_0$]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_compView_2]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_2_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_MenuItemGroupsComponent_2_6]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_2$]: dart.fieldType(dart.dynamic),
    [_expr_3$]: dart.fieldType(core.String),
    [_expr_4$]: dart.fieldType(dart.dynamic)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponent16 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponent16.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_item_groups$46template, {
    /*material_menu__menu_item_groups$46template.styles$MenuItemGroupsComponentHost*/get styles$MenuItemGroupsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MenuItemGroupsComponent_0_5 = Symbol('_MenuItemGroupsComponent_0_5');
  material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0 = class _ViewMenuItemGroupsComponentHost0 extends src__core__linker__app_view.AppView$(material_menu__menu_item_groups.MenuItemGroupsComponent) {
    build() {
      this[_compView_0$] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_MenuItemGroupsComponent_0_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_menu__menu_item_groups.MenuItemGroupsComponent, dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent), dart.fn(() => material_menu__menu_item_groups.MenuItemGroupsComponent.new(material_menu__menu_root.MenuRoot._check(this.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.viewData.parentIndex)), this[_compView_0$].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null))), VoidToMenuItemGroupsComponent())) : material_menu__menu_item_groups.MenuItemGroupsComponent.new(material_menu__menu_root.MenuRoot._check(this.injectorGet(dart.wrapType(material_menu__menu_root.MenuRoot), this.viewData.parentIndex)), this[_compView_0$].ref, mixins__material_dropdown_base.DropdownHandle._check(this.injectorGet(dart.wrapType(mixins__material_dropdown_base.DropdownHandle), this.viewData.parentIndex, null)), utils__id_generator__id_generator.IdGenerator._check(this.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.viewData.parentIndex, null)));
      this[_compView_0$].create(this[_MenuItemGroupsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMenuItemGroupsComponent()).new(0, this, this.rootEl, this[_MenuItemGroupsComponent_0_5]);
    }
    detectChangesInternal() {
      let changed = false;
      let firstCheck = this.cdState === 0;
      if (changed) {
        this[_compView_0$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_0_5].ngOnInit();
      }
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroy();
      this[_MenuItemGroupsComponent_0_5].ngOnDestroy();
    }
  };
  (material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_MenuItemGroupsComponent_0_5] = null;
    material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.prototype;
  dart.addTypeTests(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0);
  dart.setMethodSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_item_groups.MenuItemGroupsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_MenuItemGroupsComponent_0_5]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent)
  }));
  material_menu__menu_item_groups$46template.viewFactory_MenuItemGroupsComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__menu_item_groups$46template._ViewMenuItemGroupsComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_item_groups$46template, {
    /*material_menu__menu_item_groups$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_item_groups$46template.initReflector = function() {
    if (dart.test(material_menu__menu_item_groups$46template._visited)) {
      return;
    }
    material_menu__menu_item_groups$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent), material_menu__menu_item_groups$46template.MenuItemGroupsComponentNgFactory);
    angular$46template.initReflector();
    button_decorator__button_decorator$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    focus__focus_activable_item$46template.initReflector();
    focus__focus_trap$46template.initReflector();
    highlighted_text__highlighted_text$46template.initReflector();
    laminate__enums__alignment$46template.initReflector();
    material_icon__material_icon$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_menu__material_menu$46template.initReflector();
    material_menu__menu_item_affix_list$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    material_select__material_select_item$46template.initReflector();
    material_tooltip__material_tooltip$46template.initReflector();
    mixins__material_dropdown_base$46template.initReflector();
    model__a11y__active_item$46template.initReflector();
    model__a11y__active_item_directive$46template.initReflector();
    model__action__delayed_action$46template.initReflector();
    model__menu__menu$46template.initReflector();
    model__menu__selectable_menu$46template.initReflector();
    model__selection__select$46template.initReflector();
    model__selection__selection_model$46template.initReflector();
    model__ui__highlighted_text_model$46template.initReflector();
    utils__angular__properties__properties$46template.initReflector();
    utils__id_generator__id_generator$46template.initReflector();
  };
  dart.defineLazy(material_menu__menu_popup$46template, {
    /*material_menu__menu_popup$46template.styles$MenuPopupComponent*/get styles$MenuPopupComponent() {
      return [material_menu__menu_popup$46scss$46css$46shim.styles];
    }
  });
  const _compView_0$0 = Symbol('_compView_0');
  const _appEl_0$0 = Symbol('_appEl_0');
  const _MaterialPopupComponent_0_8$ = Symbol('_MaterialPopupComponent_0_8');
  const __PopupRef_0_10$ = Symbol('__PopupRef_0_10');
  const __PopupHierarchy_0_12$ = Symbol('__PopupHierarchy_0_12');
  const _appEl_1$0 = Symbol('_appEl_1');
  const _query_MenuItemGroupsComponent_1_0_isDirty = Symbol('_query_MenuItemGroupsComponent_1_0_isDirty');
  const _DeferredContentDirective_1_9 = Symbol('_DeferredContentDirective_1_9');
  const _expr_0$0 = Symbol('_expr_0');
  const _expr_2$0 = Symbol('_expr_2');
  const _expr_3$0 = Symbol('_expr_3');
  const _expr_4$0 = Symbol('_expr_4');
  const _el_0$0 = Symbol('_el_0');
  const _PopupRef_0_10$ = Symbol('_PopupRef_0_10');
  const _PopupHierarchy_0_12$ = Symbol('_PopupHierarchy_0_12');
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  const _handle_visibleChange_0_0$ = Symbol('_handle_visibleChange_0_0');
  let const$15;
  const _MenuItemGroupsComponent_1_8 = Symbol('_MenuItemGroupsComponent_1_8');
  material_menu__menu_popup$46template.ViewMenuPopupComponent0 = class ViewMenuPopupComponent0 extends src__core__linker__app_view.AppView$(material_menu__menu_popup.MenuPopupComponent) {
    get [_PopupRef_0_10$]() {
      if (this[__PopupRef_0_10$] == null) {
        this[__PopupRef_0_10$] = material_popup__material_popup.getResolvedPopupRef(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupRef_0_10$];
    }
    get [_PopupHierarchy_0_12$]() {
      if (this[__PopupHierarchy_0_12$] == null) {
        this[__PopupHierarchy_0_12$] = material_popup__material_popup.getHierarchy(this[_MaterialPopupComponent_0_8$]);
      }
      return this[__PopupHierarchy_0_12$];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$0] = new material_popup__material_popup$46template.ViewMaterialPopupComponent0.new(this, 0);
      this[_el_0$0] = this[_compView_0$0].rootEl;
      parentRenderNode[$append](this[_el_0$0]);
      this.createAttr(this[_el_0$0], "enforceSpaceConstraints", "");
      this.addShimC(html.HtmlElement._check(this[_el_0$0]));
      this[_appEl_0$0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, this[_el_0$0]);
      this[_MaterialPopupComponent_0_8$] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_popup__material_popup.MaterialPopupComponent, dart.wrapType(material_popup__material_popup.MaterialPopupComponent), dart.fn(() => new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$9 || (const$9 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$10 || (const$10 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0$0].ref, this[_appEl_0$0], new src__core__linker__element_ref.ElementRef.new(this[_el_0$0])), VoidToMaterialPopupComponent())) : new material_popup__material_popup.MaterialPopupComponent.new(src__laminate__popup__popup_hierarchy.PopupHierarchy._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy), this.viewData.parentIndex, null)), material_popup__material_popup.MaterialPopupComponent._check(this.parentView.injectorGet(dart.wrapType(material_popup__material_popup.MaterialPopupComponent), this.viewData.parentIndex, null)), null, src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)), laminate__overlay__zindexer.ZIndexer._check(this.parentView.injectorGet(dart.wrapType(laminate__overlay__zindexer.ZIndexer), this.viewData.parentIndex)), ListOfRelativePosition()._check(this.parentView.injectorGet(const$11 || (const$11 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new("defaultPopupPositions"))), this.viewData.parentIndex)), core.bool._check(this.parentView.injectorGet(const$12 || (const$12 = dart.const(new src__core__di__opaque_token.OpaqueToken.new("overlayRepositionLoop"))), this.viewData.parentIndex)), src__laminate__popup__popup_size_provider.PopupSizeProvider._check(this.parentView.injectorGet(dart.wrapType(src__laminate__popup__popup_size_provider.PopupSizeProvider), this.viewData.parentIndex, null)), this[_compView_0$0].ref, this[_appEl_0$0], new src__core__linker__element_ref.ElementRef.new(this[_el_0$0]));
      let _anchor_1 = src__core__linker__app_view.createViewContainerAnchor();
      this[_appEl_1$0] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1$0], dart.fn(material_menu__menu_popup$46template.viewFactory_MenuPopupComponent1, AppViewAndintToAppViewOfMenuPopupComponent()));
      this[_DeferredContentDirective_1_9] = new content__deferred_content.DeferredContentDirective.new(this[_appEl_1$0], _TemplateRef_1_8, this[_MaterialPopupComponent_0_8$]);
      this[_compView_0$0].create(this[_MaterialPopupComponent_0_8$], [const$13 || (const$13 = dart.constList([], dart.dynamic)), (() => {
          let _ = [this.projectableNodes[$_get](0)];
          _[$addAll]([this[_appEl_1$0]]);
          return _;
        })(), const$14 || (const$14 = dart.constList([], dart.dynamic))]);
      let subscription_0 = this[_MaterialPopupComponent_0_8$].onVisible.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_visibleChange_0_0$)));
      this.init(const$15 || (const$15 = dart.constList([], dart.dynamic)), [subscription_0]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if ((token === dart.wrapType(material_popup__material_popup.MaterialPopupComponent) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware) || token === dart.wrapType(mixins__material_dropdown_base.DropdownHandle)) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_MaterialPopupComponent_0_8$];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_ref.PopupRef) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_PopupRef_0_10$];
      }
      if (token === dart.wrapType(src__laminate__popup__popup_hierarchy.PopupHierarchy) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 1) {
        return this[_PopupHierarchy_0_12$];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_MaterialPopupComponent_0_8$].enforceSpaceConstraints = true;
      }
      let currVal_2 = _ctx.preferredPositions;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this[_MaterialPopupComponent_0_8$].preferredPositions = currVal_2;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.popupSource;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_MaterialPopupComponent_0_8$].source = currVal_3;
        this[_expr_3$0] = currVal_3;
      }
      let currVal_4 = _ctx.isExpanded;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_4$0], currVal_4))) {
        this[_MaterialPopupComponent_0_8$].visible = currVal_4;
        this[_expr_4$0] = currVal_4;
      }
      if (firstCheck) {
        this[_DeferredContentDirective_1_9].preserveDimensions = true;
      }
      this[_appEl_0$0].detectChangesInNestedViews();
      this[_appEl_1$0].detectChangesInNestedViews();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (dart.test(this[_query_MenuItemGroupsComponent_1_0_isDirty])) {
          this.ctx.menuItemGroups = src__core__linker__app_view_utils.firstOrNull(material_menu__menu_item_groups.MenuItemGroupsComponent, this[_appEl_1$0].mapNestedViews(material_menu__menu_item_groups.MenuItemGroupsComponent, material_menu__menu_popup$46template._ViewMenuPopupComponent1, dart.fn(nestedView => JSArrayOfMenuItemGroupsComponent().of([nestedView[_MenuItemGroupsComponent_1_8]]), _ViewMenuPopupComponent1ToListOfMenuItemGroupsComponent())));
          this[_query_MenuItemGroupsComponent_1_0_isDirty] = false;
        }
      }
      let currVal_0 = _ctx.popupClass;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_compView_0$0].updateChildClass(this[_el_0$0], currVal_0);
        this[_expr_0$0] = currVal_0;
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges)) {
        if (firstCheck) {
          this[_MaterialPopupComponent_0_8$].ngAfterViewInit();
        }
      }
    }
    destroyInternal() {
      this[_appEl_0$0].destroyNestedViews();
      this[_appEl_1$0].destroyNestedViews();
      this[_compView_0$0].destroy();
      this[_DeferredContentDirective_1_9].ngOnDestroy();
      this[_MaterialPopupComponent_0_8$].ngOnDestroy();
    }
    [_handle_visibleChange_0_0$]($event) {
      this.ctx.isExpanded = $event;
    }
  };
  (material_menu__menu_popup$46template.ViewMenuPopupComponent0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_appEl_0$0] = null;
    this[_MaterialPopupComponent_0_8$] = null;
    this[__PopupRef_0_10$] = null;
    this[__PopupHierarchy_0_12$] = null;
    this[_appEl_1$0] = null;
    this[_query_MenuItemGroupsComponent_1_0_isDirty] = true;
    this[_DeferredContentDirective_1_9] = null;
    this[_expr_0$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    this[_expr_4$0] = null;
    this[_el_0$0] = null;
    material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckOnce);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("menu-popup"));
    let t = material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType;
    t == null ? material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType(dart.test(src__runtime__optimizations.isDevMode) ? "asset:angular_components/lib/material_menu/menu_popup.dart" : null, src__core__metadata__view.ViewEncapsulation.Emulated, material_menu__menu_popup$46template.styles$MenuPopupComponent) : t;
    this.setupComponentType(material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType);
  }).prototype = material_menu__menu_popup$46template.ViewMenuPopupComponent0.prototype;
  dart.addTypeTests(material_menu__menu_popup$46template.ViewMenuPopupComponent0);
  dart.setMethodSignature(material_menu__menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getMethods(material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_popup.MenuPopupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_visibleChange_0_0$]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(material_menu__menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getGetters(material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_PopupRef_0_10$]: dart.dynamic,
    [_PopupHierarchy_0_12$]: dart.dynamic
  }));
  dart.setFieldSignature(material_menu__menu_popup$46template.ViewMenuPopupComponent0, () => ({
    __proto__: dart.getFields(material_menu__menu_popup$46template.ViewMenuPopupComponent0.__proto__),
    [_compView_0$0]: dart.fieldType(material_popup__material_popup$46template.ViewMaterialPopupComponent0),
    [_appEl_0$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_MaterialPopupComponent_0_8$]: dart.fieldType(material_popup__material_popup.MaterialPopupComponent),
    [__PopupRef_0_10$]: dart.fieldType(dart.dynamic),
    [__PopupHierarchy_0_12$]: dart.fieldType(dart.dynamic),
    [_appEl_1$0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_query_MenuItemGroupsComponent_1_0_isDirty]: dart.fieldType(core.bool),
    [_DeferredContentDirective_1_9]: dart.fieldType(content__deferred_content.DeferredContentDirective),
    [_expr_0$0]: dart.fieldType(core.String),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(dart.dynamic),
    [_expr_4$0]: dart.fieldType(core.bool),
    [_el_0$0]: dart.fieldType(html.Element)
  }));
  dart.defineLazy(material_menu__menu_popup$46template.ViewMenuPopupComponent0, {
    /*material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  material_menu__menu_popup$46template.viewFactory_MenuPopupComponent0 = function(parentView, parentIndex) {
    return new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_popup$46template, {
    /*material_menu__menu_popup$46template._MenuPopupComponentNgFactory*/get _MenuPopupComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfMenuPopupComponent()).new("menu-popup", dart.fn(material_menu__menu_popup$46template.viewFactory_MenuPopupComponentHost0, AppViewAndintToAppViewOfMenuPopupComponent())));
    }
  });
  dart.copyProperties(material_menu__menu_popup$46template, {
    get MenuPopupComponentNgFactory() {
      return material_menu__menu_popup$46template._MenuPopupComponentNgFactory;
    }
  });
  const _MaterialListComponent_0_5$ = Symbol('_MaterialListComponent_0_5');
  const _compView_1$ = Symbol('_compView_1');
  const _AutoFocusDirective_1_5 = Symbol('_AutoFocusDirective_1_5');
  const _MenuRootDirective_1_6 = Symbol('_MenuRootDirective_1_6');
  const _MenuRoot_1_7 = Symbol('_MenuRoot_1_7');
  material_menu__menu_popup$46template._ViewMenuPopupComponent1 = class _ViewMenuPopupComponent1 extends src__core__linker__app_view.AppView$(material_menu__menu_popup.MenuPopupComponent) {
    build() {
      this[_compView_0$0] = new material_list__material_list$46template.ViewMaterialListComponent0.new(this, 0);
      let _el_0 = this[_compView_0$0].rootEl;
      _el_0.className = "item-group-list";
      this.addShimC(_el_0);
      this[_MaterialListComponent_0_5$] = new material_list__material_list.MaterialListComponent.new();
      this[_compView_1$] = new material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0.new(this, 1);
      let _el_1 = this[_compView_1$].rootEl;
      this.createAttr(_el_1, "autoFocus", "");
      this.createAttr(_el_1, "menu-root", "");
      this.createAttr(_el_1, "preventCloseOnPressLeft", "");
      this.addShimC(_el_1);
      this[_AutoFocusDirective_1_5] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(focus__focus.AutoFocusDirective, dart.wrapType(focus__focus.AutoFocusDirective), dart.fn(() => new focus__focus.AutoFocusDirective.new(_el_1, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_menu__menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_PopupRef_0_10$])), VoidToAutoFocusDirective())) : new focus__focus.AutoFocusDirective.new(_el_1, utils__browser__dom_service__dom_service.DomService._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.parentView.viewData.parentIndex)), null, laminate__components__modal__modal.ModalComponent._check(this.parentView.parentView.injectorGet(dart.wrapType(laminate__components__modal__modal.ModalComponent), this.parentView.viewData.parentIndex, null)), src__laminate__popup__popup_ref.PopupRef._check(src__runtime__optimizations.unsafeCast(material_menu__menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_PopupRef_0_10$]));
      this[_MenuRootDirective_1_6] = new material_menu__menu_root.MenuRootDirective.new(src__runtime__optimizations.unsafeCast(material_menu__menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_MaterialPopupComponent_0_8$]);
      this[_MenuRoot_1_7] = this[_MenuRootDirective_1_6];
      this[_MenuItemGroupsComponent_1_8] = dart.test(src__runtime__optimizations.isDevMode) ? src__di__errors.debugInjectorWrap(material_menu__menu_item_groups.MenuItemGroupsComponent, dart.wrapType(material_menu__menu_item_groups.MenuItemGroupsComponent), dart.fn(() => material_menu__menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRoot_1_7], this[_compView_1$].ref, src__runtime__optimizations.unsafeCast(material_menu__menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_MaterialPopupComponent_0_8$], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null))), VoidToMenuItemGroupsComponent())) : material_menu__menu_item_groups.MenuItemGroupsComponent.new(this[_MenuRoot_1_7], this[_compView_1$].ref, src__runtime__optimizations.unsafeCast(material_menu__menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_MaterialPopupComponent_0_8$], utils__id_generator__id_generator.IdGenerator._check(this.parentView.parentView.injectorGet(dart.wrapType(utils__id_generator__id_generator.IdGenerator), this.parentView.viewData.parentIndex, null)));
      this[_compView_1$].create(this[_MenuItemGroupsComponent_1_8], []);
      this[_compView_0$0].create(this[_MaterialListComponent_0_5$], [JSArrayOfHtmlElement().of([_el_1])]);
      this.init0(_el_0);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_menu__menu_root.MenuRoot) && 1 === nodeIndex) {
        return this[_MenuRoot_1_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      let currVal_0 = _ctx.width;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_0$0], currVal_0))) {
        this[_MaterialListComponent_0_5$].width = currVal_0;
        changed = true;
        this[_expr_0$0] = currVal_0;
      }
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_AutoFocusDirective_1_5].autoFocus = true;
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_AutoFocusDirective_1_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MenuItemGroupsComponent_1_8].preventCloseOnPressLeft = "";
        changed = true;
      }
      let currVal_2 = _ctx.menu;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_2$0], currVal_2))) {
        this[_MenuItemGroupsComponent_1_8].menu = currVal_2;
        changed = true;
        this[_expr_2$0] = currVal_2;
      }
      let currVal_3 = _ctx.popupClass;
      if (dart.test(src__core__linker__app_view_utils.checkBinding(this[_expr_3$0], currVal_3))) {
        this[_MenuItemGroupsComponent_1_8].popupClass = currVal_3;
        changed = true;
        this[_expr_3$0] = currVal_3;
      }
      if (changed) {
        this[_compView_1$].markAsCheckOnce();
      }
      if (!dart.test(src__core__linker__app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_MenuItemGroupsComponent_1_8].ngOnInit();
      }
      this[_compView_0$0].detectHostChanges(firstCheck);
      this[_compView_0$0].detectChanges();
      this[_compView_1$].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__runtime__optimizations.unsafeCast(material_menu__menu_popup$46template.ViewMenuPopupComponent0, this.parentView)[_query_MenuItemGroupsComponent_1_0_isDirty] = true;
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
      this[_compView_1$].destroy();
      this[_AutoFocusDirective_1_5].ngOnDestroy();
      this[_MenuItemGroupsComponent_1_8].ngOnDestroy();
    }
  };
  (material_menu__menu_popup$46template._ViewMenuPopupComponent1.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MaterialListComponent_0_5$] = null;
    this[_compView_1$] = null;
    this[_AutoFocusDirective_1_5] = null;
    this[_MenuRootDirective_1_6] = null;
    this[_MenuRoot_1_7] = null;
    this[_MenuItemGroupsComponent_1_8] = null;
    this[_expr_0$0] = null;
    this[_expr_2$0] = null;
    this[_expr_3$0] = null;
    material_menu__menu_popup$46template._ViewMenuPopupComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.embedded, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = material_menu__menu_popup$46template.ViewMenuPopupComponent0._renderType;
  }).prototype = material_menu__menu_popup$46template._ViewMenuPopupComponent1.prototype;
  dart.addTypeTests(material_menu__menu_popup$46template._ViewMenuPopupComponent1);
  dart.setMethodSignature(material_menu__menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getMethods(material_menu__menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_popup.MenuPopupComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_popup$46template._ViewMenuPopupComponent1, () => ({
    __proto__: dart.getFields(material_menu__menu_popup$46template._ViewMenuPopupComponent1.__proto__),
    [_compView_0$0]: dart.fieldType(material_list__material_list$46template.ViewMaterialListComponent0),
    [_MaterialListComponent_0_5$]: dart.fieldType(material_list__material_list.MaterialListComponent),
    [_compView_1$]: dart.fieldType(material_menu__menu_item_groups$46template.ViewMenuItemGroupsComponent0),
    [_AutoFocusDirective_1_5]: dart.fieldType(focus__focus.AutoFocusDirective),
    [_MenuRootDirective_1_6]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuRoot_1_7]: dart.fieldType(material_menu__menu_root.MenuRootDirective),
    [_MenuItemGroupsComponent_1_8]: dart.fieldType(material_menu__menu_item_groups.MenuItemGroupsComponent),
    [_expr_0$0]: dart.fieldType(dart.dynamic),
    [_expr_2$0]: dart.fieldType(dart.dynamic),
    [_expr_3$0]: dart.fieldType(core.String)
  }));
  material_menu__menu_popup$46template.viewFactory_MenuPopupComponent1 = function(parentView, parentIndex) {
    return new material_menu__menu_popup$46template._ViewMenuPopupComponent1.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_popup$46template, {
    /*material_menu__menu_popup$46template.styles$MenuPopupComponentHost*/get styles$MenuPopupComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _MenuPopupComponent_0_5$ = Symbol('_MenuPopupComponent_0_5');
  material_menu__menu_popup$46template._ViewMenuPopupComponentHost0 = class _ViewMenuPopupComponentHost0 extends src__core__linker__app_view.AppView$(material_menu__menu_popup.MenuPopupComponent) {
    build() {
      this[_compView_0$0] = new material_menu__menu_popup$46template.ViewMenuPopupComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_MenuPopupComponent_0_5$] = new material_menu__menu_popup.MenuPopupComponent.new();
      this[_compView_0$0].create(this[_MenuPopupComponent_0_5$], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfMenuPopupComponent()).new(0, this, this.rootEl, this[_MenuPopupComponent_0_5$]);
    }
    detectChangesInternal() {
      let changed = false;
      if (changed) {
        this[_compView_0$0].markAsCheckOnce();
      }
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroy();
    }
  };
  (material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_MenuPopupComponent_0_5$] = null;
    material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.prototype;
  dart.addTypeTests(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0);
  dart.setMethodSignature(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0, () => ({
    __proto__: dart.getMethods(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(material_menu__menu_popup.MenuPopupComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0, () => ({
    __proto__: dart.getFields(material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(material_menu__menu_popup$46template.ViewMenuPopupComponent0),
    [_MenuPopupComponent_0_5$]: dart.fieldType(material_menu__menu_popup.MenuPopupComponent)
  }));
  material_menu__menu_popup$46template.viewFactory_MenuPopupComponentHost0 = function(parentView, parentIndex) {
    return new material_menu__menu_popup$46template._ViewMenuPopupComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(material_menu__menu_popup$46template, {
    /*material_menu__menu_popup$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  material_menu__menu_popup$46template.initReflector = function() {
    if (dart.test(material_menu__menu_popup$46template._visited)) {
      return;
    }
    material_menu__menu_popup$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(material_menu__menu_popup.MenuPopupComponent), material_menu__menu_popup$46template.MenuPopupComponentNgFactory);
    angular$46template.initReflector();
    content__deferred_content$46template.initReflector();
    focus__focus$46template.initReflector();
    laminate__popup__popup$46template.initReflector();
    material_list__material_list$46template.initReflector();
    material_menu__menu_item_groups$46template.initReflector();
    material_menu__menu_popup_wrapper$46template.initReflector();
    material_menu__menu_root$46template.initReflector();
    material_popup__material_popup$46template.initReflector();
    mixins__focusable_mixin$46template.initReflector();
    model__menu__menu$46template.initReflector();
  };
  dart.trackLibraries("packages/angular_components/material_menu/material_menu.template.ddc", {
    "package:angular_components/material_menu/material_menu.template.dart": material_menu__material_menu$46template,
    "package:angular_components/material_menu/menu_item_groups.template.dart": material_menu__menu_item_groups$46template,
    "package:angular_components/material_menu/menu_popup.template.dart": material_menu__menu_popup$46template
  }, '{"version":3,"sourceRoot":"","sources":["material_menu.template.dart","menu_item_groups.template.dart","menu_popup.template.dart"],"names":[],"mappings":"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","file":"material_menu.template.ddc.js"}');
  // Exports:
  return {
    material_menu__material_menu$46template: material_menu__material_menu$46template,
    material_menu__menu_item_groups$46template: material_menu__menu_item_groups$46template,
    material_menu__menu_popup$46template: material_menu__menu_popup$46template
  };
});

//# sourceMappingURL=material_menu.template.ddc.js.map
